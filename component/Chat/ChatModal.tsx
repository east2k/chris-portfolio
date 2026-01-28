"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send } from "lucide-react";
import { Message } from "@/types/chat";
import ChatMessage from "./ChatMessage";

type ChatModalProps = {
    isOpen: boolean;
    onClose: () => void;
    messages: Message[];
    input: string;
    setInput: (value: string) => void;
    onSend: () => void;
    isLoading: boolean;
};

const ChatModal = ({
    isOpen,
    onClose,
    messages,
    input,
    setInput,
    onSend,
    isLoading,
}: ChatModalProps) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
        }
    }, [isOpen]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey && !isLoading) {
            e.preventDefault();
            onSend();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed inset-0 md:inset-auto md:bottom-4 md:right-4 md:w-100 md:h-150 md:max-w-[calc(100vw-2rem)] md:max-h-[calc(100vh-2rem)] bg-void-900 border-0 md:border border-void-700 rounded-none md:rounded-2xl shadow-2xl shadow-electric-violet-500/10 z-50 flex flex-col overflow-hidden"
                    >
                        <div className="flex items-center justify-between px-4 py-3 border-b border-void-700">
                            <div>
                                <h3 className="font-semibold text-white">Chat with my Clone</h3>
                                <p className="text-xs text-zinc-400">Get to know me a little!</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="cursor-pointer p-1.5 rounded-lg hover:bg-void-800 text-zinc-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4">
                            {messages.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center text-zinc-500">
                                    <p className="text-sm">
                                        Hey! I&apos;m Christian&apos;s AI clone.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    {messages.map((msg, index) => {
                                        const isLastMessage = index === messages.length - 1;
                                        const isStreamingMessage =
                                            isLoading && isLastMessage && msg.role === "assistant";

                                        return (
                                            <ChatMessage
                                                key={index}
                                                message={msg}
                                                isStreaming={isStreamingMessage}
                                            />
                                        );
                                    })}
                                    <div ref={messagesEndRef} />
                                </>
                            )}
                        </div>

                        <div className="p-4 border-t border-void-700">
                            <div className="flex gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Type a message..."
                                    disabled={isLoading}
                                    className="flex-1 bg-void-800 border border-void-600 rounded-xl px-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-electric-violet-500 transition-colors disabled:opacity-50"
                                />
                                <button
                                    onClick={onSend}
                                    disabled={isLoading || !input.trim()}
                                    className="cursor-pointer p-2.5 bg-linear-to-r from-electric-violet-600 to-electric-violet-500 rounded-xl text-white hover:from-electric-violet-500 hover:to-electric-violet-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ChatModal;
