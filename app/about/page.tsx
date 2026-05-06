import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/hero"
import { StorySection } from "@/components/about/story-section"
import { ValuesSection } from "@/components/about/values-section"
import { AboutCta } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About | Cremio",
  description: "We built Cremio because people deserve to feel seen at work. Companies everywhere spend real money on employee celebrations. Almost none of it is done well.",
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
