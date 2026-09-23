'use client';

import React from 'react';
import { siteContent } from '@/data/content';
import {
  HelpCircle,
  UserCheck,
  CreditCard,
  RotateCcw,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

const topicIcons = [
  <UserCheck key="acc" className="w-5 h-5 text-[#003087]" />,
  <CreditCard key="pay" className="w-5 h-5 text-[#0070BA]" />,
  <RotateCcw key="ref" className="w-5 h-5 text-emerald-600" />,
  <AlertTriangle key="unk" className="w-5 h-5 text-amber-600" />,
  <ShieldCheck key="sec" className="w-5 h-5 text-rose-600" />,
];

export default function ContactSection() {
  const { contact } = siteContent;

  return (
    <section id={contact.id} className="py-16 md:py-24 bg-[#F8FAFC] scroll-mt-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#003087] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#0070BA]" />
            <span>Officiële Ondersteuning</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001C64] tracking-tight mb-3">
            {contact.heading}
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-[#003087] mb-3">
            {contact.subheading}
          </h3>

          <p className="text-base text-slate-700 leading-relaxed mb-2">
            {contact.intro}
          </p>

          <p className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
            {contact.lead}
          </p>
        </div>

        {/* 5 Common Support Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {contact.topics.map((topic, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 inline-block mb-3">
                  {topicIcons[index % topicIcons.length]}
                </div>
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {topic}
                </h4>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Officiële hulp
              </div>
            </div>
          ))}
        </div>

        {/* Closing Official Notice Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#003087] to-[#001C64] text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs text-white shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#00CFDE]" />
            </div>
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
              {contact.closing}
            </p>
          </div>
          <a
            href="#faq"
            className="shrink-0 px-6 py-3 rounded-full text-sm font-bold text-[#001C64] bg-white hover:bg-slate-100 shadow-sm transition-colors"
          >
            Bekijk FAQ
          </a>
        </div>
      </div>
    </section>
  );
}
