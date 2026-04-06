"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      id: "1",
      title: "Community Upliftment in Garowe: A New Chapter",
      excerpt: "Our recent mission to Garowe has successfully launched the first phase of our community development project, focusing on clean water and local markets.",
      date: "August 15, 2025",
      author: "Foundation Field Team",
      tag: "Development",
      image: "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "Empowering Somali Students Through Digital Literacy",
      excerpt: "Technical education is the backbone of future growth. Read how our new computer lab in Mogadishu is changing lives for over 200 youths.",
      date: "July 22, 2025",
      author: "Amal Foundation Team",
      tag: "Education",
      image: "/images/about/school.png"
    },
    {
      id: "3",
      title: "Healthcare on Wheels: The Impact of Our Mobile Clinics",
      excerpt: "In remote areas, healthcare is a luxury. Our mobile ambulance units are bringing critical medical aid to mothers and children across the rural regions.",
      date: "July 10, 2025",
      author: "Medical Outreach Team",
      tag: "Healthcare",
      image: "/images/about/health.png"
    }
  ];

  return (
    <main className="min-h-screen bg-white pb-32">
      {/* HERO */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center text-center px-6 pt-32 bg-[#1B2A6B] overflow-hidden">
        <Image 
          src="/images/blog/hero.png"
          alt="Amal Foundation Stories"
          fill
          className="object-cover object-center opacity-40 grayscale-[10%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B2A6B]/20 to-[#1B2A6B]/80" />
        
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 bg-[#D4A843] text-[#1B2A6B] text-[10px] uppercase font-bold tracking-widest rounded-full mb-6">
            Foundation News
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
            Stories of <span className="text-[#D4A843] italic">Impact</span>
          </h1>
          <p className="text-white/80 font-body text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Witness the transformations in communities across Somalia through the eyes of our team and volunteers.
          </p>
        </motion.div>
      </section>

      {/* BLOG FEED */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            {posts.map((post, idx) => (
              <motion.article
                key={post.id}
                className="group flex flex-col h-full bg-[#F5F0E8] rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="relative h-[250px] overflow-hidden">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/90 backdrop-blur-sm text-[#1B2A6B] text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      {post.tag}
                    </span>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-6 text-[#64748B] text-xs font-bold uppercase tracking-widest mb-6">
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-[#D4A843]" /> {post.date}</span>
                    <span className="hidden sm:flex items-center gap-2"><User size={14} className="text-[#D4A843]" /> {post.author}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1B2A6B] leading-tight mb-6 group-hover:text-[#D4A843] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 font-body text-base leading-relaxed mb-10 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-[#1B2A6B] font-bold uppercase tracking-widest text-xs border-b-2 border-transparent hover:border-[#D4A843] pb-1 w-fit transition-all group/link"
                  >
                    Read Full Story <ArrowRight size={16} className="ml-2 transition-transform group-hover/link:translate-x-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#1B2A6B] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 grayscale">
           <Image src="/images/home/hero-collage.png" alt="Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-8">Stay Informed</h2>
          <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto">
            Receive monthly updates on our impact and new volunteer opportunities across Somalia.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#D4A843] transition-all"
            />
            <button className="bg-[#D4A843] text-[#1B2A6B] font-bold px-10 py-4 rounded-full hover:bg-white transition-all uppercase tracking-widest text-sm shadow-xl">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
