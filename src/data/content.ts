export const navLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "WORK", href: "/work" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
];

export const site = {
  name: "Terrence",
  status: "OPEN TO WORK",
  aboutLead:
    "I design and develop digital experiences with a focus on craft, motion, and interaction — creating interfaces where every detail is intentional.",
  quote:
    "“I'd rather ship one thing that's fully thought through than three that are half-finished. Systems that hold together end-to-end matter more to me than an interface that just looks good in a screenshot.”",
  ctaLead: "GOT A PROJECT",
  ctaHighlight: "IN MIND?",
  ctaBody:
    "I'm currently taking on new projects. Tell me what you're building and let's see if it's a fit.",
  email: "terryokeke@gmail.com",
  phone: "+2348083080650",
  socials: [
    { label: "GITHUB", href: "https://github.com/Koukarai" },
    {
      label: "LINKEDIN",
      href: "https://www.linkedin.com/in/maduabuchi-okeke-413002174/",
    },
    { label: "INSTAGRAM", href: "https://www.instagram.com/terrenceokeke" },
  ],
};

export const footer = {
  tagline: "Terrence is an independent creative developer building digital products.",
  ctas: [
    { label: "Call Terrence", sub: "Let's work together", href: `tel:${site.phone}` },
    { label: "Download Resume", sub: "See my full background", href: "/resume.pdf" },
  ],
};

export const about = {
  headshot: "/images/headshot.png",
  story: [
    "I got into tech from an unusual angle. I started out designing marketing collateral and managing property listings for a real estate group, then spent years as a database administrator, optimizing queries, securing patient records, and building the internal dashboards that kept operations running.",
    "Somewhere in that work I realized I wanted to build the whole system, not just the data layer underneath it. So I taught myself modern frontend engineering and started shipping complete platforms end-to-end: the interface, the auth, the payments, and the admin tools behind the scenes.",
  ],
  workingStyle:
    "I care about systems that hold together end-to-end, not just interfaces that look good in a screenshot. I'd rather ship one thing that's fully thought through (auth, edge cases, the database underneath it) than three that are half-finished.",
  experience: [
    {
      role: "Database Administrator",
      org: "International Hearing Center Nigeria",
      period: "FEB 2023 — PRESENT",
    },
    {
      role: "Property Management Intern",
      org: "COPEN Group",
      period: "JUL 2018 — JUL 2021",
    },
  ],
  education: {
    degree: "B.Sc. Computer Science",
    school: "Bells University of Technology, Ogun State, Nigeria",
    period: "SEP 2015 — JUN 2021",
  },
  resumeUrl: "/resume.pdf",
};

export type Project = {
  slug: string;
  index: string;
  category: string;
  year: string;
  title: string;
  description: string;
  image: string;
  gallery: string[];
  galleryAspect?: string;
  liveUrl?: string;
  tools: string[];
  caseStudy: string;
};

export const projects: Project[] = [
  {
    slug: "box55",
    index: "01",
    category: "FULL-STACK DEVELOPMENT",
    year: "2026",
    title: "BOX 55",
    description:
      "A luxury shortlet and executive-stay booking platform for Box 55 Hospitality in Enugu, Nigeria — live availability, instant bookings, and a staff dashboard behind it.",
    image: "/images/case-studies/box55-hero.webp",
    gallery: [
      "/images/case-studies/box55-hero.webp",
      "/images/case-studies/box55-dashboard.webp",
      "/images/case-studies/box55-active-listings.webp",
      "/images/case-studies/box55-reservation.webp",
    ],
    liveUrl: "https://box55enugu.com/",
    tools: ["ASTRO", "TAILWIND CSS", "SUPABASE", "VERCEL"],
    caseStudy:
      "Box 55 needed a booking experience that felt as premium as the apartments themselves. I built the platform end-to-end with Astro and Supabase — a public site where guests browse live availability and book instantly, plus a staff dashboard for managing listings, bookings, and guest reviews. It's live in production at box55enugu.com, deployed on Vercel with automated uptime pings to keep the booking API responsive around the clock.",
  },
  {
    slug: "azap",
    index: "02",
    category: "PRODUCT & DEVELOPMENT",
    year: "2026",
    title: "AZAP",
    description:
      "An on-demand home-services marketplace app — urgent bookings, live provider tracking, and in-app chat, for both customers and providers.",
    image: "/images/case-studies/azap-hero.png",
    gallery: [
      "/images/case-studies/azap-explore.webp",
      "/images/case-studies/azap-urgent.webp",
      "/images/case-studies/azap-earnings.webp",
      "/images/case-studies/azap-mentorship.webp",
    ],
    galleryAspect: "aspect-[9/16]",
    liveUrl: "https://www.getazap.com/",
    tools: ["REACT NATIVE", "EXPO", "SUPABASE", "TYPESCRIPT"],
    caseStudy:
      "AZAP connects customers with home-service providers in real time — from urgent same-day bookings to scheduled work, with live job tracking, in-app chat, and a provider-side earnings dashboard. It's a multi-role marketplace app — separate customer, provider, and admin experiences — built in React Native and Expo, backed by Supabase, with a mentorship feature to help new providers ramp up quickly. Currently a high-fidelity prototype heading toward public launch.",
  },
  {
    slug: "highend-escapes",
    index: "03",
    category: "DESIGN & DEVELOPMENT",
    year: "2026",
    title: "HIGHEND ESCAPES",
    description:
      "A curated luxury-travel showcase for discerning explorers — destination browsing, a guided booking journey, and guest reviews, wrapped in smooth motion.",
    image: "/images/case-studies/highend-escapes-hero.webp",
    gallery: [
      "/images/case-studies/highend-escapes-hero.webp",
      "/images/case-studies/highend-escapes-destination.webp",
      "/images/case-studies/highend-escapes-destination-pick.webp",
      "/images/case-studies/highend-escapes-reservation.webp",
    ],
    liveUrl: "https://www.bookhighendescapes.com/",
    tools: ["REACT", "FRAMER MOTION", "REACT ROUTER"],
    caseStudy:
      "Highend Escapes is a concept travel-booking site built to explore how far motion design can carry a luxury brand. Built in React with Framer Motion driving page transitions and scroll interactions, it walks visitors through curated destinations — Bali, Dubai, Santorini — before guiding them into a booking flow and letting past guests leave reviews.",
  },
];

export type Service = {
  title: string;
  tags: string[];
  direction: "left" | "right";
};

export const services: Service[] = [
  {
    title: "ART DIRECTION",
    tags: ["VISUAL STRATEGY", "CREATIVE CONCEPT", "ART SUPERVISION", "BRAND STORYTELLING"],
    direction: "left",
  },
  {
    title: "BRANDING",
    tags: ["BRAND IDENTITY", "LOGO DESIGN", "VISUAL LANGUAGE", "STYLE GUIDE"],
    direction: "right",
  },
  {
    title: "DIGITAL DESIGN",
    tags: ["UI/UX DESIGN", "PROTOTYPING", "DESIGN SYSTEMS", "INTERACTION DESIGN"],
    direction: "left",
  },
  {
    title: "DEVELOPMENT",
    tags: ["FRONTEND DEVELOPMENT", "REACT / NEXT.JS", "MOTION & INTERACTIONS", "RESPONSIVE DESIGN"],
    direction: "right",
  },
];
