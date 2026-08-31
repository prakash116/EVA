import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using EVA ASLAM MEDICO's website and services.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="August 2026">
      <section>
        <h2>Our service</h2>
        <p>
          {site.name} is a local pharmacy providing medicines, healthcare
          products and basic health-check support in and around Loharpatti,
          Kushinagar. Orders are placed by phone or WhatsApp and confirmed by
          our team.
        </p>
      </section>
      <section>
        <h2>Prescriptions</h2>
        <p>
          Medicines that legally require a prescription are dispensed only
          against a valid prescription. Our team may decline or adjust an order
          to comply with applicable regulations.
        </p>
      </section>
      <section>
        <h2>Delivery</h2>
        <p>
          Home delivery is offered for eligible orders within our service area.
          Delivery timing depends on availability and distance and is confirmed
          when the order is accepted.
        </p>
      </section>
      <section>
        <h2>Health information</h2>
        <p>
          Content on this website is general wellness information, not medical
          advice, diagnosis or treatment. Always consult a qualified doctor for
          personal health decisions.
        </p>
      </section>
      <section>
        <h2>Changes</h2>
        <p>
          These terms may be updated from time to time. Continued use of the
          website or our services means you accept the current version.
        </p>
      </section>
    </LegalShell>
  );
}
