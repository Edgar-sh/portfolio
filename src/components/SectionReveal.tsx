// ============================================================
// SectionReveal.tsx — Reusable scroll-triggered reveal wrapper
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: SectionRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 40 : 0,
    x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  );
}

// ── Section label chip ─────────────────────────────────────
interface SectionLabelProps {
  children: React.ReactNode;
  color?: "violet" | "pink" | "sky" | "emerald";
}

const labelColors = {
  violet: "text-violet-400 border-violet-400/30 bg-violet-400/5",
  pink:   "text-pink-400 border-pink-400/30 bg-pink-400/5",
  sky:    "text-sky-400 border-sky-400/30 bg-sky-400/5",
  emerald:"text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
};

export function SectionLabel({ children, color = "violet" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono tracking-widest uppercase ${labelColors[color]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
