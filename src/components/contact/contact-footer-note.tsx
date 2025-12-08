"use client";

import { motion } from "framer-motion";

export function ContactFooterNote() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-12 md:py-16 text-center"
    >
      <div className="space-y-4 text-[var(--text-subheading)] dark:text-gray-400 text-gray-600">
        <p className="text-base">
          After you reach out, we review your business needs and Orvia implementation goals within 24 hours.
        </p>
        <p className="text-base">
          If there's a fit, we propose next steps and a clear plan for implementing Orvia in your business.
        </p>
        <p className="text-base">
          If not, we still leave you with practical recommendations for AI automation and revenue growth.
        </p>
      </div>
    </motion.section>
  );
}

