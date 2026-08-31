"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeartPulse, Home, Phone, Pill, type LucideIcon } from "lucide-react";
import { orderMessage, whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

interface Action {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  external?: boolean;
}

const actions: Action[] = [
  {
    title: "Order Medicine",
    description: "Fast medicine ordering and home delivery.",
    icon: Pill,
    href: whatsappHref(orderMessage),
    external: true,
  },
  {
    title: "Home Delivery",
    description: "Get medicines delivered to your doorstep.",
    icon: Home,
    href: "#how-it-works",
  },
  {
    title: "Health Check",
    description: "BP, sugar, SpO₂, temperature and basic measurements.",
    icon: HeartPulse,
    href: "#services",
  },
  {
    title: "Contact Us",
    description: "Talk to our pharmacy team.",
    icon: Phone,
    href: "#contact",
  },
];

function ActionCard({ action }: { action: Action }) {
  const reduced = useReducedMotion();
  const Icon = action.icon;

  return (
    <motion.a
      href={action.href}
      {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileHover={reduced ? undefined : { y: -6, rotateX: 3, rotateY: -2 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      style={{ transformPerspective: 900 }}
      className="group block h-full rounded-2xl border border-mint-200 bg-white/80 p-5 shadow-soft backdrop-blur-md transition-shadow hover:shadow-lift"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-100 transition-colors group-hover:bg-leaf-500">
        <Icon className="h-5 w-5 text-leaf-600 transition-colors group-hover:text-white" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-[1.02rem] font-bold text-pine-800">{action.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{action.description}</p>
    </motion.a>
  );
}

/** Four shortcut cards overlapping the hero's bottom edge. */
export function QuickActions() {
  return (
    <section aria-label="Quick actions" className="relative z-10">
      <Container>
        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((action) => (
            <RevealItem key={action.title} className="h-full">
              <ActionCard action={action} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
