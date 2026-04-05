"use client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

const activeCauses = [
  {
    id: 1,
    title: "Build a Primary School in Garowe",
    description: "Your donation provides local children with sustainable classrooms and modern educational resources.",
    image: "/images/programs/education.png",
    goal: 55000,
    raised: 12000,
  },
  {
    id: 2,
    title: "Medical Supplies for Rural Clinics",
    description: "Help us deliver essential medicine, vaccines, and equipment to underserved provinces.",
    image: "/images/programs/humanitarian.png",
    goal: 20000,
    raised: 18500,
  },
  {
    id: 3,
    title: "Micro-loans for Women Entrepreneurs",
    description: "Empower 50 small business owners with direct micro-financing to boost local community economies.",
    image: "/images/programs/financial.png",
    goal: 10000,
    raised: 4500,
  },
];

export function ActiveCauses() {
  return (
    <section className="bg-[#FAFAF5] py-32 px-6 border-t border-[#D4A843]/10">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-[#D4A843] font-mono tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Our Active Campaigns</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2A6B]">Organization Causes</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {activeCauses.map((cause, idx) => {
            const percent = Math.round((cause.raised / cause.goal) * 100);
            return (
              <ScrollReveal key={cause.id} delay={idx * 0.1}>
                <div className="bg-white border-l-4 border-l-[#D4A843] border border-[#D4A843]/10 rounded-tr-[24px] rounded-br-[24px] overflow-hidden flex flex-col h-full shadow-lg shadow-[#1B2A6B]/5 hover:shadow-2xl hover:shadow-[#1B2A6B]/10 transition-all duration-500 hover:-translate-y-2 group">
                  <div
                    className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${cause.image}')` }}
                  />
                  <div className="p-8 md:p-10 flex flex-col flex-grow relative bg-white z-10 transition-transform">
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#1B2A6B] mb-4">
                      {cause.title}
                    </h3>
                    <p className="text-[#64748B] text-base leading-relaxed mb-8 flex-grow">
                      {cause.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-8">
                      <div className="flex justify-between text-xs font-mono mb-3">
                        <span className="text-[#D4A843] font-bold">Raised: ${cause.raised.toLocaleString()}</span>
                        <span className="text-[#1B2A6B] font-medium">Goal: ${cause.goal.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-2 bg-[#F5F0E8] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#D4A843]"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>

                    <Link
                      href="/get-involved"
                      className="block text-center py-4 bg-[#D4A843] text-white hover:bg-[#1B2A6B] transition-colors rounded-xl text-sm font-semibold uppercase tracking-wider shadow-lg shadow-[#D4A843]/20"
                    >
                      Donate to Cause
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
