"use client";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowLeft, ChevronDown, Camera, Send, Globe, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

/**
 * Mobile (< md): layout box stays h-24 so the nav row + hamburger height is unchanged; the Image is
 * scaled so the wordmark reads larger at ~375–390px. md+ uses md:h-32 / lg heights with no scale.
 */
function NavbarLogo({ menuOpen = false }: { menuOpen?: boolean }) {
  return (
    <div
      className={cn(
        "relative shrink-0",
        menuOpen
          ? "h-32 w-[min(88vw,22rem)] sm:h-36 sm:w-[min(90vw,24rem)] md:h-40 md:w-[min(92vw,26rem)] lg:h-[198px] lg:w-[488px]"
          : "h-24 w-full max-w-[34rem] md:h-32 md:max-w-[32rem] lg:h-[198px] lg:w-[488px] lg:max-w-none",
      )}
    >
      {menuOpen ? (
        <Image
          src="/images/logo.png"
          alt="Amal Foundation"
          fill
          sizes="(max-width: 1023px) 100vw, 488px"
          className="object-contain object-left"
          priority
        />
      ) : (
        <div className="absolute inset-0 max-md:origin-[12%_50%] max-md:scale-[1.42] md:scale-100">
          <Image
            src="/images/logo.png"
            alt="Amal Foundation"
            fill
            sizes="(max-width: 768px) 100vw, 488px"
            className="pointer-events-none object-contain object-left select-none"
            priority
          />
        </div>
      )}
    </div>
  );
}

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

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "Who We Are", href: "/about" },
        { name: "Our Plan", href: "/strategy" },
      ],
    },
    { name: "Initiative", href: "/initiative" },
    { name: "Blog", href: "/blog" },
    {
      name: "Contact",
      href: "/contact",
      dropdown: [
        { name: "Reach us", href: "/contact" },
        { name: "Get Involved", href: "/get-involved" },
      ],
    },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-300 bg-[#F5F0E8] overflow-visible",
          isScrolled
            ? "shadow-lg border-b border-[#D4A843] max-lg:py-0 lg:py-2"
            : "border-b border-transparent max-lg:py-0 lg:py-2.5"
        )}
      >
        <div
          className="container mx-auto max-w-[100vw] max-lg:overflow-x-clip pl-2.5 pr-3 sm:px-6 sm:pr-6 max-lg:pt-[max(0px,env(safe-area-inset-top))] max-lg:pb-0.5"
        >
          <div className="flex min-h-0 items-center justify-between gap-1.5 overflow-visible lg:h-14 lg:min-h-0 lg:gap-2 lg:py-0">
            <Link
              href="/"
              className="relative z-[65] flex min-w-0 flex-1 items-center overflow-visible [-webkit-tap-highlight-color:transparent] lg:z-10 lg:block lg:min-w-0 lg:flex-none"
            >
              <NavbarLogo />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-10">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (!!link.dropdown &&
                      link.dropdown.some((s) => pathname === s.href));
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
                className="rounded-full bg-[#D4A843] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#1B2A6B] shadow-lg transition-all hover:bg-[#1B2A6B] hover:text-white"
              >
                Donate
              </Link>
            </div>

            {/* Mobile menu — compact control; ~40px target with padding for balance */}
            <div className="flex shrink-0 items-center justify-end pl-0.5 lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-md p-1.5 text-[#1B2A6B] hover:text-[#D4A843] transition-all cursor-pointer z-[70] active:scale-95",
                  isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
                aria-label="Toggle Menu"
              >
                <Menu size={26} className="shrink-0" strokeWidth={2.25} />
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
            className="fixed inset-0 z-[100] flex min-h-0 flex-col bg-[#F5F0E8]"
          >
            {/* Mobile Header — sticky; clear “return” action (bar hamburger is hidden under overlay) */}
            <div className="sticky top-0 z-10 flex shrink-0 items-center justify-between gap-3 border-b border-[#D4A843]/15 bg-[#F5F0E8] px-4 py-3 pt-[max(0.5rem,env(safe-area-inset-top))] sm:px-6">
              <Link
                href="/"
                className="relative z-10 flex min-w-0 flex-1 items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <NavbarLogo menuOpen />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex shrink-0 items-center gap-2 rounded-full border-2 border-[#1B2A6B] bg-[#F5F0E8] px-3 py-2 text-[#1B2A6B] shadow-sm transition-colors hover:border-[#D4A843] hover:text-[#D4A843] active:scale-[0.98]"
                aria-label="Return to the page"
              >
                <ArrowLeft
                  size={20}
                  strokeWidth={2.25}
                  className="shrink-0"
                  aria-hidden
                />
                <span className="max-w-[9rem] text-left text-[10px] font-bold uppercase leading-tight tracking-[0.18em] sm:max-w-none sm:text-xs sm:tracking-[0.2em]">
                  Back to site
                </span>
              </button>
            </div>

            {/* Links Section */}
            <div className="flex min-h-0 flex-1 flex-col space-y-1 overflow-y-auto overscroll-contain px-4 pt-3 pb-4 sm:px-8">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                const isSubActive = link.dropdown?.some((s) => pathname === s.href);
                return (
                  <Fragment key={link.name}>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block w-full py-1.5 font-display text-3xl font-black uppercase tracking-tighter transition-all duration-300 hover:translate-x-2 sm:py-2 sm:text-4xl md:text-5xl md:hover:translate-x-4",
                          isActive || isSubActive
                            ? "scale-[1.02] text-[#D4A843]"
                            : "text-[#1B2A6B] hover:text-[#D4A843]",
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                    {link.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.12 + idx * 0.05 }}
                        className="mb-2 ml-1 space-y-1 border-l-2 border-[#D4A843]/35 pl-4"
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "block py-1.5 font-body text-sm font-bold uppercase tracking-widest transition-colors",
                              pathname === sub.href
                                ? "text-[#D4A843]"
                                : "text-[#1B2A6B]/80 hover:text-[#D4A843]",
                            )}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </Fragment>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="pt-4"
              >
                <Link
                  href="/get-involved"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-[#D4A843] py-4 text-center text-sm font-bold uppercase tracking-widest text-[#1B2A6B] shadow-lg transition-all active:bg-[#1B2A6B] active:text-white"
                >
                  Donate
                </Link>
              </motion.div>
            </div>

            {/* Footer Section in Menu */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto border-t border-[#D4A843]/10 px-6 pb-10 pt-8 sm:px-10 sm:pb-16"
            >
              <div className="flex flex-col gap-6">
                <span className="text-[#D4A843] font-mono text-[10px] uppercase font-bold tracking-[0.3em]">
                  Follow Our Journey
                </span>
                <div className="flex items-center gap-8 text-[#1B2A6B]">
                  <Link href="#" className="hover:text-[#D4A843] transition-colors"><Camera size={20} /></Link>
                  <Link href="#" className="hover:text-[#D4A843] transition-colors"><Send size={20} /></Link>
                  <Link href="#" className="hover:text-[#D4A843] transition-colors"><Globe size={20} /></Link>
                  <Link href="#" className="hover:text-[#D4A843] transition-colors"><Mail size={20} /></Link>
                </div>
                <p className="text-[#1B2A6B] text-[10px] font-mono uppercase tracking-widest mt-4">
                  © 2026 Amal Foundation · Garowe, Somalia
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
