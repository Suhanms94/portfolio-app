"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black" id="hero" aria-label="Hero section">
      <motion.div
        className="absolute inset-0 z-0 h-full w-full"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image 
          src="/cimematic1.jpeg" 
          alt="Cinematic hero photograph - premium photography portfolio" 
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={85}
        />
      </motion.div>

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center text-white sm:px-12">
        <motion.h1
          className="text-[48px] md:text-[72px] lg:text-[96px] font-bold tracking-[-0.02em] leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          VINAY
        </motion.h1>
        <motion.p
          className="mt-4 text-[14px] md:text-[16px] uppercase tracking-widest text-[#A1A1A1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          Cinematic Visual Narrative
        </motion.p>
      </div>

      <div className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-4" aria-hidden="true">
        <motion.span 
          className="text-[11px] md:text-[12px] uppercase tracking-widest text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Scroll
        </motion.span>
        <motion.div 
          className="h-[60px] w-[1px] bg-white/20 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
