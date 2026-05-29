// ============================================================
// ContactSection.tsx — Contact + Footer
// ============================================================

import { motion } from "framer-motion";
import type { ContactData, SocialLink } from "../data/types";
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from "./Icons";
import { SectionReveal, SectionLabel } from "./SectionReveal";

interface ContactSectionProps {
  data: ContactData;
  socialLinks: SocialLink[];
}

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "github")   return <GithubIcon className="w-5 h-5" />;
  if (icon === "linkedin") return <LinkedinIcon className="w-5 h-5" />;
  return <MailIcon className="w-5 h-5" />;
}

export function ContactSection({ data, socialLinks }: ContactSectionProps) {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-violet-600/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Main CTA area */}
        <div className="relative text-center max-w-2xl mx-auto mb-20">
          <SectionReveal>
            <SectionLabel color="emerald">Contato</SectionLabel>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mt-4 leading-tight">
              {data.sectionTitle}
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="text-zinc-400 text-base sm:text-lg mt-4 mb-8 leading-relaxed">
              {data.description}
            </p>
          </SectionReveal>

          <SectionReveal delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Email CTA */}
            <a
              href={`mailto:${data.email}`}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:-translate-y-0.5"
            >
              <MailIcon className="w-4 h-4" />
              {data.email}
            </a>

            {/* CV Download */}
            <a
              href={data.resumeUrl}
              className="group inline-flex items-center gap-2 px-6 py-3.5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              download
            >
              <DownloadIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              {data.resumeLabel}
            </a>
          </SectionReveal>

          {/* Social links */}
          <SectionReveal delay={0.3} className="flex items-center justify-center gap-4 mt-10">
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                target={link.icon !== "mail" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-colors duration-300"
              >
                <SocialIcon icon={link.icon} />
              </motion.a>
            ))}
          </SectionReveal>
        </div>

        {/* Footer divider */}
        <div className="border-t border-zinc-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <p className="font-mono tracking-wide">
            © {new Date().getFullYear()} Randerson Ranniery. Todos os direitos reservados.
          </p>
          <p className="font-mono tracking-wide">
            Feito com{" "}
            <span className="text-violet-500">React</span> ·{" "}
            <span className="text-sky-500">Tailwind CSS</span> ·{" "}
            <span className="text-pink-500">Framer Motion</span>
          </p>
        </div>
      </div>
    </section>
  );
}
