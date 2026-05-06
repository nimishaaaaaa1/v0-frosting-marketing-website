import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl text-balance">
            Ready to stop forgetting birthdays?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground">
            20-minute demo. We&apos;ll show you how it works.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Book a demo</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
