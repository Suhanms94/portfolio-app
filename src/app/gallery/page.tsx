"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/referenceStyle/SiteHeader";
import { PageMotion } from "@/components/referenceStyle/PageMotion";
import { galleryFilters, galleryItems } from "@/lib/route-content";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState(galleryFilters[0]);
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[number] | null>(null);

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter((item) => item.format === activeFilter);

  useEffect(() => {
    if (!selectedItem) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <>
      <SiteHeader />
      <PageMotion className="eth-route-shell eth-route-home-shell">
        <section className="eth-route-home-hero eth-gallery-hero" data-parallax-section>
          <div className="eth-section-parallax eth-section-parallax-route" data-parallax-layer aria-hidden="true" />
          <div className="eth-route-heading eth-gallery-heading" data-page-reveal>
            <div className="eth-home-intro-copy">
              <strong>Gallery</strong>
              <p>
                Browse the collection and filter by mood to find the visual
                language you&apos;re looking for.
              </p>
            </div>
            <span className="eth-gallery-divider" aria-hidden="true" />
          </div>

          <div className="eth-filter-row eth-filter-row-home" data-page-reveal>
            {galleryFilters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={filter === activeFilter ? "is-active" : ""}
                data-cursor-label="Filter"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section className="eth-gallery-grid eth-gallery-grid-home" data-parallax-section>
          <div className="eth-section-parallax eth-section-parallax-gallery" data-parallax-layer aria-hidden="true" />
          {filteredItems.map((item) => (
            <article
              className="eth-gallery-card"
              key={`${item.title}-${item.format}`}
              data-page-reveal
              data-immersive-card
            >
              <button
                type="button"
                className="eth-gallery-image"
                data-cursor-label="View"
                onClick={() => setSelectedItem(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="eth-gallery-photo object-cover"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                <span className="eth-gallery-badge">View</span>
              </button>
              <div className="eth-gallery-meta">
                <h2>{item.title}</h2>
                <p>{item.format}</p>
                <button
                  type="button"
                  className="eth-gallery-view-button"
                  data-cursor-label="View"
                  onClick={() => setSelectedItem(item)}
                >
                  View &#8594;
                </button>
              </div>
            </article>
          ))}
        </section>
      </PageMotion>

      {selectedItem ? (
        <div
          className="eth-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setSelectedItem(null)}
        >
          <button
            type="button"
            className="eth-lightbox-close"
            onClick={() => setSelectedItem(null)}
            aria-label="Close image"
          >
            Close
          </button>
          <div
            className="eth-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="eth-lightbox-media">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <div className="eth-lightbox-meta">
              <strong>{selectedItem.title}</strong>
              <span>{selectedItem.format}</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
