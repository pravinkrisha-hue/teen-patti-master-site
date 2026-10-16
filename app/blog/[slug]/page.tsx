import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { myArticles } from "@/content/blogs/allBlogs";
import AuthorBox from "../../components/AuthorBox";
import { AUTHOR, REVIEWER, LAST_REVIEWED, SITE_URL } from "../../siteTeam";

const DOWNLOAD_LINK = "https://www.earntp.com/m/ya5rcx?scene=&f=w&p=wa&l=en&tp=m173";

// Title format karva mate helper function
function formatTitleFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Human-readable SEO titles (same headings as the home page guide cards)
const customTitles: Record<string, string> = {
  "teen-patti-master-apk-download": "Teen Patti Master APK Download",
  "teen-patti-master-51-bonus": "Teen Patti Master ₹51 Bonus Claim Guide",
  "teen-patti-master-offline": "Teen Patti Master Offline: Play Without Internet",
  "teen-patti-master-2026": "Teen Patti Master 2026 Edition",
  "teen-patti-master-2027": "Teen Patti Master 2027 Roadmap",
  "teen-patti-master-real-cash-game": "Teen Patti Master Real Cash Game",
  "teen-patti-master-app-download-free": "Teen Patti Master App Download Free",
  "teen-patti-master-customer-care": "Teen Patti Master Customer Care",
  "teen-patti-master-casino": "Teen Patti Master Casino Games",
  "teen-patti-master-new-version": "Teen Patti Master New Version",
  "teen-patti-master-online": "Teen Patti Master Online Table Play",
  "teen-patti-master-game": "Teen Patti Master Game Overview",
  "teen-patti-master-download-guide": "Teen Patti Master Download Guide",
  "teen-patti-master-old-vs-new": "Teen Patti Master Old vs New Version",
  "teen-patti-master-vs-gold": "Teen Patti Master vs Teen Patti Gold",
  "teen-patti-android-game": "Teen Patti Android Game Setup",
  "teen-patti-master-secrets": "Teen Patti Master Pro Secrets",
  "teen-patti-master-loss-recover": "Teen Patti Master Loss Recovery Strategy",
  "teen-patti-master-faq": "Teen Patti Master FAQ",
  "teen-patti-master-welcome-bonus": "Teen Patti Master Welcome Bonus Guide",
  "teen-patti-master-explained": "Teen Patti Master Explained Completely",
  "teen-patti-master-vungo": "Teen Patti Vungo Download & Safe Bonus",
  "teen-patti-master-yono-game-apk": "Teen Patti Master Yono Game APK Features",
  "teen-patti-master-vs-yono-game": "Teen Patti Master vs Yono Games",
  "teen-patti-master-vs-rummy": "Teen Patti Master vs Rummy",
  "teen-patti-master-king": "Teen Patti Master King",
  "teen-patti-gold-old-version": "Teen Patti Gold Old Version Legacy Guide",
  "teen-patti-gold-new-version": "Teen Patti Gold New Version Updates",
  "teen-patti-gold-new-vs-old": "Teen Patti Gold: New vs Old Version Verdict",
  "teen-patti-master-faq-vs-real-game": "Teen Patti Master FAQ: Top Questions Answered",
  "teen-patti-master-kaise-khele": "Teen Patti Master Kaise Khele? नियम और टिप्स (हिंदी)",
};

