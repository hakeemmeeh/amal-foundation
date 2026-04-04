"use client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function MissionBand() {
  const heartMask = "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"/></svg>')";

  return (
    <section className="bg-white py-24 px-6 md:py-32 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: The Heart Masked Image Collage (The "Love" Thing) */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center">
            
            {/* The Main Heart Image */}
            <ScrollReveal direction="up" className="w-[90%] md:w-[450px] aspect-square relative z-10" delay={0.1}>
              <div 
                className="w-full h-full relative bg-[#1B2A6B]" 
                style={{
                  WebkitMaskImage: heartMask,
                  WebkitMaskSize: 'contain',
                  WebkitMaskPosition: 'center',
                  WebkitMaskRepeat: 'no-repeat',
                  maskImage: heartMask,
                  maskSize: 'contain',
                  maskPosition: 'center',
                  maskRepeat: 'no-repeat'
                }}
              >
                <Image 
                  src="https://images.unsplash.com/photo-1664874332383-f14c222b0dde?q=80&w=800&auto=format&fit=crop" 
                  alt="Joyful Somali Youth" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </ScrollReveal>

            {/* Overlapping Orange Badge Heart */}
            <ScrollReveal direction="left" className="absolute top-[10%] -right-[5%] md:right-[5%] w-[180px] md:w-[220px] aspect-square z-20" delay={0.3}>
              <div 
                className="w-full h-full bg-[#D4A843] flex flex-col items-center justify-center text-white p-4 text-center"
                style={{
                  WebkitMaskImage: heartMask,
                  WebkitMaskSize: 'contain',
                  WebkitMaskPosition: 'center',
                  WebkitMaskRepeat: 'no-repeat',
                  maskImage: heartMask,
                  maskSize: 'contain',
                  maskPosition: 'center',
                  maskRepeat: 'no-repeat'
                }}
              >
                <div className="text-white">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest mt-2 whitespace-nowrap">Est. 2025</p>
              </div>
            </ScrollReveal>

            {/* Subtle brush stroke behind the heart */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#D4A843] opacity-20 rounded-full blur-[80px] z-0" />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#1B2A6B] opacity-10 rounded-full blur-[80px] z-0" />
          </div>

          {/* Right Side: Mission Text */}
          <div className="w-full lg:w-1/2 relative z-10">
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-[#D4A843] text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="text-[#D4A843]">♥</span> About Us
              </p>
              
              <h2 className="font-display text-[32px] md:text-[48px] lg:text-[56px] text-[#1B2A6B] leading-[1.1] font-bold mb-6 tracking-tight">
                Dismantling barriers and fostering inclusive growth across every province of Somalia.
              </h2>
              
              <p className="text-[#64748B] text-[16px] md:text-[18px] leading-relaxed mb-8">
                The Amal Group Foundation operates on a fundamental principle: sustainable prosperity is only possible when all communities have access to health, education, and economic empowerment. We channel targeted philanthropic capital to create enduring, multi-generational impact.
              </p>

              {/* Action List / Team Area */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 mb-10 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#Fff5Ed] rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1B2A6B] font-bold text-lg">Start Helping Team</h4>
                    <p className="text-[#64748B] text-sm font-medium">Join our volunteer network</p>
                  </div>
                </div>

                {/* Optional mini team avatars here */}
                <div className="flex -space-x-3 bg-gray-50 py-2 px-4 rounded-full border border-gray-100">
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                    <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80" alt="Team" fill className="object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-sm z-10">
                    <Image src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=100&q=80" alt="Team" fill className="object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#1B2A6B] flex items-center justify-center relative z-20">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/about"
                  className="px-8 py-4 bg-[#D4A843] text-[#1B2A6B] font-bold uppercase tracking-wider rounded-full hover:bg-[#B8922E] transition-all flex items-center gap-2"
                >
                  <span className="bg-white/30 rounded-full p-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                  Explore More
                </Link>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <p className="text-[#64748B] text-xs font-medium uppercase tracking-wider">Call Any Time</p>
                    <p className="text-[#1B2A6B] font-bold">+252 (0) 90 000 0000</p>
                  </div>
                </div>
              </div>

            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
