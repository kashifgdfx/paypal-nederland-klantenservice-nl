'use client';

import React, { useState, useMemo } from 'react';
import { siteContent, FAQItem } from '@/data/content';
import {
  HelpCircle,
  Search,
  ChevronDown,
  X,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const { faqs } = siteContent;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [openIds, setOpenIds] = useState<number[]>([1, 2]); // default open first two
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Categories list
  const categories = useMemo(() => {
    const cats = Array.from(new Set(faqs.items.map((item) => item.category)));
    return ['Alle', ...cats];
  }, [faqs.items]);

  // Filtered FAQ items
  const filteredFaqs = useMemo(() => {
    return faqs.items.filter((item) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat =
        selectedCategory === 'Alle' || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [faqs.items, searchQuery, selectedCategory]);

  const toggleItem = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredFaqs.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const copyQuestion = (item: FAQItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(`${item.question}\n${item.answer}`);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // Helper function to turn the PayPal link inside text into a clickable anchor tag automatically
  const renderAnswerWithLinks = (text: string) => {
    const urlRegex = /(https:\/\/www\.paypal\.com\/nl\/home)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) => {
      if (part === 'https://www.paypal.com/nl/home') {
        return (
          <a
            key={i}
            href="https://www.paypal.com/nl/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0070BA] underline font-semibold hover:text-[#003087] transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <section id={faqs.id} className="py-16 md:py-24 bg-white scroll-mt-24 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#003087] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#0070BA]" />
            <span>Kennisbank</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#001C64] tracking-tight mb-4">
            {faqs.heading}
          </h2>

          <p className="text-base text-slate-600">
            {faqs.items.length} officiële antwoorden op veelgestelde vragen over PayPal Nederland
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="relative mb-6 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Zoek in alle PayPal vragen en antwoorden..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl border border-slate-200 bg-[#F8FAFC] text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0070BA] focus:border-transparent text-sm sm:text-base shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-200 text-slate-500"
                aria-label="Zoekopdracht wissen"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills & Expand/Collapse */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 ${
                  selectedCategory === cat
                    ? 'bg-[#003087] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
                {cat === 'Alle' && ` (${faqs.items.length})`}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <button
              onClick={expandAll}
              className="hover:text-[#003087] transition-colors"
            >
              Alles uitklappen
            </button>
            <span>•</span>
            <button
              onClick={collapseAll}
              className="hover:text-[#003087] transition-colors"
            >
              Alles inklappen
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-medium text-slate-500 mb-4 px-1">
          Toont {filteredFaqs.length} van de {faqs.items.length} vragen
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-blue-300 bg-white shadow-sm ring-1 ring-blue-100'
                      : 'border-slate-200/90 bg-[#F8FAFC] hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3.5 min-w-0">
                      <span className="shrink-0 w-7 h-7 rounded-xl bg-blue-50 text-[#003087] text-xs font-bold flex items-center justify-center border border-blue-100/70 mt-0.5">
                        {faq.id}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0070BA] bg-blue-50/70 px-2 py-0.5 rounded-md">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0 ml-2">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={(e) => copyQuestion(faq, e)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            copyQuestion(faq, e as any);
                          }
                        }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                        title="Kopieer vraag en antwoord"
                        aria-label="Kopieer vraag en antwoord"
                      >
                        {copiedId === faq.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </div>
                      <div
                        className={`p-1.5 rounded-lg text-slate-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#003087]' : ''
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100/80 bg-white">
                          <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/50 border border-blue-100/60">
                            <CheckCircle2 className="w-5 h-5 text-[#0070BA] shrink-0 mt-0.5" />
                            <p className="font-normal text-slate-800">
                              {renderAnswerWithLinks(faq.answer)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="p-10 text-center rounded-2xl bg-slate-50 border border-slate-200">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-base font-bold text-slate-800 mb-1">
                Geen vragen gevonden voor &quot;{searchQuery}&quot;
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Alle');
                }}
                className="mt-3 text-xs font-bold text-[#003087] hover:underline"
              >
                Filters wissen
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}