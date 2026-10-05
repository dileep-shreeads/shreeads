export interface Service {
  id: string;
  slug: string;
  title: string;
  category: "digital-marketing" | "technology";
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  benefits: string[];
  deliverables: string[];
  process: { step: string; title: string; description: string }[];
  problemStatement: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: "Websites" | "Software" | "Mobile Apps" | "Branding" | "Digital Marketing";
  industry: string;
  client: string;
  image: string;
  summary: string;
  servicesProvided: string[];
  results: { metric: string; label: string }[];
  challenge?: string;
  solution?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  services: string[];
  results: { metric: string; label: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featuredImage: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const COMPANY_DETAILS = {
  name: "Shree Ads",
  legalName: "ShreeADS Digital Technology LLP",
  tagline: "Digital Marketing & Software Development Partner",
  subTagline: "To the Market, For the Market",
  phone: "+91 8005592367",
  email: "mailus@shreeads.in",
  address: "Nathdwara, Rajsamand & Mumbai, India",
  experienceYears: "5+",
  projectsCompleted: "100+",
  happyClients: "50+",
  industriesServed: "10+",
  socials: {
    facebook: "https://www.facebook.com/shreeananddigitalservices/",
    instagram: "https://www.instagram.com/shreeads/",
    linkedin: "https://www.linkedin.com/company/shreeads",
    twitter: "https://twitter.com/shreeads",
    youtube: "https://www.youtube me.com/",
    whatsapp: "https://wa.me/918005592367"
  }
};

export const SERVICES: Service[] = [
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "digital-marketing",
    shortDescription: "360-degree digital marketing strategies to reach your ideal market, capture qualified leads, and grow revenue.",
    fullDescription: "Our comprehensive digital marketing solutions bridge traditional business value with multi-channel digital strategies. From brand storytelling to automated multi-tier funnel management, we drive measurable customer acquisition.",
    iconName: "Megaphone",
    problemStatement: "Businesses struggle to acquire high-quality leads consistently while maintaining optimal ad spend efficiency.",
    benefits: [
      "Targeted reach across local & global markets",
      "Higher return on ad spend (ROAS)",
      "Multi-channel audience engagement",
      "Continuous campaign optimization with data analytics"
    ],
    deliverables: [
      "Custom Campaign Strategy",
      "Lead Generation Funnels",
      "Creative Ad Assets & Copywriting",
      "Bi-weekly & Monthly Analytics Dashboards"
    ],
    process: [
      { step: "01", title: "Audience Audit", description: "Analyzing target personas and competitor strategy." },
      { step: "02", title: "Funnel Blueprint", description: "Designing high-converting ad funnels and landing pages." },
      { step: "03", title: "Launch & Test", description: "Executing dynamic campaign variants across social & search." },
      { step: "04", title: "Scale & Optimize", description: "Scaling winning ad sets and lowering acquisition cost." }
    ]
  },
  {
    id: "seo",
    slug: "seo",
    title: "SEO (Search Engine Optimization)",
    category: "digital-marketing",
    shortDescription: "Rank #1 on Google for high-intent search terms. Organic growth driven by technical excellence & content authority.",
    fullDescription: "Dominate search engine results page (SERP) with our data-backed search engine optimization strategies. We combine technical site architecture overhaul, high-intent keyword optimization, and authoritative backlink building.",
    iconName: "Search",
    problemStatement: "Relying purely on paid ads becomes unsustainable as customer acquisition costs rise year over year.",
    benefits: [
      "Long-term sustainable organic web traffic",
      "Enhanced local business visibility",
      "Higher brand trust and credibility",
      "Technical site speed and core web vitals optimization"
    ],
    deliverables: [
      "Comprehensive SEO Audit Report",
      "On-page Keyword Strategy & Schema Markup",
      "High-Authority Backlink Acquisition",
      "Monthly SERP Ranking Tracker"
    ],
    process: [
      { step: "01", title: "Technical Audit", description: "Identifying and resolving indexing, speed, and schema bottlenecks." },
      { step: "02", title: "Keyword Research", description: "Mapping search intent to key target conversion pages." },
      { step: "03", title: "On-Page Optimization", description: "Refining meta titles, body structure, and technical markup." },
      { step: "04", title: "Authority Growth", description: "Building contextual, high-DR link profiles." }
    ]
  },
  {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "digital-marketing",
    shortDescription: "Engage your community, amplify brand authority, and turn passive scrollers into passionate brand advocates.",
    fullDescription: "We craft captivating social media campaigns across Meta (Facebook & Instagram), LinkedIn, and YouTube. Our team delivers viral creative direction, engaging video reels, community management, and paid promotional boosts.",
    iconName: "Share2",
    problemStatement: "Brands struggle to keep up with dynamic social algorithms and short-form video creation demands.",
    benefits: [
      "Consistent high-vibe brand presence",
      "Direct audience interaction and engagement",
      "Viral reel content tailored to algorithms",
      "Influencer & partner collaboration management"
    ],
    deliverables: [
      "Monthly Content Calendar",
      "High-Definition Graphics & Motion Reels",
      "Captivating Copy & Hashtag Clusters",
      "Community & Comment Moderation"
    ],
    process: [
      { step: "01", title: "Brand Voice Definition", description: "Establishing consistent brand tone, visual aesthetic, and themes." },
      { step: "02", title: "Content Creation", description: "Designing posts, video reels, and interactive stories." },
      { step: "03", title: "Scheduling & Publishing", description: "Deploying content at peak engagement hours." },
      { step: "04", title: "Engagement Analysis", description: "Tracking reach, shares, and audience sentiment." }
    ]
  },
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing",
    category: "digital-marketing",
    shortDescription: "Data-driven paid ads optimized for ROAS, lower Cost Per Acquisition (CPA), and scalable customer acquisition.",
    fullDescription: "Our performance marketing unit leverages predictive audience segmentation, dynamic retargeting, and rigorous creative testing to scale paid acquisition across Meta, Google, and programmatic platforms.",
    iconName: "TrendingUp",
    problemStatement: "Ad spend is often wasted on unsegmented traffic without real conversion tracking.",
    benefits: [
      "Predictable return on ad spend (ROAS)",
      "Advanced multi-touch attribution modeling",
      "Precision retargeting funnels",
      "Rapid creative A/B testing"
    ],
    deliverables: [
      "Pixel & Conversion API Integration",
      "Dynamic Retargeting Campaigns",
      "Ad Creative Variations",
      "Live Performance Tracking Dashboard"
    ],
    process: [
      { step: "01", title: "Attribution Setup", description: "Configuring GA4, Meta CAPI, and server-side tracking." },
      { step: "02", title: "Targeting Matrix", description: "Structuring cold, warm, and hyper-targeted custom lookalikes." },
      { step: "03", title: "Ad Variant Rollout", description: "Deploying multiple copy hooks and image/video variations." },
      { step: "04", title: "Scale Phase", description: "Doubling budget on top-performing audience angles." }
    ]
  },
  {
    id: "google-ads",
    slug: "google-ads",
    title: "Google Ads (PPC)",
    category: "digital-marketing",
    shortDescription: "Capture active buyers precisely at the moment they search for your products or services.",
    fullDescription: "Dominate high-intent Google Search, Shopping, Performance Max, and YouTube campaigns. We maximize Quality Score to lower Cost-Per-Click while securing premium ad placement.",
    iconName: "Target",
    problemStatement: "High CPC costs in competitive markets eat up marketing budget without delivering targeted leads.",
    benefits: [
      "Immediate top-of-search visibility",
      "Granular negative keyword protection against wasted budget",
      "High-converting landing page alignment",
      "Transparent conversion reporting"
    ],
    deliverables: [
      "Google Search & Shopping Campaign Setup",
      "Negative Keyword Management",
      "Ad Copy Extension Optimization",
      "Landing Page Recommendation Report"
    ],
    process: [
      { step: "01", title: "Intent Mining", description: "Discovering transactional commercial search terms." },
      { step: "02", title: "Campaign Architecture", description: "Structuring campaigns into high-relevance ad groups." },
      { step: "03", title: "Bid Optimization", description: "Applying smart bidding for Maximize Conversions or Target ROAS." },
      { step: "04", title: "Refinement", description: "Filtering out non-converting traffic continuously." }
    ]
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    category: "technology",
    shortDescription: "High-speed, modern, scalable websites and web portals built with React, Next.js, and TypeScript.",
    fullDescription: "We engineer lightning-fast modern websites that combine sleek UI/UX design with rock-solid frontend architecture. Built for conversion, SEO performance, and seamless CMS manageability.",
    iconName: "Code2",
    problemStatement: "Outdated, slow legacy websites lose over 50% of mobile visitors before pages fully load.",
    benefits: [
      "Sub-second page loading speed (95+ Lighthouse Score)",
      "100% mobile-first responsive design",
      "SEO-friendly SSR & SSG Next.js architecture",
      "Robust security & SSL implementation"
    ],
    deliverables: [
      "Custom Next.js & React Frontend Codebase",
      "Headless CMS Integration",
      "Speed & Core Web Vitals Optimization",
      "Complete Source Code & Deployment Setup"
    ],
    process: [
      { step: "01", title: "UX Wireframing", description: "Designing intuitive layout flows and visual hierarchy." },
      { step: "02", title: "Frontend Engineering", description: "Writing clean, modular React and Tailwind CSS components." },
      { step: "03", title: "Performance Tuning", description: "Optimizing images, bundle size, and server response times." },
      { step: "04", title: "Deployment", description: "Launching on Vercel or cloud servers with CDN security." }
    ]
  },
  {
    id: "software-development",
    slug: "software-development",
    title: "Software Development",
    category: "technology",
    shortDescription: "Custom enterprise software solutions, web applications, microservices, and internal business toolkits.",
    fullDescription: "Transform complex operational workflows into streamlined, automated software solutions. We design custom software systems tailored precisely to your business requirements.",
    iconName: "Cpu",
    problemStatement: "Generic off-the-shelf software forces businesses into inflexible workflows and recurring subscription costs.",
    benefits: [
      "100% tailored to your internal business processes",
      "Seamless API integrations with third-party software",
      "Enterprise security protocols & role-based access",
      "Full IP ownership with zero software lock-in"
    ],
    deliverables: [
      "Custom Software Specification Document",
      "Scalable REST/GraphQL API Backend",
      "Admin Control Center & Management Console",
      "Automated Testing & CI/CD Deployment"
    ],
    process: [
      { step: "01", title: "Requirements Gathering", description: "Mapping internal workflows, user roles, and data schemas." },
      { step: "02", title: "Architecture Design", description: "Building database structure, microservices, and API security." },
      { step: "03", title: "Agile Development", description: "Building modules iteratively with regular sprint demos." },
      { step: "04", title: "Deployment & Support", description: "Cloud server setup, data migration, and team onboarding." }
    ]
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "technology",
    shortDescription: "Native-quality iOS & Android mobile applications crafted for intuitive user experiences and high performance.",
    fullDescription: "Deliver effortless mobile experiences directly to your customers' hands. We build cross-platform mobile apps with React Native, flutter, and native integrations.",
    iconName: "Smartphone",
    problemStatement: "Clunky mobile apps with frequent crashes lead to low retention and negative app store ratings.",
    benefits: [
      "Single codebase deployment for iOS & Android",
      "Offline capabilities & local data caching",
      "Push notification engine for customer engagement",
      "Biometric security & instant payment gateway integration"
    ],
    deliverables: [
      "iOS App Store & Google Play Store Publishing",
      "Cross-Platform React Native App",
      "App Analytics & Error Monitoring Setup",
      "Comprehensive App Documentation"
    ],
    process: [
      { step: "01", title: "App Prototype", description: "Building clickable mobile prototypes for user testing." },
      { step: "02", title: "Native Feature Coding", description: "Integrating camera, geolocation, biometric auth, and push notes." },
      { step: "03", title: "QA & Device Testing", description: "Testing across multiple iOS and Android screen resolutions." },
      { step: "04", title: "Store Submission", description: "Handling full store review and launch process." }
    ]
  },
  {
    id: "e-commerce-development",
    slug: "e-commerce-development",
    title: "E-commerce Development",
    category: "technology",
    shortDescription: "Scalable online stores with frictionless checkout, inventory management, and multi-currency support.",
    fullDescription: "Empower your brand to sell online 24/7. We build high-converting e-commerce web applications utilizing Next.js, Shopify, or custom headless e-commerce architectures.",
    iconName: "ShoppingBag",
    problemStatement: "High cart abandonment rates caused by slow page loads and complicated checkout steps.",
    benefits: [
      "Lightning-fast product catalog loading",
      "Seamless Razorpay, Stripe & UPI payment gateways",
      "Automated order management & shipping API tracking",
      "Conversion-optimized one-step checkout flow"
    ],
    deliverables: [
      "Custom E-commerce Storefront",
      "Payment Gateway & Taxes Setup",
      "Inventory & SKU Management System",
      "Customer Account Dashboard"
    ],
    process: [
      { step: "01", title: "Catalog Architecture", description: "Structuring categories, variants, and product attributes." },
      { step: "02", title: "Checkout UX", description: "Designing quick buy options, promo codes, and payment links." },
      { step: "03", title: "Integrations", description: "Connecting inventory, logistics, and WhatsApp notifications." },
      { step: "04", title: "Soft Launch & Load Test", description: "Simulating high traffic volume to verify checkout reliability." }
    ]
  },
  {
    id: "branding",
    slug: "branding",
    title: "Branding & Creative Services",
    category: "digital-marketing",
    shortDescription: "Distinct visual identities, logos, voice guidelines, and visual asset systems that leave a lasting mark.",
    fullDescription: "Build an iconic brand identity that commands attention and inspires customer loyalty. We create memorable visual assets, brand typography, logo suites, and creative direction.",
    iconName: "Palette",
    problemStatement: "Inconsistent brand presentation across digital touchpoints reduces market trust and recall.",
    benefits: [
      "Cohesive brand design system",
      "Distinct brand positioning against competitors",
      "Scalable vector assets for digital & print",
      "Complete brand manual & typography guidelines"
    ],
    deliverables: [
      "Primary & Secondary Logo Suite",
      "Brand Style Guide & Color Palette",
      "Typography & Iconography Package",
      "Social Media Templates & Business Collaterals"
    ],
    process: [
      { step: "01", title: "Brand Discovery", description: "Uncovering company values, audience psychology, and competitors." },
      { step: "02", title: "Concept Design", description: "Drafting distinct visual logo & color directions." },
      { step: "03", title: "System Refinement", description: "Polishing typography, mockups, and secondary motifs." },
      { step: "04", title: "Asset Handover", description: "Packaging master vector files and brand style manual." }
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Apex Healthcare Portal & Patient App",
    slug: "apex-healthcare-portal",
    category: "Software",
    industry: "Healthcare",
    client: "Apex Health Group",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    summary: "Built an integrated tele-consultation platform and patient management web system.",
    servicesProvided: ["Software Development", "UI/UX Design", "Mobile App Development"],
    results: [
      { metric: "+240%", label: "Online Appointments" },
      { metric: "-45%", label: "Patient Wait Time" }
    ],
    challenge: "Apex Health was losing patients due to an antiquated phone booking system and fragmented medical record keeping.",
    solution: "We engineered a unified web portal and mobile app with instant slot booking, digital prescription downloads, and SMS reminders."
  },
  {
    id: "port-2",
    title: "UrbanCraft Modern Furniture E-Commerce",
    slug: "urbancraft-ecommerce",
    category: "Websites",
    industry: "E-Commerce",
    client: "UrbanCraft Living",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    summary: "Headless Next.js e-commerce storefront with 3D product view capabilities and ultra-fast checkout.",
    servicesProvided: ["Web Development", "E-commerce Development", "Performance Marketing"],
    results: [
      { metric: "+180%", label: "Conversion Rate" },
      { metric: "0.8s", label: "Page Load Time" }
    ],
    challenge: "Slow WordPress store loading times of over 6 seconds were leading to high drop-offs on mobile ad campaigns.",
    solution: "Migrated the store to a high-speed Next.js React frontend coupled with streamlined payment gateways and dynamic retargeting ads."
  },
  {
    id: "port-3",
    title: "Regal Marble & Stone Global Digital Growth",
    slug: "regal-marble-digital-growth",
    category: "Digital Marketing",
    industry: "Manufacturing & B2B",
    client: "Regal Marble Exports",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    summary: "Full-suite SEO, Google Ads, and B2B lead generation campaigns for global export acquisition.",
    servicesProvided: ["SEO", "Google Ads", "Social Media Marketing"],
    results: [
      { metric: "+310%", label: "Qualified B2B Enquiries" },
      { metric: "#1", label: "Google Rank for Target Keywords" }
    ],
    challenge: "Struggling to reach international buyers beyond domestic trade fairs.",
    solution: "Deployed targeted global Google Search ads combined with high-intent technical SEO strategy and multilingual landing pages."
  },
  {
    id: "port-4",
    title: "FinSmart Custom ERP & Finance Suite",
    slug: "finsmart-custom-erp",
    category: "Software",
    industry: "Finance",
    client: "FinSmart Advisors",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    summary: "Automated custom ERP application for accounting, client invoice generation, and tax compliance.",
    servicesProvided: ["Software Development", "CRM Development"],
    results: [
      { metric: "120 hrs/mo", label: "Time Saved in Operations" },
      { metric: "100%", label: "Compliance Accuracy" }
    ],
    challenge: "Manual spreadsheet calculations resulted in billing errors and delayed monthly reporting.",
    solution: "Developed a custom web ERP that automates client invoice generation, real-time GST reports, and payment tracking."
  },
  {
    id: "port-5",
    title: "Vedic Roots Organic Brand Identity & Social",
    slug: "vedic-roots-branding",
    category: "Branding",
    industry: "Wellness & FMCG",
    client: "Vedic Roots Organics",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    summary: "Complete visual rebranding, packaging design, and viral short-form video reels strategy.",
    servicesProvided: ["Branding", "Social Media Marketing"],
    results: [
      { metric: "+50K", label: "Instagram Followers in 90 Days" },
      { metric: "4.2x", label: "Social Sales Growth" }
    ],
    challenge: "Lacked brand differentiation in a crowded organic wellness market.",
    solution: "Crafted a premium eco-minimalist visual brand identity paired with aesthetic lifestyle video content on Instagram."
  },
  {
    id: "port-6",
    title: "LogiSpeed Fleet Management Mobile App",
    slug: "logispeed-fleet-app",
    category: "Mobile Apps",
    industry: "Logistics",
    client: "LogiSpeed Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    summary: "Real-time driver tracking, route optimization, and proof-of-delivery mobile application.",
    servicesProvided: ["Mobile App Development", "Software Development"],
    results: [
      { metric: "-22%", label: "Fuel Costs" },
      { metric: "+99.4%", label: "On-time Deliveries" }
    ],
    challenge: "Lack of real-time location visibility led to delayed shipments and customer complaints.",
    solution: "Engineered a React Native mobile app with live GPS tracking, automated route calculations, and instant digital sign-offs."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    slug: "scaling-marble-manufacturer-leads",
    title: "How Regal Marble Scaled B2B Export Leads by 310% in 6 Months",
    client: "Regal Marble Exports",
    industry: "Manufacturing & B2B",
    challenge: "Regal Marble relied heavily on traditional trade exhibitions. Their existing website received negligible search traffic, and online inquiries were unstructured and unverified.",
    solution: "Shree Ads executed an integrated digital growth roadmap: redesigned a high-converting web showcase, implemented rigorous multi-country Google Search Ads targeting high-value commercial terms, and optimized technical SEO.",
    services: ["SEO", "Google Ads", "Web Development"],
    results: [
      { metric: "+310%", label: "Qualified Export Leads" },
      { metric: "-42%", label: "Cost Per Qualified Inquiry" },
      { metric: "#1 Rank", label: "For 14 Commercial Keywords" },
      { metric: "18+", label: "New Export Countries Tapped" }
    ],
    testimonial: {
      quote: "Shree Ads turned our website from a static brochure into our #1 sales engine. We receive direct inquiries daily from overseas buyers now.",
      author: "Rajesh Sharma",
      role: "Managing Director, Regal Marble"
    }
  },
  {
    id: "cs-2",
    slug: "transforming-healthcare-patient-experience",
    title: "Modernizing Patient Care: 240% Growth in Digital Bookings for Apex Health",
    client: "Apex Health Group",
    industry: "Healthcare",
    challenge: "Apex Health operated 4 multi-specialty clinics but suffered from overcrowded reception desks and phone lines due to manual appointment bookings.",
    solution: "We architected a custom Web & Mobile App portal enabling real-time doctor availability checks, digital token generation, payment integration, and automatic WhatsApp reminders.",
    services: ["Software Development", "Mobile App Development", "UI/UX Design"],
    results: [
      { metric: "+240%", label: "Digital Appointments" },
      { metric: "-45%", label: "Front Desk Queue Times" },
      { metric: "98%", label: "Patient Satisfaction Score" },
      { metric: "15,000+", label: "Active Mobile App Users" }
    ],
    testimonial: {
      quote: "The software platform created by Shree Ads completely modernized our clinic operations. Patients love the seamless booking app.",
      author: "Dr. Vikram Mehta",
      role: "Chief Medical Officer, Apex Health"
    }
  },
  {
    id: "cs-3",
    slug: "scaling-direct-to-consumer-ecommerce",
    title: "Achieving 4.2x ROAS & 180% Higher Sales for UrbanCraft Furniture",
    client: "UrbanCraft Living",
    industry: "E-Commerce",
    challenge: "High cart abandonment rates on mobile devices and plateaued sales due to unoptimized Meta ad campaigns.",
    solution: "Rebuilt the store on Next.js for sub-second load speeds, launched high-converting video ad creatives, and built hyper-targeted retargeting funnels.",
    services: ["E-commerce Development", "Performance Marketing", "Social Media Marketing"],
    results: [
      { metric: "4.2x", label: "Average ROAS" },
      { metric: "+180%", label: "Monthly E-commerce Revenue" },
      { metric: "0.8s", label: "Mobile Page Load" },
      { metric: "-35%", label: "Cart Abandonment Rate" }
    ],
    testimonial: {
      quote: "Shree Ads knows performance marketing inside out. They fixed our speed bottlenecks and scaled our ad campaigns profitably.",
      author: "Priya Nair",
      role: "Head of Growth, UrbanCraft"
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "digital-marketing-vs-software-development-growth-pillars",
    title: "Why Combining Digital Marketing & Custom Software is the Secret to Scaling in 2026",
    excerpt: "Most companies treat marketing and software as separate departments. Discover why integrating customer acquisition with workflow automation delivers exponential business ROI.",
    content: `
      <p>In today's hyper-competitive digital landscape, getting traffic to your website is only half the battle. If your digital infrastructure—from web performance to CRM tracking—is clunky, you waste precious ad dollars.</p>
      
      <h3>The Traditional Divide</h3>
      <p>Historically, businesses hired a digital marketing agency to run ads and SEO, and completely separate software vendors to build internal platforms. This disconnect leads to unintegrated data, slow landing pages, and lost sales leads.</p>
      
      <h3>The Integrated Synergy Approach</h3>
      <p>When software engineers and performance marketers collaborate under one roof, magic happens:</p>
      <ul>
        <li><strong>Sub-second Landing Pages:</strong> High-speed React/Next.js code ensures zero bounce rate when visitors click your Google or Meta ads.</li>
        <li><strong>Automated Lead Routing:</strong> Custom software instantly routes inbound leads to your sales reps via WhatsApp or SMS within 30 seconds.</li>
        <li><strong>Closed-Loop Analytics:</strong> Conversion data flows directly back into ad platforms, optimizing your Cost-Per-Acquisition automatically.</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Partnering with a hybrid team that masters both marketing and technology provides a sustainable competitive advantage that pure marketing agencies or traditional dev shops cannot match.</p>
    `,
    category: "Strategy",
    date: "October 1, 2026",
    readTime: "5 min read",
    author: {
      name: "Shree Ads Strategy Team",
      role: "Digital Growth Architects",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Digital Marketing", "Software Development", "Business Growth"]
  },
  {
    id: "blog-2",
    slug: "technical-seo-checklist-for-modern-websites",
    title: "The Ultimate Technical SEO Checklist for Next.js & Modern Web Applications",
    excerpt: "Ensure your React and Next.js applications index flawlessly on Google. Master Core Web Vitals, dynamic Open Graph tags, structured data, and server-side rendering.",
    content: `
      <p>Search engine algorithms have evolved. Today, site speed, structural accessibility, and semantic schema are as critical as quality content.</p>
      
      <h3>1. Server-Side Rendering (SSR) & Static Generation (SSG)</h3>
      <p>Ensure search engine crawlers receive fully rendered HTML rather than empty JavaScript bundles. Next.js App Router renders pages on the edge, providing pre-populated content directly to Googlebot.</p>
      
      <h3>2. Schema.org Structured Data</h3>
      <p>Implement JSON-LD structured data for Organization, LocalBusiness, Service, and FAQ schemas to capture rich snippets in search results.</p>
      
      <h3>3. Core Web Vitals Optimization</h3>
      <p>Target zero Cumulative Layout Shift (CLS), Largest Contentful Paint (LCP) under 1.2s, and minimal Interaction to Next Paint (INP).</p>
    `,
    category: "SEO & Dev",
    date: "September 24, 2026",
    readTime: "7 min read",
    author: {
      name: "Tech Engineering Lead",
      role: "Senior Frontend Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    featuredImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
    tags: ["SEO", "Next.js", "Web Development"]
  },
  {
    id: "blog-3",
    slug: "performance-marketing-meta-google-ads-2026",
    title: "How to Scale Meta & Google Ads Profitably in 2026 Without Burning Budget",
    excerpt: "Discover modern bidding algorithms, dynamic ad creatives testing, and server-side CAPI setups that lower your customer acquisition costs.",
    content: `
      <p>With privacy shifts and rising ad platform CPMs, traditional broad targeting strategies are no longer sufficient. Here is how modern brands scale ad spend profitably.</p>
      
      <h3>First-Party Data & CAPI Integration</h3>
      <p>Relying solely on browser pixels loses up to 30% of conversion signals. Deploying Meta Conversion API (CAPI) and Google Server-Side Tagging ensures full data attribution.</p>
      
      <h3>The Hook-Value-CTA Video Framework</h3>
      <p>Video ads must capture attention within the first 2 seconds. Test 5 distinct video hooks with the same core offer to discover winning combinations rapidly.</p>
    `,
    category: "Performance Marketing",
    date: "September 15, 2026",
    readTime: "6 min read",
    author: {
      name: "Media Buying Lead",
      role: "Performance Marketing Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    featuredImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop",
    tags: ["Meta Ads", "Google Ads", "Performance Marketing"]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What digital marketing services does Shree Ads provide?",
    answer: "We offer end-to-end digital marketing solutions including Search Engine Optimization (SEO), Social Media Marketing (Meta/Instagram/LinkedIn), Performance Marketing (Meta & Google Ads), Content Marketing, Bulk SMS & WhatsApp marketing, Video/Audio promotions, and brand storytelling.",
    category: "marketing"
  },
  {
    question: "Do you provide custom software and web application development?",
    answer: "Yes! We specialize in custom business software, mobile application development (iOS & Android), custom CRM & ERP systems, e-commerce platforms, and high-performance React/Next.js websites tailored specifically to your business workflows.",
    category: "technology"
  },
  {
    question: "How long does a custom website or software project take to build?",
    answer: "A modern corporate website typically takes 2 to 4 weeks depending on scope, whereas custom web applications, mobile apps, or enterprise ERP software take anywhere from 4 to 12 weeks with iterative sprint milestones.",
    category: "general"
  },
  {
    question: "How much does website development or digital marketing cost?",
    answer: "Every business has unique requirements. We provide flexible packages tailored to startups, growing SMBs, and enterprise companies. Contact us for a detailed requirement audit and transparent quote.",
    category: "general"
  },
  {
    question: "Do you manage ongoing Google Ads and Meta Ads campaigns?",
    answer: "Yes, our performance marketing team handles everything from conversion pixel/CAPI setup, ad creative production, audience segmentation, daily bid management, A/B testing, and weekly performance reporting.",
    category: "marketing"
  },
  {
    question: "Can you build custom CRM or ERP software for our business?",
    answer: "Absolutely. We engineer tailor-made CRM and ERP software designed around your exact team roles, inventory logic, invoicing rules, and reporting needs, eliminating unnecessary monthly per-user SaaS fees.",
    category: "technology"
  },
  {
    question: "Do you provide post-launch maintenance and support?",
    answer: "Yes, we provide ongoing maintenance, security updates, server monitoring, cloud management (AWS/Vercel), and continuous marketing optimization contracts to ensure long-term success.",
    category: "general"
  },
  {
    question: "How do we start a project with Shree Ads?",
    answer: "Getting started is easy! Simply fill out our contact form, call us at +91 8005592367, or email mailus@shreeads.in. Our team will arrange an initial discovery consultation within 24 hours.",
    category: "general"
  }
];

export const INDUSTRIES = [
  { name: "Healthcare & Clinics", icon: "Activity" },
  { name: "Education & EdTech", icon: "GraduationCap" },
  { name: "Real Estate & Construction", icon: "Building2" },
  { name: "E-commerce & Retail", icon: "ShoppingBag" },
  { name: "Finance & Advisory", icon: "Landmark" },
  { name: "Manufacturing & B2B", icon: "Factory" },
  { name: "Hospitality & Travel", icon: "Hotel" },
  { name: "Startups & SaaS", icon: "Rocket" },
  { name: "Professional Services", icon: "Briefcase" }
];

export const TECH_STACK = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  backend: ["Node.js", "Python", "PHP", "REST APIs", "GraphQL"],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  cloud: ["AWS", "Vercel", "Docker", "Cloudflare", "Firebase"]
};

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Rajesh Sharma",
    company: "Regal Marble Exports",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "Shree Ads transformed our business. Their combined mastery in SEO and web development allowed us to capture international B2B clients we never could reach before."
  },
  {
    id: "t2",
    name: "Dr. Vikram Mehta",
    company: "Apex Health Group",
    role: "Chief Medical Officer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    quote: "The patient management portal and mobile app developed by Shree Ads streamlined our entire operation. Patient wait times dropped by 45% instantly."
  },
  {
    id: "t3",
    name: "Priya Nair",
    company: "UrbanCraft Living",
    role: "Head of Growth",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    quote: "Working with Shree Ads was the best decision for our e-commerce brand. Their performance ads delivered a predictable 4.2x ROAS week after week."
  },
  {
    id: "t4",
    name: "Sunil Joshi",
    company: "LogiSpeed Logistics",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    quote: "Their software development team built a rock-solid fleet tracking mobile app for us. Clean code, prompt communication, and exceptional commitment."
  }
];
