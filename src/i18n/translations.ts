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

export interface AboutTranslations {
  title: string
  bio: string[]
  educationLabel: string
  educationValue: string
  focusLabel: string
  focusValue: string
  stackLabel: string
  stackValue: string
  availability: string
  letsConnect: string
  email: string
  phone: string
}

export interface TechnologiesTranslations {
  title: string
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

export const aboutTranslations: Record<Language, AboutTranslations> = {
  EN_US: {
    title: 'About',
    bio: [
      "I'm a software developer and UI/UX designer dedicated to building end-to-end digital solutions that balance refined usability with solid engineering.",
      'Currently pursuing a B.S. in Information Systems at UFPB, I work across the stack—from prototyping intuitive user experiences in Figma to developing robust backend architectures with Java and Spring Boot, as well as responsive frontends with React and TypeScript.',
      'Passionate about Linux and open-source workflows, I strive to turn complex problems into clean, functional, and user-centric software.',
    ],
    educationLabel: 'Education|',
    educationValue: 'Information Systems',
    focusLabel: 'Focus|',
    focusValue: 'Full Stack + UI/UX',
    stackLabel: 'Main Stack|',
    stackValue: 'Java * React * Figma',
    availability: 'Available for work',
    letsConnect: "Let's Connect",
    email: 'Edgar.silva@dcx.ufpb.br',
    phone: '(XX) X XXXX-XXXX',
  },
  PT_BR: {
    title: 'Sobre',
    bio: [
      'Sou desenvolvedor de software e UI/UX designer dedicado a construir soluções digitais de ponta a ponta que equilibram usabilidade refinada com engenharia sólida.',
      'Atualmente cursando Bacharelado em Sistemas de Informação na UFPB, atuo em toda a stack — desde a prototipagem de experiências intuitivas no Figma até o desenvolvimento de arquiteturas backend robustas com Java e Spring Boot, além de frontends responsivos com React e TypeScript.',
      'Apaixonado por Linux e fluxos de trabalho open-source, busco transformar problemas complexos em softwares limpos, funcionais e centrados no usuário.',
    ],
    educationLabel: 'Formação|',
    educationValue: 'Sistemas de Informação',
    focusLabel: 'Foco|',
    focusValue: 'Full Stack + UI/UX',
    stackLabel: 'Stack Principal|',
    stackValue: 'Java * React * Figma',
    availability: 'Disponível para trabalho',
    letsConnect: 'Vamos Conectar',
    email: 'Edgar.silva@dcx.ufpb.br',
    phone: '(XX) X XXXX-XXXX',
  },
}

export const technologiesTranslations: Record<Language, TechnologiesTranslations> = {
  EN_US: {
    title: 'Technologies',
  },
  PT_BR: {
    title: 'Tecnologias',
  },
}
