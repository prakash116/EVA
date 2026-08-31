"use client";

import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Clock, Cross, MessageCircle, Truck } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { orderMessage, site, whatsappHref } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PulseLine } from "@/components/ui/PulseLine";
import { SceneErrorBoundary } from "@/components/three/SceneErrorBoundary";
import { ScenePlaceholder } from "@/components/three/ScenePlaceholder";

const MedicalScene = dynamic(() => import("@/components/three/MedicalScene"), {
  ssr: false,
  loading: () => <ScenePlaceholder />,
});

const textStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

function FloatingChip({
  className,
  delay,
  children,
}: {
  className: string;
  delay: number;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={`absolute z-10 ${className}`}
    >
      <motion.div
        animate={reduced ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex items-center gap-2.5 rounded-2xl border border-mint-200 bg-white/85 px-4 py-3 shadow-lift backdrop-blur-md"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const sceneRef = useRef<HTMLDivElement>(null);
  const sceneActive = useInView(sceneRef, { margin: "200px 0px" });

  const { scrollY } = useScroll();
  const sceneY = useTransform(scrollY, [0, 600], [0, reduced ? 0 : 70]);

  const item = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, y: 26 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.21, 0.65, 0.32, 0.95] as const },
        },
      };

  return (
    <section id="home" className="relative overflow-hidden">
      {/* backdrop washes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-mint-50 via-white to-white"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-10 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,_#d9f2e6_0%,_transparent_65%)]"
      />

      <Container className="grid items-center gap-10 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-24 lg:pt-36">
        {/* copy */}
        <motion.div initial="hidden" animate="visible" variants={textStagger}>
          <motion.p
            variants={item}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-mint-200 bg-white px-4 py-1.5 shadow-soft"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-pine-800">
              <Cross className="h-3 w-3 text-leaf-400" strokeWidth={3} aria-hidden="true" />
            </span>
            <span className="min-w-0 font-mono text-[0.6rem] font-medium uppercase tracking-[0.14em] text-pine-800 sm:text-[0.68rem] sm:tracking-[0.18em]">
              EVA ASLAM MEDICO
              <span className="hidden sm:inline"> · Loharpatti, Kushinagar</span>
            </span>
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight text-pine-800 sm:text-5xl lg:text-[3.6rem]"
          >
            Your Trusted Pharmacy &{" "}
            <span className="relative inline-block text-leaf-600">
              Home Healthcare
              <PulseLine className="absolute -bottom-2 left-0 h-4 w-full" strokeWidth={2.5} />
            </span>{" "}
            Partner
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-base leading-relaxed text-ink-600 sm:text-lg">
            {site.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={whatsappHref(orderMessage)} external variant="primary" className="px-7 py-3.5">
              <MessageCircle className="h-4.5 w-4.5 text-leaf-400" aria-hidden="true" />
              Order Medicine
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary" className="px-7 py-3.5">
              Explore Services
              <ArrowDown className="h-4 w-4 text-leaf-600" aria-hidden="true" />
            </ButtonLink>
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-ink-600">
              {["24×7 Service", "Home Delivery", "Local Healthcare"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-leaf-500" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-3 font-hindi text-sm text-ink-400">{site.taglineHindi}</p>
          </motion.div>
        </motion.div>

        {/* 3D scene */}
        <motion.div ref={sceneRef} style={{ y: sceneY }} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[26rem] sm:max-w-[30rem] lg:max-w-none">
            <FloatingChip className="left-0 top-8 sm:left-2 sm:top-12" delay={0.5}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-leaf-100">
                <Clock className="h-4.5 w-4.5 text-leaf-600" aria-hidden="true" />
              </span>
              <span className="text-xs font-semibold leading-tight text-pine-800">
                24×7
                <span className="block font-normal text-ink-400">always available</span>
              </span>
            </FloatingChip>
            <FloatingChip className="bottom-10 right-0 sm:bottom-16 sm:right-2" delay={0.7}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-leaf-100">
                <Truck className="h-4.5 w-4.5 text-leaf-600" aria-hidden="true" />
              </span>
              <span className="text-xs font-semibold leading-tight text-pine-800">
                Home delivery
                <span className="block font-normal text-ink-400">to your doorstep</span>
              </span>
            </FloatingChip>

            <SceneErrorBoundary>
              <MedicalScene active={sceneActive} />
            </SceneErrorBoundary>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
