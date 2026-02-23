import type { MetadataRoute } from "next";

// TODO: replace with my actual domain when going live
const BASE_URL = "https://mydomain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
