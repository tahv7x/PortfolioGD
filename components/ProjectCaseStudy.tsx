"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/portfolio";

type Artwork = {
  title: string;
  src: string;
  width: number;
  height: number;
};

type CaseStudy = {
  slug: string;
  number: string;
  shortName: string;
  logo: string | null;
  title: string;
  year: string;
  client: string;
  role: string;
  category: string;
  introduction: string;
  contribution: string;
  services: readonly string[];
  gallery: readonly {
    id: string;
    title: string;
    note: string;
    layout: "wide" | "half";
    image: string | null;
    width: number | null;
    height: number | null;
    details: readonly string[];
  }[];
  collections: readonly {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    format: string;
    items: readonly Artwork[];
  }[];
};

export function ProjectCaseStudy({ project }: { project: CaseStudy }) {
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
    <main className="ambient-page relative min-h-screen overflow-clip bg-ink-950 text-paper">
      <header className="fixed inset-x-0 top-0 z-50 pt-4">
        <nav
          className={`glass-panel container-shell grid grid-cols-[1fr_auto_1fr] items-center rounded-full px-2.5 py-2.5 ${
            scrolled ? "nav-glass--scrolled" : ""
          }`}
          aria-label="Project navigation"
        >
          <div className="justify-self-start">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-300 transition-colors hover:bg-white/[0.07] hover:text-paper"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              Back to work
            </Link>
          </div>

          <div className="col-start-2">
            <Link href="/" aria-label={`${siteConfig.name} home`}>
              <span className="grid h-9 w-16 place-items-center overflow-hidden rounded-full bg-paper px-3 shadow-lg shadow-black/25 transition-transform duration-300 hover:scale-[1.04]">
                <Image src={siteConfig.logo} alt={`${siteConfig.name} logo`} width={493} height={266} className="h-6 w-auto" />
              </span>
            </Link>
          </div>

          <span className="hidden justify-self-end px-3 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500 sm:block">
            Project {project.number}
          </span>
        </nav>
      </header>

      <div className="container-shell relative z-10 pb-16 pt-28 md:pb-24 md:pt-32">
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <div className="grid gap-8 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-12">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-electric">
                Selected project / {project.number}
              </p>
              <h1 className="max-w-5xl text-balance text-[clamp(3.25rem,8.6vw,8.75rem)] font-black uppercase leading-[0.84] tracking-display [word-spacing:0.12em]">
                {project.title}
              </h1>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg lg:justify-self-end">
              {project.introduction}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#090b1b] p-3 shadow-[0_32px_100px_rgba(0,0,0,0.42)] md:rounded-[3rem] md:p-4">
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.45rem] bg-[radial-gradient(circle_at_68%_20%,rgba(61,90,254,0.65),transparent_35%),linear-gradient(145deg,#12183c,#05060f_65%)] md:aspect-[16/8.5] md:rounded-[2.4rem]">
              <div className="absolute -right-[8%] -top-[35%] size-[70%] rounded-full border border-electric/30 shadow-[0_0_100px_rgba(61,90,254,0.2)]" />
              <div className="relative flex size-full flex-col items-center justify-center px-[12%] py-[10%] text-center">
                {project.logo ? (
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    width={561}
                    height={592}
                    unoptimized
                    className="max-h-[70%] w-auto max-w-[72%] object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.42)]"
                  />
                ) : (
                  <p className="text-[clamp(6rem,22vw,20rem)] font-black leading-none tracking-display text-paper">
                    {project.shortName}
                  </p>
                )}
                <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
                  Club identity · 2025–2026
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 border-b border-white/15 py-12 md:py-16 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 text-xs md:grid-cols-1">
            {[
              ["Client", project.client],
              ["Role", project.role],
              ["Year", project.year],
              ["Category", project.category],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">{label}</p>
                <p className="text-zinc-300">{value}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Building a recognisable visual language for university sport.
            </p>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
              {project.contribution}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span key={service} className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[10px] text-zinc-400">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <section className="py-12 md:py-16">
          <div className="mb-8 flex items-end justify-between border-b border-white/15 pb-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">Identity system</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">The visual foundation.</h2>
            </div>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600 sm:block">Brand guidelines / 01</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {project.gallery.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
                className={item.layout === "wide" ? "md:col-span-2" : ""}
              >
                {item.image && item.width && item.height ? (
                  <div className={item.layout === "wide" ? "mx-auto max-w-5xl" : ""}>
                    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={item.width}
                        height={item.height}
                        quality={90}
                        sizes={item.layout === "wide" ? "(min-width: 1280px) 1024px, 92vw" : "(min-width: 768px) 46vw, 92vw"}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <div className={`relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] ${item.layout === "wide" ? "aspect-[16/8.5]" : "aspect-[4/5]"}`}>
                    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(61,90,254,0.13),transparent_52%)]">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">Add image / {item.id}</span>
                    </div>
                  </div>
                )}
                <div className={item.layout === "wide" ? "mx-auto max-w-5xl px-2 pb-3 pt-5" : "px-2 pb-3 pt-4"}>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{item.title}</h3>
                    <span className="font-mono text-[9px] text-zinc-600">0{index + 1}</span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">{item.note}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.details.map((detail) => (
                      <span key={detail} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-zinc-500">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/15 pb-0 pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 pb-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-electric">Social content system</p>
              <h2 className="mt-3 text-5xl font-semibold leading-[0.94] tracking-tight md:text-7xl">Designed for every moment.</h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg lg:justify-self-end">
              From the first fixture announcement to the final whistle, each format has its own role while staying part of one recognisable CSK visual language.
            </p>
          </motion.div>

          <div>
            {project.collections.map((collection, collectionIndex) => (
              <section
                key={collection.id}
                id={collection.id}
                className="border-t border-white/15 py-12 first:border-t-0 first:pt-0 last:pb-8 md:py-16 md:last:pb-10"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-8 grid gap-5 md:grid-cols-[1fr_auto] md:items-end"
                >
                  <div>
                    <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      <span className="text-electric">0{collectionIndex + 1}</span>
                      <span>{collection.eyebrow}</span>
                    </div>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{collection.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">{collection.description}</p>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                    <span>{collection.items.length} visuals</span>
                    <span className="h-px w-8 bg-white/15" />
                    <span>{collection.format}</span>
                  </div>
                </motion.div>

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {collection.items.map((artwork, artworkIndex) => (
                    <motion.button
                      key={artwork.src}
                      type="button"
                      initial={{ opacity: 0, y: 36 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -7 }}
                      viewport={{ once: true, amount: 0.12 }}
                      transition={{
                        opacity: { duration: 0.55, delay: Math.min(artworkIndex * 0.045, 0.2) },
                        y: { duration: 0.55, delay: Math.min(artworkIndex * 0.045, 0.2), ease: [0.22, 1, 0.36, 1] },
                      }}
                      onClick={() => setSelectedArtwork(artwork)}
                      className={`group min-w-0 cursor-zoom-in text-left ${
                        collection.items.length % 3 === 1 && artworkIndex === collection.items.length - 1
                          ? "xl:col-start-2"
                          : ""
                      }`}
                      aria-label={`Open ${artwork.title}`}
                    >
                      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.035] shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition-colors duration-500 group-hover:border-electric/35">
                        <Image
                          src={artwork.src}
                          alt={artwork.title}
                          width={artwork.width}
                          height={artwork.height}
                          quality={90}
                          sizes="(min-width: 1280px) 30vw, (min-width: 640px) 47vw, 92vw"
                          className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.018]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060f]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <span className="absolute bottom-4 right-4 grid size-10 translate-y-2 place-items-center rounded-full border border-white/15 bg-[#05060f]/65 text-paper opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <Maximize2 size={15} />
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-4 px-1 pb-2 pt-4">
                        <span className="text-sm font-medium text-zinc-200 md:text-base">{artwork.title}</span>
                        <span className="font-mono text-[9px] text-zinc-600">{String(artworkIndex + 1).padStart(2, "0")}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="border-t border-white/15 pb-12 pt-8 md:pb-20 md:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.035] px-6 py-9 shadow-[0_32px_100px_rgba(0,0,0,0.28)] md:rounded-[3rem] md:px-10 md:py-12 lg:px-14 lg:py-14"
          >
            <div className="pointer-events-none absolute -right-24 -top-32 size-96 rounded-full bg-electric/15 blur-[100px]" />

            <div className="relative z-10">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-electric">Project impact</p>
              <h2 className="mt-4 max-w-5xl text-balance text-[clamp(2.7rem,7vw,7rem)] font-semibold uppercase leading-[0.88] tracking-[-0.055em]">
                One identity. Every match. Every moment.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
                A flexible identity built to support CSK from tournament announcements to final results and player recognition.
              </p>

              <div className="mt-10 grid border-y border-white/12 sm:grid-cols-3">
                {[
                  [`${totalVisuals}+`, "Visuals created"],
                  [String(project.collections.length).padStart(2, "0"), "Content systems"],
                  [project.year, "Season"],
                ].map(([value, label], index) => (
                  <div
                    key={label}
                    className={`py-6 sm:px-6 sm:py-8 ${index > 0 ? "border-t border-white/12 sm:border-l sm:border-t-0" : ""} ${index === 0 ? "sm:pl-0" : ""}`}
                  >
                    <p className="text-4xl font-semibold tracking-tight text-paper md:text-5xl">{value}</p>
                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/#work"
                  className="group inline-flex w-fit items-center gap-2 rounded-full px-1 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400 transition-colors hover:text-paper"
                >
                  <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                  Back to work
                </Link>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="glass-button group inline-flex w-fit items-center gap-3 rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em]"
                >
                  Start a project
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={selectedArtwork.title}
          >
            <button
              type="button"
              className="absolute inset-0 cursor-zoom-out bg-[#02030a]/92 backdrop-blur-2xl"
              onClick={() => setSelectedArtwork(null)}
              aria-label="Close artwork preview"
            />

            <motion.figure
              initial={{ opacity: 0, y: 24, scale: 0.975 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.985 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex max-h-[94svh] max-w-[94vw] flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#080a18] shadow-[0_40px_140px_rgba(0,0,0,0.75)]"
            >
              <button
                type="button"
                onClick={() => setSelectedArtwork(null)}
                className="absolute right-3 top-3 z-20 grid size-11 place-items-center rounded-full border border-white/15 bg-[#05060f]/70 text-paper backdrop-blur-xl transition-colors hover:bg-white/15"
                aria-label="Close artwork preview"
              >
                <X size={18} />
              </button>

              <div className="min-h-0 flex-1 overflow-auto bg-black/20">
                <Image
                  src={selectedArtwork.src}
                  alt={selectedArtwork.title}
                  width={selectedArtwork.width}
                  height={selectedArtwork.height}
                  quality={90}
                  sizes="94vw"
                  className="mx-auto max-h-[84svh] h-auto w-auto max-w-full object-contain"
                  priority
                />
              </div>
              <figcaption className="flex items-center justify-between gap-5 border-t border-white/10 px-5 py-4 sm:px-6">
                <span className="text-sm font-medium text-paper sm:text-base">{selectedArtwork.title}</span>
                <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500 sm:block">
                  {selectedArtwork.width} × {selectedArtwork.height}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
