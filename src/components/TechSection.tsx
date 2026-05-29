// ============================================================
// TechSection.tsx — Data-driven technology grid
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { TechCategory } from "../data/types";
import { SectionReveal, SectionLabel } from "./SectionReveal";

interface TechSectionProps {
  categories: TechCategory[];
}

const colorMap = {
  violet: {
    tab:      "border-violet-500 text-violet-300 bg-violet-500/10",
    tabInact: "border-zinc-800 text-zinc-500 hover:border-violet-500/40 hover:text-violet-400",
    dot:      "bg-violet-500",
    card:     "border-violet-500/20 bg-violet-500/5 hover:border-violet-500/40 hover:bg-violet-500/10",
    text:     "text-violet-300",
  },
  sky: {
    tab:      "border-sky-500 text-sky-300 bg-sky-500/10",
    tabInact: "border-zinc-800 text-zinc-500 hover:border-sky-500/40 hover:text-sky-400",
    dot:      "bg-sky-500",
    card:     "border-sky-500/20 bg-sky-500/5 hover:border-sky-500/40 hover:bg-sky-500/10",
    text:     "text-sky-300",
  },
  pink: {
    tab:      "border-pink-500 text-pink-300 bg-pink-500/10",
    tabInact: "border-zinc-800 text-zinc-500 hover:border-pink-500/40 hover:text-pink-400",
    dot:      "bg-pink-500",
    card:     "border-pink-500/20 bg-pink-500/5 hover:border-pink-500/40 hover:bg-pink-500/10",
    text:     "text-pink-300",
  },
  emerald: {
    tab:      "border-emerald-500 text-emerald-300 bg-emerald-500/10",
    tabInact: "border-zinc-800 text-zinc-500 hover:border-emerald-500/40 hover:text-emerald-400",
    dot:      "bg-emerald-500",
    card:     "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 hover:bg-emerald-500/10",
    text:     "text-emerald-300",
  },
};

export function TechSection({ categories }: TechSectionProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");

  const active = categories.find((c) => c.id === activeId) ?? categories[0];
  const colors = colorMap[active.color];

  return (
    <section id="tech" className="py-28 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-sky-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <SectionReveal className="mb-12 text-center">
          <SectionLabel color="sky">Stack Técnica</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mt-4">
            Tecnologias
          </h2>
          <p className="text-zinc-500 mt-3 text-base max-w-lg mx-auto">
            Ferramentas e linguagens que compõem meu arsenal diário, do servidor ao pixel.
          </p>
        </SectionReveal>

        {/* Category tabs */}
        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = cat.id === activeId;
              const c = colorMap[cat.color];
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={`relative px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                    isActive ? c.tab : c.tabInact
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-bg"
                      className={`absolute inset-0 rounded-full ${c.dot} opacity-10`}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="relative flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </SectionReveal>

        {/* Items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
          >
            {active.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`group flex items-center gap-3 p-4 rounded-xl border cursor-default transition-all duration-300 ${colors.card}`}
              >
                <span className="text-xl leading-none select-none" aria-hidden>
                  {item.icon}
                </span>
                <span className={`text-sm font-medium transition-colors duration-200 ${colors.text} group-hover:text-white`}>
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
