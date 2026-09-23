'use client';

import React, { useEffect, useRef } from 'react';
import { siteContent, navigationLinks } from '@/data/content';
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  HelpCircle,
  KeyRound,
  RefreshCw,
  CreditCard,
  PhoneCall,
  RotateCcw,
  Wallet,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const topicIcons: Record<string, React.ReactNode> = {
  'login-problemen': <Lock className="w-4 h-4 text-[#0070BA]" />,
  'wachtwoord-wijzigen': <KeyRound className="w-4 h-4 text-[#0070BA]" />,
  'account-herstellen': <RefreshCw className="w-4 h-4 text-[#0070BA]" />,
  'betalingsproblemen': <CreditCard className="w-4 h-4 text-[#0070BA]" />,
  'opwaarderen': <Wallet className="w-4 h-4 text-[#0070BA]" />,
  'contact': <HelpCircle className="w-4 h-4 text-[#0070BA]" />,
  'refund-en-klachten': <RotateCcw className="w-4 h-4 text-[#0070BA]" />,
  'telefoonnummer': <PhoneCall className="w-4 h-4 text-[#0070BA]" />,
  'faq': <HelpCircle className="w-4 h-4 text-[#0070BA]" />,
};

export default function HeroSection() {
  const { hero } = siteContent;
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.gsap-hero-badge', { opacity: 0, y: -15, duration: 0.6 })
        .from('.gsap-hero-title', { opacity: 0, y: 25, duration: 0.8 }, '-=0.4')
        .from('.gsap-hero-desc', { opacity: 0, y: 15, duration: 0.7 }, '-=0.5');

      gsap.fromTo(
        cardRef.current,
        { width: '80%', borderRadius: '2rem' },
        {
          width: '100%',
          borderRadius: '1rem',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        overlayTextRef.current,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 75%',
            end: 'top 35%',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#60CDFF] text-slate-900 pt-12 pb-16 md:pt-16 md:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          
          {/* Trust Badge */}
          <div className="gsap-hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs mb-6">
            <ShieldCheck className="w-4 h-4 text-[#0070BA]" />
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              Officiële Klantenservice Informatie Nederland
            </span>
          </div>

          {/* H1 Title with controlled max-width for better line wrapping (2-3 lines) */}
          <h1 className="gsap-hero-title text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.15] mb-4 max-w-3xl mx-auto">
            {hero.h1}
          </h1>

          {/* Intro Paragraph 1 */}
          <p className="gsap-hero-desc text-sm sm:text-base md:text-lg text-slate-800 font-medium leading-relaxed max-w-2xl mx-auto">
            {hero.intro1}
          </p>
        </div>

        {/* Scroll-Driven Expandable Image Container */}
        <div className="flex justify-center w-full mb-12">
          <div
            ref={cardRef}
            className="bg-white text-slate-900 shadow-2xl overflow-hidden text-left mx-auto relative"
            style={{ width: '80%' }}
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80"
                alt="Support Team"
                className="w-full h-full object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-6 sm:p-10">
                <div ref={overlayTextRef} className="w-full">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cyan-300 block mb-1">
                    Betrouwbaar & Veilig
                  </span>
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none drop-shadow-md">
                    Secure Support & Account Help
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 bg-white">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-[#003087] shrink-0 mt-0.5 border border-blue-100">
                  <Lock className="w-6 h-6 text-[#0070BA]" />
                </div>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {hero.intro2}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick jumps navigation section */}
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-slate-900 mb-4 text-center">
            Snelle navigatie naar oplossingen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {navigationLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-white/80 backdrop-blur-md hover:bg-white border border-white hover:border-blue-300 shadow-sm transition-all duration-200"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="p-2 rounded-lg bg-white group-hover:bg-blue-50 text-[#0070BA] shrink-0 shadow-xs border border-slate-100">
                    {topicIcons[item.id] || <HelpCircle className="w-4 h-4 text-[#0070BA]" />}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#003087] truncate transition-colors">
                    {item.title}
                  </span>
                </div>
                <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#0070BA] flex items-center justify-center shrink-0 ml-2 transition-all">
                  <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}