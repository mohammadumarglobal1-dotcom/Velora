import Link from "next/link";
import { ArrowRight } from "lucide-react";

const values = [
  {
    title: "Craft Over Template",
    description: "We build bespoke. Every project is designed from scratch for your brand — never assembled from generic templates.",
  },
  {
    title: "Performance is Non-Negotiable",
    description: "Beautiful design means nothing if your site is slow. We obsess over Core Web Vitals, load speed, and technical excellence.",
  },
  {
    title: "Results, Not Just Aesthetics",
    description: "We measure success by your business outcomes. Every design decision is made with conversion and user experience in mind.",
  },
  {
    title: "Transparency & Partnership",
    description: "We treat every client as a long-term partner. Clear communication, honest timelines, and no surprises.",
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We begin by deeply understanding your business goals, target audience, and competitive landscape." },
  { step: "02", title: "Strategy", description: "We define the digital strategy, information architecture, and conversion flow before touching any design." },
  { step: "03", title: "Design", description: "Bespoke UI/UX design that reflects your brand identity with premium aesthetics and intuitive user experience." },
  { step: "04", title: "Development", description: "Clean, scalable code built on modern technology. Fully tested, optimised, and production-ready." },
  { step: "05", title: "Launch", description: "We manage the deployment, domain configuration, and launch to ensure a flawless go-live experience." },
  { step: "06", title: "Growth", description: "Post-launch support, performance monitoring, and continuous improvements as your business evolves." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6 block font-medium">The Agency</span>
        <h1 className="text-6xl md:text-8xl font-bold font-serif text-white tracking-tight max-w-4xl mb-8 text-balance">
          We believe great design <span className="italic text-white/60">changes businesses.</span>
        </h1>
        <p className="text-white/60 text-xl font-light max-w-2xl leading-relaxed">
          Velora is a premium international web development agency. We partner with startups, established brands, and ambitious entrepreneurs to build digital experiences that move businesses forward.
        </p>
      </section>

      {/* Mission */}
      <section className="border-t border-white/10 py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <span className="text-white/30 text-xs tracking-widest uppercase mb-4 block">Our Mission</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">
            To be the agency that genuinely transforms how businesses show up online.
          </h2>
        </div>
        <div>
          <span className="text-white/30 text-xs tracking-widest uppercase mb-4 block">Our Vision</span>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            A world where every ambitious business — regardless of size — has access to a premium digital presence that competes at the highest level. We build the tools and experiences that make that possible.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/10 py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="text-white/30 text-xs tracking-widest uppercase mb-12 block">Our Values</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((value) => (
            <div key={value.title} className="border-l border-white/10 pl-8 hover:border-white/30 transition-colors">
              <h3 className="text-xl font-bold font-serif text-white mb-3">{value.title}</h3>
              <p className="text-white/50 font-light leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-white/10 py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="text-white/30 text-xs tracking-widest uppercase mb-12 block">How We Work</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {process.map((item) => (
            <div key={item.step} className="group">
              <span className="text-4xl font-light text-white/10 font-mono block mb-4">{item.step}</span>
              <h3 className="text-lg font-bold font-serif text-white mb-3 group-hover:text-white/80 transition-colors">{item.title}</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
          Ready to work <span className="italic text-white/60">together?</span>
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-medium rounded-sm hover:bg-white/90 transition-colors"
        >
          Start a Conversation <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
