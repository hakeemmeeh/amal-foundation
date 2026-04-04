"use client";
import { motion } from "framer-motion";
import { Shield, Award, Users, Globe2, HeartHandshake } from "lucide-react";
import Image from "next/image";

export default function About() {
  const board = [
    { name: "Mahamud Haji Abdalle", role: "Chairman" },
    { name: "Dahir Ismail Mohamed", role: "Vice Chairman" },
    { name: "Jama Mohamed Issa", role: "Director" },
    { name: "Abdidahir Ali Hersi", role: "Director" },
    { name: "Dr. Abdiqafar Yasin Farah", role: "Director" },
    { name: "Yusuf Ali Juma", role: "Director" },
    { name: "Yusuf Ahmed Dahir", role: "Director" },
    { name: "Omar Ali Abdallah", role: "Board Secretary" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="bg-[#1B2A6B] min-h-screen pb-32 overflow-hidden">
      {/* Hero */}
      <section className="relative h-[75vh] min-h-[650px] flex items-center justify-center overflow-hidden pt-32 bg-[#1B2A6B]">
        <Image 
          src="/images/about/hero.png"
          alt="Amal Group Foundation Legacy"
          fill
          className="object-cover object-center opacity-40 grayscale-[10%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A6B] via-[#1B2A6B]/20 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#D4A843]" />
              <span className="text-[#D4A843] font-mono tracking-[0.2em] uppercase text-sm font-semibold">About Us</span>
              <div className="h-[2px] w-12 bg-[#D4A843]" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05]">
              Amal Group <br /> Foundation
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Founding Section */}
      <section className="bg-[#F5F0E8] w-full py-24 md:py-32" id="our-founding">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-[#D4A843] font-mono font-bold uppercase tracking-widest text-sm mb-4">
                Officially Established
              </p>
              <h2 className="font-display text-3xl md:text-[36px] text-[#1B2A6B] font-bold mb-8 leading-tight">
                A Foundation Built on Trust
              </h2>
              <p className="font-body text-[#64748B] text-base leading-relaxed mb-6">
                Amal Group Foundation was formally established by the Amal Group Board of Directors and incorporated as a private non-profit foundation in Somalia on 23 April 2025. Authorized under Board Resolution AGI/42/2025, the Foundation is headquartered at Garowe Main Road, Garowe, Puntland, Somalia — with international parent offices in Dubai, UAE.
              </p>
              <p className="font-body text-[#64748B] text-base leading-relaxed mb-8">
                Dr. Abdiqafar Yasin Farah and Abdidahir Ali Hersi are the authorized representatives responsible for registering and operationalizing the Foundation across Somalia and abroad.
              </p>
              <a href="#board" className="text-[#1B2A6B] font-bold uppercase tracking-widest hover:text-[#D4A843] transition-colors border-b-2 border-transparent hover:border-[#D4A843] pb-1">
                Meet the Board →
              </a>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white border-2 border-[#1B2A6B] rounded-xl p-8 md:p-10 shadow-2xl relative">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Award size={80} className="text-[#1B2A6B]" />
                </div>
                <h4 className="font-display font-bold text-xl text-[#1B2A6B] mb-2 uppercase tracking-wide">
                  Board Resolution No: AGI/42/2025
                </h4>
                <p className="font-mono text-sm text-[#D4A843] font-bold mb-8">
                  April 18–23, 2025
                </p>
                <div className="w-12 h-[2px] bg-[#D4A843] mb-8" />
                <p className="font-display text-2xl text-[#1A1A2E] leading-relaxed italic mb-8 relative z-10">
                  "It was resolved that the establishment of Amal Group Foundation, under Amal Group International, to be based in Somalia and branches abroad."
                </p>
                <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-between">
                  <p className="font-mono text-sm uppercase text-[#64748B] font-bold">
                    Signed <br /> Omar Ali Abdallah <br /> Board Secretary
                  </p>
                  <Shield size={48} className="text-[#D4A843]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-6xl mt-32">
        {/* Core Philosophy */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-16 md:gap-24 items-center mb-32"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-[#FAFAF5] leading-tight">
              Helping each other can make the world better
            </h2>
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-10">
              In a world often marked by division and hardship, the simple act of helping one another holds incredible power. Whether it's offering your time, resources, or compassion, supporting others sparks meaningful change across the globe.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Reduces Suffering", icon: HeartHandshake },
                { title: "Builds Stronger Communities", icon: Globe2 },
                { title: "Inspires a Ripple Effect", icon: Users },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-center text-white font-semibold text-lg">
                    <span className="bg-[#1A1A2E] p-3 rounded-full mr-5 border border-white/10 shadow-sm">
                      <Icon className="w-6 h-6 text-[#D4A843]" />
                    </span>
                    {item.title}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="h-[300px] bg-white rounded-[24px] shadow-xl bg-cover bg-center" style={{ backgroundImage: "url('/images/about/school.png')" }} />
            <div className="h-[300px] bg-white rounded-[24px] shadow-2xl bg-cover bg-center translate-y-12" style={{ backgroundImage: "url('/images/about/health.png')" }} />
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-8 mb-32"
        >
          <div className="bg-[#D4A843] p-12 md:p-16 rounded-[24px] shadow-2xl relative overflow-hidden group">
            <h3 className="font-display text-4xl font-semibold mb-6 text-[#1B2A6B]">Our Vision</h3>
            <p className="text-[#1A1A2E] text-lg md:text-xl font-medium leading-relaxed relative z-10">
              "To foster community development and poverty reduction through highly targeted, sustainable programs across Somalia and the broader region."
            </p>
          </div>
          <div className="bg-[#F5F0E8] p-12 md:p-16 rounded-[24px] shadow-xl border border-white/10 relative overflow-hidden group">
            <h3 className="font-display text-4xl font-semibold mb-6 text-[#1B2A6B]">Our Mission</h3>
            <p className="text-[#1A1A2E] text-lg md:text-xl font-medium leading-relaxed relative z-10">
              As the dedicated charitable arm of Amal Group International Limited, we operate securely and sustainably to deliver critical education, healthcare, humanitarian relief, and direct economic investments.
            </p>
          </div>
        </motion.div>

        {/* Board of Directors */}
        <motion.div 
          id="board"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <span className="text-[#D4A843] font-mono tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Leadership</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Board of Directors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {board.map((member, idx) => (
              <div key={idx} className="bg-[#F5F0E8] border border-white/10 shadow-sm p-8 text-center rounded-[24px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 mx-auto bg-[#1B2A6B]/5 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-[#1B2A6B]" />
                </div>
                <h4 className="font-display font-semibold text-xl text-[#1B2A6B] leading-tight mb-3">{member.name}</h4>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4A843]">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline / Corporate Structure */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-[#F5F0E8] border border-[#1B2A6B]/10 shadow-2xl p-12 md:p-24 rounded-[40px] relative overflow-hidden group"
        >
          <div className="relative z-10 text-center">
            <h2 className="font-display text-4xl font-bold text-[#1B2A6B] mb-16">Corporate Structure</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
              <div className="text-center z-10">
                <div className="bg-[#1B2A6B] text-white px-8 md:px-12 py-5 text-lg font-bold rounded-[16px] shadow-xl inline-block">
                  Amal Group Int.
                </div>
                <p className="text-xs font-mono font-semibold tracking-widest text-[#64748B] mt-5 uppercase">Parent Company</p>
              </div>
              <div className="w-1 md:w-20 h-16 md:h-[2px] bg-[#D4A843]"></div>
              <div className="text-center z-10">
                <div className="bg-[#D4A843] text-[#1B2A6B] px-8 md:px-12 py-5 text-lg font-bold rounded-[16px] shadow-xl inline-block">
                  Amal Foundation
                </div>
                <p className="text-xs font-mono font-semibold tracking-widest text-[#D4A843] mt-5 uppercase">Charitable Arm (Est. 2025)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
