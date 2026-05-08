const SITE_BASE =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.amalfoundation.org";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Amal Foundation",
    alternateName: "Amal Foundation Somalia",
    description:
      "Amal Foundation is a private non-profit foundation committed to education, healthcare, humanitarian relief, and economic development across Somalia.",
    url: SITE_BASE,
    email: "info@amalfoundation.org",
    telephone: "+252 90 000 0000",
    foundingDate: "2025",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_BASE}/images/logo.png`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Garowe Main Road",
      addressLocality: "Garowe",
      addressRegion: "Puntland",
      addressCountry: "SO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.4054,
      longitude: 48.4845,
    },
    areaServed: ["Garowe", "Puntland", "Mogadishu", "Somalia", "East Africa"],
    parentOrganization: {
      "@type": "Organization",
      name: "Amal Group International Limited",
    },
    knowsAbout: [
      "Education in Somalia",
      "Healthcare in Somalia",
      "Humanitarian relief",
      "Economic empowerment",
      "Islamic finance",
      "Community development",
    ],
    sameAs: [
      process.env.NEXT_PUBLIC_FACEBOOK_URL,
      process.env.NEXT_PUBLIC_INSTAGRAM_URL,
      process.env.NEXT_PUBLIC_TIKTOK_URL,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Amal Foundation",
    url: SITE_BASE,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_BASE}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
