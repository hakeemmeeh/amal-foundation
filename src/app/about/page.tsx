"use client";
import { motion } from "framer-motion";
import { Award, Users, Globe2, HeartHandshake } from "lucide-react";
import Image from "next/image";

export default function About() {
  const board = [
    {
      name: "Dr Abdiqafar Yasin Farah",
      role: "Director Amal Bank Board",
      position: "Chairman",
    },
    {
      name: "Abdidahir Ali Hersi",
      role: "Director Amal Bank Board",
      position: "Member",
    },
    { name: "Ugas Osman Hasan", role: "CEO Amal Bank", position: "Member" },
  ];

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
          alt="Amal Foundation Legacy"
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

      {/* Our founding + board resolution */}
      <section className="w-full bg-[#F5F0E8] py-24 md:py-32" id="our-founding">
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
              <p className="mb-6 font-body text-base leading-relaxed text-[#64748B]">
                Amal Group has built businesses and community commitment in Somalia since 1997. Amal Foundation was formally established by the Amal Group Board of Directors and incorporated as a private non-profit foundation in Somalia in 2025, with headquarters at Garowe Main Road, Garowe, Puntland, Somalia.
              </p>
              <a
                href="#board"
                className="border-b-2 border-transparent pb-1 font-bold uppercase tracking-widest text-[#1B2A6B] transition-colors hover:border-[#D4A843] hover:text-[#D4A843]"
              >
                Meet the Board →
              </a>
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
                <p className="font-display text-lg italic leading-relaxed text-[#1A1A2E] md:text-xl">
                  &ldquo;It was resolved that Amal Foundation be established as the charitable arm of Amal Group International Limited — the parent group behind five operating companies: Amal Express, Amal Bank, Amal Trade, Amtel, and Amal Real Estate &amp; Construction — spanning financial services, telecommunications, trade, and real estate, with its mandate to serve communities in Somalia and abroad.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto mt-32 max-w-6xl px-6">
        {/* Core philosophy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-32 grid items-center gap-16 md:grid-cols-2 md:gap-24"
        >
          <div>
            <h2 className="mb-8 font-display text-4xl font-bold leading-tight text-[#FAFAF5] md:text-5xl">
              Helping each other can make the world better
            </h2>
            <p className="mb-10 text-lg font-light leading-relaxed text-slate-300 md:text-xl">
              In a world often marked by division and hardship, the simple act of helping one another holds incredible power. Whether it&apos;s offering your time, resources, or compassion, supporting others sparks meaningful change across the globe.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Reduces Suffering", icon: HeartHandshake },
                { title: "Builds Stronger Communities", icon: Globe2 },
                { title: "Inspires a Ripple Effect", icon: Users },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-center text-lg font-semibold text-white">
                    <span className="mr-5 rounded-full border border-white/10 bg-[#1A1A2E] p-3 shadow-sm">
                      <Icon className="h-6 w-6 text-[#D4A843]" />
                    </span>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="relative grid grid-cols-2 gap-6">
            <div
              className="h-[300px] rounded-[24px] bg-white bg-cover bg-center shadow-xl"
              style={{ backgroundImage: "url('/images/about/school.png')" }}
            />
            <div
              className="h-[300px] translate-y-12 rounded-[24px] bg-white bg-cover bg-center shadow-2xl"
              style={{ backgroundImage: "url('/images/about/health.png')" }}
            />
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-32 grid gap-8 md:grid-cols-2"
        >
          <div className="group relative overflow-hidden rounded-[24px] bg-[#D4A843] p-12 shadow-2xl md:p-16">
            <h3 className="mb-6 font-display text-4xl font-semibold text-[#1B2A6B]">Our Vision</h3>
            <p className="relative z-10 text-lg font-medium leading-relaxed text-[#1A1A2E] md:text-xl">
              &ldquo;To foster community development and poverty reduction through highly targeted, sustainable programs across Somalia and the broader region.&rdquo;
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#F5F0E8] p-12 shadow-xl md:p-16">
            <h3 className="mb-6 font-display text-4xl font-semibold text-[#1B2A6B]">Our Mission</h3>
            <p className="relative z-10 text-lg font-medium leading-relaxed text-[#1A1A2E] md:text-xl">
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
          <div className="mb-16 text-center">
            <span className="mb-4 block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A843]">
              Leadership
            </span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">Board of Directors</h2>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 md:grid-cols-3 md:gap-14">
            {board.map((member, idx) => (
              <div
                key={idx}
                className="rounded-[24px] border border-white/10 bg-[#F5F0E8] p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#1B2A6B]/5">
                  <Users className="h-8 w-8 text-[#1B2A6B]" />
                </div>
                <h4 className="mb-3 font-display text-xl font-semibold leading-tight text-[#1B2A6B]">
                  {member.name}
                </h4>
                <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#D4A843]">
                  <p>{member.role}</p>
                  {member.position ? (
                    <p className="mt-1 text-[11px] text-[#1B2A6B]">{member.position}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Corporate structure */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-[40px] border border-[#1B2A6B]/10 bg-[#F5F0E8] p-12 shadow-2xl md:p-24"
        >
          <div className="relative z-10 text-center">
            <h2 className="mb-16 font-display text-4xl font-bold text-[#1B2A6B]">Corporate Structure</h2>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
              <div className="z-10 text-center">
                <div className="inline-block rounded-[16px] bg-[#1B2A6B] px-8 py-5 text-lg font-bold text-white shadow-xl md:px-12">
                  Amal Group Int.
                </div>
                <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-widest text-[#64748B]">
                  Parent company · since 1997
                </p>
              </div>
              <div className="h-16 w-1 bg-[#D4A843] md:h-[2px] md:w-20" />
              <div className="z-10 text-center">
                <div className="inline-block rounded-[16px] bg-[#D4A843] px-8 py-5 text-lg font-bold text-[#1B2A6B] shadow-xl md:px-12">
                  Amal Foundation
                </div>
                <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-widest text-[#D4A843]">
                  Charitable arm · Est. 2025
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
