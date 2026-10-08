"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";
import { siteConfig } from "@/data/portfolio";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const graphicX = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const designerX = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -48]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 72]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative z-10 flex min-h-[86svh] items-start overflow-hidden pb-6 pt-28 md:pb-8 md:pt-32"
    >
      <motion.div
        style={{ y: orbY }}
        className="pointer-events-none absolute right-[-14rem] top-16 size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(61,90,254,0.22),rgba(26,42,143,0.09)_42%,transparent_72%)] md:right-[-2%] md:size-[48rem]"
      />
      <div className="pointer-events-none absolute -left-40 top-[32%] size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(61,90,254,0.11),transparent_68%)]" />

      <div className="container-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-8 flex items-center justify-between border-b border-white/15 pb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 md:text-xs"
        >
          <span>{siteConfig.role}</span>
          <span className="hidden sm:block">{siteConfig.location}</span>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(22rem,0.82fr)] lg:items-start lg:gap-12">
          <div>
            <motion.h1 style={{ scale: titleScale }} className="origin-left text-balance">
              <span className="block overflow-hidden pb-[0.04em]">
                <motion.span
                  style={{ x: graphicX }}
                  initial={{ y: "112%", rotate: 1.5 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
                  className="hero-graphic block font-sans font-black uppercase tracking-display"
                >
                  Graphic
                </motion.span>
              </span>
              <span className="-mt-[0.04em] block overflow-hidden pb-[0.16em]">
                <motion.span
                  style={{ x: designerX }}
                  initial={{ y: "118%", rotate: -2, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.16, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="designer-gradient hero-designer font-bodoni block font-medium italic tracking-[-0.055em]"
                >
                  Designer
                </motion.span>
              </span>
            </motion.h1>

            <motion.div
              style={{ y: copyY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.72, duration: 0.75 }}
              className="mt-6 max-w-2xl border-l border-electric/60 pl-5 md:mt-8 md:pl-7"
            >
              <p className="text-lg leading-relaxed text-zinc-300 md:text-xl md:leading-relaxed">
                {siteConfig.heroBio}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Graphic Design · UI/UX · Brand Identity · React
              </p>
            </motion.div>

            <motion.a
              style={{ y: copyY }}
              href="#work"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="glass-button group mt-7 inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-paper transition-all duration-300 md:px-6 md:py-3.5"
            >
              View work
              <span className="grid size-8 place-items-center rounded-full bg-paper text-ink-950">
                <ArrowDownRight className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" size={17} />
              </span>
            </motion.a>
          </div>

          <div className="lg:pt-3">
            <motion.div
              style={{ y: portraitY }}
              initial={{ opacity: 0, x: 35, rotate: 1.5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ delay: 0.48, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="group relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/[0.04] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.38)] md:rounded-[3rem] lg:max-w-none"
            >
              <div className="relative size-full overflow-hidden rounded-[1.8rem] md:rounded-[2.55rem]">
                <div className="portrait-backdrop absolute inset-0" />
                <div className="absolute inset-x-[12%] bottom-[4%] h-[22%] rounded-full bg-black/55 blur-3xl" />
                <Image
                  src={siteConfig.portrait}
                  alt={`Portrait of ${siteConfig.name}`}
                  fill
                  loading="eager"
                  unoptimized
                  sizes="(max-width: 1023px) 100vw, 30vw"
                  className="origin-bottom translate-y-2 scale-[0.99] object-contain object-bottom drop-shadow-[0_22px_35px_rgba(0,0,0,0.36)] transition-transform duration-700 group-hover:translate-y-1 group-hover:scale-[1.015]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060f]/45 via-transparent to-white/[0.035]" />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full border border-white/15 bg-[#05060f]/55 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-xl">
                  <span>{siteConfig.name}</span>
                  <span className="flex items-center gap-2 text-[8px] text-zinc-500">
                    Graphic &amp; UI/UX
                    <span className="size-2 rounded-full bg-electric shadow-[0_0_18px_rgba(61,90,254,0.9)]" />
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="mt-4 text-right font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-zinc-500"
            >
              Scroll to explore
              <br />Work · Services · About
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
