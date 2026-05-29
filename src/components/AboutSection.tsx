// ============================================================
// AboutSection.tsx
// ============================================================

import type { AboutData } from "../data/types";
import { SectionReveal, SectionLabel } from "./SectionReveal";

interface AboutSectionProps {
  data: AboutData;
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about" className="py-28 relative">
      {/* Subtle background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">

          {/* ── Left: label + heading ─────────────────── */}
          <SectionReveal direction="left">
            <SectionLabel color="violet">Quem sou eu</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mt-4 mb-0 leading-tight">
              {data.sectionTitle}
            </h2>
            {/* Decorative divider */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            </div>

            {/* Facts grid */}
            <div className="mt-8 space-y-3">
              {data.facts.map((fact, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-lg border border-zinc-800/60 bg-slate-900/40 backdrop-blur-sm"
                >
                  <span className="text-xs font-mono text-zinc-500 w-20 shrink-0 uppercase tracking-wider">
                    {fact.label}
                  </span>
                  <div className="w-px h-4 bg-zinc-700" />
                  <span className="text-sm text-zinc-300 font-medium">{fact.value}</span>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* ── Right: paragraphs ─────────────────────── */}
          <div className="space-y-5">
            {data.paragraphs.map((para, i) => (
              <SectionReveal key={i} delay={i * 0.15} direction="up">
                <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                  {i === 0 ? (
                    <>
                      <span className="text-zinc-200 font-medium">
                        {para.slice(0, para.indexOf(" ", 40))}
                      </span>
                      {para.slice(para.indexOf(" ", 40))}
                    </>
                  ) : (
                    para
                  )}
                </p>
              </SectionReveal>
            ))}

            {/* Quote accent */}
            <SectionReveal delay={0.4}>
              <blockquote className="mt-6 pl-4 border-l-2 border-violet-500/50">
                <p className="text-zinc-500 text-sm italic font-light">
                  "O melhor software nasce quando rigor de engenharia encontra empatia de design."
                </p>
              </blockquote>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
