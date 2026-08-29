import aboutPhoto from '../assets/about-photo-4d4a89.png'
import arrowDownLeft from '../assets/arrow-down-left.svg'
import emailIcon from '../assets/email-icon.svg'
import phoneIcon from '../assets/phone-icon.svg'
import linkedinIcon from '../assets/linkedin.svg'
import instagramIcon from '../assets/instagram.svg'
import githubIcon from '../assets/github.svg'
import Disponibilidade from './Disponibilidade'
import { type Language, aboutTranslations } from '../i18n/translations'

export interface AboutSectionProps {
  language?: Language
}

export function AboutSection({ language = 'EN_US' }: AboutSectionProps) {
  const t = aboutTranslations[language]

  return (
    <section
      id="about"
      className="w-full max-w-[1180px] mx-auto py-8 sm:py-16 lg:py-20 flex flex-col gap-6 sm:gap-8 lg:gap-12 box-border"
      aria-label="About Section"
    >
      {/* Title + Arrow Icon + Horizontal Divider */}
      <div className="flex flex-col gap-3 sm:gap-6 w-full">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[36px] sm:text-[64px] md:text-[90px] lg:text-[126px] font-medium leading-[0.92] tracking-tight text-black select-none">
            {t.title}
          </h2>
          <div className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] shrink-0">
            <img
              src={arrowDownLeft}
              alt="Arrow pointing down"
              className="w-full h-full object-contain"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#E5E7EB]" role="separator" aria-hidden="true" />
      </div>

      {/* Main Info Content: 3-column on desktop / stacked on mobile */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 lg:gap-8 w-full">
        {/* Left Column: Photo with Asymmetric Border matching height of adjacent columns */}
        <div className="w-[220px] min-[380px]:w-[240px] sm:w-[288px] h-[310px] min-[380px]:h-[340px] sm:h-[447px] lg:h-auto lg:self-stretch bg-[#FBCFDE] rounded-tl-[34px] rounded-tr-[34px] rounded-br-[34px] rounded-bl-0 overflow-hidden shrink-0 shadow-sm flex">
          <img
            src={aboutPhoto}
            alt="Edgar Silva - About photo"
            width={288}
            height={447}
            className="w-full h-full object-cover grayscale select-none pointer-events-none"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Middle Column: Bio + Highlight Badges + Availability Status */}
        <div className="flex flex-col justify-between gap-7 max-w-[432px] w-full">
          {/* Bio Text Paragraphs */}
          <div className="flex flex-col gap-4 text-[13px] sm:text-[14px] font-medium text-[#010101] leading-relaxed">
            {t.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Highlight Badges (MainInfos) */}
          <div className="flex flex-col gap-2.5 w-full">
            <div className="border-2 border-[#010101] rounded-[15px] px-3.5 py-1.5 text-[13px] sm:text-[14px] font-medium text-[#010101] whitespace-normal sm:whitespace-nowrap transition-colors hover:bg-[#FBCFDE]">
              <span className="font-semibold">{t.educationLabel}</span>{' '}
              <span className="ml-1 text-black">{t.educationValue}</span>
            </div>

            <div className="border-2 border-[#010101] rounded-[15px] px-3.5 py-1.5 text-[13px] sm:text-[14px] font-medium text-[#010101] whitespace-normal sm:whitespace-nowrap transition-colors hover:bg-[#FBCFDE]">
              <span className="font-semibold">{t.focusLabel}</span>{' '}
              <span className="ml-1 text-black">{t.focusValue}</span>
            </div>

            <div className="border-2 border-[#010101] rounded-[15px] px-3.5 py-1.5 text-[13px] sm:text-[14px] font-medium text-[#010101] whitespace-normal sm:whitespace-nowrap transition-colors hover:bg-[#FBCFDE]">
              <span className="font-semibold">{t.stackLabel}</span>{' '}
              <span className="ml-1 text-black">{t.stackValue}</span>
            </div>
          </div>

          {/* Availability Status (Figma Node 21:211) */}
          <div className="pt-1">
            <Disponibilidade language={language} />
          </div>
        </div>

        {/* Vertical Divider (Desktop Only) */}
        <div className="hidden lg:block w-[2px] self-stretch bg-[#E5E7EB]" role="separator" aria-hidden="true" />

        {/* Right Column: Let's Connect + Social Links (Figma Node 32:912) + Private Contacts */}
        <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:gap-12 w-full max-w-[432px] lg:max-w-[354px] lg:self-stretch">
          {/* Social Media Section (Node 32:912) */}
          <div className="flex flex-col gap-3.5 sm:gap-6">
            <h3 className="text-[22px] sm:text-[28px] lg:text-[36px] font-medium text-[#010101] leading-tight select-none">
              {t.letsConnect}
            </h3>

            <div className="flex flex-col gap-2.5 sm:gap-4 text-sm font-medium" data-name="SocialMedia">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/edgar-henrique-b34962320/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group no-underline text-inherit focus-visible:outline-2 focus-visible:outline-[#010101] rounded-lg w-fit"
                aria-label="LinkedIn Profile"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  <img src={linkedinIcon} alt="" className="w-full h-full object-contain" aria-hidden="true" />
                </div>
                <span className="text-[14px] sm:text-[17px] lg:text-[20px] font-medium text-black group-hover:underline transition-all">
                  Linkedin
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/henriqueapenas_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group no-underline text-inherit focus-visible:outline-2 focus-visible:outline-[#010101] rounded-lg w-fit"
                aria-label="Instagram Profile"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  <img src={instagramIcon} alt="" className="w-full h-full object-contain" aria-hidden="true" />
                </div>
                <span className="text-[14px] sm:text-[17px] lg:text-[20px] font-medium text-black group-hover:underline transition-all">
                  Instagram
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Edgar-sh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group no-underline text-inherit focus-visible:outline-2 focus-visible:outline-[#010101] rounded-lg w-fit"
                aria-label="GitHub Profile"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  <img src={githubIcon} alt="" className="w-full h-full object-contain" aria-hidden="true" />
                </div>
                <span className="text-[14px] sm:text-[17px] lg:text-[20px] font-medium text-black group-hover:underline transition-all">
                  Github
                </span>
              </a>
            </div>
          </div>

          {/* Private Contact Items (Email & Phone) */}
          <div className="flex flex-col gap-2.5 sm:gap-4 pt-1 lg:pt-0">
            {/* Email Contact */}
            <a
              href={`mailto:${t.email}`}
              className="flex items-center gap-2.5 sm:gap-3 group no-underline text-inherit focus-visible:outline-2 focus-visible:outline-[#010101] rounded-lg p-1 -m-1 w-fit max-w-full"
              aria-label={`Send email to ${t.email}`}
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 shrink-0 flex items-center justify-center">
                <img src={emailIcon} alt="" className="w-full h-full object-contain" aria-hidden="true" />
              </div>
              <span className="text-[13px] sm:text-[16px] lg:text-[20px] font-medium text-[#010101] break-all group-hover:underline transition-all">
                {t.email}
              </span>
            </a>

            {/* Phone Contact */}
            <div className="flex items-center gap-2.5 sm:gap-3 p-1 -m-1 w-fit max-w-full">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 shrink-0 flex items-center justify-center">
                <img src={phoneIcon} alt="" className="w-full h-full object-contain" aria-hidden="true" />
              </div>
              <span className="text-[13px] sm:text-[16px] lg:text-[20px] font-medium text-[#010101]">
                {t.phone}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
