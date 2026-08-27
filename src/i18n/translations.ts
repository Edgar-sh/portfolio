export type Language = 'EN_US' | 'PT_BR'

export interface HeaderTranslations {
  about: string
  technologies: string
  projects: string
  letsTalk: string
  languageLabel: string
}

export interface HeroTranslations {
  title: string
  mobileGreetingPrefix: string
  name: string
  tagline: string
  typewriterPhrases: string[]
}

export const headerTranslations: Record<Language, HeaderTranslations> = {
  EN_US: {
    about: 'About',
    technologies: 'Technologies',
    projects: 'Projects',
    letsTalk: "Let's talk",
    languageLabel: 'Language',
  },
  PT_BR: {
    about: 'Sobre',
    technologies: 'Tecnologias',
    projects: 'Projetos',
    letsTalk: 'Vamos conversar',
    languageLabel: 'Idioma',
  },
}

export const heroTranslations: Record<Language, HeroTranslations> = {
  EN_US: {
    title: 'Portfolio.',
    mobileGreetingPrefix: 'I’m ',
    name: 'Edgar Henrique',
    tagline: 'Crafting full-cycle digital products: from Figma UX design to robust code.',
    typewriterPhrases: [
      '// Front-End Developer',
      '// Back-End Developer',
      '// UI/UX Designer',
      '// btw i use arch',
      '// Linux is my passion',
    ],
  },
  PT_BR: {
    title: 'Portfólio.',
    mobileGreetingPrefix: 'Eu sou ',
    name: 'Edgar Henrique',
    tagline: 'Criando produtos digitais de ponta a ponta: do design UX no Figma ao código robusto.',
    typewriterPhrases: [
      '// Desenvolvedor Front-End',
      '// Desenvolvedor Back-End',
      '// Designer UI/UX',
      '// btw i use arch',
      '// Linux is my passion',
    ],
  },
}
