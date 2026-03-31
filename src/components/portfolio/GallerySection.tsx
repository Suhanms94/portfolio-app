"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { GalleryCategory } from "@/lib/portfolio-data";

type GallerySectionProps = {
  categories: GalleryCategory[];
};

export function GallerySection({ categories }: GallerySectionProps) {
  return (
    <section className="gallery-section" id="gallery">
      <div className="section-heading" data-reveal>
        <p className="kicker">Gallery</p>
        <h2>Image-led collections with subtle hover metadata and horizontal drift.</h2>
      </div>

      <div className="gallery-groups">
        {categories.map((category, index) => (
          <div className="gallery-group" key={category.name}>
            <div className="gallery-group-header" data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{category.label}</h3>
            </div>

            <div className="gallery-row" data-horizontal-row>
              {category.items.map((item) => (
                <motion.article
                  key={item.title}
                  className="gallery-card"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="gallery-image-wrap">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="gallery-card-meta" style={{ "--accent": item.accent } as CSSProperties}>
                    <strong>{item.title}</strong>
                    <span>{item.meta}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
