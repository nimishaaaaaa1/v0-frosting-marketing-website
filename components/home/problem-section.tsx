"use client"

import { FadeIn } from "@/components/fade-in"
import { motion } from "framer-motion"

const problems = [
  {
    title: "The Slack message",
    description: "Every Monday: 'Whose birthday is it this week?' Every single Monday.",
  },
  {
    title: "The Swiggy panic",
    description: "11:47 AM. Cake needs to be cut at 1 PM. Nobody ordered it. A junior runs.",
  },
  {
    title: "The new joiner problem",
    description: "They joined three weeks ago. Their birthday was yesterday. You'll hear about it at exit interview.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl text-balance">
            HR shouldn&apos;t be doing bakery runs.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">
            Forgetting birthdays. Last-minute Swiggy orders. Inconsistent cake quality across cities. New joiners whose first birthday gets missed. We&apos;ve worked at offices that do all of this. So we built Frosting.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((problem, index) => (
            <FadeIn key={problem.title} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border border-border p-8 h-full"
              >
                <h3 className="font-serif text-xl text-foreground">{problem.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
