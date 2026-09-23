'use client';

import React from 'react';
import { siteContent } from '@/data/content';
import {
  PhoneCall,
  UserCheck,
  CreditCard,
  Receipt,
  ArrowLeftRight,
  ShieldCheck,
  AlertTriangle,
  ExternalLink,
} from 'lucide-react';

const topicIcons = [
  <UserCheck key="acc" className="w-4 h-4 text-[#003087]" />,
  <CreditCard key="pay" className="w-4 h-4 text-[#0070BA]" />,
  <Receipt key="inv" className="w-4 h-4 text-emerald-600" />,
  <ArrowLeftRight key="trx" className="w-4 h-4 text-amber-600" />,
  <ShieldCheck key="sec" className="w-4 h-4 text-rose-600" />,
];

export default function PhoneNumberSection() {
  const { phoneNumber } = siteContent;

  return (
    <section id={phoneNumber.id} className="py-16 md:py-24 bg-[#F8FAFC] scroll-mt-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#003087] uppercase tracking-wider mb-4">
            <PhoneCall className="w-3.5 h-3.5 text-[#0070BA]" />
            <span>Telefonisch Contact</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001C64] tracking-tight mb-3">
            {phoneNumber.heading}
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-[#003087] mb-3">
            {phoneNumber.subheading}
          </h3>

          <p className="text-base text-slate-700 leading-relaxed mb-4">
            {phoneNumber.intro}
          </p>

          <p className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
            {phoneNumber.lead}
          </p>
        </div>

        {/* 5 Inquiry Topics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-10">
          {phoneNumber.topics.map((topic, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-all flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 shrink-0">
                {topicIcons[index % topicIcons.length]}
              </div>
              <span className="text-sm font-bold text-slate-900">
                {topic}
              </span>
            </div>
          ))}
        </div>

        {/* Closing Notice & Verification Advisory */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-white border border-blue-200 shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-50 text-[#003087] shrink-0 border border-blue-100">
              <PhoneCall className="w-6 h-6 text-[#0070BA]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#003087] uppercase tracking-wider block mb-1">
                Officiële Contactmethode
              </span>
              <p className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed">
                {phoneNumber.closing}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50/90 border border-amber-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Veiligheidswaarschuwing</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                Gebruik geen telefoonnummer uit een onbekende website of zoekresultaat zonder verificatie. Controleer actuele gegevens rechtstreeks bij PayPal.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-200/60">
              <a
                href="#faq"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003087] hover:underline"
              >
                <span>Bekijk telefoonnummer FAQs</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
