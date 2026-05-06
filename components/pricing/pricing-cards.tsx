"use client"

import Link from "next/link"
import { Check, X } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Basic",
    tag: "Teams of 1 to 30 employees",
    price: "₹999",
    priceNote: "/ month platform fee",
    cakePrice: "+ ₹899 per cake delivered",
    features: [
      { text: "Office address delivery only", included: true },
      { text: "Standard cake from partner bakery", included: true },
      { text: "Basic dashboard", included: true },
      { text: "Email support", included: true },
      { text: "Veg, eggless options", included: true },
      { text: "Custom branded card", included: false },
      { text: "Manager WhatsApp confirmation", included: false },
      { text: "Custom cake topper with logo", included: false },
      { text: "Multi-city delivery", included: false },
      { text: "GST-compliant invoicing", included: false },
    ],
    cta: "Get started",
    ctaLink: "/contact",
    highlighted: false,
  },
  {
    name: "Growth",
    tag: "Teams of 31 to 80 employees",
    badge: "Most popular",
    price: "₹3,999",
    priceNote: "/ month platform fee",
    cakePrice: "+ ₹899 per cake delivered",
    features: [
      { text: "Everything in Basic", included: true },
      { text: "Custom branded happy birthday card", included: true },
      { text: "Manager WhatsApp confirmation flow", included: true },
      { text: "Home delivery for WFH employees", included: true },
      { text: "Custom cake topper with company logo", included: true },
      { text: "Work anniversary automation", included: true },
      { text: "GST-compliant invoicing", included: true },
      { text: "Priority support, 4-hour response", included: true },
    ],
    cta: "Start free trial",
    ctaLink: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tag: "Teams of 80+ employees",
    price: "Custom",
    priceNote: "",
    cakePrice: "Per-cake pricing from ₹699 (volume discount)",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Multi-city delivery across India", included: true },
      { text: "HRIS integrations", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom cake design library", included: true },
      { text: "Quarterly business reviews", included: true },
      { text: "SLA guarantees", included: true },
      { text: "Vendor onboarding and MSA support", included: true },
    ],
    cta: "Talk to us",
    ctaLink: "/contact",
    highlighted: false,
  },
]

export function PricingCards() {
  return (
    <section className="pb-20 lg:pb-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <FadeIn key={plan.name} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border-2 p-8 h-full flex flex-col ${
                  plan.highlighted ? "border-primary" : "border-border"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">{plan.tag}</p>
                  <h3 className="mt-2 font-serif text-3xl text-foreground">{plan.price}</h3>
                  {plan.priceNote && (
                    <p className="text-sm text-muted-foreground">{plan.priceNote}</p>
                  )}
                  <p className="mt-1 text-sm text-muted-foreground">{plan.cakePrice}</p>
                </div>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/40 shrink-0 mt-0.5" />
                      )}
                      <span
                        className={
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground/60"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    asChild
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    <Link href={plan.ctaLink}>{plan.cta}</Link>
                  </Button>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
