"use client"

import { FadeIn } from "@/components/fade-in"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "We used to spend 3-4 hours every week coordinating cakes. Now it just happens. The hybrid work integration alone saves us massive headaches.",
    name: "Sneha R.",
    role: "Office Manager at a Big 4 firm, Gurgaon",
  },
  {
    quote: "Our team grew from 80 to 200 in a year. Frosting scaled with us without any hiccups. Every new joiner gets their cake on time.",
    name: "Vikram S.",
    role: "People Experience Lead at a 200-person SaaS company, Bangalore",
  },
  {
    quote: "The GST invoicing and vendor onboarding made procurement approve this in one meeting. That never happens.",
    name: "Anjali M.",
    role: "Admin Head at a tech captive, Hyderabad",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl">
            What HR teams are saying
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border border-border p-8 h-full flex flex-col"
              >
                <p className="font-serif text-lg italic text-foreground leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
