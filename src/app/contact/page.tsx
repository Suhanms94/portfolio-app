import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/referenceStyle/SiteHeader";
import { PageMotion } from "@/components/referenceStyle/PageMotion";

const contactLinks = [
  {
    label: "Email",
    value: "vinayfilmlab@gmail.com",
    href: "mailto:vinayfilmlab@gmail.com",
    icon: "@",
  },
  {
    label: "Instagram",
    value: "@vinay.filmlab",
    href: "https://www.instagram.com/vinay.filmlab/?hl=en",
    icon: "IG",
  },
  {
    label: "Phone",
    value: "+91 7204096690",
    href: "tel:+917204096690",
    icon: "Ph",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <PageMotion className="eth-route-shell eth-route-home-shell">
        <section className="eth-contact-editorial" data-parallax-section>
          <div
            className="eth-section-parallax eth-section-parallax-simple"
            data-parallax-layer
            aria-hidden="true"
          />

          <div className="eth-contact-editorial-layout">
            <div className="eth-contact-portrait-block" data-page-reveal>
              <div className="eth-film-frame eth-contact-film-frame" data-immersive-card>
                <Image
                  src="/contact.jpeg"
                  alt="Contact portrait placeholder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 42vw"
                />
              </div>
              <p className="eth-contact-credit">Photo by @placeholdercredit</p>
            </div>

            <div className="eth-contact-content">
              <div className="eth-contact-copy" data-page-reveal>
                <h1>Contact</h1>
                <p>
                  For inquiries, collaborations, or prints.
                </p>
              </div>

              <div className="eth-contact-brand" data-page-reveal>
                <span className="eth-logo-name">
                  <span className="eth-logo-core">vinay</span>
                  <span className="eth-logo-dot">.</span>
                  <span className="eth-logo-tail">filmlab</span>
                </span>
              </div>

              <div className="eth-contact-links" data-page-reveal>
                {contactLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href!}
                    target={item.href && item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="eth-contact-link-row"
                    data-cursor-label="Open"
                    data-immersive-card
                  >
                    <span className="eth-contact-link-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="eth-contact-link-main">{item.value}</span>
                  </Link>
                ))}
              </div>

              <Link
                href="mailto:info@example.com"
                className="eth-contact-cta"
                data-cursor-label="Email"
                data-page-reveal
              >
                Send Message &#8594;
              </Link>

              <p className="eth-contact-note" data-page-reveal>
                Available for select projects and collaborations.
              </p>
            </div>
          </div>
        </section>
      </PageMotion>
    </>
  );
}
