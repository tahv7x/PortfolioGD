export const siteConfig = {
  name: "Hassbi taha",
  logo: "/brand/logo.png",
  portrait: "/brand/portrait-cutout.png",
  role: "Independent graphic & UI/UX designer",
  location: "Casablanca · Working worldwide",
  availability: "Available for design projects",
  email: "thassbii@gmail.com",
  description:
    "Independent graphic and UI/UX designer crafting expressive brands, campaigns, and digital experiences.",
  heroBio:
    "I’m Taha, a Casablanca-based graphic and UI/UX designer. I create bold visual identities, thoughtful interfaces, and digital experiences that balance clarity with personality. I also use React to bring selected ideas to life.",
} as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const highlights = [
  ["06+", "Years creating"],
  ["42", "Projects shipped"],
  ["12", "Design awards"],
] as const;

export const projectFilters = ["All", "Branding", "UI/UX", "Campaigns", "Editorial"] as const;

export const projects = [
  {
    number: "01",
    title: "Club Sportif Alkendi",
    category: "Branding · Visual Content",
    filter: "Branding",
    services: ["Brand Identity", "Social Media", "Football Apparel"],
    summary: "A flexible sports identity and visual system created for CSK's tournaments, events, social content, and team apparel.",
    year: "2025–2026",
    image: "/projects/csk/cover-placeholder.svg",
    logo: "/projects/csk/logo.png",
    aspect: "aspect-[4/5]",
    slug: "club-sportif-alkendi",
  },
  {
    number: "02",
    title: "Bookify",
    category: "Product Design · UI/UX",
    filter: "UI/UX",
    services: ["UX Strategy", "Interface Design", "React Frontend"],
    summary: "A complete service-booking experience connecting clients, providers, and administrators through one clear product system.",
    year: "2025–2026",
    image: "/projects/Bookify/Logo wout bg.png",
    logo: "/projects/Bookify/Logo wout bg.png",
    aspect: "aspect-[4/5]",
    slug: "bookify",
  },
  {
    number: "03",
    title: "Northstar",
    category: "Product Design · UX Strategy",
    filter: "UI/UX",
    services: ["UX Strategy", "Interface Design"],
    summary: "A calm, high-clarity analytics experience that turns complex signals into confident decisions.",
    year: "2025",
    image: "/projects/northstar.svg",
    logo: null,
    aspect: "aspect-[4/5]",
    slug: null,
  },
  {
    number: "04",
    title: "Chromatic Type",
    category: "Typography · Digital Art",
    filter: "Editorial",
    services: ["Typography", "Poster Design"],
    summary: "An experimental type study exploring tension between chrome surfaces and high-energy colour.",
    year: "2024",
    image: "/projects/chromatic.svg",
    logo: null,
    aspect: "aspect-[4/5]",
    slug: null,
  },
  {
    number: "05",
    title: "Serein Architecture",
    category: "Web Design · Digital Experience",
    filter: "UI/UX",
    services: ["Web Design", "Prototyping"],
    summary: "A quiet digital experience where architectural restraint guides the interface system.",
    year: "2024",
    image: "/projects/serein.svg",
    logo: null,
    aspect: "aspect-[4/5]",
    slug: null,
  },
] as const;

