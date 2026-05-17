import clsx from "clsx"
import { Icon } from "./Icon"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { MotionUl, MotionLi } from "../utils/lazy-ui"
import Image from "next/image"

const techGroups = [
  {
    title: "Mobile Engineering",
    icon: "/assets/icons/mobile-app-dev-icon.svg",
    items: [
      { name: "React Native", src: "react" },
      { name: "Expo Stack", src: "expo" },
      { name: "Zustand", src: "zustand" },
      { name: "Redux Toolkit", src: "redux" },
    ],
  },
  {
    title: "Web & UI Design",
    icon: "paint-bucket",
    items: [
      { name: "Next.js", src: "next" },
      { name: "React.js", src: "react" },
      { name: "Tailwind CSS", src: "tailwind" },
      { name: "Figma", src: "figma" },
    ],
  },
  {
    title: "Systems Core",
    icon: "code",
    items: [
      { name: "TypeScript", src: "typescript" },
      { name: "JavaScript", src: "javascript" },
      { name: "Git / GitHub", src: "github" },
      { name: "Firebase", src: "firebase" },
    ],
  },
  {
    title: "AI Workspace",
    icon: "rocket",
    items: [
      { name: "Cursor", src: "cursor-icon" },
      { name: "Claude AI", src: "claude-ai" },
      { name: "Antigravity", src: "antigravity" },
      { name: "OpenAI", src: "openai" },
    ],
  },
]

const services = [
  {
    name: "Mobile App Development",
    desc: "Crafting high-performance, cross-platform apps with React Native & Expo.",
    src: "/assets/icons/mobile-app-dev-icon.svg",
  },
  {
    name: "Front-End Engineering",
    desc: "Building scalable, responsive web architectures using Next.js & React.",
    src: "paint-bucket",
  },
  {
    name: "Performance Optimization",
    desc: "Optimizing bundle sizes, render cycles, and native bridge communication.",
    src: "web",
  },
  {
    name: "App Store Deployments",
    desc: "Managing the full lifecycle from CI/CD to Google Play & Apple App Store.",
    src: "world",
  },
  {
    name: "Team Leadership",
    desc: "Leading engineering squads and establishing high-quality code standards.",
    src: "planet",
  },
  {
    name: "Developer Mentorship",
    desc: "Upskilling junior developers through code reviews and architecture workshops.",
    src: "cube",
  },
]

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const element = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
}

export const ServicesSectionV2: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section id="technologies" className={clsx("inside-container flex flex-col gap-24 py-24", className)}>
      <div className="flex flex-col items-center text-center gap-4">
        <AnimatedH2>
          Technical <br />
          <span className="text-slate-500">Expertise</span>
        </AnimatedH2>
        <p className="max-w-2xl text-slate-500 text-lg">
          A production-grade toolkit refined through 2+ years of architecting scalable mobile and web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2">
        {techGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-xl border border-slate-800 p-2.5">
                {group.icon.startsWith("/") ? (
                  <Image src={group.icon} alt={group.title} width={20} height={20} className="invert brightness-200" />
                ) : (
                  <Icon name={group.icon} width={26} height={26} className={group.icon === "paint-bucket" ? "invert" : "text-white"} />
                )}
              </span>
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{group.title}</h3>
            </div>
            <MotionUl
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              {group.items.map((item) => (
                <MotionLi key={item.name} variants={element}>
                  <div className="group relative flex flex-col items-center gap-3">
                    <div className="flex h-20 w-20 cursor-default items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-[0_4px_0_0_rgba(226,232,240,1)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:translate-y-[4px] hover:shadow-none active:scale-95">
                      <Icon name={item.src} width={38} height={38} className="object-contain transition-transform duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-90" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] text-center">{item.name}</span>
                  </div>
                </MotionLi>
              ))}
            </MotionUl>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 pt-24">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col items-center text-center gap-3">
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Services & Specializations</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ name, desc, src }) => (
              <div
                key={name}
                className="group relative flex flex-col gap-6 p-8 rounded-3xl border border-slate-100 bg-white transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] active:translate-y-0 active:shadow-none"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 p-2.5">
                  {src.startsWith("/") ? (
                    <Image src={src} alt={name} width={22} height={22} className="invert brightness-200" />
                  ) : (
                    <Icon name={src} width={28} height={28} className="invert" />
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold text-slate-900">{name}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
