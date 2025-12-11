"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import "./orvia-chat-kodee.css";
import Image from "next/image";
import { ChevronDown, Send, ArrowUpRight } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const WELCOME_MESSAGE = "Hi, you're speaking with Orvia AI Agent. I'll help you with whatever you need! What brings you here today?";

const QUICK_REPLIES = [
    "Learn about ORVIA services",
    "Get a demo",
    "Pricing information",
    "Talk to sales team",
];

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

interface OrviaKodeeChatProps {
    onClose: () => void;
}

export function OrviaKodeeChat({ onClose }: OrviaKodeeChatProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showQuickReplies, setShowQuickReplies] = useState(true);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Auto-scroll to bottom
    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
        }
    }, [inputValue]);

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

    const sendMessage = useCallback(async (text: string) => {
        if (!text.trim() || isLoading) return;

        // Hide quick replies after first message
        setShowQuickReplies(false);

        // Add user message
        const userMessage: Message = {
            id: `user-${Date.now()}`,
            text: text.trim(),
            sender: "user",
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);

        // Reset textarea height
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }

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
                        { role: "user", content: text.trim() },
                    ],
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                if (response.status === 429) {
                    throw new Error(`Too many requests. Please wait ${errorData.retryAfter || 60} seconds.`);
                }
                throw new Error(errorData.error || "Failed to reach Orvia");
            }

            const data = await response.json();
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
            textareaRef.current?.focus();
        }
    }, [messages, isLoading]);

    const handleSubmit = useCallback(() => {
        sendMessage(inputValue);
    }, [inputValue, sendMessage]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    }, [handleSubmit]);

    const handleQuickReply = useCallback((reply: string) => {
        sendMessage(reply);
    }, [sendMessage]);

    return (
        <div className="kodee-chat">
            {/* Header */}
            <header className="kodee-header">
                <span className="kodee-header-title">Orvia</span>
                <button
                    onClick={onClose}
                    className="kodee-header-btn"
                    aria-label="Minimize chat"
                    type="button"
                >
                    <ChevronDown size={20} />
                </button>
            </header>

            {/* Messages Area */}
            <div className="kodee-messages">
                {/* Welcome Screen (when no messages) */}
                {messages.length === 0 && (
                    <div className="kodee-welcome">
                        <div className="kodee-welcome-icon">
                            <Image
                                src="/orvia/chat-02.svg"
                                alt="Orvia"
                                width={48}
                                height={48}
                            />
                        </div>
                        <h2 className="kodee-welcome-title">Hello 👋</h2>
                        <p className="kodee-welcome-subtitle">How can I help you today?</p>
                    </div>
                )}

                {/* Quick Replies */}
                {showQuickReplies && messages.length === 0 && (
                    <div className="kodee-quick-replies">
                        {QUICK_REPLIES.map((reply) => (
                            <button
                                key={reply}
                                onClick={() => handleQuickReply(reply)}
                                className="kodee-quick-reply"
                                type="button"
                            >
                                <ArrowUpRight size={16} />
                                {reply}
                            </button>
                        ))}
                    </div>
                )}

                {/* Messages */}
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`kodee-message ${msg.sender === "user" ? "kodee-message--user" : "kodee-message--bot"}`}
                    >
                        {msg.sender === "bot" && (
                            <div className="kodee-message-avatar">
                                <Image src="/orvia/chat-02.svg" alt="Orvia" width={24} height={24} />
                            </div>
                        )}
                        <div className="kodee-message-content">
                            {msg.sender === "bot" && <span className="kodee-message-name">Orvia</span>}
                            <div className="kodee-message-bubble">
                                {msg.sender === "bot" ? (
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            a: ({ ...props }) => <a target="_blank" rel="noopener noreferrer" {...props} />
                                        }}
                                    >
                                        {msg.text}
                                    </ReactMarkdown>
                                ) : (
                                    msg.text
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Typing Indicator */}
                {isLoading && (
                    <div className="kodee-message kodee-message--bot">
                        <div className="kodee-message-avatar">
                            <Image src="/orvia/chat-02.svg" alt="Orvia" width={24} height={24} />
                        </div>
                        <div className="kodee-message-content">
                            <span className="kodee-message-name">Orvia</span>
                            <div className="kodee-typing">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="kodee-input-area">
                <div className="kodee-input-wrapper">
                    <textarea
                        ref={textareaRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask Orvia anything..."
                        className="kodee-textarea"
                        rows={1}
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleSubmit}
                        disabled={!inputValue.trim() || isLoading}
                        className="kodee-send-btn"
                        aria-label="Send message"
                        type="button"
                    >
                        <Send size={18} />
                    </button>
                </div>
                <p className="kodee-disclaimer">Orvia can make mistakes. Double-check replies.</p>
            </div>
        </div>
    );
}
