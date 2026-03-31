"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function FloatingNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest < 80) {
      setHidden(false);
      return;
    }

    setHidden(latest > previous);
  });

  return (
    <motion.nav
      className="floating-nav"
      initial={{ y: 30, opacity: 0 }}
      animate={{
        y: hidden ? 120 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </motion.nav>
  );
}
