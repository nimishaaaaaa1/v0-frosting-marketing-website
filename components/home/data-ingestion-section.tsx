"use client"

import { FadeIn } from "@/components/fade-in"
import { motion } from "framer-motion"
import { FileSpreadsheet, Link as LinkIcon } from "lucide-react"

const methods = [
  {
    icon: FileSpreadsheet,
    title: "Send us an Excel sheet",
    description: "Name, birthday, work anniversary, dietary preference, office city. We'll share a template. Upload once, we handle the rest.",
  },
  {
    icon: LinkIcon,
    title: "Connect your HRIS",
    description: "Using Darwinbox, Keka, Zoho People, or Razorpay X Payroll? We have direct integrations on the Enterprise plan. One-click sync, no manual updates.",
  },
]

export function DataIngestionSection() {
  return (
    <section className="py-20 lg:py-[120px] bg-muted/30">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl">
            How we get your team data
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground">
            Two ways. Pick whichever is easier for you.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {methods.map((method, index) => (
            <FadeIn key={method.title} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border border-border p-8 h-full"
              >
                <method.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-medium text-xl text-foreground">{method.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
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
