"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/lib/constants";

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-primary-brand shadow-md"
                : "bg-slate-50 border-slate-200 hover:border-slate-300"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-base sm:text-lg text-slate-900">
                {item.question}
              </span>
              <div
                className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                  isOpen
                    ? "bg-primary-brand text-white rotate-180"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
