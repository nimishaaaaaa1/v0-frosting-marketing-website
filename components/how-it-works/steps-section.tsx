"use client"

import { FadeIn } from "@/components/fade-in"
import { motion } from "framer-motion"

const employees = [
  { name: "Priya Sharma", birthday: "Aug 15", diet: "Eggless", city: "Bangalore" },
  { name: "Arjun Mehta", birthday: "Sep 3", diet: "None", city: "Delhi NCR" },
  { name: "Fatima Khan", birthday: "Oct 22", diet: "Veg", city: "Mumbai" },
]

export function StepsSection() {
  return (
    <section className="pb-20 lg:pb-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 space-y-24 lg:space-y-32">
        {/* Step 1 */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <FadeIn>
              <span className="font-serif text-5xl text-primary">01</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
                You tell us your team. Once.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Send us a Google Sheet, upload a CSV, or paste names into our dashboard. We need name, birthday, work anniversary if relevant, dietary preference (veg, Jain, eggless, gluten-free, none), and which office they sit in. Takes about 10 minutes for a 200-person team.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Using Darwinbox, Keka, Zoho People, or Razorpay X Payroll? We have direct integrations on the Enterprise plan. One-click sync. We pull the data, you stop maintaining spreadsheets.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border border-border p-6"
            >
              <div className="text-sm font-medium text-muted-foreground mb-4">Employee list</div>
              <div className="space-y-3">
                {employees.map((emp) => (
                  <div key={emp.name} className="flex items-center gap-4 py-2 border-b border-border last:border-0">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                      {emp.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex-1 grid grid-cols-4 gap-2 text-sm">
                      <span className="text-foreground font-medium">{emp.name}</span>
                      <span className="text-muted-foreground">{emp.birthday}</span>
                      <span className="text-muted-foreground">{emp.diet}</span>
                      <span className="text-muted-foreground">{emp.city}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Step 2 */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="lg:order-2">
            <FadeIn>
              <span className="font-serif text-5xl text-primary">02</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
                You set the rules. We follow them.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                How big should birthday cakes be? Budget per person? Different rules for the Mumbai team versus the Delhi team? Custom toppers with your logo or just a handwritten card?
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                All of this gets configured once. You move on with your life.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="lg:order-1">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border border-border p-6"
            >
              <div className="text-sm font-medium text-muted-foreground mb-4">Delivery rules</div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Default cake size</span>
                  <span className="text-sm text-foreground font-medium">1 kg</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Budget per cake</span>
                  <span className="text-sm text-foreground font-medium">Up to Rs. 1,200</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Custom topper</span>
                  <span className="text-sm text-foreground font-medium">Company logo</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">Delivery time</span>
                  <span className="text-sm text-foreground font-medium">Before 12 PM</span>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Step 3 */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <FadeIn>
              <span className="font-serif text-5xl text-primary">03</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
                Two days before every birthday, the magic happens.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We WhatsApp the employee&apos;s manager. &quot;Priya&apos;s birthday is on Thursday. We&apos;re sending a chocolate truffle cake (eggless) to the Bangalore office. Reply CHANGE if she&apos;s WFH or on leave.&quot;
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                If the manager doesn&apos;t reply, we proceed. If they do, we redirect to the home address or reschedule. This single feature is why our delivery success rate is 99.4%. Most cake services in India can&apos;t get past 80%.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border border-border p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-700 text-lg">W</span>
                </div>
                <span className="text-sm font-medium text-foreground">WhatsApp</span>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-sm text-foreground leading-relaxed">
                <p className="font-medium mb-2">Cremio Delivery</p>
                <p>Hi Vikram! Priya&apos;s birthday is on Thursday. We&apos;re sending a chocolate truffle cake (eggless) to the Bangalore office.</p>
                <p className="mt-2">Reply CHANGE if she&apos;s WFH or on leave.</p>
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Step 4 */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="lg:order-2">
            <FadeIn>
              <span className="font-serif text-5xl text-primary">04</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
                The cake shows up. Fresh. On time. Nobody panics.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We coordinate with the best bakery in that city. Cake gets baked that morning, delivered by noon, with a custom card or topper if you&apos;ve configured one.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                You get a delivery confirmation in your dashboard. Photo, timestamp, recipient signature. Nothing to chase.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="lg:order-1">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-card rounded-xl shadow-[0_8px_32px_rgba(43,24,16,0.08)] border border-border overflow-hidden"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-6xl mb-4">🎂</div>
                  <p className="text-sm text-muted-foreground">Delivery photo placeholder</p>
                </div>
              </div>
              <div className="p-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Delivered at 11:42 AM</span>
                  <span className="text-green-700 font-medium">Confirmed</span>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
