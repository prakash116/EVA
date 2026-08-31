"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ClipboardCheck, MessageCircle, PackageCheck, type LucideIcon } from "lucide-react";
import { steps } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const stepIcons: LucideIcon[] = [MessageCircle, ClipboardCheck, PackageCheck];

export function HowItWorks() {
  const reduced = useReducedMotion();

  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From Message To Doorstep, In Three Steps"
          description="No apps to install, no forms to fill — just a message or a call."
        />

        <div className="relative mt-14 lg:mt-20">
          {/* animated connecting line (desktop) */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={reduced ? { duration: 0 } : { duration: 1.1, ease: "easeInOut", delay: 0.2 }}
            className="absolute left-[16.6%] right-[16.6%] top-6 hidden h-0.5 origin-left bg-linear-to-r from-leaf-500 via-leaf-400 to-mint-200 lg:block"
          />

          <RevealGroup className="grid gap-10 lg:grid-cols-3 lg:gap-8" staggerDelay={0.15}>
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <RevealItem key={step.number}>
                  {/* vertical rail on mobile */}
                  <div className="relative flex gap-5 border-l-2 border-dashed border-mint-200 pb-2 pl-6 last:border-transparent lg:flex-col lg:items-center lg:gap-0 lg:border-0 lg:pb-0 lg:pl-0 lg:text-center">
                    <div className="absolute -left-[1.4rem] top-0 flex h-11 w-11 items-center justify-center rounded-full bg-pine-800 shadow-soft lg:static lg:h-12 lg:w-12">
                      <span className="font-mono text-sm font-bold text-leaf-400">{step.number}</span>
                    </div>
                    <div className="lg:mt-6">
                      <span className="mb-3 hidden h-10 w-10 items-center justify-center rounded-xl bg-leaf-100 lg:mx-auto lg:flex">
                        <Icon className="h-5 w-5 text-leaf-600" aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-xl font-bold text-pine-800">{step.title}</h3>
                      <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-600 lg:mx-auto">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
