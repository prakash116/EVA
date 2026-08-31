"use client";

import {
  ArrowUpRight,
  Bandage,
  Droplet,
  Gauge,
  HeartPulse,
  Leaf,
  ShoppingBag,
  TestTube,
  Thermometer,
  Truck,
  Weight,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const iconMap: Record<string, LucideIcon> = {
  truck: Truck,
  gauge: Gauge,
  droplet: Droplet,
  heartPulse: HeartPulse,
  thermometer: Thermometer,
  weight: Weight,
  testTube: TestTube,
  wind: Wind,
  shoppingBag: ShoppingBag,
  bandage: Bandage,
  leaf: Leaf,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-mint-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Everything You Need, Under One Roof"
          description="Pharmacy essentials and basic health checks, handled by a team that knows your neighborhood."
        />

        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-4"
          staggerDelay={0.05}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? HeartPulse;
            return (
              <RevealItem key={service.title} className="h-full">
                <article className="group relative h-full rounded-2xl border border-mint-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-leaf-400 hover:shadow-lift">
                  <ArrowUpRight
                    className="absolute right-5 top-5 h-4.5 w-4.5 text-mint-200 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-leaf-500"
                    aria-hidden="true"
                  />
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-leaf-500">
                    <Icon
                      className="h-5 w-5 text-leaf-600 transition-colors duration-300 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-4 pr-6 font-display text-[1.02rem] font-bold text-pine-800">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                    {service.description}
                  </p>
                </article>
              </RevealItem>
            );
          })}

          {/* filler card completing the grid: a soft CTA */}
          <RevealItem className="h-full">
            <a
              href="#contact"
              className="group flex h-full min-h-[10rem] flex-col justify-between rounded-2xl bg-pine-800 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.2em] text-leaf-400">
                Something else?
              </span>
              <span>
                <span className="font-display text-[1.05rem] font-bold text-white">
                  Ask our team — we&apos;ll try to arrange it.
                </span>
                <ArrowUpRight
                  className="mt-2 h-5 w-5 text-leaf-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
