"use client"

import { FadeIn } from "@/components/fade-in"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How fast can we get started?",
    answer: "Most teams are live within 48 hours of signing up.",
  },
  {
    question: "Which cities do you deliver to?",
    answer: "Bangalore, Delhi NCR, Mumbai, Hyderabad, Pune, Chennai, Kolkata, Ahmedabad, plus 15+ tier-2 cities. Don't see yours? Talk to us.",
  },
  {
    question: "Can you accommodate veg, Jain, eggless, or gluten-free?",
    answer: "Yes. Captured per employee at onboarding. Every cake is matched to the recipient.",
  },
  {
    question: "What if an employee is on leave or working from home?",
    answer: "48 hours before delivery, we WhatsApp the manager to confirm the location. They can change it, reschedule, or skip it.",
  },
  {
    question: "Do you handle GST invoicing and vendor onboarding?",
    answer: "Yes. We're a GST-registered entity and handle all enterprise vendor onboarding requirements.",
  },
  {
    question: "Can we customize the cake design?",
    answer: "Yes. Custom toppers, company logos, personalized messages. Included in Growth and Enterprise plans.",
  },
  {
    question: "What if a delivery is missed?",
    answer: "Full refund or rescheduled delivery. Your call. We track every order end to end and flag issues proactively.",
  },
  {
    question: "What HR systems do you integrate with?",
    answer: "Direct integrations with Darwinbox, Keka, Zoho People, Razorpay X Payroll, and Zoho HRMS on the Enterprise plan. Using something else? Tell us, and we'll build it.",
  },
]

export function FaqSection() {
  return (
    <section className="py-20 lg:py-[120px] bg-muted/30">
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-center">
            Questions, answered
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="mt-12 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
