import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export const metadata = {
  title: "Refund Policy | Frosting",
  description: "Frosting's refund and cancellation policy.",
}

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[800px] px-6 lg:px-8">
            <FadeIn>
              <h1 className="font-serif text-4xl text-foreground sm:text-5xl mb-4">
                Refund Policy
              </h1>
              <p className="text-muted-foreground mb-12">
                Last updated: January 2026
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose prose-neutral max-w-none">
                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Our Commitment</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Frosting, we stand behind the quality of our service. If something goes wrong with a delivery, we&apos;ll make it right.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Cake Quality Issues</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If a cake arrives damaged, stale, or not as ordered, we offer:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li><strong>Full replacement:</strong> We&apos;ll deliver a new cake within 4 hours</li>
                  <li><strong>Full refund:</strong> 100% refund of the cake cost</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Please report quality issues within 2 hours of delivery with photos for fastest resolution.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Missed Deliveries</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If we miss a delivery due to our error:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Full refund of the cake cost</li>
                  <li>Waiver of platform fees for that month</li>
                  <li>Complimentary upgrade on the next delivery</li>
                </ul>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Cancellation by Customer</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You can cancel a scheduled delivery:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li><strong>48+ hours before:</strong> Full refund</li>
                  <li><strong>24-48 hours before:</strong> 50% refund</li>
                  <li><strong>Less than 24 hours:</strong> No refund (cake already ordered)</li>
                </ul>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Subscription Cancellation</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Monthly platform fees are non-refundable once the billing cycle begins. However, if you cancel within the first 7 days of your initial subscription, we&apos;ll provide a full refund of the platform fee.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">30-Day Trial</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  During your 30-day trial, you only pay for cakes — the platform fee is waived. If you&apos;re not satisfied, cancel anytime with no platform charges.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">How to Request a Refund</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Contact us through your dashboard or via the contact page. Refunds are processed within 5-7 business days to the original payment method.
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
