"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FeatureCarousel, type ImageSet } from "@/components/ui/animated-feature-carousel";

const images: ImageSet = {
    alt: "Amal Foundation in Action",
    step1img1: "/images/programs/education.png",
    step1img2: "/images/programs/humanitarian.png",

    step2img1: "/images/programs/entrepreneurship.png",
    step2img2: "/images/programs/financial.png",

    step3img1: "/images/programs/humanitarian.png",
    step3img2: "/images/programs/education.png",

    step4img1: "/images/programs/financial.png",
    step4img2: "/images/programs/entrepreneurship.png",
};

export function HowWeWork() {
    return (
        <section className="bg-[#F4EFEA] text-[#050A1F] py-32 px-6">
            <div className="container mx-auto">
                <ScrollReveal className="text-center mb-20">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[2px] w-12 bg-[#E85D04]" />
                        <span className="text-[#E85D04] font-mono tracking-[0.2em] uppercase text-xs font-bold">
                            Operational Infrastructure
                        </span>
                        <div className="h-[2px] w-12 bg-[#E85D04]" />
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Strategic Impact Cycle</h2>
                    <p className="text-[#64748B] max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        A structured, data-driven approach to philanthropy ensures that every dollar invested 
                        generates maximum sustainable impact for communities in need.
                    </p>
                </ScrollReveal>

                <FeatureCarousel image={images} />
            </div>
        </section>
    );
}
