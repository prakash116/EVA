"use client";

import { MessageCircle, Phone, Pill } from "lucide-react";
import { orderMessage, site, whatsappHref } from "@/lib/site";

/**
 * Sticky bottom bar on phones: Call | WhatsApp | Order Medicine.
 * Hidden on desktop where the navbar CTAs take over.
 */
export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-mint-200 bg-white/92 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
    >
      <div className="grid grid-cols-3">
        <a
          href={site.phoneHref}
          className="flex flex-col items-center gap-1 py-2.5 text-pine-800 transition-colors active:bg-mint-100"
        >
          <Phone className="h-5 w-5 text-leaf-600" aria-hidden="true" />
          <span className="text-[0.68rem] font-semibold">Call</span>
        </a>
        <a
          href={whatsappHref(orderMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-pine-800 transition-colors active:bg-mint-100"
        >
          <MessageCircle className="h-5 w-5 text-leaf-600" aria-hidden="true" />
          <span className="text-[0.68rem] font-semibold">WhatsApp</span>
        </a>
        <a
          href={whatsappHref(orderMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="m-1.5 flex flex-col items-center justify-center gap-1 rounded-xl bg-pine-800 py-1.5 text-white"
        >
          <Pill className="h-5 w-5 text-leaf-400" aria-hidden="true" />
          <span className="text-[0.68rem] font-semibold">Order Medicine</span>
        </a>
      </div>
    </nav>
  );
}
