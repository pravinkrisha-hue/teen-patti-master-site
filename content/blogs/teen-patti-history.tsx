import React from "react";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.techtonis.com/blog/teen-patti-history";

const timeline = [
  { era: "1500s", text: "Primero, a Spanish and Italian card game with a three- or four-card hand and betting, spreads across Europe." },
  { era: "1700s–1800s", text: "In Britain, Primero's descendant Brag settles into Three Card Brag: three cards each, bluffing, and the same hand order Teen Patti uses today." },
  { era: "1800s–1900s", text: "The game takes root in the Indian subcontinent, picks up local names — Teen Patti, Flash or Flush — and Indian betting terms like boot, chaal and blind." },
  { era: "Generations", text: "Teen Patti becomes the classic family and festival card game, especially during Diwali." },
  { era: "2010s", text: "Mobile apps bring Teen Patti online, with free-chip tables, variations like Muflis and AK47, and later real-money tables." },
  { era: "2025", text: "India's Promotion and Regulation of Online Gaming Act bans online money games, while free and social games remain allowed." },
];

const faqs = [
  {
    q: "Where did Teen Patti originate?",
    a: "Teen Patti descends from the British game Three Card Brag, which itself came from the older European game Primero. It took root in the Indian subcontinent and became a traditional family and festival game.",
  },
  {
    q: "What does Teen Patti mean?",
    a: "\"Teen\" means three and \"patti\" means cards in Hindi, so Teen Patti simply means \"three cards\". It is also called 3 Patti, Flash or Flush.",
  },
  {
    q: "Why is Teen Patti played on Diwali?",
    a: "Card games at Diwali are an old social custom linked to festive luck. A popular folk story tells of Goddess Parvati playing a game of dice with Lord Shiva on Diwali night. Today most families play for fun, with points or chips rather than money.",
  },
  {
    q: "Is Teen Patti the same as Three Card Brag?",
    a: "They are very close relatives: both use three-card hands with almost the same rankings. Teen Patti adds its own betting customs, such as Blind and Seen play, Chaal and the Side Show.",
  },
];

export default function TeenPattiHistory() {
  return (
    <article className="max-w-4xl mx-auto py-6 text-slate-300 font-sans leading-relaxed space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "History of Teen Patti: From Three Card Brag to Diwali Tables and Apps",
              url: PAGE_URL,
              image: "https://www.techtonis.com/teen-paatti-master-rummy.webp",
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
          Culture &amp; history
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          History of Teen Patti: From Three Card Brag to Diwali Tables and Apps
        </h1>
        <p className="text-base sm:text-lg text-slate-400">
          Ask anyone in India where Teen Patti comes from and you&apos;ll probably hear &quot;it&apos;s always been played at
          Diwali&quot;. That&apos;s true as far as living memory goes — but the game&apos;s roots go back centuries and halfway round
          the world. Here is how three cards dealt in European taverns became India&apos;s favourite festive card game.
        </p>
        <div className="flex justify-center">
          <Image
            src="/teen-paatti-master-rummy.webp"
            alt="History of Teen Patti card game"
            width={512}
            height={384}
            sizes="(max-width: 560px) 100vw, 512px"
            className="w-full max-w-[512px] h-auto rounded-2xl border border-slate-800 shadow-xl"
            priority
          />
        </div>
      </header>

      <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 space-y-2">
        <h2 className="text-xl font-bold text-amber-300">The short answer</h2>
        <p>
          Teen Patti descends from the British game <strong>Three Card Brag</strong>, which grew out of the 16th-century European
          game <strong>Primero</strong>. In India it gained its own name — Teen Patti, &quot;three cards&quot; — its own betting customs
          like Blind, Chaal and Side Show, and a special place in Diwali celebrations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Timeline</h2>
        <ol className="relative border-l border-amber-500/40 ml-3 space-y-5">
          {timeline.map((t) => (
            <li key={t.era} className="ml-5">
              <span className="absolute -left-1.5 w-3 h-3 rounded-full bg-amber-400 mt-1.5" aria-hidden="true"></span>
              <p className="font-bold text-white">{t.era}</p>
              <p>{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">From Primero to Three Card Brag</h2>
        <p>
          Primero was one of Europe&apos;s first betting card games, popular in Spain, Italy and the courts of 16th-century England.
          Players held a few cards, bet on their strength and bluffed. Over time British players simplified it into Brag — named
          for &quot;bragging&quot; about a hand you may not actually have. Three Card Brag became the standard form, and its hand order
          is almost exactly the one Teen Patti players learn today: three of a kind at the top, then running flush, run, flush, pair
          and high card.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">How it became Teen Patti</h2>
        <p>
          Brag travelled to the Indian subcontinent, where it was simply called by what it is: <em>teen patti</em>, three cards. In
          some regions it&apos;s still known as Flash or Flush. Indian players gave it its own vocabulary — <strong className="text-white">boot</strong>{" "}
          for the starting stake, <strong className="text-white">chaal</strong> for a bet, <strong className="text-white">blind</strong> and{" "}
          <strong className="text-white">seen</strong> for whether you&apos;ve looked at your cards, and the <strong className="text-white">side show</strong>{" "}
          for a private comparison. Blind play in particular gives Teen Patti its distinctive tension. Learn every term in our{" "}
          <Link href="/blog/teen-patti-master-kaise-khele" className="text-amber-400 underline">Teen Patti kaise khele</Link> guide.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Teen Patti and Diwali</h2>
        <p>
          In many Indian homes the cards come out every Diwali. Card games at this time are an old social custom tied to festive
          luck, and a well-known folk story tells of Goddess Parvati playing dice with Lord Shiva on Diwali night. For most families
          today it&apos;s about gathering together — cousins, aunts and grandparents around one table, playing for points, sweets or
          matchsticks. Want to host a game? See our Hindi guide{" "}
          <Link href="/blog/teen-patti-ghar-par-kaise-khele" className="text-amber-400 underline">ghar par Teen Patti kaise khele</Link>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">The app era</h2>
        <p>
          From the 2010s, smartphone apps put Teen Patti in everyone&apos;s pocket. Apps added free-chip tables, private rooms for
          friends and new variations like Muflis, AK47 and Joker — see our{" "}
          <Link href="/blog/teen-patti-variations" className="text-amber-400 underline">guide to Teen Patti variations</Link>. Real-money
          tables followed, and with them scams and losses. In 2025 India passed a central law banning online money games, while
          leaving free and social games alone — read{" "}
          <Link href="/blog/is-teen-patti-master-legal" className="text-amber-400 underline">is Teen Patti Master legal?</Link>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Teen Patti and poker</h2>
        <p>
          Teen Patti is often called &quot;Indian poker&quot;, but the two only share distant ancestors. Poker developed separately in
          America and uses five-card hands; Teen Patti kept Brag&apos;s three cards. Our{" "}
          <Link href="/blog/teen-patti-vs-poker" className="text-amber-400 underline">Teen Patti vs poker</Link> guide explains the
          differences.
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
