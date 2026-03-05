import Anthropic from "@anthropic-ai/sdk";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { config, projects } from "@/db/schema";
import { Message } from "@/types/chat";

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

let cachedPrompt: string | null = null;
let cachedProjects: { id: number; name: string; keywords: string[] }[] | null =
    null;

const getSystemPrompt = async (): Promise<string> => {
    if (cachedPrompt) return cachedPrompt;

    try {
        const rows = await db
            .select({ value: config.value })
            .from(config)
            .where(eq(config.key, "chat_system_prompt"))
            .limit(1);
        cachedPrompt = rows[0]?.value ?? "";
    } catch (error) {
        console.error("Failed to fetch system prompt:", error);
        return "";
    }

    return cachedPrompt ?? "";
}

const getProjectList = async (): Promise<
    { id: number; name: string; keywords: string[] }[]
> => {
    if (cachedProjects) return cachedProjects;

    try {
        const rows = await db
            .select({ id: projects.id, name: projects.name, keywords: projects.keywords })
            .from(projects);
        cachedProjects = rows.map((p) => ({
            id: p.id,
            name: p.name,
            keywords: p.keywords
                ? p.keywords.split(",").map((k: string) => k.trim().toLowerCase())
                : [p.name.toLowerCase()],
        }));
    } catch (error) {
        console.error("Failed to fetch projects:", error);
        return [];
    }

    return cachedProjects;
}

const getProjectDetails = async (projectId: number): Promise<string | null> => {
    try {
        const rows = await db
            .select({ name: projects.name, details: projects.details })
            .from(projects)
            .where(eq(projects.id, projectId))
            .limit(1);
        if (!rows[0]) return null;
        return `\n\n## Detailed info about ${rows[0].name}:\n${rows[0].details}`;
    } catch {
        return null;
    }
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

        const projectList = await getProjectList();
        const mentionedProjectIds = findMentionedProjects(messages, projectList);

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
