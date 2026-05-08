import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.amalfoundation.org";

export const BASE_KEYWORDS = [
  "Amal Foundation",
  "Somalia charity",
  "Garowe foundation",
  "Puntland NGO",
  "Somalia education",
  "humanitarian relief Somalia",
  "zakat Somalia",
  "Amal Group International",
  "Somalia healthcare",
  "community development Somalia",
];

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? "/images/og-default.png";

  return {
    title,
    description,
    keywords: [...BASE_KEYWORDS, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Amal Foundation",
      locale: "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
