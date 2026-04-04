"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, HeartPulse, GraduationCap, Handshake, Users, Mail } from "lucide-react";
import Image from "next/image";

export default function GetInvolved() {
  const waysToHelp = [
    {
      title: "Direct Donation",
      desc: "Support our orphan care, healthcare, and education funds through Zakat, Sadaqa, or Waqf.",
      icon: HeartPulse,
      href: "/contact",
      color: "bg-[#D4A843]",
      textColor: "text-[#1B2A6B]"
    },
    {
      title: "Volunteer Program",
      desc: "Join our active network of volunteers across Somalia. Help us deliver aid to those who need it most.",
      icon: Users,
      href: "/contact",
      color: "bg-[#1B2A6B]",
      textColor: "text-white"
    },
    {
      title: "Strategic Partnerships",
      desc: "We work with NGOs, UN agencies, and corporations to scale our impact and reach new communities.",
      icon: Handshake,
      href: "/contact",
      color: "bg-[#F5F0E8]",
      textColor: "text-[#1B2A6B]"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#1B2A6B] pt-20">
        <Image 
          src="/images/home/hero-collage.png"
          alt="Amal Humanitarian Efforts"
          fill
          className="object-cover object-center opacity-30 grayscale-[10%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A6B] via-[#1B2A6B]/20 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-[#D4A843] text-[#1B2A6B] text-[10px] uppercase font-bold tracking-widest rounded-full mb-6">
              Join the Mission
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-8">
              Make an <span className="text-[#D4A843] italic">Impact</span> <br /> Today
            </h1>
            <p className="text-white/80 font-body text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Your contribution, whether big or small, helps us dismantle barriers and foster inclusive growth across every province of Somalia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OPTIONS SECTION */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {waysToHelp.map((way, idx) => {
              const Icon = way.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`${way.color} p-12 rounded-[32px] flex flex-col items-center text-center shadow-xl hover:-translate-y-2 transition-all duration-300 group`}
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Icon size={32} className={way.textColor} />
                  </div>
                  <h3 className={`font-display text-3xl font-bold mb-6 ${way.textColor}`}>{way.title}</h3>
                  <p className={`text-lg leading-relaxed mb-10 opacity-90 ${way.textColor}`}>{way.desc}</p>
                  <Link 
                    href={way.href}
                    className={`mt-auto px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 transition-all ${
                      way.color === 'bg-[#1B2A6B]' ? 'bg-[#D4A843] text-[#1B2A6B] hover:bg-white' : 'bg-[#1B2A6B] text-white hover:opacity-90'
                    }`}
                  >
                    Take Action <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT INFO CALLOUT */}
      <section className="py-24 bg-[#F5F0E8] border-t border-[#D4A843]/20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-[40px] p-12 md:p-20 shadow-2xl border border-[#D4A843]/10">
            <h2 className="font-display text-[40px] md:text-[56px] text-[#1B2A6B] font-bold mb-8 leading-[1.1]">
              Ready to help <br /> move Somalia forward?
            </h2>
            <p className="text-[#64748B] text-xl mb-12 max-w-2xl mx-auto font-light">
              For corporate giving, endowment funds (Waqf), or large humanitarian contributions, our strategic team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:contact@amalgroup.com" 
                className="flex items-center gap-4 px-10 py-5 bg-[#1B2A6B] text-white rounded-full font-bold hover:shadow-xl transition-all group"
              >
                <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                Email Our Team
              </a>
              <Link 
                href="/contact" 
                className="flex items-center gap-4 px-10 py-5 border-2 border-[#1B2A6B] text-[#1B2A6B] rounded-full font-bold hover:bg-[#1B2A6B] hover:text-white transition-all"
              >
                Visit Our Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
