"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Camera, Send, Globe, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "About", 
      href: "/about",
      dropdown: [
        { name: "Who We Are", href: "/about" },
        { name: "Our Plan", href: "/strategy" }
      ]
    },
    { name: "Programs", href: "/programs" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-300 bg-[#F5F0E8] overflow-visible",
          isScrolled
            ? "shadow-lg border-b border-[#D4A843] py-4"
            : "py-6 border-b border-transparent"
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center h-10 w-64 relative">
              <Link 
                href="/" 
                className="absolute -top-16 left-0 flex items-center" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image
                  src="/images/logo.png"
                  alt="Amal Foundation"
                  width={400}
                  height={180}
                  className="object-contain scale-150 origin-center"
                  style={{ height: '180px', width: 'auto', maxWidth: 'none' }}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-10">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const isDropdown = !!link.dropdown;
                  
                  return (
                    <div 
                      key={link.name} 
                      className="relative py-2 group"
                      onMouseEnter={() => isDropdown && setActiveDropdown(link.name)}
                      onMouseLeave={() => isDropdown && setActiveDropdown(null)}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5",
                          isActive ? "text-[#D4A843]" : "text-[#1B2A6B] hover:text-[#D4A843]"
                        )}
                      >
                        {link.name}
                        {isDropdown && <ChevronDown size={14} className={cn("transition-transform", activeDropdown === link.name && "rotate-180")} />}
                      </Link>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isDropdown && activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-xl border border-[#D4A843]/10 overflow-hidden py-2"
                          >
                            {link.dropdown?.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="block px-6 py-3 text-sm font-bold text-[#1B2A6B] hover:bg-[#F5F0E8] hover:text-[#D4A843] transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/get-involved"
                className="px-6 py-3 bg-[#D4A843] text-[#1B2A6B] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#1B2A6B] hover:text-white transition-all shadow-lg"
              >
                Get Involved
              </Link>
            </div>

            {/* Mobile Menu Button - Transparent toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "p-2 text-[#1B2A6B] hover:text-[#D4A843] transition-all cursor-pointer z-[70]",
                  isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
                aria-label="Toggle Menu"
              >
                <Menu size={32} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Full Screen Overlay - Premium Editorial Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[100] bg-[#1B2A6B] backdrop-blur-xl flex flex-col pt-12"
          >
            {/* Mobile Header Inside Menu */}
            <div className="flex items-center justify-between px-8 py-6 mb-12">
               <div className="relative h-[120px] w-[280px]">
                <Image
                  src="/images/logo.png"
                  alt="Amal Foundation"
                  fill
                  className="object-contain scale-[2.5] origin-left ml-8"
                  priority
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 text-white hover:text-[#D4A843] transition-colors bg-white/5 rounded-full"
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Links Section */}
            <div className="flex flex-col flex-grow px-10 space-y-4">
              {[...navLinks, { name: "Get Involved", href: "/get-involved" }].map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-4xl md:text-5xl font-display font-black uppercase tracking-tighter transition-all block w-full py-2 hover:translate-x-4 duration-300",
                        isActive ? "text-[#D4A843] scale-105" : "text-white/40 hover:text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer Section in Menu */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto px-10 pb-16 pt-12 border-t border-white/10"
            >
              <div className="flex flex-col gap-6">
                <span className="text-[#D4A843] font-mono text-[10px] uppercase font-bold tracking-[0.3em]">
                  Follow Our Journey
                </span>
                <div className="flex items-center gap-8 text-white/60">
                  <Link href="#" className="hover:text-white transition-colors"><Camera size={20} /></Link>
                  <Link href="#" className="hover:text-white transition-colors"><Send size={20} /></Link>
                  <Link href="#" className="hover:text-white transition-colors"><Globe size={20} /></Link>
                  <Link href="#" className="hover:text-white transition-colors"><Mail size={20} /></Link>
                </div>
                <p className="text-white/30 text-[10px] font-mono uppercase tracking-widest mt-4">
                  © 2025 Amal Foundation · Garowe, Somalia
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
