"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-neon-500/5 rounded-full blur-[150px]" />

      <div className="section-padding relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8"
        >
          <span className="text-[120px] md:text-[180px] font-bold gradient-text font-mono leading-none">
            404
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold gradient-text-white mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-white/50 mb-8 leading-relaxed">
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
            Mungkin Anda bisa menemukan apa yang dicari dari halaman di bawah ini.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-primary">
              <Home className="w-4 h-4" />
              Kembali ke Beranda
            </Link>
            <Link href="/layanan" className="btn-secondary">
              <Search className="w-4 h-4" />
              Jelajahi Layanan
            </Link>
          </div>
        </motion.div>

        {/* Floating code snippets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 space-y-2 font-mono text-xs text-white/10"
        >
          <p>{"// Error: Page not found"}</p>
          <p>{"const page = await fetch('/your-page');"}</p>
          <p className="text-neon-500/30">{"// status: 404 — Not Found"}</p>
          <p>{"// Redirecting to safety..."}</p>
        </motion.div>
      </div>
    </section>
  );
}
