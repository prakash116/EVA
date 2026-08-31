import { Hero } from "@/components/sections/Hero";
import { QuickActions } from "@/components/sections/QuickActions";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Experience } from "@/components/sections/Experience";
import { WhyUs } from "@/components/sections/WhyUs";
import { HealthAwareness } from "@/components/sections/HealthAwareness";
import { Location } from "@/components/sections/Location";
import { ContactCta } from "@/components/sections/ContactCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <About />
      <Services />
      <HowItWorks />
      <Experience />
      <WhyUs />
      <HealthAwareness />
      <Location />
      <ContactCta />
    </>
  );
}
