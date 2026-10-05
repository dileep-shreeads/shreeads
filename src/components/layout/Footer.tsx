import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Share2,
  ArrowRight,
  Shield,
  Heart
} from "lucide-react";
import { COMPANY_DETAILS, SERVICES } from "@/lib/constants";

export default function Footer() {
  const marketingServices = SERVICES.filter((s) => s.category === "digital-marketing");
  const techServices = SERVICES.filter((s) => s.category === "technology");

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary-brand flex items-center justify-center font-bold text-white text-xl shadow-md">
                SA
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  Shree <span className="text-primary-brand">Ads</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400">
                  Digital Technology LLP
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Shree Ads combines strategic digital marketing, brand acceleration, and modern custom software engineering to help business leaders conquer markets and scale operations.
            </p>

            <div className="space-y-2 text-sm text-slate-300 pt-2">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-brand shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-primary-brand transition-colors">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-brand shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-primary-brand transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary-brand shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_DETAILS.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary-brand hover:border-primary-brand transition-all font-bold text-xs"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href={COMPANY_DETAILS.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary-brand hover:border-primary-brand transition-all font-bold text-xs"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={COMPANY_DETAILS.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary-brand hover:border-primary-brand transition-all font-bold text-xs"
                aria-label="LinkedIn"
              >
                LN
              </a>
              <a
                href={COMPANY_DETAILS.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary-brand hover:border-primary-brand transition-all font-bold text-xs"
                aria-label="Twitter"
              >
                X
              </a>
              <a
                href={COMPANY_DETAILS.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary-brand hover:border-primary-brand transition-all font-bold text-xs"
                aria-label="YouTube"
              >
                YT
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100 border-l-2 border-primary-brand pl-3">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-primary-brand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-brand transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary-brand transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-primary-brand transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-brand transition-colors">
                  Blog Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-brand transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Digital Marketing Services Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100 border-l-2 border-primary-brand pl-3">
              Digital Marketing
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {marketingServices.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`} className="hover:text-primary-brand transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Software & Tech Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100 border-l-2 border-primary-brand pl-3">
              Software & Tech
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {techServices.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`} className="hover:text-primary-brand transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY_DETAILS.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
