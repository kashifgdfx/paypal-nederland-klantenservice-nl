'use client';

import React from 'react';
import { siteContent } from '@/data/content';
import {
  RotateCcw,
  PackageX,
  ArrowLeftRight,
  ShieldAlert,
  Store,
  FileCheck,
} from 'lucide-react';

const situationIcons = [
  <PackageX key="pkg" className="w-5 h-5 text-rose-600" />,
  <ArrowLeftRight key="arrow" className="w-5 h-5 text-amber-600" />,
  <ShieldAlert key="shield" className="w-5 h-5 text-[#003087]" />,
  <Store key="store" className="w-5 h-5 text-indigo-600" />,
];

export default function RefundSection() {
  const { refund } = siteContent;

  return (
    <section id={refund.id} className="py-16 md:py-24 bg-white scroll-mt-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#003087] uppercase tracking-wider mb-4">
            <RotateCcw className="w-3.5 h-3.5 text-[#0070BA]" />
            <span>Kopersbescherming & Geschillen</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001C64] tracking-tight mb-3">
            {refund.heading}
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-[#003087] mb-3">
            {refund.subheading}
          </h3>

          <p className="text-base text-slate-700 leading-relaxed mb-2">
            {refund.intro}
          </p>

          <p className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
            {refund.lead}
          </p>
        </div>

        {/* 4 Situations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {refund.situations.map((situation, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 inline-block mb-4 shadow-2xs">
                  {situationIcons[index % situationIcons.length]}
                </div>
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {situation}
                </h4>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs font-semibold text-slate-500">
                Onderzoek mogelijk
              </div>
            </div>
          ))}
        </div>

        {/* Closing Evidence Banner */}
        <div className="p-6 sm:p-7 rounded-2xl bg-amber-50/80 border border-amber-200 shadow-2xs flex items-start gap-4">
          <div className="p-3 rounded-xl bg-amber-100 text-amber-900 shrink-0">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block mb-0.5">
              Belangrijke aanbeveling
            </span>
            <p className="text-sm sm:text-base text-amber-950 font-bold leading-relaxed">
              {refund.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
