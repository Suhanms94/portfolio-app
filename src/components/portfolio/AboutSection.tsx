"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <motion.div
          className="about-image"
          data-reveal
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/asthetic3.jpeg"
            alt="About section preview"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="about-copy" data-reveal>
          <p className="kicker">About</p>
          <h2>Minimal text. Strong image. A premium structure for client trust.</h2>
          <p>
            This section is intentionally quiet. It gives you room to introduce your
            approach, specialties, or shooting philosophy without breaking the
            immersive flow of the portfolio.
          </p>
          <p>
            When you add real content later, keep it concise: who you are, what you
            shoot, where you work, and why clients choose your eye.
          </p>
        </div>
      </div>
    </section>
  );
}
