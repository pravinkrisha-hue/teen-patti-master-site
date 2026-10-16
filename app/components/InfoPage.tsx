import Link from "next/link";

// Shared shell for the trust pages (About, Contact, Privacy, Responsible Gaming).
export default function InfoPage({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-10 px-4 sm:px-6 md:px-8 font-sans">
      <article className="max-w-3xl mx-auto space-y-8">
        <Link href="/" className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1 transition">
          ← Back to Home
        </Link>

        <header className="space-y-3 border-b border-slate-800 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-400">{title}</h1>
          <p className="text-slate-300 leading-relaxed">{intro}</p>
          {updated && <p className="text-xs text-slate-500">Last updated: {updated}</p>}
        </header>

        <div className="space-y-8 text-slate-300 leading-relaxed [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-amber-400 [&_a:hover]:underline">
          {children}
        </div>
      </article>
    </div>
  );
}
