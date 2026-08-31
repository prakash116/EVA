import { Cross, MapPin, MessageCircle } from "lucide-react";

/** Inline Instagram glyph — lucide no longer ships brand icons. */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { site, whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PulseLine } from "@/components/ui/PulseLine";

const exploreLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Health Awareness", href: "#health" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-pine-950 text-white">
      <Container className="pb-10 pt-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-leaf-500">
                <Cross className="h-4.5 w-4.5 text-white" strokeWidth={2.75} aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                EVA ASLAM MEDICO
              </span>
            </div>
            <p className="mt-4 text-sm text-white/70">Healthcare, closer to home.</p>
            <p className="mt-1 font-hindi text-sm text-leaf-400">{site.taglineHindi}</p>
            <PulseLine className="mt-6 h-5 w-40" stroke="#2FBC85" loop />
            <p className="mt-6 flex items-start gap-2 text-sm text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf-400" aria-hidden="true" />
              {site.address.line}
            </p>
          </div>

          {/* links */}
          <nav aria-label="Footer">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-white/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/80 transition-colors hover:text-leaf-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-white/50">
              Legal & Social
            </h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/80 transition-colors hover:text-leaf-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EVA ASLAM MEDICO on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/80 transition-colors hover:border-leaf-400 hover:text-leaf-400"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={whatsappHref("Hello EVA ASLAM MEDICO 👋")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/80 transition-colors hover:border-leaf-400 hover:text-leaf-400"
              >
                <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © 2026 EVA ASLAM MEDICO. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Wellness content is general information, not medical advice.
          </p>
        </div>
      </Container>
      {/* clearance for the sticky mobile action bar */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </footer>
  );
}
