"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projects = [
  { id: 1, title: "Nocturne", img: "/aaa12.jpeg" },
  { id: 2, title: "Brutalism", img: "/chess.jpeg" },
  { id: 3, title: "Avant-Garde", img: "/girl 1 pic.jpg.jpeg" }
];

export default function FeaturedProjects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Moves the slider to the left as user scrolls down through the section
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[var(--color-bg-secondary)]" id="featured">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-[24px] px-6 md:px-[120px]">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-[60vh] w-[80vw] shrink-0 overflow-hidden md:h-[70vh] md:w-[60vw] rounded-[8px]"
            >
              <Image 
                src={project.img} 
                alt={project.title} 
                layout="fill" 
                objectFit="cover" 
                className="transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 z-10">
                <h2 className="text-white">{project.title}</h2>
                <div className="mt-4 h-[1px] w-[40px] bg-white transition-all duration-300 group-hover:w-[80px]" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
