"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Maximize2, Sparkles, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { riseClubCaseStudy, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type RiseClubProject = typeof riseClubCaseStudy;
type Artwork = RiseClubProject["collections"][number]["items"][number];

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

function ArtworkCard({ artwork, index, onOpen }: { artwork: Artwork; index: number; onOpen: () => void }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -7 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.055, 0.16), ease }}
      onClick={onOpen}
      className="group min-w-0 cursor-zoom-in text-left"
      aria-label={`Open ${artwork.title}`}
    >
      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#070720] p-1.5 shadow-[0_30px_90px_rgba(0,0,0,0.3)] transition-colors duration-500 group-hover:border-[#ffd400]/45 md:p-2">
        <div className="relative overflow-hidden rounded-[1.25rem] bg-[#010080]">
          <Image
            src={artwork.src}
            alt={artwork.title}
            width={artwork.width}
            height={artwork.height}
            quality={90}
            sizes="(min-width: 1280px) 31vw, (min-width: 640px) 47vw, 92vw"
            className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#010080]/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute bottom-4 right-4 grid size-11 translate-y-2 place-items-center rounded-full border border-white/20 bg-[#010080]/70 text-white opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Maximize2 size={16} />
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-5 px-1 pb-2 pt-4">
        <p className="text-sm font-semibold text-paper md:text-base">{artwork.title}</p>
        <span className="font-mono text-[9px] text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
      </div>
    </motion.button>
  );
}

