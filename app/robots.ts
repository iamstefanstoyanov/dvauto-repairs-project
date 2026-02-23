import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // TODO: uncomment and set your domain when going live
    // sitemap: "https://yourdomain.com/sitemap.xml",
  };
}
