import { useState, useRef, useEffect } from 'react'
import Buttons from './Buttons'
import { type Language, headerTranslations } from '../i18n/translations'

export type { Language }

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const selectedLanguage = currentLanguage !== undefined ? currentLanguage : internalLanguage
  const t = headerTranslations[selectedLanguage]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleLanguageSelect = (lang: Language) => {
    setInternalLanguage(lang)
    setIsDropdownOpen(false)
    if (onLanguageChange) {
      onLanguageChange(lang)
    }
  }

  const handleTalkClick = (e: React.MouseEvent) => {
    setIsMobileMenuOpen(false)
    if (onTalkClick) {
      e.preventDefault()
      onTalkClick()
    }
  }

  const handleMobileNavClick = (section: 'about' | 'technologies' | 'projects') => {
    setIsMobileMenuOpen(false)
    if (onNavClick) {
      onNavClick(section)
    }
  }

  return (
    <header className="relative w-full max-w-[1180px] mx-auto p-0 box-border" ref={mobileMenuRef}>
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 md:gap-5 no-underline text-inherit cursor-pointer select-none"
          aria-label="Edgar-sh Home"
        >
          <div
            className="w-[30px] h-[30px] bg-[#FBCFDE] rounded-tl-[33px] rounded-tr-[33px] rounded-br-[33px] rounded-bl-0 flex items-center justify-center text-white font-semibold text-xl leading-none shrink-0"
            aria-hidden="true"
          >
            E
          </div>
          <span className="font-medium text-xl text-[#010101] leading-none">
            Edgar-sh
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <Buttons
          className="hidden md:flex"
          language={selectedLanguage}
          onNavClick={onNavClick}
        />

        {/* Desktop Header Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Desktop "Let's talk" Button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-[15px] py-2.5 bg-transparent text-black font-bold text-sm leading-none border-2 border-[#010101] rounded-[30px] cursor-pointer no-underline transition-all duration-200 ease-in-out hover:bg-[#010101] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#010101]"
            onClick={handleTalkClick}
          >
            {t.letsTalk}
          </a>

          {/* Desktop Language Selector */}
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              type="button"
              className={`inline-flex items-center justify-center gap-[5px] px-2 py-[5px] font-semibold text-xs leading-none border-2 border-[#010101] rounded-[30px] cursor-pointer transition-all duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#010101] ${
                isDropdownOpen
                  ? 'bg-[#010101] text-white'
                  : 'bg-transparent text-black hover:bg-[#010101] hover:text-white'
              }`}
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
                  className={`px-3 py-1.5 text-xs font-semibold text-left cursor-pointer transition-colors duration-150 border-none focus-visible:outline-none focus-visible:bg-[#FBCFDE] ${
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
                  className={`px-3 py-1.5 text-xs font-semibold text-left cursor-pointer transition-colors duration-150 border-none focus-visible:outline-none focus-visible:bg-[#FBCFDE] ${
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

        {/* Mobile Hamburger Button (from node 15:254 with 44px accessible touch target) */}
        <button
          type="button"
          className="md:hidden p-1.5 -mr-1.5 bg-transparent border-none cursor-pointer flex items-center justify-center min-w-[44px] min-h-[44px] rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#010101]"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7.05 24.35L5.65 22.95L13.6 15L5.65 7.05L7.05 5.65L15 13.6L22.95 5.65L24.35 7.05L16.4 15L24.35 22.95L22.95 24.35L15 16.4L7.05 24.35Z"
                fill="#010101"
              />
            </svg>
          ) : (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3.75 22.5V20H26.25V22.5H3.75ZM3.75 16.25V13.75H26.25V16.25H3.75ZM3.75 10V7.5H26.25V10H3.75Z"
                fill="#010101"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[calc(100%+14px)] left-0 right-0 bg-white border-2 border-[#010101] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] p-5 z-40 flex flex-col gap-5">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            <a
              href="#about"
              className="text-black text-sm font-medium py-2.5 px-3 rounded-lg no-underline hover:bg-[#FBCFDE] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#010101]"
              onClick={() => handleMobileNavClick('about')}
            >
              {t.about}
            </a>
            <a
              href="#technologies"
              className="text-black text-sm font-medium py-2.5 px-3 rounded-lg no-underline hover:bg-[#FBCFDE] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#010101]"
              onClick={() => handleMobileNavClick('technologies')}
            >
              {t.technologies}
            </a>
            <a
              href="#projects"
              className="text-black text-sm font-medium py-2.5 px-3 rounded-lg no-underline hover:bg-[#FBCFDE] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#010101]"
              onClick={() => handleMobileNavClick('projects')}
            >
              {t.projects}
            </a>
          </nav>

          {/* Action section inside Mobile Menu */}
          <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
            {/* Language Selection inside Menu */}
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-semibold text-gray-500">
                {t.languageLabel}:
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  className={`px-3 py-1 text-xs font-semibold rounded-[20px] border border-[#010101] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#010101] ${
                    selectedLanguage === 'EN_US'
                      ? 'bg-[#010101] text-white'
                      : 'bg-transparent text-black hover:bg-[#010101] hover:text-white'
                  }`}
                  onClick={() => handleLanguageSelect('EN_US')}
                >
                  EN_US
                </button>
                <button
                  type="button"
                  className={`px-3 py-1 text-xs font-semibold rounded-[20px] border border-[#010101] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#010101] ${
                    selectedLanguage === 'PT_BR'
                      ? 'bg-[#010101] text-white'
                      : 'bg-transparent text-black hover:bg-[#010101] hover:text-white'
                  }`}
                  onClick={() => handleLanguageSelect('PT_BR')}
                >
                  PT_BR
                </button>
              </div>
            </div>

            {/* "Let's talk" Button */}
            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center px-[15px] py-2.5 bg-[#010101] text-white font-bold text-sm leading-none border-2 border-[#010101] rounded-[30px] cursor-pointer no-underline transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#010101] text-center"
              onClick={handleTalkClick}
            >
              {t.letsTalk}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
