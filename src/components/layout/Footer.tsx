import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#D4A843] text-[#1B2A6B] pt-24 pb-12 border-t border-[#1B2A6B]/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          {/* Left Column: Logo & Description */}
          <div className="pr-12">
            <Link href="/" className="block mb-8 relative h-24 w-80 max-w-full">
              <Image
                src="/images/logo.png"
                alt="Amal Foundation"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-[#1B2A6B] text-sm font-bold leading-relaxed max-w-sm">
              A private non-profit corporate foundation incorporated in Somalia. Established 23 April 2025.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold mb-6 uppercase tracking-widest text-[#1B2A6B]/80">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/" className="text-[#1B2A6B] hover:text-[#1B2A6B]/70 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[#1B2A6B] hover:text-[#1B2A6B]/70 transition-colors">About</Link></li>
              <li><Link href="/programs" className="text-[#1B2A6B] hover:text-[#1B2A6B]/70 transition-colors">Programs</Link></li>
              <li><Link href="/strategy" className="text-[#1B2A6B] hover:text-[#1B2A6B]/70 transition-colors">Our Plan</Link></li>
              <li><Link href="/contact" className="text-[#1B2A6B] hover:text-[#1B2A6B]/70 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Right Column: Contact Details */}
          <div>
            <h4 className="font-display text-sm font-bold mb-6 uppercase tracking-widest text-[#1B2A6B]/80">
              Contact
            </h4>
            <ul className="space-y-6 text-sm font-bold">
              <li className="flex items-start">
                <MapPin size={18} className="text-[#1B2A6B] mr-4 shrink-0 mt-0.5" />
                <span className="text-[#1B2A6B] leading-relaxed">
                  Garowe Main Road, Garowe, Puntland, Somalia
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-[#1B2A6B] mr-4 shrink-0 mt-0.5" />
                <span className="text-[#1B2A6B] leading-relaxed">
                  info@amalfoundation.org
                </span>
              </li>
              <li className="pt-4 border-t border-[#1B2A6B]/10">
                <span className="text-[#1B2A6B] block text-xs uppercase tracking-widest font-bold mb-2">
                  Parent Company
                </span>
                <span className="text-[#1B2A6B] leading-relaxed block">
                  Amal Group International Ltd<br />
                  Garowe, Somalia
                </span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1B2A6B]/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs font-mono tracking-widest text-[#1B2A6B]/90 font-bold">
          <p>© 2025 Amal Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

