/**
 * Central business + content configuration for EVA ASLAM MEDICO.
 *
 * ⚠️ PLACEHOLDER DATA — every value tagged "PLACEHOLDER" below is
 * intentionally fake and must be replaced with the real business
 * details before launch. See README.md → "Before you launch".
 */

export const site = {
  name: "EVA ASLAM MEDICO",
  tagline: "Your Trusted Pharmacy & Home Healthcare Partner",
  taglineHindi: "आपकी सेहत, हमारी ज़िम्मेदारी", // "Your health, our responsibility"
  description:
    "Quality medicines, convenient home delivery, and essential healthcare services — right at your doorstep.",
  address: {
    line: "Loharpatti, Kushinagar, Uttar Pradesh",
    locality: "Kushinagar",
    region: "Uttar Pradesh",
    country: "IN",
  },
  /** ⚠️ PLACEHOLDER — replace with the real phone number (E.164). */
  phone: "+91 99999 99999",
  phoneHref: "tel:+919999999999",
  /** ⚠️ PLACEHOLDER — replace with the real WhatsApp number (digits only). */
  whatsappNumber: "919999999999",
  /** ⚠️ PLACEHOLDER — replace with the real Instagram profile URL. */
  instagram: "https://instagram.com/evaaslammedico",
  /** Set by the deployment workflow; replace the fallback when using a custom domain. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://eva-aslam-medico.example.com",
  /** ⚠️ PLACEHOLDER — confirm actual opening hours with the pharmacy. */
  hours: "Open daily · Morning to late evening",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Loharpatti, Kushinagar, Uttar Pradesh"),
} as const;

export function whatsappHref(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const orderMessage =
  "Hello EVA ASLAM MEDICO 👋 I would like to order medicines. Here is my requirement:";

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Health tips", href: "/#health" },
  { label: "Visit us", href: "/#visit" },
] as const;

export interface Service {
  title: string;
  description: string;
  icon: string; // key into the icon map in Services.tsx
}

export const services: Service[] = [
  {
    title: "Medicine Home Delivery",
    description: "Prescription and everyday medicines delivered to your doorstep.",
    icon: "truck",
  },
  {
    title: "BP Check",
    description: "Quick, accurate blood pressure measurement at the counter.",
    icon: "gauge",
  },
  {
    title: "Blood Sugar Check",
    description: "Instant glucometer test with a clear reading you can track.",
    icon: "droplet",
  },
  {
    title: "Pulse Oximeter",
    description: "SpO₂ and pulse rate checked in seconds.",
    icon: "heartPulse",
  },
  {
    title: "Temperature Check",
    description: "Digital fever screening for children and adults.",
    icon: "thermometer",
  },
  {
    title: "Weight Measurement",
    description: "Reliable weight tracking to support your health goals.",
    icon: "weight",
  },
  {
    title: "Pregnancy Test",
    description: "Private, reliable test kits with friendly guidance.",
    icon: "testTube",
  },
  {
    title: "Nebulizer Support",
    description: "Nebulization assistance for easier breathing.",
    icon: "wind",
  },
  {
    title: "Healthcare Products",
    description: "Daily health, hygiene and wellness essentials in one place.",
    icon: "shoppingBag",
  },
  {
    title: "Surgical Items",
    description: "Dressings, gloves, masks and everyday surgical supplies.",
    icon: "bandage",
  },
  {
    title: "Ayurvedic Medicines",
    description: "Trusted Ayurvedic and herbal remedies from known brands.",
    icon: "leaf",
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    number: "01",
    title: "Contact Us",
    description: "Send your medicine requirement through WhatsApp or phone.",
  },
  {
    number: "02",
    title: "Prescription / Order Verification",
    description:
      "Our team checks the order and prescription requirements where applicable.",
  },
  {
    number: "03",
    title: "Get It Delivered",
    description: "Your eligible medicine order is prepared and delivered to you.",
  },
];

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  { title: "Trusted", description: "Professional pharmacy-focused service.", icon: "shield" },
  { title: "Convenient", description: "Medicine delivery at your doorstep.", icon: "home" },
  {
    title: "Accessible",
    description: "Healthcare support designed for the local community.",
    icon: "users",
  },
  { title: "Fast", description: "Quick communication through phone and WhatsApp.", icon: "zap" },
  { title: "Local", description: "Serving nearby families and communities.", icon: "mapPin" },
  { title: "Human", description: "Friendly, personal healthcare assistance.", icon: "smile" },
];

export interface Article {
  title: string;
  description: string;
  illustration: "sun" | "water" | "bp" | "sugar";
}

/**
 * ⚠️ CONTENT NOTE — general wellness pointers only, written to avoid
 * medical claims. Have a qualified professional review anything you
 * add here before publishing.
 */
export const articles: Article[] = [
  {
    title: "Summer Heat & Dehydration",
    description:
      "Hot days increase fluid loss. Simple habits that help you stay comfortable through peak summer.",
    illustration: "sun",
  },
  {
    title: "Healthy Hydration",
    description:
      "Practical, everyday hydration habits — and easy ways to remember to drink enough water.",
    illustration: "water",
  },
  {
    title: "Blood Pressure Awareness",
    description:
      "Regular checks help you notice changes early. Know your numbers and what they mean.",
    illustration: "bp",
  },
  {
    title: "Blood Sugar Awareness",
    description:
      "Why routine monitoring matters, and how a simple check fits into your regular routine.",
    illustration: "sugar",
  },
];
