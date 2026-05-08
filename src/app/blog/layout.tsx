import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Stories of Impact — Amal Foundation Blog",
  description:
    "Read field reports, impact stories, and news from Amal Foundation's work across Somalia — education, healthcare, economic empowerment, and humanitarian aid.",
  path: "/blog",
  keywords: [
    "Somalia humanitarian stories",
    "Amal Foundation news",
    "Somalia impact stories",
    "Garowe development blog",
  ],
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
