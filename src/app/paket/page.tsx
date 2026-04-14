"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  X,
  Star,
  Zap,
  Crown,
  MessageCircle,
} from "lucide-react";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import { siteConfig } from "@/lib/data";

const packages = [
  {
    name: "Starter",
    subtitle: "Untuk UMKM & Startup Awal",
    icon: Zap,
    price: "Mulai dari",
    priceValue: "Rp 30 Juta",
    priceNote: "per project",
    popular: false,
    description: "Paket ideal untuk memulai kehadiran digital dengan website profesional atau MVP.",
    features: [
      { text: "Landing page / Company profile", included: true },
      { text: "Responsive design (mobile-friendly)", included: true },
      { text: "Hingga 5 halaman", included: true },
      { text: "SEO dasar", included: true },
      { text: "Contact form & WhatsApp integration", included: true },
      { text: "1 bulan support gratis", included: true },
      { text: "CMS / Admin panel", included: false },
      { text: "Custom API integration", included: false },
      { text: "Multi-language", included: false },
    ],
    cta: "Mulai Project",
    timeline: "2-4 minggu",
  },
  {
    name: "Growth",
    subtitle: "Untuk Bisnis yang Berkembang",
    icon: Star,
    price: "Mulai dari",
    priceValue: "Rp 80 Juta",
    priceNote: "per project",
    popular: true,
    description: "Solusi digital lengkap dengan custom features untuk mendukung pertumbuhan bisnis Anda.",
    features: [
      { text: "Web application / E-commerce", included: true },
      { text: "Responsive design (mobile-friendly)", included: true },
      { text: "Unlimited halaman", included: true },
      { text: "SEO advanced + analytics", included: true },
      { text: "CMS / Admin panel", included: true },
      { text: "Custom API & third-party integration", included: true },
      { text: "User authentication system", included: true },
      { text: "3 bulan support gratis", included: true },
      { text: "Mobile app (iOS/Android)", included: false },
    ],
    cta: "Pilih Growth",
    timeline: "2-4 bulan",
  },
  {
    name: "Enterprise",
    subtitle: "Untuk Korporasi & Skala Besar",
    icon: Crown,
    price: "Custom",
    priceValue: "Hubungi Kami",
    priceNote: "sesuai kebutuhan",
    popular: false,
    description: "Solusi enterprise-grade dengan arsitektur scalable, keamanan tinggi, dan dedicated team.",
    features: [
      { text: "Enterprise web & mobile application", included: true },
      { text: "Microservices architecture", included: true },
      { text: "Unlimited halaman & features", included: true },
      { text: "SEO enterprise + performance monitoring", included: true },
      { text: "Advanced CMS & role management", included: true },
      { text: "Custom API, ERP & legacy integration", included: true },
      { text: "SSO & enterprise authentication", included: true },
      { text: "12 bulan support + SLA", included: true },
      { text: "Mobile app (iOS/Android)", included: true },
    ],
    cta: "Hubungi Enterprise Team",
    timeline: "3-12 bulan",
  },
];

const addOns = [
  { name: "Mobile App Development", price: "Mulai Rp 50 Juta", description: "iOS & Android native atau cross-platform" },
  { name: "UI/UX Design Sprint", price: "Mulai Rp 20 Juta", description: "Research, wireframe, prototype, user testing" },
  { name: "DevOps & Cloud Setup", price: "Mulai Rp 15 Juta", description: "AWS/GCP setup, CI/CD, monitoring" },
  { name: "Security Audit", price: "Mulai Rp 25 Juta", description: "Penetration testing, vulnerability assessment" },
  { name: "Monthly Maintenance", price: "Mulai Rp 5 Juta/bln", description: "Bug fixes, updates, monitoring, optimization" },
  { name: "Content Management", price: "Mulai Rp 8 Juta/bln", description: "Konten website, SEO content, blog management" },
];

export default function PaketPage() {
  return (
    <>
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <span className="text-neon-400 font-mono text-sm tracking-widest uppercase">
              Paket & Harga
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 gradient-text-white">
              Investasi untuk <span className="gradient-text">Pertumbuhan</span> Digital
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Pilih paket yang sesuai dengan kebutuhan dan skala bisnis Anda. 
              Semua paket termasuk konsultasi gratis dan dukungan penuh dari tim expert kami.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="section-container section-padding">
          <StaggerContainer className="grid md:grid-cols-3 gap-6 items-start" staggerDelay={0.12}>
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <StaggerItem key={pkg.name}>
                  <div
                    className={`relative glass-card p-8 h-full ${
                      pkg.popular
                        ? "border-neon-500/30 shadow-[0_0_40px_rgba(0,220,130,0.08)]"
                        : ""
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-500 text-navy-950 text-xs font-bold rounded-full">
                        PALING POPULER
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${pkg.popular ? "bg-neon-500/20" : "bg-white/5"}`}>
                        <Icon className={`w-5 h-5 ${pkg.popular ? "text-neon-400" : "text-white/40"}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                        <p className="text-xs text-white/30">{pkg.subtitle}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-xs text-white/40">{pkg.price}</span>
                      <div className="text-2xl font-bold gradient-text">{pkg.priceValue}</div>
                      <span className="text-xs text-white/30">{pkg.priceNote}</span>
                    </div>

                    <p className="text-sm text-white/40 leading-relaxed mb-6">{pkg.description}</p>

                    <div className="flex items-center gap-2 text-xs text-white/30 mb-6 pb-6 border-b border-white/[0.06]">
                      <span>⏱ Timeline: {pkg.timeline}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((f) => (
                        <li key={f.text} className="flex items-start gap-2.5">
                          {f.included ? (
                            <CheckCircle2 className="w-4 h-4 text-neon-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-white/15 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm ${f.included ? "text-white/60" : "text-white/20"}`}>
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/konsultasi"
                      className={`w-full justify-center ${pkg.popular ? "btn-primary" : "btn-secondary"}`}
                    >
                      {pkg.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-500/[0.02] to-transparent" />
        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text-white">
              Add-On Services
            </h2>
            <p className="text-white/50 mt-3">Tambahkan layanan sesuai kebutuhan spesifik Anda</p>
          </AnimateOnScroll>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
            {addOns.map((addon) => (
              <StaggerItem key={addon.name}>
                <div className="glass-card-hover p-6 h-full">
                  <h4 className="text-sm font-semibold text-white mb-1">{addon.name}</h4>
                  <p className="text-neon-400 text-sm font-mono mb-2">{addon.price}</p>
                  <p className="text-xs text-white/40">{addon.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container section-padding">
          <AnimateOnScroll>
            <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-500/5 to-transparent" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold gradient-text-white mb-4">
                  Butuh Paket Custom?
                </h2>
                <p className="text-white/50 max-w-xl mx-auto mb-8">
                  Setiap bisnis unik. Kami bisa menyesuaikan paket sesuai kebutuhan spesifik Anda. 
                  Ceritakan project Anda dan dapatkan proposal dalam 24 jam.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/konsultasi" className="btn-primary">
                    Konsultasi Gratis
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Halo Naincode, saya tertarik untuk mengetahui lebih detail mengenai paket layanan Naincode.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
