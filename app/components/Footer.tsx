import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const DOWNLOAD_URL = "https://www.earntp.com/m/ya5rcx?scene=&f=w&p=wa&l=en&tp=m173";

  return (
    <>
      <footer className="border-t border-emerald-950 bg-[#040807] text-stone-300 font-sans mt-20">
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-12 grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* Column 1 & 2: Brand Identity & Manifesto */}
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
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-stone-900/90 border border-stone-800 hover:border-amber-400/50 hover:text-white transition"
              >
                <span>𝕏</span>
                <span>@teenpattimaster</span>
              </a>
              <a 
                href="https://youtube.com" 
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
              <li><Link href="/#posts" className="hover:text-amber-400 transition">Blog &amp; Guides</Link></li>
              <li><Link href="/games/teen-patti-master" className="hover:text-amber-400 transition">Hand Rankings</Link></li>
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
              <li><Link href="/#guide" className="hover:text-amber-400 transition">About Us</Link></li>
              <li><Link href="/#guide" className="hover:text-amber-400 transition">Responsible Gaming</Link></li>
              <li><Link href="/blog/teen-patti-master-customer-care" className="hover:text-amber-400 transition">Customer Care</Link></li>
              <li><Link href="/blog/teen-patti-master-faq" className="hover:text-amber-400 transition">Help &amp; Support</Link></li>
              <li><span className="text-emerald-400 font-semibold cursor-default">🇮🇳 हिंदी (Hindi) / English</span></li>
            </ul>
          </div>

        </div>

        {/* Card Suit Symbols Watermark & Strict Legal Advisory */}
        <div className="border-t border-emerald-950/60 bg-[#020504] py-8 text-stone-500 text-xs px-6">
          <div className="max-w-6xl mx-auto space-y-4 text-center sm:text-left">
            
            <div className="flex justify-center sm:justify-start gap-4 text-emerald-600/50 text-sm tracking-widest select-none">
              <span>♠</span>
              <span>♥</span>
              <span>♦</span>
              <span>♣</span>
            </div>

            <p className="leading-relaxed text-[11px] text-stone-400">
              <strong className="text-amber-400 font-semibold">18+ only.</strong> Teen Patti Master Hub provides information and guides about card games. Real-cash gaming may be restricted or illegal in your state — please check your local laws. Play for entertainment only and never to make money or recover losses.
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-center pt-2 border-t border-stone-900 text-[11px] text-stone-500 gap-2">
              <p>© {new Date().getFullYear()} Teen Patti Master Hub. All rights reserved.</p>
              <p className="text-stone-600">Built with Next.js • 100% Verified RNG &amp; Education Directory</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Widget - જે સ્ક્રીનશોટમાં જમણી બાજુ નીચે દેખાય છે */}
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
    </>
  );
}