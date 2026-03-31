import type { Metadata, Viewport } from "next";
import { CustomCursor } from "@/components/referenceStyle/CustomCursor";
import { ScrollProgress } from "@/components/referenceStyle/ScrollProgress";
import { SmoothScroll } from "@/components/referenceStyle/SmoothScroll";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vinay-filmlab.com";
const siteTitle = "Vinay Filmlab - Cinematic Photography Portfolio";
const siteDescription =
  "Award-winning cinematic photography portfolio. Premium editorial, architecture, and commercial photography by Vinay. Specializing in visual storytelling and high-end luxury production.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  
  // Open Graph for social sharing
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Vinay Filmlab",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vinay Filmlab Photography Portfolio",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.jpg"],
    creator: "@vinayfilmlab",
  },
  
  // Additional SEO
  keywords: [
    "photography portfolio",
    "cinematic photography",
    "editorial photography",
    "commercial photography",
    "visual storytelling",
    "luxury photography",
    "fashion photography",
    "architecture photography",
  ],
  authors: [{ name: "Vinay Filmlab" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/cimematic1.jpeg" />
        
        {/* Preconnect to image CDNs if used */}
        <link rel="dns-prefetch" href="https://cdn.example.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Vinay Filmlab",
              description: siteDescription,
              url: siteUrl,
              telephone: "+91-7204096690",
              email: "vinayfilmlab@gmail.com",
              sameAs: [
                "https://instagram.com/vinay.filmlab",
                "https://twitter.com/vinayfilmlab",
              ],
              image: "/og-image.jpg",
              areaServed: "World",
              serviceType: "Photography Services",
            }),
          }}
        />
      </head>
      <body>
        <SmoothScroll />
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
