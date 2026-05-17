export const DOMAIN_URL = "https://www.austinserb.com"

export const SITE_CONFIG = {
  title: "Sohaib Hussain Shah - React Native & Front-End Engineer",
  description:
    "Portfolio of Sohaib Hussain Shah, a results-driven React Native & React.js Engineer with 2+ years of professional experience building and shipping production mobile and web applications.",
  url: DOMAIN_URL ?? "http://localhost:3000",
  siteName: "Sohaib Hussain Shah",
  keywords: ["Sohaib Hussain Shah", "React Native", "React.js", "Next.js", "TypeScript", "Mobile Engineer", "Front-End Engineer", "Pakistan"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/serbyte-logo.png",
} as const

export const SITE_NAP = {
  name: "Sohaib Hussain Shah",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Sohaib Hussain Shah",
  contactTitle: "Associate Team Lead",
  email: "sohaibhussain456@gmail.com",
  phone: "+923187431934",
  formattedPhone: "+92 318 7431934",
  addressLink: "https://www.google.com/maps/search/?api=1&query=Okara,+Pakistan",
  street: "Okara",
  city: "Okara",
  state: "Punjab",
  zipCode: "56600",
  openingHours: [{ days: "Mon - Sat", hours: "8am - 6pm" }] as const,
  googleReviewLink: "",
  profiles: {
    facebook: "https://www.facebook.com/syed.sohaib.3994885",
    linkedIn: "https://www.linkedin.com/in/sohaibhussain456/",
    yelp: "",
    pinterest: "",
    gbp: "",
    github: "https://github.com/SyedSohaib456",
    instagram: "https://www.instagram.com/syedsohaib456/",
    x: "",
  } as const,
  logo: "/serbyte-logo.png",
  favicon: "/favicon.ico",
  images: ["https://www.serbyte.net/serbyte-logo.png", "https://www.serbyte.net/assets/bg-home-poster-optimized.webp"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about-austin-serb",
  projectLinks: {
    iao: "/projects/iron-and-oak",
    automedics: "/projects/automedics",
    bespoke: "/projects/bespoke",
  },
} as const

export const externalLinks = {
  vetsChoice: "https://vetschoiceinsurance.com/",
  zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "https://github.com/react-zero-ui/core",
  entitled: "https://be-entitled.com/",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
