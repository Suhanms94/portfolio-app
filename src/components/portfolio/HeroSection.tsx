"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-stage">
        <div className="hero-backdrop">
          <Image
            src="/cimematic1.jpeg"
            alt="Cinematic photography hero"
            fill
            priority
            className="object-cover"
          />
          <div className="hero-backdrop-overlay" />
        </div>

        <motion.div
          className="hero-copy-block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="kicker">Premium photography portfolio</p>
          <h1>Frames that feel cinematic before a word is read.</h1>
          <p className="hero-lead">
            A minimal, immersive portfolio inspired by editorial photography sites,
            built for large visuals, elegant motion, and quiet confidence.
          </p>
        </motion.div>

        <motion.div
          className="hero-meta-card"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Currently built with placeholders</span>
          <strong>Add client stories, project details, and full-resolution work later.</strong>
        </motion.div>

        <motion.a
          href="#story"
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <span>Scroll</span>
          <i />
        </motion.a>
      </div>
    </section>
  );
}
