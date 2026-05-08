import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { programs } from "@/data/programs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};
  return buildMetadata({
    title: program.title,
    description: program.fullDescription.slice(0, 160),
    path: `/initiative/${program.slug}`,
    keywords: ["Somalia initiative", program.title, "Amal Foundation program"],
  });
}

export function generateStaticParams() {
  return programs.map((p) => ({
    slug: p.slug,
  }));
}

export default async function InitiativeDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const program = programs.find((p) => p.slug === resolvedParams.slug);
  
  if (!program) {
    notFound();
  }

  return (
    <main className="bg-[#FAFAF5] min-h-screen pb-20">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Initiatives", url: `${SITE_URL}/initiative` },
          { name: program.title, url: `${SITE_URL}/initiative/${program.slug}` },
        ]}
      />
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src={program.image}
          alt={program.imageAlt ?? program.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1B2A6B]/80 mix-blend-multiply relative z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A6B]/90 via-transparent to-transparent z-10" />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <span className="text-[#D4A843] font-mono tracking-widest uppercase text-sm mb-4 block">Initiative detail</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#FAFAF5]">
            {program.title}
          </h1>
          {program.subtitle ? (
            <p className="mx-auto mt-5 max-w-3xl text-base font-light leading-relaxed text-[#FAFAF5]/90 md:text-lg">
              {program.subtitle}
            </p>
          ) : null}
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl mt-16">
        <Link 
          href="/initiative" 
          className="inline-flex items-center text-[#64748B] hover:text-[#D4A843] mb-12 transition-colors font-medium uppercase tracking-wider text-sm"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to initiative
        </Link>

        <div className="prose prose-lg max-w-none text-[#64748B]">
          <p className="lead text-2xl text-[#1A1A2E] font-medium mb-8">
            {program.fullDescription}
          </p>

          <div className="bg-white p-8 rounded-sm my-12 border-l-4 border-l-[#D4A843] shadow-sm">
            <h3 className="font-display text-2xl text-[#1A1A2E] mt-0 mb-6 font-semibold">
              {program.targetsHeading ?? "Key focus areas"}
            </h3>
            <ul className="mb-0 space-y-3">
              {program.targets.map((target, idx) => (
                <li key={idx} className="flex items-start text-[#64748B]">
                  <span className="text-[#D4A843] mr-3 font-bold">•</span> {target}
                </li>
              ))}
            </ul>
          </div>

          {program.sections?.map((section, sidx) => (
            <div key={sidx} className="my-14">
              <h3 className="font-display text-2xl text-[#1A1A2E] mb-4 font-semibold">
                {section.heading}
              </h3>
              {section.paragraphs?.map((para, pidx) => (
                <p
                  key={pidx}
                  className="mb-4 text-lg leading-relaxed text-[#64748B] last:mb-0"
                >
                  {para}
                </p>
              ))}
              {section.listItems && section.listItems.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {section.listItems.map((item, idx) => (
                    <li key={idx} className="flex items-start text-[#64748B]">
                      <span className="mr-3 font-bold text-[#D4A843]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
