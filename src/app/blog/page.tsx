import React from "react";
import Link from "next/link";
import BlogCard from "@/components/cards/BlogCard";
import { BLOG_POSTS } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Blog & Industry Insights | Shree Ads",
  description: "Stay ahead in digital marketing, technical SEO, performance advertising, and custom React/Next.js software engineering."
};

export default function BlogListingPage() {
  return (
    <div className="space-y-16 pb-12">
      {/* Light Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">Digital Marketing & Tech Insights</h1>
        <p className="text-base text-slate-600 max-w-xl mx-auto">
          Articles, guides, and strategic breakdowns from our senior media buyers, SEO architects, and software developers.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
