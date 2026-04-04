import { programs } from "@/data/programs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export function generateStaticParams() {
  return programs.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const program = programs.find((p) => p.slug === resolvedParams.slug);
  
  if (!program) {
    notFound();
  }

  return (
    <main className="bg-[#FAFAF5] min-h-screen pb-20">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image 
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1B2A6B]/80 mix-blend-multiply relative z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A6B]/90 via-transparent to-transparent z-10" />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <span className="text-[#D4A843] font-mono tracking-widest uppercase text-sm mb-4 block">Program Detail</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#FAFAF5]">
            {program.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl mt-16">
        <Link 
          href="/programs" 
          className="inline-flex items-center text-[#64748B] hover:text-[#D4A843] mb-12 transition-colors font-medium uppercase tracking-wider text-sm"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Programs
        </Link>

        <div className="prose prose-lg max-w-none text-[#64748B]">
          <p className="lead text-2xl text-[#1A1A2E] font-medium mb-8">
            {program.fullDescription}
          </p>

          <div className="bg-white p-8 rounded-sm my-12 border-l-4 border-l-[#D4A843] shadow-sm">
            <h3 className="font-display text-2xl text-[#1A1A2E] mt-0 mb-6 font-semibold">2026 Key Targets</h3>
            <ul className="mb-0 space-y-3">
              {program.targets.map((target, idx) => (
                <li key={idx} className="flex items-start text-[#64748B]">
                  <span className="text-[#D4A843] mr-3 font-bold">•</span> {target}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
