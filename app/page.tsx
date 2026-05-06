import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { TrustStrip } from "@/components/home/trust-strip"
import { ProblemSection } from "@/components/home/problem-section"
import { HowItWorksPreview } from "@/components/home/how-it-works-preview"
import { FeaturesSection } from "@/components/home/features-section"
import { DataIngestionSection } from "@/components/home/data-ingestion-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { LeadCaptureSection } from "@/components/home/lead-capture-section"
import { FinalCtaSection } from "@/components/home/final-cta-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <ProblemSection />
        <HowItWorksPreview />
        <FeaturesSection />
        <DataIngestionSection />
        <TestimonialsSection />
        <LeadCaptureSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}
