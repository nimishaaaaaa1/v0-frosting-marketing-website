"use client"

import { FadeIn } from "@/components/fade-in"
import { motion } from "framer-motion"
import { Leaf, MapPin, Cake, Palette, FileText, LayoutDashboard } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Veg, Jain, eggless, gluten-free",
    description: "Captured per employee. We never send the wrong cake to the wrong person.",
  },
  {
    icon: MapPin,
    title: "The hybrid work problem, solved",
    description: "We WhatsApp the manager 48 hours before delivery to confirm the location.",
  },
  {
    icon: Cake,
    title: "Actually good cakes",
    description: "We work with Theobroma, Bakingo, Baker's Dozen, L'Opéra, and Aubree across cities.",
  },
  {
    icon: Palette,
    title: "Custom branding",
    description: "Add your company logo or a personalized message to every cake topper.",
  },
  {
    icon: FileText,
    title: "GST and vendor onboarding",
    description: "We're a registered Indian entity. GST invoices, MSA, DPA, procurement docs ready.",
  },
  {
    icon: LayoutDashboard,
    title: "One dashboard",
    description: "Every upcoming celebration, every past delivery, every rupee spent. Filter by team or city.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl text-balance">
            Built for modern workplace reality
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={0.1 + index * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border border-border p-8 h-full"
              >
                <feature.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-medium text-lg text-foreground">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
