import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InfoPage from "../components/InfoPage";
import { AUTHOR, REVIEWER, SITE_NAME, SITE_URL, CONTACT_EMAIL } from "../siteTeam";

export const metadata: Metadata = {
  title: "About Us - Teen Patti Master Hub",
  description:
    "Who runs Teen Patti Master Hub, how our guides are written and tested, and how we earn money. Meet our editor Rohan Mehta and tester Sunil Sharma.",
  alternates: { canonical: "/about" },
  openGraph: { type: "website", url: "/about", title: "About Us - Teen Patti Master Hub" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE_URL}/about`,
  name: "About Teen Patti Master Hub",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    email: CONTACT_EMAIL,
    employee: [
      { "@type": "Person", name: AUTHOR.name, jobTitle: AUTHOR.role, image: `${SITE_URL}${AUTHOR.image}` },
      { "@type": "Person", name: REVIEWER.name, jobTitle: REVIEWER.role },
    ],
  },
};

export default function AboutPage() {
  return (
    <InfoPage
      title="About Teen Patti Master Hub"
      intro="Teen Patti Master Hub (techtonis.com) is an independent guide to Indian card games and gaming apps. We explain rules, hand rankings, app installation, bonuses and safe-play habits in plain language."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section>
        <h2>We are independent</h2>
        <p>
          We are <strong>not</strong> the developer, publisher or operator of Teen Patti Master or any other app
          covered on this site. App names and logos belong to their respective owners and are used only to identify
          the apps we write about.
        </p>
      </section>

      <section id="team">
        <h2>Our team</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border border-amber-400/50">
              <Image src={AUTHOR.image} alt={AUTHOR.name} fill sizes="64px" className="object-cover" />
            </div>
            <p className="font-bold text-white">{AUTHOR.name}</p>
            <p className="text-xs text-amber-400">{AUTHOR.role}</p>
            <p className="text-sm">{AUTHOR.bio}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
            <div className="w-16 h-16 rounded-full bg-emerald-900/60 border border-emerald-400/50 flex items-center justify-center text-xl font-black text-emerald-300">
              {REVIEWER.initials}
            </div>
            <p className="font-bold text-white">{REVIEWER.name}</p>
            <p className="text-xs text-emerald-300">{REVIEWER.role}</p>
            <p className="text-sm">{REVIEWER.bio}</p>
          </div>
        </div>
      </section>

      <section>
        <h2>How we write and test guides</h2>
        <ul>
          <li>Every guide is written by our editor and then tested by our QA tester before it goes live.</li>
          <li>Apps are installed and checked on real Android phones: download link, install steps, sign-up bonus steps and the payment screens.</li>
          <li>Guides are re-checked when an app changes, and the &quot;Last reviewed&quot; date at the end of each article is updated.</li>
          <li>If you spot an error, tell us on the <Link href="/contact">Contact page</Link> and we will correct it.</li>
        </ul>
      </section>

      <section>
        <h2>How we make money</h2>
        <p>
          Some download buttons on this site are affiliate links. If you install an app through them we may earn a
          commission, at no extra cost to you. These links are marked as sponsored, and they never change what we
          write about an app.
        </p>
      </section>

      <section>
        <h2>Play responsibly</h2>
        <p>
          This site is for adults aged 18 and over. Real-money gaming carries financial risk and is restricted in some
          Indian states. Read our <Link href="/responsible-gaming">Responsible Gaming</Link> page before playing.
        </p>
      </section>
    </InfoPage>
  );
}
