import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/constants";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact Us | Get in Touch - Shree Ads",
  description: "Get in touch with Shree Ads for digital marketing, SEO, Google Ads, Next.js web development, mobile apps, and custom business software."
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-12">
      {/* Light Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">Get in Touch</h1>
        <p className="text-base text-slate-600 max-w-xl mx-auto">
          Let's discuss your project and see how we can help you grow.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Contact Information</h2>
              <p className="text-sm text-slate-600">
                We'd love to hear from you. Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-orange-50 border border-orange-100 text-primary-brand shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Our Office</div>
                  <div className="text-sm font-semibold text-slate-900">{COMPANY_DETAILS.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-orange-50 border border-orange-100 text-primary-brand shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Us</div>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-sm font-semibold text-slate-900 hover:text-primary-brand">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-orange-50 border border-orange-100 text-primary-brand shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Call Us</div>
                  <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-sm font-semibold text-slate-900 hover:text-primary-brand">
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-orange-50 border border-orange-100 text-primary-brand shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Business Hours</div>
                  <div className="text-sm font-semibold text-slate-900">Mon - Sat: 9:30 AM - 7:30 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Real Interactive Google Maps iFrame */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-lg h-[400px] w-full bg-slate-100 relative">
          <iframe
            title="Shree Ads Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14502.87102604294!2d73.8188!3d24.9317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e457f5c35105%3A0x6a053c9f2b87f3b8!2sNathdwara%2C%20Rajasthan%20313301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </section>
    </div>
  );
}
