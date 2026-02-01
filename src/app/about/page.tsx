"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
    {
        title: "Who We Are",
        content: [
            "We are a digital growth company built for businesses that want real outcomes, not vanity metrics. Our team combines strategy, design, engineering, and performance marketing to build systems that attract, convert, and scale customers consistently.",
            "We do not sell tools.\nWe build growth infrastructure that works across websites, apps, AI, and marketing channels as one connected engine.",
            "Simple principle: if it does not drive revenue, efficiency, or measurable growth, we do not do it."
        ],
        image: "/assets/images/about/who-we-are.png",
        align: "right", // Image on right, text on left
    },
    {
        title: "What We Do Differently",
        content: [
            "Most agencies deliver pieces. We deliver complete systems.",
            "We design and build high-performance websites, custom web applications, AI-powered workflows, and digital marketing engines that are engineered for scale from day one.",
            "Our approach is:",
            "• Strategy first, execution second\n• Performance measured in data, not opinions\n• Built to last, not patched together",
            "Every project is designed to reduce manual work, improve customer experience, and turn digital presence into a predictable business asset."
        ],
        image: "/assets/images/about/what-we-do.png",
        align: "left", // Image on left, text on right
    },
    {
        title: "Why Clients Choose Us",
        content: [
            "Clients work with us because we think like partners, not vendors.",
            "We understand business, technology, and growth deeply enough to make the right trade-offs, move fast without breaking systems, and build solutions that continue delivering value long after launch.",
            "When clients work with us, they gain:",
            "• Clear direction instead of confusion\n• Scalable systems instead of temporary fixes\n• Long-term growth instead of short-term wins",
            "We exist to help ambitious businesses grow with clarity, confidence, and control."
        ],
        image: "/assets/images/about/why-choose-us.png",
        align: "right",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[var(--bg)] text-[var(--foreground)] overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
                <div className="container mx-auto max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-[var(--foreground)]">
                            Digital Growth.<br />Engineered for Outcomes.
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--foreground)]/70 max-w-3xl mx-auto leading-relaxed">
                            We don't just build websites or run ads. We build connected digital systems that drive predictable business growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="space-y-24 md:space-y-32 pb-32">
                {sections.map((section, index) => (
                    <section key={index} className="px-6">
                        <div className={`container mx-auto max-w-6xl flex flex-col ${section.align === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}>

                            {/* Text Content */}
                            <motion.div
                                className="w-full lg:w-1/2 space-y-6"
                                initial={{ opacity: 0, x: section.align === "left" ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">{section.title}</h2>
                                <div className="space-y-6 text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed">
                                    {section.content.map((paragraph, i) => (
                                        <p key={i} className="whitespace-pre-line">{paragraph}</p>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Image Visual */}
                            <motion.div
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, scale: 0.9, rotate: section.align === "left" ? -5 : 5 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <div className="relative aspect-square w-full max-w-[600px] mx-auto rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--primary)]/10 to-transparent p-1 border border-[var(--border)]/20 backdrop-blur-3xl">
                                    <Image
                                        src={section.image}
                                        alt={section.title}
                                        fill
                                        className="object-cover z-0 hover:scale-105 transition-transform duration-700 ease-in-out"
                                        sizes="(max-w-768px) 100vw, 50vw"
                                        priority={index === 0}
                                        quality={100}
                                    />
                                </div>
                            </motion.div>

                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
