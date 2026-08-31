"use client";

import { motion, useReducedMotion } from "framer-motion";

/** One heartbeat: flat — small bump — sharp spike — flat. */
const BEAT =
  "M0 12 H28 L34 12 38 8 42 12 H56 L62 12 66 2 70 22 74 12 H120";

interface PulseLineProps {
  className?: string;
  /** Stroke color token; defaults to the brand emerald. */
  stroke?: string;
  strokeWidth?: number;
  /** Draw once when scrolled into view (default), or loop forever. */
  loop?: boolean;
}

/**
 * The EVA pulse thread — the site's signature motif. An ECG line that
 * draws itself when it enters the viewport. Decorative only.
 */
export function PulseLine({
  className,
  stroke = "var(--color-leaf-500)",
  strokeWidth = 2,
  loop = false,
}: PulseLineProps) {
  const reduced = useReducedMotion();

  return (
    <svg
      viewBox="0 0 120 24"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="none"
    >
      <motion.path
        d={BEAT}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={
          reduced
            ? { pathLength: 1 }
            : loop
              ? { pathLength: [0, 1, 1], opacity: [1, 1, 0.4] }
              : { pathLength: 1 }
        }
        viewport={{ once: !loop, margin: "-40px" }}
        transition={
          loop
            ? { duration: 2.6, repeat: Infinity, repeatDelay: 0.6, ease: "linear" }
            : { duration: 1.1, ease: "easeInOut" }
        }
      />
    </svg>
  );
}

/** Tiny static heartbeat tick used beside eyebrow labels. */
export function PulseTick({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0 7 H8 L11 7 13 3 16 11 19 7 H32"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
