import { HeroSection } from "@/components/home/HeroSection";
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

      {/* 4. Backed By Legacy Band */}
      <BackedByBand />
      
      {/* 5. Latest Impact Stories */}
      <LatestStories />
      
      {/* 6. Call to Action Band */}
      <CTABand />
    </main>
  );
}
