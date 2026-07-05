import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { services } from '@/data/services';
import { documentationItems } from '@/data/documentation';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/tentang',
    '/layanan',
    '/area-layanan',
    '/dokumentasi',
    '/kontak'
  ];

  const serviceRoutes = services.map((service) => `/layanan/${service.slug}`);
  const documentationRoutes = documentationItems.map((item) => `/dokumentasi/${item.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...documentationRoutes].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7
  }));
}
