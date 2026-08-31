"use client";

import { ArrowRight } from "lucide-react";
import { articles, whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import {
  BpIllustration,
  SugarIllustration,
  SunIllustration,
  WaterIllustration,
} from "@/components/ui/Illustrations";

const artMap = {
  sun: SunIllustration,
  water: WaterIllustration,
  bp: BpIllustration,
  sugar: SugarIllustration,
} as const;

/**
 * Wellness education cards. Copy is intentionally general — anything
 * added here should be reviewed by a qualified professional first
 * (see the content note in src/lib/site.ts).
 */
export function HealthAwareness() {
  return (
    <section id="health" className="scroll-mt-24 bg-mint-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Health awareness"
          title="Stay Healthy. Stay Informed."
          description="Simple, practical wellness pointers from your neighborhood pharmacy."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4" staggerDelay={0.08}>
          {articles.map((article) => {
            const Art = artMap[article.illustration];
            return (
              <RevealItem key={article.title} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mint-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="overflow-hidden">
                    <Art className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-[1.05rem] font-bold text-pine-800">
                      {article.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                      {article.description}
                    </p>
                    {/* Full articles are pending medical review — for now
                        "Read More" opens a WhatsApp chat with the pharmacist. */}
                    <a
                      href={whatsappHref(`Hello! I'd like to know more about "${article.title}".`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-600 transition-colors hover:text-pine-800"
                    >
                      Read More
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <p className="mt-8 text-center text-xs text-ink-400">
          General wellness information, not medical advice. Please consult a
          qualified doctor for personal health concerns.
        </p>
      </Container>
    </section>
  );
}
