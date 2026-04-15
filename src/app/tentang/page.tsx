"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Eye,
  TrendingUp,
  Lock,
  Users,
  HeartHandshake,
  Star,
  Target,
  Award,
} from "lucide-react";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import { stats, whyNaincode, testimonials, siteConfig } from "@/lib/data";

const iconMap: Record<string, any> = { Code2, Eye, TrendingUp, Lock, Users, HeartHandshake };

export default function TentangPage() {
  return (
    <>
      <section className="pt-32 pb-16 relative">
        <div className="section-container section-padding">
          <AnimateOnScroll className="max-w-3xl">
            <span className="section-label">Tentang Naincode</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5 gradient-text-white">
              Engineering Digital
              <br />
              <span className="gradient-text">Excellence</span> Sejak Hari Pertama
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-3xl">
              {siteConfig.fullName} didirikan dengan satu misi: membantu bisnis Indonesia
              bertransformasi digital dengan teknologi berkualitas tinggi. Kami percaya bahwa
              setiap bisnis layak mendapatkan solusi teknologi yang excellent — bukan sekadar
              &ldquo;cukup baik&rdquo;.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="section-container section-padding">
          <AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-5 text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-white/35">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="section-container section-padding">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll variant="slideRight">
              <div className="glass-card p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-neon-500/10 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-neon-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Visi Kami</h2>
                <p className="text-white/50 leading-relaxed">
                  Menjadi partner teknologi #1 di Indonesia yang dikenal karena engineering excellence,
                  inovasi, dan komitmen terhadap kesuksesan klien. Kami ingin setiap bisnis Indonesia
                  bisa bersaing di level global melalui teknologi.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="slideLeft">
              <div className="glass-card p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-neon-500/10 flex items-center justify-center mb-5">
                  <Award className="w-6 h-6 text-neon-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Misi Kami</h2>
                <ul className="space-y-3">
                  <li className="text-white/50 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-neon-400 mt-1">•</span>
                    Membangun solusi digital berkualitas tinggi dengan standar engineering terbaik
                  </li>
                  <li className="text-white/50 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-neon-400 mt-1">•</span>
                    Menjadi partner jangka panjang dalam perjalanan digital klien kami
                  </li>
                  <li className="text-white/50 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-neon-400 mt-1">•</span>
                    Mendorong adopsi teknologi terkini untuk UMKM hingga Enterprise
                  </li>
                  <li className="text-white/50 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-neon-400 mt-1">•</span>
                    Mengembangkan talenta teknologi Indonesia yang kompetitif secara global
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Naincode */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-500/[0.02] to-transparent" />
        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="section-title">Mengapa Memilih Naincode?</h2>
          </AnimateOnScroll>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {whyNaincode.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <StaggerItem key={item.title}>
                  <div className="glass-card-hover p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-neon-500/10 flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-6 h-6 text-neon-400" />}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="section-container section-padding">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="section-title">Kata Mereka tentang Kami</h2>
          </AnimateOnScroll>
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="glass-card p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-neon-400 text-neon-400" />
                    ))}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
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

      {/* CTA */}
      <section className="py-20">
        <div className="section-container section-padding text-center">
          <AnimateOnScroll>
            <h2 className="section-title">Mari Berkolaborasi</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              Kami selalu terbuka untuk diskusi dan kolaborasi baru.
            </p>
            <Link href="/konsultasi" className="btn-primary">
              Hubungi Kami
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