export const projectCaseStudies = [
  {
    slug: "club-sportif-alkendi",
    number: "01",
    shortName: "CSK",
    logo: "/projects/csk/logo.png",
    title: "Club Sportif Alkendi",
    year: "2025–2026",
    client: "University Sports Club",
    role: "Graphic Designer",
    category: "Branding & Visual Content",
    introduction:
      "CSK is our university sports club, representing students in national tournaments and sporting events while also organising its own competitions.",
    contribution:
      "I developed the club’s branding and visual content across social media, promotional posters, tournament communication, and football apparel.",
    services: [
      "Brand Identity",
      "Logo Design",
      "Social Media Design",
      "Poster Design",
      "Football T-shirt Design",
      "Visual Direction",
    ],
    gallery: [
      {
        id: "identity",
        title: "Brand identity guidelines",
        note: "A complete overview of the CSK identity system, bringing the primary logo, supporting marks, typography, colour palette, and first apparel applications into one visual board.",
        layout: "wide",
        image: "/projects/csk/brand-guidelines.jpg",
        width: 2480,
        height: 3425,
        details: ["Primary Logo", "Logo Suite", "Typography", "Colour Palette", "Apparel Mockups"],
      },
    ],
    collections: [
      {
        id: "match-posters",
        eyebrow: "Competition communication",
        title: "Match & schedule posters",
        description:
          "Fixtures, schedules, and knockout-stage announcements designed to make every tournament moment immediately understandable.",
        format: "1080 × 1350",
        items: [
          { title: "Matchday", src: "/projects/csk/Matches Posters/Matchday 2.jpg", width: 1080, height: 1350 },
          { title: "Match Schedule", src: "/projects/csk/Matches Posters/Match schedule 2.jpg", width: 1080, height: 1350 },
          { title: "Semi-Finals — Football 2", src: "/projects/csk/Matches Posters/DEMIFINALSS.jpg", width: 1080, height: 1350 },
          { title: "Semi-Finals — Football 1", src: "/projects/csk/Matches Posters/DEMI-FINALS.jpg", width: 1080, height: 1350 }
        ],
      },
      {
        id: "full-time",
        eyebrow: "Results series",
        title: "Full-time graphics",
        description:
          "A repeatable result system combining decisive typography, match photography, and clear score hierarchy.",
        format: "1080 × 1350",
        items: [
          { title: "Full-Time — 2CG2", src: "/projects/csk/FULLTIME/FT CG2.jpg", width: 1080, height: 1350 },
          { title: "Full-Time — Final", src: "/projects/csk/FULLTIME/fulltime-final.jpg", width: 1080, height: 1350 },          
          { title: "Full-Time — 2CG2", src: "/projects/csk/FULLTIME/2CJ2.jpg", width: 1080, height: 1350 },
          { title: "Full-Time — Last Chance", src: "/projects/csk/FULLTIME/LASTCHANCE 1.jpg", width: 1080, height: 1350 },
          { title: "Full-Time — 1CG", src: "/projects/csk/FULLTIME/1CG-LC.jpg", width: 1080, height: 1350 },
        ],
      },
      {
        id: "player-spotlights",
        eyebrow: "Player recognition",
        title: "MVP & player spotlights",
        description:
          "Vertical player-led stories celebrating standout performances, tournament awards, and the personalities behind the results.",
        format: "1080 × 1920",
        items: [
          { title: "Semi-Finals MVPs", src: "/projects/csk/mvps/DEMI FINALS MVPS.jpg", width: 1080, height: 1920 },
          { title: "Final MVP", src: "/projects/csk/mvps/final-mvp.jpg", width: 1080, height: 1920 },
          { title: "Last Chance MVP", src: "/projects/csk/mvps/LASTCHANCE mvp 1.jpg", width: 1080, height: 1920 },
          { title: "Basketball Top Scorer", src: "/projects/csk/mvps/mostpoint-bask.jpg", width: 1080, height: 1920 },
          { title: "Player Of The Match", src: "/projects/csk/mvps/player-3.jpg", width: 1080, height: 1920 },
          { title: "Player of the Tournament", src: "/projects/csk/mvps/player-of-tour-rayan.jpg", width: 1080, height: 1920 },
        ],
      },
      {
        id: "social-campaigns",
        eyebrow: "Always-on content",
        title: "Social media campaigns",
        description:
          "A broader content mix covering club returns, event promotion, team stories, photography, finals, and championship moments.",
        format: "1080 × 1350",
        items: [
          { title: "CSK Is Back In EHTP", src: "/projects/csk/SocialMediaPosters/CS-IS-BACK-EHTP.jpg", width: 1080, height: 1350 },
          { title: "Winners Of Football Tournament", src: "/projects/csk/SocialMediaPosters/winners.jpg", width: 1080, height: 1350 },
          { title: "Match — ESITH", src: "/projects/csk/SocialMediaPosters/match-esiths.jpg", width: 1080, height: 1350 },          
          { title: "Mini Matchday — ESITH", src: "/projects/csk/SocialMediaPosters/mini-journee-esiths-.jpg", width: 1080, height: 1350 },
          { title: "Best Pictures — Semi-Final", src: "/projects/csk/SocialMediaPosters/best-pics-demi-final.jpg", width: 1080, height: 1350 },
          { title: "ASAFI", src: "/projects/csk/SocialMediaPosters/ASAFI.jpg", width: 1080, height: 1350 },
          { title: "Starting VI", src: "/projects/csk/SocialMediaPosters/starin-vi.jpg", width: 1080, height: 1350 },
          { title: "Basketball Final", src: "/projects/csk/SocialMediaPosters/Basket-Final.jpg", width: 1080, height: 1350 },
                    { title: "Campaign Album", src: "/projects/csk/SocialMediaPosters/ALBUM-(mkamlsh)_01.jpg", width: 1080, height: 1350 },

          { title: "Matchday — EHTP", src: "/projects/csk/SocialMediaPosters/matchday-ehtp.jpg", width: 1080, height: 1350 },
        ],
      },
      {
        id: "player-awards",
        eyebrow: "Season honours",
        title: "Player awards",
        description:
          "A closing awards series celebrating the standout individual performances from the tournament.",
        format: "1080 × 1350",
        items: [
          { title: "Best Player", src: "/projects/csk/playerssssawards/bestplayeer.jpg", width: 1080, height: 1350 },
          { title: "Top Goalscorer", src: "/projects/csk/playerssssawards/goalscorer.jpg", width: 1080, height: 1350 },
          { title: "Goalkeeper of the Tournament", src: "/projects/csk/playerssssawards/goalkepeer-of-the-tournament.jpg", width: 1080, height: 1350 },
        ],
      },
    ],
  },
] as const;

