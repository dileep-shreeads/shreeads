import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import { BlogPost } from "@/lib/constants";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-primary-brand transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-semibold text-primary-brand shadow-sm">
          {post.category}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-primary-brand" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-primary-brand" /> {post.readTime}
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-brand transition-colors line-clamp-2">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>

          <p className="text-sm text-slate-600 line-clamp-3 mt-2 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-slate-200">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <span className="text-xs font-semibold text-slate-700">
              {post.author.name}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-primary-brand hover:underline"
          >
            Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
