"use client"

import { FadeIn } from "@/components/fade-in"
import { motion } from "framer-motion"
import { Leaf, MapPin, Cake, Palette, FileText, LayoutDashboard } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Dietary preferences captured per employee",
  },
  {
    icon: MapPin,
    title: "WhatsApp confirmation 48 hours before delivery",
  },
  {
    icon: Cake,
    title: "Premium bakery partners across 22 cities",
  },
  {
    icon: Palette,
    title: "Custom branded toppers and cards",
  },
  {
    icon: FileText,
    title: "GST invoicing and vendor onboarding",
  },
  {
    icon: LayoutDashboard,
    title: "Single dashboard for all celebrations",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="mx-auto max-w-[1140px]">
        <FadeIn>
          <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.15] text-foreground">
            Built for Indian offices
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={0.1 + index * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-card rounded-xl border border-border p-8 shadow-sm"
              >
                <feature.icon className="h-6 w-6 text-primary mb-4" />
                <p className="text-[15px] text-foreground leading-[1.5]">
                  {feature.title}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
