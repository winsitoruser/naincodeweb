"use client";

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import { caseStudies } from "@/lib/data";

export default function StudiKasusPage() {
  return (
    <>
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <span className="text-neon-400 font-mono text-sm tracking-widest uppercase">Studi Kasus</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 gradient-text-white">
              Hasil Nyata, <span className="gradient-text">Dampak Terukur</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Setiap project yang kami kerjakan menghasilkan dampak bisnis yang signifikan. 
              Berikut kisah sukses dari klien kami.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container section-padding">
          <StaggerContainer className="space-y-10" staggerDelay={0.15}>
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.slug}>
                <div id={cs.slug} className="scroll-mt-24">
                  <div className="glass-card-hover p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="px-4 py-1.5 text-sm bg-neon-500/10 text-neon-400 rounded-full font-medium">
                        {cs.industry}
                      </span>
                      {cs.services.map((s) => (
                        <span key={s} className="px-3 py-1 text-xs bg-white/5 text-white/40 rounded-full">
                          {s}
                        </span>
                      ))}
                      <span className="text-xs text-white/30 ml-auto">{cs.duration}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{cs.title}</h2>
                    <p className="text-neon-400/60 font-medium text-sm mb-4">Client: {cs.client}</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                          Tantangan
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                          Solusi
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/[0.02] rounded-xl border border-white/[0.04] mb-6">
                      {cs.results.map((r) => (
                        <div key={r.metric} className="text-center">
                          <div className="text-2xl md:text-3xl font-bold gradient-text">{r.value}</div>
                          <div className="text-xs text-white/30 mt-1">{r.metric}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {cs.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 text-xs font-mono bg-neon-500/5 text-neon-400/60 rounded-lg border border-neon-500/10">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {cs.testimonial && (
                      <div className="p-6 bg-white/[0.02] rounded-xl border border-white/[0.04]">
                        <Quote className="w-5 h-5 text-neon-500/30 mb-3" />
                        <p className="text-white/50 italic leading-relaxed mb-3">
                          &ldquo;{cs.testimonial.text}&rdquo;
                        </p>
                        <p className="text-sm text-white/30">
                          — <span className="text-white/50">{cs.testimonial.name}</span>, {cs.testimonial.role}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container section-padding text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text-white mb-4">
              Ingin Jadi Kisah Sukses Berikutnya?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              Mulai perjalanan transformasi digital Anda bersama Naincode.
            </p>
            <Link href="/konsultasi" className="btn-primary">
              Mulai Project Anda
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
