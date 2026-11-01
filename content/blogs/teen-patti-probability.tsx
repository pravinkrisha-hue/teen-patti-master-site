import React from "react";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.techtonis.com/blog/teen-patti-probability";

// 3 cards from 52 = 22,100 hands
const hands = [
  { name: "Trail (three of a kind)", ways: 52, how: "13 ranks × 4 ways to pick 3 suits", pct: "0.24%", odds: "1 in 425" },
  { name: "Pure Sequence", ways: 48, how: "12 sequences × 4 suits", pct: "0.22%", odds: "1 in 460" },
  { name: "Sequence", ways: 720, how: "12 sequences × 64 suit combinations, minus the 48 pure ones", pct: "3.26%", odds: "1 in 31" },
  { name: "Colour", ways: 1096, how: "4 suits × 286 ways to pick 3 ranks, minus the 48 pure sequences", pct: "4.96%", odds: "1 in 20" },
  { name: "Pair", ways: 3744, how: "13 ranks × 6 suit pairs × 48 possible third cards", pct: "16.94%", odds: "1 in 6" },
  { name: "High Card", ways: 16440, how: "Everything else", pct: "74.39%", odds: "3 in 4" },
];

const faqs = [
  {
    q: "How many possible hands are there in Teen Patti?",
    a: "22,100. That is the number of ways to choose 3 cards from a 52-card deck (52 × 51 × 50 ÷ 6).",
  },
  {
    q: "What is the probability of getting a Trail in Teen Patti?",
    a: "52 out of 22,100, or about 0.24% — roughly once every 425 hands. A specific Trail such as A-A-A is far rarer: 4 out of 22,100, about once in 5,525 hands.",
  },
  {
    q: "Is a pure sequence rarer than a Trail?",
    a: "Yes, slightly: there are 48 pure sequences and 52 Trails. Traditional rules still rank the Trail higher.",
  },
  {
    q: "How often will I get a pair or better?",
    a: "About 25.6% of the time — roughly one hand in four. Three hands out of four are just High Card.",
  },
];

