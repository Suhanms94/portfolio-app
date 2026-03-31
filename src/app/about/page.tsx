import Link from "next/link";
import { SiteHeader } from "@/components/referenceStyle/SiteHeader";
import { PageMotion } from "@/components/referenceStyle/PageMotion";
import { LightboxImage } from "@/components/referenceStyle/LightboxImage";
import { aboutHighlights } from "@/lib/route-content";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <PageMotion className="eth-route-shell eth-route-home-shell">
        <section className="eth-route-home-hero" data-parallax-section>
          <div className="eth-section-parallax eth-section-parallax-about" data-parallax-layer aria-hidden="true" />
          <div className="eth-route-heading" data-page-reveal>
            <div className="eth-home-intro-copy">
              <strong>About</strong>
              <p>
                Replace this with your story, what you photograph, and the kind of
                atmosphere you want your work to carry.
              </p>
            </div>
          </div>

          <div className="eth-route-feature-grid">
            <article className="ref-grid-card eth-route-feature-card" data-page-reveal data-immersive-card>
              <LightboxImage
                src="/cimematic1.jpeg"
                alt="Portrait placeholder"
                sizes="(max-width: 900px) 100vw, 50vw"
                triggerClassName="ref-home-image"
                imageClassName="object-cover"
                lightboxTitle="Your Portrait"
                lightboxSubtitle="Portrait Placeholder"
              />
              <div className="ref-home-meta">
                <div className="ref-home-tags">
                  <span>Portrait</span>
                  <span>Placeholder</span>
                </div>
                <div className="ref-home-copy">
                  <div>
                    <strong>Your Portrait</strong>
                    <p>Swap this image for your portrait or signature frame later.</p>
                  </div>
                  <span className="ref-photo-action">&#8599;</span>
                </div>
              </div>
            </article>

            <div className="eth-route-info-stack">
              <article className="eth-route-info-card" data-page-reveal data-immersive-card>
                <div className="ref-home-tags">
                  <span>Brand</span>
                  <span>Identity</span>
                </div>
                <div className="eth-route-info-body">
                  <div className="eth-about-logo">
                    <span className="eth-logo-core">vinay</span>
                    <span className="eth-logo-dot">.</span>
                    <span className="eth-logo-tail">filmlab</span>
                  </div>
                  <p>
                    Use this block for your location, visual style, and the kind of
                    projects you want to attract.
                  </p>
                </div>
              </article>

              <article className="eth-route-info-card" data-page-reveal data-immersive-card>
                <div className="ref-home-tags">
                  <span>Contact</span>
                  <span>Links</span>
                </div>
                <div className="eth-route-link-list">
                  <Link href="mailto:info@example.com" data-cursor-label="Email">info@example.com</Link>
                  <Link href="https://instagram.com" target="_blank" rel="noreferrer" data-cursor-label="Open">
                    @yourhandle
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="eth-route-card-grid" data-parallax-section>
          <div className="eth-section-parallax eth-section-parallax-gallery" data-parallax-layer aria-hidden="true" />
          {aboutHighlights.map((item) => (
            <article key={item.title} className="eth-route-info-card" data-page-reveal data-immersive-card>
              <div className="ref-home-tags">
                <span>{item.year}</span>
                <span>{item.category}</span>
              </div>
              <div className="eth-route-info-body">
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </section>
      </PageMotion>
    </>
  );
}
