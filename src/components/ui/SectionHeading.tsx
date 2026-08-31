import type { ReactNode } from "react";
import { PulseTick } from "./PulseLine";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
}

/**
 * Shared heading block: mono eyebrow with a heartbeat tick,
 * display-face title, optional supporting line.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls}`}>
      <p className="flex items-center gap-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-leaf-600">
        <PulseTick className="h-3.5 w-8" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="max-w-2xl font-display text-3xl font-bold tracking-tight text-pine-800 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
