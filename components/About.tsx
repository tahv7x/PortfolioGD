"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { highlights } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="container-shell relative z-10 scroll-mt-28 py-10 md:py-14">
      <SectionHeading eyebrow="About me" title="Strategy first. Aesthetics always." index="03" />

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
          className="max-w-xl"
        >
          <p className="text-balance text-2xl font-medium leading-tight tracking-tight text-zinc-100 md:text-4xl">
            I turn <span className="text-electric">brand stories</span> into clear, expressive visual experiences built to be remembered.
          </p>
          <p className="mt-6 max-w-lg leading-relaxed text-zinc-300">
            From identity systems and campaign visuals to <span className="font-semibold text-cyan">interface design</span> and prototypes, I connect strategy with craft. Every choice has a reason, and every screen or graphic is designed to feel unmistakably yours.
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 border-b border-zinc-600 pb-2 text-sm font-bold uppercase tracking-[0.15em] transition-colors hover:border-electric hover:text-electric"
          >
            More about me <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        <div className="grid gap-3">
          {highlights.map((highlight, index) => (
            <motion.article
              key={highlight.label}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.65 }}
              whileHover={{ x: 5 }}
              className="group grid grid-cols-[auto_1fr] items-center gap-5 overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl md:gap-7 md:p-5"
            >
              <span className="grid size-20 place-items-center rounded-[1.25rem] border border-white/10 bg-black/20 text-4xl font-black tracking-display text-paper transition-colors group-hover:border-electric/35 group-hover:text-electric md:size-24 md:text-5xl">
                {highlight.value}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold uppercase tracking-[0.13em] text-zinc-100 md:text-base">
                  {highlight.label}
                </span>
                <span className="mt-2 block max-w-sm text-sm leading-relaxed text-zinc-500">
                  {highlight.detail}
                </span>
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
