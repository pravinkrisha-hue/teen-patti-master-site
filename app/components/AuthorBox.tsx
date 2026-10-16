import Image from "next/image";
import Link from "next/link";
import { AUTHOR, REVIEWER, LAST_REVIEWED } from "../siteTeam";

const reviewedDate = new Date(LAST_REVIEWED).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function AuthorBox() {
  return (
    <section
      aria-label="Author and reviewer"
      className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 grid gap-5 sm:grid-cols-2"
    >
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 relative rounded-full overflow-hidden border border-amber-400/50 flex-shrink-0">
          <Image src={AUTHOR.image} alt={AUTHOR.name} fill sizes="48px" className="object-cover" />
        </div>
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-widest text-slate-400">Written by</p>
          <p className="font-bold text-white">
            <Link href="/about#team" className="hover:text-amber-400 transition">{AUTHOR.name}</Link>
          </p>
          <p className="text-xs text-amber-400">{AUTHOR.role}</p>
          <p className="text-xs text-slate-400 leading-relaxed">{AUTHOR.bio}</p>
        </div>
      </div>

      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-full bg-emerald-900/60 border border-emerald-400/50 flex items-center justify-center font-black text-emerald-300 flex-shrink-0">
          {REVIEWER.initials}
        </div>
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-widest text-slate-400">Tested &amp; reviewed by</p>
          <p className="font-bold text-white">
            <Link href="/about#team" className="hover:text-emerald-300 transition">{REVIEWER.name}</Link>
          </p>
          <p className="text-xs text-emerald-300">
            {REVIEWER.role} · Last reviewed <time dateTime={LAST_REVIEWED}>{reviewedDate}</time>
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">{REVIEWER.bio}</p>
        </div>
      </div>
    </section>
  );
}
