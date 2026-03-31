"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapStorytelling(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const context = gsap.context(() => {
      const titleLines = gsap.utils.toArray<HTMLElement>("[data-title-line]");
      if (titleLines.length) {
        gsap.fromTo(
          titleLines,
          { yPercent: 120, rotate: 6 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1.25,
            stagger: 0.08,
            ease: "power4.out",
            delay: 0.2,
          }
        );
      }

      const revealItems = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 64, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
            },
          }
        );
      });

      const depthCards = gsap.utils.toArray<HTMLElement>("[data-depth-card]");
      depthCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { yPercent: index % 2 === 0 ? -6 : 6, rotate: index === 1 ? 8 : -6 },
          {
            yPercent: index % 2 === 0 ? 8 : -8,
            rotate: index === 1 ? 4 : -3,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      const fullSections = gsap.utils.toArray<HTMLElement>("[data-full-section]");
      fullSections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0.88 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "bottom 25%",
              scrub: true,
            },
          }
        );
      });

      const storySections = gsap.utils.toArray<HTMLElement>("[data-story-section]");
      storySections.forEach((section) => {
        const foreground = section.querySelector<HTMLElement>("[data-depth-foreground]");
        const background = section.querySelector<HTMLElement>("[data-depth-background]");

        if (foreground) {
          gsap.fromTo(
            foreground,
            { scale: 1.12, yPercent: -4 },
            {
              scale: 1,
              yPercent: 4,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        if (background) {
          gsap.fromTo(
            background,
            { yPercent: -8, scale: 1.05 },
            {
              yPercent: 8,
              scale: 1.15,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });

      const horizontalRows = gsap.utils.toArray<HTMLElement>("[data-horizontal-row]");
      horizontalRows.forEach((row, index) => {
        gsap.fromTo(
          row,
          { xPercent: index % 2 === 0 ? 6 : -6 },
          {
            xPercent: index % 2 === 0 ? -6 : 6,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, root);

    return () => {
      context.revert();
    };
  }, [rootRef]);
}
