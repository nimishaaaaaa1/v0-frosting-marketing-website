import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/hero"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { CostComparison } from "@/components/pricing/cost-comparison"
import { PricingFaq } from "@/components/pricing/pricing-faq"
import { PricingCta } from "@/components/pricing/pricing-cta"

export const metadata: Metadata = {
  title: "Pricing | Frosting",
  description: "Honest pricing for employee birthday cakes. Pay per cake, every month. No annual contracts. No hidden fees.",
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingHero />
        <PricingCards />
        <CostComparison />
        <PricingFaq />
        <PricingCta />
      </main>
      <Footer />
    </>
  )
}
