import React from "react";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center font-black text-amber-500 text-3xl">
        404
      </div>
      <h1 className="text-4xl sm:text-5xl font-black text-slate-100 light-theme:text-slate-900 tracking-tight">
        Page Not Found
      </h1>
      <p className="text-base text-slate-400 max-w-md">
        The page you are looking for doesn't exist or has been relocated to another section of our digital portal.
      </p>
      <Link
        href="/"
        className="px-8 py-4 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm shadow-xl hover:bg-amber-400 transition-colors inline-flex items-center gap-2"
      >
        <Home className="w-4 h-4" /> Return to Homepage
      </Link>
    </div>
  );
}
