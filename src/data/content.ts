export const navLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "WORK", href: "/work" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
];

export const site = {
  name: "Terrence",
  /** Canonical origin. Used by metadata, the sitemap and robots.txt. */
  url: "https://terrence-builds.vercel.app",
  status: "OPEN TO WORK",
  aboutLead:
    "I build websites and apps, usually the whole thing rather than just the layer people see. Motion and interaction are the part I enjoy most.",
  /**
   * The homepage teaser, deliberately not `aboutLead`. The hero already used
   * that line a scroll earlier, so this one leads with the part of the story
   * that earns the click instead of repeating the pitch.
   */
  aboutTeaser:
    "I came up through databases rather than design. It was years before I built anything with a screen on it, and I still start from the data and work up.",
  quote:
    "“I'd rather ship one thing that's finished than three that are nearly finished. A screenshot can look great while the thing behind it falls over.”",
  ctaLead: "GOT A PROJECT",
  ctaHighlight: "IN MIND?",
  ctaBody:
    "I'm taking on new projects. Tell me what you're building and we'll see if it's a fit.",
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
  tagline: "Terrence is an independent developer building websites and apps.",
  ctas: [
    { label: "Call Terrence", sub: "Let's work together", href: `tel:${site.phone}` },
    { label: "Download Resume", sub: "See my full background", href: "/resume.pdf" },
  ],
};

