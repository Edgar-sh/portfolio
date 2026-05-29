// ============================================================
// Navbar.tsx — Sticky navigation with scroll-aware styling
// ============================================================

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Tecnologias", href: "#tech" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-zinc-800/60 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-bold text-xl text-white tracking-tight hover:text-violet-400 transition-colors duration-300"
        >
          ER<span className="text-violet-500">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm text-zinc-400 hover:text-white rounded-lg transition-colors duration-200 hover:bg-zinc-800/50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium bg-violet-600/20 hover:bg-violet-600/40 text-violet-300 hover:text-violet-200 border border-violet-600/30 rounded-lg transition-all duration-300"
        >
          Fale Comigo
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-zinc-400"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-current rounded-full origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 bg-current rounded-full"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-current rounded-full origin-center"
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden border-t border-zinc-800/60 bg-slate-950/95 backdrop-blur-md"
      >
        <ul className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm text-zinc-400 hover:text-white rounded-lg transition-colors hover:bg-zinc-800/50"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center px-3 py-2.5 text-sm font-medium bg-violet-600/20 text-violet-300 border border-violet-600/30 rounded-lg"
            >
              Fale Comigo
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
