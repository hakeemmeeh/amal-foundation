"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function BackedByBand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="our-foundation"
      aria-labelledby="our-foundation-heading"
      className="relative w-full overflow-hidden bg-[#1B2A6B] px-6 py-24"
      ref={ref}
    >
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#D4A843] font-mono text-sm uppercase tracking-[0.2em] mb-4 font-bold">
            Our Foundation
          </p>
          <h2
            id="our-foundation-heading"
            className="font-display mb-6 text-3xl leading-tight text-white md:text-[32px]"
          >
            Backed by Amal Group&apos;s Legacy in Somalia
          </h2>
          <p className="font-body mx-auto mb-16 max-w-3xl text-base leading-relaxed text-slate-300 md:text-[16px]">
            Amal Foundation is the charitable arm of Amal Group International Limited — one of Somalia&apos;s established business groups with a diverse portfolio spanning financial services, telecommunications, real estate, and trade. Amal Group has served communities since 2006; the Foundation continues that legacy as its dedicated non-profit arm, incorporated in April 2025.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Tile 1 */}
          <motion.div variants={itemVariants} className="bg-[#1e2f75] border border-white/5 p-8 rounded-xl flex flex-col items-center justify-center text-center hover:bg-[#233580] transition-colors">
            <span className="text-[#D4A843] font-display text-4xl md:text-5xl font-bold mb-3">Since 2006</span>
            <span className="text-white font-body text-sm tracking-wide">Amal Group — heritage in Somalia</span>
          </motion.div>

          {/* Tile 2 */}
          <motion.div variants={itemVariants} className="bg-[#1e2f75] border border-white/5 p-8 rounded-xl flex flex-col items-center justify-center text-center hover:bg-[#233580] transition-colors">
            <span className="text-[#D4A843] font-display text-4xl md:text-5xl font-bold mb-3">7 Companies</span>
            <div className="flex flex-col gap-1 mt-2">
              {[
                "Amal Bank",
                "Amal Express",
                "Amtel",
                "MyCash",
                "Amal Mastercard",
                "Amal Real Estate & Construction",
                "Amal Trade",
              ].map((co) => (
                <span key={co} className="text-white font-body text-xs tracking-wide leading-relaxed">{co}</span>
              ))}
            </div>
          </motion.div>

          {/* Tile 3 */}
          <motion.div variants={itemVariants} className="bg-[#1e2f75] border border-white/5 p-8 rounded-xl flex flex-col items-center justify-center text-center hover:bg-[#233580] transition-colors">
            <span className="text-[#D4A843] font-display text-4xl md:text-5xl font-bold mb-3">April 2025</span>
            <span className="text-white font-body text-sm tracking-wide">Amal Foundation incorporated in Somalia</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
