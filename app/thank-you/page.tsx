import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Thank You | Cremio",
  description: "Thanks for reaching out. We'll send a calendar invite within 4 hours.",
}

const suggestedPages = [
  {
    title: "How it works",
    description: "See the full process from upload to delivery.",
    href: "/how-it-works",
  },
  {
    title: "Pricing",
    description: "Transparent pricing for teams of all sizes.",
    href: "/pricing",
  },
  {
    title: "About",
    description: "Learn more about who we are and why we built this.",
    href: "/about",
  },
]

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="font-serif text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Got it. Talk soon.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              We&apos;ll send a calendar invite to your email within 4 hours, usually faster. While you wait, here&apos;s something to read.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {suggestedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group bg-card rounded-xl border border-border p-6 text-left transition-all hover:shadow-[0_8px_32px_rgba(43,24,16,0.08)] hover:-translate-y-1"
                >
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {page.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {page.description}
                  </p>
                  <ArrowRight className="mt-4 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/">Back to home</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  )
}
