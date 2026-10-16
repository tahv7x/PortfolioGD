"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, Maximize2, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { siteConfig, sparkCaseStudy } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type SparkProject = typeof sparkCaseStudy;
type SparkVisual = SparkProject["visuals"][number] | SparkProject["cover"];

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.75, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function VisualButton({ visual, className = "", onOpen }: { visual: SparkVisual; className?: string; onOpen: () => void }) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, ease }}
      onClick={onOpen}
      className={cn("group min-w-0 cursor-zoom-in text-left", className)}
      aria-label={`Open ${visual.title}`}
    >
      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#07060b] p-1.5 shadow-[0_32px_100px_rgba(0,0,0,0.44)] transition-colors duration-500 group-hover:border-white/25 md:rounded-[2.1rem] md:p-2">
        <div className="relative overflow-hidden rounded-[1.25rem] bg-black md:rounded-[1.65rem]">
          <Image
            src={visual.src}
            alt={visual.title}
            width={visual.width}
            height={visual.height}
            quality={92}
            sizes="(min-width: 1024px) 48vw, 94vw"
            className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute bottom-4 right-4 grid size-11 translate-y-2 place-items-center rounded-full border border-white/15 bg-black/65 text-white opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Maximize2 size={16} />
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-5 px-1 pb-2 pt-4">
        <div>
          <p className="text-sm font-semibold text-white md:text-base">{visual.title}</p>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">{visual.label}</p>
        </div>
        <ArrowUpRight size={16} className="mt-1 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </div>
    </motion.button>
  );
}

function LogoTile({
  visual,
  number,
  className = "",
  imageClassName = "",
  light = false,
  onOpen,
}: {
  visual: SparkVisual;
  number: string;
  className?: string;
  imageClassName?: string;
  light?: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.45, ease }}
      onClick={onOpen}
      className={cn(
        "group relative min-h-[19rem] cursor-zoom-in overflow-hidden rounded-[2rem] border text-left shadow-[0_30px_90px_rgba(0,0,0,0.38)] md:rounded-[2.6rem]",
        light ? "border-black/10 text-black" : "border-white/10 text-white",
        className,
      )}
      aria-label={`Open ${visual.title}`}
    >
      <Image
        src={visual.src}
        alt={visual.title}
        fill
        unoptimized
        quality={94}
        sizes="(min-width: 1024px) 58vw, 94vw"
        className={cn("object-contain transition-transform duration-700 ease-out", imageClassName)}
      />

      <div className={cn("pointer-events-none absolute inset-0", light ? "bg-gradient-to-t from-black/10 via-transparent to-transparent" : "bg-gradient-to-t from-black/45 via-transparent to-transparent")} />

      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 md:inset-x-7 md:bottom-7">
        <div>
          <p className={cn("font-mono text-[9px] uppercase tracking-[0.16em]", light ? "text-black/45" : "text-white/45")}>{number}</p>
          <p className="mt-1 text-sm font-semibold md:text-base">{visual.title}</p>
        </div>
        <span className={cn("grid size-10 translate-y-2 place-items-center rounded-full border opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100", light ? "border-black/15 bg-black/5" : "border-white/15 bg-black/35")}>
          <Maximize2 size={14} />
        </span>
      </div>
    </motion.button>
  );
}

