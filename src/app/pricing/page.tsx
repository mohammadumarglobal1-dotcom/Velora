import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$17",
    description: "For individuals, freelancers and small businesses needing a professional online presence.",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Contact Form",
      "Basic SEO Setup",
      "Google Analytics",
      "2 Rounds of Revisions",
      "7–14 Day Delivery",
      "30 Days Post-Launch Support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$35",
    description: "For growing businesses that need a powerful, scalable website with advanced functionality.",
    features: [
      "Up to 15 Pages",
      "Custom Design System",
      "CMS Integration",
      "Advanced SEO",
      "Blog / News Section",
      "Lead Generation Forms",
      "3 Rounds of Revisions",
      "14–21 Day Delivery",
      "60 Days Post-Launch Support",
    ],
    cta: "Start Your Project",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "$65",
    description: "For businesses requiring advanced custom functionality, integrations, and maximum performance.",
    features: [
      "Unlimited Pages",
      "Bespoke Design & Development",
      "E-commerce or SaaS Features",
      "Custom Integrations",
      "Performance Optimization",
      "Full SEO Package",
      "Priority Development",
      "90 Days Post-Launch Support",
    ],
    cta: "Discuss Your Project",
    highlighted: false,
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <span className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6 block font-medium">Investment</span>
        <h1 className="text-6xl md:text-8xl font-bold font-serif text-white tracking-tight max-w-3xl mx-auto mb-8 text-balance">
          Transparent, <span className="italic text-white/60">value-based</span> pricing.
        </h1>
        <p className="text-white/60 text-xl font-light max-w-xl mx-auto leading-relaxed">
          Every project is different. These packages are starting points — we tailor each engagement to your exact goals and requirements.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col p-8 border rounded-sm transition-all duration-300 ${
              plan.highlighted
                ? "bg-white text-black border-white"
                : "bg-white/3 border-white/10 text-white hover:border-white/30"
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-4 py-1 rounded-full border border-white/20 whitespace-nowrap">
                {plan.badge}
              </span>
            )}

            <div className="mb-6">
              <h3 className={`text-xs uppercase tracking-widest font-medium mb-4 ${plan.highlighted ? "text-black/50" : "text-white/40"}`}>
                {plan.name}
              </h3>
              <p className={`text-2xl font-bold font-serif mb-3 ${plan.highlighted ? "text-black" : "text-white"}`}>
                {plan.price}
              </p>
              <p className={`text-sm font-light leading-relaxed ${plan.highlighted ? "text-black/60" : "text-white/50"}`}>
                {plan.description}
              </p>
            </div>

            <ul className="flex-1 space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-black" : "text-white/40"}`} />
                  <span className={plan.highlighted ? "text-black/70" : "text-white/60"}>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-sm rounded-sm transition-all ${
                plan.highlighted
                  ? "bg-black text-white hover:bg-black/80"
                  : "bg-white/5 border border-white/20 text-white hover:bg-white hover:text-black"
              }`}
            >
              {plan.cta} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </section>

      {/* FAQ Note */}
      <section className="border-t border-white/10 py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-serif text-white mb-4">Not sure which plan fits?</h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto font-light">
          Book a free 30-minute consultation and we&apos;ll help you identify the right solution for your business and budget.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 font-medium rounded-sm hover:bg-white hover:text-black transition-all"
        >
          Book Free Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
