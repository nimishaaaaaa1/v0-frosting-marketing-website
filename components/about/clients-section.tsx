import { FadeIn } from "@/components/fade-in"

export function ClientsSection() {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Teams that get it
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            From 30-person startups to 2,000-person enterprises, these teams trust Frosting to handle their employee celebrations.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-12 grid grid-cols-3 gap-6 md:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-16 bg-muted/50 rounded-lg flex items-center justify-center"
              >
                <span className="text-xs text-muted-foreground">Logo</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
