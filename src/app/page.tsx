"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Code2,
  Megaphone,
  Play,
  Users,
  Search,
  Share2,
  Target,
  Cpu,
  Smartphone,
  ShoppingBag,
  Palette,
  Briefcase,
  ChevronRight,
  Award,
  Zap,
  Globe
} from "lucide-react";
import {
  COMPANY_DETAILS,
  SERVICES,
  PORTFOLIO_ITEMS,
  CASE_STUDIES,
  TESTIMONIALS,
  INDUSTRIES,
  TECH_STACK,
  FAQS,
  BLOG_POSTS
} from "@/lib/constants";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import PortfolioCard from "@/components/cards/PortfolioCard";
import BlogCard from "@/components/cards/BlogCard";

export default function HomePage() {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Megaphone": return <Megaphone className="w-6 h-6 text-[lab(64.272%_57.1788_90.3583)]" />;
      case "Search": return <Search className="w-6 h-6 text-[lab(64.272%_57.1788_90.3583)]" />;
      case "Share2": return <Share2 className="w-6 h-6 text-[lab(64.272%_57.1788_90.3583)]" />;
      case "TrendingUp": return <TrendingUp className="w-6 h-6 text-[lab(64.272%_57.1788_90.3583)]" />;
      case "Target": return <Target className="w-6 h-6 text-[lab(64.272%_57.1788_90.3583)]" />;
      case "Code2": return <Code2 className="w-6 h-6 text-[lab(64.272%_57.1788_90.3583)]" />;
      case "Cpu": return <Cpu className="w-6 h-6 text-[lab(64.272%_57.1788_90.3583)]" />;
      case "Smartphone": return <Smartphone className="w-6 h-6 text-[lab(64.272%_57.1788_90.3583)]" />;
      case "ShoppingBag": return <ShoppingBag className="w-6 h-6 text-[lab(64.272%_57.1788_90.3583)]" />;
      case "Palette": return <Palette className="w-6 h-6 text-[lab(64.272%_57.1788_90.3583)]" />;
      default: return <Code2 className="w-6 h-6 text-[lab(64.272%_57.1788_90.3583)]" />;
    }
  };

  return (
    <div className="space-y-24 pb-12">
      {/* 1. HERO SECTION (100% Full Background 3D Artwork matching reference) */}
      <section className="relative bg-[#050814] text-white pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden min-h-[620px] flex items-center">
        {/* Full Background 3D Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-banner-full.png"
            alt="Shree Ads 3D Digital Marketing & Software Background"
            fill
            className="object-cover object-right md:object-center opacity-95"
            priority
          />
          {/* Subtle gradient overlay to keep left text extremely sharp and readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050814] via-[#050814]/85 to-transparent z-1" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column Copy */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                DIGITAL MARKETING &amp; SOFTWARE DEVELOPMENT PARTNER
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                We Build Digital <br />
                Experiences That Drive <br />
                Real <span className="text-[lab(64.272%_57.1788_90.3583)]">Business Growth.</span>
              </h1>

              <p className="text-base text-slate-300 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Shree Ads combines digital marketing, creative strategy, and modern software development to help businesses attract customers, improve operations, and scale faster.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all"
                >
                  Explore Our Services
                </Link>

                <button
                  onClick={() => alert("Watch Shree Ads Showcase")}
                  className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                >
                  <Play className="w-5 h-5 fill-slate-900 ml-0.5" />
                </button>
              </div>

              {/* Counter Stats beneath hero */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-4 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    <AnimatedCounter target={250} suffix="+" />
                  </div>
                  <div className="text-[11px] font-medium text-slate-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    <AnimatedCounter target={100} suffix="+" />
                  </div>
                  <div className="text-[11px] font-medium text-slate-400">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    <AnimatedCounter target={5} suffix="+" />
                  </div>
                  <div className="text-[11px] font-medium text-slate-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">24/7</div>
                  <div className="text-[11px] font-medium text-slate-400">Support</div>
                </div>
              </div>
            </div>

            {/* Right space reserved for the 3D background visual artwork */}
            <div className="hidden lg:block lg:col-span-5 h-full" />
          </div>
        </div>
      </section>

      {/* 2. TRUST LOGOS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Trusted By 100+ Businesses Worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all">
          <span className="font-extrabold text-xl text-slate-700">Google</span>
          <span className="font-extrabold text-xl text-slate-700">Microsoft</span>
          <span className="font-extrabold text-xl text-slate-700">Shopify</span>
          <span className="font-extrabold text-xl text-slate-700">Meta</span>
          <span className="font-extrabold text-xl text-slate-700">Adobe</span>
          <span className="font-extrabold text-xl text-slate-700">Amazon</span>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Services
          </h2>
          <p className="text-base text-slate-600">
            Everything you need to grow your business in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((s) => (
            <div
              key={s.id}
              className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-[lab(64.272%_57.1788_90.3583)]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[lab(64.272%_57.1788_90.3583)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getServiceIcon(s.iconName)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[lab(64.272%_57.1788_90.3583)] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.shortDescription}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[lab(64.272%_57.1788_90.3583)] hover:opacity-80"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE SHREE ADS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-14 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Why Choose Shree Ads?
            </h2>
            <p className="text-base text-slate-600">
              We combine creativity, technology, and data to deliver solutions that create real business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[lab(64.272%_57.1788_90.3583)] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Result Driven Strategies</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Focus on measurable metrics that drive sales and lower customer acquisition costs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[lab(64.272%_57.1788_90.3583)] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Experienced Team</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Skilled professionals with proven expertise across marketing and software dev.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[lab(64.272%_57.1788_90.3583)] flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Customized Solutions</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tailored strictly to your unique business goals without cookie-cutter limitations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[lab(64.272%_57.1788_90.3583)] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Transparent Process</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear communication, explicit timelines, and live project dashboards at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Recent Work
            </h2>
            <p className="text-base text-slate-600 mt-1">
              Take a look at some of our latest client projects.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[lab(64.272%_57.1788_90.3583)] text-white font-bold text-sm shadow-md hover:opacity-90 transition-colors"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.slice(0, 3).map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 6. HAVE A PROJECT IN MIND CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[lab(64.272%_57.1788_90.3583)] p-8 sm:p-14 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-base text-white/90 leading-relaxed">
              Let's discuss how we can help you achieve your business goals through digital marketing and custom software.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-white text-slate-900 font-extrabold text-base shadow-lg hover:bg-slate-100 transition-all shrink-0 flex items-center gap-2"
          >
            Contact Us <ArrowRight className="w-5 h-5 text-[lab(64.272%_57.1788_90.3583)]" />
          </Link>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>
        <FAQAccordion items={FAQS} />
      </section>

      {/* 8. LATEST BLOG POSTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Latest Blog Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-800 font-bold text-sm hover:bg-slate-200 transition-colors"
          >
            View All Blog Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
