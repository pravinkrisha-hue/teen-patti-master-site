import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { myArticles } from "@/content/blogs/allBlogs";

const DOWNLOAD_LINK = "https://www.earntp.com/m/ya5rcx?scene=&f=w&p=wa&l=en&tp=m173";

// Title format karva mate helper function
function formatTitleFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

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
    };
  }

  const pageTitle = formatTitleFromSlug(slug);

  return {
    title: `${pageTitle} - Teen Patti Master`,
    description: `Read all about ${pageTitle}. Download the official Teen Patti Master APK, get tips, claim bonus, and play online safely.`,
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
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm uppercase tracking-wider py-4 px-10 rounded-2xl shadow-xl transition transform hover:scale-105"
          >
            Download Official APK Now 🚀
          </a>
        </div>

      </div>
    </div>
  );
}