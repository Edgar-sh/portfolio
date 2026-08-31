import { useState, useEffect } from 'react'
import { Header, type Language } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { TechnologiesSection } from './components/TechnologiesSection'
import { ProjectsSection } from './components/ProjectsSection'
import { Footer } from './components/Footer'

const ACCENT_COLORS = ['#FBCFDE', '#b1ecf6', '#fddb77'] as const

export default function App() {
  const [language, setLanguage] = useState<Language>('EN_US')
  const [accentColorIndex, setAccentColorIndex] = useState(0)
  const currentAccentColor = ACCENT_COLORS[accentColorIndex]

  const handleCycleAccentColor = () => {
    setAccentColorIndex((prev) => (prev + 1) % ACCENT_COLORS.length)
  }

  useEffect(() => {
    document.documentElement.lang = language === 'PT_BR' ? 'pt-BR' : 'en'
  }, [language])

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', currentAccentColor)

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32H0V16Z" fill="${currentAccentColor}"/><text x="16" y="23.5" font-family="'IBM Plex Mono', monospace" font-size="21" font-weight="600" fill="#010101" text-anchor="middle" dominant-baseline="auto">E</text></svg>`
    const url = `data:image/svg+xml,${encodeURIComponent(svg)}`
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      link.type = 'image/svg+xml'
      document.head.appendChild(link)
    }
    link.href = url
  }, [currentAccentColor])

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 md:py-[50px] w-full box-border flex flex-col gap-12 sm:gap-16">
      <Header
        currentLanguage={language}
        onLanguageChange={(lang) => setLanguage(lang)}
        onLogoClick={handleCycleAccentColor}
        onTalkClick={() => {
          window.location.href = 'mailto:Edgar.silva@dcx.ufpb.br'
        }}
      />
      <main className="flex flex-col gap-16 sm:gap-24">
        <HeroSection language={language} />
        <AboutSection language={language} />
        <TechnologiesSection language={language} />
        <ProjectsSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  )
}


