"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type ImageSet = {
    alt: string;
    step1img1: string;
    step1img2: string;
    step2img1: string;
    step2img2: string;
    step3img1: string;
    step3img2: string;
    step4img1: string;
    step4img2: string;
};

interface FeatureCarouselProps {
    image: ImageSet;
}

export function FeatureCarousel({ image }: FeatureCarouselProps) {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            id: 1,
            title: "Data Acquisition",
            desc: "Identifying ground-level data through field operations.",
            img1: image.step1img1,
            img2: image.step1img2,
        },
        {
            id: 2,
            title: "Resource Architecture",
            desc: "Mapping assets to high-impact humanitarian pillars.",
            img1: image.step2img1,
            img2: image.step2img2,
        },
        {
            id: 3,
            title: "Strategic Deployment",
            desc: "Precise execution of relief and development programs.",
            img1: image.step3img1,
            img2: image.step3img2,
        },
        {
            id: 4,
            title: "Impact Validation",
            desc: "Rigorous monitoring and ground-truth reporting.",
            img1: image.step4img1,
            img2: image.step4img2,
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [steps.length]);

    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative h-[400px] md:h-[600px] group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 1.05, rotate: 2 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                    >
                        {/* Primary Image */}
                        <div className="absolute inset-0 bg-white rounded-[40px] overflow-hidden shadow-2xl border border-[#D9D1C7]/30">
                            <Image
                                src={steps[activeStep].img1}
                                alt={steps[activeStep].title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[#050A1F]/20" />
                        </div>
                        
                        {/* Floating Image Overlay */}
                        <motion.div 
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 -bottom-8 w-48 md:w-72 h-48 md:h-72 bg-white rounded-[32px] overflow-hidden shadow-2xl border-4 border-white hidden md:block"
                        >
                            <Image
                                src={steps[activeStep].img2}
                                alt="Detail"
                                fill
                                sizes="(max-width: 768px) 0px, 288px"
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content Side */}
            <div className="space-y-4">
                {steps.map((step, idx) => (
                    <button
                        key={step.id}
                        onClick={() => setActiveStep(idx)}
                        className={cn(
                            "w-full text-left p-8 rounded-[24px] transition-all duration-500 border border-transparent",
                            activeStep === idx 
                                ? "bg-white shadow-xl border-[#D9D1C7]/40 scale-[1.02]" 
                                : "hover:bg-white/50 opacity-50"
                        )}
                    >
                        <div className="flex items-center gap-6 mb-4">
                            <span className={cn(
                                "text-xs font-mono font-bold w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                                activeStep === idx ? "bg-[#FFB700] text-white" : "bg-[#D9D1C7]/30 text-[#64748B]"
                            )}>
                                0{step.id}
                            </span>
                            <h3 className="font-display text-2xl font-bold tracking-tight">{step.title}</h3>
                        </div>
                        <AnimatePresence mode="wait">
                            {activeStep === idx && (
                                <motion.p 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="text-[#64748B] font-light leading-relaxed pl-16 overflow-hidden"
                                >
                                    {step.desc}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </button>
                ))}
            </div>
        </div>
    );
}
