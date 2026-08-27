import { type Language, headerTranslations } from '../i18n/translations'

export interface ButtonsProps {
  className?: string
  language?: Language
  onNavClick?: (section: 'about' | 'technologies' | 'projects') => void
}

export default function Buttons({
  className = '',
  language = 'EN_US',
  onNavClick,
}: ButtonsProps) {
  const t = headerTranslations[language]

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: 'about' | 'technologies' | 'projects'
  ) => {
    if (onNavClick) {
      e.preventDefault()
      onNavClick(section)
    }
  }

  return (
    <nav
      className={`items-center justify-center gap-5 text-sm text-black whitespace-nowrap not-italic ${className}`}
      data-name="Buttons"
      aria-label="Main Navigation"
    >
      <div className="flex flex-col justify-center relative shrink-0">
        <a
          href="#about"
          className="leading-normal cursor-pointer hover:underline transition-all text-black no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#010101] rounded-sm"
          onClick={(e) => handleClick(e, 'about')}
        >
          {t.about}
        </a>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <a
          href="#technologies"
          className="leading-normal cursor-pointer hover:underline transition-all text-black no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#010101] rounded-sm"
          onClick={(e) => handleClick(e, 'technologies')}
        >
          {t.technologies}
        </a>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <a
          href="#projects"
          className="leading-normal cursor-pointer hover:underline transition-all text-black no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#010101] rounded-sm"
          onClick={(e) => handleClick(e, 'projects')}
        >
          {t.projects}
        </a>
      </div>
    </nav>
  )
}
