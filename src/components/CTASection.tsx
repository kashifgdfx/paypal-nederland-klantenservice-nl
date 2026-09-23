'use client';

import React from 'react';
import { siteContent } from '@/data/content';
import { ShieldCheck, ArrowRight, ExternalLink, Globe } from 'lucide-react';

export default function CTASection() {
  const { contact } = siteContent;

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-[#001C64] via-[#003087] to-[#0070BA] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00CFDE]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white mb-4">
            <ShieldCheck className="w-4 h-4 text-[#00CFDE]" />
            <span>{contact.heading}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
            {contact.subheading}
          </h2>

          <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed mb-6 max-w-3xl mx-auto">
            {contact.intro}
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center max-w-2xl mx-auto mb-6">
            <p className="text-xs sm:text-sm font-semibold text-white mb-3">
              {contact.closing}
            </p>
            {/* Added PayPal official website link */}
            <a
              href="https://www.paypal.com/nl/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00CFDE] hover:text-white transition-colors underline underline-offset-4"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Bezoek de officiële website: https://www.paypal.com/nl/home</span>
            </a>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-[#001C64] bg-white hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <span>{contact.heading}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#faq"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-xs transition-all duration-200"
            >
              <span>Veelgestelde Vragen</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}