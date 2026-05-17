import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import iaoPreview from "@/public/assets/projects/iron-and-oak/preview.webp"
import bespokePreview from "@/public/assets/projects/bespoke/preview.webp"
import automedicsPreview from "@/public/assets/projects/automedics/preview.webp"
import easyQuranPreview from "@/public/assets/projects/easyquran/app/preview.png"
import watchbotsPreview from "@/public/assets/projects/watchbots/preview.png"
import entitledPreview from "@/public/assets/projects/entitled/preview.webp"
import { Link } from "@/app/utils/Link"
import { externalLinks, SITE_SLUGS } from "@/config/siteConfig"

type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color: string
  type: string
  text: string
  href: string
  dataText: string
  ariaLabel: string
  isExternal: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "easyquran-ai",
    src: easyQuranPreview,
    alt: "EasyQuran AI - Preview",
    color: "#16a34a",
    type: "Mobile App Development",
    text: "See Case Study",
    href: "/projects/easyquran-ai",
    dataText: "See Case Study",
    ariaLabel: "See EasyQuran AI Case Study",
    isExternal: false,
  },
  {
    id: "watchbots",
    src: watchbotsPreview,
    alt: "Watchbots Preview",
    color: "#4f46e5",
    type: "AI Dashboard",
    text: "See Case Study",
    href: "/projects/watchbots",
    dataText: "See Case Study",
    ariaLabel: "See Watchbots Case Study",
    isExternal: false,
  },
  {
    id: "bespoke",
    src: bespokePreview,
    alt: "Bespoke Preview",
    color: "#024EFC",
    type: "Automotive Styling Website",
    text: "See Case Study",
    href: SITE_SLUGS.projectLinks.bespoke,
    dataText: "See Case Study",
    ariaLabel: "See Bespoke Website Build Case Study",
    isExternal: false,
  },
  {
    id: "iron-oak",
    src: iaoPreview,
    alt: "IAO Preview",
    color: "#13739C",
    type: "Private Security Website",
    text: "See Case Study",
    href: SITE_SLUGS.projectLinks.iao,
    dataText: "See Case Study",
    ariaLabel: "See Iron & Oak Website Build Case Study",
    isExternal: false,
  },
]

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {STATIC_PROJECTS.map((project) => {
            const Tag = project.isExternal ? "a" : Link
            const tagProps = project.isExternal
              ? {
                  href: project.href,
                  target: "_blank",
                  rel: "nofollow noopener",
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                }
              : {
                  href: project.href,
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                  prefetch: true,
                }

            return (
              <Tag key={project.id} {...tagProps}>
                <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={project.text} />
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
