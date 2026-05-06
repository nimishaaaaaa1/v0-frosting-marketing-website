"use client"

import { FadeIn } from "@/components/fade-in"

const testimonials = [
  {
    quote: "We used to miss 2-3 birthdays every month. Now it just works.",
    role: "HR Manager",
    company: "Series B Startup",
  },
  {
    quote: "The quality is consistent across all our offices.",
    role: "People Ops Lead",
    company: "Fintech Company",
  },
  {
    quote: "I got 10 hours back every month.",
    role: "Admin Head",
    company: "Enterprise Tech",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="mx-auto max-w-[1140px]">
        <FadeIn>
          <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.15] text-foreground">
            From HR teams using Frosting
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.role} delay={0.1 + index * 0.08}>
              <div className="bg-card rounded-xl border border-border p-8 shadow-sm h-full flex flex-col">
                <p className="text-[17px] text-foreground leading-[1.5] flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-medium text-foreground text-[15px]">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
