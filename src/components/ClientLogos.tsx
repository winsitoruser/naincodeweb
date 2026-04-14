"use client";

import { motion } from "framer-motion";

const clients = [
  "TechVenture",
  "RetailMax",
  "GrowthLab",
  "FinanceHub",
  "HealthPlus",
  "EduConnect",
  "LogisTech",
  "MediaPro",
  "BuildCraft",
  "DataSync",
  "CloudNine",
  "SmartPay",
];

export default function ClientLogos() {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-950 to-transparent z-10" />

      <motion.div
        className="flex gap-12 items-center whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...clients, ...clients].map((client, i) => (
          <div
            key={`${client}-${i}`}
            className="flex-shrink-0 px-6 py-3 border border-white/[0.06] rounded-xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-neon-500/20 transition-all duration-300 cursor-default group"
          >
            <span className="text-sm font-semibold text-white/25 group-hover:text-white/50 transition-colors tracking-wider uppercase font-mono">
              {client}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
