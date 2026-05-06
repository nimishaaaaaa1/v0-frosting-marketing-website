import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HowItWorksHero } from "@/components/how-it-works/hero"
import { StepsSection } from "@/components/how-it-works/steps-section"
import { FaqSection } from "@/components/how-it-works/faq-section"
import { CtaStrip } from "@/components/how-it-works/cta-strip"

export const metadata: Metadata = {
  title: "How It Works | Cremio",
  description: "From uploading your team list to Priya blowing out candles. See how Cremio automates employee birthdays for HR teams across India.",
}

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <HowItWorksHero />
        <StepsSection />
        <FaqSection />
        <CtaStrip />
      </main>
      <Footer />
    </>
  )
}
