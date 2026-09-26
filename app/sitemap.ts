import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://techtonis.com';

  // 1. Tamara 9 Games Slugs (Name ma je sudharo karvo hoy te ahiya slug ma kari sako chho)
  const gameSlugs = [
    'teen-patti-master',
    'teen-patti-gold',
    'rummy-circle',
    'junglee-rummy',
    'poker-stars-india',
    'winzo-games',
    'teen-patti-star',
    'yono-games',
    'teen-patti-old-version',
  ];

  // 2. Tamara 30 Blog Posts na Slugs (Tamara blog na URLs mujab ahiya naamo add/edit karo)
  const blogSlugs = [
    'teen-patti-master-apk-download',
    'teen-patti-master-game',
    'teen-patti-android-game',
    'teen-patti-master-51-bonus',
    'teen-patti-master-vs-rummy',
    'teen-patti-master-offline',
    'teen-patti-master-secrets',
    'teen-patti-master-loss-recover',
    'teen-patti-master-2026',
    'teen-patti-master-2027',
    'teen-patti-master-real-cash-game',
    'teen-patti-master-app-download-free',
    'teen-patti-master-customer-care',
    'teen-patti-master-casino',
    'teen-patti-master-new-version',
    'teen-patti-master-online',
    'teen-patti-master-download-guide',
    'teen-patti-master-old-vs-new',
    'teen-patti-master-vs-gold',
    'teen-patti-android-game',
    // ... Baki na badha 30 blog post na slugs ahiya list kari dyo
  ];

  // Games na Dynamic URLs
  const gameUrls = gameSlugs.map((slug) => ({
    url: `${baseUrl}/games/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  // Blog Posts na Dynamic URLs
  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Homepage + Games + Blogs badhu ek sathe return thase
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    ...gameUrls,
    ...blogUrls,
  ];
}