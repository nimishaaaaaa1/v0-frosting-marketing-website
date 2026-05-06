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
    question: "Do you charge for cancelled deliveries?",
    answer: "No. If you cancel 24 hours before, no charge.",
  },
  {
    question: "What if my team grows mid-month?",
    answer: "We adjust your tier the next month, prorated.",
  },
  {
    question: "Is GST included?",
    answer: "All prices shown are exclusive of GST.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes. 30-day free trial on the Growth plan.",
  },
]

export function PricingFaq() {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <FadeIn>
          <Accordion type="single" collapsible className="w-full">
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
