"use client"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import iaoPreview from "@/public/assets/projects/iron-and-oak/preview.webp"
import bespokePreview from "@/public/assets/projects/bespoke/preview.webp"
import easyQuranPreview from "@/public/assets/projects/easyquran/app/preview.png"
import watchbotsPreview from "@/public/assets/projects/watchbots/preview.png"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"
import { externalLinks } from "@/config/siteConfig"

const ids = ["easyquran-ai", "watchbots", "bespoke", "iron-and-oak"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.65
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "6% start"] : ["start start", "8% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    "easyquran-ai": { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -45, dy: isMobile ? -120 : -60 },
    watchbots: { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -75, dy: isMobile ? -130 : -60 },
    bespoke: { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -60, dy: isMobile ? -130 : -45 },
    "iron-and-oak": { rot: 12, s: responsiveScale, dx: isMobile ? -230 : -65, dy: isMobile ? -110 : -30 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id] || { x: 0, y: 0 }
      const t = OFFSET_TUNING[id] || { dx: 0, dy: 0, rot: 0, s: 1 }
      return [
        id,
        {
          x: (base.x ?? 0) + (t.dx ?? 0),
          y: (base.y ?? 0) + (t.dy ?? 0),
          rot: t.rot ?? 0,
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true") // Reveal ON
      } else {
        setReveal("false") // Reveal OFF
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])
  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key={"easyquran-ai"}
          src={easyQuranPreview}
          alt={"EasyQuran AI - Preview"}
          offset={offsets["easyquran-ai"]}
          gridId="easyquran-ai"
          color="#16a34a"
          type="Mobile App Development"
          progress={progress}
          dataText="View Case Study"
        />
        <AnimatedCard
          key="watchbots"
          src={watchbotsPreview}
          alt={"Watchbots Preview"}
          offset={offsets["watchbots"]}
          gridId="watchbots"
          color="#4f46e5"
          type="AI Dashboard"
          progress={progress}
          dataText="View Case Study"
        />

        <AnimatedCard
          key="bespoke"
          src={bespokePreview}
          alt={"Bespoke Preview"}
          offset={offsets["bespoke"]}
          gridId="bespoke"
          color="#024EFC"
          type="Automotive Styling"
          progress={progress}
          dataText="View Case Study"
        />
        <AnimatedCard
          key={"iron-and-oak"}
          src={iaoPreview}
          alt={"IAO Preview"}
          offset={offsets["iron-and-oak"]}
          gridId="iron-and-oak"
          color="#13739C"
          type="Private Security"
          progress={progress}
          dataText="View Case Study"
        />
      </div>
    </section>
  )
}
