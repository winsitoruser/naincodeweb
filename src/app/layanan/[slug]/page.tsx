"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
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

export default function ServiceDetailPage() {
  const params = useParams();
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold gradient-text-white mb-4">Layanan Tidak Ditemukan</h1>
          <Link href="/layanan" className="btn-secondary">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Layanan
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="section-container section-padding">
          <AnimateOnScroll>
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-neon-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Semua Layanan
            </Link>

            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-neon-500/10 flex items-center justify-center flex-shrink-0">
                {Icon && <Icon className="w-8 h-8 text-neon-400" />}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text-white mb-3">
                  {service.title}
                </h1>
                <p className="text-neon-400/80 text-lg font-medium">{service.tagline}</p>
              </div>
            </div>

            <p className="text-white/50 text-lg leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="section-container section-padding">
          <AnimateOnScroll className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text-white">
              Apa yang Kami Tawarkan
            </h2>
          </AnimateOnScroll>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
            {service.features.map((feature) => (
              <StaggerItem key={feature}>
                <div className="glass-card p-5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">{feature}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Sub Services */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-500/[0.02] to-transparent" />
        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll className="mb-12">
            <span className="section-label">Sub-Layanan</span>
            <h2 className="text-2xl md:text-3xl font-bold gradient-text-white mt-2">
              Layanan Detail
            </h2>
          </AnimateOnScroll>

          <StaggerContainer className="space-y-6" staggerDelay={0.12}>
            {service.subServices.map((sub, index) => (
              <StaggerItem key={sub.title}>
                <div className="glass-card-hover p-8">
                  <div className="grid md:grid-cols-[1fr_1.5fr] gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl font-bold gradient-text font-mono">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-xl font-semibold text-white">{sub.title}</h3>
                      </div>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {sub.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white/60 mb-3 uppercase tracking-wider">
                        Fitur Utama
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {sub.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm text-white/50">
                            <CheckCircle2 className="w-4 h-4 text-neon-500/50 flex-shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="section-container section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll variant="slideRight">
              <span className="section-label">Keunggulan</span>
              <h2 className="text-2xl md:text-3xl font-bold gradient-text-white mt-2 mb-6">
                Mengapa Memilih Naincode untuk {service.shortTitle}?
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-neon-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-neon-400" />
                    </div>
                    <span className="text-white/60">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="slideLeft">
              <div className="glass-card p-8">
                <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-neon-500/10 text-neon-400 rounded-lg text-sm font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
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
                  Tertarik dengan Layanan {service.shortTitle}?
                </h2>
                <p className="text-white/50 max-w-xl mx-auto mb-8">
                  Jadwalkan sesi konsultasi gratis untuk mendiskusikan kebutuhan project Anda
                  dengan tim expert kami.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/konsultasi" className="btn-primary">
                    Jadwalkan Konsultasi
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/studi-kasus" className="btn-secondary">
                    Lihat Studi Kasus
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
