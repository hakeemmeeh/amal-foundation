import { programs } from "@/data/programs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function InitiativePage() {
  return (
    <main className="bg-[#F5F0E8] min-h-screen">
      {/* 3. A True "Hero" Header - Increased padding to account for fixed navbar/enlarged logo */}
      <section className="border-b border-[#D4A843]/30 px-6 pb-16 pt-32 sm:pt-36 md:pb-32 md:pt-52">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6 flex items-center gap-4 md:mb-8">
            <div className="h-[2px] w-16 bg-[#D4A843]" />
            <span className="text-[#D4A843] font-mono tracking-[0.2em] uppercase text-sm font-bold">
              Our Compass
            </span>
          </div>
          <h1 className="font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-[#1B2A6B] sm:text-5xl md:text-7xl lg:text-8xl">
            Architecting <br className="hidden md:block" /> Real Impact.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-slate-600 md:mt-8 md:text-xl lg:text-2xl">
            We structure our philanthropy around four core pillars designed to dismantle systemic barriers and foster absolute self-reliance.
          </p>
        </div>
      </section>

      {/* Alternating Rhythm */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="space-y-16 md:space-y-28 lg:space-y-32">
            {programs.map((program, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <div 
                  key={program.slug} 
                  className={`group flex flex-col items-center gap-8 md:gap-14 lg:gap-16 ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                  {/* Image Container */}
                  <div className="w-full md:w-1/2 overflow-hidden rounded-[24px] shadow-2xl relative group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-700 ease-out">
                    <div className="relative w-full aspect-[4/3] md:aspect-square transition-transform duration-1000 ease-out group-hover:scale-105">
                      <Image 
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-[#1B2A6B]/10 transition-colors duration-500 group-hover:bg-transparent" />
                  </div>
                  
                  {/* Text Container */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <span className="text-[#D4A843] font-mono font-bold tracking-widest uppercase text-xs mb-4">
                      0{index + 1} · Initiative
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[#1B2A6B] tracking-tight">
                      {program.title}
                    </h2>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 font-light pr-4">
                      {program.shortDescription}
                    </p>
                    <Link 
                      href={`/initiative/${program.slug}`}
                      className="inline-flex items-center text-[#1B2A6B] font-bold hover:text-[#D4A843] uppercase tracking-widest text-sm transition-colors w-fit border-b-2 border-transparent hover:border-[#D4A843] pb-1 group/link"
                    >
                      Explore Initiative <ArrowRight size={20} className="ml-3 transition-transform duration-300 group-hover/link:translate-x-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
