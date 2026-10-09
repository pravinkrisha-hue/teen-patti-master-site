'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllPosts, setShowAllPosts] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Verified Direct Download Link
  const DOWNLOAD_URL = "https://www.earntp.com/m/ya5rcx?scene=&f=w&p=wa&l=en&tp=m173";

  const games = [
    {
      id: 1,
      slug: 'teen-patti-master',
      name: 'Teen Patti Master',
      category: 'Teen Patti',
      rating: '4.9',
      size: '45 MB',
      icon: '/teen-patti-master.webp',
      description: "India's most popular 3 Patti card game with instant cash rewards and fast withdrawals."
    },
    {
      id: 2,
      slug: 'teen-patti-gold',
      name: 'Teen Patti Gold',
      category: 'Teen Patti Gold',
      rating: '4.8',
      size: '38 MB',
      icon: '/teen-patti-gold.webp',
      description: 'Play live on private tables with friends featuring a classic premium gold theme.'
    },
    {
      id: 3,
      slug: 'rummy-circle',
      name: 'Rummy Circle',
      category: 'Rummy',
      rating: '4.7',
      size: '52 MB',
      icon: '/rummy-cirkal.webp',
      description: 'Compete with millions of real players in 13-card rummy and win mega daily tournaments.'
    },
    {
      id: 4,
      slug: 'junglee-rummy',
      name: 'Junglee Rummy',
      category: 'Junglee Rummy',
      rating: '4.6',
      size: '41 MB',
      icon: '/junglee-rummy.webp',
      description: 'The most trusted and secure platform for 100% legal cash rummy gameplay.'
    },
    {
      id: 5,
      slug: 'poker-stars-india',
      name: 'Poker Stars India',
      category: 'Poker',
      rating: '4.8',
      size: '60 MB',
      icon: '/poker-stars.webp',
      description: 'World-class poker experience featuring Texas Hold’em and high-stakes tournaments.'
    },
    {
      id: 6,
      slug: 'winzo-games',
      name: 'WinZO Games',
      category: 'WINZO Game',
      rating: '4.5',
      size: '95 MB',
      icon: '/winzo-game.webp',
      description: 'Over 100+ popular casual games like Ludo, Carrom, Cricket, and card games in one app.'
    },
    {
      id: 7,
      slug: 'teen-patti-star',
      name: 'Teen Patti Star',
      category: 'Teen Patti Star',
      rating: '4.8',
      size: '42 MB',
      icon: '/teen-patti-star.webp',
      description: 'Enjoy exclusive VIP tables, free daily chips, and non-stop 24x7 real-time card action.'
    },
    {
      id: 8,
      slug: 'yono-games',
      name: 'Yono Games',
      category: 'YONO Game',
      rating: '4.7',
      size: '58 MB',
      icon: '/yono-game.webp',
      description: 'Exciting casino slots, lucky roulette, and jackpot games with instant signup bonuses.'
    },
    {
      id: 9,
      slug: 'teen-patti-old-version',
      name: 'Teen Patti Old Version',
      category: 'Teen Patti Old',
      rating: '4.6',
      size: '48 MB',
      icon: '/teen-patti-master-old-version.webp',
      description: 'Experience real-time multiplayer tables and play live 3 Patti with genuine dealers.'
    }
  ];

  const seoBlogPosts = [
    {
      id: 1,
      slug: 'teen-patti-master-apk-download',
      title: 'Teen Patti Master APK Download',
      category: 'OFFICIAL APK',
      symbol: '📥',
      readTime: '4 min read',
      excerpt: 'Get the latest official Teen Patti Master APK direct download link with zero malware risk for all Android devices.',
      cardBg: 'bg-emerald-50 hover:bg-emerald-100/90 border-emerald-300',
      badgeBg: 'bg-emerald-600 text-white',
      titleColor: 'text-emerald-950'
    },
    {
      id: 2,
      slug: 'teen-patti-master-51-bonus',
      title: 'Teen Patti Master ₹51 Bonus Claim Guide',
      category: 'FREE BONUS',
      symbol: '💵',
      readTime: '4 min read',
      excerpt: 'Step-by-step guide to claiming your ₹51 instant mobile sign-up bonus without any deposit.',
      cardBg: 'bg-lime-50 hover:bg-lime-100/90 border-lime-300',
      badgeBg: 'bg-lime-600 text-white',
      titleColor: 'text-lime-950'
    },
    {
      id: 3,
      slug: 'teen-patti-master-offline',
      title: 'Teen Patti Master Offline: Play Game Without Internet',
      category: 'OFFLINE MODE',
      symbol: '📶',
      readTime: '5 min read',
      excerpt: 'Learn how to play Teen Patti Master offline with AI practice bots when you have no mobile internet connection.',
      cardBg: 'bg-teal-50 hover:bg-teal-100/90 border-teal-300',
      badgeBg: 'bg-teal-600 text-white',
      titleColor: 'text-teal-950'
    },
    {
      id: 4,
      slug: 'teen-patti-master-2026',
      title: 'Teen Patti Master 2026 Edition',
      category: '2026 RELEASE',
      symbol: '🚀',
      readTime: '5 min read',
      excerpt: 'Discover what is new in 2026: upgraded graphics, lightning-fast game loading, and instant bank cashout systems.',
      cardBg: 'bg-blue-50 hover:bg-blue-100/90 border-blue-300',
      badgeBg: 'bg-blue-600 text-white',
      titleColor: 'text-blue-950'
    },
    {
      id: 5,
      slug: 'teen-patti-master-2027',
      title: 'Teen Patti Master 2027 Roadmap',
      category: 'NEXT GEN',
      symbol: '✨',
      readTime: '4 min read',
      excerpt: 'Sneak peek into upcoming 2027 game updates, AI fair play verification, and ultra-secure multiplayer table rooms.',
      cardBg: 'bg-purple-50 hover:bg-purple-100/90 border-purple-300',
      badgeBg: 'bg-purple-600 text-white',
      titleColor: 'text-purple-950'
    },
    {
      id: 6,
      slug: 'teen-patti-master-real-cash-game',
      title: 'Teen Patti Master Real Cash Game',
      category: 'REAL MONEY',
      symbol: '💰',
      readTime: '6 min read',
      excerpt: 'Essential tips and rules for playing real cash games responsibly. Win real prizes with tested smart moves.',
      cardBg: 'bg-amber-50 hover:bg-amber-100/90 border-amber-300',
      badgeBg: 'bg-amber-600 text-white',
      titleColor: 'text-amber-950'
    },
    {
      id: 7,
      slug: 'teen-patti-master-app-download-free',
      title: 'Teen Patti Master App Download Free',
      category: 'FREE INSTALL',
      symbol: '🎁',
      readTime: '5 min read',
      excerpt: 'How to safely install Teen Patti Master for free and claim exclusive welcome free chips on your first login.',
      cardBg: 'bg-rose-50 hover:bg-rose-100/90 border-rose-300',
      badgeBg: 'bg-rose-600 text-white',
      titleColor: 'text-rose-950'
    },
    {
      id: 8,
      slug: 'teen-patti-master-customer-care',
      title: 'Teen Patti Master Customer Care',
      category: '24/7 SUPPORT',
      symbol: '🎧',
      readTime: '3 min read',
      excerpt: 'Need instant support for withdrawals or game errors? Access the verified WhatsApp and helpline support channels.',
      cardBg: 'bg-cyan-50 hover:bg-cyan-100/90 border-cyan-300',
      badgeBg: 'bg-cyan-700 text-white',
      titleColor: 'text-cyan-950'
    },
    {
      id: 9,
      slug: 'teen-patti-master-casino',
      title: 'Teen Patti Master Casino Games',
      category: 'CASINO LOBBY',
      symbol: '🎰',
      readTime: '5 min read',
      excerpt: 'Explore all popular casino slots, lucky roulette, dragon vs tiger, and live cards inside the Master app.',
      cardBg: 'bg-orange-50 hover:bg-orange-100/90 border-orange-300',
      badgeBg: 'bg-orange-600 text-white',
      titleColor: 'text-orange-950'
    },
    {
      id: 10,
      slug: 'teen-patti-master-new-version',
      title: 'Teen Patti Master New Version',
      category: 'UPDATE',
      symbol: '⚡',
      readTime: '4 min read',
      excerpt: 'Upgrade to the lightning-fast new version featuring upgraded anti-cheat protocols, fluid card animations, and 60-second UPI withdrawals.',
      cardBg: 'bg-emerald-50 hover:bg-emerald-100/90 border-emerald-300',
      badgeBg: 'bg-emerald-700 text-white',
      titleColor: 'text-emerald-950'
    },
    {
      id: 11,
      slug: 'teen-patti-master-online',
      title: 'Teen Patti Master Online Table Play',
      category: 'LIVE TABLES',
      symbol: '🌐',
      readTime: '5 min read',
      excerpt: 'How to enter live multiplayer tables, choose the right boot value, and play against real verified players without bot interruptions.',
      cardBg: 'bg-sky-50 hover:bg-sky-100/90 border-sky-300',
      badgeBg: 'bg-sky-700 text-white',
      titleColor: 'text-sky-950'
    },
    {
      id: 12,
      slug: 'teen-patti-master-game',
      title: 'Teen Patti Master Game Overview',
      category: 'CORE RULES',
      symbol: '🃏',
      readTime: '4 min read',
      excerpt: 'A beginner-friendly breakdown of 3-card poker rules, standard blind rounds, pot limitations, and when to request a show.',
      cardBg: 'bg-amber-50 hover:bg-amber-100/90 border-amber-300',
      badgeBg: 'bg-amber-700 text-white',
      titleColor: 'text-amber-950'
    },
    {
      id: 13,
      slug: 'teen-patti-master-download-guide',
      title: 'Teen Patti Master Download Guide',
      category: 'HOW TO INSTALL',
      symbol: '📲',
      readTime: '3 min read',
      excerpt: 'Step-by-step instructions on downloading the safe APK file, overcoming device security prompts, and setting up your first guest wallet.',
      cardBg: 'bg-indigo-50 hover:bg-indigo-100/90 border-indigo-300',
      badgeBg: 'bg-indigo-700 text-white',
      titleColor: 'text-indigo-950'
    },
    {
      id: 14,
      slug: 'teen-patti-master-old-vs-new',
      title: 'Teen Patti Master Old vs New Version',
      category: 'COMPARISON',
      symbol: '⚖',
      readTime: '6 min read',
      excerpt: 'Which version suits your phone better? We compare battery consumption, table responsiveness, and payment gateway stability.',
      cardBg: 'bg-violet-50 hover:bg-violet-100/90 border-violet-300',
      badgeBg: 'bg-violet-700 text-white',
      titleColor: 'text-violet-950'
    },
    {
      id: 15,
      slug: 'teen-patti-master-vs-gold',
      title: 'Teen Patti Master vs Teen Patti Gold',
      category: 'SHOWDOWN',
      symbol: '🏆',
      readTime: '5 min read',
      excerpt: 'Comparing the two giants of Indian card games: analyze bonus frequencies, private room perks, and daily chip rewards.',
      cardBg: 'bg-yellow-50 hover:bg-yellow-100/90 border-yellow-400',
      badgeBg: 'bg-yellow-700 text-white',
      titleColor: 'text-yellow-950'
    },
    {
      id: 16,
      slug: 'teen-patti-android-game',
      title: 'Teen Patti Android Game Setup',
      category: 'ANDROID OPTIMIZE',
      symbol: '🤖',
      readTime: '4 min read',
      excerpt: 'Optimize your Android settings for lag-free card rounds, zero app crashes, and minimal battery drain during long sessions.',
      cardBg: 'bg-green-50 hover:bg-green-100/90 border-green-300',
      badgeBg: 'bg-green-700 text-white',
      titleColor: 'text-green-950'
    },
    {
      id: 17,
      slug: 'teen-patti-master-secrets',
      title: 'Teen Patti Master Pro Secrets',
      category: 'TIPS & TRICKS',
      symbol: '🗝️',
      readTime: '6 min read',
      excerpt: 'Master the art of folding bad hands early, bluffing conservatively on blind turns, and spotting aggressive table patterns.',
      cardBg: 'bg-purple-50 hover:bg-purple-100/90 border-purple-300',
      badgeBg: 'bg-purple-700 text-white',
      titleColor: 'text-purple-950'
    },
    {
      id: 18,
      slug: 'teen-patti-master-loss-recover',
      title: 'Teen Patti Master Loss Recovery Strategy',
      category: 'BANKROLL DISCIPLINE',
      symbol: '🛡️',
      readTime: '5 min read',
      excerpt: 'A practical, disciplined approach to protecting your wallet balance, avoiding revenge playing, and resetting your gaming mindset.',
      cardBg: 'bg-rose-50 hover:bg-rose-100/90 border-rose-300',
      badgeBg: 'bg-rose-700 text-white',
      titleColor: 'text-rose-950'
    },
    {
      id: 19,
      slug: 'teen-patti-master-faq',
      title: 'Teen Patti Master FAQ',
      category: 'FACT CHECK',
      symbol: '🔍',
      readTime: '4 min read',
      excerpt: 'Busting common internet myths about win predictors, bot rooms, withdrawal verification, and genuine RNG certified mechanics.',
      cardBg: 'bg-cyan-50 hover:bg-cyan-100/90 border-cyan-300',
      badgeBg: 'bg-cyan-700 text-white',
      titleColor: 'text-cyan-950'
    },
    {
      id: 20,
      slug: 'teen-patti-master-welcome-bonus',
      title: 'Teen Patti Master Welcome Bonus Guide',
      category: 'FREE REWARDS',
      symbol: '🎁',
      readTime: '4 min read',
      excerpt: 'Claim sign-up rewards, free spin wheels, daily check-in coins, and milestone cashback directly in your registered account.',
      cardBg: 'bg-pink-50 hover:bg-pink-100/90 border-pink-300',
      badgeBg: 'bg-pink-700 text-white',
      titleColor: 'text-pink-950'
    },
    {
      id: 21,
      slug: 'teen-patti-master-explained',
      title: 'Teen Patti Master Explained Completely',
      category: 'DEEP DIVE',
      symbol: '📖',
      readTime: '6 min read',
      excerpt: 'From card sequence hierarchies to VIP loyalty levels, understand every single feature available inside the lobby.',
      cardBg: 'bg-slate-100 hover:bg-slate-200 border-slate-300',
      badgeBg: 'bg-slate-800 text-white',
      titleColor: 'text-slate-950'
    },
    {
      id: 22,
      slug: 'teen-patti-vungo',
      title: 'Teen Patti Vungo Download & Safe Bonus',
      category: 'CASUAL APPS',
      symbol: '🌟',
      readTime: '4 min read',
      excerpt: 'An objective review of the Vungo card edition, checking download safety, genuine payout speeds, and beginner chip bonuses.',
      cardBg: 'bg-teal-50 hover:bg-teal-100/90 border-teal-300',
      badgeBg: 'bg-teal-700 text-white',
      titleColor: 'text-teal-950'
    },
    {
      id: 23,
      slug: 'teen-patti-master-yono-game-apk',
      title: 'Teen Patti Master Yono Game APK Features',
      category: 'YONO SLOTS',
      symbol: '🎰',
      readTime: '5 min read',
      excerpt: 'Explore the slot machines, arcade mini-games, and 3-card poker tables hosted inside the trending Yono Game ecosystem.',
      cardBg: 'bg-fuchsia-50 hover:bg-fuchsia-100/90 border-fuchsia-300',
      badgeBg: 'bg-fuchsia-700 text-white',
      titleColor: 'text-fuchsia-950'
    },
    {
      id: 24,
      slug: 'teen-patti-master-vs-yono-game',
      title: 'Teen Patti Master vs Yono Games',
      category: 'HEAD TO HEAD',
      symbol: '⚔️',
      readTime: '5 min read',
      excerpt: 'Which platform provides smoother gameplay, transparent cashouts, and superior loyalty rewards for dedicated card enthusiasts?',
      cardBg: 'bg-orange-50 hover:bg-orange-100/90 border-orange-300',
      badgeBg: 'bg-orange-700 text-white',
      titleColor: 'text-orange-950'
    },
    {
      id: 25,
      slug: 'teen-patti-master-vs-rummy',
      title: 'Teen Patti Master vs Rummy',
      category: 'SKILL VS LUCK',
      symbol: '🧠',
      readTime: '6 min read',
      excerpt: 'Analyze the mathematical dynamics: when does 13-card rummy calculation offer an edge compared to quick 3-card psychological play?',
      cardBg: 'bg-lime-50 hover:bg-lime-100/90 border-lime-300',
      badgeBg: 'bg-lime-700 text-white',
      titleColor: 'text-lime-950'
    },
    {
      id: 26,
      slug: 'teen-patti-master-king',
      title: 'Teen Patti Master King',
      category: 'PRO MASTERY',
      symbol: '👑',
      readTime: '7 min read',
      excerpt: 'Proven habits of tournament finalists: read opponents without seeing cards, control boot amounts, and maintain strict table limits.',
      cardBg: 'bg-amber-100 hover:bg-amber-200 border-amber-400',
      badgeBg: 'bg-amber-800 text-white',
      titleColor: 'text-amber-950'
    },
    {
      id: 27,
      slug: 'teen-patti-gold-old-version',
      title: 'Teen Patti Gold Old Version Legacy Guide',
      category: 'VINTAGE APP',
      symbol: '📻',
      readTime: '4 min read',
      excerpt: 'Why casual players still search for the classic Gold version. Reviewing smooth compatibility on older Android releases.',
      cardBg: 'bg-stone-100 hover:bg-stone-200 border-stone-300',
      badgeBg: 'bg-stone-700 text-white',
      titleColor: 'text-stone-900'
    },
    {
      id: 28,
      slug: 'teen-patti-gold-new-version',
      title: 'Teen Patti Gold New Version Updates',
      category: 'GOLD UPGRADE',
      symbol: '✨',
      readTime: '4 min read',
      excerpt: 'Discover the latest private table tools, voice emojis, and daily festival contests added in the newest official Teen Patti Gold release.',
      cardBg: 'bg-yellow-100 hover:bg-yellow-200 border-yellow-400',
      badgeBg: 'bg-yellow-800 text-white',
      titleColor: 'text-yellow-950'
    },
    {
      id: 29,
      slug: 'teen-patti-gold-new-vs-old',
      title: 'Teen Patti Gold: New vs Old Version Verdict',
      category: 'VERDICT',
      symbol: '🎯',
      readTime: '5 min read',
      excerpt: 'A complete technical test on startup speeds, frame rates, memory consumption, and battery preservation across Android smartphones.',
      cardBg: 'bg-red-50 hover:bg-red-100/90 border-red-300',
      badgeBg: 'bg-red-700 text-white',
      titleColor: 'text-red-950'
    },
    {
      id: 30,
      slug: 'teen-patti-master-faq-vs-real-game',
      title: 'Teen Patti Master FAQ: Top Questions Answered',
      category: 'HELP & FAQ',
      symbol: '❓',
      readTime: '5 min read',
      excerpt: 'Everything you need to know about withdrawal limits, account verification, daily bonus rules, and device compatibility in one complete guide.',
      cardBg: 'bg-indigo-50 hover:bg-indigo-100/90 border-indigo-300',
      badgeBg: 'bg-indigo-700 text-white',
      titleColor: 'text-indigo-950'
    }
  ];

  const faqList = [
    {
      id: 1,
      badge: "DOWNLOAD",
      q: "What is Teen Patti Master App? How to get the official app?",
      a: "Teen Patti Master is India's leading 3-card poker mobile platform offering real-cash table action, seamless UPI cashouts, and multi-mode gameplay. Since cash gaming apps are restricted on Google Play Store, you can safely download the authentic, malware-free APK package directly from this official portal."
    },
    {
      id: 2,
      badge: "FREE BONUS",
      q: "How to claim ₹51 Welcome Signup Bonus at Teen Patti Master?",
      a: "To claim ₹51 free chips: 1. Download and install the app as guest. 2. Tap on your user avatar and select 'Bind Mobile'. 3. Enter your 10-digit mobile number and submit the received OTP. The ₹51 free sign-up credit will be loaded immediately to your playable wallet balance."
    },
    {
      id: 3,
      badge: "SECURITY",
      q: "Download an APK file, Android says 'File may be harmful' Why?",
      a: "This is a standard default security alert triggered by the Android OS whenever an application is downloaded directly via an internet browser instead of Google Play. If you obtain the APK from our verified portal, it is 100% clean and secure. Simply select 'Download Anyway' to proceed."
    },
    {
      id: 4,
      badge: "FAIR PLAY",
      q: "Is the card dealing in Teen Patti Master app fair and safe?",
      a: "Yes. Teen Patti Master operates on a certified Random Number Generator (RNG) engine. This ensures completely unpredictable, cryptographically random card distributions for both blind and seen hands, eliminating any systemic house bias or backend tampering."
    },
    {
      id: 5,
      badge: "PAYMENTS",
      q: "How can you take out your earnings through UPI or Direct Bank Transfer?",
      a: "Navigate to the 'Withdraw' tab in the main game lobby. Enter your registered UPI ID or Bank Account particulars (Account Number, IFSC Code, and Name). Specify your cashout amount and press Confirm. Validated requests are processed through automated payment gateways within 60 seconds to 15 minutes."
    },
    {
      id: 6,
      badge: "LIMITS",
      q: "What’s the minimum withdrawal and are there any fees for the withdrawal?",
      a: "The minimum cashout limit starts at ₹100. Standard withdrawals to UPI IDs or verified bank accounts are processed with zero platform deduction charges."
    },
    {
      id: 7,
      badge: "GAME MODES",
      q: "What are the trending game modes inside Teen Patti Master?",
      a: "Beyond classic 3 Patti (Blind & Chaal), the lobby hosts Points and Pool Rummy, Dragon vs Tiger, 7 Up Down, Car Roulette, Andar Bahar, and instant arcade mini-games."
    },
    {
      id: 8,
      badge: "PRIVATE ROOM",
      q: "How can I get a private room/table to play with my friends?",
      a: "Select the 'Private Table' module in the lobby, set your desired boot amount and player limits. The system generates a distinct 6-digit code which you can share with friends on WhatsApp to host an exclusive private match."
    },
    {
      id: 9,
      badge: "RULES",
      q: "What is the difference between 'Blind' and 'Chaal' turn in Teen Patti?",
      a: "Blind involves betting without viewing your 3 dealt cards, which requires only the baseline boot stake. Chaal means wagering after seeing your cards; seen players must stake at least double the current blind bet value to continue in the hand."
    },
    {
      id: 10,
      badge: "AFFILIATE",
      q: "What is the Teen Patti Master Refer & Earn programme?",
      a: "Every verified user receives a dedicated invite code and link. When your invited peers download and play, you earn an instant sign-up commission plus up to 30% lifetime rebate on their gameplay. Referral earnings can be cashed out directly without gameplay requirements."
    },
    {
      id: 11,
      badge: "LEGAL",
      q: "Which Indian states have restrictions on real money card games?",
      a: "While skill-oriented card gaming is nationally recognized, certain states including Andhra Pradesh, Telangana, Assam, Odisha, Sikkim, and Nagaland uphold separate state statutes. Players situated within these jurisdictions must play non-cash casual modes."
    },
    {
      id: 12,
      badge: "SUPPORT",
      q: "What happens if a withdrawal fails or doesn’t go through?",
      a: "If an automated payout experiences temporary banking network congestion, bank reconciliation clears within 24 hours. In case of failure, funds automatically revert to your game wallet. If assistance is needed, customer care chat is accessible 24/7 with your transaction Order ID."
    },
    {
      id: 13,
      badge: "OPTIMIZE",
      q: "How to avoid app lag or sudden network disconnect?",
      a: "Close heavy background applications prior to launching the table, keep at least 1 GB of free phone memory, connect via stable 4G/5G or Wi-Fi, and periodically clear app cache data from Android device settings."
    },
    {
      id: 14,
      badge: "ACCOUNTS",
      q: "Is it possible to create more than one Teen Patti Master account on a single mobile phone?",
      a: "No. The security architecture enforces a strict 1-account-per-device policy. Cloned apps or multi-accounting attempts trigger automated anti-fraud security protocols and lead to wallet freezing."
    },
    {
      id: 15,
      badge: "DISCIPLINE",
      q: "How to protect your balance and avoid consecutive losses?",
      a: "Always implement disciplined bankroll control: never stake above 5% of your available funds on any single table, establish daily profit/loss stop targets, and avoid tilt betting after losing hands."
    }
  ];

  const visiblePosts = showAllPosts ? seoBlogPosts : seoBlogPosts.slice(0, 7);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* 0. SEO JSON-LD Rich Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Teen Patti Master",
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "124800"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqList.map((faq) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            }
          ])
        }}
      />

      {/* 1. Header & Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-2xl font-black text-amber-400 tracking-wide flex items-center gap-3">
          <div className="w-8 h-8 relative overflow-hidden rounded-md flex-shrink-0">
            <Image 
              src="/teen-patti-master.webp" 
              alt="Teen Patti Master Logo" 
              fill 
              sizes="32px"
              className="object-cover" 
            />
          </div>
          <span>TeenPatti<span className="text-white">Master</span></span>
        </Link>
        <div className="hidden md:flex space-x-6 text-sm font-semibold text-gray-300">
          <Link href="/" className="hover:text-amber-400 transition">Home</Link>
          <a href="#games" className="hover:text-amber-400 transition">All Games</a>
          <a href="#posts" className="hover:text-amber-400 transition">Guides &amp; Posts</a>
          <a href="#guide" className="hover:text-amber-400 transition">App Guide</a>
          <a href="#faq" className="hover:text-amber-400 transition">FAQs</a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="text-center py-12 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <h1 className="text-4xl md:text-6xl font-extrabold text-amber-400 mb-4 drop-shadow-md">
          Teen Patti Master APK Download (Official)
        </h1>
        <p className="text-gray-100 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Download the latest Teen Patti Master APK version. Get ₹51 instant welcome bonus chips, certified RNG card tables, and 60-second UPI cashouts.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search your favorite game..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-800 text-white px-5 py-3 rounded-full border border-slate-700 focus:border-amber-400 focus:outline-none shadow-inner"
          />
          
          {/* Main Hero Download Button */}
          <div className="flex justify-center mt-6">
            <a 
              href={DOWNLOAD_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.6)] hover:scale-105 transition-all duration-300 border-2 border-yellow-300 inline-block"
            >
              Download App Now 🚀
            </a>
          </div>
        </div>
      </section>

      {/* 3. Games Grid Section */}
      <section id="games" className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-amber-300 border-b border-slate-800 pb-3 flex items-center gap-2">
          🔥 Trending Apps ({filteredGames.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="bg-slate-900 rounded-2xl p-5 border border-slate-800 hover:border-amber-400 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <Link href={`/games/${game.slug}`} className="flex items-center gap-4 mb-3 group">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-amber-500/30 flex-shrink-0 relative bg-slate-800 shadow-md group-hover:scale-105 transition-transform">
                    <Image 
                      src={game.icon} 
                      alt={game.name} 
                      fill 
                      sizes="56px"
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-amber-400 transition-colors">
                      {game.name}
                    </h3>
                    <span className="text-xs text-amber-400/90 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded mt-1 inline-block">
                      {game.category}
                    </span>
                  </div>
                </Link>

                <p className="text-xs font-semibold text-gray-200 leading-relaxed min-h-[36px]">
                  {game.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex justify-between items-center mt-4">
                <div>
                  <div className="text-amber-400 text-sm font-semibold">⭐ {game.rating}</div>
                  <div className="text-xs text-gray-500">{game.size}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/games/${game.slug}`}
                    className="border border-slate-700 hover:border-amber-400 text-gray-300 hover:text-white px-3 py-2 rounded-xl text-xs font-semibold transition"
                  >
                    Details
                  </Link>
                  
                  {/* Game Card Download Button */}
                  <a
                    href={DOWNLOAD_URL}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold px-4 py-2 rounded-xl text-sm transition shadow-md"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Guides & Posts Grid Section (Clean Single Source for All 30 Articles) */}
      <section id="posts" className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800/80">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-400">
            📚 Teen Patti Master Guides, Tips &amp; Updates ({visiblePosts.length} of {seoBlogPosts.length})
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Explore dedicated guides below. Click on any topic box to open its comprehensive post.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className={`${post.cardBg} rounded-2xl p-6 border transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`${post.badgeBg} text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider`}>
                    {post.category}
                  </span>
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-200">
                    {post.symbol}
                  </span>
                </div>

                <h3 className={`text-lg font-extrabold ${post.titleColor} mb-2 leading-snug font-serif`}>
                  {post.title}
                </h3>

                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-black/10 text-xs font-bold text-gray-600">
                <span>{post.readTime}</span>
                <span className="text-slate-900 group-hover:translate-x-1 transition-transform">Read Article →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAllPosts(!showAllPosts)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-emerald-950 bg-[#FAF9F6] border-2 border-[#2D735C] hover:bg-[#E5F0EA] shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <span>{showAllPosts ? 'Show Less Articles ↑' : 'Read All Blog Posts 📚'}</span>
            <span className="text-[#2D735C] group-hover:translate-x-1 transition-transform font-black">
              {showAllPosts ? '←' : '→'}
            </span>
          </button>
        </div>
      </section>

      {/* 5. Fully Optimized High-Authority SEO Article Section (Direct Organic Traffic Driver) */}
      <article id="guide" className="max-w-5xl mx-auto px-6 py-14 text-gray-300 space-y-12 border-t border-slate-800/80 mt-6 pb-20">
        
        {/* Main Pillar Header */}
        <div className="space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full inline-block">
            Official 2026 Release &amp; APK Verification
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Teen Patti Master APK Download: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">The Complete Guide &amp; Latest Version</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            Card games in India have evolved from family gathering traditions to interactive, secure mobile entertainment. Leading this digital transformation is <strong>Teen Patti Master</strong>—a premier 3-card poker and casino game application engineered for seamless real-time multiplayer action, certified RNG fairness, and fast UPI cashouts across India.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-gray-400">
            Whether you are downloading the APK for the first time to claim your free ₹51 welcome chips or seeking tactical poker strategies, this official guide breaks down system specifications, security checks, and hand hierarchy rankings.
          </p>
        </div>

        {/* Quick Spec Sheet Table for Search Engine Featured Answers */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
            📊 Teen Patti Master Official APK Overview
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-slate-800 text-gray-300">
                <tr className="hover:bg-slate-800/40">
                  <td className="py-3 font-semibold text-gray-400">Application Name</td>
                  <td className="py-3 text-white font-medium">Teen Patti Master (Original)</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="py-3 font-semibold text-gray-400">Latest Build</td>
                  <td className="py-3 text-emerald-400 font-medium">v1.8.6 (Latest Stable Release)</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="py-3 font-semibold text-gray-400">APK Package Size</td>
                  <td className="py-3">45.2 MB (Ultra-Lightweight)</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="py-3 font-semibold text-gray-400">Sign-Up Welcome Bonus</td>
                  <td className="py-3 text-amber-400 font-bold">₹51 Instant Free Chips (On Mobile Binding)</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="py-3 font-semibold text-gray-400">Minimum Withdrawal</td>
                  <td className="py-3">₹100 (Instant UPI &amp; IMPS Bank Transfer)</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="py-3 font-semibold text-gray-400">Compatibility</td>
                  <td className="py-3">Android 5.0+ (Optimized for all processors)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Why Teen Patti Master Stands Out Among Indian Card Apps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-amber-400/40 transition">
              <h4 className="text-lg font-bold text-amber-300 mb-2">⚡ 45MB Lightweight Engine</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Consumes minimal internal storage and memory. Operates smoothly on entry-level budget smartphones with zero mid-hand freezing or overheating issues.
              </p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-amber-400/40 transition">
              <h4 className="text-lg font-bold text-amber-300 mb-2">🛡️ Certified RNG Architecture</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                All shuffles and card deals are dictated by certified Random Number Generator (RNG) logic, preventing any algorithmic manipulation or table bias.
              </p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-amber-400/40 transition">
              <h4 className="text-lg font-bold text-amber-300 mb-2">💳 60-Second UPI Cashouts</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Withdraw your winnings directly to Google Pay, PhonePe, Paytm, or bank accounts with 256-bit encryption and no platform deduction charges.
              </p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-amber-400/40 transition">
              <h4 className="text-lg font-bold text-amber-300 mb-2">👥 Private Tables &amp; Live Chat</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Create customized rooms with set boot limits. Invite friends with an easy 6-digit code to play together with interactive emojis and live tables.
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Installation Optimized for Featured Snippets */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            How to Safely Download &amp; Install Teen Patti Master APK
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Follow these verified steps to install the authentic package and claim your instant ₹51 bonus:
          </p>
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-start gap-4">
              <span className="bg-amber-400 text-slate-950 font-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <div>
                <strong className="text-white text-base block mb-1">Download the APK Bundle</strong>
                <p className="text-sm text-gray-400">Tap on the Download button on this page to get the verified <code>.apk</code> package.</p>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-start gap-4">
              <span className="bg-amber-400 text-slate-950 font-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <div>
                <strong className="text-white text-base block mb-1">Enable Unknown Sources</strong>
                <p className="text-sm text-gray-400">Go to your Android <em>Settings &gt; Security (or Apps)</em> and toggle &apos;Install Unknown Apps&apos; ON for your browser.</p>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-start gap-4">
              <span className="bg-amber-400 text-slate-950 font-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <div>
                <strong className="text-white text-base block mb-1">Complete Installation</strong>
                <p className="text-sm text-gray-400">Open your Downloads folder, tap the APK file, and click &apos;Install&apos;.</p>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-start gap-4">
              <span className="bg-amber-400 text-slate-950 font-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
              <div>
                <strong className="text-white text-base block mb-1">Bind Phone for ₹51 Bonus</strong>
                <p className="text-sm text-gray-400">Launch the app, go to your profile, select &apos;Bind Mobile&apos;, enter your 10-digit number, and verify with OTP to instantly get ₹51 in your wallet.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hand Rankings Hierarchy Table */}
        <div className="space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Official 3 Patti Hand Rankings Hierarchy
          </h3>
          <p className="text-sm text-gray-400">
            Understanding hand strengths is essential for strategic betting and blind play. Here is the official ranking from highest to lowest:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border border-slate-800 rounded-xl overflow-hidden">
              <thead className="bg-slate-800 text-amber-300 uppercase text-xs">
                <tr>
                  <th className="p-3">Rank</th>
                  <th className="p-3">Hand Name</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Winning Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900/60 text-gray-300">
                <tr>
                  <td className="p-3 font-bold text-amber-400">#1</td>
                  <td className="p-3 font-semibold text-white">Trail / Trio (Set)</td>
                  <td className="p-3 text-gray-400">Three cards of the identical face rank</td>
                  <td className="p-3 text-amber-300 font-mono">A-A-A (Highest), K-K-K</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-400">#2</td>
                  <td className="p-3 font-semibold text-white">Pure Sequence</td>
                  <td className="p-3 text-gray-400">Three consecutive cards of the same suit</td>
                  <td className="p-3 text-amber-300 font-mono">A♠ - K♠ - Q♠</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-400">#3</td>
                  <td className="p-3 font-semibold text-white">Sequence (Run)</td>
                  <td className="p-3 text-gray-400">Three consecutive cards of mixed suits</td>
                  <td className="p-3 text-amber-300 font-mono">10♦ - 9♠ - 8♥</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-400">#4</td>
                  <td className="p-3 font-semibold text-white">Color / Flush</td>
                  <td className="p-3 text-gray-400">Three cards of the same suit (non-sequential)</td>
                  <td className="p-3 text-amber-300 font-mono">K♣ - 9♣ - 3♣</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-400">#5</td>
                  <td className="p-3 font-semibold text-white">Pair</td>
                  <td className="p-3 text-gray-400">Two cards of identical rank</td>
                  <td className="p-3 text-amber-300 font-mono">J♥ - J♦ - 5♠</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-400">#6</td>
                  <td className="p-3 font-semibold text-white">High Card</td>
                  <td className="p-3 text-gray-400">Standard hand with no combinations</td>
                  <td className="p-3 text-amber-300 font-mono">A♦ - 10♣ - 4♥</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Responsible Gaming Callout */}
        <div className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-4">
          <h4 className="text-xl font-bold text-amber-400 flex items-center gap-2">
            🛡️ Responsible Gaming &amp; Bankroll Protection
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Card gaming should strictly remain a casual entertainment pastime. To maintain safe and enjoyable sessions:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400">
            <li className="flex items-center gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-emerald-400 font-bold">✓</span> Never play with funds needed for essentials.
            </li>
            <li className="flex items-center gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-emerald-400 font-bold">✓</span> Never stake more than 5% of balance per round.
            </li>
            <li className="flex items-center gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-emerald-400 font-bold">✓</span> Minimum age requirement is strictly 18+.
            </li>
            <li className="flex items-center gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-emerald-400 font-bold">✓</span> Set time limits and avoid chasing losses.
            </li>
          </ul>
        </div>
      </article>

      {/* 6. FAQ Accordion Section */}
      <section id="faq" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/80">
        <div className="text-center mb-12">
          <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-4 py-1.5 rounded-full inline-block mb-3">
            Help &amp; Guidelines
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Teen Patti Master APK download, ₹51 bonus claims, UPI cashouts, and security.
          </p>
        </div>

        <div className="space-y-3">
          {faqList.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "bg-[#0c1613] border-amber-400/60 shadow-[0_4px_25px_rgba(251,191,36,0.1)]" 
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hidden sm:inline-block">
                      {faq.badge}
                    </span>
                    <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? "text-amber-300" : "text-stone-200"}`}>
                      {faq.id}. {faq.q}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-base font-black flex-shrink-0 transition-all duration-300 select-none ${
                    isOpen 
                      ? "bg-amber-400 text-slate-950 rotate-45 shadow-[0_0_10px_rgba(251,191,36,0.6)]" 
                      : "bg-slate-800 text-amber-400 border border-slate-700"
                  }`}>
                    +
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-2 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 bg-black/20">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. High-Authority Clean Footer (Replaced duplicate link section for Better SEO) */}
      <footer className="bg-slate-950 border-t border-slate-800/80 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-3">
            <h4 className="text-white font-bold text-lg">Teen Patti Master</h4>
            <p className="text-xs leading-relaxed text-gray-400">
              India&apos;s leading platform for genuine 3-card poker games, strategy tutorials, and certified APK download packages with instant cashout channels.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Popular Categories</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#games" className="hover:text-amber-400 transition">3 Patti Card Games</a></li>
              <li><a href="#games" className="hover:text-amber-400 transition">Online Rummy Apps</a></li>
              <li><a href="#games" className="hover:text-amber-400 transition">Casino Arcade Mini-Games</a></li>
              <li><a href="#posts" className="hover:text-amber-400 transition">VIP Room Bonus Guides</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Help &amp; Verification</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#faq" className="hover:text-amber-400 transition">₹51 Bonus Claim Guide</a></li>
              <li><a href="#guide" className="hover:text-amber-400 transition">Safe APK Installation Steps</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition">UPI Instant Withdrawal Help</a></li>
              <li><a href="#guide" className="hover:text-amber-400 transition">3 Patti Hand Rankings</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Legal &amp; Fair Play</h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-gray-300">18+ Players Only</li>
              <li className="hover:text-gray-300">RNG Fair Play Certified</li>
              <li className="hover:text-gray-300">Responsible Gaming Policy</li>
              <li className="hover:text-gray-300">State Legal Compliance</li>
            </ul>
          </div>

        </div>

        <div className="max-w-6xl mx-auto border-t border-slate-900 mt-10 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Teen Patti Master. All Rights Reserved. Card gaming involves financial risk. Please play responsibly.</p>
        </div>
      </footer>

      {/* 8. Floating Bottom-Right Download Widget */}
      <div className="fixed bottom-5 right-5 flex flex-col items-center gap-3 z-50">
        <a 
          href={DOWNLOAD_URL}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="relative hover:scale-105 transition-transform duration-300 cursor-pointer hidden sm:block"
        >
          <Image 
            src="/teen-patti-master-features.webp" 
            alt="Teen Patti Master Features" 
            width={180} 
            height={280} 
            className="rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] border-2 border-yellow-500"
          />
        </a>

        {/* Floating Green Download Link Button */}
        <a 
          href={DOWNLOAD_URL}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="px-5 py-2 text-sm md:text-base font-bold text-white bg-gradient-to-r from-green-500 to-green-700 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.7)] hover:scale-105 transition-all duration-300 animate-pulse border-2 border-green-300 flex items-center gap-2 max-w-[180px] justify-center mx-auto"
        >
          <span className="text-lg">🚀</span>
          DOWNLOAD
        </a>
      </div>

    </div>
  );
}