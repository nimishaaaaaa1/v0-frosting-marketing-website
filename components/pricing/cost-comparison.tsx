"use client"

import { FadeIn } from "@/components/fade-in"
import { motion } from "framer-motion"
import { AlertTriangle, Check, X } from "lucide-react"

export function CostComparison() {
  return (
    <section className="py-20 lg:py-[120px] bg-muted/30">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-center text-balance">
            What you&apos;re spending now vs Cremio
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
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <X className="h-5 w-5 text-muted-foreground/60 mt-0.5 shrink-0" />
                  <span>200 cakes/year x Rs. 700 = Rs. 1,40,000 cake cost</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <X className="h-5 w-5 text-muted-foreground/60 mt-0.5 shrink-0" />
                  <span>Admin time: 80 hours/year x Rs. 500/hr = Rs. 40,000</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <X className="h-5 w-5 text-muted-foreground/60 mt-0.5 shrink-0" />
                  <span>Last-minute orders, inconsistent quality across vendors</span>
                </li>
              </ul>

              {/* Missed Birthdays - Highlighted Warning */}
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-red-800">The hidden cost: Missed birthdays</p>
                    <p className="mt-1 text-sm text-red-700">
                      On average, teams miss 8-12 birthdays per year. Each missed birthday damages morale and makes employees feel invisible.
                    </p>
                    <p className="mt-2 text-sm font-medium text-red-800">
                      Cost of attrition from disengagement: Rs. 2,00,000+ per employee
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-serif text-xl text-foreground">Real cost: Rs. 1,80,000+/year</p>
                <p className="mt-2 text-sm text-red-600 font-medium">
                  Plus the incalculable cost of employees feeling forgotten.
                </p>
              </div>
            </motion.div>
          </FadeIn>

          {/* Cremio Card */}
          <FadeIn delay={0.3}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border-2 border-primary p-8 h-full"
            >
              <h3 className="font-serif text-xl text-foreground">Doing it with Cremio</h3>
              <p className="mt-1 text-sm text-muted-foreground">For a 200-person team on Enterprise</p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-foreground">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Custom annual contract: approx. Rs. 4,00,000/year</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Zero admin time - we handle everything</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Consistent quality from premium bakeries across cities</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Better cakes, personalized cards, custom branding</span>
                </li>
              </ul>

              {/* Zero Missed Birthdays - Highlighted Success */}
              <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-emerald-800">Zero missed birthdays. Ever.</p>
                    <p className="mt-1 text-sm text-emerald-700">
                      Our system syncs with your HRIS and sends automatic reminders. Every single employee gets celebrated on their special day.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-serif text-xl text-foreground">Total: Rs. 4L/year. It actually works.</p>
                <p className="mt-2 text-sm text-primary font-medium">
                  We cost more. We&apos;re worth more.
                </p>
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Bottom callout */}
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">The math is simple:</span> The cost of one disengaged employee leaving is 10x what you&apos;d spend on Cremio for a year.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
