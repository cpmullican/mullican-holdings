import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mullican.xyz";
const siteName = "Mullican Holdings";
const defaultDescription =
  "A private holding company that acquires and operates enduring businesses through an Archimedean approach.";
// Fallback to crest until og-image.png is created (recommended size: 1200x630px)
const defaultImage = `${siteUrl}/og-image.png`;

interface MetadataOptions {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description = defaultDescription,
  image = defaultImage,
  url,
  type = "website",
  noindex = false,
}: MetadataOptions): Metadata {
  const fullTitle = title.includes(siteName)
    ? title
    : `${title} | ${siteName}`;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  return {
    title: fullTitle,
    description,
    keywords: [
      "private holding company",
      "business acquisition",
      "long-term investment",
      "enduring businesses",
      "Archimedean approach",
      "first-principles thinking",
      "operating excellence",
      "stewardship",
    ],
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type,
      siteName,
      title: fullTitle,
      description,
      url: fullUrl,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@mullicanholdings",
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/logo.svg",
      shortcut: "/logo.svg",
      apple: "/logo.svg",
    },
  };
}

