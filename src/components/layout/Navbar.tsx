"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Cross, Menu, MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, orderMessage, site, whatsappHref } from "@/lib/site";

function BrandMark() {
  return (
    <Link href="/#home" className="flex items-center gap-2.5" aria-label="EVA ASLAM MEDICO — back to top">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-pine-800">
        <Cross className="h-4.5 w-4.5 text-leaf-400" strokeWidth={2.75} aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[0.95rem] font-bold tracking-tight text-pine-800">
          EVA ASLAM
        </span>
        <span className="block font-mono text-[0.62rem] font-medium uppercase tracking-[0.3em] text-leaf-600">
          Medico
        </span>
      </span>
    </Link>
  );
}

/** Transparent over the hero; frosted white once the page scrolls. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-mint-200 bg-white/85 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[4.5rem] lg:px-8"
      >
        <BrandMark />

        {/* desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-mint-100 hover:text-pine-800"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-pine-800 transition-colors hover:bg-mint-100"
          >
            <Phone className="h-4 w-4 text-leaf-600" aria-hidden="true" />
            {site.phone}
          </a>
          <a
            href={whatsappHref(orderMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-pine-800 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-pine-700"
          >
            Order Medicine
          </a>
        </div>

        {/* mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-mint-200 bg-white text-pine-800 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-mint-200 bg-white/95 backdrop-blur-md lg:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-[0.95rem] font-medium text-ink-900 transition-colors hover:bg-mint-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-2 pt-3">
                <a
                  href={site.phoneHref}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-mint-200 px-4 py-3 text-sm font-semibold text-pine-800"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call
                </a>
                <a
                  href={whatsappHref(orderMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-leaf-500 px-4 py-3 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
