"use client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export function QuickConnect() {
  return (
    <section className="bg-[#1B2A6B] text-[#FAFAF5] w-full py-24 relative overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#D4A843] shadow-lg shadow-[#D4A843]/20 rotate-3">
                <Phone className="h-7 w-7 text-white" />
              </span>
              <div className="text-center md:text-left">
                <h3 className="font-display font-bold text-3xl lg:text-4xl tracking-tighter">
                  Secure Consultation?
                </h3>
                <p className="text-[#64748B] text-lg font-light mt-1">
                  Our strategic team is available for direct inquiries.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <span className="font-mono text-2xl lg:text-3xl font-bold tracking-[0.1em] text-[#D4A843]">
                +252 90 000 0000
              </span>
              <div className="hidden md:block h-10 w-[1px] bg-white/10"></div>
              <Link
                href="/contact"
                className="group flex items-center justify-center text-xs font-bold uppercase tracking-[0.3em] text-[#FAFAF5] hover:text-[#D4A843] transition-all duration-300 border-b border-white/20 pb-1"
              >
                Direct Connect <ArrowRight size={16} className="ml-3 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
