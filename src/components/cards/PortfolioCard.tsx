import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PortfolioItem } from "@/lib/constants";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-primary-brand transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl">
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-semibold text-primary-brand shadow-sm">
          {item.category}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
            {item.industry} • {item.client}
          </div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-brand transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2 mt-2 leading-relaxed">
            {item.summary}
          </p>
        </div>

        {/* Impact metrics */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
          {item.results.map((res, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-orange-50 border border-orange-100">
              <div className="text-lg font-extrabold text-primary-brand">{res.metric}</div>
              <div className="text-[11px] text-slate-500 leading-tight">{res.label}</div>
            </div>
          ))}
        </div>

        <Link
          href={`/case-studies`}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary-brand hover:underline pt-2"
        >
          View Case Study Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
