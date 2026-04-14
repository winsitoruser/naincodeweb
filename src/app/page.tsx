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
} from "lucide-react";
import AnimateOnScroll, {
  StaggerContainer,
  StaggerItem,
  ParallaxSection,
} from "@/components/AnimateOnScroll";
import ParticleField, { TypeWriter } from "@/components/ParticleField";
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
  BarChart3,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
};

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-b from-neon-500/[0.03] via-transparent to-navy-950" />
        <ParticleField count={60} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-400/5 rounded-full blur-[100px] animate-pulse-slow delay-1000" />

        {/* Floating code elements */}
        <div className="absolute top-20 left-10 text-neon-500/10 font-mono text-xs hidden lg:block animate-float">
          {"<Naincode />"}
        </div>
        <div className="absolute top-40 right-20 text-neon-500/10 font-mono text-xs hidden lg:block animate-float delay-1000">
          {"const future = await build();"}
        </div>
        <div className="absolute bottom-40 left-20 text-neon-500/10 font-mono text-xs hidden lg:block animate-float delay-500">
          {"// Engineering Excellence"}
        </div>

        <div className="relative z-10 section-container section-padding text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-500/20 bg-neon-500/5 text-neon-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-neon-400 animate-pulse" />
              PT. Naincode Inti Technology
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 max-w-5xl mx-auto"
          >
            <span className="gradient-text-white">Engineering</span>
            <br />
            <TypeWriter
              words={[
                "Digital Excellence",
                "Web Applications",
                "Mobile Apps",
                "Cloud Solutions",
                "Startup MVPs",
              ]}
              typingSpeed={70}
              deletingSpeed={35}
              pauseTime={2500}
            />
            <br />
            <span className="gradient-text-white">untuk Bisnis Anda</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Partner teknologi terpercaya untuk membangun solusi digital yang scalable, 
            secure, dan berdampak nyata pada pertumbuhan bisnis Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/konsultasi" className="btn-primary text-base">
              Mulai Konsultasi Gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/studi-kasus" className="btn-secondary text-base">
              Lihat Studi Kasus
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Client Logos Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16"
          >
            <p className="text-xs text-white/20 uppercase tracking-widest mb-4 font-mono">
              Dipercaya oleh perusahaan terkemuka
            </p>
            <ClientLogos />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-neon-400 mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll className="text-center mb-16">
            <span className="text-neon-400 font-mono text-sm tracking-widest uppercase">
              Layanan Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5 gradient-text-white">
              Solusi Digital End-to-End
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Dari konsep hingga deployment, kami menyediakan layanan teknologi komprehensif 
              untuk setiap tahap transformasi digital bisnis Anda.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <StaggerItem key={service.slug}>
                  <Link href={`/layanan/${service.slug}`} className="block h-full">
                    <div className="glass-card-hover p-8 h-full group">
                      <div className="w-14 h-14 rounded-2xl bg-neon-500/10 flex items-center justify-center mb-6 group-hover:bg-neon-500/20 transition-colors">
                        {Icon && <Icon className="w-7 h-7 text-neon-400" />}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-400 transition-colors">
                        {service.shortTitle}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {service.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono bg-white/5 text-white/40 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-neon-400 text-sm font-medium">
                        Pelajari Lebih Lanjut
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── PARALLAX DIVIDER ─── */}
      <div className="relative h-40 overflow-hidden">
        <ParallaxSection speed={0.2} className="absolute inset-0">
          <div className="h-80 bg-gradient-to-b from-navy-950 via-neon-500/5 to-navy-950" />
        </ParallaxSection>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <div className="line-glow" />
        </div>
      </div>

      {/* ─── WHY NAINCODE ─── */}
      <section className="py-24 relative">
        <div className="section-container section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll variant="slideRight">
              <span className="text-neon-400 font-mono text-sm tracking-widest uppercase">
                Mengapa Naincode
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5 gradient-text-white">
                Bukan Sekadar Vendor,
                <br />
                <span className="gradient-text">Technology Partner</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Kami tidak hanya membangun software — kami membangun hubungan jangka panjang 
                dan menjadi bagian dari perjalanan pertumbuhan bisnis Anda. Setiap baris kode 
                ditulis dengan standar tertinggi dan visi ke depan.
              </p>
              <Link href="/tentang" className="btn-secondary">
                Kenali Kami Lebih Dekat
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
              {whyNaincode.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <StaggerItem key={item.title}>
                    <div className="glass-card p-5 hover:border-neon-500/20 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-neon-500/10 flex items-center justify-center mb-3">
                        {Icon && <Icon className="w-5 h-5 text-neon-400" />}
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-1.5">{item.title}</h4>
                      <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ─── WORKFLOW PREVIEW ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-500/[0.02] to-transparent" />
        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll className="text-center mb-16">
            <span className="text-neon-400 font-mono text-sm tracking-widest uppercase">
              Proses Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5 gradient-text-white">
              Dari Ide ke Realita
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Metodologi development terstruktur yang memastikan setiap project 
              berjalan on-time, on-budget, dan melebihi ekspektasi.
            </p>
          </AnimateOnScroll>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-500/30 via-neon-500/10 to-transparent hidden md:block" />

            <div className="space-y-8">
              {workflowSteps.slice(0, 4).map((step, index) => (
                <AnimateOnScroll
                  key={step.number}
                  variant={index % 2 === 0 ? "slideRight" : "slideLeft"}
                  delay={index * 0.1}
                >
                  <div
                    className={`flex flex-col md:flex-row items-start gap-6 ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                      <div className="glass-card p-6 hover:border-neon-500/20 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl font-bold gradient-text font-mono">
                            {step.number}
                          </span>
                          <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                        </div>
                        <p className="text-white/40 text-sm mb-3">{step.description}</p>
                        <span className="inline-block px-3 py-1 text-xs bg-neon-500/10 text-neon-400 rounded-full font-mono">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-neon-500 border-4 border-navy-950 shadow-[0_0_10px_rgba(0,220,130,0.5)] relative top-8 flex-shrink-0" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll className="text-center mt-12">
              <Link href="/proses" className="btn-secondary">
                Lihat Proses Lengkap
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="py-24 relative">
        <div className="section-container section-padding">
          <AnimateOnScroll className="text-center mb-16">
            <span className="text-neon-400 font-mono text-sm tracking-widest uppercase">
              Produk Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5 gradient-text-white">
              Produk Digital Siap Pakai
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Selain custom development, kami juga mengembangkan produk SaaS 
              yang siap membantu efisiensi bisnis Anda.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {products.map((product) => {
              const Icon = iconMap[product.icon];
              return (
                <StaggerItem key={product.slug}>
                  <Link href={`/produk#${product.slug}`} className="block h-full">
                    <div className="glass-card-hover p-8 h-full group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-neon-500/10 flex items-center justify-center group-hover:bg-neon-500/20 transition-colors">
                          {Icon && <Icon className="w-7 h-7 text-neon-400" />}
                        </div>
                        <span className="px-3 py-1 text-xs bg-white/5 text-white/40 rounded-full font-mono">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-neon-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-neon-400/60 text-sm font-medium mb-3">{product.tagline}</p>
                      <p className="text-white/40 text-sm leading-relaxed mb-4">{product.description}</p>
                      <ul className="space-y-1.5">
                        {product.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs text-white/40">
                            <CheckCircle2 className="w-3.5 h-3.5 text-neon-500/50 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <AnimateOnScroll className="text-center mt-10">
            <Link href="/produk" className="btn-secondary">
              Lihat Semua Produk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/30 to-transparent" />
        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll className="text-center mb-16">
            <span className="text-neon-400 font-mono text-sm tracking-widest uppercase">
              Studi Kasus
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5 gradient-text-white">
              Hasil Nyata, Dampak Terukur
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Setiap project yang kami kerjakan menghasilkan dampak bisnis yang terukur. 
              Berikut beberapa kisah sukses klien kami.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerDelay={0.15}>
            {caseStudies.slice(0, 2).map((cs) => (
              <StaggerItem key={cs.slug}>
                <Link href={`/studi-kasus#${cs.slug}`} className="block h-full">
                  <div className="glass-card-hover p-8 h-full group">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs bg-neon-500/10 text-neon-400 rounded-full font-medium">
                        {cs.industry}
                      </span>
                      <span className="text-xs text-white/30">{cs.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-400 transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-6">{cs.challenge}</p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                      {cs.results.map((result) => (
                        <div key={result.metric} className="text-center">
                          <div className="text-xl font-bold gradient-text">{result.value}</div>
                          <div className="text-xs text-white/30 mt-0.5">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    {cs.testimonial && (
                      <div className="p-4 bg-white/[0.02] rounded-xl border border-white/[0.04]">
                        <Quote className="w-4 h-4 text-neon-500/30 mb-2" />
                        <p className="text-sm text-white/50 italic mb-2">
                          &ldquo;{cs.testimonial.text}&rdquo;
                        </p>
                        <p className="text-xs text-white/30">
                          — {cs.testimonial.name}, {cs.testimonial.role}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll className="text-center mt-10">
            <Link href="/studi-kasus" className="btn-secondary">
              Lihat Semua Studi Kasus
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── INDUSTRY APPROACH ─── */}
      <section className="py-24 relative">
        <div className="section-container section-padding">
          <AnimateOnScroll className="text-center mb-16">
            <span className="text-neon-400 font-mono text-sm tracking-widest uppercase">
              Pendekatan Industri
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5 gradient-text-white">
              Solusi untuk Setiap Skala Bisnis
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Apapun ukuran dan tahap bisnis Anda, kami memiliki pendekatan yang tepat.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {industryApproaches.map((industry) => {
              const Icon = iconMap[industry.icon];
              return (
                <StaggerItem key={industry.slug}>
                  <Link href={`/industri/${industry.slug}`} className="block h-full">
                    <div className="glass-card-hover p-8 h-full group text-center">
                      <div className="w-16 h-16 rounded-2xl bg-neon-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-neon-500/20 group-hover:shadow-[0_0_20px_rgba(0,220,130,0.15)] transition-all">
                        {Icon && <Icon className="w-8 h-8 text-neon-400" />}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-400 transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-neon-400/60 text-sm font-medium mb-4">{industry.subtitle}</p>
                      <p className="text-white/40 text-sm leading-relaxed mb-6">
                        {industry.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-neon-400 text-sm font-medium">
                        {industry.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-500/[0.02] to-transparent" />
        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll className="text-center mb-16">
            <span className="text-neon-400 font-mono text-sm tracking-widest uppercase">
              Testimoni
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5 gradient-text-white">
              Dipercaya oleh Para Pemimpin Industri
            </h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="glass-card p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-neon-400 text-neon-400" />
                    ))}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/30 text-xs">{t.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA / CONSULTATION ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-neon-500/[0.05] to-navy-950" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text-white">
                Siap Mewujudkan
                <br />
                <span className="gradient-text">Transformasi Digital Anda?</span>
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Jadwalkan sesi konsultasi gratis dengan tim expert kami. Ceritakan tantangan bisnis Anda, 
                dan kami akan merekomendasikan solusi terbaik — tanpa komitmen, tanpa biaya.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/konsultasi" className="btn-primary text-base">
                  <Calendar className="w-5 h-5" />
                  Jadwalkan Konsultasi
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-base"
                >
                  <Phone className="w-5 h-5" />
                  Chat via WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/30">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-500/50" />
                  Konsultasi Gratis
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-500/50" />
                  Tanpa Komitmen
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-500/50" />
                  Respons dalam 24 Jam
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
