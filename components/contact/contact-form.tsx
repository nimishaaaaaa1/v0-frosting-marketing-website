"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Video, LayoutDashboard, FileText, Mail, MessageCircle } from "lucide-react"

const teamSizes = ["1-30", "31-80", "81-300", "301-1000", "1000+"]
const cities = ["Bangalore", "Delhi NCR", "Mumbai", "Hyderabad", "Pune", "Chennai", "Kolkata", "Other"]

export function ContactForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    city: "",
    message: "",
    honeypot: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot check
    if (formData.honeypot) return
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://formspree.io/f/PLACEHOLDER", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          teamSize: formData.teamSize,
          city: formData.city,
          message: formData.message,
        }),
      })
      
      if (response.ok) {
        router.push("/thank-you")
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="pb-20 lg:pb-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <FadeIn>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border border-border p-8"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Work Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-background"
                  />
                </div>
                
                <div>
                  <label htmlFor="teamSize" className="block text-sm font-medium text-foreground mb-2">
                    Team Size
                  </label>
                  <Select
                    value={formData.teamSize}
                    onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
                    required
                  >
                    <SelectTrigger className="w-full bg-background">
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      {teamSizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size} employees
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                    City
                  </label>
                  <Select
                    value={formData.city}
                    onValueChange={(value) => setFormData({ ...formData, city: value })}
                    required
                  >
                    <SelectTrigger className="w-full bg-background">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us more (optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  />
                </div>
                
                {/* Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isSubmitting ? "Submitting..." : "Book my demo"}
                </Button>
              </div>
            </form>
          </FadeIn>

          {/* What to expect */}
          <FadeIn delay={0.2}>
            <div>
              <h2 className="font-serif text-2xl text-foreground">What to expect</h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-4">
                  <Video className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">A 20-minute Zoom call</span>
                </li>
                <li className="flex items-start gap-4">
                  <LayoutDashboard className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">We&apos;ll show you the dashboard, rule builder, and cake catalogue</span>
                </li>
                <li className="flex items-start gap-4">
                  <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Custom plan quote if you&apos;re 80+ employees</span>
                </li>
              </ul>

              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Prefer email? Write to demo@frosting.in</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>Or WhatsApp us at +91-PLACEHOLDER</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
