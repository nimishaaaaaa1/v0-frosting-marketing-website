"use client"

import { FadeIn } from "@/components/fade-in"
import { motion } from "framer-motion"

const values = [
  {
    title: "The cake has to be good",
    description: "Bad cake is worse than no cake. We work with bakeries you'd pick yourself.",
  },
  {
    title: "No missed birthdays",
    description: "Our 48-hour confirmation loop exists because we'd rather be annoying than wrong.",
  },
  {
    title: "No surprise pricing",
    description: "Per-cake pricing. Monthly billing. No annual lock-ins. If we're not earning your business every month, you should leave.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 lg:py-[120px] bg-muted/30">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            What we believe
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={0.1 + index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border border-border p-8 h-full"
              >
                <h3 className="font-serif text-xl text-foreground">{value.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
