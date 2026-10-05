import React from "react";
import Link from "next/link";
import { COMPANY_DETAILS } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | Shree Ads",
  description: "Privacy Policy for ShreeADS Digital Technology LLP."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-slate-300 light-theme:text-slate-700">
      <h1 className="text-4xl font-black text-slate-100 light-theme:text-slate-900">Privacy Policy</h1>
      <p className="text-sm text-slate-400">Last updated: October 2026</p>

      <div className="space-y-6 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-100 light-theme:text-slate-900">1. Information We Collect</h2>
          <p>
            {COMPANY_DETAILS.legalName} ("Shree Ads", "we", "our") collects information that you provide directly to us when submitting inquiries on our website ({`https://shreeads.in`}), including name, email address, phone number, company name, and project specifications.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-100 light-theme:text-slate-900">2. How We Use Your Information</h2>
          <p>
            We use collected data solely for responding to service inquiries, providing custom proposals, executing marketing and software development contracts, and sending periodic client updates. We do not sell or rent user information to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-100 light-theme:text-slate-900">3. Analytics & Cookies</h2>
          <p>
            We utilize standard web analytics tools to measure website visitor performance, core web vitals, and search indexing efficiency. You may adjust browser cookie settings at any time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-100 light-theme:text-slate-900">4. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, please email us at{" "}
            <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-amber-500 font-bold hover:underline">
              {COMPANY_DETAILS.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
