"use client";

import { Message } from "@/types/chat";

type ChatMessageProps = {
    message: Message;
    isStreaming?: boolean;
};

const ChatMessage = ({ message, isStreaming }: ChatMessageProps) => {
    const isUser = message.role === "user";

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
            <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    isUser
                        ? "bg-linear-to-r from-electric-violet-600 to-electric-violet-500 text-white"
                        : "bg-void-800 text-zinc-200"
                }`}
            >
                <p className="text-sm whitespace-pre-wrap">
                    {message.content}
                    {isStreaming && (
                        <span className="inline-block w-1.5 h-4 ml-0.5 bg-electric-violet-400 animate-pulse rounded-sm align-middle" />
                    )}
                </p>
            </div>
        </div>
    );
};

export default ChatMessage;
