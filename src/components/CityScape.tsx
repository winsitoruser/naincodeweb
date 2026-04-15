"use client";

import { useEffect, useRef } from "react";

interface Building {
  x: number;
  width: number;
  height: number;
  windows: { wx: number; wy: number; lit: boolean; blinkSpeed: number }[];
  antennaHeight: number;
  hasAntenna: boolean;
  hasCrane: boolean;
  glowColor: string;
}

export default function CityScape() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const buildingsRef = useRef<Building[]>([]);
  const starsRef = useRef<{ x: number; y: number; size: number; speed: number; opacity: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
      generateCity();
    };

    const generateCity = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const buildings: Building[] = [];

      // Generate buildings
      let currentX = -20;
      while (currentX < w + 20) {
        const bw = 20 + Math.random() * 50;
        const bh = 60 + Math.random() * (h * 0.55);
        const hasAntenna = Math.random() > 0.5;
        const hasCrane = Math.random() > 0.85;
        const antennaHeight = hasAntenna ? 10 + Math.random() * 30 : 0;

        // Generate windows
        const windows: Building["windows"] = [];
        const cols = Math.floor(bw / 8);
        const rows = Math.floor(bh / 12);
        for (let c = 0; c < cols; c++) {
          for (let r = 0; r < rows; r++) {
            windows.push({
              wx: 3 + c * (bw / cols),
              wy: 6 + r * 12,
              lit: Math.random() > 0.35,
              blinkSpeed: 2000 + Math.random() * 8000,
            });
          }
        }

        const glowColors = [
          "rgba(0, 220, 130, 0.6)",
          "rgba(0, 180, 255, 0.6)",
          "rgba(0, 220, 130, 0.4)",
          "rgba(100, 200, 255, 0.5)",
        ];

        buildings.push({
          x: currentX,
          width: bw,
          height: bh,
          windows,
          antennaHeight,
          hasAntenna,
          hasCrane,
          glowColor: glowColors[Math.floor(Math.random() * glowColors.length)],
        });

        currentX += bw + 2 + Math.random() * 6;
      }

      buildingsRef.current = buildings;

      // Generate stars
      starsRef.current = Array.from({ length: 80 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h * 0.4,
        size: Math.random() * 1.5 + 0.3,
        speed: 1000 + Math.random() * 4000,
        opacity: Math.random() * 0.6 + 0.2,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    let time = 0;
    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      time += 16;

      // Sky gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
      skyGrad.addColorStop(0, "rgba(2, 5, 16, 0.9)");
      skyGrad.addColorStop(0.4, "rgba(4, 10, 26, 0.7)");
      skyGrad.addColorStop(0.7, "rgba(6, 15, 39, 0.5)");
      skyGrad.addColorStop(1, "rgba(0, 220, 130, 0.03)");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h);

      // Stars with twinkle
      starsRef.current.forEach((star) => {
        const twinkle = 0.3 + 0.7 * Math.abs(Math.sin(time / star.speed));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 230, 255, ${star.opacity * twinkle})`;
        ctx.fill();
      });

      // Shooting star occasionally
      if (Math.sin(time / 5000) > 0.98) {
        const sx = (time * 0.3) % w;
        ctx.beginPath();
        ctx.moveTo(sx, 20);
        ctx.lineTo(sx - 40, 50);
        ctx.strokeStyle = "rgba(0, 220, 130, 0.4)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // City glow at bottom
      const cityGlow = ctx.createRadialGradient(w / 2, h, 0, w / 2, h, h * 0.7);
      cityGlow.addColorStop(0, "rgba(0, 220, 130, 0.06)");
      cityGlow.addColorStop(0.5, "rgba(0, 180, 255, 0.02)");
      cityGlow.addColorStop(1, "transparent");
      ctx.fillStyle = cityGlow;
      ctx.fillRect(0, 0, w, h);

      // Draw buildings (back layer - darker, smaller)
      buildingsRef.current.forEach((b) => {
        const baseY = h;
        const topY = baseY - b.height;

        // Building body
        const bGrad = ctx.createLinearGradient(b.x, topY, b.x + b.width, baseY);
        bGrad.addColorStop(0, "rgba(8, 18, 40, 0.95)");
        bGrad.addColorStop(0.5, "rgba(6, 14, 32, 0.98)");
        bGrad.addColorStop(1, "rgba(4, 10, 24, 1)");
        ctx.fillStyle = bGrad;
        ctx.fillRect(b.x, topY, b.width, b.height);

        // Building edge highlights
        ctx.strokeStyle = "rgba(0, 220, 130, 0.08)";
        ctx.lineWidth = 0.5;
        ctx.strokeRect(b.x, topY, b.width, b.height);

        // Left edge glow
        const edgeGrad = ctx.createLinearGradient(b.x, topY, b.x + 3, topY);
        edgeGrad.addColorStop(0, "rgba(0, 220, 130, 0.1)");
        edgeGrad.addColorStop(1, "transparent");
        ctx.fillStyle = edgeGrad;
        ctx.fillRect(b.x, topY, 3, b.height);

        // Windows
        b.windows.forEach((win) => {
          const blinkPhase = Math.sin(time / win.blinkSpeed + win.wx * 10 + win.wy * 5);
          const isLit = win.lit ? blinkPhase > -0.7 : blinkPhase > 0.85;

          if (isLit) {
            // Window glow
            const glowSize = 2;
            ctx.shadowColor = b.glowColor;
            ctx.shadowBlur = 4;
            ctx.fillStyle = b.glowColor;
            ctx.fillRect(b.x + win.wx - 0.5, topY + win.wy - 0.5, 5 + glowSize, 4 + glowSize);
            ctx.shadowBlur = 0;

            // Window
            const winGrad = ctx.createLinearGradient(
              b.x + win.wx, topY + win.wy,
              b.x + win.wx + 5, topY + win.wy + 4
            );
            winGrad.addColorStop(0, "rgba(200, 240, 255, 0.8)");
            winGrad.addColorStop(1, b.glowColor);
            ctx.fillStyle = winGrad;
            ctx.fillRect(b.x + win.wx, topY + win.wy, 5, 4);
          } else {
            ctx.fillStyle = "rgba(10, 20, 40, 0.5)";
            ctx.fillRect(b.x + win.wx, topY + win.wy, 5, 4);
          }
        });

        // Antenna with blinking light
        if (b.hasAntenna) {
          const antennaX = b.x + b.width / 2;
          const antennaTop = topY - b.antennaHeight;

          ctx.beginPath();
          ctx.moveTo(antennaX, topY);
          ctx.lineTo(antennaX, antennaTop);
          ctx.strokeStyle = "rgba(100, 120, 140, 0.5)";
          ctx.lineWidth = 1;
          ctx.stroke();

          // Blinking red light
          const blink = Math.sin(time / 800) > 0;
          if (blink) {
            ctx.beginPath();
            ctx.arc(antennaX, antennaTop, 2, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 50, 50, 0.9)";
            ctx.shadowColor = "rgba(255, 50, 50, 0.8)";
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }

        // Rooftop glow line
        const roofPulse = 0.3 + 0.7 * Math.abs(Math.sin(time / 3000 + b.x * 0.01));
        ctx.beginPath();
        ctx.moveTo(b.x, topY);
        ctx.lineTo(b.x + b.width, topY);
        ctx.strokeStyle = `rgba(0, 220, 130, ${0.15 * roofPulse})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Fog / mist layer at bottom
      const fogGrad = ctx.createLinearGradient(0, h - 40, 0, h);
      fogGrad.addColorStop(0, "transparent");
      fogGrad.addColorStop(1, "rgba(4, 10, 26, 0.8)");
      ctx.fillStyle = fogGrad;
      ctx.fillRect(0, h - 40, w, 40);

      // Scan line effect (subtle)
      const scanY = (time * 0.03) % h;
      ctx.fillStyle = "rgba(0, 220, 130, 0.015)";
      ctx.fillRect(0, scanY, w, 2);

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1, opacity: 0.45 }}
    />
  );
}
