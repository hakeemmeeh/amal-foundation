"use client";
import { useRef, useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export function RecentNews() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const expandCarousel = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };

    expandCarousel();
    window.addEventListener("resize", expandCarousel);
    return () => window.removeEventListener("resize", expandCarousel);
  }, []);

  const news = [
    {
      id: 1,
      title: "New Education Initiative Launched in Rural Provinces",
      date: "August 15, 2026",
      category: "Education",
      image: "/images/programs/education.png",
    },
    {
      id: 2,
      title: "Vocational Skills Workshop Graduates First Cohort",
      date: "September 02, 2026",
      category: "Empowerment",
      image: "/images/programs/entrepreneurship.png",
    },
    {
      id: 3,
      title: "Foundation Expands Access to Medical Clinics",
      date: "September 18, 2026",
      category: "Healthcare",
      image: "/images/programs/humanitarian.png", // utilizing placeholder image
    },
    {
      id: 4,
      title: "Clean Water Project Reaches 50+ Communities",
      date: "October 05, 2026",
      category: "Infrastructure",
      image: "/images/programs/education.png", // fallback
    },
    {
      id: 5,
      title: "Emergency Relief Funds Deployed to Drought Areas",
      date: "November 12, 2026",
      category: "Humanitarian",
      image: "/images/programs/entrepreneurship.png", // fallback
    },
  ];

  return (
    <section className="bg-[#F5F0E8] text-[#1B2A6B] py-24 border-t border-[#D4A843]/10 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 px-6 md:px-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#D4A843]" />
              <span className="text-[#D4A843] font-mono tracking-[0.3em] uppercase text-[10px] font-bold">
                Strategic Communications
              </span>
              <div className="hidden md:block h-[2px] w-12 bg-[#D4A843]" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl tracking-tighter font-bold leading-tight">Latest News <br className="hidden md:block" />& Field Updates</h2>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col items-end gap-5">
            <div className="flex items-center text-[#64748B] text-[10px] font-bold uppercase tracking-[0.4em] gap-3 opacity-60 font-mono">
              <MoveRight className="w-5 h-5 text-[#D4A843]" />
              <span>Scroll Initiative</span>
            </div>
          </div>
        </ScrollReveal>

        <motion.div
          ref={carouselRef}
          className="cursor-grab active:cursor-grabbing pb-12 overflow-visible"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 150, bounceDamping: 25 }}
            className="flex gap-6 md:gap-10 w-max pl-6 md:pl-16 pr-[40vw]"
          >
            {news.map((item, idx) => (
              <motion.div
                key={item.id}
                className="w-[280px] md:w-[420px] flex-shrink-0 group pointer-events-none"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="pointer-events-auto h-full group hover:cursor-pointer">
                  <div
                    className="h-64 sm:h-[360px] bg-cover bg-center mb-8 overflow-hidden rounded-[32px] shadow-2xl shadow-[#1B2A6B]/5 group-hover:shadow-[0_40px_80px_rgba(27,42,107,0.1)] group-hover:border-[#D4A843]/20 border border-transparent transition-all duration-700 ease-out relative"
                  >
                    <div
                      className="w-full h-full bg-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    >
                      <div className="w-full h-full bg-[#1B2A6B]/5 group-hover:bg-[#1B2A6B]/0 transition-colors duration-700" />
                    </div>
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                      <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] bg-[#D4A843] px-4 py-2 rounded-xl shadow-lg shadow-[#D4A843]/20 font-mono">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] font-mono text-[#64748B] mb-4">
                    <div className="h-[1px] w-8 bg-[#D4A843]/20" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-display text-lg md:text-2xl font-bold leading-[1.1] tracking-tight group-hover:text-[#D4A843] transition-colors duration-500 pr-8">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <ScrollReveal className="mt-12 flex justify-center md:justify-start px-6 md:px-16">
          <Link
            href="/about"
            className="group flex items-center text-xs font-bold text-[#1B2A6B] uppercase tracking-[0.3em] transition-all border-b border-transparent hover:border-[#D4A843] pb-2"
          >
            Archive & Reports <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-3 transition-transform duration-500 text-[#D4A843]" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
