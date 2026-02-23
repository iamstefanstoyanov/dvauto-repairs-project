import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // TODO: uncomment and set my domain when going live
    // sitemap: "https://mydomain.com/sitemap.xml",
  };
}
