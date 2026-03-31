"use client";

import { motion } from "framer-motion";
import { PremiumImage } from "./ui/PremiumImage";

export default function About() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-[120px]" id="about" aria-label="About the photographer">
      <div className="grid grid-cols-1 gap-[80px] md:grid-cols-2 md:gap-[120px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[3/4] w-full"
        >
          <PremiumImage 
            src="/asthetic3.jpeg" 
            alt="Photographer portrait - Vinay Filmlab founder and creative director" 
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full" 
            priority={false}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h2 className="mb-8 text-[32px] md:text-[42px] leading-tight">About the Artist</h2>
          <div className="flex flex-col gap-6 text-[16px] text-[#A1A1A1] leading-[26px]">
            <p>
              With over a decade of experience in visual storytelling, I focus on capturing the unseen luxury in everyday geometry and the visceral emotion of high-end editorial subject matter.
            </p>
            <p>
              My philosophy is centered around the interplay of shadow and light, bringing a cinematic dimension to photography that transcends the medium. I believe in minimalism, where negative space is as crucial as the subject itself.
            </p>
            <p className="text-[14px] text-[#808080]">
              Specialized in editorial campaigns, architectural documentation, and commercial production for luxury brands globally.
            </p>
          </div>
          <div className="mt-12">
            <h3 className="mb-6 text-[14px] uppercase tracking-widest text-white font-semibold">
              Featured Exhibitions & Awards
            </h3>
            <ul className="flex flex-col gap-4 text-[14px] text-[#A1A1A1]">
              <li className="flex justify-between items-center pb-4 border-b border-[var(--color-border)]">
                <span className="flex-1">Lumière Gallery International Exhibition</span>
                <span className="text-[#ea5d4c] font-medium">2024</span>
              </li>
              <li className="flex justify-between items-center pb-4 border-b border-[var(--color-border)]">
                <span className="flex-1">The Modernist Contemporary Award</span>
                <span className="text-[#ea5d4c] font-medium">2023</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex-1">Featured in Architectural Digest</span>
                <span className="text-[#ea5d4c] font-medium">2023</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
