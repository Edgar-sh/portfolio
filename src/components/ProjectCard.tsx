// ============================================================
// ProjectCard.tsx — Flexible card for code & design projects
// ============================================================

import { motion } from "framer-motion";
import type { Project } from "../data/types";
import {
  GithubIcon,
  ExternalLinkIcon,
  StoreIcon,
  CodeBracketIcon,
  PaletteIcon,
  SparklesIcon,
} from "./Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// ── Color config per accent ──────────────────────────────────
const accentConfig = {
  violet: {
    border:   "border-violet-500/20 hover:border-violet-500/50",
    glow:     "group-hover:shadow-[0_0_60px_rgba(139,92,246,0.12)]",
    badge:    "bg-violet-500/10 text-violet-400 border-violet-500/20",
    tag:      "bg-zinc-800/60 text-violet-300/80 border-zinc-700/40",
    heading:  "group-hover:text-violet-300",
    dot:      "bg-violet-500",
    gradient: "from-violet-600/20 to-transparent",
    icon:     "bg-violet-500/10 text-violet-400",
  },
  pink: {
    border:   "border-pink-500/20 hover:border-pink-500/50",
    glow:     "group-hover:shadow-[0_0_60px_rgba(236,72,153,0.12)]",
    badge:    "bg-pink-500/10 text-pink-400 border-pink-500/20",
    tag:      "bg-zinc-800/60 text-pink-300/80 border-zinc-700/40",
    heading:  "group-hover:text-pink-300",
    dot:      "bg-pink-500",
    gradient: "from-pink-600/20 to-transparent",
    icon:     "bg-pink-500/10 text-pink-400",
  },
  sky: {
    border:   "border-sky-500/20 hover:border-sky-500/50",
    glow:     "group-hover:shadow-[0_0_60px_rgba(14,165,233,0.12)]",
    badge:    "bg-sky-500/10 text-sky-400 border-sky-500/20",
    tag:      "bg-zinc-800/60 text-sky-300/80 border-zinc-700/40",
    heading:  "group-hover:text-sky-300",
    dot:      "bg-sky-500",
    gradient: "from-sky-600/20 to-transparent",
    icon:     "bg-sky-500/10 text-sky-400",
  },
  emerald: {
    border:   "border-emerald-500/20 hover:border-emerald-500/50",
    glow:     "group-hover:shadow-[0_0_60px_rgba(16,185,129,0.12)]",
    badge:    "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    tag:      "bg-zinc-800/60 text-emerald-300/80 border-zinc-700/40",
    heading:  "group-hover:text-emerald-300",
    dot:      "bg-emerald-500",
    gradient: "from-emerald-600/20 to-transparent",
    icon:     "bg-emerald-500/10 text-emerald-400",
  },
};

// ── Project type → icon mapping ──────────────────────────────
function TypeIcon({ type, className }: { type: string; className?: string }) {
  if (type === "fullstack") return <CodeBracketIcon className={className} />;
  if (type === "design")    return <PaletteIcon className={className} />;
  return <SparklesIcon className={className} />;
}

// ── Link icon selector ───────────────────────────────────────
function LinkIcon({ icon }: { icon: string }) {
  if (icon === "github") return <GithubIcon className="w-3.5 h-3.5" />;
  if (icon === "store")  return <StoreIcon className="w-3.5 h-3.5" />;
  return <ExternalLinkIcon className="w-3.5 h-3.5" />;
}

// ── Main component ───────────────────────────────────────────
export function ProjectCard({ project, index }: ProjectCardProps) {
  const ac = accentConfig[project.accentColor];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative flex flex-col rounded-2xl border bg-slate-900/60 backdrop-blur-sm overflow-hidden transition-all duration-500 ${ac.border} ${ac.glow}`}
    >
      {/* ── Top gradient stripe ──────────────────────── */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${ac.gradient}`} />

      {/* ── Featured glow bg ─────────────────────────── */}
      {project.featured && (
        <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${ac.gradient} opacity-20 rounded-full blur-2xl pointer-events-none`} />
      )}

      <div className="relative flex flex-col h-full p-6 sm:p-7">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${ac.icon}`}>
            <TypeIcon type={project.type} className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-end">
            {project.featured && (
              <span className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border ${ac.badge}`}>
                Destaque
              </span>
            )}
            <span className={`text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border ${ac.badge}`}>
              {project.typeLabel}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-display font-bold text-white mb-3 transition-colors duration-300 leading-snug ${ac.heading}`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2.5 py-1 rounded-md border font-mono ${ac.tag}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group/link inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-300 ${ac.badge} hover:scale-[1.03]`}
            >
              <LinkIcon icon={link.icon} />
              {link.label}
              <ExternalLinkIcon className="w-3 h-3 opacity-50 transition-opacity group-hover/link:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
