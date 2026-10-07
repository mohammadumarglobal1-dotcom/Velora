"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, LayoutDashboard } from "lucide-react";

export function Header({ isAdmin = false }: { isAdmin?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-4 shadow-sm shadow-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-0.5 group">
          <span className="text-[1.6rem] font-serif font-bold tracking-[0.12em] text-white uppercase leading-none group-hover:text-white/90 transition-colors">
            Velora
          </span>
          <span className="text-amber-400 text-2xl leading-none font-serif"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Admin Link — only visible when logged in */}
          {isAdmin && (
            <Link
              href="/admin"
              className="flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              Admin
            </Link>
          )}

          <Link
            href="/contact"
            className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-sm hover:bg-white/90 transition-colors"
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-black flex flex-col px-6 py-8"
          >
            <div className="flex items-center justify-between mb-12">
              <Link href="/" className="flex items-baseline gap-0.5 group" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-[1.6rem] font-serif font-bold tracking-[0.12em] text-white uppercase leading-none">
                  Velora
                </span>
                <span className="text-amber-400 text-2xl leading-none font-serif"></span>
              </Link>
              <button className="text-white" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-2xl font-serif">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  href="/admin"
                  className="text-white/50 hover:text-white transition-colors flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LayoutDashboard className="w-5 h-5" />
                  Admin
                </Link>
              )}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-black text-lg font-sans font-medium rounded-sm hover:bg-white/90 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start a Project
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