export function SparkCaseStudy({ project }: { project: SparkProject }) {
  const [scrolled, setScrolled] = useState(false);
  const [selectedVisual, setSelectedVisual] = useState<SparkVisual | null>(null);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!selectedVisual) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedVisual(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedVisual]);

  const guidelines = project.visuals[0];
  const signature = project.visuals[1];
  const monochrome = project.visuals[2];
  const fullWordmark = project.visuals[3];

  return (
    <main className="ambient-page spark-ambient relative min-h-screen overflow-clip bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 pt-4">
        <nav
          className={cn(
            "glass-panel spark-nav container-shell grid grid-cols-[1fr_auto_1fr] items-center rounded-full px-2.5 py-2.5",
            scrolled && "nav-glass--scrolled",
          )}
          aria-label="Project navigation"
        >
          <Link
            href="/#work"
            className="group inline-flex w-fit items-center gap-2 rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65 transition-colors hover:bg-white/[0.07] hover:text-white"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Back to work</span>
            <span className="sm:hidden">Work</span>
          </Link>

          <Link href="/" aria-label={`${siteConfig.name} home`} className="col-start-2">
            <span className="grid h-9 w-16 place-items-center overflow-hidden rounded-full bg-[#f5f0e6] px-3 shadow-lg shadow-black/25 transition-transform duration-300 hover:scale-[1.04]">
              <Image src={siteConfig.logo} alt={`${siteConfig.name} logo`} width={493} height={266} loading="eager" className="h-6 w-auto" />
            </span>
          </Link>

          <span className="hidden justify-self-end px-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35 sm:block">
            Project {project.number}
          </span>
        </nav>
      </header>

      <div className="container-shell relative z-10 pb-16 pt-28 md:pb-24 md:pt-32">
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.82, ease }}>
          <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:text-[10px] sm:tracking-[0.22em]">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <div className="grid gap-7 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-12">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.14, ease }}
                className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40"
              >
                Digital agency identity / {project.number}
              </motion.p>
              <h1 className="text-[clamp(5.5rem,17vw,15rem)] font-black uppercase leading-[0.72] tracking-[-0.08em]">
                <motion.span initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.85, delay: 0.06, ease }} className="block">
                  Spark
                </motion.span>
              </h1>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-xl text-base leading-relaxed text-white/68 md:text-lg">{project.introduction}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.services.slice(0, 3).map((service) => (
                  <span key={service} className="rounded-full border border-white/12 bg-white/[0.045] px-3.5 py-2 text-[9px] uppercase tracking-[0.13em] text-white/50">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSelectedVisual(project.cover)}
            className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[2rem] border border-white/12 bg-[#09070f] p-2 shadow-[0_36px_120px_rgba(0,0,0,0.55)] md:rounded-[3rem] md:p-3"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[#10091f] md:aspect-[16/8.4] md:rounded-[2.35rem]">
              <Image
                src={project.cover.src}
                alt="SPARK project cover"
                fill
                priority
                quality={94}
                sizes="94vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-full border border-white/15 bg-black/40 px-5 py-3 backdrop-blur-xl md:inset-x-7 md:bottom-7">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75">Identity designed to ignite growth</span>
                <Maximize2 size={14} className="text-white/65" />
              </div>
            </div>
          </button>
        </motion.section>

        <Reveal className="grid gap-10 border-b border-white/15 py-12 md:py-16 lg:grid-cols-[0.7fr_1.3fr]">
          <dl className="grid grid-cols-2 gap-x-5 gap-y-8 text-xs md:grid-cols-1">
            {[
              ["Client", project.client],
              ["Role", project.role],
              ["Year", project.year],
              ["Category", project.category],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">{label}</dt>
                <dd className="text-white/75">{value}</dd>
              </div>
            ))}
          </dl>

          <div>
            <p className="max-w-5xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              A clear visual foundation for ideas built to create momentum.
            </p>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">{project.contribution}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span key={service} className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-[10px] text-white/50">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <section className="py-12 md:py-20">
          <Reveal className="mb-9 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a89ddc]">The visual language</p>
              <h2 className="mt-3 max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl">Minimal by form. Electric by attitude.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/48 md:text-right md:text-base">
              A direct spark symbol, monochrome contrast, and a deep purple environment give the agency a confident system that can stretch across many creative disciplines.
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
            <Reveal className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#251f49] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.42)] md:min-h-[38rem] md:rounded-[2.7rem] md:p-11">
              <div className="absolute -right-[20%] -top-[28%] size-[88%] rounded-full bg-white/[0.07] blur-3xl" />
              <div className="relative grid h-full place-items-center">
                <Image src={project.monochromeLogo} alt="SPARK monochrome logo" width={1080} height={1080} quality={92} className="w-full max-w-[35rem] invert mix-blend-screen" />
              </div>
              <p className="absolute bottom-7 left-8 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45 md:left-11">Primary symbol</p>
            </Reveal>

            <div className="grid gap-5">
              <Reveal delay={0.06} className="rounded-[2rem] border border-white/10 bg-[#0a090f] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:rounded-[2.7rem] md:p-9">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">Brand idea</p>
                <p className="mt-8 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">A mark made to trigger action.</p>
                <p className="mt-5 text-sm leading-relaxed text-white/48">The icon distils the agency name into an immediate visual cue: the moment an idea appears, connects, and starts moving forward.</p>
              </Reveal>

              <Reveal delay={0.12} className="rounded-[2rem] border border-white/10 bg-[#0a090f] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:rounded-[2.7rem] md:p-9">
                <div className="flex items-end justify-between gap-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">Colour system</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/25">03 colours</p>
                </div>
                <div className="mt-7 grid gap-3">
                  {project.palette.map((colour) => (
                    <div key={colour.value} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-3">
                      <div className="flex items-center gap-3">
                        <span className="size-9 rounded-xl border border-white/15" style={{ backgroundColor: colour.value }} />
                        <span className="text-sm font-medium text-white/78">{colour.name}</span>
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">{colour.value}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.16} className="flex items-center justify-between rounded-[2rem] border border-white/10 bg-white px-7 py-7 text-black shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:rounded-[2.7rem] md:px-9">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/45">Typography</p>
                  <p className="mt-2 text-2xl font-black uppercase tracking-tight">{project.typography}</p>
                </div>
                <span className="text-5xl font-black tracking-[-0.08em]">Aa</span>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-y border-white/15 py-12 md:py-20">
          <Reveal className="mb-9 max-w-4xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a89ddc]">Brand guidelines</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">One system, built to stay consistent.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/48 md:text-base">
              The guideline brings the logo, palette, type, spacing, and first applications into one practical reference for the agency’s growing visual world.
            </p>
          </Reveal>

          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(19rem,0.75fr)]">
            <Reveal>
              <VisualButton className="w-full" visual={guidelines} onOpen={() => setSelectedVisual(guidelines)} />
            </Reveal>

            <Reveal delay={0.08} className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a090f] shadow-[0_28px_90px_rgba(0,0,0,0.38)] md:rounded-[2.6rem]">
                <div className="border-b border-white/10 p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#a89ddc]">Inside the system</p>
                    <span className="font-mono text-[9px] text-white/25">01—04</span>
                  </div>
                  <p className="mt-5 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">A practical identity, not just a logo.</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/45">
                    Four foundations keep every future SPARK touchpoint clear, recognisable, and easy to reproduce.
                  </p>
                </div>

                <div className="divide-y divide-white/10 px-6 md:px-8">
                  {[
                    ["01", "Logo system", "Primary mark, spacing, and monochrome use"],
                    ["02", "Colour", "A focused purple, white, and black palette"],
                    ["03", "Typography", `${project.typography} for a direct agency voice`],
                    ["04", "Applications", "A consistent bridge from screen to print"],
                  ].map(([number, title, description]) => (
                    <div key={number} className="group grid grid-cols-[2.5rem_1fr] gap-3 py-5">
                      <span className="pt-0.5 font-mono text-[9px] text-white/25 transition-colors group-hover:text-[#a89ddc]">{number}</span>
                      <div>
                        <p className="text-sm font-semibold text-white/85">{title}</p>
                        <p className="mt-1.5 text-xs leading-relaxed text-white/38">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 p-6 md:p-8">
                  <div className="mb-6 flex gap-2">
                    {project.palette.map((colour) => (
                      <span
                        key={colour.value}
                        className="h-9 flex-1 rounded-xl border border-white/15"
                        style={{ backgroundColor: colour.value }}
                        title={`${colour.name} ${colour.value}`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedVisual(guidelines)}
                    className="group flex w-full items-center justify-between rounded-full border border-white/12 bg-white/[0.055] px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    Explore full guidelines
                    <Maximize2 size={14} className="transition-transform duration-300 group-hover:scale-110" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <Reveal className="mb-9 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a89ddc]">Logo variations</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">One identity, multiple expressions.</h2>
            </div>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-white/30 md:block">03 selected visuals</span>
          </Reveal>

          <Reveal className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <motion.button
                type="button"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.45, ease }}
                onClick={() => setSelectedVisual(signature)}
                className="group relative h-[36rem] w-full cursor-zoom-in overflow-hidden rounded-[2rem] border border-white/10 text-left text-white shadow-[0_30px_90px_rgba(0,0,0,0.38)] md:rounded-[2.6rem] lg:h-[43rem]"
                style={{
                  backgroundColor: "#251F49",
                  backgroundImage: "url('/projects/SPARK/spark-logo-png.png')",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "155%",
                }}
                aria-label="Open Signature mark"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 md:inset-x-7 md:bottom-7">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">01 / Primary symbol</p>
                    <p className="mt-1 text-sm font-semibold md:text-base">Signature mark</p>
                  </div>
                  <span className="grid size-10 translate-y-2 place-items-center rounded-full border border-white/15 bg-black/35 opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Maximize2 size={14} />
                  </span>
                </div>
              </motion.button>
            </div>

            <div className="grid gap-5">
              <LogoTile
                visual={fullWordmark}
                number="02 / Full wordmark"
                onOpen={() => setSelectedVisual(fullWordmark)}
                className="h-[20rem] bg-black lg:h-[20.9rem]"
                imageClassName="scale-[1.13] group-hover:scale-[1.17]"
              />

              <LogoTile
                visual={monochrome}
                number="03 / Monochrome mark"
                onOpen={() => setSelectedVisual(monochrome)}
                light
                className="h-[20rem] bg-white lg:h-[20.9rem]"
                imageClassName="scale-[1.18] mix-blend-multiply group-hover:scale-[1.23]"
              />
            </div>
          </Reveal>
        </section>

        <section className="pb-12 pt-2 md:pb-20 md:pt-6">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#251f49] px-6 py-9 shadow-[0_32px_100px_rgba(0,0,0,0.45)] md:rounded-[3rem] md:px-10 md:py-12 lg:px-14 lg:py-14">
            <motion.div
              aria-hidden="true"
              animate={{ x: [0, 60, -20, 0], y: [0, -30, 24, 0], scale: [1, 1.12, 0.96, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-32 -top-40 size-[34rem] rounded-full bg-white/[0.09] blur-[100px]"
            />
            <div className="relative z-10">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/50">Project outcome</p>
              <h2 className="mt-4 max-w-6xl text-balance text-[clamp(2.8rem,7vw,7rem)] font-semibold uppercase leading-[0.88] tracking-[-0.055em]">
                Built to spark what comes next.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/68 md:text-lg">
                A compact identity foundation that gives SPARK a recognisable voice today and enough flexibility to grow with its future services, campaigns, and client work.
              </p>

              <div className="mt-10 grid border-y border-white/15 sm:grid-cols-3">
                {[
                  ["01", "Logo system"],
                  ["03", "Core colours"],
                  ["03", "Logo variations"],
                ].map(([value, label], index) => (
                  <div key={label} className={cn("py-6 sm:px-6 sm:py-8", index > 0 && "border-t border-white/15 sm:border-l sm:border-t-0", index === 0 && "sm:pl-0")}>
                    <p className="text-4xl font-semibold tracking-tight md:text-5xl">{value}</p>
                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Link href="/#work" className="group inline-flex w-fit items-center gap-2 rounded-full px-1 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white">
                  <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> Back to work
                </Link>
                <div className="flex flex-wrap gap-3">
                  <a href={project.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-xl transition-colors hover:bg-white/18">
                    Visit SPARK <ExternalLink size={15} />
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition-transform hover:scale-[1.025]">
                    Start a project <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      <AnimatePresence>
        {selectedVisual && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={selectedVisual.title}
          >
            <button type="button" className="absolute inset-0 cursor-zoom-out bg-black/94 backdrop-blur-2xl" onClick={() => setSelectedVisual(null)} aria-label="Close visual preview" />
            <motion.figure
              initial={{ opacity: 0, y: 24, scale: 0.975 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.985 }}
              transition={{ duration: 0.38, ease }}
              className="relative z-10 flex max-h-[94svh] max-w-[94vw] flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#09070f] shadow-[0_40px_140px_rgba(0,0,0,0.8)]"
            >
              <button type="button" onClick={() => setSelectedVisual(null)} className="absolute right-3 top-3 z-20 grid size-11 place-items-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-xl transition-colors hover:bg-white/15" aria-label="Close visual preview">
                <X size={18} />
              </button>
              <div className="min-h-0 flex-1 overflow-auto bg-black/20">
                <Image src={selectedVisual.src} alt={selectedVisual.title} width={selectedVisual.width} height={selectedVisual.height} quality={94} sizes="94vw" className="mx-auto h-auto max-h-[84svh] w-auto max-w-full object-contain" loading="eager" />
              </div>
              <figcaption className="flex items-center justify-between gap-5 border-t border-white/10 px-5 py-4 sm:px-6">
                <span className="text-sm font-medium text-white sm:text-base">{selectedVisual.title}</span>
                <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-white/35 sm:block">{selectedVisual.width} × {selectedVisual.height}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
