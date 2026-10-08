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
    title: "Rise Club",
    category: "Branding · Social Content",
    filter: "Branding",
    services: ["Logo Design", "Poster Design", "Social Media"],
    summary: "An energetic identity and visual content system built around optimism, expression, and a bold rise-and-shine attitude.",
    year: "2025–2026",
    image: "/projects/riseclub/logo with background.jpg",
    logo: "/projects/riseclub/logo without background.png",
    aspect: "aspect-[4/5]",
    slug: "rise-club",
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
            { title: "Integration Day — Rise Club Collaboration", src: "/projects/csk/SocialMediaPosters/Integration Day.jpg", width: 1080, height: 1350 },
          { title: "Starting VI", src: "/projects/csk/SocialMediaPosters/starin-vi.jpg", width: 1080, height: 1350 },
          { title: "Campaign Album", src: "/projects/csk/SocialMediaPosters/ALBUM-(mkamlsh)_01.jpg", width: 1080, height: 1350 },
          { title: "Basketball Final", src: "/projects/csk/SocialMediaPosters/Basket-Final.jpg", width: 1080, height: 1350 },
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
      eyebrow: "Public experience",
      title: "From first visit to the right service.",
      description:
        "The public journey introduces the marketplace, builds trust, and turns a broad need into a focused service search.",
      screens: [
        {
          title: "Landing experience",
          label: "Public website · Full page",
          src: "/projects/Bookify/Public/landing page.png",
          width: 1905,
          height: 5200,
          ratio: "wide",
          theme: "light",
          scroll: true,
          scrollEnd: "-79%",
        },
        {
          title: "Discovery home",
          label: "Categories & featured providers · Full page",
          src: "/projects/Bookify/Client/Client Home.png",
          width: 1905,
          height: 2439,
          ratio: "wide",
          theme: "light",
          scroll: true,
          scrollEnd: "-56%",
        },
        {
          title: "Client dashboard",
          label: "Personal space",
          src: "/projects/Bookify/Client/Client Space.png",
          width: 1905,
          height: 1174,
          ratio: "wide",
          theme: "light",
        },
        {
          title: "Service discovery & map",
          label: "Search, filters & location",
          src: "/projects/Bookify/Client/Client explore.png",
          width: 1905,
          height: 1655,
          ratio: "standard",
          theme: "light",
        },
        {
          title: "Appointment management",
          label: "Upcoming bookings & status",
          src: "/projects/Bookify/Client/Client appointment.png",
          width: 1905,
          height: 1673,
          ratio: "standard",
          theme: "light",
        },
      ],
    },
    {
      id: "provider-experience",
      eyebrow: "Provider experience",
      title: "Business tools without the visual noise.",
      description:
        "The provider workspace turns schedules, requests, services, clients, and performance data into practical daily actions.",
      screens: [
        {
          title: "Provider dashboard",
          label: "Performance & daily operations",
          src: "/projects/Bookify/provider/Provider Dashboard.png",
          width: 1905,
          height: 2195,
          ratio: "wide",
          theme: "dark",
          scroll: true,
          scrollEnd: "-51%",
        },
        {
          title: "Appointment requests",
          label: "Accept · Reschedule · Decline",
          src: "/projects/Bookify/provider/Provider Appointment request.png",
          width: 1905,
          height: 1601,
          ratio: "standard",
          theme: "dark",
        },
        {
          title: "Calendar & availability",
          label: "Weekly schedule system",
          src: "/projects/Bookify/provider/Provider Calendar and availability.png",
          width: 1905,
          height: 2018,
          ratio: "standard",
          theme: "dark",
        },
        {
          title: "Provider profile settings",
          label: "Professional account management",
          src: "/projects/Bookify/provider/Provider settings.png",
          width: 1905,
          height: 1475,
          ratio: "wide",
          theme: "dark",
        },
      ],
    },
    {
      id: "admin-experience",
      eyebrow: "Admin experience",
      title: "A clear view of the entire platform.",
      description:
        "The admin interface prioritises oversight: key platform signals first, then the tools needed to manage users, categories, and support.",
      screens: [
        {
          title: "Admin overview",
          label: "Platform health & activity",
          src: "/projects/Bookify/Admin/Admin Dashboard.png",
          width: 1905,
          height: 1347,
          ratio: "wide",
          theme: "dark",
          scroll: true,
          scrollEnd: "-20%",
        },
        {
          title: "User management",
          label: "Clients & providers",
          src: "/projects/Bookify/Admin/admin users.png",
          width: 1920,
          height: 1080,
          ratio: "standard",
          theme: "dark",
        },
        {
          title: "Category management",
          label: "Service taxonomy",
          src: "/projects/Bookify/Admin/admin Categories.png",
          width: 1920,
          height: 1080,
          ratio: "standard",
          theme: "dark",
        },
        {
          title: "Support resolution",
          label: "Ticket conversation detail",
          src: "/projects/Bookify/Admin/admin answers supports.png",
          width: 1920,
          height: 1080,
          ratio: "wide",
          theme: "dark",
        },
      ],
    },
  ],
} as const;

