import { type Language, footerTranslations } from '../i18n/translations'

export interface FooterProps {
  language?: Language
}

export function Footer({ language = 'EN_US' }: FooterProps) {
  const t = footerTranslations[language]

  return (
    <footer
      className="w-full max-w-[1180px] mx-auto pt-6 sm:pt-8 pb-10 sm:pb-14 flex flex-col gap-5 box-border"
      aria-label="Footer"
    >
      {/* Horizontal Divider (VectorGray) */}
      <div className="w-full h-[2px] bg-[#E5E7EB]" role="separator" aria-hidden="true" />

      {/* Copyright Text */}
      <div className="flex items-center justify-start w-full">
        <p className="text-[13px] sm:text-[15px] font-light text-[#838383] select-none">
          {t.copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer
