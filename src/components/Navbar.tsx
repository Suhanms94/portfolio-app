"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex h-[80px] items-center px-6 transition-all duration-[600ms]",
        scrolled ? "bg-black/60 backdrop-blur-[10px]" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <div className="text-[24px] font-semibold tracking-[-0.01em] text-white">
          STUDIO
        </div>
        <div className="flex gap-8 text-[16px] text-[#A1A1A1]">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
