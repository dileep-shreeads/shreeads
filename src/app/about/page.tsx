import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Target, Users, Zap, Award, Sparkles } from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "About Us | Shree Ads - Digital Marketing & Software Development",
  description: "Learn about Shree Ads, a premier digital marketing agency and custom software development firm serving clients across Nathdwara, Rajsamand, Mumbai, and globally."
};

export default function AboutPage() {
  const teamMembers = [
    { name: "Rahul Mehta", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" },
    { name: "Priya Sharma", role: "Marketing Head", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" },
    { name: "Amit Patel", role: "CTO", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop" },
    { name: "Nisha Desai", role: "Creative Director", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" }
  ];

  return (
    <div className="space-y-20 pb-12">
      {/* Light Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">About Shree Ads</h1>
        <p className="text-base text-slate-600 max-w-xl mx-auto">
          Your trusted partner for digital marketing and software development.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900">Our Story</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Shree Ads was founded with a single mission — to help businesses grow through the power of digital marketing, creativity, and technology. Over the years, we have worked with startups, small businesses, and enterprises to build strong brands, generate quality leads, and develop digital products that create real impact.
            </p>
          </div>
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="Shree Ads Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Vision Values Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 text-primary-brand mx-auto flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To empower businesses through digital marketing and technology solutions.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 text-primary-brand mx-auto flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be a global leader in digital marketing and technology.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 text-primary-brand mx-auto flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Values</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Innovation, transparency, quality, and long-term partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-slate-900">Our Team</h2>
          <p className="text-sm text-slate-600">Meet the people behind Shree Ads.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-xs">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto bg-slate-100">
                <Image src={m.image} alt={m.name} fill className="object-cover" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-base">{m.name}</div>
                <div className="text-xs text-slate-500">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
