import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "why-your-website-is-losing-you-clients",
    category: "Strategy",
    title: "Why Your Website Is Quietly Losing You Clients",
    excerpt: "Most business websites fail silently. Slow load times, poor mobile experience, and weak first impressions cost you thousands in lost revenue every month. Here is how to fix it.",
    date: "October 2026",
    readTime: "6 min read",
    image: "/blog/strategy.jpg",
  },
  {
    slug: "design-systems-for-digital-agencies",
    category: "Design",
    title: "Why Every Serious Brand Needs a Design System",
    excerpt: "A design system is not just for large companies. It is the single most effective investment a growing brand can make to build consistency, speed, and credibility across every touchpoint.",
    date: "September 2026",
    readTime: "8 min read",
    image: "/blog/design.jpg",
  },
  {
    slug: "nextjs-vs-wordpress-in-2026",
    category: "Development",
    title: "Next.js vs WordPress in 2026: What Should You Build On?",
    excerpt: "The platform question is one we get asked every week. The honest answer depends entirely on your goals. Here is a clear breakdown of when to choose each.",
    date: "September 2026",
    readTime: "10 min read",
    image: "/blog/development.jpg",
  },
  {
    slug: "what-makes-a-website-premium",
    category: "Design",
    title: "What Actually Makes a Website Feel Premium?",
    excerpt: "It is not just about expensive fonts or dark backgrounds. True premium digital design is a system of decisions — from typography to motion to negative space — that communicate value.",
    date: "August 2026",
    readTime: "7 min read",
    image: "/blog/premium.jpg",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6 block font-medium">Journal</span>
        <h1 className="text-6xl md:text-8xl font-bold font-serif text-white tracking-tight max-w-3xl mb-8 text-balance">
          Insights on design, <span className="italic text-white/60">technology & growth.</span>
        </h1>
        <p className="text-white/60 text-xl font-light max-w-xl leading-relaxed">
          Practical thinking on digital strategy, web development, and building premium brand experiences.
        </p>
      </section>

      {/* Featured Post */}
      <section className="border-t border-white/10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        <Link href={`/blog/${posts[0].slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-12 hover:border-white/20 transition-all">
          <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
            <Image
              src={posts[0].image}
              alt={posts[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="text-white text-xs font-medium tracking-wide uppercase">Featured Article</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-white/40 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                {posts[0].category}
              </span>
              <span className="text-xs text-white/30">{posts[0].readTime}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4 group-hover:text-white/80 transition-colors">
              {posts[0].title}
            </h2>
            <p className="text-white/50 font-light leading-relaxed mb-8">
              {posts[0].excerpt}
            </p>
            <div className="inline-flex items-center gap-2 text-white font-medium text-sm group-hover:gap-4 transition-all">
              Read Article <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      </section>

      {/* Post Grid */}
      <section className="border-t border-white/10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="relative aspect-video rounded-sm mb-6 overflow-hidden border border-white/8 group-hover:border-white/20 transition-colors">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-white/40 uppercase tracking-widest">{post.category}</span>
                <span className="text-xs text-white/20">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-white mb-3 group-hover:text-white/70 transition-colors">
                {post.title}
              </h3>
              <p className="text-white/40 text-sm font-light leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-serif text-white mb-4">
          Want to work with <span className="italic text-white/60">us?</span>
        </h2>
        <p className="text-white/50 mb-8 font-light">Let&apos;s build something extraordinary together.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-medium rounded-sm hover:bg-white/90 transition-colors"
        >
          Start a Project <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
