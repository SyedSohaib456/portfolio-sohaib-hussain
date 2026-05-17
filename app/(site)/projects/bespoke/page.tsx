import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { bespoke } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Sohaib Hussain Shah - Projects Bespoke Tint & PPF",
  description: "How Sohaib Hussain Shah helped Bespoke Tint & PPF achieve growth through SEO-focused web design and development.",
  keywords: ["Sohaib Hussain Shah", "Bespoke Projects", "Tint", "PPF", "Next.js", "React", "TypeScript", "Pakistan"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.bespoke,
  },
}

const BespokePage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={bespoke} />
    </>
  )
}

export default BespokePage
