"use client"

import { FadeIn } from "@/components/fade-in"
import { motion } from "framer-motion"
import { FileSpreadsheet, Link as LinkIcon } from "lucide-react"

const methods = [
  {
    icon: FileSpreadsheet,
    title: "Excel sheet",
    description: "Upload once. We handle the rest.",
  },
  {
    icon: LinkIcon,
    title: "HRIS integration",
    description: "Darwinbox, Keka, Zoho People, Razorpay X Payroll.",
  },
]

export function DataIngestionSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="mx-auto max-w-[1140px]">
        <FadeIn>
          <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.15] text-foreground">
            Two ways to onboard
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-3xl">
          {methods.map((method, index) => (
            <FadeIn key={method.title} delay={0.1 + index * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-card rounded-xl border border-border p-8 shadow-sm h-full"
              >
                <method.icon className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-serif text-lg text-foreground">{method.title}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-[1.5]">
                  {method.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
