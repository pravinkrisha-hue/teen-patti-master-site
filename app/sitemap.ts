import { MetadataRoute } from 'next';
import { myArticles } from '@/content/blogs/allBlogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.techtonis.com';
  const currentDate = new Date('2026-10-03T00:00:00.000Z');

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

  const gameUrls: MetadataRoute.Sitemap = gameSlugs.map((slug) => ({
    url: `${baseUrl}/games/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const blogUrls: MetadataRoute.Sitemap = Object.keys(myArticles).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...gameUrls,
    ...blogUrls,
  ];
}