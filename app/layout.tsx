import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { generateMetadata as generateMetadataHelper } from "@/lib/metadata";
import type { Metadata } from "next";
import {
  StructuredDataScript,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/structured-data";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = generateMetadataHelper({
  title: "Mullican Holdings",
  description: "A private holding company that acquires and operates enduring businesses through an Archimedean approach.",
  url: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="font-serif">
        <StructuredDataScript data={getOrganizationSchema()} />
        <StructuredDataScript data={getWebsiteSchema()} />
        {children}
      </body>
    </html>
  );
}

