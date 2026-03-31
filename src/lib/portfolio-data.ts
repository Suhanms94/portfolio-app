export type PhotoEntry = {
  title: string;
  medium: string;
  image: string;
  alt: string;
  featured?: boolean;
  note?: string;
};

export type ScrollSection = {
  id: string;
  layout: "hero" | "full" | "split" | "quote";
  title?: string;
  subtitle?: string;
  caption?: string;
  left?: PhotoEntry;
  right?: PhotoEntry;
  image?: string;
  alt?: string;
};

export type StoryFrame = {
  id: string;
  title: string;
  tag: string;
  year: string;
  description: string;
  image: string;
};

export type GalleryCategory = {
  name: string;
  label: string;
  items: {
    title: string;
    meta: string;
    image: string;
    accent: string;
  }[];
};

export const photoEntries: PhotoEntry[] = [
  {
    title: "Placeholder One",
    medium: "Replace with your image title",
    image: "/hero_cinematic_1774788287616.png",
    alt: "Featured placeholder photograph",
    featured: true,
    note: "Use your strongest opening frame here",
  },
  {
    title: "Placeholder Two",
    medium: "Replace with project or client name",
    image: "/portfolio_1_1774788306374.png",
    alt: "Portrait placeholder frame",
    note: "Good for a portrait or campaign image",
  },
  {
    title: "Placeholder Three",
    medium: "Replace with film stock or project type",
    image: "/portfolio_2_1774788323036.png",
    alt: "Architecture placeholder frame",
    note: "Good for architecture or landscape work",
  },
  {
    title: "Placeholder Four",
    medium: "Replace with final image metadata",
    image: "/hero_cinematic_1774788287616.png",
    alt: "Wide cinematic placeholder image",
  },
  {
    title: "Placeholder Five",
    medium: "Replace with client or collection",
    image: "/portfolio_2_1774788323036.png",
    alt: "Minimal placeholder structure image",
  },
  {
    title: "Placeholder Six",
    medium: "Replace with final caption",
    image: "/portfolio_1_1774788306374.png",
    alt: "Editorial placeholder portrait",
  },
  {
    title: "Placeholder Seven",
    medium: "Replace with image metadata",
    image: "/portfolio_1_1774788306374.png",
    alt: "Black and white placeholder image",
  },
  {
    title: "Placeholder Eight",
    medium: "Replace with project title",
    image: "/hero_cinematic_1774788287616.png",
    alt: "Warm placeholder documentary frame",
  },
  {
    title: "Placeholder Nine",
    medium: "Replace with your image details",
    image: "/portfolio_2_1774788323036.png",
    alt: "Landscape placeholder image",
  },
  {
    title: "Placeholder Ten",
    medium: "Replace with collection title",
    image: "/hero_cinematic_1774788287616.png",
    alt: "Open-air placeholder frame",
  },
];

export const scrollSections: ScrollSection[] = [
  {
    id: "hero",
    layout: "hero",
    title: "A quiet, scroll-based photography portfolio.",
    subtitle:
      "Minimal interface, oversized imagery, and simple placeholders ready for your final photographs.",
    image: photoEntries[0].image,
    alt: photoEntries[0].alt,
  },
  {
    id: "featured",
    layout: "full",
    title: photoEntries[0].title,
    caption: photoEntries[0].note,
    image: photoEntries[0].image,
    alt: photoEntries[0].alt,
  },
  {
    id: "pair-one",
    layout: "split",
    left: photoEntries[1],
    right: photoEntries[2],
  },
  {
    id: "quote",
    layout: "quote",
    title: "Replace this line with a short statement about your work, process, or the feeling you want the portfolio to leave behind.",
  },
  {
    id: "full-two",
    layout: "full",
    title: photoEntries[3].title,
    caption: "Ideal for a strong landscape or environmental frame.",
    image: photoEntries[3].image,
    alt: photoEntries[3].alt,
  },
  {
    id: "pair-two",
    layout: "split",
    left: photoEntries[4],
    right: photoEntries[5],
  },
  {
    id: "full-three",
    layout: "full",
    title: photoEntries[8].title,
    caption: "Use another large visual break here before the closing information.",
    image: photoEntries[8].image,
    alt: photoEntries[8].alt,
  },
];

export const infoLinks = [
  { label: "Photography", href: "#gallery" },
  { label: "Store", href: "#contact" },
  { label: "Info", href: "#info" },
];

export const contactLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Email", href: "mailto:yourname@example.com" },
  { label: "WhatsApp", href: "https://wa.me/" },
];

export const storyFrames: StoryFrame[] = photoEntries.slice(0, 3).map((entry, index) => ({
  id: `${index + 1}`,
  title: entry.title,
  tag: "Photography",
  year: "2026",
  description: entry.medium,
  image: entry.image,
}));

export const galleryCategories: GalleryCategory[] = [
  {
    name: "photography",
    label: "Photography",
    items: photoEntries.slice(0, 3).map((entry) => ({
      title: entry.title,
      meta: entry.medium,
      image: entry.image,
      accent: "#b8ab93",
    })),
  },
];
