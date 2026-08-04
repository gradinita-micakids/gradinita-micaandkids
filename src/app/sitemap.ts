import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gradinitamicaandkids.ro";

  const routes = [
    "",
    "/despre-noi",
    "/servicii",
    "/program-tarife",
    "/petreceri",
    "/galerie",
    "/contact",
    "/cresa-popesti-leordeni",
    "/gradinita-popesti-leordeni",
    "/afterschool-popesti-leordeni",
    "/gradinita-berceni",
    "/cresa-berceni",
  ];

  const blogRoutes = [
    "/blog",
    "/blog/cum-alegi-gradinita",
    "/blog/beneficiile-jocului-in-aer-liber",
    "/blog/pregatirea-pentru-scoala",
    "/blog/activitati-senzoriale-copii",
  ];

  const legalRoutes = [
    "/privacy",
    "/termeni",
  ];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...blogRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "/blog" ? 0.7 : 0.6,
    })),
    ...legalRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
