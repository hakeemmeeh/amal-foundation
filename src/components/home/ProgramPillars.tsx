"use client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { programs } from "@/data/programs";
import Link from "next/link";
import { Users, Laptop, Landmark, ArrowRight, Heart, GraduationCap } from "lucide-react";

const iconMap = {
  Users,
  Laptop,
  Landmark,
  Heart,
  GraduationCap,
};

export function ProgramPillars() {
  return (
    <section className="bg-[#F5F0E8] text-[#1B2A6B] py-32 px-6">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-[#D4A843]" />
            <span className="text-[#D4A843] font-mono tracking-[0.2em] uppercase text-xs font-bold">
              Our Methodology
            </span>
            <div className="h-[2px] w-12 bg-[#D4A843]" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-[#1B2A6B]">
            Core Operational Pillars
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Focused, data-driven, and highly localized. We build sustainable initiatives that dismantle the systemic barriers to progress across Somalia.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {programs.map((program, idx) => {
            const IconComponent = iconMap[program.icon as keyof typeof iconMap] || Users;
            return (
              <ScrollReveal key={program.slug} delay={idx * 0.1}>
                <div className="group bg-[#FAFAF5] p-8 md:p-10 rounded-[32px] border-l-8 border-[#D4A843] shadow-md hover:shadow-2xl transition-all duration-700 h-full flex flex-col items-start text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4A843]/5 rounded-bl-[120px] -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700 pointer-events-none" />
                  
                  <div className="bg-[#1B2A6B] w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-[#1B2A6B]/10 transition-all duration-500 group-hover:bg-[#D4A843] group-hover:rotate-[10deg]">
                    <IconComponent className="text-[#FAFAF5]" size={28} />
                  </div>
                  
                  <h3 className="font-display text-xl md:text-2xl xl:text-3xl font-bold mb-6 tracking-tight group-hover:text-[#D4A843] transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-[#64748B] leading-relaxed mb-10 text-lg font-light">
                    {program.shortDescription}
                  </p>
                  
                  <Link 
                    href={`/initiative/${program.slug}`}
                    className="mt-auto inline-flex items-center text-xs font-bold text-[#1B2A6B] uppercase tracking-[0.3em] group/link"
                  >
                    Learn More <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover/link:translate-x-2 text-[#D4A843]" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
