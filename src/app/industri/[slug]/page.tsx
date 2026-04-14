"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, Lightbulb, Trophy, Building2, Store, Rocket } from "lucide-react";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import { industryApproaches } from "@/lib/data";

const iconMap: Record<string, any> = { Building2, Store, Rocket };

export default function IndustryDetailPage() {
  const params = useParams();
  const industry = industryApproaches.find((i) => i.slug === params.slug);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold gradient-text-white mb-4">Halaman Tidak Ditemukan</h1>
          <Link href="/industri" className="btn-secondary"><ArrowLeft className="w-4 h-4" />Kembali</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[industry.icon];

  return (
    <>
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-500/5 rounded-full blur-[120px]" />
        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll>
            <Link href="/industri" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-neon-400 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />Semua Industri
            </Link>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-neon-500/10 flex items-center justify-center flex-shrink-0">
                {Icon && <Icon className="w-10 h-10 text-neon-400" />}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text-white mb-3">{industry.title}</h1>
                <p className="text-neon-400/80 text-lg font-medium mb-4">{industry.subtitle}</p>
                <p className="text-white/50 text-lg leading-relaxed max-w-3xl">{industry.description}</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16">
        <div className="section-container section-padding">
          <AnimateOnScroll className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl md:text-3xl font-bold gradient-text-white">Tantangan yang Kami Pahami</h2>
            </div>
          </AnimateOnScroll>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
            {industry.challenges.map((challenge) => (
              <StaggerItem key={challenge}>
                <div className="glass-card p-5 h-full">
                  <p className="text-sm text-white/60 leading-relaxed">{challenge}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-500/[0.02] to-transparent" />
        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Lightbulb className="w-6 h-6 text-neon-400" />
              <h2 className="text-2xl md:text-3xl font-bold gradient-text-white">Solusi yang Kami Tawarkan</h2>
            </div>
          </AnimateOnScroll>
          <StaggerContainer className="space-y-4" staggerDelay={0.08}>
            {industry.solutions.map((solution, i) => (
              <StaggerItem key={solution}>
                <div className="glass-card-hover p-6 flex items-start gap-4">
                  <span className="text-xl font-bold gradient-text font-mono flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/60 leading-relaxed">{solution}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="section-container section-padding">
          <AnimateOnScroll className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-6 h-6 text-neon-400" />
              <h2 className="text-2xl md:text-3xl font-bold gradient-text-white">Keuntungan Bekerja dengan Naincode</h2>
            </div>
          </AnimateOnScroll>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
            {industry.benefits.map((benefit) => (
              <StaggerItem key={benefit}>
                <div className="glass-card p-5 flex items-start gap-3 h-full">
                  <CheckCircle2 className="w-5 h-5 text-neon-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/60">{benefit}</span>
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
                <h2 className="text-2xl md:text-3xl font-bold gradient-text-white mb-4">{industry.cta}</h2>
                <p className="text-white/50 max-w-xl mx-auto mb-8">
                  Jadwalkan sesi konsultasi untuk mendiskusikan kebutuhan spesifik bisnis {industry.title.toLowerCase()} Anda.
                </p>
                <Link href="/konsultasi" className="btn-primary">
                  Jadwalkan Konsultasi
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
