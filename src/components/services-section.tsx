"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
    {
        title: "Website Design & Development",
        desc: "High-performance websites designed and built for speed, clarity, and conversions—engineered to scale as your business grows.",
        image: "/assets/services/website.png",
        id: "01",
    },
    {
        title: "Digital Marketing",
        desc: "AI-driven search, paid media, and performance marketing that attracts the right audience and turns demand into revenue.",
        image: "/assets/services/marketing.png",
        id: "02",
    },
    {
        title: "Mobile Apps",
        desc: "Custom iOS and Android applications built for usability, reliability, and seamless integration with your digital ecosystem.",
        image: "/assets/services/mobile-apps.png",
        id: "03",
    },
    {
        title: "AI Automation",
        desc: "Intelligent AI agents and automations that capture leads, book meetings, support customers, and streamline operations.",
        image: "/assets/services/ai-automation.png",
        id: "04",
    },
];

export function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-20 md:py-28 bg-[var(--bg)]">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    {/* Left: Image Preview */}
                    <div className="w-full lg:w-[45%]">
                        <div className="relative aspect-square w-full max-w-[400px] rounded-3xl overflow-hidden bg-[var(--bg-secondary)] shadow-xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={SERVICES[activeIndex].image}
                                        alt={SERVICES[activeIndex].title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Description */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.35, delay: 0.1 }}
                                    className="absolute bottom-0 left-0 right-0 p-6"
                                >
                                    <p className="text-white/90 text-sm md:text-base font-light leading-relaxed">
                                        {SERVICES[activeIndex].desc}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right: Service List */}
                    <div className="w-full lg:w-[55%]">
                        {SERVICES.map((service, index) => (
                            <div
                                key={service.title}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={cn(
                                    "group py-6 border-b border-[var(--border)] cursor-pointer transition-all duration-300 ease-out",
                                    activeIndex === index ? "opacity-100" : "opacity-40 hover:opacity-80"
                                )}
                            >
                                <div className="flex items-center justify-between">
                                    <h3
                                        className={cn(
                                            "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-colors duration-300",
                                            activeIndex === index ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                                        )}
                                    >
                                        {service.title}
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#27ECEC] font-mono text-xs md:text-sm">{`{${service.id}}`}</span>
                                        <div
                                            className={cn(
                                                "w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300",
                                                activeIndex === index
                                                    ? "bg-[var(--text-primary)] text-[var(--bg)] border-transparent"
                                                    : "border-[var(--border)] text-[var(--text-secondary)] group-hover:border-[var(--text-secondary)]"
                                            )}
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
