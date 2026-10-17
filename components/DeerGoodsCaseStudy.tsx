"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, Maximize2, ShoppingBag, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { deerGoodsCaseStudy, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type DeerGoodsProject = typeof deerGoodsCaseStudy;
type DeerVisual = DeerGoodsProject["visuals"][number];

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.74, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function IdentityTile({
  visual,
  className = "",
  imageClassName = "",
  light = false,
  onOpen,
}: {
  visual: DeerVisual;
  className?: string;
  imageClassName?: string;
  light?: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, ease }}
      onClick={onOpen}
      className={cn(
        "group relative min-h-[22rem] w-full cursor-zoom-in overflow-hidden rounded-[2rem] border text-left shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:rounded-[2.7rem]",
        light ? "border-black/10 text-[#2b211b]" : "border-white/10 text-white",
        className,
      )}
      aria-label={`Open ${visual.title}`}
    >
      <Image
        src={visual.src}
        alt={visual.title}
        fill
        unoptimized
        sizes="(min-width: 1024px) 58vw, 94vw"
        className={cn("object-contain transition-transform duration-700 ease-out", imageClassName)}
      />
      <div className={cn("pointer-events-none absolute inset-0", light ? "bg-gradient-to-t from-black/10 via-transparent to-transparent" : "bg-gradient-to-t from-black/45 via-transparent to-transparent")} />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 md:inset-x-7 md:bottom-7">
        <div>
          <p className={cn("font-mono text-[9px] uppercase tracking-[0.16em]", light ? "text-black/45" : "text-white/45")}>{visual.label}</p>
          <p className="mt-1 text-sm font-semibold md:text-base">{visual.title}</p>
        </div>
        <span className={cn("grid size-10 translate-y-2 place-items-center rounded-full border opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100", light ? "border-black/15 bg-white/40" : "border-white/15 bg-black/35")}>
          <Maximize2 size={14} />
        </span>
      </div>
    </motion.button>
  );
}

