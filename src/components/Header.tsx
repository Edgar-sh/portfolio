import { useState, useRef, useEffect } from 'react'
import Buttons from './Buttons'

export type Language = 'EN_US' | 'PT_BR'

export interface HeaderProps {
  currentLanguage?: Language
  onLanguageChange?: (lang: Language) => void
  onTalkClick?: () => void
  onNavClick?: (section: 'about' | 'technologies' | 'projects') => void
}

export function Header({
  currentLanguage = 'EN_US',
  onLanguageChange,
  onTalkClick,
  onNavClick,
}: HeaderProps) {
  const [internalLanguage, setInternalLanguage] = useState<Language>(currentLanguage)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedLanguage = currentLanguage !== undefined ? currentLanguage : internalLanguage

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  const handleLanguageSelect = (lang: Language) => {
    setInternalLanguage(lang)
    setIsDropdownOpen(false)
    if (onLanguageChange) {
      onLanguageChange(lang)
    }
  }

  const handleTalkClick = (e: React.MouseEvent) => {
    if (onTalkClick) {
      e.preventDefault()
      onTalkClick()
    }
  }

  return (
    <header className="flex items-center justify-between w-full max-w-[1180px] mx-auto p-0 box-border">
      <a
        href="#hero"
        className="flex items-center gap-5 no-underline text-inherit cursor-pointer select-none"
        aria-label="EdgarDev Home"
      >
        <div
          className="w-[30px] h-[30px] bg-[#FBCFDE] rounded-tl-[33px] rounded-tr-[33px] rounded-br-[33px] rounded-bl-0 flex items-center justify-center text-white font-normal text-xl leading-none"
          aria-hidden="true"
        >
          H
        </div>
        <span className="font-medium text-xl text-[#010101] leading-none">
          EdgarDev
        </span>
      </a>

      <Buttons onNavClick={onNavClick} />

      <div className="flex items-center gap-2.5">
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-[15px] py-2.5 bg-transparent text-black font-bold text-sm leading-none border-2 border-[#010101] rounded-[30px] cursor-pointer no-underline transition-all duration-200 ease-in-out hover:bg-[#010101] hover:text-white"
          onClick={handleTalkClick}
        >
          Let's talk
        </a>

        <div className="relative inline-block" ref={dropdownRef}>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-[5px] px-2 py-[5px] bg-transparent text-black font-semibold text-xs leading-none border-2 border-[#010101] rounded-[30px] cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#F5F5F5]"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
            aria-label="Select language"
          >
            <span>{selectedLanguage}</span>
            <svg
              className={`w-2.5 h-[5px] inline-block transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M5 5L0 0H10L5 5Z" fill="currentColor" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div
              className="absolute top-[calc(100%+6px)] right-0 bg-white border-2 border-[#010101] rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] z-50 flex flex-col min-w-[90px]"
              role="listbox"
            >
              <button
                type="button"
                className={`px-3 py-1.5 text-xs font-semibold text-left cursor-pointer transition-colors duration-150 border-none ${
                  selectedLanguage === 'EN_US'
                    ? 'bg-[#010101] text-white'
                    : 'bg-transparent text-black hover:bg-[#FBCFDE]'
                }`}
                onClick={() => handleLanguageSelect('EN_US')}
                role="option"
                aria-selected={selectedLanguage === 'EN_US'}
              >
                EN_US
              </button>
              <button
                type="button"
                className={`px-3 py-1.5 text-xs font-semibold text-left cursor-pointer transition-colors duration-150 border-none ${
                  selectedLanguage === 'PT_BR'
                    ? 'bg-[#010101] text-white'
                    : 'bg-transparent text-black hover:bg-[#FBCFDE]'
                }`}
                onClick={() => handleLanguageSelect('PT_BR')}
                role="option"
                aria-selected={selectedLanguage === 'PT_BR'}
              >
                PT_BR
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
