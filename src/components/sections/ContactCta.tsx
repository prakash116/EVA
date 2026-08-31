"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Navigation, Phone } from "lucide-react";
import { orderMessage, site, whatsappHref } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PulseLine } from "@/components/ui/PulseLine";
import { Reveal } from "@/components/ui/Reveal";

/* Deterministic particle positions — no Math.random, so SSR and
   client renders always match. */
const particles = [
  { left: "8%", top: "22%", size: 8, delay: 0 },
  { left: "18%", top: "70%", size: 5, delay: 1.2 },
  { left: "30%", top: "35%", size: 6, delay: 2.4 },
  { left: "44%", top: "80%", size: 9, delay: 0.6 },
  { left: "58%", top: "18%", size: 5, delay: 1.8 },
  { left: "70%", top: "62%", size: 7, delay: 0.3 },
  { left: "82%", top: "30%", size: 6, delay: 2.1 },
  { left: "92%", top: "72%", size: 8, delay: 1.5 },
  { left: "50%", top: "50%", size: 4, delay: 2.8 },
];

export function ContactCta() {
  const reduced = useReducedMotion();

  return (
    <section id="contact" className="scroll-mt-24 relative overflow-hidden bg-pine-900 py-20 lg:py-28">
      {/* floating medical particles */}
      <div aria-hidden="true" className="absolute inset-0">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-leaf-400/40"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={reduced ? undefined : { y: [0, -22, 0], opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-leaf-500/10 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-med-500/10 blur-3xl" />
      </div>

      <Container className="relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <PulseLine className="h-6 w-44" stroke="#2FBC85" loop />
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Need Medicines?
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            Send us your requirement and our team will help you with the next
            step.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={whatsappHref(orderMessage)} external variant="whatsapp" className="px-7 py-3.5">
              <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
              Order on WhatsApp
            </ButtonLink>
            <ButtonLink
              href={site.phoneHref}
              variant="secondary"
              className="border-transparent bg-white px-7 py-3.5 hover:border-transparent hover:bg-mint-100"
            >
              <Phone className="h-4.5 w-4.5 text-leaf-600" aria-hidden="true" />
              Call Now
            </ButtonLink>
            <ButtonLink
              href={site.mapsUrl}
              external
              variant="ghost"
              className="border border-white/20 px-7 py-3.5 text-white hover:bg-white/10"
            >
              <Navigation className="h-4.5 w-4.5 text-leaf-400" aria-hidden="true" />
              Get Directions
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
