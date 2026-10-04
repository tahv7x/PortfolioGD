"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, socials } from "@/data/portfolio";

export function Contact() {
  return (
    <footer id="contact" className="scroll-mt-20 overflow-hidden bg-paper text-ink-950">
      <div className="container-shell py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-10 flex items-center justify-between border-b border-black/20 pb-5 text-xs font-bold uppercase tracking-[0.22em]">
            <span>Have a project in mind?</span>
            <span>(04)</span>
          </div>

          <p className="text-balance text-[clamp(3.5rem,10vw,10rem)] font-black uppercase leading-[0.82] tracking-display">
            Let&apos;s make
            <br />
            <span className="text-electric">it matter.</span>
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="group mt-10 inline-flex items-center gap-3 border-b-2 border-ink-950 pb-2 text-xl font-semibold tracking-tight transition-colors hover:border-electric hover:text-electric md:text-3xl"
          >
            {siteConfig.email}
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        <div className="mt-12 grid gap-8 border-t border-black/20 pt-7 text-xs font-semibold uppercase tracking-[0.14em] md:mt-14 md:grid-cols-3 md:items-end">
          <p className="leading-relaxed text-black/55">
            Independent graphic & UI/UX designer
            <br />Based in London · Available worldwide
          </p>

          <div className="flex gap-5 md:justify-center">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-electric"
              >
                {social.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between gap-5 md:justify-end">
            <span>© {new Date().getFullYear()} {siteConfig.name}</span>
            <a href="#top" className="transition-colors hover:text-electric">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
