import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "../components/InfoPage";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "../siteTeam";

export const metadata: Metadata = {
  title: "Contact Us - Teen Patti Master Hub",
  description:
    "Contact the Teen Patti Master Hub editorial team to report an error in a guide, ask a question or send a business enquiry.",
  alternates: { canonical: "/contact" },
  openGraph: { type: "website", url: "/contact", title: "Contact Us - Teen Patti Master Hub" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  name: "Contact Teen Patti Master Hub",
  mainEntity: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: CONTACT_EMAIL, availableLanguage: ["English", "Hindi"] },
  },
};

export default function ContactPage() {
  return (
    <InfoPage
      title="Contact Us"
      intro="Found a mistake in a guide, a broken download link, or have a question? Write to us and our team will reply, usually within 2 working days."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-slate-900 border border-amber-500/40 rounded-2xl p-6 text-center space-y-2">
        <p className="text-sm text-slate-400">Email</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl font-bold">{CONTACT_EMAIL}</a>
        <p className="text-xs text-slate-500">We reply in English or Hindi.</p>
      </section>

      <section>
        <h2>What we can help with</h2>
        <ul>
          <li>Corrections to a guide, wrong information or a broken link</li>
          <li>Questions about the content on this site</li>
          <li>Advertising and business enquiries</li>
          <li>Privacy requests about your data (see our <Link href="/privacy-policy">Privacy Policy</Link>)</li>
        </ul>
      </section>

      <section>
        <h2>What we cannot help with</h2>
        <p>
          We are an independent guide, not the app operator. We cannot access your game account, wallet, deposits or
          withdrawals. For account or payment problems, contact the app&apos;s own in-app support — see our{" "}
          <Link href="/blog/teen-patti-master-customer-care">customer care guide</Link>.
        </p>
      </section>
    </InfoPage>
  );
}
