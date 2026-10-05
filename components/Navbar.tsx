"use client";

import Image from "next/image";
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

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 pt-5"
    >
      <motion.nav
        className={`glass-panel container-shell relative z-20 flex max-w-6xl items-center justify-between rounded-full px-2.5 py-2 md:px-3 ${
          scrolled ? "nav-glass--scrolled" : ""
        }`}
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="group inline-flex items-center"
          onClick={() => setOpen(false)}
          aria-label={`${siteConfig.name} home`}
        >
          <span className="relative grid h-10 w-[4.5rem] place-items-center overflow-hidden rounded-full border border-white/20 bg-paper px-3 shadow-lg shadow-black/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.03] group-hover:shadow-electric/20">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={493}
              height={266}
              priority
              className="h-7 w-auto object-contain"
            />
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
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-0 cursor-default bg-[#02030a]/60 backdrop-blur-[7px] md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.985 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mobile-menu-panel container-shell relative z-10 mt-2 overflow-hidden rounded-[2rem] p-2 md:hidden"
            >
              <div className="flex flex-col">
                {navigation.map((link, index) => (
                  <motion.a
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.055, duration: 0.35 }}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="group flex min-h-16 items-center justify-between rounded-[1.45rem] border-b border-white/[0.08] px-5 text-2xl font-semibold tracking-tight text-paper transition-all last:border-0 hover:bg-white/[0.07] hover:px-6 hover:text-white active:scale-[0.985]"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-[10px] tracking-[0.16em] text-zinc-500 transition-colors group-hover:text-electric">
                      0{index + 1}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
