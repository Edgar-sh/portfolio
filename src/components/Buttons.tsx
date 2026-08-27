export interface ButtonsProps {
  onNavClick?: (section: 'about' | 'technologies' | 'projects') => void
}

export default function Buttons({ onNavClick }: ButtonsProps) {
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
      className="flex items-center justify-center gap-5 text-sm text-black whitespace-nowrap not-italic"
      data-name="Buttons"
      aria-label="Main Navigation"
    >
      <div className="flex flex-col justify-center relative shrink-0">
        <a
          href="#about"
          className="leading-normal cursor-pointer hover:underline transition-all text-black no-underline"
          onClick={(e) => handleClick(e, 'about')}
        >
          About
        </a>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <a
          href="#technologies"
          className="leading-normal cursor-pointer hover:underline transition-all text-black no-underline"
          onClick={(e) => handleClick(e, 'technologies')}
        >
          Technologies
        </a>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <a
          href="#projects"
          className="leading-normal cursor-pointer hover:underline transition-all text-black no-underline"
          onClick={(e) => handleClick(e, 'projects')}
        >
          Projects
        </a>
      </div>
    </nav>
  )
}
