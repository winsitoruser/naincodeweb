"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Youtube, ArrowRight } from "lucide-react";
import { siteConfig, services, industryApproaches } from "@/lib/data";

const footerLinks = {
  layanan: services.slice(0, 5).map((s) => ({ label: s.shortTitle, href: `/layanan/${s.slug}` })),
  solusi: [
    ...industryApproaches.map((i) => ({ label: i.title, href: `/industri/${i.slug}` })),
    { label: "Studi Kasus", href: "/studi-kasus" },
    { label: "Produk", href: "/produk" },
    { label: "Paket & Harga", href: "/paket" },
  ],
  perusahaan: [
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Proses Kami", href: "/proses" },
    { label: "Blog & Insight", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Konsultasi", href: "/konsultasi" },
  ],
};

const socials = [
  { icon: Linkedin, href: siteConfig.socials.linkedin },
  { icon: Instagram, href: siteConfig.socials.instagram },
  { icon: Github, href: siteConfig.socials.github },
  { icon: Youtube, href: siteConfig.socials.youtube },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.03]">
      <div className="section-container section-padding pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-neon-500 flex items-center justify-center font-mono font-bold text-navy-950 text-xs">
                N
              </div>
              <span className="font-semibold text-base tracking-tight">
                <span className="text-white">Nain</span><span className="text-neon-400">code</span>
              </span>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs mb-5">
              Partner teknologi untuk membangun solusi digital yang scalable dan berdampak.
            </p>
            <div className="space-y-2">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-xs text-white/30 hover:text-white/60 transition-colors">
                <Mail className="w-3.5 h-3.5" /> {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2.5 text-xs text-white/30 hover:text-white/60 transition-colors">
                <Phone className="w-3.5 h-3.5" /> {siteConfig.phone}
              </a>
              <span className="flex items-center gap-2.5 text-xs text-white/30">
                <MapPin className="w-3.5 h-3.5" /> {siteConfig.address}
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[13px] text-white/25 hover:text-white/60 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.03] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20">
            &copy; {year} {siteConfig.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-md bg-white/[0.03] flex items-center justify-center text-white/20 hover:text-white/50 hover:bg-white/[0.06] transition-all">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
