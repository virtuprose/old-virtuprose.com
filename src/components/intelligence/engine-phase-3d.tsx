"use client";

import { useEffect, useRef } from "react";

interface EnginePhase3DProps {
  phase: number;
}

/**
 * Placeholder for future Three.js phase visualization
 * Each phase will have a unique 3D representation
 */
export function EnginePhase3D({ phase }: EnginePhase3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative h-full min-h-[300px] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-teal-500/5 backdrop-blur-sm dark:from-white/5 dark:to-teal-500/5"
    >
      {/* Placeholder content */}
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5">
            <span className="text-2xl font-bold text-gray-400 dark:text-gray-500">{phase}</span>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-500">Phase {phase} Visualization</p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-600">Coming soon</p>
        </div>
      </div>
    </div>
  );
}

