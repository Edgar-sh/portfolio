import { motion } from 'framer-motion'
import { type Language, aboutTranslations } from '../i18n/translations'

export interface DisponibilidadeProps {
  language?: Language
}

export default function Disponibilidade({ language = 'EN_US' }: DisponibilidadeProps) {
  const t = aboutTranslations[language]

  return (
    <div
      className="content-stretch flex gap-[5px] items-center relative size-full select-none"
      data-name="Disponibilidade"
    >
      <div className="relative shrink-0 size-[10px]">
        <motion.svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="10"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
          width="10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        >
          <circle cx="5" cy="5" fill="var(--accent-color, #FBCFDE)" id="Ellipse 2" r="5" />
        </motion.svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
        <p className="leading-normal">{t.availability}</p>
      </div>
    </div>
  )
}
