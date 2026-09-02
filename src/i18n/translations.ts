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
  subtitle: string
}

export interface FooterTranslations {
  copyright: string
}

export interface ProjectTag {
  name: string
  icon?: 'java' | 'javalin' | 'thymeleaf' | 'javascript' | 'figma' | 'gimp' | 'react' | 'typescript'
}

export type ProjectCategory = 'all' | 'fullstack' | 'uiux' | 'graphic'

export interface ProjectLink {
  type: 'github' | 'website' | 'playstore'
  label: string
  url: string
}

export interface ProjectItem {
  id: string
  title: string
  categories: ProjectCategory[]
  description: string
  image: string
  tags: ProjectTag[]
  links: ProjectLink[]
}

export interface FilterButton {
  key: ProjectCategory
  label: string
}

export interface ProjectsTranslations {
  title: string
  subtitle: string
  emptyMessage: string
  filters: FilterButton[]
  projects: ProjectItem[]
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
    subtitle: '// Tools and languages that power my daily workflow.',
  },
  PT_BR: {
    title: 'Tecnologias',
    subtitle: '// Ferramentas e linguagens que impulsionam meu fluxo diário de desenvolvimento.',
  },
}

export const projectsTranslations: Record<Language, ProjectsTranslations> = {
  EN_US: {
    title: 'Projects',
    subtitle: '// Featured systems, applications, and digital products.',
    emptyMessage: '// No projects found in this category.',
    filters: [
      { key: 'all', label: 'All' },
      { key: 'fullstack', label: 'Fullstack' },
      { key: 'uiux', label: 'UI/UX Designer' },
      { key: 'graphic', label: 'Graphic Design' },
    ],
    projects: [
      {
        id: 'portfolio',
        title: 'Portfolio',
        categories: ['all', 'uiux'],
        description:
          'Personal portfolio built with React and TypeScript, using Figma MCP for pixel-perfect design-to-code fidelity and bilingual support.',
        image: 'portfolio',
        tags: [
          { name: 'React', icon: 'react' },
          { name: 'TypeScript', icon: 'typescript' },
          { name: 'Figma', icon: 'figma' },
        ],
        links: [
          {
            type: 'github',
            label: 'Github',
            url: 'https://github.com/Edgar-sh/portfolio',
          },
          {
            type: 'website',
            label: 'Website',
            url: 'https://edgardev.codes',
          },
        ],
      },
      {
        id: 'stackberry',
        title: 'StackBerry',
        categories: ['all', 'fullstack'],
        description:
          'Complete web system for order digitalization and internal operational management of açaí shops. MVC architecture with Java backend, server-side templates, and a functional workflow-oriented interface.',
        image: 'stackberry',
        tags: [
          { name: 'Java', icon: 'java' },
          { name: 'Javalin', icon: 'javalin' },
          { name: 'Thymeleaf', icon: 'thymeleaf' },
          { name: 'JavaScript', icon: 'javascript' },
        ],
        links: [
          {
            type: 'github',
            label: 'Github',
            url: 'https://github.com/randersonranniery7/StackBerry-sistema-de-gerenciamento-para-acaiterias',
          },
        ],
      },
      {
        id: 'minhas-compras',
        title: 'Minhas Compras',
        categories: ['all', 'uiux'],
        description:
          'Prototyped core web and mobile screens in Figma and strategically designed official showcase screenshots for the Google Play Store.',
        image: 'minhas-compras',
        tags: [
          { name: 'Figma', icon: 'figma' },
          { name: 'GIMP', icon: 'gimp' },
        ],
        links: [
          {
            type: 'website',
            label: 'Website',
            url: 'https://minhascomprasapp.com/',
          },
          {
            type: 'playstore',
            label: 'Play Store',
            url: 'https://play.google.com/store/apps/details?id=com.devemanoel.myshoppinglist',
          },
        ],
      },
      {
        id: 'brio-cafeteria',
        title: 'Brio Cafetéria',
        categories: ['all', 'uiux'],
        description:
          'Mobile-first digital menu prototyping for Brio Cafeteria, featuring intuitive navigation, dietary restriction filters, and real-time item customization.',
        image: 'brio-cafeteria',
        tags: [
          { name: 'Figma', icon: 'figma' },
          { name: 'GIMP', icon: 'gimp' },
        ],
        links: [],
      },
      {
        id: 'camisa-si',
        title: 'Class T-Shirt — SI UFPB 2024.1',
        categories: ['all', 'graphic'],
        description:
          'Official t-shirt design and visual identity for the Information Systems degree at UFPB (Class of 2024.1). Graphic concept development blending academic technology identity with modern aesthetics for apparel printing.',
        image: 'camisa-si',
        tags: [
          { name: 'GIMP', icon: 'gimp' },
        ],
        links: [],
      },
      {
        id: 'smart-protector-launcher',
        title: 'SmartProtectorLauncher',
        categories: ['all', 'graphic'],
        description:
          'Created the official mobile app logo and icon, optimized for brand recognition and visibility on the Google Play Store.',
        image: 'smart-protector-launcher',
        tags: [
          { name: 'Figma', icon: 'figma' },
        ],
        links: [
          {
            type: 'playstore',
            label: 'Play Store',
            url: 'https://play.google.com/store/apps/details?id=com.emanoeldev.smartprotectorlauncher',
          },
        ],
      },
    ],
  },
  PT_BR: {
    title: 'Projetos',
    subtitle: '// Sistemas em destaque, aplicações e produtos digitais.',
    emptyMessage: '// Nenhum projeto encontrado nesta categoria.',
    filters: [
      { key: 'all', label: 'Todos' },
      { key: 'fullstack', label: 'Fullstack' },
      { key: 'uiux', label: 'UI/UX Designer' },
      { key: 'graphic', label: 'Design Gráfico' },
    ],
    projects: [
      {
        id: 'portfolio',
        title: 'Portfólio',
        categories: ['all', 'uiux'],
        description:
          'Portfólio pessoal desenvolvido com React e TypeScript, utilizando o MCP do Figma para fidelidade pixel-perfect e suporte bilíngue.',
        image: 'portfolio',
        tags: [
          { name: 'React', icon: 'react' },
          { name: 'TypeScript', icon: 'typescript' },
          { name: 'Figma', icon: 'figma' },
        ],
        links: [
          {
            type: 'github',
            label: 'Github',
            url: 'https://github.com/Edgar-sh/portfolio',
          },
          {
            type: 'website',
            label: 'Website',
            url: 'https://edgardev.codes',
          },
        ],
      },
      {
        id: 'stackberry',
        title: 'StackBerry',
        categories: ['all', 'fullstack'],
        description:
          'Sistema web completo para digitalização de pedidos e gerenciamento operacional interno de açaiterias. Arquitetura MVC com backend Java, templates server-side e interface funcional orientada ao fluxo de trabalho da operação.',
        image: 'stackberry',
        tags: [
          { name: 'Java', icon: 'java' },
          { name: 'Javalin', icon: 'javalin' },
          { name: 'Thymeleaf', icon: 'thymeleaf' },
          { name: 'JavaScript', icon: 'javascript' },
        ],
        links: [
          {
            type: 'github',
            label: 'Github',
            url: 'https://github.com/randersonranniery7/StackBerry-sistema-de-gerenciamento-para-acaiterias',
          },
        ],
      },
      {
        id: 'minhas-compras',
        title: 'Minhas Compras',
        categories: ['all', 'uiux'],
        description:
          'Prototipação de telas do aplicativo e do site oficial no Figma, além do design estratégico das screenshots oficiais publicadas na Google Play Store.',
        image: 'minhas-compras',
        tags: [
          { name: 'Figma', icon: 'figma' },
          { name: 'GIMP', icon: 'gimp' },
        ],
        links: [
          {
            type: 'website',
            label: 'Website',
            url: 'https://minhascomprasapp.com/',
          },
          {
            type: 'playstore',
            label: 'Play Store',
            url: 'https://play.google.com/store/apps/details?id=com.devemanoel.myshoppinglist',
          },
        ],
      },
      {
        id: 'brio-cafeteria',
        title: 'Brio Cafetéria',
        categories: ['all', 'uiux'],
        description:
          'Prototipação de cardápio digital mobile-first para a Brio Cafetéria, com navegação intuitiva, filtros de restrições alimentares e personalização de itens em tempo real.',
        image: 'brio-cafeteria',
        tags: [
          { name: 'Figma', icon: 'figma' },
          { name: 'GIMP', icon: 'gimp' },
        ],
        links: [],
      },
      {
        id: 'camisa-si',
        title: 'Camisa de Turma — SI UFPB 2024.1',
        categories: ['all', 'graphic'],
        description:
          'Design oficial e identidade visual da camisa da turma de Sistemas de Informação da UFPB (Turma 2024.1). Desenvolvimento de conceito gráfico unindo identidade acadêmica de tecnologia e estética moderna para estamparia.',
        image: 'camisa-si',
        tags: [
          { name: 'GIMP', icon: 'gimp' },
        ],
        links: [],
      },
      {
        id: 'smart-protector-launcher',
        title: 'SmartProtectorLauncher',
        categories: ['all', 'graphic'],
        description:
          'Criação do logotipo e ícone oficial do aplicativo móvel, otimizados para reconhecimento de marca e visibilidade na Google Play Store.',
        image: 'smart-protector-launcher',
        tags: [
          { name: 'Figma', icon: 'figma' },
        ],
        links: [
          {
            type: 'playstore',
            label: 'Play Store',
            url: 'https://play.google.com/store/apps/details?id=com.emanoeldev.smartprotectorlauncher',
          },
        ],
      },
    ],
  },
}

export const footerTranslations: Record<Language, FooterTranslations> = {
  EN_US: {
    copyright: '© 2026 Edgar-sh. All rights reserved.',
  },
  PT_BR: {
    copyright: '© 2026 Edgar-sh. Todos os direitos reservados.',
  },
}
