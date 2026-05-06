"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const steps = [
  {
    number: "01",
    title: "Upload your team",
    description: "Upload a CSV or share a Google Sheet. We capture names, birthdays, anniversaries, dietary preferences, and office cities.",
  },
  {
    number: "02",
    title: "Set your rules",
    description: "Cake size, budget, branding, delivery preference. Different rules for different cities or teams if you want.",
  },
  {
    number: "03",
    title: "We deliver, automatically",
    description: "48 hours before every birthday, we confirm with the manager via WhatsApp. Then we coordinate with the bakery and deliver fresh.",
  },
  {
    number: "04",
    title: "No more missed birthdays",
    description: "Every employee gets their cake. Your admin gets her time back.",
  },
]

export function HowItWorksPreview() {
  return (
    <section className="py-20 lg:py-[120px] bg-muted/30">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl">
            How it works
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground">
            Set it up once. We run it forever.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={0.2 + index * 0.1}>
              <div>
                <span className="font-serif text-4xl text-primary">{step.number}</span>
                <h3 className="mt-4 font-medium text-lg text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
            >
              See the full process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
