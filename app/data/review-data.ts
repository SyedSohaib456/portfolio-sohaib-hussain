import { StaticImageData } from "next/image"

export interface ReviewProps {
  quote: React.ReactNode
  name: string
  title: string
  img: StaticImageData | string
  id?: string
}

export const REVIEWS = [
  {
    id: "entitled",
    img: "/assets/clients/yassine-rhamani-profile-photo.jpeg",
    name: "Yassine Ramani",
    title: "CEO, Entitled",
    quote:
      "Sohaib's technical leadership transformed our development process. His implementation of React Native and frontend architecture improved our performance by 10x, and his mentorship helped level up our entire development team. He combines deep technical expertise with the rare ability to communicate complex concepts clearly.",
  },
  {
    id: "herba-naturals",
    img: "/assets/profile.webp",
    name: "Sami Raheem",
    title: "Owner, Herba Naturals",
    quote:
      "At the time, Sohaib was working solo, yet he delivered an application that exceeded all our expectations. It was fast, user-friendly, and packed with premium features like automated triggers and AI integration. Finding a professional developer who goes beyond the basics is rare—Sohaib delivered in every way.",
  },
  {
    id: "vets-choice",
    img: "/assets/projects/vets-choice/preview.webp",
    name: "Rob Dow",
    title: "Co-Founder, Vets Choice Insurance",
    quote:
      "The aftercare is unbeatable. Being an insurance company, we had to go through many rounds of revisions to comply with our legal requirements. Sohaib was always available to help and make sure we were happy with the final product. I highly recommend him for any custom development needs.",
  },
  {
    id: "bespoke",
    img: "/assets/clients/bespoke-tint-owner-kris-256.webp",
    name: "Kris Meyer",
    title: "Owner, Bespoke Tint",
    quote:
      "Sohaib took our vision and built a platform that makes our business look as professional online as it is in person. We've already seen a huge increase in calls and bookings. Couldn't recommend Sohaib enough.",
  },
  {
    id: "iao",
    img: "/assets/clients/aleksandr-butowicz-iron-oak-profile-photo.jpg",
    name: "Aleks Butokowitz",
    title: "CEO, Iron & Oak",
    quote:
      "Working with Sohaib felt like working with an in-house team. He took the time to understand our mission and goals, delivering a system that perfectly blended branding and design with seamless functionality. His expertise was evident in every detail, from performance to aesthetics.",
  },

  {
    id: "automedics",
    name: "Jeff Egbert",
    title: "Owner, Automedics Kirkland",
    quote: "Sohaib built our system fast and it works flawlessly. He is always available to answer questions or solve problems. Great experience.",
    img: "/assets/projects/automedics/preview.webp",
  },
] as const satisfies readonly ReviewProps[]

// O(1) lookup
export const REVIEW_MAP: Record<string, ReviewProps> = Object.fromEntries(REVIEWS.map((r) => [r.id, r]))

export function getReview(id: string) {
  return REVIEW_MAP[id]
}
