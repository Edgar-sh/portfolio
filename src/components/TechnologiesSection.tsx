import springIcon from '../assets/tech/spring.svg'
import javaIcon from '../assets/tech/java.svg'
import pgsqlIcon from '../assets/tech/pgsql.svg'
import tailwindIcon from '../assets/tech/tailwind.svg'
import typescriptIcon from '../assets/tech/typescript.svg'
import figmaIcon from '../assets/tech/figma.svg'
import gimpIcon from '../assets/tech/gimp.svg'
import aftereffectsIcon from '../assets/tech/aftereffects.svg'
import { type Language, technologiesTranslations } from '../i18n/translations'

export interface TechnologiesSectionProps {
  language?: Language
}

interface ProficiencyItem {
  name: string
  filled: number
  total?: number
}

const proficiencies: ProficiencyItem[] = [
  { name: 'Java / Spring Boot', filled: 7 },
  { name: 'Figma', filled: 9 },
  { name: 'React / Typescript', filled: 8 },
  { name: 'SQL / PgSQL', filled: 6 },
  { name: 'Tailwind CSS / HTML', filled: 9 },
]

interface TechCard {
  name: string
  icon: string
  width?: number
  height?: number
}

const techCards: TechCard[] = [
  { name: 'SpringBoot', icon: springIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'PgSQL', icon: pgsqlIcon },
  { name: 'Tailwind', icon: tailwindIcon },
  { name: 'Typescript', icon: typescriptIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'GIMP', icon: gimpIcon },
  { name: 'AfterEffects', icon: aftereffectsIcon },
]

export function TechnologiesSection({ language = 'EN_US' }: TechnologiesSectionProps) {
  const t = technologiesTranslations[language]

  return (
    <section
      id="technologies"
      className="w-full max-w-[1180px] mx-auto py-8 sm:py-16 lg:py-20 flex flex-col gap-6 sm:gap-8 lg:gap-12 box-border"
      aria-label="Technologies Section"
    >
      {/* Title + Subtitle + Horizontal Divider */}
      <div className="flex flex-col gap-3 sm:gap-6 w-full">
        <div className="flex flex-col gap-1.5 sm:gap-2 w-full">
          <h2 className="text-[32px] min-[400px]:text-[38px] sm:text-[64px] md:text-[90px] lg:text-[126px] font-semibold leading-[1] sm:leading-[0.92] tracking-tight text-black select-none">
            {t.title}
          </h2>
          <p className="text-[13px] sm:text-[15px] font-light text-[#838383]">
            // Tools and languages that power my daily workflow.
          </p>
        </div>
        <div className="w-full h-[2px] bg-[#E5E7EB]" role="separator" aria-hidden="true" />
      </div>

      {/* Main Content: Proficiency Level + Tech Stack */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-8 w-full">
        {/* Left Column: Proficiency Level */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-auto lg:shrink-0 lg:max-w-[530px]">
          {/* Header comment */}
          <span className="text-[#838383] text-[15px] sm:text-[20px] font-normal select-none">
            {'/* proficiency level */'}
          </span>

          {/* Proficiency Items List */}
          <div className="flex flex-col gap-[15px] py-2 w-full">
            {proficiencies.map((item) => {
              const total = item.total ?? 10
              const empty = total - item.filled

              return (
                <div
                  key={item.name}
                  className="flex items-center gap-2 sm:gap-[10px] flex-nowrap"
                >
                  {/* Gauge indicator: [■■■■■■■□□□] */}
                  <span className="text-[14px] min-[380px]:text-[16px] sm:text-[19px] lg:text-[20px] font-inter shrink-0 select-none leading-none tracking-[0.5px] whitespace-nowrap">
                    <span className="text-black">[</span>
                    <span className="text-[#FBCFDE]">{'■'.repeat(item.filled)}</span>
                    <span className="text-black">{'□'.repeat(empty)}</span>
                    <span className="text-black">]</span>
                  </span>

                  {/* Technology Name */}
                  <span className="text-[14px] min-[380px]:text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-black leading-tight whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Vertical Divider (Desktop Only) */}
        <div className="hidden lg:block w-[2px] self-stretch bg-[#E5E7EB]" role="separator" aria-hidden="true" />

        {/* Right Column: Tech Stack Cards Grid */}
        <div className="flex flex-col gap-6 w-full lg:max-w-[580px]">
          {/* Header comment */}
          <span className="text-[#838383] text-[18px] sm:text-[20px] font-normal select-none">
            {'/* tech stack */'}
          </span>

          {/* 8 Cards Grid (2 rows x 4 columns on desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {techCards.map((card) => (
              <div
                key={card.name}
                className="flex flex-col items-center justify-center px-3 py-4 sm:px-4 sm:py-5 rounded-[20px] border-2 border-transparent hover:border-[#010101] hover:bg-[#FBCFDE]/10 transition-all duration-200 group select-none min-h-[100px]"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  <img
                    src={card.icon}
                    alt=""
                    className="w-full h-full object-contain"
                    aria-hidden="true"
                  />
                </div>
                <span className="mt-2 text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-black text-center tracking-tight">
                  {card.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection
