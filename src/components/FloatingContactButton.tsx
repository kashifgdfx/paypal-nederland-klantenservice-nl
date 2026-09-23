'use client';

import React from 'react';
import { Phone } from 'lucide-react';

export default function VerticalContactTab() {
  const phoneNumber = "+31-20-225-4839";

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-50 hidden sm:block">
      <a
        href={`tel:${phoneNumber}`}
        className="group flex items-center gap-2 bg-[#003087] hover:bg-[#001C64] text-white py-4 px-2.5 rounded-l-xl shadow-2xl transition-all duration-300 hover:px-3.5 border-l border-t border-b border-white/20"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        aria-label="Klantenservice Bel"
      >
        <div className="rotate-90 mb-1">
          <Phone className="w-4 h-4 text-cyan-300" />
        </div>
        <span className="text-lg font-bold tracking-widest uppercase">
          Bel: {phoneNumber}
        </span>
      </a>
    </div>
  );
}