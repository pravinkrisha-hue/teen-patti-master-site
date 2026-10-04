'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  // Footer FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  // 7 Posts vs All Posts Toggle State
  const [showAllPosts, setShowAllPosts] = useState<boolean>(false);

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

  // Tamara badha j 30 SEO Blog Posts
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
      symbol: '⚖️',
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

        {/* Unique "All Read Blog Post" Button (Matching Screenshot UI Concept) */}
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
      <article id="guide" className="max-w-5xl mx-auto px-6 py-12 text-gray-300 space-y-10 border-t border-slate-800/80 mt-6">
        
        {/* Intro */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-400 leading-tight">
            Teen Patti Master APK: Everything You Need to Know in 2026
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            Teen Patti, also called Indian Poker, has been a part of family get-togethers, festive celebrations and casual game nights across India for ages. Today, this age-old custom has smoothly transitioned into the digital realm with <strong>Teen Patti Master</strong>—one of the most responsive, genuine, and visually-rich mobile card gaming platforms around.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-gray-400">
            Whether you are an experienced player wanting to challenge real opponents in live card rooms or a beginner looking to understand sequence rankings and basic gameplay, this guide covers game modes, safety protocols, APK download steps, and tips to maximize your overall experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-4">
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

        {/* Step-by-Step Installation */}
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

        {/* Hand Rankings Overview */}
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

        {/* Responsible Gaming */}
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
      {/* 6. BANNE FOOTER (Interactive Accordion FAQ + Deep Multi-Column Directory) */}
      {/* ========================================================================= */}
      <footer className="mt-20 border-t border-amber-500/20 bg-[#060c0a] text-stone-300">
        
        {/* FOOTER 1: Unique Accordion FAQ (Screenshot 1 jevu pan humanized & anti-copy) */}
        <div id="faq" className="max-w-5xl mx-auto px-6 pt-16 pb-14">
          <div className="text-center mb-12">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-4 py-1.5 rounded-full inline-block mb-3">
              Player Verification & Guidelines
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Card Games, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">Answered Honestly</span>
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
              Clear, unbiased facts about RNG mechanics, withdrawal speeds, bank safety, and Indian gaming laws.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is Teen Patti Master Gaming Hub?",
                badge: "ABOUT US",
                a: "Teen Patti Master Gaming Hub is an independent analysis and direct APK verification portal for Indian card game players. We document hand hierarchies, statistical strategies, APK integrity protocols, and bankroll management. We are an educational reference, not a gambling operator."
              },
              {
                q: "Is Teen Patti purely a game of luck or strategic calculation?",
                badge: "STRATEGY",
                a: "Card dealing utilizes certified Random Number Generation (RNG), which is chance-driven. However, sustained long-term success requires tactical fold discipline, managing boot stakes, reading table velocities, and avoiding tilt. Skill controls risk management and balance protection."
              },
              {
                q: "Which game should new players practice first: Teen Patti or Rummy?",
                badge: "LEARNING",
                a: "Teen Patti is straightforward with 3-card ranking orders, making it great for quick casual rounds. 13-Card Rummy requires structured pure sequence calculation and card tracking. Beginners usually master 3 Patti basics first before exploring multi-table rummy leagues."
              },
              {
                q: "Are real-cash card games legally permissible in India?",
                badge: "REGULATION",
                a: "Skill-based card gaming is legally recognized under Indian constitutional precedents across most regions. However, specific states including Andhra Pradesh, Telangana, Assam, and Odisha restrict real-stakes gaming. Players must verify their localized municipal guidelines prior to participating."
              },
              {
                q: "How fast and secure are UPI & Bank withdrawals?",
                badge: "PAYMENTS",
                a: "Financial payouts are routed through verified Indian payment gateways protected by 256-bit SSL protocols. Legitimate registered accounts with verified mobile numbers typically receive funds directly into their UPI ID or bank within 60 seconds to a few minutes."
              }
            ].map((faqItem, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "bg-[#0c1613] border-amber-400/60 shadow-[0_4px_25px_rgba(251,191,36,0.1)]" 
                      : "bg-[#09110f]/60 border-emerald-950 hover:border-emerald-800/50"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hidden sm:inline-block">
                        {faqItem.badge}
                      </span>
                      <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? "text-amber-300" : "text-stone-200"}`}>
                        {faqItem.q}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? "bg-amber-400 text-slate-950 rotate-45 shadow-[0_0_10px_rgba(251,191,36,0.6)]" 
                        : "bg-stone-900 text-amber-400 border border-stone-800"
                    }`}>
                      +
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-stone-300 leading-relaxed border-t border-emerald-950/80">
                      <p>{faqItem.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTER 2: Deep Directory Footer (Screenshot 2 jevu dark green styling) */}
        <div className="border-t border-emerald-950 bg-[#040807] pt-14 pb-12">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
            
            {/* Column 1 & 2: Brand Identity, Manifesto & Social Links */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 relative rounded-lg overflow-hidden border border-amber-400/40">
                  <Image 
                    src="/teen-patti-master.webp" 
                    alt="Teen Patti Master Hub" 
                    fill 
                    sizes="36px"
                    className="object-cover" 
                  />
                </div>
                <span className="text-2xl font-black text-amber-400 tracking-wide font-serif">
                  Teen Patti Master <span className="text-emerald-400 text-lg">♠</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed pr-2">
                An authoritative, community-led research directory dedicated to Indian card games, probability analysis, APK security audits, and responsible mobile entertainment.
              </p>

              {/* Social Channels with Authentic Badges */}
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="https://x.com/Tpmasterclub/status/2092482435942691319" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-stone-900/90 border border-stone-800 hover:border-amber-400/50 hover:text-white transition"
                >
                  <span>𝕏</span>
                  <span>@teenpattimaster</span>
                </a>
                <a 
                  href="https://www.youtube.com/@MasterTeenpatti-e3o" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-stone-900/90 border border-stone-800 hover:border-red-400/50 hover:text-white transition"
                >
                  <span className="text-red-400">▶</span>
                  <span>Guides Channel</span>
                </a>
              </div>
            </div>

            {/* Column 3: Game Directories */}
            <div>
              <h3 className="text-white font-extrabold text-xs uppercase tracking-widest mb-4 border-l-2 border-emerald-500 pl-2">
                GAMES
              </h3>
              <ul className="space-y-2.5 text-xs text-stone-400 font-medium">
                <li><Link href="/games/teen-patti-master" className="hover:text-amber-400 transition">Teen Patti</Link></li>
                <li><Link href="/games/rummy-circle" className="hover:text-amber-400 transition">Rummy</Link></li>
                <li><Link href="/games/yono-games" className="hover:text-amber-400 transition">Yono</Link></li>
                <li><Link href="/games/teen-patti-gold" className="hover:text-amber-400 transition">Teen Patti Gold</Link></li>
                <li><Link href="/games/winzo-games" className="hover:text-amber-400 transition">WinZO Games</Link></li>
              </ul>
            </div>

            {/* Column 4: Learning & Strategy */}
            <div>
              <h3 className="text-white font-extrabold text-xs uppercase tracking-widest mb-4 border-l-2 border-emerald-500 pl-2">
                LEARN
              </h3>
              <ul className="space-y-2.5 text-xs text-stone-400 font-medium">
                <li><Link href="#posts" className="hover:text-amber-400 transition">Blog & Guides</Link></li>
                <li><Link href="/blog/teen-patti-master-game" className="hover:text-amber-400 transition">Hand Rankings</Link></li>
                <li><Link href="/blog/teen-patti-master-vs-rummy" className="hover:text-amber-400 transition">Rummy Sequences</Link></li>
                <li><Link href="/blog/teen-patti-master-offline" className="hover:text-amber-400 transition">Offline Practice</Link></li>
                <li><Link href="/blog/teen-patti-master-loss-recover" className="hover:text-amber-400 transition">Bankroll Rules</Link></li>
              </ul>
            </div>

            {/* Column 5: Trust, Safety & Site */}
            <div>
              <h3 className="text-white font-extrabold text-xs uppercase tracking-widest mb-4 border-l-2 border-emerald-500 pl-2">
                SITE
              </h3>
              <ul className="space-y-2.5 text-xs text-stone-400 font-medium">
                <li><a href="#guide" className="hover:text-amber-400 transition">About Us</a></li>
                <li><a href="#guide" className="hover:text-amber-400 transition">Responsible Gaming</a></li>
                <li><Link href="/blog/teen-patti-master-customer-care" className="hover:text-amber-400 transition">Customer Care</Link></li>
                <li><Link href="/blog/teen-patti-master-faq" className="hover:text-amber-400 transition">Help & Support</Link></li>
                <li><span className="text-emerald-400 font-semibold cursor-default">🇮🇳 हिंदी (Hindi) / English</span></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Card Suit Symbols Watermark & Strict Legal Advisory */}
        <div className="border-t border-emerald-950/60 bg-[#020504] py-8 text-stone-500 text-xs px-6">
          <div className="max-w-5xl mx-auto space-y-4 text-center sm:text-left">
            
            {/* Playing Card Suit Symbols */}
            <div className="flex justify-center sm:justify-start gap-4 text-emerald-600/50 text-sm tracking-widest select-none">
              <span>♠</span>
              <span>♥</span>
              <span>♦</span>
              <span>♣</span>
            </div>

            {/* Anti-Plagiarism Legal Disclaimer */}
            <p className="leading-relaxed text-[11px] text-stone-400">
              <strong className="text-amber-400 font-semibold">18+ only.</strong> Teen Patti Master Hub provides information and guides about card games. Real-cash gaming may be restricted or illegal in your state — please check your local laws. Play for entertainment only and never to make money or recover losses.
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-center pt-2 border-t border-stone-900 text-[11px] text-stone-500 gap-2">
              <p>© {new Date().getFullYear()} Teen Patti Master Hub. All rights reserved.</p>
              <p className="text-stone-600">Built with Next.js • 100% Verified RNG & Education Directory</p>
            </div>
          </div>
        </div>

      </footer>

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