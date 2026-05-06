import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export const metadata = {
  title: "Terms of Service | Frosting",
  description: "Terms and conditions for using Frosting services.",
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[800px] px-6 lg:px-8">
            <FadeIn>
              <h1 className="font-serif text-4xl text-foreground sm:text-5xl mb-4">
                Terms of Service
              </h1>
              <p className="text-muted-foreground mb-12">
                Last updated: January 2026
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose prose-neutral max-w-none">
                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By accessing or using Frosting&apos;s services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Service Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Frosting provides automated birthday celebration services for corporate teams, including cake delivery, personalized cards, and celebration coordination. We partner with premium bakeries to ensure consistent quality across cities.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Account Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Maintaining accurate employee data in our system</li>
                  <li>Ensuring delivery addresses are correct and accessible</li>
                  <li>Responding to delivery confirmation requests within 48 hours</li>
                  <li>Keeping your account credentials secure</li>
                </ul>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Delivery Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We deliver to office locations during business hours (10 AM - 6 PM). For remote employees, we coordinate with managers to confirm delivery addresses 48 hours in advance. Delivery timing may vary by ±2 hours based on logistics.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Platform fees are billed monthly in advance. Cake costs are billed as incurred. Payment is due within 15 days of invoice date. Enterprise clients may negotiate custom payment terms.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Cancellation</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may cancel your subscription at any time. Cancellations take effect at the end of the current billing period. Cake orders can be cancelled up to 24 hours before scheduled delivery for a full refund.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Frosting&apos;s liability is limited to the fees paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages arising from service use.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these terms, contact us at legal@frosting.in.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
