import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.cbeipr.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.cbeipr.com/servicios",
      lastModified: new Date(),
    },
    {
      url: "https://www.cbeipr.com/specialist",
      lastModified: new Date(),
    },
  ];
}