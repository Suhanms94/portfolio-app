"use client";

import { useRef } from "react";
import Image from "next/image";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import { useGsapStorytelling } from "@/hooks/useGsapStorytelling";
import { infoLinks, scrollSections } from "@/lib/portfolio-data";

export function PortfolioExperience() {
  const rootRef = useRef<HTMLElement>(null);

  useLenisScroll();
  useGsapStorytelling(rootRef);

  return (
    <main ref={rootRef} className="portfolio-shell">
      <header className="ek-header" data-reveal>
        <a href="#top" className="ek-brand">
          YourNamePhoto
        </a>
        <nav className="ek-nav" aria-label="Primary">
          {infoLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="ek-intro" id="top" data-reveal>
        <p className="ek-kicker">Film and digital photography</p>
        <blockquote className="ek-quote">
          “Come along with me and leave it, get away from it all.”
        </blockquote>
      </section>

      <section className="ek-scroll-gallery" id="gallery">
        {scrollSections.map((section) => {
          if (section.layout === "hero" && section.image && section.alt) {
            return (
              <article className="ek-story ek-story-hero" key={section.id} data-reveal>
                <div className="ek-story-image">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="ek-story-copy">
                  <h1>{section.title}</h1>
                  <p>{section.subtitle}</p>
                </div>
              </article>
            );
          }

          if (section.layout === "full" && section.image && section.alt) {
            return (
              <article className="ek-story ek-story-full" key={section.id} data-reveal>
                <div className="ek-story-image">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="ek-meta">
                  <h2>{section.title}</h2>
                  <p>{section.caption}</p>
                </div>
              </article>
            );
          }

          if (section.layout === "split" && section.left && section.right) {
            return (
              <article className="ek-story ek-story-split" key={section.id} data-reveal>
                {[section.left, section.right].map((entry) => (
                  <div className="ek-card" key={`${section.id}-${entry.title}`}>
                    <div className="ek-image-wrap">
                      <Image
                        src={entry.image}
                        alt={entry.alt}
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="ek-meta">
                      <h2>{entry.title}</h2>
                      <p>{entry.medium}</p>
                    </div>
                  </div>
                ))}
              </article>
            );
          }

          return (
            <article className="ek-story ek-story-quote" key={section.id} data-reveal>
              <blockquote>{section.title}</blockquote>
            </article>
          );
        })}
      </section>

      <section className="ek-info" id="info" data-reveal>
        <div className="ek-info-copy">
          <p>
            This homepage is built as a placeholder-first scroll experience. Replace
            the images in `public`, update the text in the data file, and the site
            will keep the same flow.
          </p>
        </div>
        <div className="ek-contact" id="contact">
          <a href="mailto:yourname@example.com">yourname@example.com</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </section>

      <footer className="ek-footer">
        <span>© 2026 Your Name</span>
        <span>Photography</span>
        <span>Info</span>
      </footer>
    </main>
  );
}
