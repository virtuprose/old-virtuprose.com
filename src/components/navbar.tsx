"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
    Menu, X, ChevronDown, ArrowRight, Home, Info,
    Briefcase, BookOpen, Mail, Sparkles, LayoutGrid, Zap
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

// ============================================
// DATA & CONFIG
// ============================================

const NAV_LINKS = [
    { label: "Home", href: "/", icon: Home },
    { label: "About Us", href: "/about", icon: Info },
    {
        label: "What We Do",
        href: "/services",
        icon: Briefcase,
        type: "mega",
        items: [
            {
                title: "Web Design & Development",
                desc: "Premium, fast, and scalable websites.",
                href: "/services/web-design",
                icon: Sparkles,
            },
            {
                title: "Growth & SEO",
                desc: "Rank higher and convert more traffic.",
                href: "/services/seo",
                icon: Zap,
            },
            {
                title: "AI Automation",
                desc: "Custom agents to automate your workflow.",
                href: "/services/ai-automation",
                icon: LayoutGrid,
            },
        ],
    },
    { label: "Blog", href: "/blog", icon: BookOpen },
    { label: "Contact", href: "/contact", icon: Mail },
];

// ============================================
// MAIN COMPONENT
// ============================================

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "fixed top-4 inset-x-0 z-[100] transition-all duration-500",
                scrolled ? "top-2" : "top-4"
            )}
        >
            <div className="max-w-[1200px] mx-auto px-4">
                <div
                    className={cn(
                        "relative h-16 md:h-18 px-6 flex items-center justify-between rounded-full border transition-all duration-500",
                        "bg-[var(--bg)]/70 backdrop-blur-2xl border-[var(--border)]/40 shadow-lg",
                        scrolled ? "shadow-black/10 dark:shadow-white/5" : "shadow-transparent"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="relative z-10 flex items-center transition-transform hover:scale-[1.02] active:scale-[0.98]">
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

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-2">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label} className="list-none">
                                {link.type === "mega" ? (
                                    <DesktopMegaMenu link={link} />
                                ) : (
                                    <DesktopNavLink link={link} />
                                )}
                            </li>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <ThemeToggle />
                        </div>

                        <Link
                            href="/pricing"
                            className={cn(
                                "group relative inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium text-sm transition-all duration-300",
                                "bg-[var(--text-primary)] text-[var(--bg)] hover:opacity-90 active:scale-[0.97] shadow-lg shadow-black/10"
                            )}
                        >
                            <span>Pricing</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>

                        {/* Mobile Toggle */}
                        <MobileMenuToggle />
                    </div>
                </div>
            </div>
        </motion.header>
    );
}

// ============================================
// SUBCOMPONENTS
// ============================================

function DesktopNavLink({ link }: { link: any }) {
    const pathname = usePathname();
    const isActive = pathname === link.href;
    const Icon = link.icon;

    return (
        <Link
            href={link.href}
            className={cn(
                "relative flex items-center gap-2 px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300",
                isActive
                    ? "bg-[var(--text-primary)] text-[var(--bg)] shadow-md"
                    : "text-black dark:text-white hover:bg-[var(--bg-secondary)]"
            )}
        >
            <Icon size={16} className={cn("transition-transform duration-300", isActive ? "scale-110" : "group-hover:scale-110")} />
            {link.label}
        </Link>
    );
}

function DesktopMegaMenu({ link }: { link: any }) {
    const [hovered, setHovered] = useState(false);
    const pathname = usePathname();
    const isActive = pathname.startsWith(link.href);
    const Icon = link.icon;

    return (
        <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <button
                className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300",
                    isActive || hovered
                        ? "text-[var(--text-primary)] bg-[var(--bg-secondary)]"
                        : "text-black dark:text-white hover:bg-[var(--bg-secondary)]"
                )}
            >
                <Icon size={16} />
                {link.label}
                <ChevronDown
                    className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        hovered ? "rotate-180" : ""
                    )}
                />
            </button>

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                        <div className="w-[480px] p-2 bg-[var(--bg)]/95 backdrop-blur-xl border border-[var(--border)]/40 rounded-3xl shadow-2xl overflow-hidden">
                            <div className="grid grid-cols-1 gap-1">
                                {link.items.map((item: any) => {
                                    const ItemIcon = item.icon;
                                    return (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-[var(--bg-secondary)] transition-all duration-200"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] group-hover:bg-[var(--bg)] flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110 shadow-sm">
                                                <ItemIcon size={20} className="text-[var(--text-primary)]" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-[15px] font-semibold text-[var(--text-primary)] flex items-center gap-2">
                                                    {item.title}
                                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--accent)]" />
                                                </div>
                                                <p className="text-[13px] text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function MobileMenuToggle() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 -mr-2 text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-secondary)] rounded-full"
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 top-0 z-[110] lg:hidden"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/40 backdrop-blur-md"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[var(--bg)] shadow-2xl flex flex-col pt-20"
                        >
                            <div className="absolute top-6 right-6">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="px-8 flex-1 overflow-y-auto pb-10">
                                {NAV_LINKS.map((link, index) => {
                                    const Icon = link.icon;
                                    return (
                                        <motion.div
                                            key={link.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="py-4 border-b border-[var(--border)]/30 last:border-0"
                                        >
                                            {link.type === 'mega' ? (
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-3 text-lg font-semibold text-black dark:text-white">
                                                        <Icon size={20} />
                                                        {link.label}
                                                    </div>
                                                    <div className="pl-8 space-y-4">
                                                        {link.items.map((item: any) => (
                                                            <Link
                                                                key={item.title}
                                                                href={item.href}
                                                                className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                                                                onClick={() => setIsOpen(false)}
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className="flex items-center gap-3 text-lg font-semibold text-black dark:text-white hover:text-[var(--accent)] transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <Icon size={20} />
                                                    {link.label}
                                                </Link>
                                            )}
                                        </motion.div>
                                    );
                                })}

                                <div className="mt-8 pt-8 border-t border-[var(--border)]flex items-center justify-between">
                                    <span className="text-sm font-medium text-[var(--text-secondary)]">Appearance</span>
                                    <ThemeToggle />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
