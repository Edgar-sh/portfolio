import stackberryImg from '../assets/projects/stackberry.png'
import minhasComprasImg from '../assets/projects/minhas-compras-76c2c0.png'
import brioCafeteriaImg from '../assets/projects/brio-cafeteria.png'
import camisaSiImg from '../assets/projects/camisa-si.png'
import smartProtectorLauncherImg from '../assets/projects/smart-protector-launcher.png'
import githubIcon from '../assets/projects/github.svg'
import globeIcon from '../assets/projects/globe.svg'
import playstoreIcon from '../assets/projects/playstore.svg'
import arrowOutwardIcon from '../assets/projects/arrow-outward.svg'
import { TagBadge } from './TagBadge'
import { type ProjectItem } from '../i18n/translations'

const imageMap: Record<string, string> = {
  stackberry: stackberryImg,
  'minhas-compras': minhasComprasImg,
  'brio-cafeteria': brioCafeteriaImg,
  'camisa-si': camisaSiImg,
  'smart-protector-launcher': smartProtectorLauncherImg,
}

const linkIconMap: Record<string, string> = {
  github: githubIcon,
  website: globeIcon,
  playstore: playstoreIcon,
}

export interface ProjectCardProps {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  const imgSrc = imageMap[project.image] ?? stackberryImg

  return (
    <article className="flex flex-col w-full h-[420px] md:h-[469px] mx-auto group select-none">
      {/* Project Image Header */}
      <div className="w-full h-[140px] md:h-[183px] border-2 border-black rounded-t-[20px] overflow-hidden bg-black/5 shrink-0 relative">
        <img
          src={imgSrc}
          alt={project.title}
          className="w-full h-full object-cover select-none transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Project Details */}
      <div className="w-full border-2 border-t-0 border-black rounded-b-[20px] p-3.5 sm:p-4 md:p-5 flex flex-col justify-between flex-1 gap-2.5 md:gap-4 bg-white overflow-hidden">
        <div className="flex flex-col gap-2">
          {/* Title & Description */}
          <div className="flex flex-col gap-1">
            <h3 className="text-[17px] md:text-[24px] font-semibold text-black leading-tight truncate">
              {project.title}
            </h3>
            <p className="text-[12px] md:text-[14px] font-light text-black leading-relaxed line-clamp-4 md:line-clamp-4">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 pt-0.5">
            {project.tags.map((tag) => (
              <TagBadge key={tag.name} name={tag.name} icon={tag.icon} />
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-1.5 md:gap-2 pt-1">
          {project.links.map((link) => {
            const icon = linkIconMap[link.type]

            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-3.5 md:py-2 rounded-[22px] border-2 border-black bg-white hover:bg-[#FBCFDE] transition-colors text-[12px] md:text-[13px] font-medium text-black no-underline select-none"
                aria-label={`${project.title} - ${link.label}`}
              >
                {icon && (
                  <img
                    src={icon}
                    alt=""
                    className="w-3.5 h-3.5 md:w-4 md:h-4 object-contain shrink-0"
                    aria-hidden="true"
                  />
                )}
                <span>{link.label}</span>
                <img
                  src={arrowOutwardIcon}
                  alt=""
                  className="w-3 h-3 md:w-3.5 md:h-3.5 object-contain shrink-0"
                  aria-hidden="true"
                />
              </a>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
