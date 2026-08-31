"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Thin emerald reading-progress bar pinned to the top edge. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-leaf-500"
      style={{ scaleX: reduced ? scrollYProgress : smooth }}
    />
  );
}
