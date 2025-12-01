'use client';

import { PillBase } from "@/components/ui/3d-adaptive-navigation-bar";

/**
 * Demo file - Default export is required
 * This is what users and moderators see in preview
 */
export default function Demo() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="global-noise" />
      <div className="flex min-h-screen items-center justify-center px-4 py-16">
        <div className="rounded-[32px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
          <PillBase />
        </div>
      </div>
    </div>
  );
}
