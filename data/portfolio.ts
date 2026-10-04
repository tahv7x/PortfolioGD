export const siteConfig = {
  name: "Hassbi taha",
  initials: "HT",
  role: "Independent graphic & UI/UX designer",
  location: "Casablanca · Working worldwide",
  availability: "Available for design projects",
  email: "thassbii@gmail.com",
  description:
    "Independent graphic and UI/UX designer crafting expressive brands, campaigns, and digital experiences.",
} as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
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
    title: "Astra Objects",
    category: "Art Direction · Campaign",
    filter: "Campaigns",
    services: ["Art Direction", "Social Campaign"],
    summary: "A dimensional launch world built around form, light, and futuristic product storytelling.",
    year: "2026",
    image: "/projects/astra.svg",
    aspect: "aspect-[4/5]",
  },
  {
    number: "02",
    title: "Mono Studio",
    category: "Brand Identity · Editorial",
    filter: "Branding",
    services: ["Identity", "Editorial"],
    summary: "A disciplined identity system balancing Swiss structure with a bold cultural edge.",
    year: "2025",
    image: "/projects/mono.svg",
    aspect: "aspect-[4/5]",
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
    aspect: "aspect-[4/5]",
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
    aspect: "aspect-[4/5]",
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
    aspect: "aspect-[4/5]",
  },
] as const;

export const services = [
  {
    title: "Brand Identity",
    description: "Distinctive identity systems that give brands a clear and recognisable visual voice.",
    tools: ["Strategy", "Logos", "Typography", "Guidelines"],
  },
  {
    title: "UI / UX Design",
    description: "Intuitive interfaces and design systems grounded in real user behaviour.",
    tools: ["Figma", "Prototyping", "Research", "Systems"],
  },
  {
    title: "Campaign & Social",
    description: "Flexible campaign systems and scroll-stopping visuals made for modern channels.",
    tools: ["Photoshop", "Illustrator", "Social", "Editorial"],
  },
  {
    title: "Art Direction",
    description: "A strong creative point of view that keeps every visual touchpoint feeling connected.",
    tools: ["Concepts", "Image Making", "Moodboards", "Motion"],
  },
  {
    title: "Full-Stack Development",
    description: "Responsive digital products built with the same attention to detail as the visual design.",
    tools: ["React", "Next.js", "TypeScript", "C#"],
  },
  {
    title: "Data & Architecture",
    description: "Reliable systems and structured data that keep polished digital experiences running smoothly.",
    tools: ["PostgreSQL", "SQL Server", "APIs", "Cloud"],
  },
] as const;

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Behance", href: "https://www.behance.net/" },
] as const;
