"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost";

const variantCls: Record<Variant, string> = {
  primary:
    "bg-pine-800 text-white shadow-soft hover:bg-pine-700 active:bg-pine-900",
  secondary:
    "border border-mint-200 bg-white text-pine-800 hover:border-leaf-400 hover:bg-mint-50",
  whatsapp:
    "bg-leaf-500 text-white shadow-soft hover:bg-leaf-600",
  ghost:
    "text-pine-800 hover:bg-mint-100",
};

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

/** Animated anchor styled as a button. All CTAs on the site are links. */
export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
  ariaLabel,
}: ButtonLinkProps) {
  const reduced = useReducedMotion();

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileHover={reduced ? undefined : { scale: 1.03 }}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors ${variantCls[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
