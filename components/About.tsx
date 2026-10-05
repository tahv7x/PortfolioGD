"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { highlights } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="container-shell relative z-10 scroll-mt-28 py-10 md:py-14">
      <SectionHeading eyebrow="About the studio" title="Strategy first. Aesthetics always." index="03" />

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

        <div className="grid divide-y divide-white/10 border-y border-white/10">
          {highlights.map(([value, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.65 }}
              className="flex items-center justify-between py-5 md:py-7"
            >
              <span className="text-5xl font-black tracking-display md:text-7xl">{value}</span>
              <span className="max-w-24 text-right text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
