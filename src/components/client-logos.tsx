import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CLIENTS = [
    "/assets/clients/CLIENT-LOGO-MAIN-FILE-01-3.webp",
    "/assets/clients/CLIENT-LOGO-MAIN-FILE-02-3.webp",
    "/assets/clients/CLIENT-LOGO-MAIN-FILE-03-3.webp",
    "/assets/clients/CLIENT-LOGO-MAIN-FILE-04.webp",
    "/assets/clients/CLIENT-LOGO-MAIN-FILE-05-3.webp",
    "/assets/clients/CLIENT-LOGO-MAIN-FILE-06-3.webp",
    "/assets/clients/CLIENT-LOGO-MAIN-FILE-07-3.webp",
    "/assets/clients/CLIENT-LOGO-MAIN-FILE-08.webp",
    "/assets/clients/CLIENT-LOGO-MAIN-FILE-09-3.webp",
    "/assets/clients/CLIENT-LOGO-MAIN-FILE-10-3.webp",
    "/assets/clients/CLIENT-LOGO-MAIN-FILE-11-3.webp",
    "/assets/clients/CLIENT-LOGO-MAIN-FILE-12-3.webp",
    "/assets/clients/CLIENT-LOGO-MAIN-FILE-14-3.webp",
    "/assets/clients/CLIENT-LOGO-MAIN-FILE-15-3.webp",
    "/assets/clients/Type-12-2048x499-1.webp",
];

export function ClientLogos() {
    return (
        <section className="py-12 md:py-20 bg-[var(--bg)] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-12 text-center">
                <p className="text-sm md:text-base text-[var(--text-secondary)] font-medium tracking-tight font-sans opacity-80">
                    Trusted by the best enterprise teams
                </p>
            </div>

            <div className="relative flex w-full overflow-hidden mask-linear-fade">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-[var(--bg)] to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-[var(--bg)] to-transparent" />

                {/* Marquee Container */}
                <div className="flex select-none">
                    <MarqueeGroup />
                    <MarqueeGroup />
                </div>
            </div>
        </section>
    );
}

function MarqueeGroup() {
    return (
        <motion.div
            className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {CLIENTS.map((logo, index) => (
                <div key={index} className="relative w-32 h-12 md:w-40 md:h-16 flex-shrink-0 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <Image
                        src={logo}
                        alt={`Client logo ${index + 1}`}
                        fill
                        className="object-contain brightness-0 dark:invert"
                    />
                </div>
            ))}
        </motion.div>
    );
}
