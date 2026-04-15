"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import { siteConfig } from "@/lib/data";

const faqCategories = [
  {
    title: "Umum",
    faqs: [
      {
        q: "Apa itu Naincode?",
        a: "Naincode (PT. Naincode Inti Technology) adalah perusahaan software development dan konsultan IT yang menyediakan layanan end-to-end mulai dari web development, mobile app, UI/UX design, cloud infrastructure, digital transformation, hingga cybersecurity. Kami melayani Enterprise, UMKM, dan Startup.",
      },
      {
        q: "Dimana lokasi kantor Naincode?",
        a: "Kantor kami berlokasi di Jakarta, Indonesia. Namun kami bekerja secara hybrid dan melayani klien dari seluruh Indonesia bahkan regional Asia Tenggara. Kami menggunakan tools kolaborasi modern untuk memastikan komunikasi lancar tanpa batasan geografis.",
      },
      {
        q: "Berapa lama pengalaman tim Naincode?",
        a: "Tim kami terdiri dari 50+ engineer dengan pengalaman rata-rata 5+ tahun. Secara kolektif, Naincode telah beroperasi 8+ tahun dan telah menyelesaikan 150+ project di berbagai industri dan skala bisnis.",
      },
      {
        q: "Apakah Naincode menerima project dari luar negeri?",
        a: "Ya! Kami menerima project internasional. Tim kami fasih berkomunikasi dalam Bahasa Indonesia dan English. Kami sudah berpengalaman menangani klien dari berbagai negara di Asia Tenggara.",
      },
    ],
  },
  {
    title: "Layanan & Proses",
    faqs: [
      {
        q: "Layanan apa saja yang ditawarkan Naincode?",
        a: "Kami menyediakan: (1) Web Development — website, web app, e-commerce, (2) Mobile Development — iOS & Android native/cross-platform, (3) UI/UX Design — research, wireframe, prototyping, (4) Cloud & DevOps — AWS/GCP infrastructure, CI/CD, (5) Digital Transformation — konsultasi dan implementasi, (6) Cybersecurity — audit, penetration testing, monitoring.",
      },
      {
        q: "Bagaimana proses development di Naincode?",
        a: "Proses kami mengikuti 7 tahap: (1) Discovery & Consultation — memahami kebutuhan, (2) Planning & Architecture — desain solusi, (3) UI/UX Design — desain visual, (4) Development — coding dengan Agile sprint, (5) Testing & QA — pengujian menyeluruh, (6) Deployment & Launch — go-live, (7) Support & Evolution — maintenance berkelanjutan.",
      },
      {
        q: "Berapa lama waktu pengerjaan project?",
        a: "Tergantung kompleksitas project. Landing page sederhana bisa selesai dalam 2-4 minggu. Aplikasi web medium membutuhkan 2-4 bulan. Sistem enterprise kompleks bisa 6-12 bulan. Kami selalu memberikan timeline detail saat proposal.",
      },
      {
        q: "Apakah bisa melihat progress development?",
        a: "Tentu! Kami menggunakan metodologi Agile dengan sprint 2 mingguan. Setiap sprint Anda akan mendapat demo progress, update report, dan kesempatan memberikan feedback langsung. Transparansi adalah nilai utama kami.",
      },
      {
        q: "Apakah ada garansi setelah project selesai?",
        a: "Ya, setiap project mendapat garansi bug-fix selama 3 bulan setelah launch. Selain itu, kami juga menawarkan paket maintenance bulanan untuk support berkelanjutan, monitoring, dan pengembangan fitur baru.",
      },
    ],
  },
  {
    title: "Biaya & Pembayaran",
    faqs: [
      {
        q: "Berapa biaya pembuatan website/aplikasi?",
        a: "Biaya bervariasi tergantung scope dan kompleksitas. Kami menyediakan range mulai dari Rp 30 juta untuk website standar hingga miliaran untuk sistem enterprise. Kami selalu memberikan proposal detail setelah sesi discovery gratis.",
      },
      {
        q: "Apakah konsultasi awal berbayar?",
        a: "Tidak. Konsultasi awal / discovery session sepenuhnya GRATIS dan tanpa komitmen. Kami ingin memahami kebutuhan Anda terlebih dahulu sebelum memberikan rekomendasi dan estimasi.",
      },
      {
        q: "Bagaimana skema pembayarannya?",
        a: "Umumnya kami menggunakan milestone-based payment: 30% di awal, 30% di tengah (setelah demo phase 1), 30% saat delivery, dan 10% saat launch. Namun skema ini fleksibel dan bisa disesuaikan.",
      },
      {
        q: "Apakah ada paket untuk UMKM atau Startup?",
        a: "Ya! Kami memiliki program khusus untuk UMKM dan Startup dengan pendekatan MVP (Minimum Viable Product) yang cost-effective. Kami membantu Anda membangun produk yang tepat dengan budget terbatas, lalu scale up seiring pertumbuhan bisnis.",
      },
    ],
  },
  {
    title: "Teknologi",
    faqs: [
      {
        q: "Teknologi apa yang digunakan Naincode?",
        a: "Kami menggunakan teknologi modern: Frontend — React, Next.js, Vue.js, Flutter. Backend — Node.js, Go, Python, Laravel. Database — PostgreSQL, MongoDB, Redis. Cloud — AWS, Google Cloud, Docker, Kubernetes. Kami selalu memilih tech stack yang paling sesuai untuk setiap project.",
      },
      {
        q: "Apakah produk yang dibuat bisa di-scale?",
        a: "Absolutely. Scalability adalah prinsip arsitektur kami. Kami mendesain sistem dengan microservices, auto-scaling, dan cloud-native architecture sehingga bisa menangani pertumbuhan dari 100 user hingga jutaan user tanpa rebuild.",
      },
      {
        q: "Bagaimana dengan keamanan data?",
        a: "Keamanan adalah prioritas utama. Kami menerapkan encryption at rest dan in transit, secure authentication (OAuth2/JWT), regular security audit, OWASP compliance, dan monitoring 24/7. Untuk industry yang membutuhkan, kami juga support ISO 27001 compliance.",
      },
      {
        q: "Apakah source code menjadi milik klien?",
        a: "Ya, 100%. Setelah project selesai dan pembayaran lunas, seluruh source code, dokumentasi, dan aset digital menjadi milik Anda sepenuhnya. Kami berikan akses penuh ke repository dan infrastruktur.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/[0.06] rounded-xl overflow-hidden hover:border-neon-500/20 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-sm font-medium text-white/80 pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-neon-400 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-white/50 leading-relaxed border-t border-white/[0.04] pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="section-container section-padding">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <span className="section-label">FAQ</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5 gradient-text-white">
              Pertanyaan yang <span className="gradient-text">Sering Ditanyakan</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Temukan jawaban untuk pertanyaan umum tentang layanan, proses, dan cara kerja Naincode.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container section-padding max-w-4xl mx-auto">
          <StaggerContainer className="space-y-10" staggerDelay={0.1}>
            {faqCategories.map((cat) => (
              <StaggerItem key={cat.title}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <HelpCircle className="w-5 h-5 text-neon-400" />
                    <h2 className="text-xl font-bold text-white">{cat.title}</h2>
                  </div>
                  <div className="space-y-2">
                    {cat.faqs.map((faq) => (
                      <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container section-padding">
          <AnimateOnScroll>
            <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-500/5 to-transparent" />
              <div className="relative z-10">
                <MessageCircle className="w-10 h-10 text-neon-400 mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold gradient-text-white mb-4">
                  Masih Ada Pertanyaan?
                </h2>
                <p className="text-white/50 max-w-xl mx-auto mb-8">
                  Tim kami siap membantu. Hubungi kami melalui WhatsApp atau jadwalkan konsultasi gratis.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/konsultasi" className="btn-primary">
                    Konsultasi Gratis
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Chat WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
