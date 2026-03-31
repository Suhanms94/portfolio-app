"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface PremiumImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
}

export function PremiumImage({ 
  src, 
  alt, 
  className, 
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px",
  fill = true
}: PremiumImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("overflow-hidden rounded-[8px]", className)}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        quality={82}
        priority={priority}
        className={cn(
          "transition-all duration-[600ms] ease-out hover:scale-[1.03]",
          isLoading ? "blur-lg scale-[1.02]" : "blur-0 scale-100"
        )}
        onLoadingComplete={() => setIsLoading(false)}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}
