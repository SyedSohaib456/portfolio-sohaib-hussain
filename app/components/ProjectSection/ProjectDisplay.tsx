"use client"
import React from "react"
import Image from "next/image"
import { ProjectHero } from "./ProjectHero"
import { LargeReview } from "../LargeReview"
import { MoreProjectsSection } from "./MoreProjectsSection"
import { ProjectData } from "../../data/project-data"
import { RecruiterContact } from "../RecruiterContact"
import { buildProjectGraphMinimal } from "@/config/schemas"
import clsx from "clsx"

const ProjectDisplay: React.FC<{ projectData: ProjectData }> = ({ projectData }) => {
  const images = projectData.showcaseImages || []

  return (
    <main className="overflow-hidden bg-[#fafafa]">
      {/* Schema Script */}
      <script
        id="id-project-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildProjectGraphMinimal(projectData.slug, projectData)),
        }}
      />

      {/* Project Hero Header */}
      <div className="pt-24 pb-16 md:pt-32 md:pb-24">
        <ProjectHero {...projectData.hero} />
      </div>

      {/* Beautiful Minimalist Visual Showcase Gallery */}
      {images.length > 0 && (
        <section className="inside-container-large pb-20 md:pb-32">
          <div className="mb-8 flex flex-col items-start gap-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Visual Showcase</span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Mockups & Interface Design</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            {images.map((img, index) => {
              // Intelligently detect portrait aspect ratio (mobile screenshots) to arrange side-by-side
              const isPortrait =
                img.src.includes("/app/") ||
                img.src.includes("mobile") ||
                img.src.includes("Kids") ||
                img.src.includes("reciters") ||
                img.src.includes("surah")

              return (
                <div
                  key={index}
                  className={clsx(
                    "group flex flex-col gap-3 rounded-3xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md",
                    isPortrait ? "col-span-1 md:col-span-6" : "col-span-full"
                  )}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-slate-50/50 aspect-video flex items-center justify-center">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  {img.caption && (
                    <div className="px-2 pt-1 pb-1">
                      <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                        {img.caption}
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="bg-white border-t border-b border-slate-100 py-16 md:py-24">
        <LargeReview {...projectData.review} />
      </section>

      {/* Navigation & Contact */}
      <MoreProjectsSection />
      <RecruiterContact />
    </main>
  )
}

export default ProjectDisplay
