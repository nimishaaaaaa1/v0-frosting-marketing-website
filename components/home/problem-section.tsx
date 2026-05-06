"use client"

import { FadeIn } from "@/components/fade-in"
import { motion } from "framer-motion"
import { AlertCircle, Scale, Clock } from "lucide-react"

const problems = [
  {
    icon: AlertCircle,
    title: "Birthdays get missed.",
  },
  {
    icon: Scale,
    title: "Cake quality is inconsistent.",
  },
  {
    icon: Clock,
    title: "Admin teams waste hours every month.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="mx-auto max-w-[1140px]">
        <FadeIn>
          <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.15] text-foreground mb-4">
            Office celebrations are broken.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[17px] leading-[1.5] text-muted-foreground max-w-xl">
            Forgotten birthdays. Last-minute orders. Inconsistent quality across cities. We fix that.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((problem, index) => (
            <FadeIn key={problem.title} delay={0.2 + index * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-card rounded-xl border border-border p-8 shadow-sm"
              >
                <problem.icon className="h-6 w-6 text-primary mb-4" />
                <p className="font-serif text-xl text-foreground">
                  {problem.title}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
