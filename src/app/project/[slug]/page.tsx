"use client";

import { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { PremiumImage } from "@/components/ui/PremiumImage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = use(params);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  // Parallax calculations for the images
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <SmoothScroll>
      <Navbar />
      <main ref={containerRef} className="flex min-h-[200vh] flex-col pt-[120px] pb-[120px]" id="project-detail">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 md:flex-row md:items-start md:gap-24">

          {/* Sticky Sidebar */}
          <div className="sticky top-[120px] flex w-full flex-col md:w-1/3">
            <h1 className="text-[40px] md:text-[64px] font-semibold uppercase tracking-[-0.01em]">
              {unwrappedParams.slug.replace(/-/g, " ")}
            </h1>
            <div className="mt-8 flex flex-col gap-6 text-[16px] text-[#A1A1A1] leading-[24px]">
              <p>
                An immersive exploration of light, subject, and environment. This project represents a culmination of structural minimalism and organic chaos.
              </p>
              <div className="mt-6 flex flex-col gap-2 border-t border-[var(--color-border)] pt-6">
                <div className="flex justify-between">
                  <span className="text-white">Role</span>
                  <span>Photography & Direction</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Year</span>
                  <span>2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Image Stack */}
          <div className="flex w-full flex-col gap-[120px] md:w-2/3 md:gap-[180px]">
            <motion.div style={{ y: y1 }} className="relative aspect-[4/5] w-full">
              <PremiumImage src="/cimematic1.jpeg" alt="Detail 1" className="h-full w-full" priority />
            </motion.div>
            <motion.div style={{ y: y2 }} className="relative aspect-[16/9] w-full">
              <PremiumImage src="/asthetic2.jpeg" alt="Detail 2" className="h-full w-full" />
            </motion.div>
            <motion.div style={{ y: y1 }} className="relative aspect-[4/5] w-full">
              <PremiumImage src="/asthetic3.jpeg" alt="Detail 3" className="h-full w-full" />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
