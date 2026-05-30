// ============================================================
// portfolioData.ts — Single Source of Truth for all UI content
// To add a project, skill, or link: edit ONLY this file.
// ============================================================

import type {
  HeroData,
  AboutData,
  TechCategory,
  Project,
  SocialLink,
  ContactData,
} from "./types";

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
export const heroData: HeroData = {
  greeting: "Olá, eu sou",
  name: "Edgar Henrique",
  tagline: "Full Stack Developer & UI/UX Designer",
  subTagline:
    "Engenheiro de software com raízes no ecossistema Java e olhar afiado para interfaces que encantam.",
  ctaLabel: "Ver Projetos",
  ctaHref: "#projects",
  secondaryCtaLabel: "Sobre mim",
  secondaryCtaHref: "#about",
  profileImage: "./profile.png",
  profileInitials: "ER",
};

// ─────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────
export const aboutData: AboutData = {
  sectionTitle: "Sobre Mim",
  paragraphs: [
    "Sou estudante de Sistemas de Informação com uma trajetória construída na interseção entre engenharia de software e design de produto. Minha base técnica está sólida no ecossistema Java — do backend com Spring Boot e Javalin às integrações de sistemas — enquanto minha sensibilidade de design se manifesta em interfaces funcionais e experiências de usuário cuidadosamente pensadas.",
    "Acredito que o melhor software nasce quando o rigor da engenharia se encontra com a empatia do design. Essa dupla capacidade me permite transitar com naturalidade entre arquitetar APIs robustas e prototipar fluxos no Figma, entregando soluções completas — do servidor ao pixel.",
  ],
  facts: [
    { label: "Formação", value: "Sistemas de Informação" },
    { label: "Foco", value: "Full Stack + UI/UX" },
    { label: "Stack principal", value: "Java · React · Figma" },
  ],
};

// ─────────────────────────────────────────────
// TECHNOLOGIES
// Add new categories or icons here freely.
// ─────────────────────────────────────────────
export const techCategories: TechCategory[] = [
  {
    id: "backend",
    label: "Backend",
    color: "violet",
    items: [
      { name: "Java", icon: "☕" },
      { name: "Spring Boot", icon: "🍃" },
      { name: "Javalin", icon: "⚡" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    color: "sky",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "𝚃𝚂" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Framer Motion", icon: "🎞️" },
      { name: "HTML5 / CSS3", icon: "🌐" },
      { name: "JavaScript", icon: "𝐉𝐒" },
    ],
  },
  {
    id: "design",
    label: "Design & Produto",
    color: "pink",
    items: [
      { name: "Figma", icon: "🎨" },
      { name: "UI/UX Design", icon: "✦" },
      { name: "Prototipação", icon: "📐" },
      { name: "Brand Design", icon: "💎" },
    ],
  },
  {
    id: "tools",
    label: "Ferramentas",
    color: "emerald",
    items: [
      { name: "Git & GitHub", icon: "🐙" },
      { name: "Thymeleaf", icon: "🍃" },
      { name: "Maven", icon: "📦" },
      { name: "VS Code", icon: "📝" },
    ],
  },
];

// ─────────────────────────────────────────────
// PROJECTS
// Types: "fullstack" | "design" | "brand"
// Add a new object to this array to add a project.
// ─────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "stackberry",
    title: "StackBerry",
    type: "fullstack",
    typeLabel: "Full Stack Development",
    description:
      "Sistema web completo para digitalização de pedidos e gerenciamento operacional interno de açaiterias. Arquitetura MVC com backend Java, templates server-side e interface funcional orientada ao fluxo de trabalho da operação.",
    stack: ["Java", "Javalin", "Thymeleaf", "HTML5/CSS3", "JavaScript"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/randersonranniery7/StackBerry-sistema-de-gerenciamento-para-acaiterias",
        icon: "github",
      },
    ],
    featured: true,
    accentColor: "violet",
  },
  {
    id: "minhas-compras",
    title: "Minhas Compras",
    type: "design",
    typeLabel: "UI/UX & Product Design",
    description:
      "Prototipação de telas do aplicativo e do site oficial no Figma, além do design estratégico das screenshots oficiais publicadas na Google Play Store. Projeto com impacto direto na conversão e retenção de usuários.",
    stack: ["Figma", "UI/UX Design", "Prototipação", "Play Store Assets"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.devemanoel.myshoppinglist",
        icon: "store",
      },
      {
        label: "Website",
        href: "https://minhascomprasapp.com/",
        icon: "web",
      },
    ],
    featured: true,
    accentColor: "pink",
  },
  {
    id: "smart-protector",
    title: "Smart Protector Launcher",
    type: "brand",
    typeLabel: "Brand & UI Design",
    description:
      "Criação do logotipo oficial para aplicativo publicado na Google Play Store. Trabalho de branding que combina apelo visual com comunicação clara da proposta de valor do produto.",
    stack: ["Figma", "Brand Design", "Identidade Visual", "Logotipo"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.emanoeldev.smartprotectorlauncher",
        icon: "store",
      },
    ],
    featured: false,
    accentColor: "sky",
  },
];

// ─────────────────────────────────────────────
// CONTACT / FOOTER
// ─────────────────────────────────────────────
export const contactData: ContactData = {
  sectionTitle: "Vamos Conversar",
  description:
    "Aberto a oportunidades, colaborações e conversas sobre tecnologia e design. Minha caixa de entrada está sempre disponível.",
  email: "edgar.silva@dcx.ufpb.br",
  resumeUrl: "#", // Replace with actual CV URL when available
  resumeLabel: "Download Currículo",
};

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Edgar-sh",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/edgar-henrique-b34962320/?skipRedirect=true",
    icon: "linkedin",
  },
  {
    id: "email",
    label: "E-mail",
    href: "mailto:edgar.silva@dcx.ufpb.br",
    icon: "mail",
  },
];
