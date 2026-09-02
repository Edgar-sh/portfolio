import javaIcon from '../assets/tags/tag-java.svg'
import javalinIcon from '../assets/tags/tag-javalin.svg'
import thymeleafIcon from '../assets/tags/tag-thymeleaf.svg'
import javascriptIcon from '../assets/tags/tag-javascript.svg'
import figmaIcon from '../assets/tags/tag-figma.svg'
import gimpIcon from '../assets/tags/tag-gimp.svg'
import reactIcon from '../assets/tags/tag-react.svg'
import typescriptIcon from '../assets/tags/tag-typescript.svg'
import { type ProjectTag } from '../i18n/translations'

const iconMap: Record<string, string> = {
  java: javaIcon,
  javalin: javalinIcon,
  thymeleaf: thymeleafIcon,
  javascript: javascriptIcon,
  figma: figmaIcon,
  gimp: gimpIcon,
  react: reactIcon,
  typescript: typescriptIcon,
}

export function TagBadge({ name, icon }: ProjectTag) {
  const iconSrc = icon ? iconMap[icon] : undefined

  return (
    <div
      className="inline-flex items-center gap-1 px-2 py-1 rounded-[20px] bg-white border border-[#6F6F6F]/60 text-[11px] font-medium text-[#3D3D3D] select-none shrink-0"
      title={name}
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt=""
          className="w-3.5 h-3.5 object-contain shrink-0"
          aria-hidden="true"
        />
      )}
      <span className="leading-none">{name}</span>
    </div>
  )
}

export default TagBadge
