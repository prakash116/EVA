import type { Variants } from "framer-motion";

/** Shared entrance: gentle fade-up used across all sections. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.65, 0.32, 0.95] },
  },
};

/** Parent container that staggers its children's fadeUp. */
export const stagger = (delay = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay, delayChildren: 0.1 } },
});

/** Standard once-only viewport trigger. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
