'use client';

import React from 'react';
import { siteContent } from '@/data/content';
import {
  Wallet,
  Building2,
  CreditCard,
  FileCheck2,
  CheckCircle,
  Settings,
} from 'lucide-react';

const checkIcons = [
  <Building2 key="bank" className="w-6 h-6 text-[#003087]" />,
  <CreditCard key="card" className="w-6 h-6 text-[#0070BA]" />,
  <FileCheck2 key="file" className="w-6 h-6 text-emerald-600" />,
];

export default function BalanceSection() {
  const { balance } = siteContent;

  return (
    <section id={balance.id} className="py-16 md:py-24 bg-white scroll-mt-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#003087] uppercase tracking-wider mb-4">
            <Wallet className="w-3.5 h-3.5 text-[#0070BA]" />
            <span>Saldo & Betaalmethoden</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001C64] tracking-tight mb-3">
            {balance.heading}
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-[#003087] mb-3">
            {balance.subheading}
          </h3>

          <p className="text-base text-slate-700 leading-relaxed mb-2">
            {balance.intro}
          </p>

          <p className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
            {balance.lead}
          </p>
        </div>

        {/* 3 Checks Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {balance.checks.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-b from-white to-[#F8FAFC] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100/70 inline-block mb-4">
                  {checkIcons[index % checkIcons.length]}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {item}
                </h4>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Actief gekoppeld controleren</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Settings Advice */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 shrink-0">
            <Settings className="w-5 h-5 text-[#0070BA]" />
          </div>
          <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed self-center">
            {balance.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
