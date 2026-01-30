"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./orvia-chat-kodee.css";

// Dynamically import the chat component to avoid SSR issues
const OrviaKodeeChat = dynamic(
    () => import("./orvia-chat-kodee").then((mod) => mod.OrviaKodeeChat),
    { ssr: false, loading: () => null }
);

export function OrviaChatUI() {
    const [isOpen, setIsOpen] = useState(false);
    const [initialMessage, setInitialMessage] = useState("");

    useEffect(() => {
        const handleOpenChat = (event: CustomEvent<{ message?: string }>) => {
            if (event.detail?.message) {
                setInitialMessage(event.detail.message);
            }
            setIsOpen(true);
        };

        window.addEventListener('orvia-open-chat', handleOpenChat as EventListener);
        return () => window.removeEventListener('orvia-open-chat', handleOpenChat as EventListener);
    }, []);

    return (
        <>
            {/* Launcher Button - New Floating Design */}
            {!isOpen && (
                <div className="orvia-float-btn-container">
                    <button
                        className="orvia-float-btn"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open Chat"
                    >
                        {/* Glow */}
                        <div className="orvia-btn-glow" />
                        {/* Glass Background */}
                        <div className="orvia-btn-glass" />
                        {/* Gradient Border */}
                        <div className="orvia-btn-border" />
                        {/* Highlight */}
                        <div className="orvia-btn-highlight" />
                        {/* Orvia Logo */}
                        <div className="orvia-btn-icon-wrapper">
                            <Image
                                src="/orvia/chat-02.svg"
                                alt="Orvia"
                                width={28}
                                height={28}
                                className="orvia-btn-icon"
                                priority
                            />
                        </div>
                    </button>
                </div>
            )}

            {/* Chat Panel */}
            {isOpen && (
                <OrviaKodeeChat
                    onClose={() => setIsOpen(false)}
                    initialMessage={initialMessage}
                />
            )}
        </>
    );
}
