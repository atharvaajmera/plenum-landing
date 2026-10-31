"use client";

import { useEffect } from "react";

/* Progressive enhancement only. Content is fully visible without JS;
   this adds scroll-reveal + the nav's scrolled state on top. */
export default function Enhancements() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    root.classList.add("js");

    // Stagger indices for grouped reveals
    document
      .querySelectorAll<HTMLElement>("[data-reveal-stagger]")
      .forEach((group) => {
        Array.from(group.children).forEach((child, i) => {
          (child as HTMLElement).style.setProperty("--i", String(i));
        });
      });

    let io: IntersectionObserver | null = null;
    const revealTargets = document.querySelectorAll<HTMLElement>(
      "[data-reveal], [data-reveal-stagger]"
    );

    if (reduce) {
      revealTargets.forEach((el) => el.classList.add("is-in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
      );
      revealTargets.forEach((el) => io!.observe(el));
    }

    // Nav scrolled state
    const nav = document.querySelector<HTMLElement>("[data-nav]");
    const onScroll = () => {
      if (nav) nav.dataset.scrolled = window.scrollY > 12 ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
