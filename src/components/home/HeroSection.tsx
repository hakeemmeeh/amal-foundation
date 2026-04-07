"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const impactStats = [
  { label: "Established", value: "2025" },
  { label: "Headquarters", value: "Garowe, Puntland" },
  { label: "Focus areas", value: "4 program pillars" },
  { label: "Parent organization", value: "Amal Bank" },
];

export function HeroSection() {
  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-[#1B2A6B] pt-36 md:pt-[300px]">
      {/* Right hero art — inset from top so faces clear the fixed navbar; crop biased for portrait focal point */}
      <div className="absolute right-0 top-10 z-0 h-[calc(100%-2.5rem)] w-full overflow-hidden sm:top-12 sm:h-[calc(100%-3rem)] md:top-[4.5rem] md:h-[calc(100%-4.75rem)] md:w-1/2 lg:top-24 lg:h-[calc(100%-6rem)]">
        <Image
          src="/images/home/hero-collage.png"
          alt="Amal Humanitarian Efforts in Somalia"
          fill
          className="object-cover object-[50%_38%] sm:object-[52%_40%] md:object-[56%_42%]"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />

        <div className="absolute inset-y-0 left-0 z-10 hidden w-full text-[#1B2A6B] md:block md:w-[250px] md:-translate-x-1">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="h-full w-full fill-current"
          >
            <path d="M0,0 L100,0 C0,30 20,80 100,100 L0,100 Z" />
          </svg>
        </div>

        <div className="absolute inset-0 z-0 bg-[#1B2A6B]/80 md:bg-black/10" />
      </div>

      <div className="relative z-10 flex flex-1 items-center pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="w-full md:w-[65%] lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#D4A843] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:text-xs">
                <span className="text-white drop-shadow-none">♥</span>{" "}
                Education · Health · Opportunity · Dignity
              </p>
              <h1 className="font-display mb-6 text-[42px] leading-[1.1] tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] md:text-[60px] lg:text-[72px]">
                Transforming Lives{" "}
                <br className="hidden xl:block" /> Across Somalia
              </h1>
            </motion.div>

            <motion.p
              className="font-body mb-10 max-w-lg text-[16px] font-light leading-relaxed text-white/90 drop-shadow-sm md:mb-12 md:text-[18px] md:text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              A private non-profit foundation committed to improving communities
              across all provinces of Somalia. We focus on dismantling systemic
              barriers through targeted philanthropic investment.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:flex-wrap"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A843] px-8 py-4 text-center text-[#1B2A6B] font-bold uppercase tracking-wider transition-all hover:bg-white"
              >
                <span className="rounded-full bg-white/20 p-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <polyline points="13 17 18 12 13 7" />
                    <line x1="6" y1="12" x2="18" y2="12" />
                  </svg>
                </span>
                Donate
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-all hover:border-white hover:bg-white/10"
              >
                Our programs
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick credibility / impact strip */}
      <div className="relative z-10 border-t border-white/15 bg-[#152255]/85 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-5 md:py-6">
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {impactStats.map((item) => (
              <div key={item.label} className="text-left">
                <dt className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D4A843]/95 md:text-xs">
                  {item.label}
                </dt>
                <dd className="mt-1 font-display text-base font-bold leading-snug text-white md:text-lg">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
