"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck2,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { bookifyCaseStudy, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type BookifyProject = typeof bookifyCaseStudy;
type Screen = BookifyProject["screenshotGroups"][number]["screens"][number];

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.72, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ScreenPlaceholder({ screen, index }: { screen: Screen; index: number }) {
  const isWide = screen.ratio === "wide";

  return (
    <motion.figure
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.06, 0.16), ease }}
      className={cn("group min-w-0", isWide && "md:col-span-2")}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#080b16] shadow-[0_28px_80px_rgba(0,0,0,0.32)] transition-colors duration-500 group-hover:border-[#1a6fd1]/45",
          isWide ? "aspect-[16/9]" : "aspect-[4/3]",
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(26,111,209,0.22),transparent_36%),linear-gradient(145deg,#111a32,#070914_72%)]" />
        <div className="absolute inset-[5%] overflow-hidden rounded-[1rem] border border-white/[0.09] bg-[#eef2fc] shadow-2xl shadow-black/25">
          <div className="flex h-[11%] items-center gap-2 border-b border-[#dce4f4] bg-white px-[3%]">
            <span className="size-2 rounded-full bg-[#1a6fd1]" />
            <span className="h-1.5 w-[12%] rounded-full bg-[#c8d4e8]" />
            <span className="ml-auto h-1.5 w-[18%] rounded-full bg-[#dfe6f2]" />
          </div>
          <div className="flex h-[89%]">
            <div className="hidden w-[17%] border-r border-[#dce4f4] bg-white p-[3%] sm:block">
              <span className="mb-[26%] block h-2 w-[72%] rounded-full bg-[#1a6fd1]" />
              {[0, 1, 2, 3, 4].map((item) => (
                <span key={item} className="mb-[18%] block h-1.5 rounded-full bg-[#dde5f1]" />
              ))}
            </div>
            <div className="relative flex-1 p-[4%]">
              <div className="mb-[4%] flex items-end justify-between">
                <div className="w-[45%]">
                  <span className="mb-[5%] block h-2 w-[32%] rounded-full bg-[#1a6fd1]" />
                  <span className="block h-3 w-full rounded-full bg-[#162542]" />
                </div>
                <span className="h-6 w-[20%] rounded-lg bg-[#1a6fd1]" />
              </div>
              <div className="mb-[4%] grid grid-cols-3 gap-[3%]">
                {[0, 1, 2].map((item) => (
                  <span key={item} className="aspect-[2/1] rounded-lg border border-[#d8e2f0] bg-white shadow-sm" />
                ))}
              </div>
              <div className="grid h-[46%] grid-cols-[1.35fr_0.65fr] gap-[3%]">
                <span className="rounded-xl border border-[#d8e2f0] bg-white shadow-sm" />
                <span className="rounded-xl border border-[#d8e2f0] bg-[linear-gradient(150deg,#fff,#e3ecfb)] shadow-sm" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-[#05060f]/15 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full border border-white/15 bg-[#05060f]/70 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-paper backdrop-blur-xl">
            Screenshot ready
          </span>
        </div>
      </div>
      <figcaption className="flex items-start justify-between gap-5 px-1 pb-2 pt-4">
        <div>
          <p className="text-sm font-semibold text-paper md:text-base">{screen.title}</p>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-600">Add to /Bookify/{screen.file}</p>
        </div>
        <span className="font-mono text-[9px] text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
      </figcaption>
    </motion.figure>
  );
}

