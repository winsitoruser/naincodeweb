"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Zap,
  Shield,
  Code2,
  Eye,
  TrendingUp,
  Lock,
  Users,
  HeartHandshake,
  Building2,
  Store,
  Rocket,
  CheckCircle2,
  Quote,
  ChevronRight,
  BarChart3,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
  Star,
  Phone,
  Calendar,
  Play,
} from "lucide-react";
import AnimateOnScroll, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimateOnScroll";
import { TypeWriter } from "@/components/ParticleField";
import CityScape from "@/components/CityScape";
import ClientLogos from "@/components/ClientLogos";
import {
  services,
  products,
  caseStudies,
  industryApproaches,
  workflowSteps,
  stats,
  whyNaincode,
  testimonials,
  siteConfig,
} from "@/lib/data";

const iconMap: Record<string, any> = {
  Globe, Smartphone, Palette, Cloud, Zap, Shield, Code2, Eye,
  TrendingUp, Lock, Users, HeartHandshake, Building2, Store,
  Rocket, BarChart3, LayoutDashboard, ShieldCheck, Workflow,
};

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-950 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <CityScape />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-navy-950/20 to-navy-950/80 pointer-events-none" style={{ zIndex: 2 }} />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-neon-500/[0.06] rounded-full blur-[100px] pointer-events-none" style={{ zIndex: 2 }} />

        <div className="relative z-10 section-container section-padding text-center pt-36 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50 text-xs font-mono mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-400 animate-pulse" />
              PT. Naincode Inti Technology
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto"
          >
            <span className="gradient-text-white">Engineering</span>
            <br />
            <TypeWriter
              words={["Digital Excellence", "Web Applications", "Mobile Apps", "Cloud Solutions"]}
              typingSpeed={70}
              deletingSpeed={35}
              pauseTime={2500}
            />
            <br />
            <span className="gradient-text-white">untuk Bisnis Anda</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Partner teknologi terpercaya untuk solusi digital yang scalable, secure, dan berdampak nyata.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link href="/konsultasi" className="btn-primary">
              Mulai Konsultasi Gratis
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/studi-kasus" className="btn-secondary">
              Lihat Studi Kasus
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-white/30 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-14"
          >
            <p className="text-[10px] text-white/15 uppercase tracking-[0.2em] mb-3 font-mono">
              Dipercaya oleh perusahaan terkemuka
            </p>
            <ClientLogos />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-5 h-8 rounded-full border border-white/15 flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-neon-400/60 mt-1.5"
            />
          </div>
        </motion.div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-28 relative">
        <div className="section-container section-padding">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label">Layanan Kami</span>
            <h2 className="section-title">Solusi Digital End-to-End</h2>
            <p className="section-desc">
              Dari konsep hingga deployment — layanan teknologi komprehensif untuk transformasi digital bisnis Anda.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <StaggerItem key={service.slug}>
                  <Link href={`/layanan/${service.slug}`} className="block h-full">
                    <div className="glass-card-hover p-7 h-full group">
                      <div className="w-11 h-11 rounded-xl bg-neon-500/10 flex items-center justify-center mb-5 group-hover:bg-neon-500/15 transition-colors">
                        {Icon && <Icon className="w-5 h-5 text-neon-400" />}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-400 transition-colors">
                        {service.shortTitle}
                      </h3>
                      <p className="text-white/35 text-sm leading-relaxed mb-4 line-clamp-2">
                        {service.tagline}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.techStack.slice(0, 3).map((tech) => (
                          <span key={tech} className="tag">{tech}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-neon-400/70 text-xs font-medium group-hover:text-neon-400 transition-colors">
                        Selengkapnya
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="section-container section-padding"><div className="line-glow" /></div>

      {/* ─── WHY NAINCODE ─── */}
      <section className="py-28 relative">
        <div className="section-container section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll variant="slideRight">
              <span className="section-label">Mengapa Naincode</span>
              <h2 className="section-title !text-left">
                Bukan Sekadar Vendor,<br />
                <span className="gradient-text">Technology Partner</span>
              </h2>
              <p className="text-white/40 leading-relaxed mb-8">
                Kami membangun hubungan jangka panjang dan menjadi bagian dari perjalanan bisnis Anda. 
                Setiap baris kode ditulis dengan standar tertinggi.
              </p>
              <Link href="/tentang" className="btn-secondary">
                Kenali Kami Lebih Dekat
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.06}>
              {whyNaincode.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <StaggerItem key={item.title}>
                    <div className="glass-card p-5 hover:border-neon-500/15 transition-all duration-300">
                      <div className="w-9 h-9 rounded-lg bg-neon-500/10 flex items-center justify-center mb-3">
                        {Icon && <Icon className="w-4 h-4 text-neon-400" />}
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-white/35 leading-relaxed">{item.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ─── WORKFLOW ─── */}
      <section className="py-28 relative">
        <div className="section-container section-padding">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label">Proses Kami</span>
            <h2 className="section-title">Dari Ide ke Realita</h2>
            <p className="section-desc">
              Metodologi terstruktur — on-time, on-budget, melebihi ekspektasi.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.08}>
            {workflowSteps.slice(0, 4).map((step) => (
              <StaggerItem key={step.number}>
                <div className="glass-card p-6 h-full hover:border-neon-500/15 transition-all duration-300">
                  <span className="text-2xl font-bold gradient-text font-mono block mb-3">{step.number}</span>
                  <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-white/35 leading-relaxed mb-3">{step.description}</p>
                  <span className="tag-neon">{step.duration}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll className="text-center mt-10">
            <Link href="/proses" className="btn-secondary">
              Lihat Proses Lengkap <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      <section className="py-28 relative">
        <div className="section-container section-padding">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label">Studi Kasus</span>
            <h2 className="section-title">Hasil Nyata, Dampak Terukur</h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5" staggerDelay={0.12}>
            {caseStudies.slice(0, 2).map((cs) => (
              <StaggerItem key={cs.slug}>
                <Link href={`/studi-kasus#${cs.slug}`} className="block h-full">
                  <div className="glass-card-hover p-7 h-full group">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="tag-neon">{cs.industry}</span>
                      <span className="tag">{cs.duration}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-400 transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-white/35 text-sm leading-relaxed mb-5">{cs.challenge}</p>
                    <div className="grid grid-cols-4 gap-3 mb-5">
                      {cs.results.map((r) => (
                        <div key={r.metric} className="text-center">
                          <div className="text-lg font-bold gradient-text">{r.value}</div>
                          <div className="text-[10px] text-white/25 mt-0.5">{r.metric}</div>
                        </div>
                      ))}
                    </div>
                    {cs.testimonial && (
                      <div className="p-3 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                        <p className="text-xs text-white/40 italic">&ldquo;{cs.testimonial.text}&rdquo;</p>
                        <p className="text-[10px] text-white/25 mt-1">— {cs.testimonial.name}, {cs.testimonial.role}</p>
                      </div>
                    )}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll className="text-center mt-10">
            <Link href="/studi-kasus" className="btn-secondary">
              Semua Studi Kasus <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── INDUSTRY ─── */}
      <section className="py-28 relative">
        <div className="section-container section-padding">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label">Pendekatan Industri</span>
            <h2 className="section-title">Solusi untuk Setiap Skala Bisnis</h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.1}>
            {industryApproaches.map((ind) => {
              const Icon = iconMap[ind.icon];
              return (
                <StaggerItem key={ind.slug}>
                  <Link href={`/industri/${ind.slug}`} className="block h-full">
                    <div className="glass-card-hover p-7 h-full group text-center">
                      <div className="w-14 h-14 rounded-2xl bg-neon-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-neon-500/15 transition-all">
                        {Icon && <Icon className="w-7 h-7 text-neon-400" />}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-400 transition-colors">{ind.title}</h3>
                      <p className="text-neon-400/50 text-xs font-medium mb-3">{ind.subtitle}</p>
                      <p className="text-white/35 text-sm leading-relaxed mb-5">{ind.description}</p>
                      <span className="text-neon-400/60 text-xs font-medium inline-flex items-center gap-1 group-hover:text-neon-400">
                        {ind.cta} <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-28 relative">
        <div className="section-container section-padding">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label">Testimoni</span>
            <h2 className="section-title">Dipercaya Para Pemimpin Industri</h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.08}>
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="glass-card p-6 h-full">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-neon-400/80 text-neon-400/80" />
                    ))}
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="border-t border-white/[0.04] pt-4">
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-white/25 text-xs">{t.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 relative">
        <div className="section-container section-padding">
          <AnimateOnScroll>
            <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-500/[0.04] to-transparent pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 gradient-text-white">
                  Siap Memulai<br /><span className="gradient-text">Transformasi Digital?</span>
                </h2>
                <p className="text-white/40 max-w-lg mx-auto mb-8">
                  Konsultasi gratis dengan tim expert. Ceritakan tantangan Anda, kami rekomendasikan solusi terbaik.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                  <Link href="/konsultasi" className="btn-primary">
                    <Calendar className="w-4 h-4" />
                    Jadwalkan Konsultasi
                  </Link>
                  <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <Phone className="w-4 h-4" />
                    Chat WhatsApp
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/25">
                  {["Konsultasi Gratis", "Tanpa Komitmen", "Respons 24 Jam"].map((t) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neon-500/40" /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
