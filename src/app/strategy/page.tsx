"use client";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Image from "next/image";

export default function StrategyPage() {
  const stage1Steps = [
    { 
      title: "Legal & Governance", 
      desc: "Register the foundation, establish governance structure, hire core staff, open Garowe office" 
    },
    { 
      title: "Digital Presence", 
      desc: "Launch website and establish online donation capability" 
    },
    { 
      title: "Pilot Programs", 
      desc: "Allocate 40% of initial funds to orphan care, education, health, and literacy pilots" 
    },
    { 
      title: "Transparency", 
      desc: "Publish mid-year progress report and impact documentation" 
    }
  ];

  const stage2Features = [
    {
      title: "Expand Reach",
      desc: "Grow programs to new regions of Somalia, launch Amal Waqf Fund",
      img: "https://images.unsplash.com/photo-1774869597727-16fcb9a84b4f?w=800&q=80&auto=format&fit=crop"
    },
    {
      title: "Build Partnerships",
      desc: "Engage with NGOs, UN agencies, and international donors",
      img: "https://images.unsplash.com/photo-1655104293575-2b3bc063251d?w=800&q=80&auto=format&fit=crop"
    },
    {
      title: "Strengthen Programs",
      desc: "Scale youth, women, health, and microfinance initiatives",
      img: "https://images.unsplash.com/photo-1646031881272-a914e54af276?w=800&q=80&auto=format&fit=crop"
    },
    {
      title: "Monitor & Report",
      desc: "Publish annual impact reports with verified data",
      img: "https://images.unsplash.com/photo-1664874317355-b474aca8eed9?w=800&q=80&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center px-6 pt-32 bg-[#1B2A6B] overflow-hidden">
        <Image 
          src="/images/strategy/hero.png"
          alt="Amal Foundation Institutional Growth Plan"
          fill
          className="object-cover object-center opacity-40 grayscale-[10%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B2A6B]/20 to-[#1B2A6B]/80" />
        
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white font-mono text-sm uppercase tracking-widest mb-6">
            2025 <span className="text-[#D4A843]">→</span> 2026
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Roadmap for Impact
          </h1>
          <p className="text-[#D4A843] font-body text-xl max-w-2xl mx-auto">
            How we are building a foundation that lasts
          </p>
        </motion.div>
      </section>

      {/* STAGE 1 */}
      <section className="py-24 bg-[#F5F0E8] px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B2A6B]">
              Stage 1 — 2025: Build the Foundation
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {stage1Steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border-l-4 border-[#D4A843] p-8 rounded-r-xl shadow-lg relative"
              >
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    <Clock size={14} /> In Progress
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-[#1B2A6B] mb-4 mt-8 md:mt-0">
                  {step.title}
                </h3>
                <p className="text-slate-600 font-body leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STAGE 2 */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B2A6B]">
              Stage 2 — 2026: Scale & Grow
            </h2>
          </div>
          <div className="flex flex-col gap-12">
            {stage2Features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
              >
                <div className="w-full md:w-1/2">
                  <div className="h-[250px] md:h-[300px] w-full bg-slate-200 rounded-xl overflow-hidden relative shadow-lg">
                    <img src={feature.img} alt={feature.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
                    <Clock size={14} /> Planned for 2026
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#1B2A6B] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 font-body text-lg leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
