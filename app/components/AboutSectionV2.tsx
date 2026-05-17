import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "@/public/assets/pfp.jpeg"
import signature from "@/public/assets/signature.png"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about-austin-serb" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          Sohaib Hussain Shah
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Sohaib Hussain Shah" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                Sohaib Hussain Shah
              </Text>
              <p className="text-sm text-gray-500 font-medium">Senior Software Engineer & Associate Team Lead</p>

              {/* Social Links */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a href="https://github.com/" target="_blank" rel="noreferrer" title="GitHub" className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/sohaibhussain456/" target="_blank" rel="noreferrer" title="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:text-white hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://www.instagram.com/syedsohaib456/" target="_blank" rel="noreferrer" title="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-[#E1306C] hover:bg-[#E1306C] hover:text-white hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.facebook.com/syed.sohaib.3994885" target="_blank" rel="noreferrer" title="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="mailto:sohaibhussain456@gmail.com" title="Email" className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-[#EA4335] hover:bg-[#EA4335] hover:text-white hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
              </div>

              {/* Custom Signature */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-1 items-start">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Craft & Conviction</span>
                <div className="relative h-20 w-44 filter brightness-95 opacity-90 select-none -translate-x-3">
                  <Image src={signature} alt="Sohaib Hussain Shah Signature" fill className="object-contain" />
                </div>
              </div>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              I build mobile and web experiences that people actually use with a focus on <strong className="font-semibold text-slate-900">performance, scalability, and real-world impact</strong>.
            </p>

            <p>
              I’m a <strong className="font-semibold text-slate-900">React Native Engineer and Associate Team Lead</strong> with 2+ years of experience in production environments. Currently, I lead a front-end team of 3–5 engineers at <span className="font-semibold text-slate-900">Dev Entity</span>, where I manage sprint execution, task allocation, and code quality across multiple ongoing projects.
            </p>

            <p>
              My focus goes beyond writing code. I think in terms of <strong className="font-semibold text-slate-900">architecture, maintainability, and user experience</strong>. I’ve grown from building React components to leading sprint planning sessions, mentoring junior developers, and contributing to technical decisions that directly impact product quality.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Key Impact:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Improved application performance by <strong className="text-slate-900">~20–30%</strong> through optimization techniques such as memoization, lazy loading, and efficient list rendering.</li>
                <li>Contributed to multiple mobile and web applications with long-term ownership of core production features.</li>
                <li>Mentored junior developers through structured feedback and pair programming, improving onboarding speed and code quality.</li>
                <li>Introduced structured code review practices that reduced recurring issues and improved development consistency.</li>
              </ul>
            </div>
          </Typography>
        </div>
      </div>
    </section>
  )
}
