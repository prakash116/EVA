"use client";

import {
  Home,
  MapPin,
  ShieldCheck,
  Smile,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { benefits } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  home: Home,
  users: Users,
  zap: Zap,
  mapPin: MapPin,
  smile: Smile,
};

export function WhyUs() {
  return (
    <section aria-labelledby="why-us-heading" className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="why-us-heading"
          eyebrow="Why choose us"
          title="Small Pharmacy. Big Difference."
          description="The things neighbors expect from a pharmacy they rely on every day."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3" staggerDelay={0.07}>
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon] ?? ShieldCheck;
            return (
              <RevealItem key={benefit.title} className="h-full">
                <div className="group h-full rounded-2xl bg-mint-50 p-6 transition-colors duration-300 hover:bg-mint-100">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-leaf-600" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-pine-800">{benefit.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{benefit.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
