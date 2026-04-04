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
    <section className="bg-[#1B2A6B] w-full py-24 px-6 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#D4A843] font-mono text-sm uppercase tracking-[0.2em] mb-4 font-bold">
            Our Foundation
          </p>
          <h2 className="font-display text-3xl md:text-[32px] text-white mb-6 leading-tight">
            Backed by Amal Group's Legacy in Somalia
          </h2>
          <p className="font-body text-slate-300 text-base md:text-[16px] max-w-3xl mx-auto mb-16 leading-relaxed">
            Amal Group Foundation is the charitable arm of Amal Group International Limited — one of Somalia's established business groups operating through Amal Bank and Amal Express. With a history of annual charitable contributions dating back to 2017, Amal Group has consistently invested in the communities it serves.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Tile 1 */}
          <motion.div variants={itemVariants} className="bg-[#1e2f75] border border-white/5 p-8 rounded-xl flex flex-col items-center justify-center text-center hover:bg-[#233580] transition-colors">
            <span className="text-[#D4A843] font-display text-4xl md:text-5xl font-bold mb-3">Since 2017</span>
            <span className="text-white font-body text-sm tracking-wide">Annual giving by Amal Group</span>
          </motion.div>

          {/* Tile 2 */}
          <motion.div variants={itemVariants} className="bg-[#1e2f75] border border-white/5 p-8 rounded-xl flex flex-col items-center justify-center text-center hover:bg-[#233580] transition-colors">
            <span className="text-[#D4A843] font-display text-4xl md:text-5xl font-bold mb-3">2 Companies</span>
            <span className="text-white font-body text-sm tracking-wide">Amal Bank + Amal Express</span>
          </motion.div>

          {/* Tile 3 */}
          <motion.div variants={itemVariants} className="bg-[#1e2f75] border border-white/5 p-8 rounded-xl flex flex-col items-center justify-center text-center hover:bg-[#233580] transition-colors">
            <span className="text-[#D4A843] font-display text-4xl md:text-5xl font-bold mb-3">April 2025</span>
            <span className="text-white font-body text-sm tracking-wide">Foundation incorporated in Somalia</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
