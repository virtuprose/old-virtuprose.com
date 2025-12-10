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

    return (
        <>
            {/* Launcher Button - Kodee Style */}
            {!isOpen && (
                <button
                    type="button"
                    className="orvia-launcher"
                    onClick={() => setIsOpen(true)}
                    aria-label="Chat with Orvia"
                >
                    <Image
                        src="/orvia/chat-02.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="orvia-launcher-icon"
                    />
                    <span className="orvia-launcher-text">Ask Orvia</span>
                </button>
            )}

            {/* Chat Panel */}
            {isOpen && <OrviaKodeeChat onClose={() => setIsOpen(false)} />}
        </>
    );
}
