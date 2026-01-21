import type { MetadataRoute } from 'next';

import { getWritingSlugs } from '@/lib/markdown';

const siteUrl = 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = ['', '/projects', '/about', '/writing', '/contact'];
  const posts = getWritingSlugs().map((slug) => `/writing/${slug}`);
  const routes = [...baseRoutes, ...posts];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date()
  }));
}
