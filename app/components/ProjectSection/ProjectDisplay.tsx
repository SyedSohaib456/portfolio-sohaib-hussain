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
  const heroImage = projectData.beforeAfter?.heroBefore

  // Bulletproof categorization: Mobile images are stored in '/app/' folders, others are Web/Desktop
  const mobileImages = images.filter(
    (img) =>
      img.src.includes("/app/") ||
      (img.src.includes("mobile") && !img.src.includes("web"))
  )

  const desktopImages = images.filter((img) => !mobileImages.includes(img))

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
      <div className="pt-24 pb-8 md:pt-32 md:pb-12">
        <ProjectHero {...projectData.hero} />
      </div>

      {/* High-Impact Centerpiece Hero Mockup */}
      {heroImage && (
        <section className="inside-container-large pb-20 md:pb-28">
          {projectData.slug === "easyquran-ai" ? (
            /* Composed Mockup composition for Mobile App centerpiece */
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl transition-transform duration-500 hover:scale-[1.005]">
              <Image
                src={heroImage}
                alt={`${projectData.hero.title} Centerpiece Mockup`}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          ) : (
            /* Premium Web Dashboard centerpiece inside Safari browser frame */
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl transition-transform duration-500 hover:scale-[1.005]">
              <div className="flex items-center gap-1.5 bg-slate-50 px-4 py-3.5 border-b border-slate-200/60">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <div className="mx-auto -ml-9 text-[11px] font-semibold text-slate-400 tracking-wide uppercase">
                  {projectData.hero.client} · Platform Live Dashboard
                </div>
              </div>
              <Image
                src={heroImage}
                alt={`${projectData.hero.title} Web Interface`}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </section>
      )}

      {/* Project Showcase Gallery */}
      {images.length > 0 && (
        <section className="inside-container-large pb-24 md:pb-36 flex flex-col gap-24 md:gap-36">
          {/* MOBILE EXPERIENCE SHOWCASE */}
          {mobileImages.length > 0 && (
            <div className="flex flex-col gap-10">
              <div className="flex flex-col items-start gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">Native Mobile Platform</span>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">📱 Mobile Application Experience (iOS & Android)</h2>
                <p className="mt-1 text-sm text-slate-500 max-w-2xl">
                  High-performance, beautifully styled native interfaces engineered with React Native and Expo.
                </p>
              </div>

              {/* Proportional Mobile Grid showing screens as real phone previews */}
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8 justify-items-center">
                {mobileImages.map((img, index) => (
                  <div key={index} className="group flex flex-col items-center gap-4 w-full max-w-[280px]">
                    <div className="relative w-full aspect-[9/19.5] overflow-hidden rounded-[2.2rem] border-[6px] border-slate-950 bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.28)]">
                      {/* Realistic phone notch/island */}
                      <div className="absolute top-2.5 left-1/2 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-slate-950" />
                      
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    {img.caption && (
                      <span className="px-2 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {img.caption}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DESKTOP/WEB EXPERIENCE SHOWCASE */}
          {desktopImages.length > 0 && (
            <div className="flex flex-col gap-12">
              <div className="flex flex-col items-start gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">Web Platform</span>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">💻 Responsive Web Portal Experience (React & Next.js)</h2>
                <p className="mt-1 text-sm text-slate-500 max-w-2xl">
                  Unified browser-based interface designed with responsive CSS Grid layouts for complete cross-platform coverage.
                </p>
              </div>

              {/* Renders desktop screens inside realistic mock browser window frames */}
              <div className="flex flex-col gap-16 md:gap-24">
                {desktopImages.map((img, index) => (
                  <div key={index} className="group flex flex-col gap-4">
                    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl transition-transform duration-500 hover:scale-[1.005]">
                      {/* Mock Safari/Chrome Browser Header */}
                      <div className="flex items-center gap-1.5 bg-slate-50 px-4 py-3.5 border-b border-slate-200/60">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                        <div className="mx-auto -ml-9 text-[11px] font-semibold text-slate-400 tracking-wide uppercase">
                          {img.caption || "Web Application"}
                        </div>
                      </div>

                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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
