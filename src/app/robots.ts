import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Applebot-Extended",
          "CCBot",
          "cohere-ai",
          "Google-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.amalfoundation.org/sitemap.xml",
  };
}
