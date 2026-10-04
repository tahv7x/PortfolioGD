"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  index: string;
};

export function SectionHeading({ eyebrow, title, index }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 border-t border-white/15 pt-5 text-center md:mb-10"
    >
      <div className="mb-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
        <p>{eyebrow}</p>
        <p className="font-mono text-[10px] font-normal tracking-normal text-zinc-500">({index})</p>
      </div>
      <h2 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-[0.95] tracking-display md:text-6xl lg:text-7xl">
        {title}
      </h2>
    </motion.div>
  );
}
