"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  User,
  Building2,
  Mail,
  Phone,
  MessageSquare,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Zap,
  Shield,
  Send,
  Clock,
  Users,
  HeartHandshake,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { siteConfig } from "@/lib/data";

const serviceOptions = [
  { id: "web", label: "Web Development", icon: Globe },
  { id: "mobile", label: "Mobile Development", icon: Smartphone },
  { id: "uiux", label: "UI/UX Design", icon: Palette },
  { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
  { id: "digital", label: "Digital Transformation", icon: Zap },
  { id: "security", label: "Cybersecurity", icon: Shield },
];

const budgetOptions = [
  "< Rp 50 Juta",
  "Rp 50 - 150 Juta",
  "Rp 150 - 500 Juta",
  "Rp 500 Juta - 1 Miliar",
  "> Rp 1 Miliar",
  "Belum ditentukan",
];

const timelineOptions = [
  "Secepatnya (< 1 bulan)",
  "1 - 3 bulan",
  "3 - 6 bulan",
  "6 - 12 bulan",
  "Belum ditentukan",
];

const companyTypes = ["Startup", "UMKM", "Enterprise / Korporasi", "Pemerintahan", "Organisasi / NGO", "Personal"];

export default function KonsultasiPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    companyType: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    description: "",
    preferredDate: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;

  const toggleService = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.phone;
      case 2:
        return formData.services.length > 0;
      case 3:
        return formData.budget && formData.timeline;
      case 4:
        return formData.description;
      default:
        return false;
    }
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-20">
        <AnimateOnScroll className="text-center max-w-lg mx-auto section-padding">
          <div className="w-20 h-20 rounded-full bg-neon-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-neon-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text-white mb-4">
            Terima Kasih!
          </h1>
          <p className="text-white/50 leading-relaxed mb-4">
            Permintaan konsultasi Anda telah kami terima. Tim kami akan menghubungi Anda dalam
            waktu <strong className="text-neon-400">1x24 jam</strong> melalui email atau WhatsApp
            untuk mengkonfirmasi jadwal konsultasi.
          </p>
          <p className="text-white/30 text-sm mb-8">
            Silakan cek inbox email Anda untuk konfirmasi otomatis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Kembali ke Beranda
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Halo Naincode, saya ${formData.name} baru saja mengisi form konsultasi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Chat WhatsApp
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </AnimateOnScroll>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 pb-8">
        <div className="section-container section-padding">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <span className="section-label">Konsultasi Gratis</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 gradient-text-white">
              Ceritakan Kebutuhan <span className="gradient-text">Anda</span>
            </h1>
            <p className="text-white/50 text-lg">
              Isi form di bawah dan tim expert kami akan menghubungi Anda untuk sesi konsultasi gratis.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container section-padding">
          <div className="max-w-3xl mx-auto">
            {/* Progress */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                        s <= step
                          ? "bg-neon-500 text-navy-950"
                          : "bg-white/5 text-white/30"
                      }`}
                    >
                      {s < step ? <CheckCircle2 className="w-5 h-5" /> : s}
                    </div>
                    <span className="hidden sm:block text-xs text-white/40">
                      {s === 1 && "Info Pribadi"}
                      {s === 2 && "Layanan"}
                      {s === 3 && "Budget & Timeline"}
                      {s === 4 && "Detail Project"}
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-neon-500 rounded-full"
                  animate={{ width: `${(step / totalSteps) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Form Steps */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 md:p-10"
              >
                {/* Step 1: Personal Info */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">Informasi Anda</h2>
                      <p className="text-sm text-white/40">Kami perlu tahu siapa Anda agar bisa memberikan pengalaman terbaik.</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-white/60 mb-2">Nama Lengkap *</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-neon-500/50 focus:ring-1 focus:ring-neon-500/20 transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-white/60 mb-2">Email *</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@company.com"
                            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-neon-500/50 focus:ring-1 focus:ring-neon-500/20 transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-white/60 mb-2">Nomor WhatsApp *</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="08123456789"
                            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-neon-500/50 focus:ring-1 focus:ring-neon-500/20 transition-all"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-white/60 mb-2">Nama Perusahaan</label>
                          <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="PT. Example"
                              className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-neon-500/50 focus:ring-1 focus:ring-neon-500/20 transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-white/60 mb-2">Tipe Perusahaan</label>
                          <select
                            value={formData.companyType}
                            onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neon-500/50 focus:ring-1 focus:ring-neon-500/20 transition-all appearance-none"
                          >
                            <option value="" className="bg-navy-900">Pilih tipe</option>
                            {companyTypes.map((type) => (
                              <option key={type} value={type} className="bg-navy-900">{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Services */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">Layanan yang Dibutuhkan</h2>
                      <p className="text-sm text-white/40">Pilih satu atau lebih layanan yang Anda butuhkan.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => {
                        const isSelected = formData.services.includes(service.id);
                        const IconComp = service.icon;
                        return (
                          <button
                            key={service.id}
                            onClick={() => toggleService(service.id)}
                            className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${
                              isSelected
                                ? "bg-neon-500/10 border-neon-500/30 text-neon-400"
                                : "bg-white/[0.02] border-white/[0.06] text-white/50 hover:bg-white/5 hover:border-white/10"
                            }`}
                          >
                            <IconComp className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm font-medium">{service.label}</span>
                            {isSelected && <CheckCircle2 className="w-4 h-4 ml-auto" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 3: Budget & Timeline */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">Budget & Timeline</h2>
                      <p className="text-sm text-white/40">Bantu kami memahami scope project Anda.</p>
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-3">Estimasi Budget</label>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {budgetOptions.map((budget) => (
                          <button
                            key={budget}
                            onClick={() => setFormData({ ...formData, budget })}
                            className={`p-3 rounded-xl border text-sm text-left transition-all ${
                              formData.budget === budget
                                ? "bg-neon-500/10 border-neon-500/30 text-neon-400"
                                : "bg-white/[0.02] border-white/[0.06] text-white/50 hover:bg-white/5"
                            }`}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-3">Timeline Project</label>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {timelineOptions.map((timeline) => (
                          <button
                            key={timeline}
                            onClick={() => setFormData({ ...formData, timeline })}
                            className={`p-3 rounded-xl border text-sm text-left transition-all ${
                              formData.timeline === timeline
                                ? "bg-neon-500/10 border-neon-500/30 text-neon-400"
                                : "bg-white/[0.02] border-white/[0.06] text-white/50 hover:bg-white/5"
                            }`}
                          >
                            {timeline}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Preferred Consultation Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neon-500/50 focus:ring-1 focus:ring-neon-500/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Description */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">Detail Project</h2>
                      <p className="text-sm text-white/40">
                        Ceritakan lebih detail tentang project atau tantangan yang ingin Anda selesaikan.
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Deskripsi Project *</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-white/30" />
                        <textarea
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          placeholder="Ceritakan tentang bisnis Anda, tantangan yang dihadapi, dan solusi yang Anda bayangkan..."
                          rows={6}
                          className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-neon-500/50 focus:ring-1 focus:ring-neon-500/20 transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="p-4 bg-white/[0.02] rounded-xl border border-white/[0.04]">
                      <h4 className="text-sm font-medium text-white/60 mb-3">Ringkasan</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/30">Nama</span>
                          <span className="text-white/60">{formData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/30">Email</span>
                          <span className="text-white/60">{formData.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/30">Layanan</span>
                          <span className="text-white/60">
                            {formData.services
                              .map((id) => serviceOptions.find((s) => s.id === id)?.label)
                              .join(", ")}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/30">Budget</span>
                          <span className="text-white/60">{formData.budget}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/30">Timeline</span>
                          <span className="text-white/60">{formData.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.06]">
                  {step > 1 ? (
                    <button onClick={() => setStep(step - 1)} className="btn-ghost">
                      <ArrowLeft className="w-4 h-4" />
                      Kembali
                    </button>
                  ) : (
                    <div />
                  )}
                  {step < totalSteps ? (
                    <button
                      onClick={() => setStep(step + 1)}
                      disabled={!canProceed()}
                      className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none"
                    >
                      Lanjutkan
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!canProceed()}
                      className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none"
                    >
                      <Send className="w-4 h-4" />
                      Kirim Permintaan
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-white/30">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neon-500/50" />
                Respons dalam 24 jam
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-neon-500/50" />
                Konsultasi dengan expert
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-neon-500/50" />
                100% gratis, tanpa komitmen
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
