import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-[#F4EFEA] min-h-screen pb-32 overflow-hidden">
      {/* 1. Cinematic Hero Header */}
      <section className="pt-48 pb-24 md:pb-32 px-6 border-b border-[#D9D1C7]/60">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-16 bg-[#E85D04]" />
              <span className="text-[#E85D04] font-mono tracking-[0.2em] uppercase text-sm font-semibold">
                Direct Communication
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#050A1F] leading-[1.05]">
              Reach Out. <br className="hidden md:block"/> Get Connected.
            </h1>
            <p className="mt-8 text-[#64748B] text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
              Whether you have questions about programs, donation transparency, or partnership opportunities, we&apos;re here to facilitate the conversation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-6xl mt-24">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
          {/* 2. Contact Details Column */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <h2 className="font-display text-4xl font-bold mb-10 text-[#050A1F]">Contact Centers</h2>
              <ul className="space-y-12">
                {[
                  { title: "Physical Location", info: "Garowe Main Road, Garowe, Puntland, Somalia", icon: MapPin },
                  { title: "Strategic Email", info: "info@amalfoundation.org", icon: Mail },
                  { title: "Direct Helpline", info: "+252 (0) 90 000 0000", icon: Phone },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-start group">
                      <div className="bg-white shadow-lg shadow-[#050A1F]/5 border border-[#D9D1C7]/40 p-4 rounded-full mr-6 transition-transform duration-500 group-hover:scale-110">
                        <Icon className="text-[#E85D04]" size={28} />
                      </div>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-widest text-[#64748B] mb-2 font-bold">{item.title}</h4>
                        <p className="text-xl md:text-2xl font-display font-semibold text-[#050A1F] leading-tight">
                          {item.info}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </ScrollReveal>
          </div>
          
          {/* 3. Advanced Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="bg-white p-10 md:p-12 rounded-[32px] shadow-2xl shadow-[#050A1F]/5 border border-[#D9D1C7]/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E85D04]/5 rounded-bl-[100px] -mr-16 -mt-16 transition-transform group-hover:scale-125 duration-700" />
                
                <h2 className="font-display text-3xl font-bold mb-8 text-[#050A1F] relative z-10">Send a Message</h2>
                <form className="space-y-6 relative z-10 text-left">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#64748B] mb-3 font-bold">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-[#F4EFEA]/30 border border-[#D9D1C7]/60 rounded-xl px-5 py-4 text-[#050A1F] font-medium focus:outline-none focus:border-[#E85D04] transition-all" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#64748B] mb-3 font-bold">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-[#F4EFEA]/30 border border-[#D9D1C7]/60 rounded-xl px-5 py-4 text-[#050A1F] font-medium focus:outline-none focus:border-[#E85D04] transition-all" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#64748B] mb-3 font-bold">Message Subject</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#F4EFEA]/30 border border-[#D9D1C7]/60 rounded-xl px-5 py-4 text-[#050A1F] font-medium focus:outline-none focus:border-[#E85D04] transition-all" 
                      placeholder="Inquiry about..." 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#64748B] mb-3 font-bold">Enquiry Message</label>
                    <textarea 
                      rows={5} 
                      className="w-full bg-[#F4EFEA]/30 border border-[#D9D1C7]/60 rounded-xl px-5 py-4 text-[#050A1F] font-medium focus:outline-none focus:border-[#E85D04] transition-all" 
                      placeholder="How can we help facilitate your philanthropic goals?"
                    ></textarea>
                  </div>
                  <button 
                    type="button" 
                    className="w-full bg-[#050A1F] text-white flex items-center justify-center gap-3 font-bold py-5 rounded-xl hover:bg-[#E85D04] transition-all duration-300 group mt-4 transform hover:-translate-y-1 shadow-lg shadow-[#050A1F]/10"
                  >
                    Submit Enquiry <ArrowRight className="transition-transform group-hover:translate-x-2" size={20} />
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
