import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export const metadata = {
  title: "GST Policy | Frosting",
  description: "GST compliance and invoicing details for Frosting services.",
}

export default function GstPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[800px] px-6 lg:px-8">
            <FadeIn>
              <h1 className="font-serif text-4xl text-foreground sm:text-5xl mb-4">
                GST Policy
              </h1>
              <p className="text-muted-foreground mb-12">
                Last updated: January 2026
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose prose-neutral max-w-none">
                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">GST Registration</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Frosting is a registered entity under the Goods and Services Tax Act. Our GST identification number (GSTIN) is available on all invoices.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">GST on Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our services are subject to GST at the applicable rates:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li><strong>Platform fees:</strong> 18% GST (Service Tax category)</li>
                  <li><strong>Cake and food items:</strong> 5% GST (Food and catering category)</li>
                  <li><strong>Printed cards:</strong> 12% GST (Printed materials category)</li>
                </ul>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Invoicing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We provide GST-compliant tax invoices for all transactions. Invoices include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Our GSTIN and your GSTIN (if provided)</li>
                  <li>HSN/SAC codes for each line item</li>
                  <li>Itemized breakdown of taxable value and GST</li>
                  <li>Place of supply for determining IGST vs CGST+SGST</li>
                </ul>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Input Tax Credit</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If your organization is GST-registered, you may be eligible to claim Input Tax Credit (ITC) on our services. Ensure your GSTIN is correctly recorded in your Frosting account to receive properly addressed invoices.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Place of Supply</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For delivery-based services, the place of supply is the delivery location. This determines whether IGST or CGST+SGST applies:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li><strong>Inter-state:</strong> IGST applies</li>
                  <li><strong>Intra-state:</strong> CGST + SGST applies</li>
                </ul>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Compliance Documents</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For enterprise clients, we provide:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Monthly GST invoices</li>
                  <li>GST return filing confirmations</li>
                  <li>Annual GST compliance certificates</li>
                  <li>GSTR-2A reconciliation support</li>
                </ul>

                <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For GST-related queries or to update your GSTIN, contact finance@frosting.in.
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
