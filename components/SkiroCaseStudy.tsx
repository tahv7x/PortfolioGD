"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig, skiroCaseStudy } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type SkiroProject = typeof skiroCaseStudy;

const ease = [0.23, 1, 0.32, 1] as const;

function CarouselSequence({ project }: { project: SkiroProject }) {
  return (
    <div className="skiro-carousel-shell no-scrollbar overflow-hidden" aria-label="SKIRO six-frame carousel sequence">
      <div className="skiro-carousel-track flex w-max">
        {[false, true].map((duplicate) => (
          <div
            key={duplicate ? "duplicate" : "original"}
            className={cn("skiro-carousel-group flex shrink-0 gap-4 pr-4", duplicate && "skiro-carousel-duplicate")}
            aria-hidden={duplicate || undefined}
          >
            {project.slides.map((slide, index) => (
              <figure
                key={`${duplicate ? "duplicate" : "original"}-${slide.src}`}
                className="w-[clamp(15rem,24vw,22rem)] shrink-0"
              >
                <div className="overflow-hidden rounded-2xl bg-black shadow-[0_28px_70px_rgba(0,0,0,0.38)]">
                  <Image
                    src={slide.src}
                    alt={duplicate ? "" : slide.title}
                    width={slide.width}
                    height={slide.height}
                    quality={90}
                    sizes="(min-width: 1280px) 22rem, (min-width: 768px) 24vw, 15rem"
                    className="h-auto w-full"
                  />
                </div>
                {!duplicate && (
                  <figcaption className="mt-3 flex items-center justify-between gap-4 px-1 text-xs text-zinc-400">
                    <span>{slide.title}</span>
                    <span className="font-mono text-[9px] text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkiroCaseStudy({ project }: { project: SkiroProject }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <main className="ambient-page skiro-ambient relative min-h-screen overflow-clip bg-[#050505] text-paper">
      <header className="fixed inset-x-0 top-0 z-50 pt-4">
        <nav
          className={cn(
            "skiro-nav container-shell grid grid-cols-[1fr_auto_1fr] items-center rounded-full border px-2.5 py-2.5",
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

        {/* ── HERO ── */}
        <motion.section
          initial={{ opacity: 0, transform: "translateY(28px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.72, ease }}
        >
          <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-[10px]">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <div className="grid gap-7 py-9 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:py-12">
            <h1 className="text-[clamp(5rem,15vw,12rem)] font-black uppercase leading-[0.76] tracking-[-0.04em] text-paper">
              SKIRO
            </h1>
            <div className="lg:pb-1">
              <p className="max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">{project.introduction}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span key={service} className="rounded-full border border-white/12 px-3.5 py-2 text-[9px] uppercase tracking-[0.13em] text-zinc-400">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero panel: black logo on red left, hero photo right */}
          <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-black p-2 shadow-[0_34px_110px_rgba(0,0,0,0.52)] md:rounded-[3rem] md:p-3">
            <div className="grid min-h-[38rem] overflow-hidden rounded-[1.55rem] bg-black md:min-h-0 md:aspect-[16/8.2] md:grid-cols-[0.82fr_1.18fr] md:rounded-[2.35rem]">
              {/* Left: black logo on red */}
              <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden bg-[#ef0500] p-10 md:min-h-0 md:p-14">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),transparent_42%)]" />
                <Image
                  src={project.logoBlack}
                  alt="SKIRO logo"
                  width={720}
                  height={333}
                  className="relative w-full max-w-md"
                />
                <p className="absolute bottom-7 left-8 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/50 md:left-12">
                  Logo system · 2026
                </p>
              </div>
              {/* Right: hero photo */}
              <div className="relative min-h-[32rem] overflow-hidden md:min-h-0">
                <Image
                  src="/projects/skiro/Untitled-1.jpg"
                  alt="SKIRO editorial photo"
                  fill
                  quality={92}
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover object-center"
                />
                {/* gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                {/* Red words overlay */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 sm:p-8 md:p-10 select-none">
                  <div className="font-black uppercase leading-[0.82] tracking-[-0.04em] text-[#ef0500] drop-shadow-[0_6px_30px_rgba(0,0,0,0.95)]">
                    <span className="block text-[clamp(2.75rem,7vw,5.5rem)]">SKR IS</span>
                    <span className="block text-[clamp(2.75rem,7vw,5.5rem)]">BACK</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.25em] text-[#ef0500] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    <span>LIMITED DROP</span>
                    <span>2026</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.section>

        {/* ── ABOUT ── */}
        <motion.section
          initial={{ opacity: 0, transform: "translateY(28px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.68, ease }}
          className="grid gap-10 border-b border-white/15 py-12 md:py-16 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <dl className="grid grid-cols-2 gap-x-5 gap-y-8 text-xs md:grid-cols-1">
            {[
              ["Client", project.client],
              ["Role", project.role],
              ["Year", project.year],
              ["Category", project.category],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">{label}</dt>
                <dd className="text-zinc-300">{value}</dd>
              </div>
            ))}
          </dl>
          <div>
            <h2 className="max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
              A logo that holds its ground. A carousel that never loses momentum.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">{project.contribution}</p>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {project.palette.map((colour) => (
                <div key={colour.value} className="flex items-center gap-3 border-t border-white/15 py-4">
                  <span className="size-8 rounded-full border border-white/15" style={{ backgroundColor: colour.value }} />
                  <div>
                    <p className="text-xs font-medium text-zinc-200">{colour.name}</p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-600">{colour.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── LOGO VARIANTS ── */}
        <motion.section
          initial={{ opacity: 0, transform: "translateY(28px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.68, ease }}
          className="border-b border-white/15 py-12 md:py-20"
        >
          <div className="mb-10">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">Identity system</p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              One mark. Three expressions.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1: Black on Red */}
            <div className="group overflow-hidden rounded-2xl bg-[#ef0500] p-10 transition-transform duration-500 hover:scale-[1.015]">
              <div className="flex min-h-[14rem] items-center justify-center">
                <Image
                  src={project.logoBlack}
                  alt="SKIRO logo — black on red"
                  width={720}
                  height={333}
                  quality={95}
                  className="w-full max-w-[14rem]"
                />
              </div>
              <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/50">Black — Red field</p>
            </div>

            {/* 2: White on Black */}
            <div className="group overflow-hidden rounded-2xl bg-[#050505] p-10 transition-transform duration-500 hover:scale-[1.015]">
              <div className="flex min-h-[14rem] items-center justify-center">
                <Image
                  src={project.logo}
                  alt="SKIRO logo — white on black"
                  width={720}
                  height={333}
                  quality={95}
                  className="w-full max-w-[14rem] brightness-0 invert"
                />
              </div>
              <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">White — Black field</p>
            </div>

            {/* 3: Black on Light */}
            <div className="group overflow-hidden rounded-2xl bg-[#F5F5F2] p-10 transition-transform duration-500 hover:scale-[1.015]">
              <div className="flex min-h-[14rem] items-center justify-center">
                <Image
                  src={project.logoBlack}
                  alt="SKIRO logo — black on light"
                  width={720}
                  height={333}
                  quality={95}
                  className="w-full max-w-[14rem]"
                />
              </div>
              <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40">Black — Light field</p>
            </div>
          </div>

        </motion.section>

        {/* ── CAROUSEL ── */}
        <section className="py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(24px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease }}
            className="mb-10 grid gap-5 md:grid-cols-[1fr_auto] md:items-end"
          >
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.03em] md:text-6xl">
              Six frames. One continuous story.
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400 md:text-right md:text-base">
              Each slide carries one part of the message while the repeated logo, red motif, and photography keep the sequence connected.
            </p>
          </motion.div>

          <div className="relative -mx-4 overflow-hidden border-y border-white/12 py-8 md:-mx-8 md:py-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#050505] to-transparent md:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#050505] to-transparent md:w-28" />
            <CarouselSequence project={project} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="pb-12 pt-2 md:pb-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#ef0500] px-6 py-10 text-black shadow-[0_32px_100px_rgba(0,0,0,0.42)] md:rounded-[3rem] md:px-12 md:py-14">
            <Image src={project.logo} alt="" width={720} height={333} className="absolute -right-12 -top-10 w-72 rotate-[-8deg] opacity-10 brightness-0 md:w-[30rem]" />
            <div className="relative max-w-5xl">
              <h2 className="text-balance text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.84] tracking-[-0.04em]">
                Identity with impact. Content with flow.
              </h2>
              <p className="mt-7 max-w-2xl text-base font-medium leading-relaxed text-black/70 md:text-lg">
                The result is a compact visual system that stays recognisable from the first frame to the last.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Link href="/#work" className="group inline-flex w-fit items-center gap-2 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black/70 transition-colors hover:text-black">
                  <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> Back to work
                </Link>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex w-fit items-center gap-3 rounded-full bg-black px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-paper transition-transform hover:scale-[1.03]">
                  Start a project <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
