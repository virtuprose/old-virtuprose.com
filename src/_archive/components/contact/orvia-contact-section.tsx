"use client";

import { motion } from "framer-motion";
import { OrviaDemoWidget } from "@/components/orvia-demo-widget";
import Image from "next/image";

export function OrviaContactSection() {
  return (
    <section id="orvia-contact" className="container px-6 py-16 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-subheading)]">
            Option 1 · Instant conversation
          </p>

          <h2 className="text-3xl font-semibold md:text-4xl text-[var(--text-heading)]">
            Chat with Orvia, our AI revenue assistant
          </h2>

          <p className="text-lg text-[var(--text-subheading)]">
            Orvia will collect your project details, answer questions about our services, and help determine if we're a good fit. You'll get instant responses and can book a call directly through the chat.
          </p>

          <ul className="space-y-3 text-[var(--text-subheading)]">
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1">✓</span>
              <span>Get instant answers about pricing, timelines, and capabilities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1">✓</span>
              <span>Share your project requirements and goals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1">✓</span>
              <span>Book a strategy call or demo directly through the chat</span>
            </li>
          </ul>
        </motion.div>

        {/* Right Column - Glass Chat Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Subtle animated background glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)]/20 to-[var(--accent-hover)]/20 rounded-3xl blur-xl opacity-50 animate-pulse" />

          <div className="relative rounded-3xl backdrop-blur-xl p-4 md:p-6 dark:bg-white/5 dark:border-white/10 dark:text-white bg-white/80 border-gray-300 text-gray-900 border">
            {/* Orvia Header */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[var(--border)]/50">
              <div className="relative w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                <Image
                  src="/assets/orvia-logo-black.svg"
                  alt="Orvia"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </div>
              <div>
                <p className="font-semibold text-[var(--text-heading)]">Orvia</p>
                <p className="text-xs text-[var(--text-subheading)]">AI Assistant</p>
              </div>
            </div>

            {/* Widget Container */}
            <div className="h-[420px] rounded-2xl overflow-hidden bg-[var(--bg)] dark:bg-[var(--bg-secondary)]">
              <OrviaDemoWidget />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

