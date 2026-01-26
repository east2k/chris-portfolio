"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { Message } from "@/types/chat";
import ChatModal from "./ChatModal";

const OPEN_CHAT_EVENT = "openChat";

const ChatButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        window.addEventListener(OPEN_CHAT_EVENT, handleOpenChat);
        return () => window.removeEventListener(OPEN_CHAT_EVENT, handleOpenChat);
    }, []);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input.trim() };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            if (!response.ok) throw new Error("Failed to send message");

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();

            if (!reader) throw new Error("No response body");

            const assistantMessage: Message = { role: "assistant", content: "" };
            setMessages([...newMessages, assistantMessage]);

            let fullContent = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                fullContent += chunk;

                setMessages((prev) => {
                    const updated = [...prev];
                    updated[updated.length - 1] = {
                        role: "assistant",
                        content: fullContent,
                    };
                    return updated;
                });
            }
        } catch (error) {
            console.error("Chat error:", error);
            const errorMessage: Message = {
                role: "assistant",
                content: "Sorry, something went wrong. Please try again.",
            };
            setMessages([...newMessages, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="cursor-pointer fixed bottom-6 right-6 p-4 bg-linear-to-r from-electric-violet-600 to-charm-500 rounded-full shadow-lg shadow-electric-violet-500/30 text-white z-40 hover:shadow-electric-violet-500/50 transition-shadow"
                aria-label="Open chat"
            >
                <MessageCircle size={24} />
            </motion.button>

            <ChatModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                messages={messages}
                input={input}
                setInput={setInput}
                onSend={handleSend}
                isLoading={isLoading}
            />
        </>
    );
};

export const openChat = () => {
    if (typeof window !== "undefined") {
        window.dispatchEvent(new Event(OPEN_CHAT_EVENT));
    }
};

export default ChatButton;
