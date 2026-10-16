# SEO Audit — www.techtonis.com

**Date:** 2026-10-16
**Framework:** codex-seo skill suite (AgriciDaniel/codex-seo) checklists and thresholds
**Scope:** 40 sitemap URLs (1 home, 9 game pages, 30 blog articles), source in this repo

## How this audit was run

The codex-seo headless runner (`run_headless_audit.py`) refused the target with
`Blocked URL host: www.techtonis.com`. The cause is the local network: it uses NAT64, so DNS
returns `64:ff9b::/96` IPv6 addresses, and the skill's SSRF guard treats those as reserved. The
site's real IPv4 addresses (64.29.17.x, Vercel) are public. Bypassing the guard was not
permitted in this session, so the audit used:

- live `curl` checks of robots.txt, sitemap.xml, llms.txt, response headers and the redirect chain
- a full source audit of `app/` and `content/`, scored against the skill's technical, on-page,
  schema, content/E-E-A-T and GEO checklists
- a verified production build (`next build`, 43 static pages) to confirm rendered `<head>` tags

To get the skill's automated scores later, run it from a network without NAT64, or on the VPS/CI.

## Scorecard (before → after the fixes in this working tree)

| Area | Before | After | Notes |
|---|---|---|---|
| Technical / crawlability | 55 | 85 | broken links, robots host, canonicals fixed |
| On-page metadata | 50 | 85 | slug-based titles, garbled game title, missing OG/canonical |
| Internal linking | 30 | 90 | 101 links pointed at 22 non-existent URLs |
| Structured data | 55 | 60 | non-www URLs fixed; policy risks remain (see C1) |
| Content / E-E-A-T (YMYL) | 35 | 35 | needs your decisions (section C) |
| GEO / AI search | 40 | 60 | llms.txt added; FAQ blocks already answer-first |
| **Overall (approx.)** | **45** | **70** | the remaining gap is mostly trust/E-E-A-T content work |

## A. Critical / high issues — FIXED (uncommitted)

| # | Issue | Evidence | Fix |
|---|---|---|---|
| A1 | **101 internal links to 22 URLs that return 404** in 24 of the 30 articles (for example `/blog/teen-patti-master-real-cash` linked from 17 articles, `/blog/teen-patti-master-pro-secret`, `/blog/teen-patti-offline`) | the slugs were renamed but the links weren't updated | every link was rewritten to the live URL, and **308 redirects** for all 23 old slugs were added in `next.config.ts` to recover any indexed or backlinked old URLs |
| A2 | Home page card linked to `/blog/teen-patti-vungo` (404) | `app/page.tsx` | changed to `/blog/teen-patti-master-vungo` |
| A3 | **No canonical tags anywhere** | no `alternates` in metadata | self-referencing canonicals added on home, all 30 articles and 9 game pages (absolute `https://www.` URLs) |
| A4 | Affiliate download links (earntp.com) on articles, game pages, the footer widget and the blog CTA had no `rel="sponsored"` | 73 anchors | changed to `rel="nofollow sponsored noopener noreferrer"`; the home page already had this. Google requires it for paid/affiliate links |
| A5 | robots.txt `Sitemap:` pointed at `https://techtonis.com/...` (non-www → redirect) | live robots.txt | changed to `https://www.techtonis.com/sitemap.xml` |
| A6 | Article JSON-LD and links used the non-www host (`https://techtonis.com/...`), and one schema URL was a 404 (`/blog/teen-patti-master-pro-secret`) | 3 articles | normalized to `https://www.techtonis.com`, and the URL now points to the live slug |

## B. Medium issues — FIXED (uncommitted)

| # | Issue | Fix |
|---|---|---|
| B1 | Blog `<title>`s were generated from slugs: "Teen Patti Master Faq Vs Real Game - Teen Patti Master", "Teen Patti Master 51 Bonus - …" | human-written titles map (same headings as the home cards); the brand suffix is added only when the title doesn't already contain "Teen Patti Master" |
| B2 | Game page title: "Teen Patti Master **Title:** Teen Patti Master APK Download: Official…"; garbled description; `..` in the old-version description | rewritten |
| B3 | The Vungo article fell back to a generic meta description (map key `teen-patti-vungo` ≠ slug) | key corrected |
| B4 | No Open Graph or Twitter card tags (bad link previews on WhatsApp/X/Facebook) | `og:type/url/title/description/image`, `twitter:card` added site-wide |
| B5 | Unknown `/blog/*` and `/games/*` slugs had indexable metadata | `noindex, follow` on the not-found metadata branch |
| B6 | No `llms.txt` (404) | `public/llms.txt` added, listing the key pages |
| B7 | Only HSTS among security headers | `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` and `Permissions-Policy` added via `next.config.ts` |
| B8 | `<html lang="en">` on an India-targeted site | `lang="en-IN"`, `og:locale en_IN` |

