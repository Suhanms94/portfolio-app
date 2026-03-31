"use client";

import { motion, Variants } from "framer-motion";
import { PremiumImage } from "./ui/PremiumImage";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  year: string;
  aspectRatio: "16/9" | "4/5";
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/asthetic1.jpeg",
    alt: "Editorial fashion photography - minimalist composition with cinematic lighting",
    title: "Editorial Series",
    category: "Editorial",
    year: "2026",
    aspectRatio: "16/9",
  },
  {
    id: 2,
    src: "/car1.jpeg",
    alt: "Architecture photography - contemporary structure documentation",
    title: "Structural Forms",
    category: "Architecture",
    year: "2025",
    aspectRatio: "4/5",
  },
  {
    id: 3,
    src: "/cimematic2.jpeg",
    alt: "Cinematic lighting study - dramatic composition with professional color grading",
    title: "Cinematic Studies",
    category: "Cinematic",
    year: "2025",
    aspectRatio: "4/5",
  },
];

export default function PortfolioGallery() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-[120px]" id="work" aria-label="Portfolio gallery">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="mb-[80px]"
      >
        <h2 className="mb-4 text-[32px] md:text-[42px] font-semibold leading-tight">Selected Works</h2>
        <div className="h-[2px] w-[60px] bg-[#ea5d4c]" />
      </motion.div>

      <div className="flex flex-col gap-[120px]">
        {/* Full width */}
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="flex flex-col"
        >
          <div className="relative aspect-[16/9] w-full">
            <PremiumImage 
              src={galleryItems[0].src} 
              alt={galleryItems[0].alt} 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
              className="h-full w-full" 
            />
          </div>
          <div className="mt-6 flex flex-col gap-2 md:flex-row md:justify-between md:items-center text-[14px] text-[#A1A1A1]">
            <span className="font-medium">{galleryItems[0].title}</span>
            <div className="flex gap-8">
              <span>{galleryItems[0].category}</span>
              <span>{galleryItems[0].year}</span>
            </div>
          </div>
        </motion.article>

        {/* 2-Column Offset */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-[24px]">
          {galleryItems.slice(1).map((item) => (
            <motion.article
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="flex flex-col md:mt-[120px]"
            >
              <div className={`relative w-full ${item.aspectRatio === "16/9" ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
                <PremiumImage 
                  src={item.src} 
                  alt={item.alt} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 48vw, 600px"
                  className="h-full w-full" 
                />
              </div>
              <div className="mt-6 flex flex-col gap-2 md:flex-row md:justify-between md:items-center text-[14px] text-[#A1A1A1]">
                <span className="font-medium">{item.title}</span>
                <div className="flex gap-8">
                  <span>{item.category}</span>
                  <span>{item.year}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
