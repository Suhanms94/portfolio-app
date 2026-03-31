"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader({ variant = "route" }: { variant?: "route" | "home" }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        className={[
          "eth-header",
          variant === "home" ? "eth-header-home" : "eth-header-route",
          isScrolled ? "is-scrolled" : "",
        ].filter(Boolean).join(" ")}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="eth-header-inner">
          <Link href="/" className="eth-logo" aria-label="Home" data-cursor-label="Home">
            <span className="eth-logo-name">
              <span className="eth-logo-core">vinay</span>
              <span className="eth-logo-dot">.</span>
              <span className="eth-logo-tail">filmlab</span>
            </span>
          </Link>

          <nav className="eth-nav" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "is-active" : ""}
                data-cursor-label="Open"
              >
                <span>{item.label}</span>
              </Link>
            ))}
            <button
              type="button"
              className="eth-menu-button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              data-cursor-label="Menu"
            >
              Menu
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.aside
            className="eth-menu-overlay"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eth-menu-inner">
              <button
                type="button"
                className="eth-menu-close"
                onClick={() => setMenuOpen(false)}
                data-cursor-label="Close"
              >
                Close
              </button>

              <nav className="eth-menu-nav" aria-label="Expanded">
                <Link href="/" onClick={() => setMenuOpen(false)} data-cursor-label="Open">
                  Home
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    data-cursor-label="Open"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
