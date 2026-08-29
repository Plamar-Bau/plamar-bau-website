import type { MetadataRoute } from "next";
import { company } from "@/lib/site";
import { services } from "@/lib/services";
import { posts, getCategories, getTags, slugify } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/ueber-uns`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/referenzen`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/leistungen/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const categoryPages: MetadataRoute.Sitemap = getCategories().map((c) => ({
    url: `${base}/blog/kategorie/${slugify(c.name)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  const tagPages: MetadataRoute.Sitemap = getTags().map((t) => ({
    url: `${base}/blog/tag/${slugify(t)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.3,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...blogPages,
    ...categoryPages,
    ...tagPages,
  ];
}
