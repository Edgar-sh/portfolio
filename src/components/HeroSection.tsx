import heroAvatar from '../assets/hero-avatar-5f3e1f.png'
import TypewriterText from './TypewriterText'
import { type Language, heroTranslations } from '../i18n/translations'

export interface HeroSectionProps {
  language?: Language
}

export function HeroSection({ language = 'EN_US' }: HeroSectionProps) {
  const t = heroTranslations[language]

  return (
    <section
      id="hero"
      className="w-full max-w-[1180px] mx-auto box-border"
      aria-label="Hero Section"
    >
      {/* =========================================================================
          MOBILE VARIANT (Figma Node 15:255 - Property 1=Mobile) - Display on < lg
          ========================================================================= */}
      <div className="flex lg:hidden flex-col items-center justify-center gap-6 sm:gap-8 py-2 sm:py-8">
        {/* UpFigure: Greeting + Circular Avatar */}
        <div className="flex flex-col items-center justify-center w-full">
          {/* Greeting Text: "I'm Edgar Henrique" */}
          <h1 className="text-[22px] min-[380px]:text-[24px] font-medium text-black tracking-normal leading-normal text-center mb-2 select-none">
            {t.mobileGreetingPrefix}
            <span className="text-[#FBCFDE] font-bold">{t.name}</span>
          </h1>

          {/* Figure: 257px Circle + 207px Avatar */}
          <div className="relative flex items-center justify-center w-[230px] min-[380px]:w-[257px] h-[280px] min-[380px]:h-[309px]">
            {/* Pink Ellipse */}
            <div
              className="w-[230px] min-[380px]:w-[257px] h-[230px] min-[380px]:h-[257px] bg-[#FBCFDE] rounded-full absolute bottom-0"
              aria-hidden="true"
            />
            {/* Avatar Image */}
            <img
              src={heroAvatar}
              alt={t.name}
              width={207}
              height={309}
              className="relative z-10 w-[185px] min-[380px]:w-[207px] h-auto object-contain select-none pointer-events-none drop-shadow-sm grayscale"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* DownTexts: Animated Comments + Tagline */}
        <div className="flex flex-col items-start gap-3 sm:gap-5 w-full max-w-[320px]">
          <TypewriterText key={`mobile-${language}`} phrases={t.typewriterPhrases} />
          <p className="text-[12px] font-light text-[#010101] leading-relaxed">
            {t.tagline}
          </p>
        </div>
      </div>

      {/* =========================================================================
          DESKTOP VARIANT (Figma Node 1:273 - Property 1=Desktop) - Display on >= lg
          ========================================================================= */}
      <div className="hidden lg:flex flex-row items-center justify-between gap-8 py-16">
        {/* Left Column: Title, Tagline and Pink Divisor */}
        <div className="flex flex-col justify-between items-start self-stretch gap-[256px]">
          <div className="flex flex-col gap-[59px]">
            {/* Main Title + Animated Comments */}
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-[126px] font-medium leading-[0.92] tracking-tight text-black select-none">
                {t.title}
              </h1>
              <TypewriterText key={`desktop-${language}`} phrases={t.typewriterPhrases} />
            </div>

            {/* Subtitle / Tagline */}
            <p className="text-[15px] font-light text-[#010101] leading-relaxed max-w-[382px]">
              {t.tagline}
            </p>
          </div>

          {/* DivisorPink */}
          <div
            className="w-[150px] h-[7px] bg-[#FBCFDE] rounded-full"
            role="separator"
            aria-hidden="true"
          />
        </div>

        {/* Right Column: Figure (410px Circle + 334px Avatar Image) */}
        <div className="relative flex items-center justify-center w-[409px] shrink-0">
          {/* Pink Circle */}
          <div
            className="w-[410px] h-[410px] bg-[#FBCFDE] rounded-full absolute top-[44px]"
            aria-hidden="true"
          />

          {/* Avatar Image */}
          <img
            src={heroAvatar}
            alt={t.name}
            width={334}
            height={500}
            className="relative z-10 w-[334px] h-auto object-contain select-none pointer-events-none drop-shadow-sm grayscale"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
