import React from "react";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.techtonis.com/blog/teen-patti-variations";

const variants = [
  {
    id: "muflis",
    name: "Muflis (Lowball)",
    rule: "Everything is reversed: the lowest hand wins. A Trail, normally the best hand, becomes the worst.",
    winner: "The best Muflis hand is usually 2-3-5 in mixed suits — the lowest cards that make no sequence, colour or pair.",
    tip: "Unlearn your instincts. High cards that you'd normally love are now dangerous, and pairs are a liability.",
  },
  {
    id: "ak47",
    name: "AK47",
    rule: "Every Ace, King, 4 and 7 is a joker (wild card) that can stand in for any card.",
    winner: "With 16 wild cards in the deck, Trails and sequences appear far more often than in classic play.",
    tip: "A hand that would be strong in classic Teen Patti — like a high pair — is only average here. Expect big hands.",
  },
  {
    id: "joker",
    name: "Joker (Open Joker / Hukam)",
    rule: "One card is turned face up before the deal. Every card of that rank becomes wild for everyone.",
    winner: "If a 9 is the joker card, all four 9s are wild — two 9s plus any card is already a Trail.",
    tip: "Look at the joker card before you decide anything. Holding one wild card changes how strong your hand is.",
  },
  {
    id: "lowest-joker",
    name: "Lowest Joker (Low Wild)",
    rule: "The lowest-ranked card in each player's own hand becomes their joker.",
    winner: "Every hand has a wild card, so pairs become very common and Trails much easier.",
    tip: "Since everyone has a wild card, judge your hand by what the other two cards make with it.",
  },
  {
    id: "highest-joker",
    name: "Highest Joker (High Wild)",
    rule: "The same idea in reverse: the highest card in each player's hand is wild.",
    winner: "Low cards suddenly matter — a 2-3 with a high wild card can become a sequence.",
    tip: "Hands with two close low cards gain value because the wild high card can complete them.",
  },
  {
    id: "four-card",
    name: "4 Card (Best of Four)",
    rule: "Each player gets four cards and plays the best three of them.",
    winner: "Picking the right three is the whole skill — the extra card means stronger hands on average.",
    tip: "Check every combination of three before you bet; players often miss a hidden sequence.",
  },
];

const faqs = [
  {
    q: "What is Muflis in Teen Patti?",
    a: "Muflis is a variation where the hand rankings are reversed and the lowest hand wins. In most versions, the best Muflis hand is 2-3-5 in mixed suits.",
  },
  {
    q: "Which cards are jokers in AK47?",
    a: "In AK47, every Ace, King, 4 and 7 is a joker — 16 wild cards in total — so strong hands like Trails become much more common.",
  },
  {
    q: "Are variation rules the same in every app?",
    a: "No. The core idea of each variation is the same, but apps differ on details such as tie-breaks and whether a joker-made Trail beats a natural one. Always read the rules screen for the table you join.",
  },
  {
    q: "Which variation is best for beginners?",
    a: "Classic Teen Patti. Learn the normal rankings first, then try Joker or AK47 on practice tables before playing them with money.",
  },
];

export default function TeenPattiVariations() {
  return (
    <article className="max-w-4xl mx-auto py-6 text-slate-300 font-sans leading-relaxed space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Teen Patti Variations Explained: Muflis, AK47, Joker & More",
              url: PAGE_URL,
              image: "https://www.techtonis.com/teen-patti-master-casino.webp",
              datePublished: "2026-10-24",
              dateModified: "2026-10-24",
              author: { "@type": "Person", name: "Rohan Mehta", url: "https://www.techtonis.com/about#team" },
              publisher: { "@type": "Organization", name: "Teen Patti Master Hub", logo: { "@type": "ImageObject", url: "https://www.techtonis.com/icon.png" } },
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
          Rules guide • Game modes
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Teen Patti Variations Explained: Muflis, AK47, Joker &amp; More
        </h1>
        <p className="text-base sm:text-lg text-slate-400">
          Open the lobby of any Teen Patti app and you&apos;ll find tables with names like Muflis, AK47 and Joker. They use the same
          three cards and the same betting — Blind, Chaal, Side Show — but one twist in the rules changes which hands are strong.
          Sitting down without knowing that twist is the quickest way to lose chips. Here&apos;s how each popular variation works.
        </p>
        <div className="flex justify-center">
          <Image
            src="/teen-patti-master-casino.webp"
            alt="Teen Patti variations: Muflis, AK47 and Joker tables"
            width={512}
            height={512}
            sizes="(max-width: 560px) 100vw, 512px"
            className="w-full max-w-[512px] h-auto rounded-2xl border border-slate-800 shadow-xl"
            priority
          />
        </div>
      </header>

      <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 space-y-2">
        <h2 className="text-xl font-bold text-amber-300">The short version</h2>
        <p>
          <strong>Muflis</strong> reverses the rankings so the lowest hand wins. <strong>AK47</strong> makes every Ace, King, 4 and 7
          wild. <strong>Joker</strong> turns one face-up card&apos;s rank wild for everyone. <strong>Lowest / Highest Joker</strong> makes
          a card in your own hand wild, and <strong>4 Card</strong> lets you choose your best three from four. Everything else —
          betting, Side Show, Show — works like classic Teen Patti.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Start with classic rankings</h2>
        <p>
          Every variation is a change to the classic order: Trail, Pure Sequence, Sequence, Colour, Pair, High Card. If that order
          isn&apos;t automatic for you yet, learn it first with our{" "}
          <Link href="/blog/teen-patti-master-game" className="text-amber-400 underline">how to play guide</Link> or the Hindi{" "}
          <Link href="/blog/teen-patti-sequence-list" className="text-amber-400 underline">sequence list</Link>. Variations only make
          sense once you know what they&apos;re changing.
        </p>
      </section>

      {variants.map((v) => (
        <section key={v.id} id={v.id} className="space-y-3 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{v.name}</h2>
          <p><strong className="text-white">The rule:</strong> {v.rule}</p>
          <p><strong className="text-white">What it means:</strong> {v.winner}</p>
          <p className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 text-sm sm:text-base">
            <strong className="text-amber-300">Tip:</strong> {v.tip}
          </p>
        </section>
      ))}

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Quick comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900 text-slate-400">
              <tr>
                <th className="p-3">Variation</th>
                <th className="p-3">Wild cards</th>
                <th className="p-3">Who wins</th>
                <th className="p-3">Difficulty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr><td className="p-3 text-white">Classic</td><td className="p-3">None</td><td className="p-3">Highest hand</td><td className="p-3">Easy</td></tr>
              <tr><td className="p-3 text-white">Muflis</td><td className="p-3">None</td><td className="p-3">Lowest hand</td><td className="p-3">Medium — rankings flip</td></tr>
              <tr><td className="p-3 text-white">AK47</td><td className="p-3">All A, K, 4, 7</td><td className="p-3">Highest hand</td><td className="p-3">Medium</td></tr>
              <tr><td className="p-3 text-white">Joker</td><td className="p-3">One rank, shared</td><td className="p-3">Highest hand</td><td className="p-3">Medium</td></tr>
              <tr><td className="p-3 text-white">Lowest / Highest Joker</td><td className="p-3">One card in each hand</td><td className="p-3">Highest hand</td><td className="p-3">Medium</td></tr>
              <tr><td className="p-3 text-white">4 Card</td><td className="p-3">None</td><td className="p-3">Best 3 of 4</td><td className="p-3">Easy–Medium</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Rules differ between apps</h2>
        <p>
          The core idea of each variation is consistent, but details aren&apos;t. Some apps rank a natural Trail above one made with a
          joker; others treat them equally. Some Muflis tables count A-2-3 as a sequence, others don&apos;t. Before you join any variation
          table, open its rules or help screen and read the ranking. It takes thirty seconds and saves real money.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">How to practise a new variation</h2>
        <ol className="space-y-2 list-decimal pl-6">
          <li>Read the table&apos;s rules screen, especially the hand ranking.</li>
          <li>Play on practice or free-chip tables first — our{" "}
            <Link href="/blog/teen-patti-master-offline" className="text-amber-400 underline">offline practice guide</Link> explains how.</li>
          <li>Play 20–30 hands just watching which hands win at Show.</li>
          <li>Only then try a small-boot table, with a strict limit. Our{" "}
            <Link href="/blog/teen-patti-kaise-jeete" className="text-amber-400 underline">Teen Patti kaise jeete</Link> guide has more strategy.</li>
        </ol>
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

      <div className="bg-red-950/40 border border-red-500/40 rounded-2xl p-5 text-sm">
        <p>
          <strong className="text-white">18+ only.</strong> Wild-card variations make big hands common and swings large. Real-money card games
          carry a risk of losing money and are restricted in India and some states. Read our{" "}
          <Link href="/responsible-gaming" className="text-amber-400 underline">Responsible Gaming</Link> page.
        </p>
      </div>
    </article>
  );
}
