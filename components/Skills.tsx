"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Braces, Database, Layers3, PenTool, Shapes, WandSparkles } from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const serviceIcons = [PenTool, Shapes, Layers3, WandSparkles, Braces, Database];

export function Skills() {
  return (
    <section id="skills" className="container-shell relative z-10 scroll-mt-28 py-10 md:py-14">
      <SectionHeading eyebrow="Skills & services" title="Craft across every visual touchpoint." index="03" />

      <div className="border-t border-white/15">
        {services.map((service, index) => {
          const Icon = serviceIcons[index];
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.07, duration: 0.65 }}
              className="group grid gap-5 border-b border-white/15 py-6 transition-colors hover:bg-white/[0.025] md:grid-cols-[0.35fr_1.3fr_1fr_auto] md:items-center md:px-5 md:py-8"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-zinc-600">0{index + 1}</span>
                <Icon className="text-zinc-500 transition-colors group-hover:text-electric" size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{service.title}</h3>
              <div>
                <p className="max-w-md text-sm leading-relaxed text-zinc-300">{service.description}</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-zinc-600">{service.tools.join(" · ")}</p>
              </div>
              <ArrowUpRight className="hidden text-zinc-700 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-paper md:block" />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
