"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Calendar, CreditCard, Briefcase } from "lucide-react";

const secondaryTiles = [
  {
    title: "Meet the Orvia Control Center",
    text: "See every lead, every booking, and every result in one place. No reports. No chasing. You always know what's happening.",
    icon: LayoutDashboard,
  },
  {
    title: "Booking, handled automatically",
    text: "Appointments booked, confirmed, and followed up without manual work. No expensive booking tools required.",
    icon: Calendar,
  },
  {
    title: "Payments collected. Automatically.",
    text: "It sends links, reminders, and confirmations so you don't have to follow up.",
    icon: CreditCard,
  },
  {
    title: "Built for how your business actually runs",
    text: "Orvia adapts to your workflow, your schedule, and your customers. You don't have to change how you operate.",
    icon: Briefcase,
  },
];

export function OutcomeWall() {
  return (
    <section className="py-20 max-sm:py-12">
      <div className="max-w-6xl mx-auto px-6 max-sm:px-0">
        {/* Section Label */}
        <p className="text-xs font-medium tracking-[0.2em] text-center text-gray-500 dark:text-gray-300 uppercase mb-8 max-sm:mb-4 max-sm:px-4">
          What Orvia actually does for your business
        </p>

        {/* Primary Tile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="rounded-3xl p-6 md:p-10 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-50/80 to-blue-50/50 dark:from-white/5 dark:to-teal-500/5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] max-sm:rounded-xl max-sm:mx-4 max-sm:p-5"
        >
          <span className="inline-block rounded-full border border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-gray-600 dark:text-gray-300 backdrop-blur-sm mb-6 max-sm:mb-3">
            MEET ORVIA
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mt-2 max-sm:text-xl max-sm:mt-1">
            Your business doesn't sleep. Neither does Orvia.
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-3 max-w-2xl max-sm:mt-2 max-sm:text-sm">
            Every inquiry answered. Every booking handled. Every payment followed through. Without relying on your team to be online.
          </p>
        </motion.div>

        {/* Secondary Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-sm:mt-4 max-sm:gap-3 max-sm:px-4">
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
                className="rounded-2xl p-5 md:p-6 bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-50/60 to-blue-50/40 dark:from-white/5 dark:to-teal-500/5 hover:bg-white/90 dark:hover:bg-white/10 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] max-sm:rounded-xl max-sm:p-4"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#E5FBFF] dark:bg-[#27e7ec]/20 text-[#32C8D9] max-sm:w-8 max-sm:h-8">
                  <IconComponent className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
                </div>
                <h3 className="mt-4 text-base md:text-lg font-semibold text-gray-900 dark:text-white max-sm:mt-3 max-sm:text-sm">
                  {tile.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-sm:mt-1 max-sm:text-xs max-sm:leading-snug">
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

