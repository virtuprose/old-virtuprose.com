"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar, CreditCard, Briefcase } from "lucide-react";

const secondaryTiles = [
  {
    title: "Never lose a lead again",
    text: "Orvia answers every inquiry in seconds on WhatsApp, web, and voice.",
    icon: MessageSquare,
  },
  {
    title: "Your calendar fills itself",
    text: "From first message to confirmed booking, Orvia handles the entire flow.",
    icon: Calendar,
  },
  {
    title: "Payments collected without chasing",
    text: "It sends links, reminders, and confirmations automatically.",
    icon: CreditCard,
  },
  {
    title: "One agent. Any industry.",
    text: "Clinics, salons, real estate, education, and services.",
    icon: Briefcase,
  },
];

export function OutcomeWall() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <p className="text-xs font-medium tracking-[0.2em] text-center text-gray-500 dark:text-gray-300 uppercase mb-8">
          What Orvia actually does for your business
        </p>

        {/* Primary Tile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="rounded-3xl p-6 md:p-10 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-50/80 to-blue-50/50 dark:from-white/5 dark:to-teal-500/5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
        >
          <span className="inline-block rounded-full border border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-gray-600 dark:text-gray-300 backdrop-blur-sm mb-6">
            MEET ORVIA
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mt-2">
            Orvia runs the conversations that grow your business.
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-3 max-w-2xl">
            It replies instantly, books appointments, follows up, and collects payments while your team sleeps.
          </p>
        </motion.div>

        {/* Secondary Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {secondaryTiles.map((tile, index) => {
            const IconComponent = tile.icon;
            return (
              <motion.div
                key={tile.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="rounded-2xl p-5 md:p-6 bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-50/60 to-blue-50/40 dark:from-white/5 dark:to-teal-500/5 hover:bg-white/90 dark:hover:bg-white/10 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#E5FBFF] dark:bg-[#27e7ec]/20 text-[#32C8D9]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                  {tile.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {tile.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

