import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How EVA ASLAM MEDICO handles the information you share with us.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="August 2026">
      <section>
        <h2>What we collect</h2>
        <p>
          When you contact {site.name} by phone or WhatsApp, we receive the
          details you choose to share — typically your name, contact number,
          delivery address and medicine requirement, including prescriptions
          where applicable.
        </p>
      </section>
      <section>
        <h2>How we use it</h2>
        <ul>
          <li>To prepare, verify and deliver your medicine orders.</li>
          <li>To contact you about an order or answer your questions.</li>
          <li>To keep records required for pharmacy operations.</li>
        </ul>
      </section>
      <section>
        <h2>What we don&apos;t do</h2>
        <p>
          We do not sell your personal information. Health-related details are
          treated as confidential and shared only where required to fulfil your
          order or by law.
        </p>
      </section>
      <section>
        <h2>Messaging platforms</h2>
        <p>
          Conversations on WhatsApp are also governed by WhatsApp&apos;s own
          terms and privacy policy.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          For any privacy question, reach us at {site.phone} or visit us at{" "}
          {site.address.line}.
        </p>
      </section>
    </LegalShell>
  );
}
