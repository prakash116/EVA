"use client";

import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { PharmacyIllustration } from "@/components/ui/Illustrations";
import { PulseTick } from "@/components/ui/PulseLine";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const stats = [
  { value: <AnimatedCounter value={24} suffix="×7" />, label: "Service" },
  { value: "Home", label: "Delivery" },
  { value: "Local", label: "Healthcare" },
] as const;

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* illustration */}
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <PharmacyIllustration className="block h-auto w-full" />
          </div>
          <div className="absolute -bottom-5 left-6 flex items-center gap-2.5 rounded-2xl border border-mint-200 bg-white px-4 py-3 shadow-lift">
            <BadgeCheck className="h-5 w-5 text-leaf-500" aria-hidden="true" />
            <span className="text-sm font-semibold text-pine-800">
              Your neighborhood pharmacy
            </span>
          </div>
        </Reveal>

        {/* copy */}
        <div>
          <Reveal>
            <p className="flex items-center gap-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-leaf-600">
              <PulseTick className="h-3.5 w-8" />
              About us
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-pine-800 sm:text-4xl">
              Healthcare That Comes Closer To You
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              EVA ASLAM MEDICO is focused on making everyday healthcare more
              accessible to the local community through pharmacy services,
              medicine delivery and basic home healthcare support.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-600">
              From daily prescriptions to quick health checks, our team helps
              you take care of the small things — before they become big ones.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid grid-cols-3 divide-x divide-mint-200">
            {stats.map((stat, i) => (
              <RevealItem key={stat.label} className={i === 0 ? "pr-6" : "px-6"}>
                <p className="font-display text-3xl font-bold text-pine-800 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.2em] text-ink-400">
                  {stat.label}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
