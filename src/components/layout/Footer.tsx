"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-baseline gap-0.5 group mb-6">
              <span className="text-[1.6rem] font-serif font-bold tracking-[0.12em] text-white uppercase leading-none group-hover:text-white/90 transition-colors">
                Velora
              </span>
              <span className="text-amber-400 text-2xl leading-none font-serif"></span>
            </Link>
            <p className="text-white/60 text-sm font-light mb-8 max-w-xs">
              We Build Digital Experiences That Move Businesses Forward. Premium web applications and custom digital solutions.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all">
                X
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all">
                IN
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all">
                IG
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-white/80 mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/web-development" className="text-white/60 hover:text-white text-sm transition-colors">Web Development</Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-white/60 hover:text-white text-sm transition-colors">E-commerce</Link>
              </li>
              <li>
                <Link href="/services/saas" className="text-white/60 hover:text-white text-sm transition-colors">SaaS Platforms</Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-white/60 hover:text-white text-sm transition-colors">SEO & Performance</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-white/80 mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/60 hover:text-white text-sm transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/60 hover:text-white text-sm transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-white/80 mb-6">Ready to Start?</h3>
            <p className="text-white/60 text-sm font-light mb-6">
              Let's discuss how we can help your business grow with a premium digital presence.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:gap-4 transition-all"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-white/40 text-xs">
            &copy; {currentYear} Velora Digital Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
