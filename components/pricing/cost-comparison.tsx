"use client"

import { FadeIn } from "@/components/fade-in"
import { motion } from "framer-motion"

export function CostComparison() {
  return (
    <section className="py-20 lg:py-[120px] bg-muted/30">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-center">
            What you&apos;re spending now vs Frosting
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground text-center">
            We&apos;re not the cheapest option. Here&apos;s what you&apos;re actually getting.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* DIY Card */}
          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border border-border p-8 h-full"
            >
              <h3 className="font-serif text-xl text-foreground">Doing it yourself</h3>
              <p className="mt-1 text-sm text-muted-foreground">For a 200-person team</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
                  200 cakes/year x Rs. 700 = Rs. 1,40,000 cake cost
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
                  Admin time: 80 hours/year x Rs. 500/hr = Rs. 40,000
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
                  Missed birthdays, last-minute orders, inconsistency
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-serif text-xl text-foreground">Real cost: Rs. 1,80,000+/year</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Plus the morale cost of getting it wrong.
                </p>
              </div>
            </motion.div>
          </FadeIn>

          {/* Frosting Card */}
          <FadeIn delay={0.3}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border-2 border-primary p-8 h-full"
            >
              <h3 className="font-serif text-xl text-foreground">Doing it with Frosting</h3>
              <p className="mt-1 text-sm text-muted-foreground">For a 200-person team on Enterprise</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Custom annual contract: approx. Rs. 4,00,000/year
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Zero admin time
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Every birthday remembered
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Consistent quality across cities
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Better cakes, better cards
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-serif text-xl text-foreground">Total: Rs. 4L/year. It actually works.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We cost more. We&apos;re worth more.
                </p>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
