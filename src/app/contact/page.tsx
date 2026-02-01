"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const INQUIRY_TYPES = [
    { value: "", label: "Select inquiry type" },
    { value: "General", label: "General Inquiry" },
    { value: "Sales", label: "Sales" },
    { value: "Partnership", label: "Partnership" },
    { value: "Support", label: "Support" },
];

// Inner component that uses useSearchParams (must be wrapped in Suspense)
function ContactForm() {
    const searchParams = useSearchParams();
    const status = searchParams.get("status");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

    useEffect(() => {
        if (status === "success") setFormStatus("success");
        if (status === "error") setFormStatus("error");
    }, [status]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus("idle");

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            if (response.redirected) {
                window.location.href = response.url;
                return;
            }

            if (!response.ok) {
                throw new Error("Submission failed");
            }

            setFormStatus("success");
            (e.target as HTMLFormElement).reset();
        } catch {
            setFormStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            className="container mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-8 md:p-12 shadow-sm">

                {/* Success Message */}
                {formStatus === "success" && (
                    <div className="mb-8 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="font-medium text-green-600 dark:text-green-400">Message sent successfully.</p>
                            <p className="text-sm text-[var(--foreground)]/60 mt-1">We'll respond within 12 hours.</p>
                        </div>
                    </div>
                )}

                {/* Error Message */}
                {formStatus === "error" && (
                    <div className="mb-8 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="font-medium text-red-600 dark:text-red-400">Something went wrong.</p>
                            <p className="text-sm text-[var(--foreground)]/60 mt-1">Please try again or email us directly.</p>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            autoComplete="name"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)]",
                                "focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)]",
                                "transition-colors duration-200 placeholder:text-[var(--foreground)]/40"
                            )}
                            placeholder="John Smith"
                        />
                    </div>

                    {/* Work Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            autoComplete="email"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)]",
                                "focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)]",
                                "transition-colors duration-200 placeholder:text-[var(--foreground)]/40"
                            )}
                            placeholder="john@company.com"
                        />
                    </div>

                    {/* Company Name (Optional) */}
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            autoComplete="organization"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)]",
                                "focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)]",
                                "transition-colors duration-200 placeholder:text-[var(--foreground)]/40"
                            )}
                            placeholder="Acme Inc."
                        />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                        <label htmlFor="project" className="block text-sm font-medium mb-2">
                            Inquiry Type <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="project"
                            name="project"
                            required
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)]",
                                "focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)]",
                                "transition-colors duration-200 text-[var(--foreground)]"
                            )}
                        >
                            {INQUIRY_TYPES.map((type) => (
                                <option key={type.value} value={type.value} disabled={type.value === ""}>
                                    {type.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] resize-none",
                                "focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)]",
                                "transition-colors duration-200 placeholder:text-[var(--foreground)]/40"
                            )}
                            placeholder="Tell us about your project or question..."
                        />
                    </div>

                    {/* Hidden Fields */}
                    <input type="hidden" name="source" value="Contact Page" />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                            "w-full py-4 px-6 rounded-lg font-medium text-white",
                            "bg-[var(--primary)] hover:bg-[var(--primary)]/90",
                            "focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:ring-offset-2 focus:ring-offset-[var(--bg)]",
                            "transition-all duration-200",
                            "disabled:opacity-60 disabled:cursor-not-allowed",
                            "flex items-center justify-center gap-2"
                        )}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            "Submit Request"
                        )}
                    </button>

                    {/* Privacy Note */}
                    <p className="text-xs text-center text-[var(--foreground)]/50 pt-2">
                        By submitting, you agree to our privacy policy. We'll never share your information.
                    </p>
                </form>
            </div>

            {/* Contact Info */}
            <div className="mt-12 text-center space-y-2">
                <p className="text-sm text-[var(--foreground)]/50">
                    Prefer email? Reach us at{" "}
                    <a
                        href="mailto:info@virtuprose.com"
                        className="text-[var(--primary)] hover:underline"
                    >
                        info@virtuprose.com
                    </a>
                </p>
                <p className="text-xs text-[var(--foreground)]/40">
                    Remote-first · Global Reach
                </p>
            </div>
        </motion.div>
    );
}

// Loading fallback for the form
function ContactFormSkeleton() {
    return (
        <div className="container mx-auto max-w-2xl">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-8 md:p-12 shadow-sm animate-pulse">
                <div className="space-y-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i}>
                            <div className="h-4 w-24 bg-[var(--border)] rounded mb-2" />
                            <div className="h-12 bg-[var(--border)] rounded-lg" />
                        </div>
                    ))}
                    <div className="h-14 bg-[var(--primary)]/30 rounded-lg" />
                </div>
            </div>
        </div>
    );
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[var(--bg)] text-[var(--foreground)]">
            {/* Hero Section */}
            <section className="pt-32 pb-12 md:pt-44 md:pb-16 px-6">
                <div className="container mx-auto max-w-3xl text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-[var(--foreground)]/60 max-w-xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Have a project in mind or a question? We'd love to hear from you.
                    </motion.p>
                </div>
            </section>

            {/* Form Section - Wrapped in Suspense */}
            <section className="pb-32 px-6">
                <Suspense fallback={<ContactFormSkeleton />}>
                    <ContactForm />
                </Suspense>
            </section>
        </main>
    );
}
