import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Amal Foundation — Mission, Vision & Board of Directors",
  description:
    "Amal Foundation was established in 2025 as the charitable arm of Amal Group International. Learn about our mission, vision, founding story, and board of directors.",
  path: "/about",
  keywords: [
    "about Amal Foundation",
    "Amal Foundation board",
    "Amal Group International charity",
    "Somalia nonprofit 2025",
    "Garowe foundation history",
  ],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
