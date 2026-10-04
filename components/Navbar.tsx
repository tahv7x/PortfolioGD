"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (href: string) => {
    setOpen(false);
    window.history.replaceState(null, "", href);

    // Let the mobile menu finish collapsing before measuring the destination.
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 350);
  };

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "pt-3" : "pt-5"}`}
    >
      <nav
        className={`glass-panel container-shell flex items-center justify-between rounded-full px-2.5 py-2 transition-all duration-500 md:px-3 ${
          scrolled ? "nav-glass--scrolled max-w-5xl" : "max-w-6xl"
        }`}
        aria-label="Main navigation"
      >
        <a href="#top" className="group inline-flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-full bg-white text-[10px] font-black text-ink-950 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
            {siteConfig.initials}
          </span>
          <span className="hidden text-xs font-bold uppercase tracking-[0.22em] sm:block">
            {siteConfig.name}®
          </span>
        </a>

        <div className="hidden items-center rounded-full border border-white/[0.07] bg-black/15 p-1 md:flex">
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-[10px] text-zinc-300 lg:flex">
          <span className="size-2 animate-pulse rounded-full bg-electric" />
          {siteConfig.availability}
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.07] shadow-inner shadow-white/5 transition-colors hover:bg-white/15 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-panel container-shell mt-2 overflow-hidden rounded-[2rem] md:hidden"
          >
            <div className="container-shell flex flex-col py-6">
              {navigation.map((link, index) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="border-b border-white/10 px-2 py-4 text-3xl font-semibold tracking-tight transition-colors last:border-0 hover:text-electric"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
