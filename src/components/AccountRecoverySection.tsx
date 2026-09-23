'use client';

import React from 'react';
import { siteContent } from '@/data/content';
import {
  RefreshCw,
  Key,
  PhoneOff,
  ShieldBan,
  Activity,
  CheckCircle2,
  ArrowRight,
  Shield,
} from 'lucide-react';

const reasonIcons = [
  <Key key="key" className="w-6 h-6 text-[#0070BA]" />,
  <PhoneOff key="phone" className="w-6 h-6 text-amber-600" />,
  <ShieldBan key="ban" className="w-6 h-6 text-rose-600" />,
  <Activity key="activity" className="w-6 h-6 text-indigo-600" />,
];

export default function AccountRecoverySection() {
  const { accountRecovery } = siteContent;

  return (
    <section
      id={accountRecovery.id}
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] scroll-mt-24 border-b border-slate-100"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* LEFT PANEL */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#003087] uppercase tracking-wider mb-5">
                <RefreshCw className="w-3.5 h-3.5 text-[#0070BA]" />
                <span>Herstel & Toegang</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-[#001C64] mb-4">
                {accountRecovery.heading}
              </h2>

              {/* Sub Heading */}
              <h3 className="text-xl font-bold text-[#0070BA] mb-4">
                {accountRecovery.subheading}
              </h3>

              {/* Intro */}
              <p className="text-slate-600 leading-relaxed text-base mb-4">
                {accountRecovery.intro}
              </p>

              <p className="text-sm font-bold uppercase tracking-wider text-slate-800">
                {accountRecovery.lead}
              </p>

              {/* Trust Card */}
              <div className="mt-8 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#0070BA]" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Account Herstel
                    </h4>
                    <p className="text-sm text-slate-500">
                      Veilige verificatie en herstel
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    'Veilige verificatie',
                    'Account toegang herstellen',
                    'Ondersteunde herstelopties',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-8">

            {/* Reason Cards */}
            <div className="grid md:grid-cols-2 gap-5">
              {accountRecovery.reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 hover:border-[#0070BA] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Gradient Border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003087] via-[#0070BA] to-[#00AEEF]" />

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-5">

                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                        {reasonIcons[index % reasonIcons.length]}
                      </div>

                      <span className="text-4xl font-black text-slate-100 group-hover:text-blue-100 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
                      Herstelreden
                    </span>

                    <h4 className="mt-2 text-lg font-bold text-slate-900 leading-snug">
                      {reason}
                    </h4>

                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#0070BA]">
                        <CheckCircle2 className="w-4 h-4" />
                        Verificatie vereist
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium CTA */}
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#003087] via-[#0047AB] to-[#0070BA] p-8 md:p-10 text-white shadow-xl mt-10">

              {/* Glow Effects */}
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-cyan-300/10 blur-3xl" />

              <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">
                      Aanbevolen herstelactie
                    </h4>

                    <p className="text-white/90 leading-relaxed max-w-2xl">
                      {accountRecovery.closing}
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#003087] font-bold hover:scale-105 transition-transform shadow-lg shrink-0"
                >
                  <span>Ondersteuning</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}