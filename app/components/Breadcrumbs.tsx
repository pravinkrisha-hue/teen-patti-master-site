import Link from "next/link";
import { SITE_URL } from "../siteTeam";

type Crumb = { name: string; href: string };

// Visible breadcrumb + BreadcrumbList schema. The first crumb always links home
// with the anchor "Teen Patti Master" so every page points its main keyword at the home page.
export default function Breadcrumbs({ items, className = "" }: { items: Crumb[]; className?: string }) {
  const trail: Crumb[] = [{ name: "Teen Patti Master", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: trail.map((crumb, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: crumb.name,
              item: `${SITE_URL}${crumb.href === "/" ? "" : crumb.href}`,
            })),
          }),
        }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-slate-400">
        {trail.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">›</span>}
            {i < trail.length - 1 ? (
              <Link href={crumb.href} className="text-amber-400 hover:text-amber-300 font-semibold transition">
                {crumb.name}
              </Link>
            ) : (
              <span className="text-slate-300" aria-current="page">{crumb.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
