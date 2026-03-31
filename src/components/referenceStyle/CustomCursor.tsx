"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 360, damping: 34, mass: 0.22 });
  const smoothY = useSpring(y, { stiffness: 360, damping: 34, mass: 0.22 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 9);
      y.set(event.clientY - 9);
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    const applyHoverState = () => {
      const hovered = document.querySelector<HTMLElement>("[data-cursor-label]:hover");
      setActive(Boolean(hovered));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);
    document.addEventListener("mouseover", applyHoverState);
    document.addEventListener("mouseout", applyHoverState);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      document.removeEventListener("mouseover", applyHoverState);
      document.removeEventListener("mouseout", applyHoverState);
    };
  }, [x, y]);

  return (
    <motion.div
      className={`ref-cursor ${visible ? "is-visible" : ""} ${active ? "is-active" : ""}`}
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
