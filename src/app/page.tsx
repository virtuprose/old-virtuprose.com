"use client";

import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] text-[var(--text-primary)]">
            {/* Theme Toggle - Top Right */}
            <div className="absolute top-6 right-6">
                <ThemeToggle />
            </div>

            {/* Coming Soon Content */}
            <div className="text-center space-y-6 px-6">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    Muhammad Zaid
                </h1>
                <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-xl mx-auto">
                    Strategic Automation Partner
                </p>
                <div className="pt-8">
                    <p className="text-sm text-[var(--text-secondary)]">
                        New website coming soon. Click the chat icon to connect with me.
                    </p>
                </div>
            </div>

            {/* The Orvia Chat Widget is rendered globally via layout.tsx */}
        </div>
    );
}