export const riseClubCaseStudy = {
  slug: "rise-club",
  number: "03",
  shortName: "Rise Club",
  logo: "/projects/riseclub/logo without background.png",
  cover: "/projects/riseclub/logo with background.jpg",
  title: "Rise Club",
  year: "2025–2026",
  client: "Independent Club",
  role: "Graphic Designer",
  category: "Branding & Visual Content",
  introduction:
    "A bold identity and content system for an independent club built to celebrate talent, creativity, personal growth, and collective energy.",
  contribution:
    "I created the logo and shaped the club’s visual direction across launch posters, social media campaigns, event communication, badges, and large-format applications.",
  services: ["Logo Design", "Visual Direction", "Poster Design", "Social Media Design", "Event Collateral"],
  palette: [
    { name: "Rise Blue", value: "#010080" },
    { name: "Daylight", value: "#FFFFFF" },
    { name: "Sunrise", value: "#FFD400" },
  ],
  collections: [
    {
      id: "launch-posters",
      eyebrow: "Launch campaign",
      title: "A visual entrance with confidence.",
      description:
        "The opening posters establish the club’s voice through assertive typography, cinematic composition, and a clear message of momentum.",
      items: [
        { title: "Don’t Blink", src: "/projects/riseclub/Posters/AFFICHE 1.jpg", width: 3508, height: 4961 },
        { title: "Coming Soon", src: "/projects/riseclub/Posters/Coming soon 1.jpg", width: 1000, height: 1000 },
      ],
    },
    {
      id: "social-media",
      eyebrow: "Always-on communication",
      title: "Social content with range.",
      description:
        "A flexible content approach that can move from club-led activities to seasonal moments and shared events without losing the Rise Club signature.",
      items: [
        { title: "Integration Day — CSK Collaboration", src: "/projects/riseclub/Social Media/Integration Day.jpg", width: 1080, height: 1350 },
        { title: "Cinema Day", src: "/projects/riseclub/Social Media/Cinema post.jpg", width: 1080, height: 1350 },
        { title: "Ramadan Initiative", src: "/projects/riseclub/Social Media/ramdan.jpg", width: 1080, height: 1350 },
      ],
    },
    {
      id: "applications",
      eyebrow: "Physical touchpoints",
      title: "The identity beyond the feed.",
      description:
        "The system extends into event-scale and personal applications, keeping the club recognisable across spaces and member interactions.",
      items: [
        { title: "Event Roll-up", src: "/projects/riseclub/Roll up/Roulatte.jpg", width: 6375, height: 15000 },
        { title: "Member Badge — Front", src: "/projects/riseclub/Badgee/Badge d ahsen Designer 7.jpg", width: 1754, height: 2480 },
        { title: "Member Badge — Back", src: "/projects/riseclub/Badgee/Badge Back.jpg", width: 1754, height: 2480 },
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
