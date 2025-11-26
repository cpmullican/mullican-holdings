const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mullican.xyz";

export interface StructuredData {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

export function getOrganizationSchema(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mullican Holdings",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description:
      "A private holding company that acquires and operates enduring businesses through an Archimedean approach.",
    sameAs: [],
  };
}

export function getWebsiteSchema(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mullican Holdings",
    url: siteUrl,
    description:
      "A private holding company that acquires and operates enduring businesses through an Archimedean approach.",
    publisher: {
      "@type": "Organization",
      name: "Mullican Holdings",
    },
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

export function getArticleSchema({
  title,
  description,
  url,
  publishedTime,
}: {
  title: string;
  description: string;
  url: string;
  publishedTime?: string;
}): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteUrl}${url}`,
    publisher: {
      "@type": "Organization",
      name: "Mullican Holdings",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
    },
    ...(publishedTime && { datePublished: publishedTime }),
  };
}

export function getServiceSchema({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteUrl}${url}`,
    provider: {
      "@type": "Organization",
      name: "Mullican Holdings",
    },
    ...(serviceType && { serviceType }),
  };
}

export function StructuredDataScript({ data }: { data: StructuredData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

