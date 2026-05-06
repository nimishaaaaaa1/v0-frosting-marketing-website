import { FadeIn } from "@/components/fade-in"

export function HowItWorksHero() {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <FadeIn>
          <h1 className="font-serif text-4xl text-foreground sm:text-5xl lg:text-6xl text-balance">
            How it works, end to end
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl leading-relaxed">
            From the moment you upload your team list to the moment Priya is blowing out candles.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
