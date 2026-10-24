import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import { BLOG_CLUSTERS, BLOG_DESCRIPTIONS, blogTitle } from "@/content/blogs/blogMeta";
import { SITE_URL } from "../siteTeam";

const TITLE = "Teen Patti Master Guides: Download, Bonus, Rules & Tips";
const DESCRIPTION =
  "All Teen Patti Master guides in one place: safe APK download, install fixes, bonus and withdrawals, rules and strategy in English and Hindi, and comparisons.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", url: "/blog", title: TITLE, description: DESCRIPTION, images: ["/teen-patti-master.webp"] },
};

export default function BlogHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    url: `${SITE_URL}/blog`,
    description: DESCRIPTION,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: BLOG_CLUSTERS.flatMap((c) => c.slugs).map((slug, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/blog/${slug}`,
        name: blogTitle(slug),
      })),
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white py-10 px-4 sm:px-6 md:px-8 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-5xl mx-auto space-y-10">
        <Breadcrumbs items={[{ name: "Guides", href: "/blog" }]} />

        <header className="space-y-4 border-b border-slate-800 pb-8">
          <h1 className="text-3xl sm:text-5xl font-black text-amber-400 leading-tight">Teen Patti Master Guides</h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
            Everything we&apos;ve written about Teen Patti Master, grouped by what you&apos;re trying to do. New here? Start
            with our <Link href="/" className="text-amber-400 underline">Teen Patti Master APK download guide</Link>, then
            learn the rules in <Link href="/blog/teen-patti-master-game" className="text-amber-400 underline">English</Link>{" "}
            or <Link href="/blog/teen-patti-master-kaise-khele" className="text-amber-400 underline">हिंदी</Link>.
          </p>
          <nav aria-label="Topics" className="flex flex-wrap gap-2 pt-2">
            {BLOG_CLUSTERS.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-slate-700 text-slate-300 hover:border-amber-400 hover:text-white transition"
              >
                {c.name} ({c.slugs.length})
              </a>
            ))}
          </nav>
        </header>

        {BLOG_CLUSTERS.map((c) => (
          <section key={c.id} id={c.id} className="space-y-4 scroll-mt-24">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{c.name}</h2>
              <p className="text-slate-400 text-sm sm:text-base mt-1">{c.intro}</p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {c.slugs.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/blog/${slug}`}
                    className="block h-full bg-slate-900/70 border border-slate-800 hover:border-amber-400/60 rounded-2xl p-5 transition"
                  >
                    <h3 className="font-bold text-white leading-snug">{blogTitle(slug)}</h3>
                    {BLOG_DESCRIPTIONS[slug] && <p className="text-sm text-slate-400 mt-2">{BLOG_DESCRIPTIONS[slug]}</p>}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
