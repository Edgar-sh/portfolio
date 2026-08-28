import { useState, useMemo, useRef } from 'react'
import arrowLeftIcon from '../assets/projects/arrow-left.svg'
import arrowRightIcon from '../assets/projects/arrow-right.svg'
import { ProjectCard } from './ProjectCard'
import {
  type Language,
  type ProjectCategory,
  projectsTranslations,
} from '../i18n/translations'

export interface ProjectsSectionProps {
  language?: Language
}

export function ProjectsSection({ language = 'EN_US' }: ProjectsSectionProps) {
  const t = projectsTranslations[language]
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')
  const carouselRef = useRef<HTMLDivElement>(null)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return t.projects
    return t.projects.filter((p) => p.categories.includes(activeFilter))
  }, [t.projects, activeFilter])

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="projects"
      className="w-full max-w-[1180px] mx-auto py-12 sm:py-16 lg:py-20 flex flex-col gap-8 lg:gap-12 box-border"
      aria-label="Projects Section"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 w-full text-center">
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
          <h2 className="text-[52px] sm:text-[80px] md:text-[100px] lg:text-[126px] font-semibold leading-none tracking-tight text-black select-none text-center">
            {t.title}
          </h2>
          <p className="text-[14px] sm:text-[15px] font-light text-[#838383] text-center">
            {t.subtitle}
          </p>
        </div>
        <div className="w-full h-[2px] bg-[#E5E7EB]" role="separator" aria-hidden="true" />
      </div>

      {/* Filter Buttons */}
      <div
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full"
        role="group"
        aria-label="Project Categories"
      >
        {t.filters.map((filter) => {
          const isActive = activeFilter === filter.key
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-[30px] border-2 border-[#010101] text-[14px] sm:text-[16px] font-medium transition-colors duration-200 cursor-pointer select-none ${
                isActive
                  ? 'bg-[#FBCFDE] text-black font-semibold hover:bg-[#010101] hover:text-white'
                  : 'bg-white text-black hover:bg-[#010101] hover:text-white'
              }`}
              aria-pressed={isActive}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      {/* Projects Showcase with Navigation Arrows */}
      <div className="flex items-center justify-between gap-3 sm:gap-6 w-full relative">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[54px] lg:h-[54px] shrink-0 flex items-center justify-center rounded-full hover:scale-110 active:scale-95 transition-transform cursor-pointer focus-visible:outline-2 focus-visible:outline-black"
          aria-label="Previous project"
        >
          <img
            src={arrowLeftIcon}
            alt=""
            className="w-full h-full object-contain"
            aria-hidden="true"
          />
        </button>

        {/* Projects Grid / Carousel */}
        <div
          ref={carouselRef}
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[75px] max-w-[985px] mx-auto items-stretch justify-center"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-[#838383] text-[16px] font-light">
              // No projects found in this category.
            </div>
          )}
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[54px] lg:h-[54px] shrink-0 flex items-center justify-center rounded-full hover:scale-110 active:scale-95 transition-transform cursor-pointer focus-visible:outline-2 focus-visible:outline-black"
          aria-label="Next project"
        >
          <img
            src={arrowRightIcon}
            alt=""
            className="w-full h-full object-contain"
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  )
}

export default ProjectsSection
