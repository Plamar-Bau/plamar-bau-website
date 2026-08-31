import type { MetadataRoute } from "next";
import { company } from "@/lib/site";

// KI-Suchmaschinen-Crawler ausdrücklich erlauben (Sichtbarkeit in ChatGPT,
// Google AI, Claude, Perplexity). Der allgemeine "*"-Eintrag erlaubt ohnehin
// alles; die expliziten Einträge sind ein klares Signal.
const aiSearchBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiSearchBots, allow: "/" },
    ],
    sitemap: `${company.url}/sitemap.xml`,
    host: company.url,
  };
}
