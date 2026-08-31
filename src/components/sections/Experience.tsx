"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { HandHeart, HeartPulse, Pill, Truck, type LucideIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { PulseTick } from "@/components/ui/PulseLine";
import { SceneErrorBoundary } from "@/components/three/SceneErrorBoundary";
import { ScenePlaceholder } from "@/components/three/ScenePlaceholder";

const ExperienceScene = dynamic(() => import("@/components/three/ExperienceScene"), {
  ssr: false,
  loading: () => <ScenePlaceholder />,
});

interface OrbitLabel {
  text: string;
  icon: LucideIcon;
  className: string;
  /** entrance order — labels appear one after another */
  order: number;
  /** parallax depth: how far the chip drifts as the section scrolls */
  drift: number;
}

const labels: OrbitLabel[] = [
  { text: "Pharmacy", icon: Pill, className: "left-2 top-[18%] sm:left-[8%]", order: 0, drift: -26 },
  { text: "Home Delivery", icon: Truck, className: "right-2 top-[26%] sm:right-[7%]", order: 1, drift: 22 },
  { text: "Health Check", icon: HeartPulse, className: "bottom-[24%] left-2 sm:left-[12%]", order: 2, drift: 20 },
  { text: "Community Care", icon: HandHeart, className: "bottom-[16%] right-2 sm:right-[10%]", order: 3, drift: -24 },
];

function Label({ label, progress }: { label: OrbitLabel; progress: ReturnType<typeof useSpring> }) {
  const reduced = useReducedMotion();
  const y = useTransform(progress, [0, 1], [0, label.drift]);
  const Icon = label.icon;

  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={
        reduced
          ? { duration: 0.3 }
          : { delay: 0.25 + label.order * 0.18, duration: 0.5, ease: "easeOut" }
      }
      style={reduced ? undefined : { y }}
      className={`absolute z-10 flex items-center gap-2 rounded-full border border-mint-200 bg-white/85 py-2 pl-2.5 pr-4 shadow-soft backdrop-blur-md ${label.className}`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-leaf-100">
        <Icon className="h-3.5 w-3.5 text-leaf-600" aria-hidden="true" />
      </span>
      <span className="text-xs font-semibold text-pine-800">{label.text}</span>
    </motion.div>
  );
}

/** The one showpiece 3D band — scroll gently steers the scene. */
export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const active = useInView(sectionRef, { margin: "250px 0px" });
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section
      ref={sectionRef}
      aria-label="EVA ASLAM MEDICO healthcare experience"
      className="relative overflow-hidden bg-linear-to-b from-white via-mint-50 to-white py-16 lg:py-20"
    >
      <Container>
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="flex items-center gap-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-leaf-600">
            <PulseTick className="h-3.5 w-8" />
            Everything connected
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-pine-800 sm:text-4xl">
            One pharmacy. Complete care.
          </h2>
        </div>

        <div className="relative mx-auto mt-6 h-[24rem] w-full max-w-3xl sm:h-[28rem] lg:h-[30rem]">
          {labels.map((label) => (
            <Label key={label.text} label={label} progress={progress} />
          ))}
          <SceneErrorBoundary>
            <ExperienceScene active={active && !reduced} progress={progress} />
          </SceneErrorBoundary>
        </div>
      </Container>
    </section>
  );
}
