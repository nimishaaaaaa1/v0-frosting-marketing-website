import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactFaq } from "@/components/contact/contact-faq"

export const metadata: Metadata = {
  title: "Contact | Frosting",
  description: "Book a 20-minute demo with Frosting. Tell us about your team and we'll send a calendar invite within 4 hours.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactFaq />
      </main>
      <Footer />
    </>
  )
}
