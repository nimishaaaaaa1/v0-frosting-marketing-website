"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { motion } from "framer-motion"

const celebrations = [
  { name: "Priya Sharma", occasion: "Birthday", date: "Tuesday", city: "Bangalore", status: "Confirmed" },
  { name: "Arjun Mehta", occasion: "Anniversary", date: "Thursday", city: "Delhi NCR", status: "Scheduled" },
  { name: "Fatima Khan", occasion: "Birthday", date: "Friday", city: "Mumbai", status: "Confirmed" },
  { name: "Rohan Iyer", occasion: "Birthday", date: "Monday", city: "Hyderabad", status: "Scheduled" },
]

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <FadeIn>
              <h1 className="font-serif text-[36px] md:text-[56px] leading-[1.15] text-foreground">
                Thoughtful employee celebrations, automated.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-4 text-[17px] leading-[1.5] text-muted-foreground max-w-lg">
                Cremio handles birthday cakes, work anniversaries, and milestones for HR teams across India.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="transition-transform duration-200 hover:scale-[1.02]">
                  <Link href="/contact">Book a demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="transition-transform duration-200 hover:scale-[1.02]">
                  <Link href="/how-it-works">How it works</Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-4 text-sm text-muted-foreground">
                Live in 48 hours. No annual contracts.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-card rounded-xl border border-border p-6 lg:p-8 shadow-sm"
            >
              <p className="text-sm font-medium text-muted-foreground mb-4">
                Upcoming celebrations
              </p>
              <div className="space-y-4">
                {celebrations.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.08 }}
                    className="flex items-center gap-4"
                  >
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                      {item.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground text-[15px] truncate">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.occasion} · {item.date} · {item.city}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        item.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
