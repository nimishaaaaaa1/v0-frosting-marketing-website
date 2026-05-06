import { FadeIn } from "@/components/fade-in"

export function PricingHero() {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <FadeIn>
          <h1 className="font-serif text-4xl text-foreground sm:text-5xl lg:text-6xl text-balance">
            Honest pricing. No surprises.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Pricing is based on team size. Pay per cake, every month. No annual contracts. No hidden fees.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 font-serif text-lg text-foreground max-w-[700px] leading-relaxed">
            Most companies of 200 people spend Rs. 14L+ a year on team celebrations when their admin handles it manually. Bakery runs, Swiggy orders, missed birthdays, junior staff time. We do it for less, and it actually works.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
