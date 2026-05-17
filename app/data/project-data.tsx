import { StaticImageData } from "next/image"
import { TintSimulator } from "../components/BespokeTint/TintSimulator"
import { Phase } from "../components/ProjectSection/ApproachSection"
import heroBefore from "@/public/assets/projects/bespoke/hero-before.png"
import heroBeforeMobile from "@/public/assets/projects/bespoke/hero-mobile.png"
import heroBeforeAutomedics from "@/public/assets/projects/automedics/before.png"
import heroBeforeMobileAutomedics from "@/public/assets/projects/automedics/mobile.png"
import { AnalyticCardProps } from "../components/ProjectSection/ResultsSection"
import { TrafficBarChart } from "../components/ProjectSection/TrafficBarChart"
import { RadialProgressRing } from "../components/ProjectSection/RadialProgressRing"
import { LineChart } from "../components/ProjectSection/LineChart"
import { REVIEW_MAP, type ReviewProps } from "./review-data"
import heroBeforeIao from "@/public/assets/projects/iron-and-oak/iron-and-oak-before-website-design.jpg"
import heroBeforeMobileIao from "@/public/assets/projects/iron-and-oak/iron-and-oak-before-website-design-mobile.jpg"
import { ApproachTabsImage } from "../components/ProjectSection/ApproachTabsImage"
import easyQuranPreview from "@/public/assets/projects/easyquran/preview.png"
import watchbotsPreview from "@/public/assets/projects/watchbots/preview.png"

//   interface ProjectData {
//   hero: {
//     title: string
//     client: string
//     year: string
//     description: string | React.ReactNode
//     categories: string[]
//     link: string
//   }
//   beforeAfter: { heroBefore: StaticImageData; heroBeforeMobile: StaticImageData; iframe?: string; heroAfter?: StaticImageData }
//   results: {
//     title: string
//     description: string
//     percentageIncrease: number
//     chart: React.ReactNode
//     dataSource: string[]
//     phases: { id: number; title: string; subtitle: string; description: string; details: string[]; icon: string; feature: React.ReactNode }[]
//     review: {
//       quote: React.ReactNode
//       name: string
//       title: string
//       img: StaticImageData
//     }
//   }
// }

export interface ProjectHeroProps {
  title: string | React.ReactNode
  client: string
  year: string
  description: string | React.ReactNode
  categories: string[]
  // link to the client's website
  link: string
}

export type ProjectData = {
  hero: ProjectHeroProps
  beforeAfter: {
    heroBefore: StaticImageData
    heroBeforeMobile: StaticImageData
    iframe?: string
    heroAfter?: StaticImageData
    beforeAltText: string
    beforeMobileAltText: string
    afterAltText: string
  }
  results: AnalyticCardProps[]
  phases: Phase[]
  review: ReviewProps
  slug: string
}

