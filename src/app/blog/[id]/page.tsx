"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, User, Tag, Share2 } from "lucide-react";

export default function BlogStoryPage() {
  const { id } = useParams();
  
  // In a real app, this would come from a CMS or API
  const posts = [
    {
      id: "1",
      title: "Community Upliftment in Garowe: A New Chapter",
      content: `Our recent mission to Garowe has successfully launched the first phase of our community development project. Focusing on local empowerment and clean water access, the Amal Foundation is working directly with local leaders to ensure sustainable progress.

      This initiative is part of our broader 2025 roadmap to reach every region of Somalia with targeted humanitarian aid. Our team on the ground has already identified key infrastructure needs that will be addressed in the coming months.`,
      date: "August 15, 2025",
      author: "Foundation Field Team",
      tag: "Development",
      image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "Empowering Somali Students Through Digital Literacy",
      content: `Technical education is the backbone of future growth in Somalia. The Amal Foundation is proud to announce the opening of our newest computer lab in Mogadishu, providing critical digital skills to over 200 students.

      By equipping the youth with technology and modern pedagogical tools, we are not just educating individuals; we are building the foundation of a digital economy. Our scholarships and vocational training programs continue to expand, ensuring that no student is left behind due to financial barriers.`,
      date: "July 22, 2025",
      author: "Amal Foundation Team",
      tag: "Education",
      image: "/images/about/school.png"
    },
    {
      id: "3",
      title: "Healthcare on Wheels: The Impact of Our Mobile Clinics",
      content: `In remote areas of Somalia, healthcare is often a luxury. Our mobile ambulance units and roaming medical clinics are changing this reality. This month alone, we have provided critical medical aid to over 1,500 mothers and children in rural provinces.

      The Amal Foundation's healthcare initiative focus on preventative care, maternal health, and emergency response. We are working closely with local health authorities to integrate our mobile units into the national health network for maximum reach and effectiveness.`,
      date: "July 10, 2025",
      author: "Medical Outreach Team",
      tag: "Healthcare",
      image: "/images/about/health.png"
    }
  ];

  const post = posts.find(p => p.id === id) || posts[0];

  return (
    <main className="min-h-screen bg-white">
      {/* Post Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-20 justify-center overflow-hidden bg-[#1B2A6B]">
        <Image 
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A6B] to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
           <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#D4A843] font-bold uppercase tracking-widest text-[10px] mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Stories
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            {post.title}
          </motion.h1>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center justify-between border-b border-[#D4A843]/20 pb-8 mb-12">
            <div className="flex items-center gap-6 text-[#64748B] text-sm font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-[#D4A843]" /> {post.date}</span>
              <span className="flex items-center gap-2"><User size={16} className="text-[#D4A843]" /> {post.author}</span>
            </div>
            <button className="text-[#1B2A6B] hover:text-[#D4A843] transition-colors">
              <Share2 size={20} />
            </button>
          </div>

          <div className="prose prose-lg max-w-none text-slate-600 font-body leading-relaxed space-y-8">
            {post.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-[#D4A843]/20 text-center">
            <h3 className="font-display text-2xl font-bold text-[#1B2A6B] mb-8">Want to support this initiative?</h3>
            <Link 
              href="/get-involved"
              className="inline-flex items-center gap-4 px-10 py-5 bg-[#D4A843] text-[#1B2A6B] font-bold rounded-full hover:bg-[#1B2A6B] hover:text-white transition-all shadow-xl uppercase tracking-widest text-sm"
            >
              Get Involved Today <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
