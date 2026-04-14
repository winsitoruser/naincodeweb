"use client";

import Link from "next/link";
import { ArrowRight, Clock, User, Tag } from "lucide-react";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

const blogPosts = [
  {
    slug: "panduan-memilih-tech-stack-2024",
    title: "Panduan Memilih Tech Stack yang Tepat untuk Project Anda di 2024",
    excerpt:
      "Memilih tech stack yang tepat adalah keputusan kritis. Artikel ini membahas faktor-faktor penting dan rekomendasi tech stack berdasarkan jenis project.",
    category: "Engineering",
    author: "Tim Engineering Naincode",
    date: "15 Mar 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "mengapa-umkm-butuh-transformasi-digital",
    title: "Mengapa UMKM Harus Mulai Transformasi Digital Sekarang",
    excerpt:
      "Di era digital, UMKM yang tidak bertransformasi akan tertinggal. Pelajari langkah-langkah konkret yang bisa diambil mulai hari ini.",
    category: "Digital Transformation",
    author: "Tim Konsultan Naincode",
    date: "10 Mar 2024",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "mvp-strategi-startup",
    title: "MVP: Strategi Cerdas Membangun Produk Digital untuk Startup",
    excerpt:
      "Bagaimana membangun Minimum Viable Product yang efektif? Panduan lengkap dari ide validation hingga launch pertama.",
    category: "Startup",
    author: "Tim Product Naincode",
    date: "5 Mar 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "keamanan-siber-untuk-bisnis",
    title: "5 Langkah Penting Menjaga Keamanan Siber Bisnis Anda",
    excerpt:
      "Serangan siber meningkat drastis. Inilah 5 langkah fundamental yang harus diterapkan setiap bisnis untuk melindungi data dan aset digital.",
    category: "Cybersecurity",
    author: "Tim Security Naincode",
    date: "28 Feb 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "cloud-migration-guide",
    title: "Panduan Lengkap Migrasi ke Cloud: Kapan, Mengapa, dan Bagaimana",
    excerpt:
      "Cloud migration bukan sekadar memindahkan server. Artikel ini membahas strategi lift-and-shift vs. re-architecture dan kapan masing-masing tepat digunakan.",
    category: "Cloud & DevOps",
    author: "Tim DevOps Naincode",
    date: "20 Feb 2024",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "ux-research-penting",
    title: "Mengapa UX Research Penting Sebelum Mulai Development",
    excerpt:
      "Banyak project gagal karena skip UX research. Pelajari mengapa investasi di research awal menghemat waktu dan biaya development.",
    category: "UI/UX Design",
    author: "Tim Design Naincode",
    date: "15 Feb 2024",
    readTime: "5 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const regular = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="section-container section-padding relative z-10">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <span className="text-neon-400 font-mono text-sm tracking-widest uppercase">
              Blog & Insight
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 gradient-text-white">
              Wawasan <span className="gradient-text">Teknologi</span> Terkini
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Artikel, panduan, dan insight dari tim expert Naincode tentang teknologi,
              bisnis digital, dan tren industri terkini.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-12">
        <div className="section-container section-padding">
          <AnimateOnScroll className="mb-8">
            <h2 className="text-xl font-bold text-white">Artikel Unggulan</h2>
          </AnimateOnScroll>
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
            {featured.map((post) => (
              <StaggerItem key={post.slug}>
                <div className="glass-card-hover p-8 h-full group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs bg-neon-500/10 text-neon-400 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="px-3 py-1 text-xs bg-amber-500/10 text-amber-400 rounded-full font-medium">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-400 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-white/30">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </div>
                    </div>
                    <span>{post.date}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-24">
        <div className="section-container section-padding">
          <AnimateOnScroll className="mb-8">
            <h2 className="text-xl font-bold text-white">Semua Artikel</h2>
          </AnimateOnScroll>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {regular.map((post) => (
              <StaggerItem key={post.slug}>
                <div className="glass-card-hover p-6 h-full group">
                  <span className="inline-block px-3 py-1 text-xs bg-white/5 text-white/40 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-neon-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-white/30">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    <span>{post.date}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold gradient-text-white mb-4">
              Ingin Diskusi Lebih Lanjut?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              Hubungi tim expert kami untuk konsultasi gratis tentang kebutuhan digital bisnis Anda.
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
