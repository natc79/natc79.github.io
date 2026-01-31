import { MetadataRoute } from "next";
import { baseUrl } from "@/app/lib/data";

// Add this line to force static generation
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
