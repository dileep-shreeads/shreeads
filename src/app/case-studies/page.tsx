import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Quote } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Case Studies | Client Results & Growth Metrics - Shree Ads",
  description: "Read detailed case studies showing how Shree Ads helped clients achieve 310% B2B lead growth, 4.2x ROAS, and sub-second web performance."
};

export default function CaseStudiesPage() {
  return (
    <div className="space-y-16 pb-12">
      {/* Light Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">In-Depth Case Studies</h1>
        <p className="text-base text-slate-600 max-w-xl mx-auto">
          Explore step-by-step challenges, solutions, technical executions, and empirical metrics achieved for our partners.
        </p>
      </section>

      {/* Case Studies Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {CASE_STUDIES.map((cs) => (
          <div
            key={cs.id}
            className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 space-y-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary-brand">
                  {cs.industry} • {cs.client}
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  {cs.title}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {cs.services.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Challenge */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-rose-600">
                  The Business Challenge
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {cs.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-primary-brand">
                  Our Integrated Solution
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {cs.solution}
                </p>
              </div>
            </div>

            {/* Results Grid */}
            <div className="pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Verified Quantitative Results
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {cs.results.map((r, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-orange-50 border border-orange-100 text-center">
                    <div className="text-2xl font-black text-primary-brand">{r.metric}</div>
                    <div className="text-xs text-slate-500 mt-1">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial snippet */}
            {cs.testimonial && (
              <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100 flex items-start gap-4">
                <Quote className="w-8 h-8 text-primary-brand shrink-0" />
                <div>
                  <p className="text-sm text-slate-800 italic leading-relaxed">
                    "{cs.testimonial.quote}"
                  </p>
                  <div className="text-xs font-bold text-primary-brand mt-2">
                    — {cs.testimonial.author}, {cs.testimonial.role}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      <CTASection />
    </div>
  );
}
