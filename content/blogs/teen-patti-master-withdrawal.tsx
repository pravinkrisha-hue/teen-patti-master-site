import React from "react";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.techtonis.com/blog/teen-patti-master-withdrawal";

const problems = [
  {
    issue: "Withdrawal stuck on \"Pending\" or \"Processing\"",
    fix: "Give it time first. First withdrawals and larger amounts are often checked by hand, and bank holidays or UPI downtime add delays. If it's still pending after a full working day, raise a ticket with the order ID.",
  },
  {
    issue: "Money left the wallet but didn't reach the bank",
    fix: "Ask support for the UTR (bank reference number) of the payout. With a UTR you can ask your bank to trace it. If the transfer failed, the amount usually returns to your game wallet, not your bank.",
  },
  {
    issue: "Withdrawal rejected",
    fix: "The most common reason is a name mismatch: the name on your bank account or UPI ID doesn't match your KYC. Other reasons are an unverified account or using a UPI ID that belongs to someone else.",
  },
  {
    issue: "Withdraw button greyed out or amount looks too small",
    fix: "Only your withdrawable balance can be cashed out. Bonus money usually has to be played through first, and many apps set a minimum withdrawal amount.",
  },
  {
    issue: "Account \"under review\" or frozen",
    fix: "Usually triggered by multiple accounts on one phone, a VPN, or unusual play patterns. Contact support from inside the app, share your user ID, and avoid opening new accounts while it's being checked.",
  },
];

const faqs = [
  {
    q: "How do I withdraw money from Teen Patti Master?",
    a: "Open the wallet or Withdraw section, add a UPI ID or bank account in your own name, enter an amount within your withdrawable balance, confirm, and save the order ID that appears.",
  },
  {
    q: "How long does a Teen Patti Master withdrawal take?",
    a: "It varies. Small withdrawals can arrive the same day, but first withdrawals, large amounts, weekends and bank holidays can take longer. Treat any promise of a fixed time with caution.",
  },
  {
    q: "Why can't I withdraw my bonus?",
    a: "Bonus credit is normally not withdrawable as it is. It usually has to be wagered a certain number of times first, and only the winnings that come from it become withdrawable.",
  },
  {
    q: "Do I have to pay tax or a fee before withdrawing?",
    a: "No genuine app asks you to send money before it pays you. Where tax applies on winnings, it is deducted from the payout by the platform. A request to pay a \"fee\", \"GST\" or \"tax\" first is a scam.",
  },
  {
    q: "My withdrawal failed and the money is gone. What should I do?",
    a: "Collect the order ID, date, amount and screenshots, raise a ticket in the app, and ask for the UTR. If the app stops responding or you were tricked into paying, report it on the cyber crime helpline 1930 or cybercrime.gov.in and tell your bank.",
  },
];

