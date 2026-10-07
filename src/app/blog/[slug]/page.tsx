import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Reusing the same posts data for simplicity in this demo.
// In a real app, this would be in a shared lib/ or database.
const posts = [
  {
    slug: "why-your-website-is-losing-you-clients",
    category: "Strategy",
    title: "Why Your Website Is Quietly Losing You Clients",
    excerpt: "Most business websites fail silently. Slow load times, poor mobile experience, and weak first impressions cost you thousands in lost revenue every month. Here is how to fix it.",
    date: "October 2026",
    readTime: "6 min read",
    image: "/blog/strategy.jpg",
    content: "Content for this article goes here. This is a dynamic route."
  },
  {
    slug: "design-systems-for-digital-agencies",
    category: "Design",
    title: "Why Every Serious Brand Needs a Design System",
    excerpt: "A design system is not just for large companies. It is the single most effective investment a growing brand can make to build consistency, speed, and credibility across every touchpoint.",
    date: "September 2026",
    readTime: "8 min read",
    image: "/blog/design.jpg",
    content: "Content for this article goes here. This is a dynamic route."
  },
  {
    slug: "nextjs-vs-wordpress-in-2026",
    category: "Development",
    title: "Next.js vs WordPress in 2026: What Should You Build On?",
    excerpt: "The platform question is one we get asked every week. The honest answer depends entirely on your goals. Here is a clear breakdown of when to choose each.",
    date: "September 2026",
    readTime: "10 min read",
    image: "/blog/development.jpg",
    content: "Content for this article goes here. This is a dynamic route."
  },
  {
    slug: "what-makes-a-website-premium",
    category: "Design",
    title: "What Actually Makes a Website Feel Premium?",
    excerpt: "It is not just about expensive fonts or dark backgrounds. True premium digital design is a system of decisions — from typography to motion to negative space — that communicate value.",
    date: "August 2026",
    readTime: "7 min read",
    image: "/blog/premium.jpg",
    content: "Content for this article goes here. This is a dynamic route."
  },
];

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-6 md:px-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-12 transition-colors text-sm">
          <ChevronLeft className="w-4 h-4" /> Back to Blog
        </Link>
        
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs text-white/40 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-white/30">{post.date}</span>
          <span className="text-xs text-white/30">•</span>
          <span className="text-xs text-white/30">{post.readTime}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-8 text-balance">
          {post.title}
        </h1>

        <div className="relative w-full aspect-video rounded-sm overflow-hidden mb-16 border border-white/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-p:font-light prose-p:text-white/70 prose-a:text-white hover:prose-a:text-white/80">
          <p className="lead text-xl text-white/90 mb-8">{post.excerpt}</p>
          <h2>Introduction</h2>
          <p>
            When we talk about premium digital experiences, we often focus on the surface level: the typography, the colors, the high-resolution imagery. While these elements are crucial, they represent only a fraction of what truly makes a website feel premium.
          </p>
          <p>
            At Velora, we believe that luxury in the digital space is defined by frictionlessness. It is the absence of annoyance, the anticipation of user needs, and the flawless execution of micro-interactions.
          </p>
          <h2>The Role of Performance</h2>
          <p>
            A slow website can never be premium. Consider the world&apos;s best luxury retail stores. You don&apos;t wait in line just to get through the front door. The same principle applies online. Sub-second load times are no longer a technical luxury; they are a fundamental requirement for brand credibility.
          </p>
          <blockquote>
            &quot;Design is not just what it looks like and feels like. Design is how it works.&quot;
          </blockquote>
          <h2>Conclusion</h2>
          <p>
            Investing in a premium website is an investment in your brand&apos;s most visible asset. It signals to your clients that you care deeply about quality, not just in your own services, but in every interaction they have with you.
          </p>
        </div>
      </article>
      
      {/* CTA */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 mt-24 pt-16 border-t border-white/10 text-center">
        <h3 className="text-2xl font-serif text-white mb-4">Ready to elevate your brand?</h3>
        <p className="text-white/50 font-light mb-8">Let&apos;s build a digital experience that converts.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-medium rounded-sm hover:bg-white/90 transition-colors"
        >
          Start a Project <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