export const about = {
  headshot: "/images/headshot.webp",
  story: [
    "I came into tech sideways. My first job was designing marketing material and managing property listings for a real estate group. After that I spent years as a database administrator at a hearing clinic, mostly writing queries and keeping patient records locked down, plus the internal dashboards the staff ran the place on.",
    "At some point I got tired of only owning the data layer. I wanted to build the thing sitting on top of it too, so I taught myself frontend and kept going until I could ship a whole product on my own. Interface, auth, payments, the admin screens nobody sees.",
  ],
  workingStyle:
    "On everything I've shipped so far I've been the only engineer, and I work slowly on purpose. I'd rather spend an extra week on auth and the edge cases than hand something over that demos well and then breaks the first time two people use it at once.",
  experience: [
    {
      role: "Co-founder and CTO",
      org: "AZAP",
      period: "APR 2026 — PRESENT",
    },
    {
      role: "Independent Developer",
      org: "Box 55, Highend Escapes",
      period: "FEB 2026 — PRESENT",
    },
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

/** A headed run of paragraphs in a project's deep dive. */
export type StudySection = {
  heading: string;
  body: string[];
};

/**
 * The optional deep dive. Only projects with decisions worth explaining carry
 * a narrative; the rest can take the meta rail alone and let the gallery talk.
 * Every field is optional so a half-written study renders as far as it goes
 * instead of shipping a placeholder.
 */
export type Study = {
  role?: string;
  timeline?: string;
  status?: string;
  problem?: string[];
  sections?: StudySection[];
};

export type GalleryImage = {
  src: string;
  /** What the screen actually shows. Don't repeat the project title here. */
  alt: string;
};

export type Project = {
  slug: string;
  index: string;
  category: string;
  year: string;
  title: string;
  description: string;
  image: string;
  gallery: GalleryImage[];
  galleryAspect?: string;
  /**
   * Draws a device bezel around each gallery image. Only for raw screenshots;
   * anything with a frame already baked in would come out double framed.
   */
  galleryFrame?: "phone";
  liveUrl?: string;
  /** Defaults to "VISIT LIVE SITE". Override where that would overstate it. */
  liveLabel?: string;
  tools: string[];
  caseStudy: string;
  study?: Study;
};

export const projects: Project[] = [
  {
    slug: "box55",
    index: "01",
    category: "FULL STACK DEVELOPMENT",
    year: "2026",
    title: "BOX 55",
    description:
      "A booking site for a shortlet operator in Enugu. Guests see live availability and book instantly, and staff run everything else from the dashboard behind it.",
    image: "/images/case-studies/box55-hero.webp",
    gallery: [
      { src: "/images/case-studies/box55-hero.webp", alt: "The public home page" },
      {
        src: "/images/case-studies/box55-dashboard.webp",
        alt: "The staff dashboard",
      },
      {
        src: "/images/case-studies/box55-active-listings.webp",
        alt: "Active listings in the dashboard",
      },
      {
        src: "/images/case-studies/box55-reservation.webp",
        alt: "A single reservation in the ledger",
      },
    ],
    liveUrl: "https://box55enugu.com/",
    tools: ["ASTRO", "REACT", "TAILWIND CSS", "SUPABASE", "PAYSTACK", "VERCEL"],
    caseStudy:
      "Box 55 operates serviced apartments in Enugu. I designed and built the whole platform: a public site where guests see live availability and book a stay instantly, and a dashboard where staff run listings, reservations, guest reviews and their own team accounts. It's live and taking real bookings at box55enugu.com.",
    study: {
      role: "Design and build",
      timeline: "March to July 2026",
      status: "Live at box55enugu.com",
      problem: [
        "Box 55 kept their bookings in a paper ledger. Two things went wrong with that. Guests got double booked, which is a mistake you only get to apologise for after someone has already travelled. And nothing about a guest outlived their stay, so a returning customer turned up as a stranger every time.",
        "What they needed was a site where a guest could see live availability, pay for a stay, and get an instant confirmation without a member of staff in the loop. That sounds simple until you notice the site is now handling money, and that everything a browser sends you is a suggestion rather than a fact.",
      ],
      sections: [
        {
          heading: "Taking the money seriously",
          body: [
            "The booking endpoint is the part I'd point at if someone asked what I actually do. It treats every request as a lie until proven otherwise.",
            "It recalculates the rate from the database instead of accepting the total the browser sent. It looks up the unit's nightly rate, works out the nights between check in and check out, applies the five percent long stay discount when a booking runs five nights or more, then adds the ₦50,000 caution fee. It calls Paystack to confirm the payment reference is real, that it succeeded, that it was in naira, and that the amount matches to the kobo. It checks that reference hasn't already been used on another reservation. It checks the unit's availability again at the moment of payment rather than trusting what the guest saw on screen a minute earlier. Only then does it write a row, and it writes an explicit list of fields rather than spreading whatever JSON arrived.",
            "There's a rate limit on it too, three attempts per IP every fifteen minutes, because a public booking form wired to a payment provider will get poked at.",
          ],
        },
        {
          heading: "The part I got wrong first",
          body: [
            "None of that was there on day one. I shipped the booking flow in March and it worked, in the sense that real bookings came through it. In July I went back through the whole codebase looking for holes, and found several.",
            "The admin API that manages staff accounts wasn't properly checking who was calling it. Guest names and review text were being written into admin pages without escaping, so anyone who could type into a form could put script into a page a staff member would later open. The magic link flow would forward you to whatever URL it was handed. The password reset page would let you set a new password without a valid token. And the booking endpoint trusted the price the browser sent it.",
            "I fixed them across three commits in one day. I'm including this because a portfolio full of things that went right isn't very informative. The useful signal is that I went looking, in my own code, on a site that was already live and taking payments.",
          ],
        },
        {
          heading: "Small things that turned out to matter",
          body: [
            "The Supabase project sits on a tier that pauses after a stretch of inactivity, which for a booking site means the first guest of a quiet week meets a cold database. A Vercel cron hits a keep alive endpoint once a day and reads a single row, purely to keep the project awake.",
            "Staff were working out reservation totals by hand and typing them in, so I put a calculator into the ledger they book from. It pulls the unit's nightly rate, counts the nights and shows the breakdown. The total stays editable, because they negotiate.",
            "Booking confirmations go out through nodemailer once the reservation is written, wrapped so a mail failure can't take down a booking that already succeeded and was already paid for.",
          ],
        },
        {
          heading: "Why Astro",
          body: [
            "Astro runs in server mode here, so this isn't a static site. I picked it for the zero JavaScript default. Pages render on the server and ship no client bundle unless something on them genuinely needs one, and I hydrate only those pieces. In practice that's a single component, and the rest of the site arrives as plain HTML.",
          ],
        },
        {
          heading: "Where it stands",
          body: [
            "Box 55 have been running on it since launch and report a substantial increase in bookings, most of them now coming through the site rather than around it. Staff accounts and guest records both live in the dashboard, so a returning guest is finally someone the business can recognise.",
            "The ledger is still called the ledger. It just isn't paper anymore.",
          ],
        },
      ],
    },
  },
  {
    slug: "azap",
    index: "02",
    category: "PRODUCT & DEVELOPMENT",
    year: "2026",
    title: "AZAP",
    description:
      "A home services marketplace where customers, providers and admins each get their own app. Underneath is an escrow ledger, so money only moves once a job is actually finished.",
    image: "/images/case-studies/azap-hero.png",
    // Ordered to follow the write-up: customer flow, then provider flow, then
    // the money. AZAP is the one project a reader can't go and try, so it
    // carries a fuller gallery than the others.
    //
    // All eight come from Azap-screens/, which are raw 1170x2532 captures with
    // no bezel; the frame is drawn in CSS. The loose azap-*.webp files in the
    // parent folder are the same screens with a phone already baked in, so
    // mixing the two sets would give some images two frames and others one.
    // NOTE: these filenames are case sensitive on Vercel but not on macOS.
    gallery: [
      {
        src: "/images/case-studies/Azap-screens/Azap-Explore.webp",
        alt: "The customer explore screen, listing nearby providers with ratings and call out fees",
      },
      {
        src: "/images/case-studies/Azap-screens/Azap-urgent.webp",
        alt: "Requesting an urgent, same day job",
      },
      {
        src: "/images/case-studies/Azap-screens/Azap-schedule.webp",
        alt: "Scheduling a job for a later date",
      },
      {
        src: "/images/case-studies/Azap-screens/Azap-provider-home.webp",
        alt: "The provider side of the app, which is a different product to the customer's",
      },
      {
        src: "/images/case-studies/Azap-screens/Azap-jobs.webp",
        alt: "A provider's job feed",
      },
      {
        src: "/images/case-studies/Azap-screens/Azap-Ledger.webp",
        alt: "The provider ledger, showing held escrow, disputed funds and secured pay as separate balances",
      },
      {
        src: "/images/case-studies/Azap-screens/Azap-receipt.webp",
        alt: "A receipt for a completed booking",
      },
      {
        src: "/images/case-studies/Azap-screens/Azap-earnings.webp",
        alt: "A provider's earnings summary",
      },
    ],
    // True ratio of the raw captures. Anything else crops them.
    galleryAspect: "aspect-[1170/2532]",
    galleryFrame: "phone",
    liveUrl: "https://www.getazap.com/",
    // The app itself isn't public yet; this is the company landing page, so
    // "VISIT LIVE SITE" would contradict the status a few pixels above it.
    liveLabel: "VISIT GETAZAP.COM",
    tools: [
      "REACT NATIVE",
      "EXPO",
      "TYPESCRIPT",
      "SUPABASE",
      "POSTGIS",
      "PAYSTACK",
    ],
    caseStudy:
      "AZAP is a marketplace for home services, booked on demand. A customer requests a job, a provider nearby accepts it, and the two of them chat and track each other on a map until it's finished. Some jobs are urgent and same day, others are booked ahead. The interesting part isn't the booking screen though. It's that customers, providers and admins are three different products sharing one Expo codebase and one Postgres database, and that money has to move between people who have never met.",
    study: {
      role: "Co-founder and CTO",
      timeline: "April to July 2026",
      status: "Not launched yet, running on sandbox payment keys",
      problem: [
        "A marketplace like this has to solve three problems at once that have very little to do with each other. Strangers have to find each other. Money has to move without either side being able to cheat. And somebody has to be able to step in when it goes wrong.",
      ],
      sections: [
        {
          heading: "Three apps, one codebase",
          body: [
            "Expo Router splits the app into route groups: one for customers, one for providers, one for admins, and a shared authentication flow sitting in front of all of them. They share components and a single Supabase project, but a provider and a customer get genuinely different products rather than the same screens with pieces hidden.",
            "Most of the work keeping them apart isn't in the app at all, it's in row level security. Sixty three migrations in, the database is where the product actually lives. Admins also get a separate React dashboard on the web, because the people verifying providers and mediating disputes aren't doing that from a phone.",
          ],
        },
        {
          heading: "Money between strangers",
          body: [
            "Payment goes into escrow rather than straight to the provider. The customer is debited when a job is accepted, the provider is credited only once the customer enters a PIN confirming the work is done, and both sides of that movement are written as separate rows so the ledger balances as double entry.",
            "The PIN originally sat at the start of the job. Moving it to completion is a one line description of a change that took a migration and a rethink of the whole escrow trigger. Cash jobs run through the same ledger, because a marketplace that treats cash as untracked is a marketplace with no record to settle a dispute against.",
            "Card payments go through Paystack inside a Supabase edge function, with saved cards tokenised rather than stored.",
          ],
        },
        {
          heading: "The features you hope nobody needs",
          body: [
            "Providers have an SOS button that dispatches to their guarantors over WhatsApp. Admins can mediate a dispute and issue a refund against the ledger. Providers go through KYC before they can take work, and customers through identity verification before certain jobs.",
            "None of this is interesting to demo. All of it is the difference between an app that connects strangers and an app that sends a stranger to someone's house.",
          ],
        },
        {
          heading: "What I took back out",
          body: [
            "I built a trust float system that would let providers draw against future earnings, then scrapped it the same day. The migration that removes it deletes the ledger rows, drops the functions and narrows the transaction type constraint back down to what it was.",
            "Keeping it would have meant carrying credit risk on behalf of people I had no way of assessing. It's the decision I'm happiest with on this project and there's nothing to show for it.",
          ],
        },
        {
          heading: "Auditing my own work",
          body: [
            "On the second of July I went through the whole codebase looking for authorisation holes rather than bugs. The users table had an update policy with no WITH CHECK clause, which meant anyone could promote themselves to admin by editing their own row. The partition tables had a route around row level security. Banned users could still act. Dispute resolution and PIN verification weren't checking who was calling them.",
            "Eleven migrations that day, every one of them closing an access path instead of adding a feature. I did the same sweep on Box 55 four days later and found a comparable set. It's become the thing I do before I let anyone else near a build.",
          ],
        },
      ],
    },
  },
  {
    slug: "highend-escapes",
    index: "03",
    category: "DESIGN & DEVELOPMENT",
    year: "2026",
    title: "HIGHEND ESCAPES",
    description:
      "The website for a luxury travel company, built so that browsing feels like the thing it sells. Twelve destinations and no backend at all.",
    image: "/images/case-studies/highend-escapes-hero.webp",
    gallery: [
      {
        src: "/images/case-studies/highend-escapes-hero.webp",
        alt: "The home page hero carousel",
      },
      {
        src: "/images/case-studies/highend-escapes-destination.webp",
        alt: "Browsing the twelve destinations",
      },
      {
        src: "/images/case-studies/highend-escapes-destination-pick.webp",
        alt: "A single destination",
      },
      {
        src: "/images/case-studies/highend-escapes-reservation.webp",
        alt: "The enquiry form, with its budget and trip length sliders",
      },
    ],
    liveUrl: "https://www.bookhighendescapes.com/",
    tools: ["REACT", "VITE", "FRAMER MOTION", "REACT ROUTER"],
    study: {
      role: "Commissioned, design and build",
      timeline: "Two weeks, February 2026",
      status: "Live at bookhighendescapes.com",
      problem: [
        "Highend Escapes didn't need a booking engine. They needed enquiries. A trip at this price gets arranged in a conversation, and the site exists to make somebody want to start one.",
      ],
      sections: [
        {
          heading: "Knowing what not to build",
          body: [
            "That brief makes this a much smaller build than it looks, and recognising it early is most of the job. No accounts, no availability, no payments, no database, no admin. Twelve destinations, a way to ask about them, and everything else spent on how the whole thing feels.",
            "It would have been easy to talk the client into more. A booking flow demos well and it would have looked better in my portfolio. It also would have been something they had to run, secure and pay for, in exchange for a checkout their customers were never going to use.",
          ],
        },
        {
          heading: "Motion doing the persuading",
          body: [
            "With no functionality to lean on, the whole argument is presentation. Framer Motion carries the page transitions and the scroll work across five routes, and every destination gets three images instead of one so a place has room to read as somewhere rather than a thumbnail.",
            "The piece nobody notices is the scroll reset. Page transitions in a single page app drop you halfway down the next screen unless you handle it, so there's an eleven line component that returns every route change to the top. Nothing about it is clever and the site would feel broken without it.",
          ],
        },
        {
          heading: "One form, doing all the work",
          body: [
            "Everything funnels into the enquiry. Budget and trip length are sliders rather than number fields, so setting them reads as planning a trip instead of filling in an application, and the budget is framed per person because that's how the client quotes. Phone numbers take an international input, since nobody booking Santorini is guaranteed to be dialling from one country.",
            "It posts to a form relay instead of a server I'd have to keep alive. For a company that wants an email when someone is interested, a database would have been one more thing to maintain in exchange for nothing.",
          ],
        },
      ],
    },
    caseStudy:
      "Highend Escapes commissioned me to build their website. They sell expensive travel, so the browsing had to feel like the thing it was selling, and most of that weight ends up on motion. I built it in React and let Framer Motion carry the page transitions and the scroll work. It runs across five routes: a hero carousel on the home page, twelve destinations from the Maldives to the Amalfi Coast, an experience page, an enquiry form and a page for guests to leave a review. The enquiry form has a budget slider, a trip length slider and international phone input, and it relays to email rather than to a database. There's no payment step and no backend, because a trip at this price gets arranged over a conversation. The site's job is to start one.",
  },
];

export type Service = {
  title: string;
  tags: string[];
  direction: "left" | "right";
};

/**
 * Kept deliberately close to what the case studies can actually evidence.
 * Every tag below maps to something shipped in Box 55, AZAP or Highend
 * Escapes; nothing here is aspirational.
 */
export const services: Service[] = [
  {
    title: "FULL STACK BUILDS",
    tags: ["NEXT.JS & REACT", "ASTRO", "TYPESCRIPT", "AUTH & PAYMENTS"],
    direction: "left",
  },
  {
    title: "MOBILE APPS",
    tags: ["REACT NATIVE", "EXPO", "PUSH NOTIFICATIONS", "LIVE LOCATION"],
    direction: "right",
  },
  {
    title: "DATABASE DESIGN",
    tags: ["POSTGRES", "SUPABASE", "ROW LEVEL SECURITY", "MIGRATIONS & LEDGERS"],
    direction: "left",
  },
  {
    title: "INTERFACE & MOTION",
    tags: ["UI DESIGN", "FRAMER MOTION", "PAGE TRANSITIONS", "SCROLL INTERACTIONS"],
    direction: "right",
  },
];
