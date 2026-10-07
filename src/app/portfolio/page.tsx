import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const projects = [
  {
    id: "apex-financial",
    title: "Apex Financial",
    category: "Business Website",
    description: "A premium corporate website for a leading financial consultancy. Cinematic hero, animated data visualisations, and a high-converting lead generation system.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Supabase"],
    industry: "Finance",
    image: "/portfolio/apex-financial.jpg",
    metrics: [
      { label: "Lead Increase", value: "3×" },
      { label: "Page Speed", value: "98" },
      { label: "Time to Build", value: "3 Wks" },
    ],
    testimonial: {
      text: "Velora completely transformed our online presence. Within two months of launch, our inbound leads tripled. The attention to detail was extraordinary — every pixel felt intentional.",
      author: "James Harrington",
      role: "CEO, Apex Capital Group",
      avatar: "JH",
    },
  },
  {
    id: "luminary-store",
    title: "Luminary Store",
    category: "E-Commerce",
    description: "A luxury e-commerce platform for a high-end lifestyle brand. Custom product experience, editorial-style layouts, and a seamless one-page checkout.",
    technologies: ["Next.js", "Stripe", "Shopify API", "PostgreSQL"],
    industry: "Retail / Luxury",
    image: "/portfolio/luminary-store.jpg",
    metrics: [
      { label: "Conversion Rate", value: "+62%" },
      { label: "Avg. Order Value", value: "+28%" },
      { label: "Bounce Rate", value: "−41%" },
    ],
    testimonial: {
      text: "We had worked with two agencies before Velora. None of them came close. The store they built feels like a true luxury brand — customers frequently compliment how smooth and beautiful the experience is.",
      author: "Sophia Laurent",
      role: "Founder, Luminary Lifestyle Co.",
      avatar: "SL",
    },
  },
  {
    id: "flowdesk-saas",
    title: "Flowdesk SaaS",
    category: "SaaS Platform",
    description: "A full-stack project management SaaS with role-based access, Kanban boards, billing, and a real-time collaboration layer built for remote-first teams.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "WebSockets"],
    industry: "Productivity / B2B",
    image: "/portfolio/flowdesk-saas.jpg",
    metrics: [
      { label: "Launch Timeline", value: "8 Wks" },
      { label: "Paid Users", value: "500+" },
      { label: "MRR at Launch", value: "$12K" },
    ],
    testimonial: {
      text: "I had a clear product vision but no technical co-founder. Velora stepped in and built the entire MVP — auth, billing, real-time features — in 8 weeks. We launched, and the response was overwhelming.",
      author: "Marcus Webb",
      role: "Founder & CEO, Flowdesk",
      avatar: "MW",
    },
  },
  {
    id: "nova-agency",
    title: "Nova Agency",
    category: "Website Redesign",
    description: "Complete redesign of an outdated creative agency website. We preserved SEO equity while delivering a modern, cinematic new identity that won clients.",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
    industry: "Creative Agency",
    image: "/portfolio/nova-agency.jpg",
    metrics: [
      { label: "Organic Traffic", value: "+140%" },
      { label: "SEO Score", value: "96" },
      { label: "New Clients", value: "+8/mo" },
    ],
    testimonial: {
      text: "Our old site was losing us business. Velora redesigned everything without sacrificing our Google rankings. Three months later, traffic is up 140% and we're signing more clients than ever.",
      author: "Olivia Chen",
      role: "Creative Director, Nova Studio",
      avatar: "OC",
    },
  },
  {
    id: "meridian-health",
    title: "Meridian Health",
    category: "Business Website",
    description: "A trust-first website for a private medical group, featuring online appointment booking, patient portal integration, and HIPAA-compliant contact forms.",
    technologies: ["Next.js", "Tailwind CSS", "Calendly API", "Resend"],
    industry: "Healthcare",
    image: "/portfolio/meridian-health.jpg",
    metrics: [
      { label: "Bookings", value: "+220%" },
      { label: "Load Time", value: "0.8s" },
      { label: "Satisfaction", value: "4.9★" },
    ],
    testimonial: {
      text: "Patient trust is everything in our business. Velora understood that immediately. The site they built communicates professionalism and warmth — our online appointment bookings increased by over 200%.",
      author: "Dr. Aarav Patel",
      role: "Director, Meridian Wellness Group",
      avatar: "AP",
    },
  },
  {
    id: "obsidian-portfolio",
    title: "Obsidian Portfolio",
    category: "Portfolio / Personal Brand",
    description: "A cinematic, full-screen portfolio for an award-winning photographer. Lazy-loaded galleries, smooth page transitions, and a built-in client booking system.",
    technologies: ["Next.js", "Framer Motion", "Cloudinary", "Tailwind CSS"],
    industry: "Photography / Art",
    image: "/portfolio/obsidian-portfolio.jpg",
    metrics: [
      { label: "Awwwards", value: "SOTD" },
      { label: "Bookings", value: "+180%" },
      { label: "Page Score", value: "100" },
    ],
    testimonial: {
      text: "As a photographer, your website is your gallery. Velora built something that genuinely showcases my work — it won a Site of the Day award on Awwwards and my bookings nearly doubled.",
      author: "Daniel Frost",
      role: "Award-Winning Photographer",
      avatar: "DF",
    },
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6 block font-medium">Selected Work</span>
        <h1 className="text-6xl md:text-8xl font-bold font-serif text-white tracking-tight max-w-4xl mb-8 text-balance">
          Projects built to <span className="italic text-white/60">perform.</span>
        </h1>
        <p className="text-white/60 text-xl font-light max-w-xl leading-relaxed">
          A curated selection of digital experiences we&apos;ve engineered for ambitious brands across industries.
        </p>
      </section>

      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 md:px-12" />

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-2">
        {projects.map((project, index) => (
          <div key={project.id} className="group border border-white/8 hover:border-white/20 transition-all duration-500 overflow-hidden">
            {/* Real Screenshot Image */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} website screenshot`}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
              <span className="absolute top-4 left-4 text-5xl font-serif font-bold text-white/10 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="absolute bottom-4 left-4 text-xs text-white/60 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm bg-black/30">
                {project.industry}
              </span>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/[0.02]">
              {/* Left: Main info */}
              <div className="md:col-span-2 flex flex-col gap-6">
                <div>
                  <span className="text-xs text-white/40 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-3 group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-white/50 font-light leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-white/5 border border-white/10 text-white/40 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Testimonial */}
                <div className="border-l-2 border-white/10 pl-5 mt-2">
                  <p className="text-white/50 text-sm font-light italic leading-relaxed mb-3">
                    &ldquo;{project.testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white shrink-0">
                      {project.testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-white/70 text-xs font-medium">{project.testimonial.author}</p>
                      <p className="text-white/30 text-xs">{project.testimonial.role}</p>
                    </div>
                    <div className="flex gap-0.5 ml-auto">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Metrics + CTA */}
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="bg-white/5 border border-white/8 p-4 rounded-sm">
                      <p className="text-2xl font-light font-serif text-white">{metric.value}</p>
                      <p className="text-xs text-white/30 uppercase tracking-widest mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/60 hover:text-white hover:border-white/40 px-5 py-3 text-sm font-medium rounded-sm transition-all"
                >
                  Start Similar Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 py-16 mt-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "47+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "12", label: "Industries Served" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-serif font-light text-white mb-2">{stat.value}</p>
              <p className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 text-balance">
          Ready to be our next <span className="italic text-white/60">success story?</span>
        </h2>
        <p className="text-white/50 text-lg font-light mb-10 max-w-lg mx-auto">
          Let&apos;s discuss your project and build something exceptional together.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 font-medium rounded-sm hover:bg-white/90 transition-colors"
        >
          Start Your Project <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
