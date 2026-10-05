"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Megaphone,
  Code2,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Search,
  Share2,
  TrendingUp,
  Target,
  Cpu,
  Smartphone,
  ShoppingBag,
  Palette
} from "lucide-react";
import { COMPANY_DETAILS, SERVICES } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marketingServices = SERVICES.filter((s) => s.category === "digital-marketing");
  const techServices = SERVICES.filter((s) => s.category === "technology");

  const getServiceIcon = (name: string) => {
    return <Code2 className="w-4 h-4 text-primary-brand" />;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary-brand flex items-center justify-center font-black text-white text-xl shadow-md group-hover:scale-105 transition-transform">
            SA
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-primary-brand transition-colors">
              Shree <span className="text-primary-brand">Ads</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
              Digital & Technology Partner
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors hover:text-primary-brand ${
              pathname === "/" ? "text-primary-brand" : "text-slate-700"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-sm font-semibold transition-colors hover:text-primary-brand ${
              pathname === "/about" ? "text-primary-brand" : "text-slate-700"
            }`}
          >
            About
          </Link>

          {/* Services Dropdown Mega Menu */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 hover:text-primary-brand ${
                pathname.startsWith("/services") ? "text-primary-brand" : "text-slate-700"
              }`}
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>

            {/* Mega Dropdown Panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 backdrop-blur-xl transition-all duration-200 ${
                servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
              }`}
            >
              <div className="grid grid-cols-2 gap-6">
                {/* Digital Marketing Column */}
                <div>
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-100 mb-3">
                    <Megaphone className="w-4 h-4 text-primary-brand" />
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-brand">
                      Digital Marketing
                    </span>
                  </div>
                  <div className="space-y-1">
                    {marketingServices.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}`}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-orange-50 transition-colors group/item"
                      >
                        <div className="p-1.5 rounded-md bg-orange-50 mt-0.5 group-hover/item:bg-orange-100">
                          {getServiceIcon(s.iconName)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900 group-hover/item:text-primary-brand transition-colors">
                            {s.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {s.shortDescription}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Technology Column */}
                <div>
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-100 mb-3">
                    <Code2 className="w-4 h-4 text-primary-brand" />
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-brand">
                      Software & Tech
                    </span>
                  </div>
                  <div className="space-y-1">
                    {techServices.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}`}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-orange-50 transition-colors group/item"
                      >
                        <div className="p-1.5 rounded-md bg-orange-50 mt-0.5 group-hover/item:bg-orange-100">
                          {getServiceIcon(s.iconName)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900 group-hover/item:text-primary-brand transition-colors">
                            {s.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {s.shortDescription}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Looking for custom solutions?</span>
                <Link href="/services" className="text-primary-brand font-semibold hover:underline flex items-center gap-1">
                  View all services <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/portfolio"
            className={`text-sm font-semibold transition-colors hover:text-primary-brand ${
              pathname === "/portfolio" ? "text-primary-brand" : "text-slate-700"
            }`}
          >
            Portfolio
          </Link>

          <Link
            href="/case-studies"
            className={`text-sm font-semibold transition-colors hover:text-primary-brand ${
              pathname === "/case-studies" ? "text-primary-brand" : "text-slate-700"
            }`}
          >
            Case Studies
          </Link>

          <Link
            href="/blog"
            className={`text-sm font-semibold transition-colors hover:text-primary-brand ${
              pathname === "/blog" ? "text-primary-brand" : "text-slate-700"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-semibold transition-colors hover:text-primary-brand ${
              pathname === "/contact" ? "text-primary-brand" : "text-slate-700"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-primary-brand text-white font-bold text-sm shadow-md hover:opacity-90 transition-all flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-slate-100 text-slate-800"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-white z-40 p-6 overflow-y-auto border-t border-slate-200">
          <div className="space-y-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-lg font-semibold text-slate-900 hover:text-primary-brand"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-lg font-semibold text-slate-900 hover:text-primary-brand"
            >
              About Us
            </Link>

            <div className="py-2 border-y border-slate-100">
              <div className="font-semibold text-primary-brand mb-2">Our Services</div>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm py-1.5 text-slate-700 hover:text-primary-brand"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/portfolio"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-lg font-semibold text-slate-900 hover:text-primary-brand"
            >
              Portfolio
            </Link>
            <Link
              href="/case-studies"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-lg font-semibold text-slate-900 hover:text-primary-brand"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-lg font-semibold text-slate-900 hover:text-primary-brand"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-lg font-semibold text-slate-900 hover:text-primary-brand"
            >
              Contact
            </Link>

            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 rounded-full bg-primary-brand text-white font-bold text-center block shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
