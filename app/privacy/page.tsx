import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export const metadata = {
  title: "Privacy Policy | Frosting",
  description: "How Frosting handles and protects your data.",
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[800px] px-6 lg:px-8">
            <FadeIn>
              <h1 className="font-serif text-4xl text-foreground sm:text-5xl mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground mb-12">
                Last updated: January 2026
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose prose-neutral max-w-none">
                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information you provide directly, including employee names, birthdates, dietary preferences, and delivery addresses. This data is essential for delivering personalized birthday celebrations to your team.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your data is used exclusively for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Scheduling and delivering birthday cakes and cards</li>
                  <li>Communicating with managers about upcoming deliveries</li>
                  <li>Processing payments and generating invoices</li>
                  <li>Improving our service based on feedback</li>
                </ul>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your data. All sensitive information is encrypted in transit and at rest. We never sell or share your data with third parties for marketing purposes.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">HRIS Integration</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you connect your HRIS system, we only access the minimum data required: employee names, birthdates, team assignments, and work locations. We do not access salary, performance, or other sensitive HR data.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We retain your data for as long as your account is active. Upon termination, we delete all employee data within 30 days, retaining only what is legally required for financial records.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You can request access to, correction of, or deletion of your data at any time. Contact us at privacy@frosting.in for any privacy-related requests.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about this privacy policy, contact us at privacy@frosting.in or write to us at our registered office address.
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
