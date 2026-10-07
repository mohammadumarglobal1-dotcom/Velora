import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Business Website Development",
    description: "We design and build high-performance business websites that establish authority, drive trust, and convert visitors into clients. Every pixel crafted with purpose.",
    features: ["Custom Design", "Mobile-First", "CMS Integration", "SEO Optimized", "Fast Loading"],
    href: "/contact",
  },
  {
    number: "02",
    title: "E-commerce Development",
    description: "End-to-end e-commerce solutions engineered for maximum conversion. From product architecture to checkout flows — built to sell.",
    features: ["Shopify / Custom", "Payment Integration", "Inventory System", "Analytics", "Mobile Optimized"],
    href: "/contact",
  },
  {
    number: "03",
    title: "SaaS Platform Development",
    description: "We architect and build scalable SaaS platforms from the ground up — authentication, billing, dashboards, APIs. Your idea, engineered to production.",
    features: ["Auth & Billing", "Dashboard UI", "REST / GraphQL APIs", "Database Architecture", "DevOps Ready"],
    href: "/contact",
  },
  {
    number: "04",
    title: "Landing Page Development",
    description: "High-converting, beautifully designed landing pages for product launches, campaigns, and lead generation. Built to capture attention and drive action.",
    features: ["Conversion Focused", "A/B Test Ready", "Fast Delivery", "Form Integration", "Analytics"],
    href: "/contact",
  },
  {
    number: "05",
    title: "Custom Web Applications",
    description: "Complex problems deserve elegant solutions. We build bespoke web applications tailored to your business logic, workflows, and scale requirements.",
    features: ["Bespoke Logic", "Role Management", "Dashboards", "API Integrations", "Scalable"],
    href: "/contact",
  },
  {
    number: "06",
    title: "Website Redesign",
    description: "Transform your outdated digital presence into a premium brand asset. We analyse, redesign, and rebuild — without losing your existing SEO equity.",
    features: ["UX Audit", "Performance Boost", "Modern Design", "SEO Preserved", "CMS Upgrade"],
    href: "/contact",
  },
  {
    number: "07",
    title: "SEO-Ready Development",
    description: "Every website we build is engineered for search from day one. Technical SEO, Core Web Vitals, structured data, and performance — all built-in by default.",
    features: ["Technical SEO", "Core Web Vitals", "Schema Markup", "Sitemap & Robots", "Speed Optimized"],
    href: "/contact",
  },
  {
    number: "08",
    title: "AI & Automation Solutions",
    description: "Integrate intelligent AI-powered features into your digital products — chatbots, content automation, smart search, personalisation, and workflow automation.",
    features: ["OpenAI Integration", "Automation Flows", "Smart Search", "AI Chatbots", "Data Pipelines"],
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6 block font-medium">What We Do</span>
        <h1 className="text-6xl md:text-8xl font-bold font-serif text-white tracking-tight max-w-3xl mb-8 text-balance">
          Services built for <span className="italic text-white/60">ambition.</span>
        </h1>
        <p className="text-white/60 text-xl font-light max-w-xl leading-relaxed">
          From cinematic brand websites to complex SaaS platforms — we engineer digital experiences that drive measurable business results.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 md:px-12" />

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {services.map((service, index) => (
          <div
            key={service.number}
            className="group border-b border-white/10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 hover:border-white/30 transition-all duration-500"
          >
            <div className="md:col-span-1">
              <span className="text-white/20 text-sm font-mono">{service.number}</span>
            </div>
            <div className="md:col-span-5">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-white group-hover:text-white/80 transition-colors mb-4">
                {service.title}
              </h2>
              <p className="text-white/50 text-base font-light leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1.5 border border-white/10 text-white/50 rounded-full group-hover:border-white/20 group-hover:text-white/60 transition-all"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 flex items-center justify-end">
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-white/40 group-hover:text-white text-sm font-medium transition-colors"
              >
                Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 text-balance">
          Not sure which service <br />
          <span className="italic text-white/60">you need?</span>
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-md mx-auto font-light">
          Book a free consultation and we&apos;ll help you define the right solution for your goals.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-medium rounded-sm hover:bg-white/90 transition-colors"
        >
          Get a Free Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
