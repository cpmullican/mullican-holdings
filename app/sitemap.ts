import { MetadataRoute } from "next";
import { getAllSectorSlugs } from "@/lib/sectors";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mullican.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;

  // Get all sector slugs
  const sectorSlugs = getAllSectorSlugs();
  const sectorUrls = sectorSlugs.map((slug) => ({
    url: `${baseUrl}/sectors/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/philosophy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...sectorUrls,
  ];
}

