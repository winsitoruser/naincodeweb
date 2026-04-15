"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import AnimateOnScroll, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimateOnScroll";
import { products } from "@/lib/data";

const iconMap: Record<string, any> = { BarChart3, LayoutDashboard, ShieldCheck, Workflow };

export default function ProdukPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="section-container section-padding">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <span className="section-label">Produk Kami</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5 gradient-text-white">
              Produk Digital <span className="gradient-text">Siap Pakai</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Selain custom development, kami juga mengembangkan produk SaaS yang siap
              membantu efisiensi dan pertumbuhan bisnis Anda.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Products */}
      <section className="pb-24">
        <div className="section-container section-padding">
          <StaggerContainer className="space-y-8" staggerDelay={0.15}>
            {products.map((product) => {
              const Icon = iconMap[product.icon];
              return (
                <StaggerItem key={product.slug}>
                  <div id={product.slug} className="scroll-mt-24">
                    <div className="glass-card-hover p-8 md:p-10">
                      <div className="grid md:grid-cols-[auto_1fr] gap-8">
                        <div className="w-20 h-20 rounded-2xl bg-neon-500/10 flex items-center justify-center flex-shrink-0">
                          {Icon && <Icon className="w-10 h-10 text-neon-400" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                            <span className="px-3 py-1 text-xs bg-neon-500/10 text-neon-400 rounded-full font-mono">
                              {product.category}
                            </span>
                          </div>
                          <p className="text-neon-400/70 font-medium mb-4">{product.tagline}</p>
                          <p className="text-white/50 leading-relaxed mb-6">{product.description}</p>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {product.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-2 text-sm text-white/50">
                                <CheckCircle2 className="w-4 h-4 text-neon-500/50 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container section-padding text-center">
          <AnimateOnScroll>
            <h2 className="section-title">Tertarik dengan Produk Kami?</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              Hubungi kami untuk demo gratis atau diskusikan kebutuhan kustomisasi Anda.
            </p>
            <Link href="/konsultasi" className="btn-primary">
              Request Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