export default function TeenPattiProbability() {
  return (
    <article className="max-w-4xl mx-auto py-6 text-slate-300 font-sans leading-relaxed space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Teen Patti Probability and Odds: How Often Every Hand Appears",
              url: PAGE_URL,
              image: "https://www.techtonis.com/teen-patti-master-gold.webp",
              datePublished: "2026-11-01",
              dateModified: "2026-11-01",
              author: { "@type": "Person", name: "Rohan Mehta", url: "https://www.techtonis.com/about#team" },
              publisher: { "@type": "Organization", name: "Teen Patti Master APK", logo: { "@type": "ImageObject", url: "https://www.techtonis.com/icon.png" } },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
          ]),
        }}
      />

      <header className="space-y-5 border-b border-slate-800 pb-8">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
          The maths of Teen Patti
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Teen Patti Probability and Odds: How Often Every Hand Appears
        </h1>
        <p className="text-base sm:text-lg text-slate-400">
          Why does a sequence beat a colour? How rare is a Trail really? And how often will you be dealt nothing at all? Teen Patti
          uses one 52-card deck and three cards per player, so every one of these questions has an exact answer. Here are the
          numbers, how they are worked out, and what they mean at the table.
        </p>
        <div className="flex justify-center">
          <Image
            src="/teen-patti-master-gold.webp"
            alt="Teen Patti probability and odds of every hand"
            width={512}
            height={512}
            sizes="(max-width: 560px) 100vw, 512px"
            className="w-full max-w-[512px] h-auto rounded-2xl border border-slate-800 shadow-xl"
            priority
          />
        </div>
      </header>

      <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 space-y-2">
        <h2 className="text-xl font-bold text-amber-300">The short answer</h2>
        <p>
          There are <strong>22,100</strong> possible Teen Patti hands. Three out of four are <strong>High Card</strong>. A pair or
          better comes about <strong>one hand in four</strong>, a sequence or better about <strong>one in 27</strong>, and a Trail
          only about <strong>once in 425 hands</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Every hand, with exact odds</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900 text-slate-400">
              <tr>
                <th className="p-3">Hand</th>
                <th className="p-3">Ways</th>
                <th className="p-3">How it&apos;s counted</th>
                <th className="p-3">Probability</th>
                <th className="p-3">Odds</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {hands.map((h) => (
                <tr key={h.name}>
                  <td className="p-3 text-white font-semibold">{h.name}</td>
                  <td className="p-3">{h.ways.toLocaleString("en-IN")}</td>
                  <td className="p-3">{h.how}</td>
                  <td className="p-3 whitespace-nowrap">{h.pct}</td>
                  <td className="p-3 whitespace-nowrap">{h.odds}</td>
                </tr>
              ))}
              <tr className="bg-slate-900/60">
                <td className="p-3 text-white font-semibold">Total</td>
                <td className="p-3">22,100</td>
                <td className="p-3">52 × 51 × 50 ÷ 6</td>
                <td className="p-3">100%</td>
                <td className="p-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">How the counting works</h2>
        <ul className="space-y-3 list-disc pl-6">
          <li><strong className="text-white">Total hands:</strong> choosing 3 cards from 52 without caring about order gives 52 × 51 × 50 ÷ (3 × 2 × 1) = 22,100.</li>
          <li><strong className="text-white">Trail:</strong> pick a rank (13 choices) and 3 of its 4 suits (4 ways) — 52 hands.</li>
          <li><strong className="text-white">Sequences:</strong> there are 12 three-card runs (A-K-Q down to 4-3-2, plus A-2-3). Each card can be any of 4 suits, giving 12 × 64 = 768. The 48 where all three suits match are pure sequences; the remaining 720 are ordinary sequences.</li>
          <li><strong className="text-white">Colour:</strong> pick a suit (4) and any 3 of its 13 ranks (286 ways) — 1,144 — then remove the 48 pure sequences: 1,096.</li>
          <li><strong className="text-white">Pair:</strong> pick the pair&apos;s rank (13), two of its suits (6 ways) and any card of another rank (48) — 3,744.</li>
          <li><strong className="text-white">High Card:</strong> whatever is left — 16,440.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Why the rankings are in this order</h2>
        <p>
          Rarer hands rank higher. A sequence (720 ways) is rarer than a colour (1,096), so it wins — the reverse of five-card poker,
          as our <Link href="/blog/teen-patti-vs-poker" className="text-amber-400 underline">Teen Patti vs poker</Link> guide explains.
          The one exception is at the very top: a pure sequence (48 ways) is actually slightly rarer than a Trail (52 ways), but
          tradition keeps the Trail as the best hand. The full order is in our{" "}
          <Link href="/blog/teen-patti-sequence-list" className="text-amber-400 underline">sequence list</Link>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Some useful numbers at the table</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li><strong className="text-white">Pair or better:</strong> 5,660 hands — about 25.6%, roughly one in four.</li>
          <li><strong className="text-white">Sequence or better:</strong> 820 hands — about 3.7%, roughly one in 27.</li>
          <li><strong className="text-white">A specific Trail (e.g. A-A-A):</strong> 4 hands — about once in 5,525.</li>
          <li><strong className="text-white">A-K-Q pure sequence:</strong> also 4 hands — about once in 5,525.</li>
        </ul>
        <p>
          With more players at the table, the chance that <em>someone</em> holds a pair or better climbs quickly. As a rough guide
          (treating hands as independent, which is close enough for intuition), it is about 45% with two opponents, about 59% with
          three and about 69% with four. That is why a small pair is strong heads-up but only average at a full table.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">What the maths does — and doesn&apos;t — tell you</h2>
        <p>
          Probability tells you how strong your hand is likely to be compared with others. It can&apos;t tell you what the next card
          will be: every deal is independent, so a run of bad hands doesn&apos;t make a good one &quot;due&quot;. Anyone selling a trick
          or app that &quot;predicts&quot; cards is selling a scam. Use the numbers to decide when to Pack and when to stay — our{" "}
          <Link href="/blog/teen-patti-kaise-jeete" className="text-amber-400 underline">Teen Patti kaise jeete</Link> guide shows how.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="bg-slate-900/70 border border-slate-800 rounded-xl p-4">
              <summary className="font-semibold text-white cursor-pointer">{f.q}</summary>
              <p className="mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