export function DeerGoodsCaseStudy({ project }: { project: DeerGoodsProject }) {
  const [scrolled, setScrolled] = useState(false);
  const [selectedVisual, setSelectedVisual] = useState<DeerVisual | null>(null);

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

  const brownLockup = project.visuals[0];
  const creamLockup = project.visuals[1];
  const darkLockup = project.visuals[2];
  const symbol = project.visuals[3];

  return (
    <main className="ambient-page deer-ambient relative min-h-screen overflow-clip bg-[#0c0a09] text-[#fffbea]">
      <header className="fixed inset-x-0 top-0 z-50 pt-4">
        <nav
          className={cn(
            "glass-panel deer-nav container-shell grid grid-cols-[1fr_auto_1fr] items-center rounded-full px-2.5 py-2.5",
            scrolled && "nav-glass--scrolled",
          )}
          aria-label="Project navigation"
        >
          <Link href="/#work" className="group inline-flex w-fit items-center gap-2 rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65 transition-colors hover:bg-white/[0.07] hover:text-white">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Back to work</span>
            <span className="sm:hidden">Work</span>
          </Link>

          <Link href="/" aria-label={`${siteConfig.name} home`} className="col-start-2">
            <span className="grid h-9 w-16 place-items-center overflow-hidden rounded-full bg-[#fffbea] px-3 shadow-lg shadow-black/25 transition-transform duration-300 hover:scale-[1.04]">
              <Image src={siteConfig.logo} alt={`${siteConfig.name} logo`} width={493} height={266} loading="eager" className="h-6 w-auto" />
            </span>
          </Link>

          <span className="hidden justify-self-end px-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35 sm:block">Project {project.number}</span>
        </nav>
      </header>

      <div className="container-shell relative z-10 pb-16 pt-28 md:pb-24 md:pt-32">
        <motion.section initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.82, ease }}>
          <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:text-[10px] sm:tracking-[0.22em]">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <div className="grid gap-7 py-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:py-12">
            <div>
              <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.14, ease }} className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#c3a78f]">
                Crafted identity / {project.number}
              </motion.p>
              <h1 className="text-[clamp(4.8rem,14vw,12.5rem)] uppercase leading-[0.76] tracking-[-0.07em]">
                <motion.span initial={{ y: 75, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.82, delay: 0.06, ease }} className="block font-serif">
                  Deer
                </motion.span>
                <motion.span initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.82, delay: 0.16, ease }} className="block pl-[0.2em] font-serif italic text-[#cbb295]">
                  Goods
                </motion.span>
              </h1>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-relaxed text-white/68 md:text-lg">{project.introduction}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span key={service} className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-[9px] uppercase tracking-[0.13em] text-white/50">{service}</span>
                ))}
              </div>
            </div>
          </div>

          <button type="button" onClick={() => setSelectedVisual(brownLockup)} className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[2rem] border border-white/12 bg-[#68574c] p-2 shadow-[0_38px_130px_rgba(0,0,0,0.52)] md:rounded-[3rem] md:p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[#68574c] md:aspect-[16/8.4] md:rounded-[2.35rem]">
              <Image src={brownLockup.src} alt="Deer Goods primary identity" fill priority quality={94} sizes="94vw" className="scale-[1.08] object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.11]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-full border border-white/15 bg-black/30 px-5 py-3 backdrop-blur-xl md:inset-x-7 md:bottom-7">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75">{project.slogan}</span>
                <Maximize2 size={14} className="text-white/65" />
              </div>
            </div>
          </button>
        </motion.section>

        <Reveal className="grid gap-10 border-b border-white/15 py-12 md:py-16 lg:grid-cols-[0.7fr_1.3fr]">
          <dl className="grid grid-cols-2 gap-x-5 gap-y-8 text-xs md:grid-cols-1">
            {[
              ["Project", project.client],
              ["Role", project.role],
              ["Year", project.year],
              ["Category", project.category],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">{label}</dt>
                <dd className="text-white/72">{value}</dd>
              </div>
            ))}
          </dl>

          <div>
            <p className="max-w-5xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">{project.slogan}</p>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">{project.contribution}</p>
          </div>
        </Reveal>

        <section className="py-12 md:py-20">
          <Reveal className="mb-9 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c3a78f]">Identity system</p>
              <h2 className="mt-3 max-w-5xl font-serif text-4xl tracking-tight md:text-6xl">A mark drawn from craft and character.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/45 md:text-right md:text-base">The antler symbol pairs natural character with an elegant editorial wordmark, giving the atelier a signature that feels established but never mass-produced.</p>
          </Reveal>

          <Reveal className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
            <IdentityTile visual={creamLockup} light onOpen={() => setSelectedVisual(creamLockup)} className="h-[35rem] bg-[#fffae6] lg:h-[44rem]" imageClassName="scale-[1.13] group-hover:scale-[1.17]" />
            <div className="grid gap-5">
              <IdentityTile visual={darkLockup} onOpen={() => setSelectedVisual(darkLockup)} className="h-[20rem] bg-black lg:h-[21.4rem]" imageClassName="scale-[1.12] group-hover:scale-[1.16]" />
              <IdentityTile visual={symbol} onOpen={() => setSelectedVisual(symbol)} className="h-[20rem] bg-[#68574c] lg:h-[21.4rem]" imageClassName="scale-[1.35] group-hover:scale-[1.4]" />
            </div>
          </Reveal>

          <Reveal className="mt-5 grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#12100f] sm:grid-cols-2 md:rounded-[2.7rem]">
            {project.palette.map((colour, index) => (
              <div key={colour.value} className={cn("flex min-h-36 items-end justify-between gap-6 p-6 md:min-h-48 md:p-8", index > 0 && "border-t border-white/10 sm:border-l sm:border-t-0")} style={{ backgroundColor: colour.value, color: index === 0 ? "#FFFAE6" : "#2b211b" }}>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] opacity-55">0{index + 1}</p>
                  <p className="mt-2 text-xl font-semibold">{colour.name}</p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] opacity-55">{colour.value}</span>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="border-y border-white/15 py-12 md:py-20">
          <Reveal className="mb-9 max-w-5xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c3a78f]">Digital experience</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-6xl">Craftsmanship translated to the screen.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">The interface balances editorial storytelling with direct shopping actions, giving bespoke orders the same importance as ready-stock products.</p>
          </Reveal>

          <Reveal className="overflow-hidden rounded-[2rem] border border-white/12 bg-[#0a0908] p-2 shadow-[0_38px_130px_rgba(0,0,0,0.55)] md:rounded-[3rem] md:p-3">
            <div className="overflow-hidden rounded-[1.55rem] bg-[#fffbef] text-[#31251f] md:rounded-[2.35rem]">
              <div className="flex items-center justify-between border-b border-black/10 px-4 py-3 md:px-7 md:py-4">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#68574c]" /><span className="size-2 rounded-full bg-[#c9ad91]" /><span className="size-2 rounded-full bg-black/20" />
                </div>
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-black/35">deergoodsfrontend.vercel.app</span>
                <span className="font-mono text-[8px] text-black/30">DG</span>
              </div>

              <div className="flex items-center justify-between border-b border-black/10 px-5 py-5 md:px-9">
                <span className="font-serif text-lg font-semibold uppercase tracking-tight md:text-2xl">Deer Goods.</span>
                <div className="hidden items-center gap-7 text-[8px] font-semibold uppercase tracking-[0.18em] text-black/60 md:flex">
                  <span>Shop</span><span>Custom orders</span><span>Our story</span>
                </div>
                <span className="grid size-9 place-items-center rounded-full border border-black/10"><ShoppingBag size={14} /></span>
              </div>

              <div className="p-3 md:p-7">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-[#18130f] px-6 py-12 text-[#fffbea] md:min-h-[35rem] md:rounded-[2.2rem] md:px-16 md:py-16">
                  <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px]" />
                  <motion.div aria-hidden="true" animate={{ x: [0, 40, -10, 0], y: [0, -20, 12, 0] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-24 -top-28 size-[28rem] rounded-full bg-[#8d5129]/25 blur-[100px]" />
                  <div className="relative z-10 max-w-3xl">
                    <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#c9ad91]">100% custom made</p>
                    <h3 className="mt-8 font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.045em]">Your Vision.<br /><span className="italic text-[#c9ad91]">Our Craft.</span></h3>
                    <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/58 md:text-base">Don&apos;t settle for off-the-shelf. Share your sketches, dimensions, or inspiration and turn them into a bespoke leather piece.</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <span className="rounded-lg bg-[#b85c18] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-white">Request custom order</span>
                      <span className="rounded-lg border border-white/15 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-white/75">View ready stock</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.experience.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} className="rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-6 md:rounded-[2rem]">
                <span className="font-mono text-[9px] text-[#c3a78f]">{item.number}</span>
                <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/42">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-12 md:py-20">
          <Reveal className="mb-9 max-w-4xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c3a78f]">Product promise</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-6xl">Made slowly. Designed to last.</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {project.principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.06} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#15110f] p-7 md:min-h-72 md:rounded-[2.6rem] md:p-9">
                <span className="font-serif text-5xl text-[#c3a78f]/35">0{index + 1}</span>
                <h3 className="mt-12 text-2xl font-semibold">{principle.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/45">{principle.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="pb-12 pt-2 md:pb-20 md:pt-6">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#fffae6] px-6 py-9 text-[#2b211b] shadow-[0_35px_120px_rgba(0,0,0,0.45)] md:rounded-[3rem] md:px-10 md:py-12 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute -right-28 -top-36 size-[32rem] rounded-full bg-[#68574c]/20 blur-[100px]" />
            <div className="relative z-10">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#68574c]/65">Project outcome</p>
              <h2 className="mt-4 max-w-6xl font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.88] tracking-[-0.05em]">An atelier identity, made for the digital shelf.</h2>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#2b211b]/65 md:text-lg">A cohesive foundation connecting the maker’s hand, the material’s character, and a clear path from discovery to custom order.</p>

              <div className="mt-10 grid border-y border-black/12 sm:grid-cols-3">
                {[["01", "Identity system"], ["04", "Core journeys"], [project.year, "Concept year"]].map(([value, label], index) => (
                  <div key={label} className={cn("py-6 sm:px-6 sm:py-8", index > 0 && "border-t border-black/12 sm:border-l sm:border-t-0", index === 0 && "sm:pl-0")}>
                    <p className="text-4xl font-semibold tracking-tight md:text-5xl">{value}</p>
                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#2b211b]/45">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Link href="/#work" className="group inline-flex w-fit items-center gap-2 rounded-full px-1 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2b211b]/60 transition-colors hover:text-[#2b211b]"><ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> Back to work</Link>
                <div className="flex flex-wrap gap-3">
                  <a href={project.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-black/12 bg-black/[0.04] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:bg-black/[0.08]">Visit website <ExternalLink size={15} /></a>
                  <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-3 rounded-full bg-[#68574c] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#fffae6] transition-transform hover:scale-[1.025]">Start a project <ArrowUpRight size={16} /></a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      <AnimatePresence>
        {selectedVisual && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true" aria-label={selectedVisual.title}>
            <button type="button" className="absolute inset-0 cursor-zoom-out bg-black/94 backdrop-blur-2xl" onClick={() => setSelectedVisual(null)} aria-label="Close visual preview" />
            <motion.figure initial={{ opacity: 0, y: 24, scale: 0.975 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: 0.985 }} transition={{ duration: 0.38, ease }} className="relative z-10 flex max-h-[94svh] max-w-[94vw] flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#100d0b] shadow-[0_40px_140px_rgba(0,0,0,0.8)]">
              <button type="button" onClick={() => setSelectedVisual(null)} className="absolute right-3 top-3 z-20 grid size-11 place-items-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-xl transition-colors hover:bg-white/15" aria-label="Close visual preview"><X size={18} /></button>
              <div className="min-h-0 flex-1 overflow-auto bg-black/20">
                <Image src={selectedVisual.src} alt={selectedVisual.title} width={selectedVisual.width} height={selectedVisual.height} unoptimized sizes="94vw" className="mx-auto h-auto max-h-[84svh] w-auto max-w-full object-contain" loading="eager" />
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
