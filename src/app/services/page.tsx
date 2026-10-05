import React from "react";
import Link from "next/link";
import { ArrowRight, Megaphone, Search, Share2, TrendingUp, Target, Code2, Cpu, Smartphone, ShoppingBag, Palette } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Services | Digital Marketing & Software Development - Shree Ads",
  description: "Explore Shree Ads' full suite of digital marketing services and custom software development solutions."
};

export default function ServicesPage() {
  const getServiceIcon = (name: string) => {
    return <Code2 className="w-6 h-6 text-primary-brand" />;
  };

  return (
    <div className="space-y-16 pb-12">
      {/* Light Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">Our Services</h1>
        <p className="text-base text-slate-600 max-w-xl mx-auto">
          Comprehensive digital marketing and software development services to help your business grow.
        </p>
      </section>

      {/* Services Grid layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#FF5D02]/50 transition-all space-y-5 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:bg-[#FF5D02] group-hover:text-white transition-colors">
                  {getServiceIcon(s.iconName)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF5D02] transition-colors">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.shortDescription}</p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#FF5D02] hover:text-[#E04E00]"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
