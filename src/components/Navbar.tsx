"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
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

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-navy-950/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        )}
      >
        <nav className="section-container section-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-neon-500 flex items-center justify-center font-mono font-bold text-navy-950 text-lg group-hover:shadow-[0_0_20px_rgba(0,220,130,0.4)] transition-shadow duration-300">
                N
                <div className="absolute inset-0 rounded-xl bg-neon-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">N</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                <span className="text-white">Nain</span>
                <span className="text-neon-400">code</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                      pathname === link.href || pathname.startsWith(link.href + "/")
                        ? "text-neon-400"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 p-2 bg-navy-900/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-2xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex flex-col gap-1 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <span className="text-sm font-medium text-white group-hover:text-neon-400 transition-colors">
                              {child.label}
                            </span>
                            <span className="text-xs text-white/40 line-clamp-1">
                              {child.description}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/konsultasi" className="btn-primary text-sm !py-2.5 !px-6">
                Konsultasi Gratis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-navy-950 border-l border-white/[0.06] overflow-y-auto">
              <div className="pt-24 pb-8 px-6 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors",
                        pathname === link.href
                          ? "text-neon-400 bg-neon-500/10"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      )}
                      onClick={() => !link.children && setIsMobileOpen(false)}
                    >
                      {link.label}
                      {link.children && (
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            activeDropdown === link.label && "rotate-180"
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(
                              activeDropdown === link.label ? null : link.label
                            );
                          }}
                        />
                      )}
                    </Link>
                    {link.children && activeDropdown === link.label && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="block px-4 py-2.5 text-sm text-white/50 hover:text-neon-400 rounded-lg hover:bg-white/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 mt-4 border-t border-white/[0.06]">
                  <Link
                    href="/konsultasi"
                    onClick={() => setIsMobileOpen(false)}
                    className="btn-primary w-full justify-center text-sm"
                  >
                    Konsultasi Gratis
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