// Custom Unique Meta Descriptions mapping (har ek page mate alag description)
const customDescriptions: Record<string, string> = {
  "teen-patti-master-kaise-khele": "Teen Patti Master kaise khele? आसान हिंदी में boot, Blind-Chaal, Side Show, Show, पत्तों की रैंकिंग और नए खिलाड़ियों के लिए टिप्स।",
  "teen-patti-master-apk-download": "Download the latest official Teen Patti Master APK version. Get 100% clean direct link, 45MB lightweight package, and install on Android.",
  "teen-patti-master-51-bonus": "Claim ₹51 instant welcome sign-up bonus on Teen Patti Master. Follow simple steps to bind mobile number with OTP and get free chips.",
  "teen-patti-master-offline": "Learn how to play Teen Patti Master offline with AI practice bots without mobile internet connection. Complete offline mode tutorial.",
  "teen-patti-master-2026": "Explore Teen Patti Master 2026 Edition: latest UI updates, enhanced RNG card distribution, lightning-fast gameplay, and UPI withdrawals.",
  "teen-patti-master-2027": "Upcoming Teen Patti Master 2027 features: advanced anti-cheat AI systems, next-gen 3D tables, private lobby upgrades, and tournament rewards.",
  "teen-patti-master-real-cash-game": "Essential rules, bankroll safety, and smart strategies for playing Teen Patti Master real cash games responsibly.",
  "teen-patti-master-app-download-free": "Step-by-step instructions to safely install the official Teen Patti Master app for free and receive immediate sign-up chips.",
  "teen-patti-master-customer-care": "Get official Teen Patti Master customer care contacts, 24/7 in-app support chat, WhatsApp helpline, and payment ticket resolution.",
  "teen-patti-master-casino": "Explore online casino games in Teen Patti Master: Dragon vs Tiger, Roulette, Car Roulette, 7 Up Down, and 3-card poker tables.",
  "teen-patti-master-new-version": "Download the newest Teen Patti Master version with improved table latency, zero lag, updated security, and 60-second UPI payouts.",
  "teen-patti-master-online": "Complete guide to entering live multiplayer tables on Teen Patti Master, picking the right boot value, and playing against real opponents.",
  "teen-patti-master-game": "Comprehensive overview of Teen Patti Master card rules, boot wagering rounds, blind moves, chaal limits, and show showdowns.",
  "teen-patti-master-download-guide": "Quick setup guide to download Teen Patti Master APK, enable Unknown Sources safely on Android, and activate your first wallet balance.",
  "teen-patti-master-old-vs-new": "Detailed comparison between old and new versions of Teen Patti Master: battery usage, APK file size, graphics, and table stability.",
  "teen-patti-master-vs-gold": "Teen Patti Master vs Teen Patti Gold: comparison of bonus structures, VIP table perks, cashout reliability, and user interfaces.",
  "teen-patti-android-game": "Best Android settings to optimize Teen Patti Master for zero lag, low battery consumption, and crash-free card sessions.",
  "teen-patti-master-secrets": "Master winning strategies in Teen Patti Master: blind betting tactics, early hand folding rules, bankroll management, and bluffing timing.",
  "teen-patti-master-loss-recover": "Practical, disciplined loss recovery guide for Teen Patti Master: control tilt playing, set daily bankroll limits, and protect chips.",
  "teen-patti-master-faq": "Frequently asked questions about Teen Patti Master: cashout limits, RNG certification, security alerts, and device compatibility.",
  "teen-patti-master-welcome-bonus": "Guide to claiming your Teen Patti Master welcome bonus, daily login spin wheel chips, and promotional cashback codes.",
  "teen-patti-master-explained": "In-depth breakdown of Teen Patti Master features, card rankings, VIP tiers, referral rewards, and withdrawal procedures.",
  "teen-patti-master-vungo": "Objective review of Teen Patti Vungo: download safety, APK authenticity check, bonus terms, and payout validation.",
  "teen-patti-master-yono-game-apk": "Explore mini-games, slot features, arcade jackpots, and card lobbies inside the Teen Patti Master Yono ecosystem.",
  "teen-patti-master-vs-yono-game": "Head-to-head showdown between Teen Patti Master and Yono Games: cashout speeds, user rewards, table varieties, and platform safety.",
  "teen-patti-master-vs-rummy": "Detailed analytical comparison between Indian Rummy and Teen Patti Master: card rules, skill requirements, and cashout systems.",
  "teen-patti-master-king": "Tactical advice for pro tables: how tournament players read opponents, adjust boot sizing, and dominate Teen Patti Master King games.",
  "teen-patti-gold-old-version": "Download and guide for Teen Patti Gold old version: lightweight setup for legacy Android smartphones with minimal storage.",
  "teen-patti-gold-new-version": "Discover the latest features in Teen Patti Gold new release: private room options, festive contests, and updated animations.",
  "teen-patti-gold-new-vs-old": "Technical test and benchmarks: Teen Patti Gold old vs new build performance, frame rates, and memory footprints.",
  "teen-patti-master-faq-vs-real-game": "Top questions answered on game safety, rules, fair play RNG verification, and UPI payment reconciliation for Teen Patti Master.",
};

