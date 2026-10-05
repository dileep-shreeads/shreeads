import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Code2
} from "lucide-react";
import { SERVICES, FAQS } from "@/lib/constants";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} Services | Shree Ads`,
    description: service.shortDescription
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-12">
      {/* 1. Hero */}
      <section className="relative pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-primary-brand uppercase tracking-wider">
            <Link href="/services" className="hover:underline">Services</Link> • {service.category}
          </div>

          <div className="flex items-start gap-5">
            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
              <Code2 className="w-8 h-8 text-primary-brand" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mt-2">
                {service.fullDescription}
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-primary-brand text-white font-bold text-base shadow-lg hover:opacity-90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Started with {service.title} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Problem Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-rose-50 border border-rose-100 p-8 sm:p-12 space-y-4">
          <div className="flex items-center gap-3 text-rose-600 font-bold uppercase text-xs tracking-wider">
            <AlertTriangle className="w-5 h-5" /> The Business Challenge
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Why Traditional Approaches Fail
          </h2>
          <p className="text-base text-slate-700 leading-relaxed">
            {service.problemStatement}
          </p>
        </div>
      </section>

      {/* 3. Benefits & Deliverables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
              Key Strategic Benefits
            </h3>
            <ul className="space-y-4">
              {service.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-brand shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
              What We Deliver
            </h3>
            <ul className="space-y-4">
              {service.deliverables.map((d, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-brand shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-700">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Execution Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-xs font-bold uppercase tracking-wider text-primary-brand">
            OUR EXECUTION METHODOLOGY
          </div>
          <h2 className="text-3xl font-black text-slate-900">
            Step-by-Step {service.title} Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((p, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 relative shadow-xs">
              <div className="text-3xl font-black text-primary-brand">{p.step}</div>
              <h4 className="text-lg font-bold text-slate-900">{p.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-3xl font-black text-slate-900 text-center">
          {service.title} FAQs
        </h2>
        <FAQAccordion items={FAQS.slice(0, 4)} />
      </section>

      {/* CTA */}
      <CTASection
        title={`Scale Your Business With ${service.title}`}
        description="Book a discovery call with our specialists today and receive a custom execution plan."
      />
    </div>
  );
}
