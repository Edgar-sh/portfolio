import { useState, useEffect } from 'react'
import { Header, type Language } from './components/Header'
import { HeroSection } from './components/HeroSection'

export default function App() {
  const [language, setLanguage] = useState<Language>('EN_US')

  useEffect(() => {
    document.documentElement.lang = language === 'PT_BR' ? 'pt-BR' : 'en'
  }, [language])

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 md:py-[50px] w-full box-border flex flex-col gap-12 sm:gap-16">
      <Header
        currentLanguage={language}
        onLanguageChange={(lang) => setLanguage(lang)}
        onTalkClick={() => {
          window.location.href = 'mailto:Edgar.silva@dcx.ufpb.br'
        }}
      />
      <main>
        <HeroSection language={language} />
      </main>
    </div>
  )
}


