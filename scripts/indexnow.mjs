#!/usr/bin/env node
// Notify IndexNow (Bing, Yandex, Seznam, Naver, ...) about pages that changed between two commits.
// Google does not use IndexNow; it picks changes up from the sitemap.
//
//   node scripts/indexnow.mjs --from <sha> [--to <sha>]   submit pages changed in that range
//   node scripts/indexnow.mjs --all                        submit every URL in the live sitemap
//   add --dry-run to print the URLs without submitting
import { execFileSync } from "node:child_process";

const HOST = "www.techtonis.com";
const SITE = `https://${HOST}`;
const KEY = "01c549e9e64caafbeb6ec28954428088"; // must match public/<KEY>.txt
const ENDPOINT = "https://api.indexnow.org/indexnow";

const args = process.argv.slice(2);
const opt = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const DRY_RUN = args.includes("--dry-run");
const ALL = args.includes("--all");
const FROM = opt("--from");
const TO = opt("--to") || "HEAD";

// Files whose change affects every page (layout, shared components, global styles, team info)
const SHARED = [/^app\/layout\.tsx$/, /^app\/components\//, /^app\/globals\.css$/, /^app\/siteTeam\.ts$/];

function git(...gitArgs) {
  return execFileSync("git", gitArgs, { encoding: "utf8" });
}

// article file name -> slug, read from content/blogs/allBlogs.ts at a given revision
function blogSlugs(rev) {
  let src = "";
  try {
    src = git("show", `${rev}:content/blogs/allBlogs.ts`);
  } catch {
    return new Map();
  }
  const fileOf = new Map([...src.matchAll(/import (\w+) from "\.\/([\w-]+)";/g)].map((m) => [m[1], m[2]]));
  return new Map([...src.matchAll(/"([a-z0-9-]+)":\s*(\w+),/g)].map((m) => [fileOf.get(m[2]), m[1]]));
}

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  return [...(await res.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

async function changedUrls() {
  const all = await sitemapUrls();
  if (ALL || !FROM) return all;

  const files = git("diff", "--name-only", FROM, TO).split("\n").filter(Boolean);
  if (files.some((f) => SHARED.some((rx) => rx.test(f)))) return all;

  const slugs = new Map([...blogSlugs(FROM), ...blogSlugs(TO)]);
  const urls = new Set();
  for (const f of files) {
    const article = f.match(/^content\/blogs\/([\w-]+)\.tsx$/);
    if (article && slugs.has(article[1])) urls.add(`${SITE}/blog/${slugs.get(article[1])}`);
    else if (f === "app/page.tsx" || f === "content/blogs/allBlogs.ts") urls.add(SITE);
    else if (f === "app/blog/[slug]/page.tsx") all.filter((u) => u.includes("/blog/")).forEach((u) => urls.add(u));
    else if (f === "app/games/[slug]/page.tsx") all.filter((u) => u.includes("/games/")).forEach((u) => urls.add(u));
    else {
      const page = f.match(/^app\/([\w-]+)\/page\.tsx$/);
      if (page) urls.add(`${SITE}/${page[1]}`);
    }
  }
  return [...urls];
}

const urls = await changedUrls();
console.log(`${urls.length} URL(s) to submit${FROM && !ALL ? ` for ${FROM.slice(0, 7)}..${TO.slice(0, 7)}` : ""}`);
urls.forEach((u) => console.log(`  ${u}`));

if (urls.length === 0 || DRY_RUN) process.exit(0);

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow responded ${res.status} ${res.statusText}`);
// 200 = submitted, 202 = accepted (key validation pending)
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
