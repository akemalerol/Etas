import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://kozbasi.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://kozbasi.com/menu", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://kozbasi.com/etkinlikler", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://kozbasi.com/iletisim", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
