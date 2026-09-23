'use client';

import React from 'react';
import { siteContent } from '@/data/content';
import {
  Lock,
  KeyRound,
  AlertCircle,
  ShieldAlert,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Shield,
} from 'lucide-react';

const causeIcons = [
  <KeyRound key="key" className="w-6 h-6 text-[#0070BA]" />,
  <AlertCircle key="alert" className="w-6 h-6 text-amber-600" />,
  <ShieldAlert key="shield" className="w-6 h-6 text-[#003087]" />,
  <Lock key="lock" className="w-6 h-6 text-rose-600" />,
  <Smartphone key="phone" className="w-6 h-6 text-indigo-600" />,
];

export default function LoginProblemsSection() {
  const { loginProblems } = siteContent;

  return (
    <section
      id={loginProblems.id}
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-white via-[#F8FAFC] to-white scroll-mt-24 border-b border-slate-100"
    >
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#003087] uppercase tracking-wider mb-5">
                <Lock className="w-3.5 h-3.5 text-[#0070BA]" />
                <span>Inloggen & Beveiliging</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-[#001C64] mb-4">
                {loginProblems.heading}
              </h2>

              <h3 className="text-xl font-bold text-[#0070BA] mb-5">
                {loginProblems.subheading}
              </h3>

              <p className="text-slate-600 leading-relaxed text-base">
                {loginProblems.lead}
              </p>

              {/* Trust Card */}
              <div className="mt-8 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#0070BA]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Veilig Accountbeheer
                    </h4>
                    <p className="text-sm text-slate-500">
                      Veilige toegang tot uw account
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    'Veilige toegang',
                    'Account herstel',
                    'Tweestapsverificatie',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-8">

            {/* Cause Cards */}
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {loginProblems.causes.map((cause, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 hover:border-[#0070BA] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Gradient Top Border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003087] via-[#0070BA] to-[#00AEEF]" />

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                        {causeIcons[index % causeIcons.length]}
                      </div>

                      <span className="text-4xl font-black text-slate-100 group-hover:text-blue-100 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
                      Oorzaak {index + 1}
                    </span>

                    <h4 className="mt-2 text-lg font-bold text-slate-900 leading-snug">
                      {cause}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium CTA Box */}
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#003087] via-[#0047AB] to-[#0070BA] p-8 md:p-10 text-white shadow-xl">
              {/* Glow */}
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-cyan-300/10 blur-3xl" />

              <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">
                      Aanbevolen oplossing
                    </h4>

                    <p className="text-white/90 leading-relaxed max-w-2xl">
                      {loginProblems.closing}{' '}
                      Ga naar de PayPal website of app en gebruik uw geregistreerde{' '}
                      <a
                        href="https://www.paypal.com/nl/home"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-200 underline font-semibold hover:text-white transition-colors"
                      >
                        https://www.paypal.com/nl/home
                      </a>{' '}
                      e-mailadres en wachtwoord om in te loggen.
                    </p>
                  </div>
                </div>

                <a
                  href="#wachtwoord-wijzigen"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#003087] font-bold hover:scale-105 transition-transform shadow-lg shrink-0"
                >
                  <span>Wachtwoord opties</span>
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