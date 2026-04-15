"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import { workflowSteps } from "@/lib/data";

export default function ProsesPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="section-container section-padding">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <span className="section-label">Proses Kami</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5 gradient-text-white">
              Dari Ide ke <span className="gradient-text">Realita</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Metodologi development terstruktur yang memastikan setiap project berjalan on-time,
              on-budget, dan melebihi ekspektasi.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container section-padding">
          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            {workflowSteps.map((step, index) => (
              <StaggerItem key={step.number}>
                <div className="glass-card-hover p-8 md:p-10">
                  <div className="grid md:grid-cols-[auto_1fr_1fr] gap-8 items-start">
                    <div className="flex flex-col items-center">
                      <span className="text-4xl md:text-5xl font-bold gradient-text font-mono">
                        {step.number}
                      </span>
                      <span className="mt-2 px-3 py-1 text-xs bg-neon-500/10 text-neon-400 rounded-full font-mono">
                        {step.duration}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{step.title}</h2>
                      <p className="text-white/40 leading-relaxed">{step.description}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-3">
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-white/50">
                            <CheckCircle2 className="w-4 h-4 text-neon-500/50 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block mt-6 ml-[2.4rem] h-8 w-px bg-gradient-to-b from-neon-500/20 to-transparent" />
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container section-padding text-center">
          <AnimateOnScroll>
            <h2 className="section-title">Siap Memulai?</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              Langkah pertama dimulai dari satu percakapan. Ceritakan kebutuhan Anda.
            </p>
            <Link href="/konsultasi" className="btn-primary">
              Mulai Discovery Session
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
