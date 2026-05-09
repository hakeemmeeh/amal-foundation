import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  title: {
    default: "Amal Foundation — Transforming Lives Across Somalia",
    template: "%s | Amal Foundation",
  },
  description:
    "Amal Foundation is a private non-profit foundation committed to education, healthcare, humanitarian relief, and economic development across Somalia.",
  keywords: [
    "Amal Foundation",
    "Somalia charity",
    "Garowe foundation",
    "Puntland NGO",
    "Somalia education",
    "humanitarian relief Somalia",
    "zakat Somalia",
    "Amal Group International",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Amal Foundation",
    description:
      "Transforming lives across Somalia through education, healthcare, and economic empowerment.",
    url: SITE_URL,
    siteName: "Amal Foundation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amal Foundation — Transforming Lives Across Somalia",
    description:
      "Transforming lives across Somalia through education, healthcare, and economic empowerment.",
  },
  other: {
    "geo.region": "SO-N",
    "geo.placename": "Garowe, Puntland, Somalia",
    "geo.position": "8.4054;48.4845",
    ICBM: "8.4054, 48.4845",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${plusJakarta.variable} ${dmMono.variable} antialiased`}
      >
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
