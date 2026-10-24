import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { myArticles } from "@/content/blogs/allBlogs";
import { BLOG_DESCRIPTIONS, BLOG_CLUSTERS, blogTitle, relatedSlugs } from "@/content/blogs/blogMeta";
import AuthorBox from "../../components/AuthorBox";
import Breadcrumbs from "../../components/Breadcrumbs";
import { AUTHOR, REVIEWER, LAST_REVIEWED, SITE_URL } from "../../siteTeam";

const DOWNLOAD_LINK = "https://www.earntp.com/m/ya5rcx?scene=&f=w&p=wa&l=en&tp=m173";

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

  const pageTitle = blogTitle(slug);
  const fullTitle = pageTitle.includes("Teen Patti Master") ? pageTitle : `${pageTitle} - Teen Patti Master`;
  const canonicalPath = `/blog/${slug}`;

  // 1. Check custom unique description, 2. check property inside article, 3. clean fallback
  const uniqueDescription =
    BLOG_DESCRIPTIONS[slug] ||
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

  const cluster = BLOG_CLUSTERS.find((c) => c.slugs.includes(slug));

  return (
    <div className="min-h-screen bg-slate-950 text-white py-10 px-4 sm:px-6 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Breadcrumb: Teen Patti Master (home) › Guides › article */}
        <Breadcrumbs
          items={[
            { name: "Guides", href: "/blog" },
            { name: blogTitle(slug), href: `/blog/${slug}` },
          ]}
        />

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

        {/* Hub links: back to the main Teen Patti Master page + guides from the same topic cluster */}
        <nav aria-label="Related guides" className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">More Teen Patti Master Guides: {cluster?.name}</h2>
          <p className="text-sm text-slate-400">
            Start with the main{" "}
            <Link href="/" className="text-amber-400 font-semibold hover:underline">Teen Patti Master APK download guide</Link>
            , then read:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {relatedSlugs(slug).map((s) => (
              <li key={s}>
                <Link href={`/blog/${s}`} className="text-amber-300 hover:text-amber-200 hover:underline">
                  {blogTitle(s)}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={`/blog#${cluster?.id ?? ""}`} className="inline-block text-sm text-amber-400 font-semibold hover:underline">
            See all {cluster?.name} guides →
          </Link>
        </nav>

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
            Download APK Now 🚀
          </a>
        </div>

      </div>
    </div>
  );
}