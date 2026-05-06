import { FadeIn } from "@/components/fade-in"

export function TrustStrip() {
  return (
    <section className="py-12 lg:py-16 border-y border-border">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground mb-8">
            Trusted by HR teams at
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-3 gap-6 md:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-12 bg-muted/50 rounded-lg flex items-center justify-center"
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
