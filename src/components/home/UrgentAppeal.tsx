"use client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { AlertCircle, ArrowRight } from "lucide-react";

export function UrgentAppeal() {
  return (
    <section className="bg-[#FFB700] text-[#050A1F] py-12 md:py-16 mx-2 md:mx-10 my-32 rounded-[48px] shadow-[0_48px_120px_-20px_rgba(0,0,0,0.15)] border border-white/20 relative z-20 overflow-hidden group">
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#050A1F] border border-white/10 shadow-lg">
                <AlertCircle className="h-6 w-6 text-[#FFB700]" />
              </span>
              <div className="text-center md:text-left">
                <h3 className="font-display font-bold text-lg md:text-xl leading-tight uppercase tracking-[0.1em] text-[#050A1F]">
                  Urgent Emergency Response
                </h3>
                <p className="text-sm font-semibold mt-1 text-[#050A1F]/80 tracking-wide md:line-clamp-1">
                  Providing immediate food distribution and medical aid to 1,000+ displaced families.
                </p>
              </div>
            </div>
            
            <Link
              href="/get-involved"
              className="shrink-0 flex items-center justify-center px-10 py-3 bg-[#050A1F] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#050A1F] transition-all duration-500 rounded-xl shadow-lg border border-transparent"
            >
              Support Now <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
