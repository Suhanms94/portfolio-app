"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PageMotion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const immersiveCards = Array.from(
      root.querySelectorAll<HTMLElement>("[data-immersive-card]")
    );

    const cardCleanupFns = immersiveCards.map((card) => {
      const handleMove = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
        const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -7;

        card.style.setProperty("--spotlight-x", `${x}%`);
        card.style.setProperty("--spotlight-y", `${y}%`);
        card.style.setProperty("--tilt-rotate-x", `${rotateX}deg`);
        card.style.setProperty("--tilt-rotate-y", `${rotateY}deg`);
      };

      const handleLeave = () => {
        card.style.setProperty("--spotlight-x", "50%");
        card.style.setProperty("--spotlight-y", "50%");
        card.style.setProperty("--tilt-rotate-x", "0deg");
        card.style.setProperty("--tilt-rotate-y", "0deg");
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);

      return () => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      };
    });

    const context = gsap.context(() => {
      gsap.fromTo(
        ".eth-page-veil",
        { yPercent: 0, autoAlpha: 1 },
        {
          yPercent: -100,
          autoAlpha: 0,
          duration: 1.05,
          ease: "power4.inOut",
          onComplete: () => {
            gsap.set(".eth-page-veil", { display: "none" });
          },
        }
      );

      const lines = gsap.utils.toArray<HTMLElement>("[data-headline-line]");
      if (lines.length) {
        gsap.fromTo(
          lines,
          { yPercent: 120, rotate: 4 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1.1,
            stagger: 0.08,
            ease: "power4.out",
            delay: 0.18,
          }
        );
      }

      const reveals = gsap.utils.toArray<HTMLElement>("[data-page-reveal]");
      if (reveals.length) {
        gsap.fromTo(
          reveals,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.06,
            ease: "power3.out",
            delay: 0.28,
            clearProps: "all",
          }
        );
      }

      const parallaxLayers = gsap.utils.toArray<HTMLElement>("[data-parallax-layer]");
      parallaxLayers.forEach((layer) => {
        gsap.fromTo(
          layer,
          { yPercent: -8, scale: 1.06 },
          {
            yPercent: 8,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: layer.closest("[data-parallax-section]") ?? layer,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, root);

    return () => {
      cardCleanupFns.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className={className}>
      <div className="eth-page-veil" aria-hidden="true" />
      {children}
    </div>
  );
}
