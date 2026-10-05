"use client";

import React, { useState } from "react";
import PortfolioCard from "@/components/cards/PortfolioCard";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Websites", "Software", "Mobile Apps", "Branding", "Digital Marketing"];

  const filteredItems =
    selectedCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-16 pb-12">
      {/* Light Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">Our Work</h1>
        <p className="text-base text-slate-600 max-w-xl mx-auto">
          Explore some of our recent projects across digital marketing, web development, mobile apps, and custom software.
        </p>
      </section>

      {/* Filter Pill Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-primary-brand text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
