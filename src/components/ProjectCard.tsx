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
    <article className="flex flex-col w-full max-w-[455px] min-h-[469px] mx-auto group">
      {/* Project Image Header */}
      <div className="w-full h-[183px] border-2 border-black rounded-t-[20px] overflow-hidden bg-black/5 shrink-0 relative">
        <img
          src={imgSrc}
          alt={project.title}
          className="w-full h-full object-cover select-none transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Project Details */}
      <div className="w-full border-2 border-t-0 border-black rounded-b-[20px] p-4 sm:p-5 flex flex-col justify-between flex-1 gap-4 bg-white">
        <div className="flex flex-col gap-2.5">
          {/* Title & Description */}
          <div className="flex flex-col gap-1">
            <h3 className="text-[20px] sm:text-[24px] font-semibold text-black leading-tight">
              {project.title}
            </h3>
            <p className="text-[13px] sm:text-[14px] font-light text-black leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <TagBadge key={tag.name} name={tag.name} icon={tag.icon} />
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {project.links.map((link) => {
            const icon = linkIconMap[link.type]

            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[22px] border-2 border-black bg-white hover:bg-[#FBCFDE] transition-colors text-[13px] font-medium text-black no-underline select-none"
                aria-label={`${project.title} - ${link.label}`}
              >
                {icon && (
                  <img
                    src={icon}
                    alt=""
                    className="w-4 h-4 object-contain shrink-0"
                    aria-hidden="true"
                  />
                )}
                <span>{link.label}</span>
                <img
                  src={arrowOutwardIcon}
                  alt=""
                  className="w-3.5 h-3.5 object-contain shrink-0"
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