export function RiseClubCaseStudy({ project }: { project: RiseClubProject }) {
  const [scrolled, setScrolled] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const totalVisuals = project.collections.reduce((total, collection) => total + collection.items.length, 0);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!selectedArtwork) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedArtwork(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedArtwork]);

  return (
    <main className="ambient-page rise-ambient relative min-h-screen overflow-clip bg-ink-950 text-paper">
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
              <Image src={siteConfig.logo} alt={`${siteConfig.name} logo`} width={493} height={266} loading="eager" className="h-6 w-auto" />
            </span>
          </Link>

          <span className="hidden justify-self-end px-3 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500 sm:block">
            Project {project.number}
          </span>
        </nav>
      </header>

      <div className="container-shell relative z-10 pb-16 pt-28 md:pb-24 md:pt-32">
        <motion.section initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.78, ease }}>
          <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-[10px] sm:tracking-[0.22em]">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <div className="grid gap-7 py-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:py-12">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -22 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease }}
                className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#ffd400]"
              >
                Independent club identity / {project.number}
              </motion.p>
              <h1 className="text-[clamp(4.6rem,14vw,13rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
                <motion.span initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08, ease }} className="block">
                  Rise
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.18, ease }}
                  className="block text-[#8fa0ff]"
                >
                  Club
                </motion.span>
              </h1>
            </div>
            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">{project.introduction}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.services.slice(0, 3).map((service) => (
                  <span key={service} className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[9px] uppercase tracking-[0.13em] text-zinc-400">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#010080] p-2 shadow-[0_36px_120px_rgba(0,0,40,0.48)] md:rounded-[3rem] md:p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[#010080] md:aspect-[16/8.4] md:rounded-[2.35rem]">
              <Image src={project.cover} alt={`${project.title} identity cover`} fill priority quality={90} sizes="(max-width: 768px) 94vw, 88vw" className="object-cover" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(255,212,0,0.13),transparent_30%),linear-gradient(110deg,rgba(1,0,128,0.02),rgba(1,0,128,0.3))]" />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-full border border-white/15 bg-[#01003f]/45 px-5 py-3 backdrop-blur-xl md:inset-x-7 md:bottom-7">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75">Born to shine</span>
                <span className="size-2 rounded-full bg-[#ffd400] shadow-[0_0_22px_#ffd400]" />
              </div>
            </div>
          </div>
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
                <dt className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">{label}</dt>
                <dd className="text-zinc-300">{value}</dd>
              </div>
            ))}
          </dl>

          <div>
            <p className="max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              An identity designed to feel optimistic, expressive, and impossible to overlook.
            </p>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">{project.contribution}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span key={service} className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[10px] text-zinc-400">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <section className="py-12 md:py-20">
          <Reveal className="mb-8 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ffd400]">Identity direction</p>
              <h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">Rise, light, and forward motion.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400 md:text-right md:text-base">
              A distinctive wordmark paired with a rising sun turns the club name into a direct visual idea: energy arriving, talent emerging, and a new day beginning.
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <Reveal className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#010080] p-8 shadow-[0_30px_100px_rgba(0,0,45,0.34)] md:min-h-[38rem] md:rounded-[2.6rem] md:p-12">
              <div className="absolute -right-[18%] -top-[28%] size-[70%] rounded-full border border-[#ffd400]/25 shadow-[0_0_90px_rgba(255,212,0,0.1)]" />
              <div className="relative grid h-full place-items-center">
                <Image src={project.logo} alt="Rise Club primary logo" width={1000} height={1000} quality={90} className="w-full max-w-[48rem] scale-[1.35] object-contain" />
              </div>
              <p className="absolute bottom-7 left-8 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 md:left-12">Primary logo</p>
            </Reveal>

            <div className="grid gap-5">
              <Reveal delay={0.06} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:rounded-[2.6rem] md:p-9">
                <div className="flex items-center gap-2 text-[#ffd400]"><Sparkles size={16} /><span className="text-[9px] font-semibold uppercase tracking-[0.2em]">Core idea</span></div>
                <p className="mt-8 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">A warm symbol inside a confident blue world.</p>
                <p className="mt-5 text-sm leading-relaxed text-zinc-400">The custom lettering brings personality; the half-sun adds optimism and makes the mark easy to recognise across digital and physical formats.</p>
              </Reveal>

              <Reveal delay={0.12} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:rounded-[2.6rem] md:p-9">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">Colour system</p>
                <div className="mt-7 grid gap-3">
                  {project.palette.map((colour) => (
                    <div key={colour.value} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 p-3">
                      <div className="flex items-center gap-3">
                        <span className="size-9 rounded-xl border border-white/15" style={{ backgroundColor: colour.value }} />
                        <span className="text-sm font-medium text-zinc-200">{colour.name}</span>
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500">{colour.value}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-t border-white/15">
          {project.collections.map((collection, collectionIndex) => (
            <section key={collection.id} id={collection.id} className="border-b border-white/15 py-12 last:border-b-0 md:py-20">
              <Reveal className="mb-9 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    <span className="text-[#ffd400]">0{collectionIndex + 1}</span>
                    <span>{collection.eyebrow}</span>
                  </div>
                  <h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">{collection.title}</h2>
                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">{collection.description}</p>
                </div>
                <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                  <span>{collection.items.length} visuals</span><span className="h-px w-8 bg-white/15" /><span>Selected work</span>
                </div>
              </Reveal>

              <div className={cn("grid items-start gap-5", collection.id === "launch-posters" ? "md:grid-cols-2" : "sm:grid-cols-2 xl:grid-cols-3")}>
                {collection.items.map((artwork, artworkIndex) => (
                  <ArtworkCard key={artwork.src} artwork={artwork} index={artworkIndex} onOpen={() => setSelectedArtwork(artwork)} />
                ))}
              </div>
            </section>
          ))}
        </section>

        <section className="pb-12 pt-8 md:pb-20 md:pt-10">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#010080]/45 px-6 py-9 shadow-[0_32px_100px_rgba(0,0,0,0.28)] backdrop-blur-md md:rounded-[3rem] md:px-10 md:py-12 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute -right-20 -top-40 size-[32rem] rounded-full bg-[#ffd400]/15 blur-[110px]" />
            <div className="relative z-10">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#ffd400]">Project outcome</p>
              <h2 className="mt-4 max-w-6xl text-balance text-[clamp(2.8rem,7.2vw,7.2rem)] font-semibold uppercase leading-[0.86] tracking-[-0.055em]">
                One voice. Many ways to rise.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
                A recognisable foundation that carries the same optimism from a social post to an event space, while staying flexible enough for the club’s next chapter.
              </p>

              <div className="mt-10 grid border-y border-white/12 sm:grid-cols-3">
                {[
                  [`${totalVisuals}+`, "Selected visuals"],
                  ["03", "Content families"],
                  [project.year, "Season"],
                ].map(([value, label], index) => (
                  <div key={label} className={cn("py-6 sm:px-6 sm:py-8", index > 0 && "border-t border-white/12 sm:border-l sm:border-t-0", index === 0 && "sm:pl-0")}>
                    <p className="text-4xl font-semibold tracking-tight text-paper md:text-5xl">{value}</p>
                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Link href="/#work" className="group inline-flex w-fit items-center gap-2 rounded-full px-1 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400 transition-colors hover:text-paper">
                  <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> Back to work
                </Link>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-paper backdrop-blur-xl transition-colors hover:bg-white/15">
                  Start a project <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      <AnimatePresence>
        {selectedArtwork && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true" aria-label={selectedArtwork.title}>
            <button type="button" className="absolute inset-0 cursor-zoom-out bg-[#010018]/94 backdrop-blur-2xl" onClick={() => setSelectedArtwork(null)} aria-label="Close artwork preview" />
            <motion.figure
              initial={{ opacity: 0, y: 24, scale: 0.975 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.985 }}
              transition={{ duration: 0.38, ease }}
              className="relative z-10 flex max-h-[94svh] max-w-[94vw] flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#070720] shadow-[0_40px_140px_rgba(0,0,0,0.75)]"
            >
              <button type="button" onClick={() => setSelectedArtwork(null)} className="absolute right-3 top-3 z-20 grid size-11 place-items-center rounded-full border border-white/15 bg-[#010080]/70 text-paper backdrop-blur-xl transition-colors hover:bg-white/15" aria-label="Close artwork preview">
                <X size={18} />
              </button>
              <div className="min-h-0 flex-1 overflow-auto bg-black/20">
                <Image src={selectedArtwork.src} alt={selectedArtwork.title} width={selectedArtwork.width} height={selectedArtwork.height} quality={90} sizes="94vw" className="mx-auto h-auto max-h-[84svh] w-auto max-w-full object-contain" loading="eager" />
              </div>
              <figcaption className="flex items-center justify-between gap-5 border-t border-white/10 px-5 py-4 sm:px-6">
                <span className="text-sm font-medium text-paper sm:text-base">{selectedArtwork.title}</span>
                <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500 sm:block">{selectedArtwork.width} × {selectedArtwork.height}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
