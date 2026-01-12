"use client";

import { motion } from "framer-motion";

interface Specification {
  id: string;
  label: string;
}

interface IntelligencePhaseSectionProps {
  phase: number;
  headline: string;
  description: string;
  specifications: Specification[];
}

export function IntelligencePhaseSection({
  phase,
  headline,
  description,
  specifications,
}: IntelligencePhaseSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="space-y-6 border-t border-[var(--border)]/70 py-8"
    >
      <div className="space-y-4">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          Phase {phase}
        </span>
        <h3 className="text-xl font-semibold leading-tight text-[var(--text-primary)] md:text-2xl lg:text-3xl">
          {headline}
        </h3>
        <p className="max-w-3xl text-base leading-relaxed text-[var(--text-secondary)]">
          {description}
        </p>
      </div>

      {/* Specifications Table */}
      <div className="mt-6 space-y-1 border-t border-[var(--border)]/50 pt-6">
        {specifications.map((spec) => (
          <div
            key={spec.id}
            className="flex items-start gap-4 border-b border-dotted border-[var(--border)]/30 py-3 text-sm"
          >
            <span className="font-mono text-xs font-medium text-gray-400 dark:text-gray-500">
              {spec.id}
            </span>
            <span className="flex-1 text-[var(--text-secondary)]">{spec.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

