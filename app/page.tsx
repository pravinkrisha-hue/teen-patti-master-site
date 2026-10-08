'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  // 7 Posts vs All Posts Toggle State
  const [showAllPosts, setShowAllPosts] = useState<boolean>(false);
  // FAQ Accordion State (+ par click karta khulva/bandh thava mate)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Affiliate Download Link
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
      icon: '/Teen Patti Gold.webp',
      description: 'Play live on private tables with friends featuring a classic premium gold theme.'
    },
    {
      id: 3,
      slug: 'rummy-circle',
      name: 'Rummy Circle',
      category: 'Rummy',
      rating: '4.7',
      size: '52 MB',
      icon: '/rummy cirkal.webp',
      description: 'Compete with millions of real players in 13-card rummy and win mega daily tournaments.'
    },
    {
      id: 4,
      slug: 'junglee-rummy',
      name: 'Junglee Rummy',
      category: 'Junglee Rummy',
      rating: '4.6',
      size: '41 MB',
      icon: '/JUNGLEE RUMMY.webp',
      description: 'The most trusted and secure platform for 100% legal cash rummy gameplay.'
    },
    {
      id: 5,
      slug: 'poker-stars-india',
      name: 'Poker Stars India',
      category: 'Poker',
      rating: '4.8',
      size: '60 MB',
      icon: '/POKER STARS.webp',
      description: 'World-class poker experience featuring Texas Hold’em and high-stakes tournaments.'
    },
    {
      id: 6,
      slug: 'winzo-games',
      name: 'WinZO Games',
      category: 'WINZO Game',
      rating: '4.5',
      size: '95 MB',
      icon: '/WINZO Game.webp',
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
      icon: '/YONO GAME.webp',
      description: 'Exciting casino slots, lucky roulette, and jackpot games with instant signup bonuses.'
    },
    {
      id: 9,
      slug: 'teen-patti-old-version',
      name: 'Teen Patti Old Version',
      category: 'Teen Patti Old',
      rating: '4.6',
      size: '48 MB',
      icon: '/Teen Patti Master Old Version.webp',
      description: 'Experience real-time multiplayer tables and play live 3 Patti with genuine dealers.'
    }
  ];

  // 30 SEO Blog Posts
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
      slug: 'teen-patti-master-vungo',
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

  // 15 FAQs List with Content
  const faqList = [
    {
      id: 1,
      badge: "DOWNLOAD",
      q: "What is Teen Patti Master App? How to get the official app?",
      a: "Teen Patti Master is one of the most popular online 3 card and card gaming apps in India. It lets users get onto live multiplayer tables with real players. It’s not available on Google Play Store directly due to the store-listing policies, but you can safely download the official APK package from the verified website."
    },
    {
      id: 2,
      badge: "FREE BONUS",
      q: "How to claim ₹51 Welcome Signup Bonus at Teen Patti Master?",
      a: "To claim the welcome bonus: 1. Please install and run the app as guest. 2. Link Your 10 Digit Mobile Number To Your Profile. 3. Enter and confirm the OTP code received by SMS. The bonus chips (up to ₹51) will be credited instantly to your gaming account on verification and you can start exploring the games."
    },
    {
      id: 3,
      badge: "SECURITY",
      q: "Download an APK file, Android says 'File may be harmful' Why?",
      a: "This is a common security warning given by the Android operating system when you download an APK file directly from an Internet browser outside of the Google Play Store. It’s a system prompt automation. If you're downloading from an official portal that you know is verified, just tap 'Download Anyway' to continue."
    },
    {
      id: 4,
      badge: "FAIR PLAY",
      q: "Is the card dealing in Teen Patti Master app fair and safe?",
      a: "Yes. The gaming system utilises a certified Random Number Generator (RNG) engine to guarantee all card deals are entirely unbiased and unpredictable. This architecture ensures that the shuffles and distributions of cards are mathematically neutral and do not require human or backend intervention."
    },
    {
      id: 5,
      badge: "PAYMENTS",
      q: "How can you take out your earnings through UPI or Direct Bank Transfer?",
      a: "Open the game lobby and select the Withdraw button. Enter your Bank details or UPI ID (Account Number, IFSC Code, Account Holder Name). Enter the cash out amount within the limits of available balance, then tap on Confirm. Payouts verified via fast Indian payment channels generally take 60 seconds to 15 minutes to get credited."
    },
    {
      id: 6,
      badge: "LIMITS",
      q: "What’s the minimum withdrawal and are there any fees for the withdrawal?",
      a: "The minimum amount for withdrawal is generally ₹100 to ₹200 depending on your account and prevailing policies. Most standard payments using UPI aren’t subject to a platform fee deduction."
    },
    {
      id: 7,
      badge: "GAME MODES",
      q: "What is the name of Teen Patti Master and its game modes?",
      a: "The app includes Classic Teen Patti (Blind & Chaal), Pool Rummy & Point Rummy Games, Dragon vs Tiger, 7 Up Down, Animal Roulette & Car Roulette, Andar Bahar, and Arcade Slot Mini Games."
    },
    {
      id: 8,
      badge: "PRIVATE ROOM",
      q: "How can I get a private room/table to play with my friends?",
      a: "Select the 'Private Table' game option in the main lobby. Select your preferred boot size and player limits. Once created, the app will generate a 6-digit room code or a link to invite your friends to join on WhatsApp or messaging apps."
    },
    {
      id: 9,
      badge: "RULES",
      q: "What is the difference between 'Blind' and 'Chaal' turn in Teen Patti?",
      a: "Blind means playing without looking at your 3 hole-cards, which starts at a lower pot stake (boot value). Chaal means playing when you have seen your cards. If you are a seen player, you must put in at least twice the current blind bet to stay in the hand."
    },
    {
      id: 10,
      badge: "AFFILIATE",
      q: "What is the Teen Patti Master Refer & Earn programme?",
      a: "Each member has a personal referral code and personal referral link. When new players sign up and play through your link, you receive an instant sign-up bonus plus up to 30% recurring affiliate commission/rebate on their gameplay and balance recharge. No gameplay is needed to cash out."
    },
    {
      id: 11,
      badge: "LEGAL",
      q: "Which Indian states have restrictions on real money card games?",
      a: "Games of skill are nationally recognised. However, states such as Andhra Pradesh, Telangana, Assam, Odisha, Sikkim, and Nagaland have their own laws that ban gaming for real stakes. Players from these regions should not be playing for cash."
    },
    {
      id: 12,
      badge: "SUPPORT",
      q: "What happens if a withdrawal fails or doesn’t go through?",
      a: "If your payment is delayed due to banking delays or network congestion, bank servers may take up to 24 hours to clear routines. If it is marked as failed, funds will generally be refunded to your gaming wallet automatically. If you are still facing an issue, contact the in-app 24/7 Customer Care Chat with your transaction Order ID and screenshot."
    },
    {
      id: 13,
      badge: "OPTIMIZE",
      q: "How to avoid app lag or sudden network disconnect?",
      a: "Please close any background apps (such as streaming video or social feeds) before playing, make sure you have enough free space on your phone’s internal memory, use a good Wi-Fi router or solid 4G/5G connection, and occasionally clear cached files from the app settings menu."
    },
    {
      id: 14,
      badge: "ACCOUNTS",
      q: "Is it possible to create more than one Teen Patti Master account on a single mobile phone?",
      a: "No. We only allow one verified profile per smartphone to ensure fair-play and security policies. Anti-fraud detection systems can suspend wallets permanently on the same hardware if duplicate wallets or cloned apps are found."
    },
    {
      id: 15,
      badge: "DISCIPLINE",
      q: "How to protect your balance and avoid a back to back loss?",
      a: "Practice structured bankroll management: don’t risk more than 5% of your bankroll at any one hand or table, set a daily loss limit (e.g., stop playing after losing ₹500), and avoid 'revenge play' when losing several hands in a row."
    }
  ];

  // 7 posts view or All posts view
  const visiblePosts = showAllPosts ? seoBlogPosts : seoBlogPosts.slice(0, 7);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* 1. Header & Navigation */}
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
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
          <a href="#posts" className="hover:text-amber-400 transition">Guides & Posts</a>
          <a href="#guide" className="hover:text-amber-400 transition">App Guide</a>
          <a href="#faq" className="hover:text-amber-400 transition">FAQs</a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="text-center py-12 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <h1 className="text-4xl md:text-6xl font-extrabold text-amber-400 mb-4 drop-shadow-md">
          Teen Patti Master Gaming App
        </h1>
        <p className="text-gray-100 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Download the best trending card and casino gaming apps. Instant withdrawal, 100% verified APKs, and exciting rewards.
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
              rel="noopener noreferrer"
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
                    rel="noopener noreferrer"
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

      {/* 4. 7 Posts View + Read All Blog Posts Button Section */}
      <section id="posts" className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800/80">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-400">
            📚 Teen Patti Master Guides, Tips & Updates ({visiblePosts.length} of {seoBlogPosts.length})
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Explore dedicated guides below. Click on any topic box to open its comprehensive post.
          </p>
        </div>

        {/* Blog Cards Grid */}
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

        {/* All Read Blog Post Button */}
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

      {/* 5. Comprehensive Humanized SEO Article Section */}
      <article id="guide" className="max-w-5xl mx-auto px-6 py-12 text-gray-300 space-y-10 border-t border-slate-800/80 mt-6 pb-20">
        
        {/* ========================================================================= */}
        {/* REPLACED SECTION (Only 1st screenshot content replaced with 500+ Words)  */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-400 leading-tight">
            Teen Patti Master APK 2026: Everything You Need To Know
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            Card games in India have always been more than just numbers or chips, they are a part of age-old cultural tradition. For generations, games like Teen Patti have brought cousins together on Diwali nights, sparked spirited conversations at weekend family get-togethers, and provided the setting for casual rooftop evenings. As mobile technology has been advancing at a dizzying pace, the cherished tradition has smoothly transitioned to our smartphone screens. Leading that transition in 2026 is <Link href="/" className="text-amber-400 hover:underline font-semibold">Teen Patti Master</Link>, a mobile card platform that is lightweight, visually polished, and secure, built for both casual entertainment and tactical play.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-gray-400">
            Whether you’re a first-time user jumping into a virtual lobby to learn hand sequences, or a seasoned player testing your bluffing ability against real opponents, this complete 2026 guide breaks down everything from app mechanics and safety verifications to bankroll discipline.
          </p>

          <h3 className="text-xl sm:text-3xl font-bold text-amber-400 pt-2">
            What Makes Teen Patti Master Different From Other Card Gaming Apps
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            The digital gaming ecosystem is full of card apps that crash halfway, drain your device’s battery, or clutter your screen with annoying popups. Teen Patti Master is player-first in approach with strong emphasis on backend stability, fair matchmaking and transparency.
          </p>

          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <h4 className="text-lg font-bold text-amber-300 mb-2">⚡ Lag-Free Lightweight Performance</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                While the majority of the high-end games are hundreds of megabytes, the Teen Patti Master installation bundle is small, approximately 45 MB. The developers have also optimised asset pipelines so that the app runs smoothly on older Android smartphones without any frame drops. And dynamic data compression keeps you connected to tables consistently, even on weak 4G or unreliable Wi-Fi, so you don’t get disconnected during a critical showdown.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <h4 className="text-lg font-bold text-amber-300 mb-2">🛡️ Certified Random Number Generator (RNG) Validity</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                The greatest concern for online card players is rigged shuffling or systemic bias. That’s where Teen Patti Master comes in with a certified Random Number Generator (RNG). Strict cryptographic randomness rules every card dealt, shuffled and dealt across the virtual green felt. No way to manipulate the backend or bias the algorithms. The deck is mathematically neutral.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <h4 className="text-lg font-bold text-amber-300 mb-2">🎮 Different Table Dynamics and Mini Games</h4>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                The monotony kills card gaming. In addition to the standard Teen Patti (featuring real Blind and Chaal mechanics), the lobby contains numerous casual and casino-style variants available in our <a href="#games" className="text-amber-400 hover:underline font-semibold">trending games section</a>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
                <li><strong className="text-gray-200">Point and Pool Rummy:</strong> For those who love to calculate runs and pure sequences.</li>
                <li><strong className="text-gray-200">Quick Arcade Fun:</strong> Fast and easy rounds with Dragon vs Tiger, 7 Up Down, and Car Roulette.</li>
                <li><strong className="text-gray-200">Social Private Tables:</strong> Create your own tables with friends with a simple 6 digit room code, interactive emojis and live chat.</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <h4 className="text-lg font-bold text-amber-300 mb-2">💳 UPI & Banking Infrastructure That Just Works</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                The transaction gateway has been developed according to the Indian digital payment standards. Verified accounts get the benefit of 256-bit SSL encryption, enabling near-instant UPI and direct bank transfers. Payout requests are processed by automated payment switches and typically clear securely in a few minutes with no platform deduction fees. You can read common cashout questions in our <a href="#faq" className="text-amber-400 hover:underline font-semibold">FAQ section below</a>.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
            <h4 className="text-xl font-bold text-amber-400">Play Smart: Bankroll Discipline is Important</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Card gaming should always be a fun, relaxing pastime fundamentally. Long-term successful players are based on discipline, not superstition. It’s important to handle virtual balances responsibly to keep the game fun:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
              <li><strong className="text-gray-200">The 5% Rule:</strong> Never wager more than 5% of your total bankroll on one hand or one session.</li>
              <li><strong className="text-gray-200">Set Loss Limits:</strong> Decide how much you can afford to lose before you sit at the table. If you hit your limit, close the app and don’t look back.</li>
              <li><strong className="text-gray-200">Tilt Avoidance:</strong> Don’t react to back-to-back losses with rash, double-or-nothing decisions. The highest-percentage decision is always to walk away for a few hours. Explore more tips in our <a href="#posts" className="text-amber-400 hover:underline font-semibold">expert guides & blog posts</a>.</li>
            </ul>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-gray-300 border-l-4 border-amber-400 pl-4 italic">
            Teen Patti Master is a reliable and exciting destination for all classic 3-card poker lovers in India, with regular updates, strict anti-fraud monitoring, and a live community of card lovers across the country. You can <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline font-semibold not-italic">download the official APK now</a> to get started.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* KEPT UNTOUCHED: 2nd & 3rd SCREENSHOT SECTIONS (Features, Steps, Table, etc)*/}
        {/* ========================================================================= */}
        
        {/* Features Grid from Screenshot 2 */}
        <div className="space-y-4 pt-4 border-t border-slate-800/80">
          <h2 className="text-xl sm:text-3xl font-bold text-amber-400">
            Why Teen Patti Master Stands Out Among Card Gaming Apps
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            With dozens of card gaming apps in the market, Teen Patti Master maintains its position through rigorous performance tuning, transparent matchmaking, and lightweight architecture:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <h3 className="text-lg font-bold text-amber-300 mb-2">⚡ Ultra-Smooth & Lightweight Engine</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Engineered with compact asset bundles (approx. 45 MB), the app runs smoothly even on entry-level Android devices and maintains steady connectivity across 4G, 5G, and spotty Wi-Fi networks.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <h3 className="text-lg font-bold text-amber-300 mb-2">🛡️ Certified RNG Fair Play</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Card distributions are powered by certified Random Number Generator (RNG) systems to guarantee that every deck shuffle and deal is genuinely unbiased, preventing any systemic manipulation.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <h3 className="text-lg font-bold text-amber-300 mb-2">🎁 Daily Rewards & Referral Milestones</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Players can claim daily check-in free chips, complete spin-wheel challenges, and invite friends through custom referral codes to earn progressive tier bonuses.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <h3 className="text-lg font-bold text-amber-300 mb-2">👥 Private Tables & Social Interaction</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Host exclusive private rooms with custom boot amounts and invite personal friends using easy 6-digit invite codes, complete with in-game chats and animated expressive emojis.
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Installation from Screenshot 2 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-3xl font-bold text-amber-400">
            How to Safely Download and Install Teen Patti Master APK
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            Because real-money and card-based apps are frequently distributed directly as verified APK files, follow these standard steps to ensure a safe installation on your Android device:
          </p>

          <div className="space-y-3 bg-slate-900/70 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-start gap-3">
              <span className="bg-amber-400/20 text-amber-400 font-bold px-3 py-1 rounded-lg text-sm">Step 1</span>
              <p className="text-sm text-gray-300">
                Click on the verified <strong>Download</strong> link on our platform to get the authentic <code>.apk</code> installation bundle.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-amber-400/20 text-amber-400 font-bold px-3 py-1 rounded-lg text-sm">Step 2</span>
              <p className="text-sm text-gray-300">
                If your Android browser displays a prompt saying <em>&quot;File might be harmful&quot;</em>, select <strong>Download anyway</strong> (this is a standard OS warning for apps outside Google Play).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-amber-400/20 text-amber-400 font-bold px-3 py-1 rounded-lg text-sm">Step 3</span>
              <p className="text-sm text-gray-300">
                Open your device <strong>Settings &gt; Security (or Apps)</strong> and ensure <strong>Install Unknown Apps</strong> is toggled ON for your browser or file manager.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-amber-400/20 text-amber-400 font-bold px-3 py-1 rounded-lg text-sm">Step 4</span>
              <p className="text-sm text-gray-300">
                Locate the file in your <em>Downloads</em> folder, tap <strong>Install</strong>, and launch the game once the installation is finalized.
              </p>
            </div>
          </div>
        </div>

        {/* Hand Rankings Overview from Screenshot 3 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-3xl font-bold text-amber-400">
            Understanding Basic Teen Patti Hand Rankings
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            Mastering 3 Patti begins with knowing which hand beats which. Here is the official hierarchy from highest to lowest:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border border-slate-800 rounded-xl overflow-hidden">
              <thead className="bg-slate-800/80 text-amber-300 uppercase text-xs">
                <tr>
                  <th className="p-3">Rank</th>
                  <th className="p-3">Hand Name</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900/40">
                <tr>
                  <td className="p-3 font-bold text-amber-400">1</td>
                  <td className="p-3 font-semibold text-white">Trail / Trio (Set)</td>
                  <td className="p-3 text-gray-400">Three cards of the identical rank</td>
                  <td className="p-3 text-gray-300">A-A-A (Highest) or 2-2-2</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-400">2</td>
                  <td className="p-3 font-semibold text-white">Pure Sequence</td>
                  <td className="p-3 text-gray-400">Three consecutive cards of identical suit</td>
                  <td className="p-3 text-gray-300">A-2-3 of Hearts or K-Q-J</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-400">3</td>
                  <td className="p-3 font-semibold text-white">Sequence (Run)</td>
                  <td className="p-3 text-gray-400">Three consecutive cards of mixed suits</td>
                  <td className="p-3 text-gray-300">9♠ - 8♦ - 7♥</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-400">4</td>
                  <td className="p-3 font-semibold text-white">Color / Flush</td>
                  <td className="p-3 text-gray-400">Three cards of same suit, not in sequence</td>
                  <td className="p-3 text-gray-300">K♦ - 9♦ - 4♦</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-400">5</td>
                  <td className="p-3 font-semibold text-white">Pair</td>
                  <td className="p-3 text-gray-400">Two cards of identical rank</td>
                  <td className="p-3 text-gray-300">J-J-5</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-400">6</td>
                  <td className="p-3 font-semibold text-white">High Card</td>
                  <td className="p-3 text-gray-400">Standard hand with no matching cards</td>
                  <td className="p-3 text-gray-300">A-10-4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Responsible Gaming from Screenshot 3 */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-3xl font-bold text-amber-400">
            Responsible Gaming Guidelines
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            Card games should always remain a source of casual entertainment and leisure. We strongly advocate for conscious and responsible participation:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
            <li>Never participate with funds designated for essential living expenses or savings.</li>
            <li>Establish clear daily or weekly time boundaries to avoid prolonged gaming sessions.</li>
            <li>Do not chase losses; step away from the screen when feeling exhausted or emotional.</li>
            <li>Ensure you comply with the minimum age criteria (18+) and your local jurisdiction&apos;s regulations.</li>
          </ul>
        </div>
      </article>

      {/* ========================================================================= */}
      {/* 6. FAQ ACCORDION SECTION (15 QUESTIONS - CLICK '+' TO OPEN/CLOSE)         */}
      {/* ========================================================================= */}
      <section id="faq" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/80">
        <div className="text-center mb-12">
          <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-4 py-1.5 rounded-full inline-block mb-3">
            Help & Guidelines
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Teen Patti Master APK download, bonuses, UPI withdrawals, rules, and game safety.
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

                  {/* '+' button with rotation on open */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-base font-black flex-shrink-0 transition-all duration-300 select-none ${
                    isOpen 
                      ? "bg-amber-400 text-slate-950 rotate-45 shadow-[0_0_10px_rgba(251,191,36,0.6)]" 
                      : "bg-slate-800 text-amber-400 border border-slate-700"
                  }`}>
                    +
                  </div>
                </button>

                {/* Animated Dropdown Content */}
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

      {/* Quick Internal Links: Crawl Booster for All 30 Articles */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800">
        <h3 className="text-xl font-bold text-amber-400 mb-6 flex items-center gap-2">
          📑 All Guides, Game Reviews & Updates
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-300">
          {seoBlogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`} 
              className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-amber-400/60 hover:text-amber-300 transition-all flex items-center gap-2 group"
            >
              <span className="text-xs text-amber-400/80 group-hover:translate-x-1 transition-transform">→</span>
              <span className="line-clamp-1">{post.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Floating Bottom-Right Download Widget */}
      <div className="fixed bottom-5 right-5 flex flex-col items-center gap-3 z-50">
        <a 
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative hover:scale-105 transition-transform duration-300 cursor-pointer hidden sm:block"
        >
          <Image 
            src="/Teen Patti Master Features.webp" 
            alt="Teen Patti Features" 
            width={180} 
            height={280} 
            className="rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] border-2 border-yellow-500"
          />
        </a>

        {/* Floating Green Download Link Button */}
        <a 
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 text-sm md:text-base font-bold text-white bg-gradient-to-r from-green-500 to-green-700 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.7)] hover:scale-105 transition-all duration-300 animate-pulse border-2 border-green-300 flex items-center gap-2 max-w-[180px] justify-center mx-auto"
        >
          <span className="text-lg">🚀</span>
          DOWNLOAD
        </a>
      </div>
    </div>
  );
}