export function BookifyCaseStudy({ project }: { project: BookifyProject }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const audienceIcons = [Search, LayoutDashboard, ShieldCheck];

  return (
    <main className="ambient-page relative min-h-screen overflow-clip bg-ink-950 text-paper">
      <header className="fixed inset-x-0 top-0 z-50 pt-4">
        <nav
          className={cn(
            "glass-panel container-shell grid grid-cols-[1fr_auto_1fr] items-center rounded-full px-2.5 py-2.5",
            scrolled && "nav-glass--scrolled",
          )}
          aria-label="Project navigation"
        >
          <Link
            href="/#work"
            className="group inline-flex w-fit items-center gap-2 rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-300 transition-colors hover:bg-white/[0.07] hover:text-paper"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Back to work</span>
            <span className="sm:hidden">Work</span>
          </Link>

          <Link href="/" aria-label={`${siteConfig.name} home`} className="col-start-2">
            <span className="grid h-9 w-16 place-items-center overflow-hidden rounded-full bg-paper px-3 shadow-lg shadow-black/25 transition-transform duration-300 hover:scale-[1.04]">
              <Image src={siteConfig.logo} alt={`${siteConfig.name} logo`} width={493} height={266} className="h-6 w-auto" />
            </span>
          </Link>

          <span className="hidden justify-self-end px-3 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500 sm:block">
            Project {project.number}
          </span>
        </nav>
      </header>

      <div className="container-shell relative z-10 pb-16 pt-28 md:pb-24 md:pt-32">
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, ease }}
        >
          <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-[10px] sm:tracking-[0.22em]">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <div className="grid gap-8 py-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:py-12">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.12, ease }}
                className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#4f8fff]"
              >
                Individual product case study / {project.number}
              </motion.p>
              <h1 className="text-[clamp(4.5rem,14vw,13rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
                Bookify
              </h1>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">{project.introduction}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["UX strategy", "Interface design", "Responsive UI", "React frontend"].map((label) => (
                  <span key={label} className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[9px] uppercase tracking-[0.13em] text-zinc-400">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#070a13] p-3 shadow-[0_34px_110px_rgba(0,0,0,0.48)] md:rounded-[3rem] md:p-4">
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.45rem] bg-[radial-gradient(circle_at_75%_15%,rgba(26,111,209,0.92),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(0,74,150,0.38),transparent_34%),linear-gradient(145deg,#111a31,#03050b_68%)] md:aspect-[16/8] md:rounded-[2.4rem]">
              <motion.div
                animate={{ x: ["-4%", "5%", "-4%"], y: ["-3%", "5%", "-3%"], rotate: [-5, 2, -5] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-[22%] -top-[50%] size-[92%] rounded-full border border-[#4f8fff]/35 shadow-[0_0_130px_rgba(26,111,209,0.28)]"
              />
              <motion.div
                animate={{ x: ["5%", "-4%", "5%"], scale: [1, 1.08, 1] }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-[52%] -left-[18%] size-[84%] rounded-full border border-white/10"
              />
              <div className="relative z-10 flex size-full flex-col items-center justify-center px-[8%] py-[10%] text-center">
                <Image
                  src={project.logo}
                  alt="Bookify logo"
                  width={3265}
                  height={2969}
                  unoptimized
                  priority
                  className="h-auto w-[82%] max-w-[56rem] object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.5)] md:w-[52%]"
                />
                <div className="mt-7 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-500 sm:text-[9px]">
                  <span>Find</span><span className="h-px w-7 bg-[#1a6fd1]" /><span>Book</span><span className="h-px w-7 bg-[#1a6fd1]" /><span>Manage</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="border-b border-white/15 py-12 md:py-16">
          <Reveal className="grid gap-12 lg:grid-cols-[0.66fr_1.34fr] lg:gap-20">
            <dl className="grid grid-cols-2 gap-x-5 gap-y-8 text-xs lg:grid-cols-1">
              {[
                ["Project", "Individual PFE"],
                ["Role", project.role],
                ["Timeline", project.year],
                ["Focus", "UI/UX & frontend"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">{label}</dt>
                  <dd className="leading-relaxed text-zinc-300">{value}</dd>
                </div>
              ))}
            </dl>

            <div>
              <p className="max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                One booking platform. Three very different points of view.
              </p>
              <p className="mt-7 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg">{project.contribution}</p>
            </div>
          </Reveal>
        </section>

        <section className="py-14 md:py-20">
          <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4f8fff]">The design challenge</p>
              <h2 className="mt-3 text-5xl font-semibold leading-[0.92] tracking-tight md:text-7xl">Make complexity feel invisible.</h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg lg:justify-self-end">
              Service booking involves discovery, trust, availability, communication, and platform oversight. The challenge was to connect those layers without making any user carry the complexity of the entire system.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {project.audiences.map((audience, index) => {
              const Icon = audienceIcons[index];
              return (
                <Reveal key={audience.id} delay={index * 0.07}>
                  <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#1a6fd1]/45 hover:bg-white/[0.055] md:p-8">
                    <div className="absolute -right-20 -top-20 size-52 rounded-full bg-[#1a6fd1]/10 blur-3xl transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="grid size-12 place-items-center rounded-2xl border border-[#4f8fff]/25 bg-[#1a6fd1]/10 text-[#70a4ff]">
                          <Icon size={21} />
                        </span>
                        <span className="font-mono text-[10px] text-zinc-600">{audience.number}</span>
                      </div>
                      <h3 className="mt-8 text-3xl font-semibold tracking-tight">{audience.title}</h3>
                      <p className="mt-4 min-h-24 text-sm leading-relaxed text-zinc-400">{audience.description}</p>
                      <div className="mt-7 border-t border-white/10 pt-5">
                        {audience.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 border-b border-white/[0.07] py-2.5 last:border-0">
                            <span className="size-1.5 rounded-full bg-[#1a6fd1]" />
                            <span className="text-xs text-zinc-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/15 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4f8fff]">Core journey</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">A shorter path to the right service.</h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
                Each step answers one essential question before asking the user to move forward.
              </p>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-5">
              {[
                [Search, "Discover", "Find the right service"],
                [SlidersHorizontal, "Compare", "Filter and evaluate"],
                [MapPin, "Choose", "Review the provider"],
                [CalendarCheck2, "Book", "Select date and time"],
                [MessageSquare, "Manage", "Follow every booking"],
              ].map(([Icon, title, description], index) => {
                const JourneyIcon = Icon as typeof Search;
                return (
                  <div key={String(title)} className="relative rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 md:min-h-48">
                    <div className="flex items-center justify-between">
                      <JourneyIcon size={18} className="text-[#70a4ff]" />
                      <span className="font-mono text-[9px] text-zinc-600">0{index + 1}</span>
                    </div>
                    <p className="mt-10 text-lg font-semibold">{String(title)}</p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-500">{String(description)}</p>
                    {index < 4 && <ArrowRight size={14} className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-zinc-600 md:block" />}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </section>

        <section className="py-14 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <Reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4f8fff]">Visual language</p>
              <h2 className="mt-3 text-5xl font-semibold leading-[0.92] tracking-tight md:text-7xl">Trust, clarity, momentum.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg lg:justify-self-end">
                A confident blue system, soft surfaces, clear hierarchy, and expressive editorial typography give Bookify a professional but approachable character.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_70%_18%,rgba(26,111,209,0.7),transparent_34%),linear-gradient(145deg,#10192f,#05060f_70%)] p-[12%]">
                <div className="absolute -left-[24%] -top-[30%] size-[72%] rounded-full border border-white/10" />
                <Image src={project.logo} alt="Bookify visual identity" width={3265} height={2969} unoptimized className="relative z-10 h-auto w-[78%] object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.48)]" />
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              <Reveal delay={0.05}>
                <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">Colour system</p>
                  <div className="mt-7 grid grid-cols-3 gap-3">
                    {[
                      ["#004A96", "Deep blue"],
                      ["#1A6FD1", "Bookify blue"],
                      ["#F4F7FE", "Cloud"],
                    ].map(([color, label]) => (
                      <div key={color}>
                        <span className="block aspect-square rounded-2xl border border-white/10" style={{ backgroundColor: color }} />
                        <p className="mt-3 font-mono text-[8px] text-zinc-500">{color}</p>
                        <p className="mt-1 text-[10px] text-zinc-400">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">Type direction</p>
                  <div className="mt-6 flex items-end justify-between gap-4 border-b border-white/10 pb-5">
                    <span className="text-4xl font-semibold tracking-tight">Poppins</span>
                    <span className="font-mono text-[8px] text-zinc-600">UI / TEXT</span>
                  </div>
                  <div className="flex items-end justify-between gap-4 pt-5">
                    <span className="font-bodoni text-5xl italic leading-none">Fraunces</span>
                    <span className="font-mono text-[8px] text-zinc-600">ACCENT</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-t border-white/15 pt-14 md:pt-20">
          <Reveal className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4f8fff]">Interface system</p>
              <h2 className="mt-3 text-5xl font-semibold leading-[0.92] tracking-tight md:text-7xl">One product, built in layers.</h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg lg:justify-self-end">
              The gallery structure is ready. Replace each labelled slot with its matching screenshot when the final captures are prepared.
            </p>
          </Reveal>

          <div className="mt-14">
            {project.screenshotGroups.map((group, groupIndex) => (
              <section key={group.id} id={group.id} className="border-t border-white/15 py-12 first:border-t-0 first:pt-0 md:py-16">
                <Reveal className="mb-8 grid gap-5 md:grid-cols-[1fr_0.72fr] md:items-end">
                  <div>
                    <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      <span className="text-[#4f8fff]">0{groupIndex + 1}</span>
                      <span>{group.eyebrow}</span>
                    </div>
                    <h3 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">{group.title}</h3>
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base md:justify-self-end">{group.description}</p>
                </Reveal>

                <div className="grid gap-5 md:grid-cols-2">
                  {group.screens.map((screen, index) => (
                    <ScreenPlaceholder key={screen.file} screen={screen} index={index} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="border-t border-white/15 py-14 md:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4f8fff]">Design process</p>
                <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">From product logic to working interface.</h2>
              </div>
              <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
                {[
                  ["01", "Structure", "Mapped the three roles, their goals, and the information each one needs first."],
                  ["02", "Flows", "Reduced complex booking and management tasks into clear, connected steps."],
                  ["03", "Interface", "Built a reusable visual system for cards, navigation, forms, states, and dashboards."],
                  ["04", "Implementation", "Translated the system into a responsive React product with motion and real interactions."],
                ].map(([number, title, description]) => (
                  <article key={number} className="bg-[#080a14] p-6 md:p-8">
                    <span className="font-mono text-[9px] text-[#4f8fff]">{number}</span>
                    <h3 className="mt-7 text-2xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="border-t border-white/15 pb-12 pt-8 md:pb-20 md:pt-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.035] px-6 py-9 shadow-[0_32px_100px_rgba(0,0,0,0.3)] md:rounded-[3rem] md:px-10 md:py-12 lg:px-14 lg:py-14">
              <motion.div
                animate={{ x: ["-10%", "18%", "-10%"], y: ["0%", "18%", "0%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-24 -top-32 size-96 rounded-full bg-[#1a6fd1]/18 blur-[100px]"
              />
              <div className="relative z-10">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4f8fff]">Project outcome</p>
                <h2 className="mt-4 max-w-6xl text-balance text-[clamp(2.8rem,7.3vw,7.4rem)] font-semibold uppercase leading-[0.86] tracking-[-0.055em]">
                  Three experiences. One connected product.
                </h2>
                <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
                  Bookify became a complete, responsive interface system that supports the full service-booking relationship—from first discovery to daily operations and platform oversight.
                </p>

                <div className="mt-10 grid border-y border-white/12 sm:grid-cols-3">
                  {[
                    ["03", "Connected user roles"],
                    ["01", "Responsive design system"],
                    [project.year, "Project timeline"],
                  ].map(([value, label], index) => (
                    <div key={label} className={cn("py-6 sm:px-6 sm:py-8", index > 0 && "border-t border-white/12 sm:border-l sm:border-t-0", index === 0 && "sm:pl-0")}>
                      <p className="text-4xl font-semibold tracking-tight text-paper md:text-5xl">{value}</p>
                      <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Link href="/#work" className="group inline-flex w-fit items-center gap-2 rounded-full px-1 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400 transition-colors hover:text-paper">
                    <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                    Back to work
                  </Link>
                  <div className="flex flex-wrap gap-3">
                    <a href={project.repository} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-3 rounded-full border border-white/12 bg-white/[0.045] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-300 transition-colors hover:bg-white/10 hover:text-paper">
                      View repository <ArrowUpRight size={15} />
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="glass-button inline-flex w-fit items-center gap-3 rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em]">
                      Start a project <Sparkles size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
