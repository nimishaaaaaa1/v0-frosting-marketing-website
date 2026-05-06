import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/hero"
import { StorySection } from "@/components/about/story-section"
import { ValuesSection } from "@/components/about/values-section"
import { AboutCta } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About | Frosting",
  description: "We started Frosting because somebody had to. Indian offices spend more on birthday cakes than they realize. We're here to fix that.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <StorySection />
        <ValuesSection />
        <AboutCta />
      </main>
      <Footer />
    </>
  )
}
