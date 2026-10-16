import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "../components/InfoPage";
import { CONTACT_EMAIL } from "../siteTeam";

export const metadata: Metadata = {
  title: "Privacy Policy - Teen Patti Master Hub",
  description:
    "How Teen Patti Master Hub (techtonis.com) handles visitor data, cookies, affiliate links and third-party services.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { type: "website", url: "/privacy-policy", title: "Privacy Policy - Teen Patti Master Hub" },
};

export default function PrivacyPolicyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      intro="This policy explains what information is collected when you visit techtonis.com (Teen Patti Master Hub) and how it is used."
      updated="16 October 2026"
    >
      <section>
        <h2>Information we collect</h2>
        <ul>
          <li><strong>You do not need an account.</strong> We do not ask for your name, phone number or payment details.</li>
          <li><strong>Server logs:</strong> our hosting provider (Vercel) automatically records technical data such as IP address, browser type, pages visited and time of visit, to keep the site secure and working.</li>
          <li><strong>Emails you send us:</strong> if you contact us, we keep your email address and message only to reply to you.</li>
        </ul>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          This site does not set advertising or tracking cookies of its own. Third-party sites you visit through our
          links may set their own cookies under their own policies.
        </p>
      </section>

      <section>
        <h2>Affiliate and external links</h2>
        <p>
          Some download buttons are affiliate links to third-party apps and websites. When you click them you leave our
          site, and any data you give those apps (phone number, KYC, payments) is handled by them under their own
          privacy policies, not ours. Please read their policies before signing up.
        </p>
      </section>

      <section>
        <h2>How we use information</h2>
        <ul>
          <li>To run, secure and improve the website</li>
          <li>To reply to messages you send us</li>
        </ul>
        <p>We do not sell or rent personal information to anyone.</p>
      </section>

      <section>
        <h2>Children</h2>
        <p>This site is intended for adults aged 18 and over. We do not knowingly collect information from anyone under 18.</p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          You can ask us to see or delete any information we hold about you, such as emails you have sent us, by
          writing to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The &quot;Last updated&quot; date above shows the latest version.
          Questions? Visit our <Link href="/contact">Contact page</Link>.
        </p>
      </section>
    </InfoPage>
  );
}
