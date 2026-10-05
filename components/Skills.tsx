"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Braces, PanelsTopLeft, PenTool, Shapes } from "lucide-react";
import {
  TbBrandAdobeIllustrator,
  TbBrandAdobePhotoshop,
} from "react-icons/tb";
import { SiFigma, SiReact } from "react-icons/si";
import { services } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const serviceIcons = [PenTool, PanelsTopLeft, Shapes, Braces];

const creativeTools = [
  {
    name: "Photoshop",
    category: "Image editing",
    icon: TbBrandAdobePhotoshop,
    accent: "#31a8ff",
  },
  {
    name: "Illustrator",
    category: "Vector design",
    icon: TbBrandAdobeIllustrator,
    accent: "#ff9a00",
  },
  {
    name: "Figma",
    category: "UI / UX design",
    icon: SiFigma,
    accent: "#a259ff",
  },
  {
    name: "React.js",
    category: "Front-end UI",
    icon: SiReact,
    accent: "#61dafb",
  },
] as const;

export function Skills() {
  return (
    <section id="skills" className="container-shell relative z-10 scroll-mt-28 py-10 md:py-14">
      <SectionHeading eyebrow="Services & skills" title="Craft across every visual touchpoint." index="02" />

      <div className="mb-10 grid grid-cols-2 gap-3 md:mb-14 md:grid-cols-4 md:gap-4">
        {creativeTools.map((tool, index) => {
          const ToolIcon = tool.icon;

          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl md:min-h-44 md:p-6"
            >
              <div
                className="absolute -right-10 -top-10 size-28 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ backgroundColor: tool.accent }}
              />

              <ToolIcon
                aria-hidden="true"
                className="relative mb-10 size-9 transition-transform duration-500 group-hover:scale-110 md:size-10"
                style={{ color: tool.accent }}
              />
              <p className="relative text-base font-semibold tracking-tight md:text-lg">{tool.name}</p>
              <p className="relative mt-1 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                {tool.category}
              </p>
            </motion.div>
          );
        })}
      </div>

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
