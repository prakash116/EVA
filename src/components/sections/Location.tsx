"use client";

import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MapIllustration } from "@/components/ui/Illustrations";
import { PulseTick } from "@/components/ui/PulseLine";
import { Reveal } from "@/components/ui/Reveal";

export function Location() {
  return (
    <section id="visit" className="scroll-mt-24 py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* copy */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="flex items-center gap-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-leaf-600">
              <PulseTick className="h-3.5 w-8" />
              Find us
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-pine-800 sm:text-4xl">
              Visit EVA ASLAM MEDICO
            </h2>

            <dl className="mt-8 space-y-5">
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf-100">
                  <MapPin className="h-5 w-5 text-leaf-600" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-pine-800">Address</dt>
                  <dd className="mt-0.5 text-sm text-ink-600">{site.address.line}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf-100">
                  <Clock className="h-5 w-5 text-leaf-600" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-pine-800">Service hours</dt>
                  <dd className="mt-0.5 text-sm text-ink-600">
                    {site.hours} · phone &amp; WhatsApp support 24×7
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf-100">
                  <Phone className="h-5 w-5 text-leaf-600" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-pine-800">Phone</dt>
                  <dd className="mt-0.5 text-sm text-ink-600">{site.phone}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={site.phoneHref} variant="primary">
                <Phone className="h-4 w-4 text-leaf-400" aria-hidden="true" />
                Call Now
              </ButtonLink>
              <ButtonLink href={whatsappHref("Hello EVA ASLAM MEDICO 👋")} external variant="whatsapp">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        {/* map card */}
        <Reveal className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-3xl border border-mint-200 shadow-soft">
            <MapIllustration className="block h-auto w-full" />
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl bg-pine-800 px-4 py-2.5 text-sm font-semibold text-white shadow-lift transition-colors hover:bg-pine-700"
            >
              <Navigation className="h-4 w-4 text-leaf-400" aria-hidden="true" />
              Open in Google Maps
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
