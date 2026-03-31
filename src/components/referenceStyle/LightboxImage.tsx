"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type LightboxImageProps = {
  src: string;
  alt: string;
  sizes: string;
  triggerClassName: string;
  imageClassName?: string;
  cursorLabel?: string;
  lightboxTitle?: string;
  lightboxSubtitle?: string;
  priority?: boolean;
  children?: React.ReactNode;
};

export function LightboxImage({
  src,
  alt,
  sizes,
  triggerClassName,
  imageClassName = "object-cover",
  cursorLabel = "View",
  lightboxTitle,
  lightboxSubtitle,
  priority = false,
  children,
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={triggerClassName}
        data-cursor-label={cursorLabel}
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={imageClassName}
          priority={priority}
        />
        {children}
      </button>

      {open ? (
        <div
          className="eth-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxTitle ?? alt}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className="eth-lightbox-close"
            onClick={() => setOpen(false)}
            aria-label="Close image"
          >
            Close
          </button>
          <div
            className="eth-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="eth-lightbox-media">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            {(lightboxTitle || lightboxSubtitle) ? (
              <div className="eth-lightbox-meta">
                <strong>{lightboxTitle ?? alt}</strong>
                <span>{lightboxSubtitle ?? ""}</span>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
