"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "./SiteHeader";
import { PageMotion } from "./PageMotion";
import {
  closingQuote,
  featuredVisuals,
  galleryFlow,
  heroStatement,
} from "@/lib/reference-portfolio-data";

gsap.registerPlugin(ScrollTrigger);

export function ReferencePortfolio() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ref-hero-word",
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.08,
          ease: "power4.out",
          delay: 0.1,
        }
      );

      gsap.fromTo(
        ".ref-hero-tagline, .ref-hero-divider",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.32,
        }
      );

      gsap.utils.toArray<HTMLElement>("[data-home-section]").forEach((section) => {
        gsap.fromTo(
          section.querySelectorAll<HTMLElement>("[data-home-reveal]"),
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-home-visual]").forEach((visual, index) => {
        gsap.fromTo(
          visual,
          { yPercent: index % 2 === 0 ? -4 : 4 },
          {
            yPercent: index % 2 === 0 ? 4 : -4,
            ease: "none",
            scrollTrigger: {
              trigger: visual,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <PageMotion className="reference-home-page">
      <SiteHeader variant="home" />

      <section className="ref-home-hero-shell" data-home-section data-parallax-section>
        <div className="eth-section-parallax eth-section-parallax-home" data-parallax-layer aria-hidden="true" />
        <div className="ref-home-grid-shell ref-home-story-shell">
          <div className="ref-hero-copy-block">
            <div className="ref-hero-title-stack">
              <div className="ref-hero-mask">
                <span className="ref-hero-word ref-hero-accent">{heroStatement.firstName}</span>
              </div>
              <div className="ref-hero-mask">
                <span className="ref-hero-word ref-hero-accent">{heroStatement.lastName}</span>
              </div>
              <div className="ref-hero-mask">
                <span className="ref-hero-word ref-hero-neutral">{heroStatement.title}</span>
              </div>
            </div>
            <p className="ref-hero-tagline" data-home-reveal>
              {heroStatement.tagline}
            </p>
            <span className="ref-hero-divider" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="ref-home-section" data-home-section data-parallax-section>
        <div className="eth-section-parallax eth-section-parallax-home" data-parallax-layer aria-hidden="true" />
        <div className="ref-home-grid-shell ref-home-story-shell">
          <div className="ref-feature-visuals">
            {featuredVisuals.map((item) => (
              <article
                key={item.title}
                className={`ref-grid-card ref-feature-card ${item.tone === "bw" ? "is-bw" : ""}`}
                data-immersive-card
                data-home-reveal
              >
                <div className="ref-home-image ref-feature-image" data-home-visual>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="ref-home-meta">
                  <div className="ref-home-copy">
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.film}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ref-home-section" data-home-section data-parallax-section>
        <div className="eth-section-parallax eth-section-parallax-gallery" data-parallax-layer aria-hidden="true" />
        <div className="ref-home-grid-shell ref-home-story-shell">
          <div className="ref-gallery-flow">
            {galleryFlow.map((group, index) => (
              <div
                key={`${group.layout}-${index}`}
                className={`ref-gallery-row ref-gallery-row-${group.layout}`}
                data-home-reveal
              >
                {group.items.map((item, itemIndex) => (
                  <article
                    key={`${item.title}-${itemIndex}`}
                    className="ref-grid-card ref-gallery-flow-card"
                    data-immersive-card
                  >
                    <div className="ref-home-image ref-gallery-flow-image" data-home-visual>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes={
                          group.layout === "full"
                            ? "100vw"
                            : "(max-width: 900px) 100vw, 50vw"
                        }
                        className="object-cover"
                      />
                    </div>
                    <div className="ref-home-meta">
                      <div className="ref-home-copy">
                        <div>
                          <strong>{item.title}</strong>
                          <p>{item.film}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ref-home-section" data-home-section data-parallax-section>
        <div className="eth-section-parallax eth-section-parallax-simple" data-parallax-layer aria-hidden="true" />
        <div className="ref-home-grid-shell ref-home-story-shell">
          <div className="ref-home-quote ref-home-quote-only">
            <p data-home-reveal>&quot;{closingQuote.quote}&quot;</p>
            <span data-home-reveal>{closingQuote.author}</span>
          </div>
        </div>
      </section>

      <section className="ref-home-section ref-home-cta-section" data-home-section data-parallax-section>
        <div className="eth-section-parallax eth-section-parallax-home" data-parallax-layer aria-hidden="true" />
        <div className="ref-home-grid-shell ref-home-story-shell">
          <div className="ref-home-quote">
            <Link
              href="/gallery"
              className="ref-gallery-button"
              data-cursor-label="Open"
              data-home-reveal
            >
              View Full Gallery &#8594;
            </Link>
          </div>
        </div>
      </section>
    </PageMotion>
  );
}
