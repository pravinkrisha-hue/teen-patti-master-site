import { MetadataRoute } from 'next';
import { myArticles } from '@/content/blogs/allBlogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.techtonis.com';

  // 1. Games Slugs
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

  const gameUrls = gameSlugs.map((slug) => ({
    url: `${baseUrl}/games/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  // 2. Blog URLs (allBlogs mathi aapoaap dynamically aavi jashe)
  const blogUrls = Object.keys(myArticles).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

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