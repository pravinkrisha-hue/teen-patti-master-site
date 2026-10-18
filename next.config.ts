import type { NextConfig } from "next";

// Old/incorrect article slugs that were linked internally -> live article URLs
const legacyBlogRedirects: Record<string, string> = {
  "how-to-play-teen-patti": "/blog/teen-patti-master-game",
  "rummy-circle-guide": "/games/rummy-circle",
  "teen-patti-customer-care": "/blog/teen-patti-master-customer-care",
  "teen-patti-gold-customer-care": "/blog/teen-patti-master-customer-care",
  "teen-patti-gold-old-vs-new": "/blog/teen-patti-gold-new-vs-old",
  "teen-patti-gold-rules": "/games/teen-patti-gold",
  "teen-patti-gold-withdraw": "/games/teen-patti-gold",
  "teen-patti-master-2026-edition": "/blog/teen-patti-master-2026",
  "teen-patti-master-2027-roadmap": "/blog/teen-patti-master-2027",
  "teen-patti-master-app-download": "/blog/teen-patti-master-app-download-free",
  "teen-patti-master-casino-game": "/blog/teen-patti-master-casino",
  "teen-patti-master-online-tabal": "/blog/teen-patti-master-online",
  "teen-patti-master-pro-secret": "/blog/teen-patti-master-secrets",
  "teen-patti-master-real-cash": "/blog/teen-patti-master-real-cash-game",
  "teen-patti-master-rules": "/blog/teen-patti-master-game",
  "teen-patti-master-withdraw": "/blog/teen-patti-master-real-cash-game",
  "teen-patti-offline": "/blog/teen-patti-master-offline",
  "teen-patti-pro": "/blog/teen-patti-master-secrets",
  "teen-patti-se-paise-kaise-kamaye": "/blog/teen-patti-master-real-cash-game",
  "teen-patti-sequence-list": "/blog/teen-patti-master-game",
  "teen-patti-vungo": "/blog/teen-patti-master-vungo",
  "teen-patti-vungo-download-safe-bonus": "/blog/teen-patti-master-vungo",
  "yono-game-guide": "/games/yono-games",
};

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/icon.png",
      },
    ];
  },
  async redirects() {
    return [
      // Consolidate the bare domain onto www so search engines index one host.
      // BingSiteAuth.xml stays reachable on the bare domain for Bing verification.
      {
        source: "/:path((?!BingSiteAuth\\.xml$).*)",
        has: [{ type: "host", value: "techtonis.com" }],
        destination: "https://www.techtonis.com/:path",
        permanent: true,
      },
      ...Object.entries(legacyBlogRedirects).map(([slug, destination]) => ({
        source: `/blog/${slug}`,
        destination,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
