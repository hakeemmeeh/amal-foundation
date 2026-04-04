"use client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABand() {
  return (
    <section className="relative py-48 mx-2 md:mx-6 mb-20">
      <div 
        className="absolute inset-0 bg-cover bg-center rounded-[40px] overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1B2A6B]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A6B] via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter leading-[1.1]">
            Together, We Build <br className="hidden md:block" /> a Better Somalia.
          </h2>
          <Link
            href="/get-involved"
            className="inline-flex items-center px-12 py-5 bg-[#D4A843] text-white font-bold rounded-2xl hover:bg-white hover:text-[#1B2A6B] transition-all duration-500 shadow-2xl shadow-[#D4A843]/20 group uppercase tracking-widest text-xs"
          >
            Get Involved <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
