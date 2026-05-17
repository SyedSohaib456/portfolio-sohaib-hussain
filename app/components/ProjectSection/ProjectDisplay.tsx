"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { H1, Typography } from "@/app/ui/Elements"
import { Icon } from "../Icon"
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

      {/* Premium Editorial Split Hero Section */}
      <section className="inside-container-large pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Rich Typographic Content */}
          <div className="lg:col-span-5 flex flex-col gap-6 items-start">
            {/* Meta badges */}
            <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span className="rounded-full bg-slate-100 px-3.5 py-1 text-slate-700">{projectData.hero.client}</span>
              <span>•</span>
              <span>{projectData.hero.year}</span>
            </div>

            <H1 variant="medium" className="wrap-break-word font-extrabold tracking-tight text-slate-900 leading-[1.1] text-3xl md:text-4xl lg:text-5xl">
              {projectData.hero.title}
            </H1>

            <div className="h-0.5 w-12 bg-blue-600 rounded" />

            <p className="text-base text-slate-650 leading-relaxed max-w-xl">
              {projectData.hero.description}
            </p>

            {/* Scope of Work */}
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Scope of Work</span>
              <ul className="flex flex-wrap gap-2">
                {projectData.hero.categories.map((item) => (
                  <li key={item} className="rounded-full border border-slate-200/80 bg-white px-3.5 py-1 text-xs font-medium text-slate-800 shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* View Live Site Link */}
            <Link
              href={projectData.hero.link}
              title={`View ${projectData.hero.client} live site`}
              target="_blank"
              rel="nofollow noopener"
              className="mt-4 flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-350"
            >
              View Live Site
              <Icon name="arrow-right" className="h-3.5 w-3.5 text-white" />
            </Link>
          </div>

          {/* Right Column: Floating Visual Centerpiece Mockup */}
          <div className="lg:col-span-7 w-full flex justify-center">
            {heroImage && (
              projectData.slug === "easyquran-ai" ? (
                /* Composed Mobile Mockup display for Quran App */
                <div className="relative w-full max-w-[560px] overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
                  <Image
                    src={heroImage}
                    alt={`${projectData.hero.title} Composed Mockup`}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : (
                /* Premium Safari Browser Frame for Web projects */
                <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-4 py-3 border-b border-slate-200/60">
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                    <div className="mx-auto -ml-9 text-[10px] font-semibold text-slate-400 tracking-wider uppercase">
                      {projectData.hero.client} Live Dashboard
                    </div>
                  </div>
                  <Image
                    src={heroImage}
                    alt={`${projectData.hero.title} Dashboard Mockup`}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

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