export default function TeenPattiMasterWithdrawal() {
  return (
    <article className="max-w-4xl mx-auto py-6 text-slate-300 font-sans leading-relaxed space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Teen Patti Master Withdrawal: How to Withdraw, KYC, Limits & Fixes",
              url: PAGE_URL,
              image: "https://www.techtonis.com/teen-patti-master-2026.webp",
              datePublished: "2026-10-24",
              dateModified: "2026-10-24",
              author: { "@type": "Person", name: "Rohan Mehta", url: "https://www.techtonis.com/about#team" },
              publisher: { "@type": "Organization", name: "Teen Patti Master Hub", logo: { "@type": "ImageObject", url: "https://www.techtonis.com/icon.png" } },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to withdraw money from Teen Patti Master",
              url: PAGE_URL,
              step: [
                { "@type": "HowToStep", name: "Check your withdrawable balance", text: "Open the wallet and see how much is withdrawable, separate from bonus credit." },
                { "@type": "HowToStep", name: "Add a payout method in your own name", text: "Add a UPI ID or bank account whose name matches your KYC details." },
                { "@type": "HowToStep", name: "Enter the amount and confirm", text: "Enter an amount within your withdrawable balance and confirm the request." },
                { "@type": "HowToStep", name: "Save the order ID", text: "Take a screenshot of the order ID and wait for the status to change to completed." },
              ],
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
          Money guide • Withdrawals &amp; KYC
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Teen Patti Master Withdrawal: How to Withdraw, KYC, Limits &amp; Fixes
        </h1>
        <p className="text-base sm:text-lg text-slate-400">
          Winning chips is the easy part. Getting money from the app into your bank account is where most questions — and
          most scams — happen. This guide explains how a Teen Patti Master withdrawal works, why one gets delayed or
          rejected, and exactly what to do when it does. New to the app? Start with our{" "}
          <Link href="/" className="text-amber-400 underline hover:text-amber-300">Teen Patti Master APK download guide</Link>.
        </p>
        <div className="flex justify-center">
          <Image
            src="/teen-patti-master-2026.webp"
            alt="Teen Patti Master withdrawal guide: UPI, KYC and common problems"
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
          Open the Withdraw section, add a UPI ID or bank account <strong>in your own name</strong>, enter an amount within
          your <strong>withdrawable</strong> balance (not bonus credit), confirm, and save the order ID. Most problems come from
          a name mismatch, unfinished KYC, or trying to withdraw bonus money. And remember: a genuine app never asks you to pay
          anything to release a withdrawal.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Before your first withdrawal</h2>
        <p>Five minutes of preparation saves days of back-and-forth with support:</p>
        <ul className="space-y-3 list-disc pl-6">
          <li><strong className="text-white">Bind your mobile number.</strong> Guest accounts can&apos;t usually withdraw, and they can vanish if you reinstall.</li>
          <li><strong className="text-white">Use your own bank account or UPI ID.</strong> The name must match the name in your KYC. Payouts to a friend&apos;s or family member&apos;s account are a top reason for rejection.</li>
          <li><strong className="text-white">Keep your PAN handy.</strong> Larger withdrawals often need KYC, and PAN is the usual document.</li>
          <li><strong className="text-white">Know your balances.</strong> Your wallet may show deposit money, winnings and bonus credit separately. Only some of it is withdrawable.</li>
          <li><strong className="text-white">Start small.</strong> Make your first withdrawal a small amount to confirm the whole route works before you deposit more.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">How to withdraw, step by step</h2>
        <ol className="space-y-3 list-decimal pl-6">
          <li>Open the app and tap your wallet or the <strong className="text-white">Withdraw</strong> button in the lobby.</li>
          <li>Check the <strong className="text-white">withdrawable</strong> amount — this is the number that matters.</li>
          <li>Add a payout method: a UPI ID, or bank account number with IFSC code and account holder name.</li>
          <li>Enter the amount. Stay above the minimum and within your withdrawable balance.</li>
          <li>Confirm. An <strong className="text-white">order ID</strong> appears — take a screenshot. You&apos;ll need it if anything goes wrong.</li>
          <li>Watch the status change from pending to completed, then check your bank statement.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Why your withdrawable balance is smaller than your wallet</h2>
        <p>
          This confuses almost everyone at first. Sign-up bonuses and deposit offers add credit you can play with, but that credit
          usually comes with a wagering requirement — you have to bet a multiple of it before it turns into real, withdrawable money.
          Until then it sits in your wallet but can&apos;t be cashed out. Our{" "}
          <Link href="/blog/teen-patti-master-welcome-bonus" className="text-amber-400 underline">welcome bonus guide</Link> explains
          how wagering works, and the <Link href="/blog/teen-patti-master-51-bonus" className="text-amber-400 underline">₹51 bonus guide</Link>{" "}
          covers the sign-up credit.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">KYC and tax: what&apos;s normal</h2>
        <p>
          Being asked to verify your identity before a larger payout is normal. Upload documents only inside the app — never
          send your PAN or Aadhaar to someone on WhatsApp or Telegram. Where tax applies to online gaming winnings in India, it is
          deducted by the platform from what it pays you. You never send tax money yourself. If anyone asks you to pay a
          &quot;tax&quot;, &quot;GST&quot; or &quot;unlock fee&quot; before your withdrawal is released, stop — that is the most common
          withdrawal scam. Our{" "}
          <Link href="/blog/teen-patti-master-apk-download" className="text-amber-400 underline">safe or fake checklist</Link>{" "}
          lists the other warning signs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">How long does a withdrawal take?</h2>
        <p>
          There is no single honest answer. Small withdrawals to UPI can arrive within hours. First withdrawals and larger amounts
          are often reviewed manually, and weekends, bank holidays or UPI downtime add delays. Be wary of any website that promises a
          fixed number of seconds — payouts depend on the app&apos;s payment partner and your bank, not on a timer.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Withdrawal problems and how to fix them</h2>
        <div className="space-y-3">
          {problems.map((p) => (
            <div key={p.issue} className="bg-slate-900/70 border border-slate-800 rounded-xl p-4">
              <p className="font-semibold text-white">❗ {p.issue}</p>
              <p className="mt-1 text-sm sm:text-base">✅ {p.fix}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">How to raise a withdrawal ticket that gets answered</h2>
        <p>Support teams handle hundreds of tickets a day. Make yours easy to solve by including:</p>
        <ul className="space-y-2 list-disc pl-6">
          <li>Your user ID (from the profile screen) and registered mobile number</li>
          <li>The withdrawal order ID, amount, date and time</li>
          <li>Screenshots of the order status and, if money left the wallet, your bank statement for that day</li>
          <li>One clear sentence: &quot;Withdrawal of ₹X on [date] is pending / failed. Please share the UTR or reverse it.&quot;</li>
        </ul>
        <p>
          Use the in-app help or ticket section — see our{" "}
          <Link href="/blog/teen-patti-master-customer-care" className="text-amber-400 underline">Teen Patti Master customer care guide</Link>{" "}
          for every support channel. Ignore &quot;agents&quot; who message you first offering to speed things up.
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

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">The bottom line</h2>
        <p>
          A smooth withdrawal comes down to three habits: an account in your own name with KYC done, withdrawing only real winnings
          rather than bonus credit, and keeping every order ID. Test with a small amount first, and never pay to be paid. If you&apos;re
          playing for money at all, set a limit you can afford to lose — our{" "}
          <Link href="/blog/teen-patti-master-loss-recover" className="text-amber-400 underline">loss control guide</Link> shows how.
        </p>
        <div className="bg-red-950/40 border border-red-500/40 rounded-2xl p-5 text-sm">
          <p>
            <strong className="text-white">18+ only.</strong> Real-money card games carry a risk of losing money, and India passed a central
            law on online money games in 2025, with some states restricting them further. Check the current position where you live. Read our{" "}
            <Link href="/responsible-gaming" className="text-amber-400 underline">Responsible Gaming</Link> page.
          </p>
        </div>
      </section>
    </article>
  );
}
