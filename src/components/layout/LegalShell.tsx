import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

/** Shared shell for the privacy / terms prose pages. */
export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-mint-50/60 pb-20 pt-28 lg:pt-36">
      <Container className="max-w-3xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-leaf-600 transition-colors hover:text-pine-800"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </a>
        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-pine-800 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-ink-400">
          Last updated: {updated}
        </p>
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          ⚠️ Placeholder document — have this reviewed and finalized by a legal
          professional before publishing the site.
        </div>
        <div className="mt-8 space-y-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-pine-800 [&_p]:mt-3 [&_p]:text-[0.95rem] [&_p]:leading-relaxed [&_p]:text-ink-600 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_li]:text-[0.95rem] [&_li]:text-ink-600">
          {children}
        </div>
      </Container>
    </div>
  );
}
