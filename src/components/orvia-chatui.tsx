"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
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
            {/* Launcher Button - Glassmorphism Style */}
            {!isOpen && (
                <button
                    type="button"
                    className="orvia-launcher"
                    onClick={() => setIsOpen(true)}
                    aria-label="Chat with Orvia"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="orvia-launcher-icon"
                    >
                        <path
                            d="M21 11.5C21 16.1944 16.9706 20 12 20C9.6545 20 7.5165 19.149 5.922 17.75L2.66 18.91C2.46 18.98 2.24 18.8 2.3 18.59L3.18 15.4C2.454 14.25 2 12.92 2 11.5C2 6.80558 6.02944 3 12 3C17.9706 3 21 6.80558 21 11.5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <circle cx="8" cy="11.5" r="1" fill="currentColor" />
                        <circle cx="12" cy="11.5" r="1" fill="currentColor" />
                        <circle cx="16" cy="11.5" r="1" fill="currentColor" />
                    </svg>
                    <span className="orvia-launcher-text">Ask Orvia</span>
                </button>
            )}

            {/* Chat Panel */}
            {isOpen && <OrviaKodeeChat onClose={() => setIsOpen(false)} />}
        </>
    );
}
