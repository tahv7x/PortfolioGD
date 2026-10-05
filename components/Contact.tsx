"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig, socials } from "@/data/portfolio";

export function Contact() {
  return (
    <footer id="contact" className="relative z-10 scroll-mt-20 overflow-hidden py-10 md:py-14">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090b1b]/85 px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:rounded-[3rem] md:px-10 md:py-10 lg:px-14 lg:py-12"
        >
          <div className="pointer-events-none absolute -right-28 -top-28 size-80 rounded-full bg-electric/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 size-72 rounded-full bg-glow/25 blur-[100px]" />

          <div className="relative mb-10 flex items-center justify-between border-b border-white/10 pb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400 md:mb-14">
            <span>Have a project in mind?</span>
            <span className="font-mono tracking-normal text-zinc-600">(04)</span>
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="text-balance text-[clamp(3.35rem,8.8vw,8.5rem)] font-black uppercase leading-[0.82] tracking-display text-paper [word-spacing:0.12em]">
                Let&apos;s create
                <br />
                <span className="font-bodoni font-normal italic normal-case text-electric">something bold.</span>
              </p>
            </div>

            <div className="lg:pb-2">
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-zinc-400 md:text-base">
                Tell me about your idea, your brand, or the experience you want to build. I&apos;ll reply with the next steps.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="glass-button group inline-flex max-w-full items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold tracking-tight text-paper transition-all duration-300 hover:-translate-y-1 md:px-5"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-paper text-ink-950">
                  <Mail size={16} />
                </span>
                <span className="truncate">{siteConfig.email}</span>
                <ArrowUpRight className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
              </a>
            </div>
          </div>

          <div className="relative mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 md:mt-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Connect</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:text-paper"
                  >
                    {social.label}
                    <ArrowUpRight size={12} className="text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric" />
                  </a>
                ))}
              </div>
            </div>

            <p className="text-xs uppercase leading-relaxed tracking-[0.14em] text-zinc-500 md:text-right">
              {siteConfig.role}
              <br />
              {siteConfig.location}
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3 px-1 pt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <a href="#top" className="transition-colors hover:text-paper">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
