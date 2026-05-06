import Link from "next/link"
import { Linkedin, Instagram, Twitter } from "lucide-react"

const productLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
]

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/gst-policy", label: "GST Policy" },
]

const cities = [
  "Bangalore",
  "Delhi NCR",
  "Mumbai",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
]

export function Footer() {
  return (
    <footer className="bg-[#2B1810] text-[#FAF6EF]">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl text-[#FAF6EF]">
              Frosting
            </Link>
            <p className="mt-3 text-sm text-[#FAF6EF]/80 leading-relaxed">
              Birthday cakes for your team, handled.
            </p>
            <p className="mt-4 text-xs text-[#FAF6EF]/60">
              Bangalore + Delhi NCR
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-medium text-[#FAF6EF]/60 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FAF6EF]/80 hover:text-[#FAF6EF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-medium text-[#FAF6EF]/60 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FAF6EF]/80 hover:text-[#FAF6EF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-medium text-[#FAF6EF]/60 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FAF6EF]/80 hover:text-[#FAF6EF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cities */}
        <div className="mt-12 pt-8 border-t border-[#FAF6EF]/10">
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <span
                key={city}
                className="px-3 py-1 text-xs text-[#FAF6EF]/60 bg-[#FAF6EF]/5 rounded-full"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <a
              href="#"
              className="text-[#FAF6EF]/60 hover:text-[#FAF6EF] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-[#FAF6EF]/60 hover:text-[#FAF6EF] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-[#FAF6EF]/60 hover:text-[#FAF6EF] transition-colors"
              aria-label="X"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-[#FAF6EF]/60">
            © 2026 Frosting.in
          </p>
        </div>
      </div>
    </footer>
  )
}
