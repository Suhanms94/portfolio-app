"use client";

import Image from "next/image";
import { StoryFrame } from "@/lib/portfolio-data";

type StorySectionProps = {
  frame: StoryFrame;
  align: "left" | "right";
  sectionId?: string;
};

export function StorySection({ frame, align, sectionId }: StorySectionProps) {
  return (
    <section className="story-section" id={sectionId} data-story-section>
      <div className={`story-grid ${align === "right" ? "story-grid-reverse" : ""}`}>
        <div className="story-visual" data-reveal>
          <div className="story-bg-layer" data-depth-background>
            <Image
              src={frame.image}
              alt={`${frame.title} background layer`}
              fill
              className="object-cover"
            />
          </div>
          <div className="story-foreground-layer" data-depth-foreground>
            <Image
              src={frame.image}
              alt={frame.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <article className="story-copy" data-reveal>
          <p className="kicker">
            {frame.year} / {frame.tag}
          </p>
          <h2>{frame.title}</h2>
          <p>{frame.description}</p>
          <div className="story-divider" />
          <p className="story-caption">
            Replace this section with the real project narrative, client brief, or a
            signature line about the shoot.
          </p>
        </article>
      </div>
    </section>
  );
}
