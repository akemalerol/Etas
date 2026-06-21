import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://etasas.com.tr", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://etasas.com.tr/menu", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://etasas.com.tr/etkinlikler", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://etasas.com.tr/iletisim", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://etasas.com.tr/hakkimizda", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
