// ============================================================
// types.ts — All TypeScript interfaces for portfolio data
// ============================================================

export interface HeroData {
  greeting: string;
  name: string;
  tagline: string;
  subTagline: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  profileImage: string | null;
  profileInitials: string;
}

export interface AboutData {
  sectionTitle: string;
  paragraphs: string[];
  facts: { label: string; value: string }[];
}

export type TechColor = "violet" | "sky" | "pink" | "emerald";

export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  id: string;
  label: string;
  color: TechColor;
  items: TechItem[];
}

export type ProjectType = "fullstack" | "design" | "brand";
export type AccentColor = "violet" | "sky" | "pink" | "emerald";
export type LinkIcon = "github" | "store" | "web" | "figma" | "mail";

export interface ProjectLink {
  label: string;
  href: string;
  icon: LinkIcon;
}

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  typeLabel: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  featured: boolean;
  accentColor: AccentColor;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter";
}

export interface ContactData {
  sectionTitle: string;
  description: string;
  email: string;
  resumeUrl: string;
  resumeLabel: string;
}
