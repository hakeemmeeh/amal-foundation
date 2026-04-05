"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export function LatestStories() {
  const stories = [
    {
      id: "1",
      title: "Community Upliftment in Garowe: A New Chapter",
      excerpt: "Phase one of our clean water initiative in Garowe is now officially complete, impacting over 500 families.",
      date: "August 15, 2025",
      image: "/images/about/hero.png"
    },
    {
      id: "2",
      title: "Empowering Students Through Digital Literacy",
      excerpt: "Our new computer lab in Mogadishu is helping youth gain critical skills for the digital economy.",
      date: "July 22, 2025",
      image: "/images/about/school.png"
    }
  ];

  return (
    <section className="overflow-hidden bg-[#F5F0E8] pt-24 pb-0 md:pt-32">
      <div className="container mx-auto max-w-7xl px-6 pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#D4A843] font-mono font-bold tracking-widest uppercase text-xs mb-4 block">Impact Live</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B2A6B] leading-[1.05]">Latest <span className="text-[#D4A843] italic">Stories</span> from the field.</h2>
          </div>
          <Link 
            href="/blog"
            className="flex items-center gap-3 text-[#1B2A6B] font-bold uppercase tracking-widest text-xs border-b-2 border-[#D4A843] pb-1 hover:text-[#D4A843] transition-colors group"
          >
            Explore All Stories <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {stories.map((story, idx) => (
            <motion.article 
              key={story.id} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-[0_40px_80px_rgba(27,42,107,0.15)] transition-all duration-700 cursor-pointer group"
            >
              <Link href={`/blog/${story.id}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-[#1B2A6B]/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-10 md:p-14">
                  <div className="flex items-center gap-4 text-[#64748B] text-xs font-bold uppercase tracking-wider mb-6">
                    <Calendar size={14} className="text-[#D4A843]" /> {story.date}
                  </div>
                  <h3 className="font-display text-3xl font-bold text-[#1B2A6B] leading-tight mb-6 group-hover:text-[#D4A843] transition-colors">{story.title}</h3>
                  <p className="text-[#64748B] font-body text-lg leading-relaxed mb-8">{story.excerpt}</p>
                  <span className="inline-flex items-center gap-3 text-[#1B2A6B] font-bold text-xs uppercase tracking-widest pt-2 border-t border-[#D4A843]/20 w-full group-hover:gap-6 transition-all">
                    Learn More <ArrowRight size={16} className="text-[#D4A843]" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
