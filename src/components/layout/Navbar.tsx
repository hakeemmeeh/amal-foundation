"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F5F0E8]",
          isScrolled
            ? "shadow-lg border-b border-[#D4A843] py-4"
            : "py-6 border-b border-transparent"
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative block" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="relative h-[80px] w-[300px] md:h-[120px] md:w-[400px]">
                <Image
                  src="/images/logo.png"
                  alt="Amal Group Foundation"
                  fill
                  className="object-contain object-left scale-125 md:scale-150 origin-left ml-4"
                  priority
                />
              </div>
            </Link>

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

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#1B2A6B] hover:text-[#D4A843] transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#1B2A6B] flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 items-center text-center w-full px-6">
              {[...navLinks, { name: "Get Involved", href: "/get-involved" }].map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-3xl font-display font-bold uppercase tracking-widest transition-colors block w-full py-2",
                        isActive ? "text-[#D4A843]" : "text-white hover:text-[#D4A843]"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
