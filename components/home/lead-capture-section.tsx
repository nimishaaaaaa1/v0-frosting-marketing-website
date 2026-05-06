"use client"

import { useState } from "react"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LeadCaptureSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSuccess(true)
    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="mx-auto max-w-[1140px]">
        <FadeIn>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.15] text-foreground">
              Get the pricing guide
            </h2>
            <p className="mt-4 text-[17px] text-muted-foreground leading-[1.5]">
              One email. Pricing for teams of all sizes.
            </p>
            
            {isSuccess ? (
              <p className="mt-8 text-primary font-medium">
                Check your inbox.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="work@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 text-base"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="h-12 transition-transform duration-200 hover:scale-[1.02]"
                >
                  {isSubmitting ? "Sending..." : "Send guide"}
                </Button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
