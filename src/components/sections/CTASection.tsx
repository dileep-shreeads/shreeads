import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/constants";

export default function CTASection({
  title = "Ready to Build Something That Grows Your Business?",
  description = "Whether you need a stronger digital presence, a high-performing marketing strategy, or custom software, our team can help turn your goals into measurable results.",
  primaryBtnText = "Start Your Project",
  secondaryBtnText = "Talk to an Expert"
}: {
  title?: string;
  description?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
}) {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[lab(64.272%_57.1788_90.3583)] p-8 sm:p-14 text-white overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
              <Sparkles className="w-3.5 h-3.5" /> High Impact Transformation
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-extrabold text-base shadow-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
              >
                {primaryBtnText} <ArrowRight className="w-5 h-5 text-[lab(64.272%_57.1788_90.3583)]" />
              </Link>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-base border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" /> {secondaryBtnText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
