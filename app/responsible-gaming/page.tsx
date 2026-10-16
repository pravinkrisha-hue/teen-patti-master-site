import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Responsible Gaming - Teen Patti Master Hub",
  description:
    "Play card games safely: 18+ only, state restrictions in India, warning signs of problem gaming, practical limits and free helplines.",
  alternates: { canonical: "/responsible-gaming" },
  openGraph: { type: "website", url: "/responsible-gaming", title: "Responsible Gaming - Teen Patti Master Hub" },
};

export default function ResponsibleGamingPage() {
  return (
    <InfoPage
      title="Responsible Gaming"
      intro="Card games should be entertainment, not a way to earn money. Real-money games carry a real risk of losing money. Please read this page before you play."
      updated="16 October 2026"
    >
      <section className="bg-red-950/40 border border-red-500/40 rounded-2xl p-5">
        <p className="text-white font-bold">18+ only.</p>
        <p className="text-sm mt-1">
          Real-money gaming is restricted or banned in some Indian states (for example Andhra Pradesh, Telangana,
          Assam, Odisha, Sikkim and Nagaland), and laws change. It is your responsibility to check the law where you
          live before playing for money.
        </p>
      </section>

      <section>
        <h2>Simple rules for safer play</h2>
        <ul>
          <li>Only play with money you can afford to lose. Never use money meant for rent, bills, fees or savings.</li>
          <li>Set a daily or weekly budget <strong>before</strong> you start, and stop when it is gone.</li>
          <li>Set a time limit, and take regular breaks.</li>
          <li>Never try to win back losses (&quot;chasing&quot;). Accept a loss and stop for the day.</li>
          <li>Never borrow money or use credit to play.</li>
          <li>Don&apos;t play when you are stressed, upset, tired or have been drinking.</li>
          <li>Treat any winnings as luck, not income.</li>
        </ul>
      </section>

      <section>
        <h2>Warning signs</h2>
        <ul>
          <li>Spending more money or time than you planned</li>
          <li>Hiding your playing from family or friends</li>
          <li>Feeling restless or irritable when you try to stop</li>
          <li>Borrowing money, or selling things, to play or to cover losses</li>
          <li>Missing work, studies or family time because of gaming</li>
        </ul>
        <p>If any of these sound familiar, it is time to pause and talk to someone.</p>
      </section>

      <section>
        <h2>Tools that help</h2>
        <ul>
          <li>Use the deposit limits, cool-off or self-exclusion options inside the app, if available.</li>
          <li>Ask the app&apos;s support team to close or suspend your account.</li>
          <li>Turn off app notifications, or uninstall the app.</li>
          <li>Use your phone&apos;s screen-time or app-limit settings.</li>
        </ul>
      </section>

      <section>
        <h2>Free help and support</h2>
        <ul>
          <li><strong>Tele-MANAS</strong> (Government of India mental health helpline, 24×7, free): call <a href="tel:14416">14416</a> or <a href="tel:18008914416">1-800-891-4416</a></li>
          <li><strong>Gambling Therapy</strong> (free online support): <a href="https://www.gamblingtherapy.org" target="_blank" rel="noopener noreferrer">gamblingtherapy.org</a></li>
        </ul>
      </section>

      <section>
        <h2>Protecting minors</h2>
        <p>
          Our guides are for adults only. If children use your phone, lock gaming apps with a PIN and use Google
          Family Link or similar parental controls.
        </p>
      </section>

      <p className="text-sm text-slate-500">
        See also: <Link href="/blog/teen-patti-master-loss-recover">bankroll and loss-control guide</Link> ·{" "}
        <Link href="/about">About us</Link>
      </p>
    </InfoPage>
  );
}
