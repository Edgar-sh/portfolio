import { useState } from 'react'
import { Header, type Language } from './components/Header'

export default function App() {
  const [language, setLanguage] = useState<Language>('EN_US')

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-[50px] w-full box-border">
      <Header
        currentLanguage={language}
        onLanguageChange={(lang) => setLanguage(lang)}
        onTalkClick={() => {
          window.location.href = 'mailto:Edgar.silva@dcx.ufpb.br'
        }}
      />
    </div>
  )
}


