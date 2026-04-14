"use client";

import Link from "next/link";
import { ArrowRight, Building2, Store, Rocket } from "lucide-react";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import { industryApproaches } from "@/lib/data";

const iconMap: Record<string, any> = { Building2, Store, Rocket };

export default function IndustriPage() {
  return (
    <>
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <span className="text-neon-400 font-mono text-sm tracking-widest uppercase">Pendekatan Industri</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 gradient-text-white">
              Solusi untuk <span className="gradient-text">Setiap Skala Bisnis</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Kami memahami bahwa setiap segmen bisnis memiliki kebutuhan unik. 
              Pendekatan kami disesuaikan untuk memberikan nilai maksimal.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container section-padding">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {industryApproaches.map((industry) => {
              const Icon = iconMap[industry.icon];
              return (
                <StaggerItem key={industry.slug}>
                  <Link href={`/industri/${industry.slug}`} className="block h-full">
                    <div className="glass-card-hover p-8 h-full group text-center">
                      <div className="w-20 h-20 rounded-2xl bg-neon-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-neon-500/20 transition-all">
                        {Icon && <Icon className="w-10 h-10 text-neon-400" />}
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-neon-400 transition-colors">
                        {industry.title}
                      </h2>
                      <p className="text-neon-400/60 text-sm font-medium mb-5">{industry.subtitle}</p>
                      <p className="text-white/40 text-sm leading-relaxed mb-8">{industry.description}</p>
                      <div className="flex items-center justify-center gap-2 text-neon-400 font-medium">
                        Pelajari Lebih Lanjut
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
    </>
  );
}
