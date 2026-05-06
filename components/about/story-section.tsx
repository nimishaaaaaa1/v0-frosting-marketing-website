import { FadeIn } from "@/components/fade-in"

export function StorySection() {
  return (
    <section className="pb-20 lg:pb-[120px]">
      <div className="mx-auto max-w-[680px] px-6 lg:px-8">
        <FadeIn>
          <div className="prose prose-lg max-w-none">
            <p className="font-serif text-xl text-foreground leading-relaxed">
              At our last jobs, we noticed the same thing happening in every office we worked at. The same WhatsApp group called &quot;Office Cake Coordination&quot;. The same Slack message every Monday. The same overworked admin running to Theobroma at 11:47 AM.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-8 prose prose-lg max-w-none">
            <p className="font-serif text-xl text-foreground leading-relaxed">
              Birthday cakes are one of those small things that everyone agrees matters, but nobody actually owns. So we built Frosting.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 prose prose-lg max-w-none">
            <p className="font-serif text-xl text-foreground leading-relaxed">
              We&apos;re a small team based out of Bangalore and Delhi. We work with the best bakeries in 22 Indian cities. We obsess over little things like whether the new joiner&apos;s name is spelled right on the topper. The little things are the whole product.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-8 prose prose-lg max-w-none">
            <p className="font-serif text-xl text-foreground leading-relaxed font-medium">
              We&apos;re not the cheapest. We&apos;re the most reliable.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
