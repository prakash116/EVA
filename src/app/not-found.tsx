import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PulseLine } from "@/components/ui/PulseLine";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-20 text-center">
      <PulseLine className="h-8 w-56" />
      <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.22em] text-leaf-600">
        Error 404
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-pine-800 sm:text-4xl">
        This page isn&apos;t here
      </h1>
      <p className="mt-3 max-w-md text-ink-600">
        The link may be old or mistyped. Everything you need is back on the
        home page.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-pine-800 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-pine-700"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to home
      </Link>
    </div>
  );
}
