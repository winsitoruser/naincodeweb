"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-navy-950/90 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        )}
      >
        <nav className="section-container section-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-neon-500 flex items-center justify-center font-mono font-bold text-navy-950 text-sm">
                N
              </div>
              <span className="font-semibold text-lg tracking-tight">
                <span className="text-white">Nain</span>
                <span className="text-neon-400">code</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200",
                      isActive(link.href)
                        ? "text-neon-400"
                        : "text-white/50 hover:text-white/80"
                    )}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform duration-200",
                          activeDropdown === link.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-72 p-1.5 bg-navy-900/95 backdrop-blur-xl border border-white/[0.06] rounded-xl shadow-2xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group"
                          >
                            <span className="text-[13px] font-medium text-white/80 group-hover:text-neon-400 transition-colors">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="text-[11px] text-white/30 leading-snug">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/konsultasi"
                className="inline-flex items-center gap-2 px-5 py-2 bg-neon-500 text-navy-950 text-[13px] font-semibold rounded-lg hover:bg-neon-400 transition-all duration-200"
              >
                Konsultasi
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 -mr-2 text-white/60 hover:text-white transition-colors"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-xs bg-navy-950 border-l border-white/[0.04] overflow-y-auto"
            >
              <div className="pt-20 pb-8 px-5 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className={cn(
                          "flex-1 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                          isActive(link.href) ? "text-neon-400" : "text-white/60 hover:text-white"
                        )}
                        onClick={() => !link.children && setIsMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                      {link.children && (
                        <button
                          className="p-2 text-white/30"
                          onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        >
                          <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === link.label && "rotate-180")} />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {link.children && activeDropdown === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-3 pl-3 border-l border-white/[0.04] space-y-0.5 pb-2">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="block px-3 py-2 text-[13px] text-white/40 hover:text-neon-400 rounded-lg transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="pt-3 mt-3 border-t border-white/[0.04]">
                  <Link
                    href="/konsultasi"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-neon-500 text-navy-950 text-sm font-semibold rounded-lg"
                  >
                    Konsultasi <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
