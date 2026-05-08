import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HeroSection } from "@/components/home/HeroSection";

export const metadata: Metadata = buildMetadata({
  title: "Amal Foundation — Transforming Lives Across Somalia",
  description:
    "Amal Foundation delivers education, healthcare, humanitarian relief, and economic empowerment across Somalia. Backed by Amal Group International since 1997.",
  path: "/",
  keywords: [
    "donate Somalia",
    "Somalia NGO",
    "Somali humanitarian aid",
    "Islamic charity Somalia",
    "Puntland development",
  ],
});
import { MissionBand } from "@/components/home/MissionBand";
import { ProgramPillars } from "@/components/home/ProgramPillars";
import { BackedByBand } from "@/components/home/BackedByBand";
import { LatestStories } from "@/components/home/LatestStories";
import { CTABand } from "@/components/home/CTABand";

export default function Home() {
  return (
    <main className="bg-[#F5F0E8] min-h-screen">
      {/* 1. Split Panel Hero */}
      <HeroSection />
      
      {/* 2. Mission Statement Band */}
      <MissionBand />
      
      {/* 3. The 4 Pillars */}
      <ProgramPillars />

      {/* 4. “Our Foundation” — Backed by Amal Group (navy band + stat tiles) */}
      <BackedByBand />

      {/* 5–6. Latest stories + CTA (fused visually) */}
      <LatestStories />
      <CTABand />
    </main>
  );
}
