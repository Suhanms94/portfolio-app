"use client";

import { motion } from "framer-motion";
import { contactLinks } from "@/lib/portfolio-data";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-panel"
        data-reveal
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="kicker">Contact</p>
        <h2>Keep the ending simple, elegant, and easy to act on.</h2>
        <p>
          Add your real contact details here when you are ready. This block is
          designed as a clean closing frame, not a heavy form.
        </p>

        <div className="contact-links-grid">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <span>{link.label}</span>
              <strong>{link.href.replace("mailto:", "")}</strong>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
