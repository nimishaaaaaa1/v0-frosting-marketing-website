"use client"

import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="mx-auto max-w-[1140px] text-center">
        <FadeIn>
          <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.15] text-foreground">
            Stop forgetting birthdays.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-[17px] text-muted-foreground leading-[1.5]">
            Book a 20-minute demo.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8">
            <Button asChild size="lg" className="transition-transform duration-200 hover:scale-[1.02]">
              <Link href="/contact">Book a demo</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
