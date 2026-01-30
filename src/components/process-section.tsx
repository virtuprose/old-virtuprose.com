"use client";

import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const STAGES = [
    {
        id: "01",
        title: "Understand",
        desc: "Deep discovery to uncover goals, constraints, and opportunities.",
        icon: "/assets/icons/3d/understand.png",
    },
    {
        id: "02",
        title: "Design the System",
        desc: "Strategic architecture that aligns every piece toward the outcome.",
        icon: "/assets/icons/3d/design.png",
    },
    {
        id: "03",
        title: "Build & Ship",
        desc: "Precision execution — fast, focused, and production-ready.",
        icon: "/assets/icons/3d/build.png",
    },
    {
        id: "04",
        title: "Optimize & Automate",
        desc: "Continuous refinement and intelligent automation that compounds.",
        icon: "/assets/icons/3d/optimize.png",
    },
];

export function ProcessSection() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [systemActivated, setSystemActivated] = useState(false);

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => setSystemActivated(true), 2000);
            return () => clearTimeout(timer);
        }
    }, [isInView]);

    return (
        <section className="py-24 md:py-32 bg-[var(--bg)] overflow-hidden">
            <div ref={containerRef} className="container mx-auto px-6 max-w-6xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
                        How We Operate
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
                        A continuous system, not a linear process.
                    </p>
                </motion.div>

                {/* System Diagram */}
                <div className="relative">

                    {/* Desktop: Horizontal Flow */}
                    <div className="hidden lg:flex items-center justify-between gap-4 relative">
                        {/* Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                            {[0, 1, 2].map((i) => (
                                <motion.line
                                    key={i}
                                    x1={`${12.5 + i * 25}%`}
                                    y1="50%"
                                    x2={`${37.5 + i * 25}%`}
                                    y2="50%"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-[var(--border)]"
                                    initial={{ pathLength: 0 }}
                                    animate={isInView ? { pathLength: 1 } : {}}
                                    transition={{ duration: 0.8, delay: 0.5 + i * 0.2, ease: "easeInOut" }}
                                />
                            ))}
                            {/* Pulse dots */}
                            {isInView && [0, 1, 2].map((i) => (
                                <Pulse key={`pulse-${i}`} index={i} />
                            ))}
                        </svg>

                        {STAGES.map((stage, index) => (
                            <StageNode
                                key={stage.id}
                                stage={stage}
                                index={index}
                                isInView={isInView}
                                isActive={activeIndex === index}
                                isHovered={activeIndex !== null}
                                onHover={() => setActiveIndex(index)}
                                onLeave={() => setActiveIndex(null)}
                            />
                        ))}
                    </div>

                    {/* Tablet: Staggered Arc */}
                    <div className="hidden md:flex lg:hidden flex-wrap justify-center gap-8 relative">
                        {STAGES.map((stage, index) => (
                            <motion.div
                                key={stage.id}
                                style={{ marginTop: index % 2 === 1 ? "2rem" : "0" }}
                                className="w-[45%]"
                            >
                                <StageNode
                                    stage={stage}
                                    index={index}
                                    isInView={isInView}
                                    isActive={activeIndex === index}
                                    isHovered={activeIndex !== null}
                                    onHover={() => setActiveIndex(index)}
                                    onLeave={() => setActiveIndex(null)}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile: Vertical Stack */}
                    <div className="flex md:hidden flex-col gap-6 relative">
                        {STAGES.map((stage, index) => (
                            <div key={stage.id} className="relative">
                                <StageNode
                                    stage={stage}
                                    index={index}
                                    isInView={isInView}
                                    isActive={activeIndex === index}
                                    isHovered={activeIndex !== null}
                                    onHover={() => setActiveIndex(index)}
                                    onLeave={() => setActiveIndex(null)}
                                    vertical
                                />
                                {index < STAGES.length - 1 && (
                                    <motion.div
                                        className="absolute left-1/2 -translate-x-1/2 w-px h-6 bg-[var(--border)] -bottom-6"
                                        initial={{ scaleY: 0 }}
                                        animate={isInView ? { scaleY: 1 } : {}}
                                        transition={{ duration: 0.4, delay: 0.8 + index * 0.15 }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Outcome Anchor */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={systemActivated ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mt-16 md:mt-24 text-lg md:text-xl text-[var(--text-secondary)] italic"
                >
                    Built to scale without breaking.
                </motion.p>

            </div>
        </section>
    );
}

// --- Stage Node ---
function StageNode({
    stage,
    index,
    isInView,
    isActive,
    isHovered,
    onHover,
    onLeave,
    vertical = false,
}: {
    stage: typeof STAGES[0];
    index: number;
    isInView: boolean;
    isActive: boolean;
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
    vertical?: boolean;
}) {
    // Holistic: don't over-mute, keep all stages "alive"
    const brightness = isActive ? 1 : isHovered ? 0.7 : 0.85;

    return (
        <motion.div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: brightness, scale: isActive ? 1.02 : 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "relative p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-pointer group overflow-hidden",
                vertical ? "w-full" : "flex-1",
                isActive
                    ? "bg-[var(--bg-secondary)] border-[var(--accent)] shadow-lg shadow-[var(--accent)]/10"
                    : "bg-[var(--bg)] border-[var(--border)] hover:bg-[var(--bg-secondary)]"
            )}
        >
            {/* 3D Icon Container */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 mb-6 mx-auto transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                <Image
                    src={stage.icon}
                    alt={stage.title}
                    fill
                    className="object-contain drop-shadow-xl"
                    priority
                />
            </div>

            {/* ID Badge */}
            <span className="absolute top-4 right-4 md:right-auto md:left-6 md:-top-3 px-2 py-0.5 text-xs font-mono bg-[var(--bg)] text-[#27ECEC] border border-[var(--border)] rounded-full">
                {stage.id}
            </span>

            <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2 transition-colors duration-300 text-center">
                {stage.title}
            </h3>

            {/* Description - always visible but emphasized on hover */}
            <p
                className={cn(
                    "text-sm md:text-base leading-relaxed transition-all duration-500 text-center",
                    isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                )}
            >
                {stage.desc}
            </p>
        </motion.div>
    );
}

// --- Organic Pulse Animation ---
function Pulse({ index }: { index: number }) {
    // 6–8 second cycle with slight randomness
    const duration = 6 + Math.random() * 2;
    const delay = index * 2 + Math.random();

    return (
        <motion.circle
            cx="0"
            cy="50%"
            r="4"
            fill="#27ECEC"
            initial={{ cx: `${12.5 + index * 25}%`, opacity: 0 }}
            animate={{
                cx: [`${12.5 + index * 25}%`, `${37.5 + index * 25}%`],
                opacity: [0, 1, 1, 0],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
                ease: "linear",
            }}
            style={{ filter: "blur(1px)" }}
        />
    );
}
