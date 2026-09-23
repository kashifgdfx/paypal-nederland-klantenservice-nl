'use client';

import React from 'react';
import { siteContent } from '@/data/content';
import {
  CreditCard,
  WalletCards,
  Building2,
  ShieldAlert,
  CalendarX2,
  Wrench,
  Search,
} from 'lucide-react';

const causeIcons = [
  <WalletCards key="wallet" className="w-5 h-5 text-rose-600" />,
  <Building2 key="bank" className="w-5 h-5 text-[#0070BA]" />,
  <ShieldAlert key="shield" className="w-5 h-5 text-amber-600" />,
  <CalendarX2 key="calendar" className="w-5 h-5 text-orange-600" />,
  <Wrench key="wrench" className="w-5 h-5 text-slate-700" />,
];

export default function PaymentProblemsSection() {
  const { paymentProblems } = siteContent;

  return (
    <section id={paymentProblems.id} className="py-16 md:py-24 bg-[#F8FAFC] scroll-mt-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#003087] uppercase tracking-wider mb-4">
            <CreditCard className="w-3.5 h-3.5 text-[#0070BA]" />
            <span>Transacties & Betalingen</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001C64] tracking-tight mb-3">
            {paymentProblems.heading}
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-[#003087] mb-3">
            {paymentProblems.subheading}
          </h3>

          <p className="text-base text-slate-700 leading-relaxed">
            {paymentProblems.intro}
          </p>
        </div>

        {/* 5 Payment Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {paymentProblems.causes.map((cause, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 inline-block mb-3">
                  {causeIcons[index % causeIcons.length]}
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Punt {index + 1}
                </span>
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {cause}
                </h4>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Controleer status
              </div>
            </div>
          ))}
        </div>

        {/* Closing Audit Notice */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-blue-200/80 shadow-sm flex items-start gap-4">
          <div className="p-3 rounded-xl bg-blue-50 text-[#003087] shrink-0 border border-blue-100">
            <Search className="w-5 h-5 text-[#0070BA]" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#003087] uppercase tracking-wider block mb-1">
              Transactie Audit
            </span>
            <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed">
              {paymentProblems.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
