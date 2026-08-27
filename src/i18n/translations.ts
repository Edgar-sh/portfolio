export type Language = 'EN_US' | 'PT_BR'

export interface HeaderTranslations {
  about: string
  technologies: string
  projects: string
  letsTalk: string
  languageLabel: string
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
