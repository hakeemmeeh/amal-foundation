"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#1B2A6B] pb-32">
      {/* Hero */}
      <section className="relative flex h-[75vh] min-h-[650px] items-center justify-center overflow-hidden bg-[#1B2A6B] pt-32 md:pt-48">
        <Image
          src="/images/about/hero.png"
          alt="Amal Foundation"
          fill
          className="object-cover object-center opacity-40 grayscale-[10%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A6B] via-[#1B2A6B]/20 to-transparent" />

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-[#D4A843]" />
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A843]">
                Who we are
              </span>
              <div className="h-[2px] w-12 bg-[#D4A843]" />
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
              Amal <br /> Foundation
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Who we are — founding & resolution */}
      <section className="w-full bg-[#F5F0E8] py-24 md:py-32" id="who-we-are">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-[#D4A843]">
                Officially established
              </p>
              <h2 className="mb-8 font-display text-3xl font-bold leading-tight text-[#1B2A6B] md:text-[36px]">
                A foundation built on trust
              </h2>
              <p className="font-body text-base leading-relaxed text-[#64748B]">
                Amal Group has built businesses and community commitment in Somalia since 1997. Amal Foundation was formally established by the Amal Group Board of Directors and incorporated as a private non-profit foundation in Somalia in 2025, with headquarters at Garowe Main Road, Garowe, Puntland, Somalia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative rounded-xl border-2 border-[#1B2A6B] bg-white p-8 shadow-2xl md:p-10">
                <div className="absolute right-0 top-0 p-6 opacity-10">
                  <Award size={80} className="text-[#1B2A6B]" />
                </div>
                <h3 className="mb-6 font-display text-xl font-bold uppercase leading-snug tracking-wide text-[#1B2A6B]">
                  Board resolution — Amal Foundation incorporation{" "}
                  <span className="mt-2 block font-display text-5xl font-bold tracking-tight text-[#D4A843] md:text-6xl lg:text-7xl">
                    2025
                  </span>
                </h3>
                <div className="mb-8 h-[2px] w-12 bg-[#D4A843]" />
                <p className="font-display text-2xl italic leading-relaxed text-[#1A1A2E]">
                  &ldquo;It was resolved that the establishment of Amal Foundation, under Amal Group International, to be based in Somalia and abroad.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <div className="container mx-auto mt-24 max-w-6xl px-6 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid gap-8 md:grid-cols-2"
        >
          <div className="group relative overflow-hidden rounded-[24px] bg-[#D4A843] p-12 shadow-2xl md:p-16">
            <h3 className="mb-6 font-display text-4xl font-semibold text-[#1B2A6B]">Our vision</h3>
            <p className="relative z-10 text-lg font-medium leading-relaxed text-[#1A1A2E] md:text-xl">
              &ldquo;To foster community development and poverty reduction through highly targeted, sustainable programs across Somalia and the broader region.&rdquo;
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#F5F0E8] p-12 shadow-xl md:p-16">
            <h3 className="mb-6 font-display text-4xl font-semibold text-[#1B2A6B]">Our mission</h3>
            <p className="relative z-10 text-lg font-medium leading-relaxed text-[#1A1A2E] md:text-xl">
              As the dedicated charitable arm of Amal Group International Limited, we operate securely and sustainably to deliver critical education, healthcare, humanitarian relief, and direct economic investments.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
