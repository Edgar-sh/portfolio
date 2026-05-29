// ============================================================
// ProjectsSection.tsx — Maps project data to ProjectCard grid
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../data/types";
import { ProjectCard } from "./ProjectCard";
import { SectionReveal, SectionLabel } from "./SectionReveal";

interface ProjectsSectionProps {
  projects: Project[];
}

// Derive unique types from data automatically (no manual config needed)
function getTypes(projects: Project[]) {
  const seen = new Set<string>();
  const types: { type: string; label: string }[] = [{ type: "all", label: "Todos" }];
  for (const p of projects) {
    if (!seen.has(p.type)) {
      seen.add(p.type);
      types.push({ type: p.type, label: p.typeLabel });
    }
  }
  return types;
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [filter, setFilter] = useState("all");
  const types = getTypes(projects);

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[400px] bg-fuchsia-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <SectionReveal className="mb-12 text-center">
          <SectionLabel color="pink">Portfólio</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mt-4">
            Projetos Selecionados
          </h2>
          <p className="text-zinc-500 mt-3 text-base max-w-lg mx-auto">
            Uma seleção dos trabalhos que melhor refletem minha capacidade de criar soluções completas.
          </p>
        </SectionReveal>

        {/* Filter chips */}
        <SectionReveal delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {types.map(({ type, label }) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === type
                  ? "border-pink-500/50 text-pink-300 bg-pink-500/10"
                  : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
              }`}
            >
              {filter === type && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-pink-500/10"
                  transition={{ duration: 0.25 }}
                />
              )}
              <span className="relative">{label}</span>
            </button>
          ))}
        </SectionReveal>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
