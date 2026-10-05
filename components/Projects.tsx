"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Eye } from "lucide-react";
import { useState } from "react";
import { projectFilters, projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const availableFilters = projectFilters.filter(
    (filter) => filter === "All" || projects.some((project) => project.filter === filter),
  );
  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.filter === activeFilter,
  );

  return (
    <section id="work" className="container-shell relative z-10 scroll-mt-28 py-10 md:py-14">
      <SectionHeading eyebrow="Selected projects" title="Work made to move people." index="01" />

      {projects.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel no-scrollbar mx-auto mb-8 flex w-full gap-1 overflow-x-auto rounded-full p-1.5 md:mb-10 md:w-fit"
          role="group"
          aria-label="Filter projects"
        >
          {availableFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] transition-all duration-300 md:px-5",
                activeFilter === filter
                  ? "bg-paper text-ink-950 shadow-lg shadow-black/20"
                  : "text-zinc-400 hover:bg-white/[0.08] hover:text-white",
              )}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      )}

      <div className="grid items-start gap-6 md:grid-cols-12 md:gap-8">
        <AnimatePresence mode="popLayout">
        {visibleProjects.map((project, index) => {
          const isWideCard =
            visibleProjects.length % 2 === 1 && index === visibleProjects.length - 1;
          const monogram = project.title
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 3);

          return (
          <motion.article
            key={project.title}
            layout
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "group rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-2 shadow-2xl shadow-black/20 transition-colors hover:border-white/20 hover:bg-white/[0.05]",
              isWideCard ? "md:col-span-12" : "md:col-span-6",
            )}
          >
            <a
              href={project.slug ? `/projects/${project.slug}` : "#contact"}
              className="block"
              aria-label={`View ${project.title} case study`}
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-[1.35rem] bg-ink-800",
                  isWideCard ? "aspect-[4/3] md:aspect-[2.35/1]" : "aspect-[4/3]",
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(61,90,254,0.7),transparent_38%),linear-gradient(145deg,#151d48,#05060f_70%)]" />
                <div className="absolute -right-1/3 -top-1/4 size-[85%] rounded-full border border-white/10 shadow-[0_0_90px_rgba(61,90,254,0.24)]" />
                {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      fill
                      unoptimized
                      sizes="(min-width: 768px) 60vw, 100vw"
                      className={cn(
                        "object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.38)] transition-transform duration-700 ease-out group-hover:scale-[1.045]",
                        isWideCard ? "p-[14%] md:p-[8%]" : "p-[19%]",
                      )}
                    />
                ) : (
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="text-[clamp(5rem,12vw,10rem)] font-black uppercase leading-none tracking-display text-paper/90 drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-700 group-hover:scale-[1.045]">
                      {monogram}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 md:p-5">
                  <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 font-mono text-[10px] backdrop-blur-xl">
                    {project.number} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <span className="flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] opacity-0 backdrop-blur-xl transition-opacity duration-300 group-hover:opacity-100">
                    <Eye size={13} /> View project
                  </span>
                </div>
                <span className="absolute bottom-5 right-5 grid size-12 translate-y-2 place-items-center rounded-full bg-paper text-ink-950 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              <div className="p-4 md:p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-electric md:text-3xl">
                    {project.title}
                  </h3>
                  <span className="pt-1 font-mono text-xs text-zinc-500">{project.year}</span>
                </div>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-electric">{project.category}</p>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-300">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span key={service} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] text-zinc-400">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </motion.article>
          );
        })}
        </AnimatePresence>
      </div>
    </section>
  );
}
