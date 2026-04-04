'use client';

import {
  Stories,
  StoriesContent,
  Story,
  StoryAuthor,
  StoryAuthorImage,
  StoryAuthorName,
  StoryImage,
  StoryOverlay,
  StoryTitle,
} from '@/components/ui/stories-carousel';
import { motion } from 'framer-motion';
import { CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const stories = [
  {
    id: 1,
    author: 'Amina Y.',
    avatar: '',
    fallback: 'AY',
    preview: '/images/stories/edu.png',
    title: 'School Rebuilding',
  },
  {
    id: 2,
    author: 'Dr. Farah M.',
    avatar: '',
    fallback: 'FM',
    preview: '/images/stories/health.png',
    title: 'Medical Camp',
  },
  {
    id: 3,
    author: 'Aisha K.',
    avatar: '',
    fallback: 'AK',
    preview: '/images/stories/women.png',
    title: 'Women Empowerment',
  },
  {
    id: 4,
    author: 'Omar S.',
    avatar: '',
    fallback: 'OS',
    preview: '/images/stories/food.png',
    title: 'Food Relief',
  },
  {
    id: 5,
    author: 'Ali D.',
    avatar: '',
    fallback: 'AD',
    preview: '/images/programs/entrepreneurship.png',
    title: 'Local Businesses',
  },
];

export function ImpactStories() {
  return (
    <section className="py-24 bg-[#F4EFEA] border-y border-[#D9D1C7]/40 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
            <div className="max-w-2xl text-left">
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-[2px] w-12 bg-[#E85D04]" />
                    <span className="text-[#E85D04] font-mono tracking-[0.3em] uppercase text-[10px] font-bold">
                        Ground Truths
                    </span>
                    <div className="hidden md:block h-[2px] w-12 bg-[#E85D04]" />
                </div>
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-[#050A1F] leading-tight">
                    Human Impact <br className="hidden md:block"/> Narrative.
                </h2>
                <p className="mt-8 text-[#64748B] text-lg md:text-xl font-light max-w-xl leading-relaxed">
                    Direct testimony from the communities we empower. These narratives provide the qualitative data behind our strategic initiatives.
                </p>
            </div>
        </motion.div>
      </div>

      <div className="w-full relative px-6 md:px-0 md:pl-10 max-w-[1700px] mx-auto">
        <Stories>
          <div className="flex justify-end gap-4 mb-8 md:absolute md:-top-24 md:right-10 md:mb-0 z-20">
            <CarouselPrevious className="static translate-y-0 h-14 w-14 rounded-2xl border-[#D9D1C7]/60 bg-white text-[#050A1F] hover:bg-[#E85D04] hover:text-white transition-all shadow-sm" />
            <CarouselNext className="static translate-y-0 h-14 w-14 rounded-2xl border-[#D9D1C7]/60 bg-white text-[#050A1F] hover:bg-[#E85D04] hover:text-white transition-all shadow-sm" />
          </div>
          <StoriesContent className="-ml-2 md:-ml-4 py-4 px-4 h-[440px] md:h-[500px]">
            {stories.map((story) => (
              <Story className="aspect-[9/16] w-[180px] md:w-[210px] rounded-[28px] border border-[#D9D1C7]/40 overflow-hidden shadow-2xl shadow-[#050A1F]/5 group transition-all duration-700 hover:scale-[1.02]" key={story.id}>
                <StoryImage alt={story.title} src={story.preview} className="transition-all duration-700 group-hover:scale-110" />
                <StoryOverlay side="top" className="bg-gradient-to-b from-[#050A1F]/60 to-transparent" />
                <StoryOverlay side="bottom" className="bg-gradient-to-t from-[#050A1F]/80 to-transparent" />
                <StoryTitle className="truncate font-display font-bold text-base mt-2 ml-4 tracking-tight text-white/90">
                  {story.title}
                </StoryTitle>
                <StoryAuthor className="p-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-1.5 rounded-2xl flex items-center gap-3">
                    <StoryAuthorImage
                      fallback={story.fallback}
                      name={story.author}
                      src={story.avatar}
                      className="size-8 border-none bg-[#E85D04] text-white font-bold text-[10px]"
                    />
                    <StoryAuthorName className="text-xs font-bold tracking-widest text-white/90">
                      {story.author}
                    </StoryAuthorName>
                  </div>
                </StoryAuthor>
              </Story>
            ))}
          </StoriesContent>
        </Stories>
      </div>
    </section>
  );
}