// 1. Dynamic SEO Metadata Function
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug).toLowerCase().trim();
  const ArticleEntry = myArticles[slug];

  if (!ArticleEntry) {
    return {
      title: "Article Not Found - Teen Patti Master",
      description: "The requested guide or article could not be found.",
      robots: { index: false, follow: true },
    };
  }

  const pageTitle = customTitles[slug] || formatTitleFromSlug(slug);
  const fullTitle = pageTitle.includes("Teen Patti Master") ? pageTitle : `${pageTitle} - Teen Patti Master`;
  const canonicalPath = `/blog/${slug}`;

  // 1. Check custom unique description, 2. check property inside article, 3. clean fallback
  const uniqueDescription =
    customDescriptions[slug] ||
    (typeof ArticleEntry === "object" && ArticleEntry !== null && "description" in ArticleEntry
      ? (ArticleEntry as { description?: string }).description
      : undefined) ||
    `Detailed guide and comprehensive strategies for ${pageTitle} on Teen Patti Master.`;

  return {
    title: fullTitle,
    description: uniqueDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "article",
      url: canonicalPath,
      siteName: "Teen Patti Master Hub",
      title: fullTitle,
      description: uniqueDescription,
      images: ["/teen-patti-master.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: uniqueDescription,
      images: ["/teen-patti-master.webp"],
    },
  };
}

// 2. Dynamic links mapping
export async function generateStaticParams() {
  return Object.keys(myArticles).map((slug) => ({ slug }));
}

// 3. Dynamic page render
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  const slug = decodeURIComponent(rawSlug).toLowerCase().trim();

  // URL pramane je-te article ni file select thashe
  const rawComponent = myArticles[slug];

  if (!rawComponent) {
    notFound();
  }

  // Component function chhe ke object wrapper (.default) te check kari ne extract karshe
  const ArticleComponent =
    typeof rawComponent === "function"
      ? rawComponent
      : rawComponent?.default && typeof rawComponent.default === "function"
      ? rawComponent.default
      : null;

  if (!ArticleComponent) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-10 px-4 sm:px-6 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Pacha java mate breadcrumb link */}
        <Link 
          href="/" 
          className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1 transition"
        >
          ← Back to All Guides
        </Link>

        {/* Tame banaveli alag-alag file no content ahi render thashe */}
        <ArticleComponent />

        {/* Author + tester review (E-E-A-T) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: `${SITE_URL}/blog/${slug}`,
              author: {
                "@type": "Person",
                name: AUTHOR.name,
                jobTitle: AUTHOR.role,
                url: `${SITE_URL}/about#team`,
              },
              reviewedBy: {
                "@type": "Person",
                name: REVIEWER.name,
                jobTitle: REVIEWER.role,
                url: `${SITE_URL}/about#team`,
              },
              lastReviewed: LAST_REVIEWED,
            }),
          }}
        />
        <AuthorBox />

        {/* Niche download button valo box */}
        <div className="bg-gradient-to-r from-amber-600/25 via-yellow-600/20 to-amber-600/25 border-2 border-amber-500/50 p-6 sm:p-10 rounded-3xl text-center space-y-4 shadow-[0_0_35px_rgba(245,158,11,0.2)]">
          <h3 className="text-2xl sm:text-3xl font-black text-white font-serif">
            Ready to Experience Teen Patti Master?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Download the authentic 45 MB Android APK, bind your mobile number for ₹51 free practice credits, and challenge verified card players across India!
          </p>
          <a
            href={DOWNLOAD_LINK}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm uppercase tracking-wider py-4 px-10 rounded-2xl shadow-xl transition transform hover:scale-105"
          >
            Download Official APK Now 🚀
          </a>
        </div>

      </div>
    </div>
  );
}