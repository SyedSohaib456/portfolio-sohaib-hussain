import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { easyQuranAI } from "@/app/data/project-data"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sohaib Hussain Shah - EasyQuran AI",
  description: "Production mobile & web application for Quran learning with AI integration.",
  keywords: ["Sohaib Hussain Shah", "EasyQuran AI", "React Native", "Expo", "Mobile App", "AI"],
}

const EasyQuranPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={easyQuranAI} />
    </>
  )
}

export default EasyQuranPage
