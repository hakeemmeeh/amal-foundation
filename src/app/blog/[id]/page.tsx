"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Share2, User } from "lucide-react";
import { posts } from "@/data/posts";

export default function BlogStoryPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id) || posts[0];

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
