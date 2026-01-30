"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Twitter, Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const FOOTER_LINKS = [
    {
        title: "Product",
        links: [
            { label: "Features", href: "#" },
            { label: "Integrations", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Case Studies", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Customers", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Community", href: "#" },
            { label: "Help Center", href: "#" },
            { label: "API Docs", href: "#" },
            { label: "Status", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookie Policy", href: "#" },
        ],
    },
];

const SOCIAL_LINKS = [
    { icon: Instagram, href: "https://www.instagram.com/virtuprose", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/virtuprose", label: "X" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/virtuprose/", label: "LinkedIn" },
];

export function SiteFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[var(--bg-secondary)] border-t border-[var(--border)] overflow-hidden">
            <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20 mx-auto">

                {/* Top Section: CTA */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
                            Ready to automate your growth?
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] font-light max-w-lg mb-8">
                            Let's build the systems that will scale your business to the next level.
                            Schedule a consultation today.
                        </p>

                        <Link
                            href="#"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[var(--text-primary)] text-[var(--bg)] font-medium text-base transition-transform hover:scale-105 active:scale-95"
                        >
                            Start Project
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                    </motion.div>

                    {/* Abstract Shape or Branding Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-3xl rotate-12" />
                        <div className="absolute inset-0 w-32 h-32 rounded-2xl border border-[var(--border)] rotate-3" />
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent opacity-50 mb-16" />

                {/* Middle Section: Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8 mb-20">
                    {/* Branding Column */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="h-7 md:h-8 w-auto flex items-center">
                                <img
                                    src="/assets/branding/light logo.svg"
                                    alt="Virtuprose"
                                    className="h-full w-auto object-contain dark:hidden"
                                />
                                <img
                                    src="/assets/branding/dark-logo.png"
                                    alt="Virtuprose"
                                    className="h-full w-auto object-contain hidden dark:block"
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-2 max-w-xs">
                            Intelligent growth engines for ambitious brands.
                        </p>
                    </div>

                    {/* Navigation Columns */}
                    {FOOTER_LINKS.map((section, idx) => (
                        <div key={section.title} className="flex flex-col gap-4">
                            <h4 className="text-sm font-semibold text-[var(--text-primary)] tracking-wide">
                                {section.title}
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {section.links.map((link, linkIdx) => (
                                    <motion.li
                                        key={link.label}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + idx * 0.1 + linkIdx * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1 group"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-[var(--border)]">
                    <p className="text-sm text-[var(--text-secondary)]">
                        © {currentYear} Virtuprose. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        {SOCIAL_LINKS.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 hover:bg-[var(--border)]/50 rounded-full"
                                aria-label={social.label}
                            >
                                <social.icon className="h-4 w-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
