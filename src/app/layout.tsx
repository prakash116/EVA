import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Geist_Mono,
  Inter,
  Noto_Sans_Devanagari,
} from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "600"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url), // ⚠️ PLACEHOLDER domain — see src/lib/site.ts
  title: {
    default: "EVA ASLAM MEDICO — Pharmacy & Home Healthcare in Kushinagar",
    template: "%s · EVA ASLAM MEDICO",
  },
  description:
    "Local pharmacy and home healthcare service in Loharpatti, Kushinagar. Medicine home delivery, BP and sugar checks, healthcare products and more — 24×7.",
  keywords: [
    "pharmacy Kushinagar",
    "medicine home delivery Loharpatti",
    "medical store Kushinagar",
    "EVA ASLAM MEDICO",
    "home healthcare Uttar Pradesh",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "EVA ASLAM MEDICO — Your Trusted Pharmacy & Home Healthcare Partner",
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "EVA ASLAM MEDICO — Pharmacy & Home Healthcare",
    description: site.description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B3B2E",
};

/**
 * schema.org LocalBusiness (Pharmacy) markup.
 * Telephone and licence details are intentionally omitted — add the
 * real values before launch rather than inventing them.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  name: site.name,
  description: site.description,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Loharpatti",
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: "Kushinagar, Uttar Pradesh",
  priceRange: "₹",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${geistMono.variable} ${devanagari.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-xl focus:bg-pine-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
