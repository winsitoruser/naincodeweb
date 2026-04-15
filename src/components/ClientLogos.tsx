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
    <div className="relative overflow-hidden py-4" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
      <motion.div
        className="flex gap-8 items-center whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...clients, ...clients].map((client, i) => (
          <div
            key={`${client}-${i}`}
            className="flex-shrink-0 px-5 py-2.5 border border-white/[0.08] rounded-lg bg-white/[0.03] backdrop-blur-sm"
          >
            <span className="text-xs font-semibold text-white/30 tracking-wider uppercase font-mono">
              {client}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
