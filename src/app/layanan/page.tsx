"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Zap,
  Shield,
} from "lucide-react";
import AnimateOnScroll, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimateOnScroll";
import { services } from "@/lib/data";

const iconMap: Record<string, any> = { Globe, Smartphone, Palette, Cloud, Zap, Shield };

export default function LayananPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <span className="text-neon-400 font-mono text-sm tracking-widest uppercase">
              Layanan Kami
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 gradient-text-white">
              Solusi Digital <span className="gradient-text">End-to-End</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Dari ide hingga deployment dan beyond — kami menyediakan layanan teknologi
              komprehensif yang dirancang untuk mendorong pertumbuhan bisnis Anda.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="section-container section-padding">
          <StaggerContainer className="space-y-8" staggerDelay={0.12}>
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <StaggerItem key={service.slug}>
                  <Link href={`/layanan/${service.slug}`} className="block group">
                    <div className="glass-card-hover p-8 md:p-10">
                      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                        {/* Left */}
                        <div>
                          <div className="w-16 h-16 rounded-2xl bg-neon-500/10 flex items-center justify-center mb-5 group-hover:bg-neon-500/20 transition-colors">
                            {Icon && <Icon className="w-8 h-8 text-neon-400" />}
                          </div>
                          <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-400 transition-colors">
                            {service.title}
                          </h2>
                          <p className="text-neon-400/60 text-sm font-medium mb-4">
                            {service.tagline}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 text-xs font-mono bg-white/5 text-white/40 rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* Right */}
                        <div>
                          <p className="text-white/50 leading-relaxed mb-6">
                            {service.description}
                          </p>
                          <div className="grid sm:grid-cols-2 gap-3 mb-6">
                            {service.subServices.map((sub) => (
                              <div
                                key={sub.title}
                                className="p-3 bg-white/[0.02] rounded-lg border border-white/[0.04]"
                              >
                                <h4 className="text-sm font-medium text-white/80 mb-1">
                                  {sub.title}
                                </h4>
                                <p className="text-xs text-white/30 line-clamp-2">
                                  {sub.description}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-neon-400 font-medium text-sm">
                            Pelajari Detail Layanan
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="section-container section-padding text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text-white mb-4">
              Butuh Solusi Custom?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              Setiap bisnis unik. Ceritakan kebutuhan Anda dan kami akan merancang solusi yang tepat.
            </p>
            <Link href="/konsultasi" className="btn-primary">
              Konsultasi Gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