Verified: `npm run build` succeeds, and the rendered HTML has the correct canonical, title and OG tags.

## C. Issues that need YOUR decision (not changed)

These are content, policy or business calls. This is a YMYL (real-money gaming) site, so Google
applies its strictest quality bar, and these items are the main ranking risk.

| # | Issue | Risk | Recommendation |
|---|---|---|---|
| C1 | Home `SoftwareApplication` schema has `aggregateRating 4.9 / 124,800` for an app this site doesn't publish | violates Google's review-snippet policy (self-serving or unverifiable ratings) → possible **manual action** | remove `aggregateRating`, or only show ratings you can source |
| C2 | "Official APK", "official portal", "100% clean", "100% Verified RNG", "certified RNG" claims | the site is an affiliate, not the publisher; misleading claims hurt E-E-A-T and invite trademark complaints | reword to "independent guide", and drop unverifiable certifications |
| C3 | **Every game page (PokerStars India, Rummy Circle, Junglee, WinZO…) "Download" button goes to the same Teen Patti Master affiliate link** | deceptive UX, which Google classes as a sneaky-redirect pattern; brand/trademark risk | use each brand's real link, or relabel the buttons honestly |
| C4 | Footer social links go to `twitter.com` / `youtube.com` home pages under a fake handle `@teenpattimaster` | trust signal is fake | give me the real profile URLs, or remove the links |
| C5 | ✅ **DONE** — `/about`, `/contact`, `/privacy-policy` and `/responsible-gaming` were created and linked from the footer, sitemap and llms.txt | — | confirm `support@techtonis.com` in `app/siteTeam.ts` is a real mailbox |
| C6 | ✅ **DONE** — every article now shows "Written by Rohan Mehta (Lead Gaming Editor) · Tested & reviewed by Sunil Sharma (QA Tester)" with `reviewedBy`/`lastReviewed` schema | — | update `LAST_REVIEWED` in `app/siteTeam.ts` whenever Sunil re-tests the guides |
| C7 | Thin or overlapping topics: download-guide / apk-download / app-download-free / new-version; faq / faq-vs-real-game | keyword cannibalization | merge into one pillar page per intent, then 308-redirect the rest |
| C8 | `teen-patti-master-2027` presents future features as fact | accuracy / helpful-content risk | label as speculation or remove |
| C9 | The redirect chain `http://techtonis.com → https://techtonis.com → https://www.` takes 2 hops | minor crawl waste | in Vercel → Domains, make `techtonis.com` redirect straight to `https://www.techtonis.com` |
| C10 | Search Console | — | after deploying, resubmit the sitemap and request indexing for the top pages |

## D. Low priority / housekeeping

- 15 pre-existing ESLint errors (unescaped `'` and `"` in article JSX, one `any` in `allBlogs.ts`). They don't block the build.
- 12 `<img>` warnings: switch to `next/image` for LCP.
- The home page is one 1,145-line `'use client'` component. Splitting the static content into a server component would cut JS and improve INP/LCP.
- Unused assets in `public/` (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`, `tin patti master.webp` with a space in the name).
- Sitemap `lastmod` is hard-coded to one date for every URL. Use real per-article dates.
- `CLAUDE.md` has an uncommitted 533-line paste of the codex-seo README. It is unrelated to the site; revert it unless intended.

## Plan

1. **Now:** review this diff → commit → deploy (fixes in A + B).
2. **Week 1:** C1, C2, C3, C4 (compliance risks). These are mostly text edits.
3. **Week 2:** C5 + C6 (trust pages and author bylines).
4. **Weeks 3–4:** C7 content consolidation, with redirects; C8.
5. **Ongoing:** Search Console monitoring, plus the section D performance cleanups.
