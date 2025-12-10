"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import "./orvia-chatui.css";
import Image from "next/image";
import { X, Send } from "lucide-react";

const welcomeMessage = "Hi, you're speaking with Orvia AI Agent. I'll help you with whatever you need! What brings you here today?";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

interface OrviaChatUIClientProps {
    onClose: () => void;
}

export function OrviaChatUIClient({ onClose }: OrviaChatUIClientProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            text: welcomeMessage,
            sender: "bot",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Scroll to bottom when new messages arrive
    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    // Lock body scroll on mobile
    useEffect(() => {
        if (typeof window !== "undefined") {
            const isMobile = window.innerWidth <= 640;
            if (isMobile) {
                const scrollY = window.scrollY;
                document.body.style.overflow = "hidden";
                document.body.style.position = "fixed";
                document.body.style.width = "100%";
                document.body.style.top = `-${scrollY}px`;
            }
        }

        return () => {
            if (typeof window !== "undefined") {
                const scrollY = document.body.style.top;
                document.body.style.overflow = "";
                document.body.style.position = "";
                document.body.style.width = "";
                document.body.style.top = "";
                if (scrollY) {
                    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
                }
            }
        };
    }, []);

    const handleSend = useCallback(async () => {
        const text = inputValue.trim();
        if (!text || isLoading) return;

        // Add user message
        const userMessage: Message = {
            id: `user-${Date.now()}`,
            text,
            sender: "user",
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/orvia", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [
                        ...messages.map((m) => ({
                            role: m.sender === "user" ? "user" : "assistant",
                            content: m.text,
                        })),
                        { role: "user", content: text },
                    ],
                }),
            });

            if (!response.ok) {
                const errorData = (await response.json().catch(() => ({}))) as {
                    error?: string;
                    retryAfter?: number;
                };

                if (response.status === 429) {
                    throw new Error(
                        `Too many requests. Please wait ${errorData.retryAfter || 60} seconds.`
                    );
                }
                throw new Error(errorData.error || "Failed to reach Orvia");
            }

            const data = (await response.json()) as { reply?: string };
            const botMessage: Message = {
                id: `bot-${Date.now()}`,
                text: data.reply || "I'm here, but something went wrong. Could you try again?",
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("[orvia-chat-error]", error);
            const errorMessage: Message = {
                id: `error-${Date.now()}`,
                text: error instanceof Error ? error.message : "Connection failed. Please try again.",
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
            inputRef.current?.focus();
        }
    }, [inputValue, messages, isLoading]);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        },
        [handleSend]
    );

    return (
        <div className="orvia-chat-container">
            {/* Header */}
            <header className="orvia-chat-header">
                <div className="orvia-header-left">
                    <div className="orvia-avatar">
                        <Image src="/orvia/chat-02.svg" alt="Orvia" width={32} height={32} />
                    </div>
                    <div className="orvia-header-text">
                        <h2 className="orvia-title">Orvia</h2>
                        <p className="orvia-subtitle">
                            <span className="orvia-online-dot" />
                            AI Assistant • Online
                        </p>
                    </div>
                </div>
                <button onClick={onClose} className="orvia-close-btn" aria-label="Close chat" type="button">
                    <X size={20} strokeWidth={2} />
                </button>
            </header>

            {/* Messages */}
            <div className="orvia-messages">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`orvia-message ${msg.sender === "user" ? "orvia-message--user" : "orvia-message--bot"}`}
                    >
                        {msg.sender === "bot" && (
                            <div className="orvia-message-avatar">
                                <Image src="/orvia/chat-02.svg" alt="Orvia" width={28} height={28} />
                            </div>
                        )}
                        <div className="orvia-message-bubble">
                            {msg.text}
                        </div>
                    </div>
                ))}

                {/* Typing indicator */}
                {isLoading && (
                    <div className="orvia-message orvia-message--bot">
                        <div className="orvia-message-avatar">
                            <Image src="/orvia/chat-02.svg" alt="Orvia" width={28} height={28} />
                        </div>
                        <div className="orvia-typing">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="orvia-input-area">
                <div className="orvia-input-wrapper">
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                        className="orvia-input"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!inputValue.trim() || isLoading}
                        className="orvia-send-btn"
                        aria-label="Send message"
                        type="button"
                    >
                        <Send size={18} strokeWidth={2.5} />
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="orvia-chat-footer">
                <span className="orvia-powered-text">Powered by</span>
                <Image src="/orvia/chat-01.svg" alt="ORVIA" width={60} height={15} className="orvia-powered-logo" />
            </footer>
        </div>
    );
}
