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
    
    try {
      const response = await fetch("https://formspree.io/f/SIGNUP_PLACEHOLDER", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      
      if (response.ok) {
        setIsSuccess(true)
        setEmail("")
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 lg:py-[120px] bg-muted/30">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <FadeIn>
          <div className="bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border border-border p-8 lg:p-12 max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
              Want our HR cake pricing guide?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Drop your email. We&apos;ll send a one-pager with pricing examples for teams of all sizes.
            </p>
            
            {isSuccess ? (
              <p className="mt-6 text-green-700 font-medium">
                Check your inbox. We&apos;ve sent the guide.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="work@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-background"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isSubmitting ? "Sending..." : "Send me the guide"}
                </Button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
