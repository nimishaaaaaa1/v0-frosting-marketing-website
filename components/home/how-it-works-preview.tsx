"use client"

import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Upload your team",
    description: "CSV, Google Sheet, or HRIS sync.",
  },
  {
    number: "02",
    title: "Set your rules",
    description: "Cake type, budget, branding, delivery.",
  },
  {
    number: "03",
    title: "We deliver",
    description: "Manager confirms via WhatsApp 48 hours before.",
  },
  {
    number: "04",
    title: "Done",
    description: "Every celebration handled. No follow-up needed.",
  },
]

export function HowItWorksPreview() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="mx-auto max-w-[1140px]">
        <FadeIn>
          <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.15] text-foreground">
            How it works
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={0.1 + index * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-card rounded-xl border border-border p-8 shadow-sm h-full"
              >
                <span className="font-mono text-sm text-primary">{step.number}</span>
                <h3 className="mt-3 font-serif text-lg text-foreground">{step.title}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-[1.5]">
                  {step.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-8">
            <Link
              href="/how-it-works"
              className="text-[15px] font-medium text-foreground hover:text-primary transition-colors"
            >
              See full process
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
