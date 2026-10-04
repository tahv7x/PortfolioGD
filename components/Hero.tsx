"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { siteConfig } from "@/data/portfolio";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -160]);

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

        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.9 }}
            className="mb-3 flex items-center gap-2 text-sm text-zinc-400"
          >
            <Sparkles size={15} className="text-cyan" /> Hi, I am {siteConfig.name}
          </motion.p>
          <h1 className="text-balance">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="hero-graphic block overflow-hidden font-sans font-black uppercase tracking-display"
            >
              Graphic
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="designer-gradient hero-designer font-bodoni block font-medium italic tracking-[-0.055em]"
            >
              Designer
            </motion.span>
          </h1>
        </div>

        <div className="mt-7 grid items-end gap-6 md:mt-10 md:grid-cols-[1fr_auto_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="max-w-md text-base leading-relaxed text-zinc-300 md:text-lg"
          >
            <span className="font-semibold text-electric">Graphic design</span> and{" "}
            <span className="font-semibold text-cyan">UI/UX</span> for brands that want to feel clear, distinctive, and impossible to ignore.
          </motion.p>

          <motion.a
            href="#work"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="glass-button group inline-flex items-center justify-center gap-3 justify-self-start rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-paper transition-all duration-300 md:justify-self-center md:px-6 md:py-3.5"
          >
            View work
            <span className="grid size-8 place-items-center rounded-full bg-paper text-ink-950">
              <ArrowDownRight className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" size={17} />
            </span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="justify-self-end text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-zinc-500"
          >
            Scroll to explore
            <br />Branding · UI/UX · Campaigns
          </motion.div>
        </div>
      </div>
    </section>
  );
}
