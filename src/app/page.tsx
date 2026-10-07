import { Hero } from "@/components/sections/hero/Hero";
import Link from "next/link";
import { ArrowRight, Code, Layout, LineChart, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Hero />
      
      {/* Trusted By Section */}
      <section className="w-full border-b border-white/10 py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-white/40 text-xs tracking-widest uppercase mb-10 font-medium">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
            {/* Placeholders for client logos */}
            <h3 className="text-xl font-serif font-bold text-white">Acme Corp</h3>
            <h3 className="text-xl font-serif font-bold text-white">GlobalTech</h3>
            <h3 className="text-xl font-serif font-bold text-white">NexGen</h3>
            <h3 className="text-xl font-serif font-bold text-white">Stellar</h3>
            <h3 className="text-xl font-serif font-bold text-white">Quantum</h3>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4 block font-medium">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight text-balance">
                Everything you need to <span className="italic text-white/60">dominate digital.</span>
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors pb-2">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Web Development",
                description: "High-performance, beautifully crafted websites built on modern tech stacks.",
                icon: <Code className="w-6 h-6 mb-4 text-white/60" />,
              },
              {
                title: "UI/UX Design",
                description: "Intuitive, premium user experiences that convert visitors into loyal customers.",
                icon: <Layout className="w-6 h-6 mb-4 text-white/60" />,
              },
              {
                title: "SEO & Growth",
                description: "Technical optimization and strategies to ensure you rank higher and grow faster.",
                icon: <LineChart className="w-6 h-6 mb-4 text-white/60" />,
              },
              {
                title: "Secure Architecture",
                description: "Scalable, secure infrastructure designed to handle enterprise-level traffic.",
                icon: <Shield className="w-6 h-6 mb-4 text-white/60" />,
              },
            ].map((service) => (
              <div key={service.title} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors rounded-sm group">
                {service.icon}
                <h3 className="text-xl font-bold font-serif text-white mb-3 group-hover:text-white/90 transition-colors">{service.title}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="w-full py-24 md:py-32 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4 block font-medium">Selected Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight mb-8">
            Work that speaks <span className="italic text-white/60">for itself.</span>
          </h2>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto mb-12">
            Explore our latest case studies and see how we have helped businesses scale their digital footprint.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-transparent text-white border border-white/30 px-8 py-4 font-medium text-sm tracking-wide rounded-sm transition-colors hover:bg-white/5 hover:border-white/50"
          >
            Explore Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-32 bg-black text-center px-6 md:px-12">
        <h2 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6">
          Ready to get <span className="italic text-white/60">started?</span>
        </h2>
        <p className="text-white/50 text-xl font-light mb-10 max-w-xl mx-auto">
          Let's discuss your project and see how Velora can bring your vision to life.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 font-medium text-sm tracking-wide rounded-sm hover:bg-white/90 transition-transform hover:scale-[1.02]"
        >
          Start Your Project <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
