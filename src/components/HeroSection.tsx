// ============================================================
// HeroSection.tsx
// ============================================================

import { motion } from "framer-motion";
import type { HeroData } from "../data/types";
import { ArrowRightIcon } from "./Icons";

interface HeroSectionProps {
  data: HeroData;
}

export function HeroSection({ data }: HeroSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background grid + gradient ───────────────── */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-pink-600/5 blur-[100px] rounded-full pointer-events-none" />

      {/* ── Decorative corner lines ───────────────────── */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-zinc-700/40" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-zinc-700/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-[1fr_auto] gap-16 items-center">
        {/* ── Text content ─────────────────────────────── */}
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Greeting */}
          <motion.p
            variants={item}
            className="text-sm font-mono text-violet-400 tracking-[0.2em] uppercase mb-4"
          >
            {data.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight mb-4"
          >
            {data.name.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          {/* Tagline */}
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-violet-500/50 to-transparent" />
            <p className="text-lg sm:text-xl text-zinc-300 font-medium">{data.tagline}</p>
          </motion.div>

          {/* Sub-tagline */}
          <motion.p
            variants={item}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10"
          >
            {data.subTagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href={data.ctaHref}
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:-translate-y-0.5"
            >
              {data.ctaLabel}
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={data.secondaryCtaHref}
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              {data.secondaryCtaLabel}
            </a>
          </motion.div>

          {/* Status badge */}
          <motion.div variants={item} className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Disponível para novas oportunidades
          </motion.div>
        </motion.div>

        {/* ── Profile image ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative">
            {/* Rotating border ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 p-0.5 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-slate-950" />
            </div>
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20 blur-2xl scale-110" />
            {/* Avatar container */}
            <div className="relative w-52 h-52 rounded-full border border-zinc-800 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
              {data.profileImage ? (
                <img
                  src={data.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-fuchsia-400">
                  {data.profileInitials}
                </span>
              )}
            </div>
            {/* Corner accent dots */}
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-violet-500" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-pink-500" />
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
