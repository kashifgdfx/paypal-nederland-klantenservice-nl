'use client';

import React from 'react';
import { siteContent } from '@/data/content';
import {
  KeyRound,
  UserCheck,
  Settings,
  Shield,
  Key,
  CheckCircle,
  ShieldCheck,
} from 'lucide-react';

const stepIcons = [
  <UserCheck key="1" className="w-5 h-5 text-[#0070BA]" />,
  <Settings key="2" className="w-5 h-5 text-[#0070BA]" />,
  <Shield key="3" className="w-5 h-5 text-[#0070BA]" />,
  <Key key="4" className="w-5 h-5 text-[#0070BA]" />,
  <CheckCircle key="5" className="w-5 h-5 text-[#0070BA]" />,
];

export default function PasswordChangeSection() {
  const { passwordChange } = siteContent;

  return (
    <section
      id={passwordChange.id}
      className="py-20 md:py-24 bg-white scroll-mt-24 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#003087] uppercase tracking-wider mb-4">
            <KeyRound className="w-3.5 h-3.5 text-[#0070BA]" />
            <span>Accountbeveiliging</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#001C64] tracking-tight mb-4">
            {passwordChange.heading}
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-[#0070BA] mb-4">
            {passwordChange.subheading}
          </h3>

          <p className="text-base text-slate-600 leading-relaxed mb-3">
            {passwordChange.intro}
          </p>

          <p className="text-sm font-semibold uppercase tracking-wide text-slate-800">
            {passwordChange.lead}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {passwordChange.steps.map((step, index) => (
            <div
              key={index}
              className={`group bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#0070BA] hover:shadow-md transition-all duration-200 ${
                index === passwordChange.steps.length - 1
                  ? 'md:col-span-2'
                  : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  {stepIcons[index % stepIcons.length]}
                </div>

                <div className="flex-1">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 text-[#0070BA] text-xs font-bold mb-2">
                    Stap {index + 1}
                  </span>

                  <p className="text-slate-900 font-semibold leading-relaxed">
                    {step}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Notice */}
        <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#0070BA]" />
            </div>

            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#003087] mb-2">
                Belangrijke beveiligingsregel
              </span>

              <p className="text-slate-800 font-medium leading-relaxed">
                {passwordChange.closing}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}