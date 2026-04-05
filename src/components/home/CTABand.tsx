"use client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABand() {
  return (
    <section className="relative w-full bg-[#1B2A6B] pb-20 md:pb-28">
      {/* Blend from sand (Latest Stories) into navy CTA — nudged up for a longer handoff */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-10 z-[2] h-52 bg-gradient-to-b from-[#F5F0E8] from-0% via-[#F5F0E8]/75 via-35% to-transparent to-100% md:-top-14 md:h-64"
        aria-hidden
      />
      <div
        className="absolute inset-0 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-[#1B2A6B]/68 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B2A6B]/72 via-[#1B2A6B]/38 to-[#1B2A6B]/78" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pb-24 md:pt-28">
        <ScrollReveal>
          <h2 className="mb-10 font-display text-5xl font-bold leading-[1.1] tracking-tighter text-white drop-shadow-[0_2px_28px_rgba(27,42,107,0.55)] md:mb-12 md:text-7xl">
            Together, We Build <br className="hidden md:block" /> a Better Somalia.
          </h2>
          <Link
            href="/get-involved"
            className="group inline-flex items-center rounded-2xl bg-[#D4A843] px-12 py-5 text-xs font-bold uppercase tracking-widest text-white shadow-2xl shadow-[#D4A843]/20 transition-all duration-500 hover:bg-white hover:text-[#1B2A6B]"
          >
            Get Involved{" "}
            <ArrowRight
              className="ml-3 transition-transform group-hover:translate-x-2"
              size={18}
            />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
