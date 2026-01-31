import { MetadataRoute } from "next";

import { destinations, baseUrl } from "@/app/lib/data";
// import { projects } from "@/lib/projects"; // Your research data
import { getBlogPosts } from "app/blog/utils";

export const dynamic = "force-static";
export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Main navigation hubs
  const routes = ["", "/research", "/strategy", "/travel"].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 1. Mapped travel destinations
  const travelUrls = destinations.map((dest) => ({
    url: `${baseUrl}/travel/${dest.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 2. Map your research/strategy projects
  // const strategyUrls = projects.map((project) => ({
  //   url: `${baseUrl}/strategy/${project.slug}`,
  //   lastModified: new Date(),
  //   changeFrequency: "monthly" as const,
  //   priority: 0.8,
  // }));

  // 3. Static Pages (Home, About, etc.)
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    ...routes,
    //...travelUrls,
    //...strategyUrls,
  ];
}
