import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"

export function CtaStrip() {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
            Still have questions?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-6">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Talk to us</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
