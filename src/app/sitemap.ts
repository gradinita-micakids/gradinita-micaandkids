import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gradinitamicaandkids.ro";
  const now = new Date();

  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/despre-noi", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/servicii", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/program-tarife", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/gradinita-popesti-leordeni", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/cresa-popesti-leordeni", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/afterschool-popesti-leordeni", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/gradinita-berceni", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/cresa-berceni", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/petreceri", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/galerie", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.6 },
  ];

  const blogRoutes = [
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: "/blog/cum-alegi-gradinita", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/blog/beneficiile-jocului-in-aer-liber", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/blog/pregatirea-pentru-scoala", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/blog/activitati-senzoriale-copii", changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  const legalRoutes = [
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/termeni", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return [
    ...routes.map((r) => ({
      url: `${baseUrl}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...blogRoutes.map((r) => ({
      url: `${baseUrl}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...legalRoutes.map((r) => ({
      url: `${baseUrl}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
  ];
}
