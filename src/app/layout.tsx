import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Shree Ads | Digital Marketing & Software Development Partner",
    template: "%s | Shree Ads"
  },
  description:
    "Shree Ads combines digital marketing, creative strategy, and modern software development to help businesses attract customers, improve operations, and scale faster.",
  keywords: [
    "Digital Marketing Agency",
    "Software Development Company",
    "SEO Services",
    "Web Development",
    "Mobile App Development",
    "Performance Marketing",
    "Meta Ads",
    "Google Ads",
    "Custom Business Software",
    "Nathdwara Rajsamand Mumbai IT Company"
  ],
  authors: [{ name: "ShreeADS Digital Technology LLP" }],
  openGraph: {
    title: "Shree Ads | Digital Marketing & Software Development Partner",
    description:
      "Digital Marketing & Software Development Partner - Building digital experiences that drive real business growth.",
    url: "https://shreeads.in",
    siteName: "Shree Ads",
    images: [
      {
        url: "https://shreeads.in/wp-content/uploads/2021/09/logo-1.png",
        width: 800,
        height: 600,
        alt: "Shree Ads Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Shree Ads",
    legalName: "ShreeADS Digital Technology LLP",
    url: "https://shreeads.in",
    logo: "https://shreeads.in/wp-content/uploads/2021/09/logo-1.png",
    description:
      "Digital Marketing & Software Development Partner providing SEO, performance marketing, web app development, mobile apps, and custom software.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nathdwara",
      addressRegion: "Rajsamand",
      addressCountry: "IN"
    },
    telephone: "+91-8005592367",
    email: "mailus@shreeads.in",
    priceRange: "$$"
  };

  return (
    <html lang="en" className="light-theme">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased selection:bg-blue-600 selection:text-white`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen grid-bg">
            <Navbar />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
