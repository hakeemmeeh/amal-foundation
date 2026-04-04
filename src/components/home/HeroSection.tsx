"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-[#1B2A6B] pt-40 pb-32 md:pt-[260px] md:pb-[180px] w-full overflow-hidden flex items-center">
      
      {/* Charitics-Style Right-Aligned Image with Wavy Mask */}
      <div className="absolute top-0 right-0 w-full md:w-[50%] h-full z-0 overflow-hidden">
        <Image 
          src="/images/home/hero-collage.png" 
          alt="Amal Humanitarian Efforts in Somalia" 
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Stronger overlay and positioning adjustment for mobile */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[250px] text-[#1B2A6B] z-10 md:-translate-x-1">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current hidden md:block">
            <path d="M0,0 L100,0 C0,30 20,80 100,100 L0,100 Z" />
          </svg>
        </div>
        
        {/* Maximum contrast for mobile: High-density overlay */}
        <div className="absolute inset-0 bg-[#1B2A6B]/80 md:bg-black/10 z-0" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="w-full md:w-[65%] lg:w-[55%]">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#D4A843] md:text-[#D4A843] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              <span className="text-white drop-shadow-none">♥</span> Education · Health · Opportunity · Dignity
            </p>
            <h1 className="font-display text-[42px] md:text-[60px] lg:text-[72px] text-white leading-[1.1] mb-6 tracking-tighter drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              Transforming Lives <br className="hidden xl:block"/> Across Somalia
            </h1>
          </motion.div>

          <motion.p 
            className="font-body text-[16px] md:text-[18px] text-white/90 md:text-white/80 max-w-lg mb-12 leading-relaxed font-light drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A private non-profit foundation committed to improving communities across all provinces of Somalia. We focus on dismantling systemic barriers through targeted philanthropic investment.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-16 sm:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="/get-involved"
              className="px-8 py-4 bg-[#D4A843] text-[#1B2A6B] font-bold uppercase tracking-wider rounded-full hover:bg-white transition-all text-center flex items-center justify-center gap-2"
            >
              <span className="bg-white/20 p-1 rounded-full"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7"></polyline><line x1="6" y1="12" x2="18" y2="12"></line></svg></span>
              Make Donation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
