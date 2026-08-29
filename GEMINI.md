# 🚀 Portfolio - Diretrizes e Regras do Projeto

Este documento define as regras de negócio, convenções técnicas, tokens visuais e padrões de código para o desenvolvimento deste portfólio.

---

## 🛠️ 1. Stack Tecnológica & Padrões de Código

- **Framework**: React 19 + TypeScript (strict mode com `verbatimModuleSyntax: true`).
- **Build Tool**: Vite 8.
- **Estilização**: Tailwind CSS v4 (utilizar classes utilitárias diretamente nos componentes).
- **Linter**: Oxlint (`npm run lint`).
- **Imports de Tipos**: Tipos e interfaces devem ser importados explicitamente com `type` (ex: `import { type Language } from '...'`).
- **Validação Contínua**: Todo código deve compilar sem warnings ou erros em `npm run lint && npm run build`.

---

## 🎨 2. Identidade Visual e Tipografia

- **Fonte Obrigatória**: `IBM Plex Mono` em toda a aplicação.
  - Pesos suportados: Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700).
  - Fallbacks nativos: `ui-monospace, Menlo, Monaco, Consolas, 'Liberation Mono', monospace`.
- **Paleta de Cores Oficial**:
  - `Dark/Text`: `#010101`
  - `Primary Black`: `#000000`
  - `Accent Pink`: `#FBCFDE` (ícone da logo, highlights de tags, hovers)
  - `Neutral Gray`: `#838383` (comentários em código, subtítulos)
  - `Background`: `#FFFFFF`
- **Fidelidade ao Figma**: Elementos devem seguir rigorosamente o design do Figma (`7n7Ek7mSLYFBHF9Z3kgsxo`).

---

## 🌐 3. Idioma, Textos & Internacionalização (i18n)

- **Regra Obrigatória de Conteúdo (Bilinguismo)**:
  - **Todo e qualquer texto adicionado na interface deve obrigatoriamente possuir sua versão completa tanto em Inglês (`EN_US`) quanto em Português (`PT_BR`) durante a implementação**.
  - O idioma padrão inicial exibido na interface é **Inglês (`EN_US`)**.
- **Idiomas Suportados**: `EN_US` e `PT_BR`.
- **Mensagens Técnicas & Commits**:
  - Commits, logs e nomes de código devem seguir o padrão Conventional Commits em inglês.

---

## 📐 4. Regras de Componentes & Layout

### Header & Navegação
- **Desktop (`≥ 768px`)**:
  - **Esquerda**: Logo (`Icon 30x30 rosa` com `E` + texto `Edgar-sh`, gap de 20px).
  - **Centro**: Links de navegação (`About` / `Sobre`, `Technologies` / `Tecnologias`, `Projects` / `Projetos`).
  - **Direita**: Botão `"Let's talk"` / `"Vamos conversar"` (borda 2px, cantos 30px) + Seletor de idioma em dropdown (`EN_US` / `PT_BR`).
- **Mobile (`< 768px`)**:
  - **Barra Superior**: Exibe apenas a Logo (gap de 10px) e o botão Hambúrguer nativo do Figma (`30x30px`, node `15:254`).
  - **Menu Suspenso (Drawer)**:
    - O seletor de idioma **deve ficar dentro do menu mobile**, nunca na barra superior externa.
    - Contém os links de navegação e o botão full-width `"Let's talk"` / `"Vamos conversar"`.
    - Deve fechar automaticamente ao clicar em links, clicar fora ou pressionar a tecla `Escape`.

---

## 🔒 5. Segurança & Boas Práticas Git

- Nunca commitar arquivos de ambiente (`.env*`) ou credenciais/tokens no repositório.
- Manter o `.gitignore` atualizado para artefatos do Vite (`.vite/`, `dist/`) e TypeScript (`*.tsbuildinfo`).
