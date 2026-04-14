"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Github,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { siteConfig, services, industryApproaches } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 border-t border-white/[0.06]">
      {/* CTA Banner */}
      <div className="section-container section-padding">
        <div className="relative -mt-24 mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neon-500/10 via-navy-800/50 to-navy-900/50 border border-neon-500/20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Siap Memulai Proyek Digital Anda?
              </h3>
              <p className="text-white/60 max-w-lg">
                Konsultasikan ide dan kebutuhan bisnis Anda dengan tim expert kami. Gratis, tanpa komitmen.
              </p>
            </div>
            <Link href="/konsultasi" className="btn-primary whitespace-nowrap text-base">
              Mulai Konsultasi
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-container section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-neon-500 flex items-center justify-center font-mono font-bold text-navy-950 text-lg">
                N
              </div>
              <span className="font-bold text-xl tracking-tight">
                <span className="text-white">Nain</span>
                <span className="text-neon-400">code</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              {siteConfig.description}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-white/50 hover:text-neon-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-sm text-white/50 hover:text-neon-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4" />
                {siteConfig.address}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Layanan
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/layanan/${service.slug}`}
                    className="text-sm text-white/40 hover:text-neon-400 transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industri */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Industri
            </h4>
            <ul className="space-y-2.5">
              {industryApproaches.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industri/${industry.slug}`}
                    className="text-sm text-white/40 hover:text-neon-400 transition-colors"
                  >
                    {industry.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/studi-kasus"
                  className="text-sm text-white/40 hover:text-neon-400 transition-colors"
                >
                  Studi Kasus
                </Link>
              </li>
              <li>
                <Link
                  href="/produk"
                  className="text-sm text-white/40 hover:text-neon-400 transition-colors"
                >
                  Produk
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Perusahaan
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/tentang"
                  className="text-sm text-white/40 hover:text-neon-400 transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/proses"
                  className="text-sm text-white/40 hover:text-neon-400 transition-colors"
                >
                  Proses Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/konsultasi"
                  className="text-sm text-white/40 hover:text-neon-400 transition-colors"
                >
                  Konsultasi
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white/40 hover:text-neon-400 transition-colors"
                >
                  Blog & Insight
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-white/40 hover:text-neon-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-neon-400 hover:bg-neon-500/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-neon-400 hover:bg-neon-500/10 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-neon-400 hover:bg-neon-500/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-neon-400 hover:bg-neon-500/10 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="line-glow mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {currentYear} {siteConfig.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
