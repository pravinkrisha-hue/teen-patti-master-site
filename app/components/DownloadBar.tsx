// The single download link allowed per page: a compact bar at the top, with the legal note beside it.
export const DOWNLOAD_URL = "https://www.earntp.com/m/ya5rcx?scene=&f=w&p=wa&l=en&tp=m173";

export default function DownloadBar() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/70 border border-slate-800 rounded-2xl px-4 py-3">
      <p className="text-xs text-slate-400 text-center sm:text-left">
        <strong className="text-slate-200">18+ only.</strong> Online money games are restricted in India under the 2025 Online
        Gaming Act — check the law where you live before playing for money. Affiliate link.
      </p>
      <a
        href={DOWNLOAD_URL}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="shrink-0 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-sm px-5 py-2.5 rounded-xl shadow hover:scale-105 transition"
      >
        Download Teen Patti Master
      </a>
    </div>
  );
}
