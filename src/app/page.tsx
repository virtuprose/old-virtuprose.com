"use client";

import React, { useState } from "react";

import { RadiantPromptInput } from "@/components/ui/radiant-prompt-input";
import RetroGrid from "@/components/ui/retro-grid";
import { ClientLogos } from "@/components/client-logos";
import { ServicesSection } from "@/components/services-section";
import { SelectedWorkSection } from "@/components/selected-work-section";
import { ProcessSection } from "@/components/process-section";
import { Star } from "lucide-react";

// ============================================
// MAIN PAGE
// ============================================

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
            <Hero />
            <ClientLogos />
            <ServicesSection />
            {/* <SelectedWorkSection /> */}
            <ProcessSection />
        </div>
    );
}

// ============================================
// HERO SECTION
// ============================================

function Hero() {
    const [, setQuery] = useState<string | null>(null);

    const handleSubmit = (value: string) => {
        setQuery(value);
        // Dispatch event to open Orvia chat with the message
        window.dispatchEvent(new CustomEvent("orvia-open-chat", { detail: { message: value } }));
    };

    return (
        <section
            className="
        relative w-full
        min-h-screen min-h-[100svh] min-h-[100dvh]
        flex flex-col
        bg-[var(--bg)]
        overflow-hidden
      "
        >


            {/* Background Effects */}
            <HeroBackground />



            {/* Main Content - Vertically Centered */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 py-12 md:py-16">
                <div className="w-full max-w-[1080px] mx-auto flex flex-col items-center gap-10 md:gap-12">

                    {/* Hero Text */}
                    <HeroText />

                    {/* CTA Input Bar */}
                    <div className="w-full max-w-2xl">
                        <RadiantPromptInput
                            onSubmit={handleSubmit}
                            placeholder="Talk to Zaid's AI Assistant..."
                        />
                        <p className="text-center text-xs text-[var(--text-secondary)]/70 mt-3 tracking-wide">
                            Ask about building, growth, or automation — or{" "}
                            <button className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors">
                                book a call in seconds
                            </button>
                        </p>
                    </div>

                    {/* Google Rating Badge */}
                    <GoogleRatingBadge />
                </div>
            </div>
        </section>
    );
}

// ============================================
// SUBCOMPONENTS
// ============================================

function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <RetroGrid className="opacity-100" />
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[120px]" />
        </div>
    );
}



function HeroText() {
    return (
        <div className="text-center space-y-5 md:space-y-6">
            <h1 className="text-[2.5rem] leading-[1.1] md:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.02em]">
                <span className="block text-[var(--text-primary)]">
                    We Deliver Intelligent Growth Engines
                </span>
                <span className="block mt-1 md:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#27ECEC] to-[#5AA5CC]">
                    for Ambitious Brands
                </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-[var(--text-secondary)] max-w-[640px] mx-auto leading-relaxed font-light">
                We design and build fast, scalable websites and custom web applications, then accelerate growth with GEO/SEO, paid media, and AI-powered automation.
            </p>
        </div>
    );
}

function GoogleRatingBadge() {
    const starArray = Array.from({ length: 5 });

    return (
        <div className="w-full flex justify-center">
            <div
                className="
          group relative isolate inline-flex w-full max-w-xl items-center gap-4 md:gap-5
          overflow-hidden rounded-2xl border border-black/5 dark:border-white/10
          bg-white/70 dark:bg-white/5
          px-5 py-4 md:px-6 md:py-5
          shadow-[0_18px_60px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
          transition-all duration-300
          hover:shadow-[0_22px_80px_rgba(0,0,0,0.28)]
          hover:-translate-y-0.5
        "
            >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-white/10 to-white/0 opacity-70 dark:from-white/8 dark:via-white/4" />
                <div className="pointer-events-none absolute inset-px rounded-[18px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_36%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.12),transparent_32%)] opacity-80" />

                <div className="relative flex items-center gap-3 md:gap-4">
                    <div className="relative h-11 w-11 md:h-12 md:w-12">
                        <div className="absolute inset-0 rounded-full bg-[conic-gradient(#4285F4_0deg,#4285F4_90deg,#34A853_90deg,#34A853_180deg,#FBBC05_180deg,#FBBC05_270deg,#EA4335_270deg,#EA4335_360deg)] shadow-[0_10px_28px_rgba(0,0,0,0.22)]" />
                        <div className="absolute inset-[2.5px] rounded-full bg-[var(--bg)] flex items-center justify-center text-[12px] font-semibold tracking-tight text-[var(--text-primary)] dark:text-white">
                            G
                        </div>
                    </div>

                    <div className="space-y-0.5">
                        <div className="flex items-center gap-2 text-[var(--text-primary)] text-[15px] md:text-base font-semibold tracking-tight">
                            <Star className="h-[18px] w-[18px] fill-amber-400 text-amber-400 drop-shadow-[0_6px_18px_rgba(252,211,77,0.28)]" strokeWidth={1.5} />
                            <span>Rated 4.7 Star on Google</span>
                        </div>
                        <p className="text-xs md:text-sm text-[var(--text-secondary)]">
                            Rated by 10 real clients
                        </p>
                    </div>
                </div>

                <div className="relative hidden sm:flex items-center gap-1.5 ml-auto pr-0.5">
                    {starArray.map((_, index) => (
                        <Star
                            key={index}
                            className="h-3.5 w-3.5 fill-amber-300/90 text-amber-300/90"
                            strokeWidth={1.4}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
