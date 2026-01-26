import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";
import { Message } from "@/types/chat";

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
);

let cachedPrompt: string | null = null;
let cachedProjects: { id: number; name: string; keywords: string[] }[] | null =
    null;

const getSystemPrompt = async (): Promise<string> => {
    if (cachedPrompt) return cachedPrompt;

    const { data, error } = await supabase
        .from("config")
        .select("value")
        .eq("key", "chat_system_prompt")
        .single();

    if (error || !data) {
        console.error("Failed to fetch system prompt:", error);
        return "";
    }

    cachedPrompt = data.value;
    return cachedPrompt ?? "";
}

const getProjectList = async (): Promise<
    { id: number; name: string; keywords: string[] }[]
> => {
    if (cachedProjects) return cachedProjects;

    const { data, error } = await supabase
        .from("projects")
        .select("id, name, keywords");

    if (error || !data) {
        console.error("Failed to fetch projects:", error);
        return [];
    }

    cachedProjects = data.map((p) => ({
        id: p.id,
        name: p.name,
        keywords: p.keywords
            ? p.keywords.split(",").map((k: string) => k.trim().toLowerCase())
            : [p.name.toLowerCase()],
    }));

    return cachedProjects;
}

const getProjectDetails = async (projectId: number): Promise<string | null> => {
    const { data, error } = await supabase
        .from("projects")
        .select("name, details")
        .eq("id", projectId)
        .single();

    if (error || !data) {
        return null;
    }

    return `\n\n## Detailed info about ${data.name}:\n${data.details}`;
}

const findMentionedProjects = (
    messages: Message[],
    projects: { id: number; name: string; keywords: string[] }[]
): number[] => {
    const conversationText = messages
        .map((m) => m.content.toLowerCase())
        .join(" ");

    const mentionedIds: number[] = [];

    for (const project of projects) {
        const isNameMentioned = conversationText.includes(
            project.name.toLowerCase()
        );
        const isKeywordMentioned = project.keywords.some((keyword) =>
            conversationText.includes(keyword)
        );

        if (isNameMentioned || isKeywordMentioned) {
            mentionedIds.push(project.id);
        }
    }

    return mentionedIds;
}

export async function POST(request: Request) {
    try {
        const { messages } = (await request.json()) as { messages: Message[] };

        if (!messages || !Array.isArray(messages)) {
            return Response.json(
                { error: "Messages array is required" },
                { status: 400 }
            );
        }

        let systemPrompt = await getSystemPrompt();

        const projects = await getProjectList();
        const mentionedProjectIds = findMentionedProjects(messages, projects);

        for (const projectId of mentionedProjectIds) {
            const details = await getProjectDetails(projectId);
            if (details) {
                systemPrompt += details;
            }
        }

        const stream = await anthropic.messages.stream({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1024,
            system: systemPrompt,
            messages: messages.map((msg) => ({
                role: msg.role,
                content: msg.content,
            })),
        });

        const encoder = new TextEncoder();

        const readableStream = new ReadableStream({
            async start(controller) {
                for await (const event of stream) {
                    if (
                        event.type === "content_block_delta" &&
                        event.delta.type === "text_delta"
                    ) {
                        controller.enqueue(encoder.encode(event.delta.text));
                    }
                }
                controller.close();
            },
        });

        return new Response(readableStream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Transfer-Encoding": "chunked",
            },
        });
    } catch (error) {
        console.error("Chat API error:", error);
        return Response.json(
            { error: "Failed to get response from AI" },
            { status: 500 }
        );
    }
}
