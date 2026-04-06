import { MetadataRoute } from "next";
import { getServiceUrl, site } from "@/data/site";

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${site.url}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${site.url}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...site.services.map((service) => ({
      url: `${site.url}${getServiceUrl(service.slug)}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    {
      url: `${site.url}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
