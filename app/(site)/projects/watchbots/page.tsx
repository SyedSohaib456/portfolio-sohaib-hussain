import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { watchbots } from "@/app/data/project-data"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sohaib Hussain Shah - Watchbots",
  description: "AI-driven monitoring platform with real-time analytics and dashboard.",
  keywords: ["Sohaib Hussain Shah", "Watchbots", "Next.js", "AI", "Dashboard", "Real-time Analytics"],
}

const WatchbotsPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={watchbots} />
    </>
  )
}

export default WatchbotsPage
