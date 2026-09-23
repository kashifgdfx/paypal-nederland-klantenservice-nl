"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navigationLinks } from "@/data/content";
import { Menu, X, ShieldCheck, ChevronRight, Globe } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80" : "bg-white border-b border-slate-100"}`}
    >
      {/* Scroll indicator bar */}
      <div
        className="h-1 bg-gradient-to-r from-[#003087] via-[#0070BA] to-[#00CFDE] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Group */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus:outline-hidden shrink-0"
          >
 <div className="flex items-center group cursor-pointer select-none">
  {/* Official Style Vector SVG Logo */}
   <svg

  className="w-12 h-13 transition-transform group-hover:scale-105 duration-200"

  viewBox="0 0 36 36"

  fill="none"

  xmlns="http://www.w3.org/2000/svg"

>

  {/* Light Blue / Cyan Background P */}

  <path

    d="M28.2 9.5C27 5.1 23.2 2 18.2 2H10.1C9.4 2 8.8 2.6 8.7 3.3L4.3 30.6C4.2 31.2 4.7 31.7 5.3 31.7H10.4C11 31.7 11.5 31.2 11.6 30.6L13.1 21.1H16.2C21.8 21.1 26.4 18.7 28.2 13.8C28.9 12 28.8 10.6 28.2 9.5Z"

    fill="#33BBFF"

  />



  {/* Middle Royal Blue Blend */}

  <path

    d="M24.2 13.1C23 8.7 19.3 5.6 14.3 5.6H10.1C9.4 5.6 8.8 6.2 8.7 6.9L6 23.2H9.7C15.3 23.2 19.9 20.8 21.7 15.9C22.4 14.1 23.5 13.5 24.2 13.1Z"

    fill="#0070BA"

  />



  {/* Larger & Expanded Dark P On Top */}

  <path

    d="M26.8 14.2C25.4 9.1 21.2 5.2 15.5 5.2H5.8C5 5.2 4.3 5.9 4.2 6.7L0.8 27.5C0.7 28.3 1.3 29 2.1 29H8.2C9 29 9.7 28.3 9.8 27.5L11.2 18.9H13.8C19.7 18.9 24.7 16.5 26.8 10.8C27.3 9.7 27.1 8.5 26.8 14.2Z"

    fill="#002266"

  />

</svg>

  <span className="ml-2.5 text-2xl font-black tracking-tight text-[#003087]">
    PayPal
  </span>
</div>
            <div className="h-6 w-px bg-slate-200 hidden xl:block" />
            {/* <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/60 text-xs font-semibold text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0070BA]" />
              <span>Klantenservice NL</span>
            </div> */}
          </Link>

          {/* Clean Desktop Navigation Links (No Overlapping Pill Background) */}
          <nav className="hidden lg:flex items-center justify-center flex-1 px-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-1 xl:gap-2">
              {navigationLinks.slice(0, 5).map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="px-2.5 py-2 text-xs xl:text-sm font-semibold text-slate-600 hover:text-[#003087] hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap"
                >
                  {link.shortTitle.replace("PayPal ", "")}
                </a>
              ))}
              <a
                href="#contact"
                className="px-2.5 py-2 text-xs xl:text-sm font-semibold text-slate-600 hover:text-[#003087] hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap"
              >
                Contact
              </a>
              <a
                href="#faq"
                className="px-2.5 py-2 text-xs xl:text-sm font-semibold text-slate-600 hover:text-[#003087] hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap"
              >
                FAQ
              </a>
            </div>
          </nav>

          {/* Right Action & Locale */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 px-2.5 py-2 rounded-full border border-slate-200 bg-slate-50/80">
              <Globe className="w-3.5 h-3.5 text-[#0070BA]" />
              <span>NL</span>
            </div> */}

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full text-xs xl:text-sm font-bold text-white bg-[#003087] hover:bg-[#001C64] shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap"
            >
              <span>Klantenservice</span>
              <ChevronRight className="w-4 h-4 text-cyan-300" />
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="sm:hidden text-xs font-semibold px-3 py-1.5 rounded-full text-white bg-[#003087]"
            >
              Contact
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-hidden transition-colors"
              aria-label="Menu openen"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1.5">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="px-3.5 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-blue-50/70 hover:text-[#003087] flex items-center justify-between transition-colors"
              >
                <span>{link.title}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
              <Globe className="w-4 h-4 text-[#0070BA]" />
              <span>Nederland (Nederlands)</span>
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#003087] shadow-sm"
            >
              Direct Hulp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
