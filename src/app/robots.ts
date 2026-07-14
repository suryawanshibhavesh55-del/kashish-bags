import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/utils/config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.siteUrl;
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