export const bespoke: ProjectData = {
  hero: {
    title: "Growing Bespoke Tint & PPF to $1m+ in Revenue",
    client: "Bespoke Tint & PPF",
    year: "2025",
    description: (
      <>
        Bespoke Tint & PPF&apos;s site was rebuilt from the ground up into a lightning-fast, conversion-first engine, every page reverse-engineered around the
        highest-value competitor keywords in the Bellevue auto-styling market. In under 90 days, organic{" "}
        <span className="font-semibold">traffic increased by nearly 1,000%</span>; the shop is booking an average of{" "}
        <span className="font-semibold">3 new paying clients per day</span>; and it&apos;s on track to surpass $1M in 2025 revenue.
      </>
    ),
    categories: ["SEO", "Web Design", "Web Development", "Photography"],
    link: "https://www.bespokeauto.org/",
  },
  slug: "bespoke",
  beforeAfter: {
    heroBefore: heroBefore,
    beforeAltText: "Bespoke Tint & PPF Before",
    beforeMobileAltText: "Bespoke Tint & PPF Before Mobile",
    heroBeforeMobile: heroBeforeMobile,
    iframe: "/bespoke-hero.html",
    afterAltText: "Bespoke Tint & PPF After Website Design",
  },
  results: [
    {
      title: "Traffic Growth",
      description: "Increase post-launch from all channels",
      percentageIncrease: 966,
      chart: <TrafficBarChart startValue={150} endValue={1450} />,
      dataSource: "Based on 30 day traffic average",
    },
    {
      title: "Conversion Rate",
      description: "Online visitor conversion improvement",
      percentageIncrease: 45,
      chart: <RadialProgressRing />,
      dataSource: "Measured over a 60 day period",
    },
    {
      title: "Revenue Growth",
      description: "Increase post-launch",
      percentageIncrease: 35,
      chart: <LineChart />,
      dataSource: "Measured over a 90 day period",
    },
  ],

  phases: [
    {
      id: 1,
      title: "Design System",
      subtitle: "Beautiful High-Converting Design",
      description:
        "Created a stunning design system that showcases amazing reviews while maintaining a slightly rebellious edge through strategic use of clip paths and angular elements.",
      details: [
        "Implemented clip-path CSS for edgy, non-traditional section borders",
        "Designed around extensive customer reviews and testimonials",
        "Created a cohesive design system with rebel aesthetic touches",
        "Incorporated angular elements instead of traditional straight lines",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/projects/bespoke/brand-images.jpg" alt="Competitor Analysis" />,
    },
    {
      id: 2,
      title: "Quality Assets",
      subtitle: "Premium Visual Content",
      description:
        "Developed stunning HD videos and high-quality images with crystal-clear call-to-actions strategically placed throughout the entire user journey.",
      details: [
        "Professional HD video content showcasing services",
        "High-resolution photography of completed work",
        "Strategic placement of clear call-to-action buttons",
        "Optimized media for fast loading times",
        "Created visual hierarchy to guide user attention",
      ],
      icon: "/assets/assets-black-camera.webp",
      feature: (
        <video className="hero-section absolute inset-0 h-full w-full object-cover saturate-200" muted loop preload="metadata" autoPlay playsInline>
          <source src="/videos/clip-450.mp4" type="video/mp4" media="(max-width: 450px)" />
          <source src="/videos/clip-600.mp4" type="video/mp4" media="(max-width: 600px) and (min-width: 451px)" />
          <source src="/videos/clip-1200.mp4" type="video/mp4" media="(min-width: 601px) and (max-width: 1023px)" />
          <source src="/videos/clip.mp4" type="video/mp4" media="(min-width: 1024px)" />
          Your browser does not support the video tag.
        </video>
      ),
    },
    {
      id: 3,
      title: "Competitor Analysis",
      subtitle: "Traffic Generation Strategy",
      description:
        "Reverse-engineered competitor content and identified high-traffic keywords to build a content strategy that dominates local search results.",
      details: [
        "Analyzed top 5 competitors in the Bellevue area",
        "Used advanced SEO tools to identify high-traffic keywords",
        "Reverse-engineered successful competitor content strategies",
        "Built site copy around proven keyword opportunities",
        "Implemented technical SEO best practices",
      ],
      icon: "/assets/search-black.webp",
      feature: <ApproachTabsImage src="/assets/projects/bespoke/competitor-analysis.png" alt="Competitor Analysis" />,
    },
    {
      id: 4,
      title: "Content & Blog",
      subtitle: "Authority Building Through Education",
      description:
        "Created comprehensive blog content focusing on Washington State tint laws - the #1 traffic driver - with legal citations and expert insights.",
      details: [
        "Researched and wrote detailed tint law articles",
        "Answered every possible question about WA state regulations",
        "Used high-quality citations from legal websites",
        "Created evergreen content that drives consistent traffic",
        "Established the business as the local authority on tinting",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/projects/bespoke/washington-vehicle-tint-law-illustration.webp" alt="Tint Law Article" />,
    },
    {
      id: 5,
      title: "Interactive Tools",
      subtitle: "Window Tint Simulator",
      description: "Developed a custom window tint simulator allowing users to visualize different tint percentages in real-time - a unique engagement tool.",
      details: [
        "Built custom slider-based tint percentage simulator",
        "Real-time visual feedback for different tint levels",
        "Interactive tool increases user engagement and time on site",
        "Unique differentiator from competitors + SEO benefit",
      ],
      icon: "/assets/tool-black.webp",
      feature: <TintSimulator className="h-full w-full" />,
    },
  ],
  review: REVIEW_MAP.bespoke,
}

export const automedicsKirkland: ProjectData = {
  hero: {
    title: "Transforming Automedics Kirkland's Online Presence",
    client: "Automedics Kirkland",
    year: "2025",
    description:
      "I replaced Automedics Kirkland's dated brochure site with a conversion-focused, SEO-engineered Next.js platform that channels local search traffic into booked service bays and showcases 1,000+ five-star reviews.",
    categories: ["Next.js", "Web Design", "Local SEO", "Copywriting"],
    link: "https://www.automedicskirkland.com",
  },
  slug: "automedics",

  beforeAfter: {
    heroBefore: heroBeforeAutomedics,
    beforeAltText: "Automedics Kirkland Before",
    beforeMobileAltText: "Automedics Kirkland Before Mobile",
    heroBeforeMobile: heroBeforeMobileAutomedics,
    iframe: "https://www.automedicskirkland.com",
    afterAltText: "Automedics Kirkland After Website Design",
  },
  results: [
    {
      title: "Traffic Growth",
      description: "Increase post-launch from all channels",
      percentageIncrease: 960,
      chart: <TrafficBarChart startValue={25} endValue={240} />,
      dataSource: "Based on 30 day traffic average",
    },
    {
      title: "Conversion Rate",
      description: "Online visitor conversion improvement",
      percentageIncrease: 85,
      chart: <RadialProgressRing percentage={85} />,
      dataSource: "Measured over a 60 day period",
    },
    {
      title: "Revenue Growth",
      description: "Increase post-launch",
      percentageIncrease: 15,
      chart: <LineChart />,
      dataSource: "Measured over a 90 day period",
    },
  ],

  phases: [
    {
      id: 1,
      title: "Brand Creation",
      subtitle: "From Zero to Hero",
      description: "Started from scratch to re-brand AutoMedics Kirkland, establishing them as the trusted automotive expert in their market.",
      details: [
        "Designed custom logo reflecting mechanical precision",
        "Selected color palette balancing trust and energy",
        "Created comprehensive brand guidelines document",
        "Developed consistent visual language across all touchpoints",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/projects/automedics/automedics-brand-guide-example.webp" alt="AutoMedics Brand Identity" />,
    },
    {
      id: 2,
      title: "Performance",
      subtitle: "Sppeed That Converts",
      description:
        "Leveraged Next.js to create an incredibly fast website that loads instantly, keeping potential customers engaged instead of bouncing to competitors.",
      details: [
        "Server-side rendering for instant page loads",
        "Automatic code splitting for optimal performance",
        "Progressive web app features for mobile users",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/projects/automedics/performance-metrics-automedics-web-development.webp" alt="Performance Metrics" />,
    },
    {
      id: 3,
      title: "Visuals",
      subtitle: "Trust Through Imagery",
      description:
        "Curated and optimized visuals that tell AutoMedics' story of expertise and reliability, turning skeptical visitors into confident customers.",
      details: [
        "Sourced authentic shop and service imagery",
        "Implemented smart lazy loading for faster browsing",
        "Optimized every asset for web without quality loss",
      ],
      icon: "/assets/assets-black-camera.webp",
      feature: <ApproachTabsImage src="/assets/projects/automedics/trust-badges-automedics-web-design.webp" alt="AutoMedics Visual Assets" />,
    },
    {
      id: 4,
      title: "Social Proof",
      subtitle: "Design That Drives Business",
      description: "Engineered elements to showcase AutoMedics' 1,000-plus 5 star reviews.",
      details: [
        "Displayed 1,000+ reviews on the homepage",
        "Showcased 100+ Google reviews on the services page",
        "Added a Google Business Profile badge to the homepage",
        "Added a Google Business Profile badge to the services page",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/projects/automedics/review-showcase-automedics-website-design.webp" alt="Review Showcase" />,
    },
  ],
  review: REVIEW_MAP.automedics,
}

export const iao: ProjectData = {
  hero: {
    title: (
      <>
        Telling the Story <br /> of Iron & Oak
      </>
    ),
    client: "Iron & Oak Seattle",
    year: "2024",
    description:
      "I dug into Iron & Oak Seattle's origin story-founded amid the COVID-19 disruptions-and rebuilt their website in Next.js around a clear, narrative-driven structure. I also scraped the web for press mentions and coverage to reinforce credibility. The goal was simple: increase qualified online applicants. It worked, driving a noticeable lift in submissions.",
    categories: ["Next.js", "Web Design", "Web Development", "Storytelling"],
    link: "https://iao-seattle.vercel.app/?src=serbyte",
  },
  slug: "iron-and-oak",
  beforeAfter: {
    heroBefore: heroBeforeIao,
    heroBeforeMobile: heroBeforeMobileIao,
    iframe: "https://iao-seattle.vercel.app/?src=serbyte",
    beforeAltText: "Iron & Oak Seattle Before",
    beforeMobileAltText: "Iron & Oak Seattle Before Mobile",
    afterAltText: "Iron & Oak Seattle After Website Design",
  },
  results: [
    {
      title: "Traffic Increase",
      description: "Increase in traffic from all channels",
      percentageIncrease: 4100,
      chart: <TrafficBarChart startValue={10} endValue={410} />,
      dataSource: "Based on 30 day traffic average",
    },
    {
      title: "Online Applicants",
      description: "Increase in online job applicants",
      percentageIncrease: 290,
      chart: <RadialProgressRing percentage={290} />,
      dataSource: "Measured over a 60 day period",
    },
    {
      title: "Hires",
      description: "Increase in new hires",
      percentageIncrease: 65,
      chart: <LineChart />,
      dataSource: "Measured over a 30 day period",
    },
  ],

  phases: [
    {
      id: 1,
      title: "Brand Identity",
      subtitle: "Creating a brand that tells the story of Iron & Oak",
      description: "Started from scratch to re-brand Iron & Oak Seattle, establishing them as the trusted private security company in their market.",
      details: [
        "Designed custom logo reflecting the brand name and the company's history",
        "Created a brand story that tells the story of Iron & Oak",
        "Created a brand guidelines document",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/projects/iron-and-oak/iron-and-oak-brand-guide-web-design.png" alt="Iron & Oak Brand Identity" />,
    },
    {
      id: 2,
      title: "Live Incident Data",
      subtitle: "Showing the world what Iron & Oak is all about",
      description: "We created a live incident data dashboard that displays incidents in real-time, connected to a live incident data API.",
      details: ["Airtable API integration for incident data", "Displays incidents in real-time"],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/projects/iron-and-oak/iron-and-oak-website-tool.png" alt="Iron & Oak Website Tool" className="bg-slate-800 px-2.5" />,
    },
    {
      id: 3,
      title: "Press Hub",
      subtitle: "Verified press & community coverage.",
      description: "Curated, verified media mentions centralizing third-party authority to boost trust & conversion.",
      details: [
        "Aggregated all credible third-party mentions",
        "Verified sources; removed low-value noise",
        "Structured data boosts authority signals",
        "Trust hub: social proof near conversion.",
      ],
      icon: "/assets/assets-black-camera.webp",
      feature: (
        <ApproachTabsImage src="/assets/projects/iron-and-oak/iron-and-oak-media-coverage-website-research.png" alt="Iron & Oak Media Coverage" className="bg-slate-200 px-2.5" />
      ),
    },
    {
      id: 4,
      title: "Talent SEO",
      subtitle: "A topical authority engine for security job seekers",
      description: "Designed a content cluster targeting Washington security guard career keywords and established Iron & Oak as the regional authority.",
      details: [
        "37 intent-mapped articles building authority",
        "Targeted WA security job & license keywords",
        "Internal links (pillar/support) speed indexation",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/projects/iron-and-oak/iron-and-oak-content-cluster-seo.png" alt="Iron & Oak Content Cluster SEO" />,
    },
    {
      id: 5,
      title: "Applicant Portal",
      subtitle: "Multi-step validated, resume auto-fill, and applicant tracking",
      description: "Built a multi-step, validated application with autosave + resume, cutting friction and preserving in-progress candidates.",
      details: [
        "Stepper UI with clear stage + progress",
        "Client + server validation prevents bad submits",
        "Autosave each step (no data loss)",
        "Resume later via stored progress state",
      ],
      icon: "/assets/search-black.webp",
      feature: <ApproachTabsImage src="/assets/projects/iron-and-oak/iron-and-oak-job-application-portal-web-design.png" alt="Iron & Oak Applicant Portal" />,
    },
  ],
  review: REVIEW_MAP.iao,
}
export const easyQuranAI: ProjectData = {
  hero: {
    title: "Revolutionizing Quran Learning with EasyQuran AI",
    client: "EasyQuran AI",
    year: "2025",
    description: (
      <>
        Built and released production-grade mobile applications on the <span className="font-semibold">App Store and Google Play</span>. The platform combines advanced AI with a seamless user experience to make Quran learning accessible, featuring real-time recitations and translations.
      </>
    ),
    categories: ["React Native", "Expo", "Mobile Development", "AI Integration"],
    link: "https://www.easyquran.ai/",
  },
  slug: "easyquran-ai",
  beforeAfter: {
    heroBefore: easyQuranPreview,
    beforeAltText: "EasyQuran AI App Preview",
    beforeMobileAltText: "EasyQuran AI Mobile Preview",
    heroBeforeMobile: easyQuranPreview,
    afterAltText: "EasyQuran AI Production Release",
  },
  results: [
    {
      title: "App Downloads",
      description: "Increase post-launch",
      percentageIncrease: 500,
      chart: <TrafficBarChart startValue={0} endValue={5000} />,
      dataSource: "App Store & Play Store Analytics",
    },
    {
      title: "User Retention",
      description: "Active daily users growth",
      percentageIncrease: 65,
      chart: <RadialProgressRing percentage={65} />,
      dataSource: "Measured over a 90 day period",
    },
    {
      title: "Performance",
      description: "App responsiveness improvement",
      percentageIncrease: 40,
      chart: <LineChart />,
      dataSource: "Vitals and crash reporting",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Architecture",
      subtitle: "Scalable Mobile Foundation",
      description: "Designed a robust architecture using React Native and Expo, ensuring seamless cross-platform performance and easy maintenance.",
      details: ["Implemented atomic design system for components", "Configured Expo dev-client for custom native modules", "Set up automated CI/CD for store deployments"],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/projects/easyquran/preview.png" alt="App Architecture" />,
    },
  ],
  review: {
    quote: "Sohaib's expertise in React Native was crucial for the successful launch of EasyQuran AI. He delivered a high-quality product that exceeded our expectations.",
    name: "Product Owner",
    title: "EasyQuran AI",
    img: "/assets/projects/easyquran/preview.png",
  },
}

export const watchbots: ProjectData = {
  hero: {
    title: "AI-Driven Monitoring with Watchbots",
    client: "Watchbots",
    year: "2025",
    description: "Developed a comprehensive AI monitoring platform that provides real-time analytics and bot management. The platform features a high-performance dashboard with complex data visualizations.",
    categories: ["Next.js", "AI", "Dashboard", "Real-time Analytics"],
    link: "https://watchbots.vercel.app/",
  },
  slug: "watchbots",
  beforeAfter: {
    heroBefore: watchbotsPreview,
    beforeAltText: "Watchbots Dashboard Preview",
    beforeMobileAltText: "Watchbots Mobile Preview",
    heroBeforeMobile: watchbotsPreview,
    afterAltText: "Watchbots Live Platform",
  },
  results: [
    {
      title: "Monitoring Efficiency",
      description: "Reduction in response time",
      percentageIncrease: 80,
      chart: <TrafficBarChart startValue={100} endValue={20} />,
      dataSource: "System logs analysis",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Dashboard Design",
      subtitle: "Data-Rich Visualizations",
      description: "Created a premium dashboard using Next.js and high-performance charting libraries to provide real-time insights.",
      details: ["Integrated real-time websocket data feeds", "Optimized complex charts for performance", "Implemented sleek dark mode design"],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/projects/watchbots/preview.png" alt="Dashboard Design" />,
    },
  ],
  review: {
    quote: "The Watchbots platform is a game-changer for our monitoring needs. Sohaib's attention to detail and technical skill are evident in every part of the dashboard.",
    name: "Lead Engineer",
    title: "Watchbots",
    img: "/assets/projects/watchbots/preview.png",
  },
}
