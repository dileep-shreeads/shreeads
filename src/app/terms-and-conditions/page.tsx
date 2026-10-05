import React from "react";
import Link from "next/link";
import { COMPANY_DETAILS } from "@/lib/constants";

export const metadata = {
  title: "Terms & Conditions | Shree Ads",
  description: "Terms & Conditions for ShreeADS Digital Technology LLP."
};

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-slate-300 light-theme:text-slate-700">
      <h1 className="text-4xl font-black text-slate-100 light-theme:text-slate-900">Terms & Conditions</h1>
      <p className="text-sm text-slate-400">Last updated: October 2026</p>

      <div className="space-y-6 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-100 light-theme:text-slate-900">1. Services Agreement</h2>
          <p>
            By accessing or contracting services from {COMPANY_DETAILS.legalName}, you agree to abide by these terms. Digital marketing campaigns, SEO contracts, and custom software development projects are executed according to formal project scope documentation signed between parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-100 light-theme:text-slate-900">2. Intellectual Property Rights</h2>
          <p>
            Upon full payment of project invoices, clients receive full ownership of custom website frontend code, software IP, design assets, and marketing collateral specified in their agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-100 light-theme:text-slate-900">3. Limitation of Liability</h2>
          <p>
            Shree Ads strives for optimal ad conversion and software stability; however, third-party search engine algorithms, ad network policies, and server host uptime are subject to external platform updates beyond direct control.
          </p>
        </section>
      </div>
    </div>
  );
}
