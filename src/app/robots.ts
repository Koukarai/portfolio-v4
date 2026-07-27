import type { MetadataRoute } from "next";
import { site } from "@/data/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Nothing user-facing lives under /api, and the contact route is a POST
      // endpoint, so there is no reason for crawlers to walk it.
      disallow: "/api/",
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
