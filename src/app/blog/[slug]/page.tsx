import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | Shree Ads Blog`,
    description: post.excerpt
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-16 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-primary-brand hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog Insights
        </Link>

        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-xs font-semibold text-primary-brand">
            {post.category}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-2 pb-6 border-b border-slate-200 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-100">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <span className="font-semibold text-slate-900">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-primary-brand" /> {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-primary-brand" /> {post.readTime}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden bg-slate-100 shadow-lg">
          <Image src={post.featuredImage} alt={post.title} fill className="object-cover" />
        </div>

        {/* Article Body */}
        <div
          className="prose max-w-none text-slate-700 leading-relaxed text-base space-y-6 pt-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="pt-8 border-t border-slate-200 flex items-center gap-2 flex-wrap">
          <Tag className="w-4 h-4 text-primary-brand shrink-0" />
          {post.tags.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      <CTASection />
    </article>
  );
}