export const bookifyCaseStudy = {
  slug: "bookify",
  number: "02",
  shortName: "Bookify",
  logo: "/projects/Bookify/Logo wout bg.png",
  title: "Bookify",
  year: "2025–2026",
  client: "Independent final project",
  role: "UI/UX Designer & Frontend Developer",
  category: "Product Design & UI/UX",
  introduction:
    "A service-booking marketplace designed to make finding, comparing, and booking trusted professionals feel simple and reassuring.",
  contribution:
    "As the sole designer and frontend developer, I shaped the product structure, user flows, interface system, responsive experience, and React implementation across the client, service-provider, and admin products.",
  repository: "https://github.com/tahv7x/Bookify",
  audiences: [
    {
      id: "client",
      number: "01",
      title: "Client",
      description: "Discover providers, compare services, book appointments, and manage every interaction from one personal space.",
      features: ["Explore & filters", "Booking flow", "Appointments", "Messages & favourites"],
    },
    {
      id: "provider",
      number: "02",
      title: "Service provider",
      description: "Run a service business through a focused workspace for bookings, availability, services, clients, and performance.",
      features: ["Performance dashboard", "Availability", "Service management", "Client requests"],
    },
    {
      id: "admin",
      number: "03",
      title: "Administrator",
      description: "Oversee the marketplace with clear operational views for platform activity, users, categories, and support.",
      features: ["Platform overview", "User management", "Categories", "Support operations"],
    },
  ],
  screenshotGroups: [
    {
      id: "discovery",
      eyebrow: "Discovery & booking",
      title: "From search to a confirmed appointment.",
      description:
        "The core journey reduces the distance between intent and action: discover the right professional, understand the offer, choose a time, and confirm with confidence.",
      screens: [
        { title: "Landing experience", file: "01-landing.png", ratio: "wide" },
        { title: "Explore & map", file: "02-explore-map.png", ratio: "wide" },
        { title: "Provider profile", file: "03-provider-profile.png", ratio: "standard" },
        { title: "Booking flow", file: "04-booking-flow.png", ratio: "standard" },
      ],
    },
    {
      id: "client-experience",
      eyebrow: "Client experience",
      title: "A calm space for every booking.",
      description:
        "The client product brings upcoming appointments, recent activity, saved providers, reviews, and conversations into one understandable system.",
      screens: [
        { title: "Client home", file: "05-client-home.png", ratio: "wide" },
        { title: "Appointments", file: "06-client-appointments.png", ratio: "standard" },
        { title: "Messages", file: "07-client-messages.png", ratio: "standard" },
      ],
    },
    {
      id: "provider-experience",
      eyebrow: "Provider experience",
      title: "Business tools without the visual noise.",
      description:
        "The provider workspace turns schedules, requests, services, clients, and performance data into practical daily actions.",
      screens: [
        { title: "Provider dashboard", file: "08-provider-dashboard.png", ratio: "wide" },
        { title: "Availability", file: "09-provider-availability.png", ratio: "standard" },
        { title: "Services & requests", file: "10-provider-services.png", ratio: "standard" },
      ],
    },
    {
      id: "admin-experience",
      eyebrow: "Admin experience",
      title: "A clear view of the entire platform.",
      description:
        "The admin interface prioritises oversight: key platform signals first, then the tools needed to manage users, categories, and support.",
      screens: [
        { title: "Admin overview", file: "11-admin-overview.png", ratio: "wide" },
        { title: "User management", file: "12-admin-users.png", ratio: "standard" },
        { title: "Categories & support", file: "13-admin-operations.png", ratio: "standard" },
      ],
    },
  ],
} as const;

export function getProjectBySlug(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug);
}

export const services = [
  {
    title: "Graphic Design",
    description: "Distinctive visual work built around strong composition, typography, colour, and image making.",
    tools: ["Photoshop", "Illustrator", "Visual Direction", "Layout"],
  },
  {
    title: "UI / UX Design",
    description: "Clear, intuitive digital experiences shaped from user flows through polished interface systems.",
    tools: ["Figma", "Wireframes", "Prototyping", "Design Systems"],
  },
  {
    title: "Brand Identity",
    description: "Flexible visual identities that give brands a recognisable voice across every touchpoint.",
    tools: ["Logo Design", "Typography", "Colour Systems", "Guidelines"],
  },
  {
    title: "Front-end Interfaces",
    description: "Responsive React interfaces that preserve the visual detail and interaction quality of the design.",
    tools: ["React.js", "Responsive UI", "Components", "Interaction"],
  },
] as const;

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Behance", href: "https://www.behance.net/" },
] as const;
