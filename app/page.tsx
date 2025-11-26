import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Philosophy } from "@/components/sections/philosophy";
import { Sectors } from "@/components/sections/sectors";
import { Contact } from "@/components/sections/contact";
import { SectionDivider } from "@/components/section-divider";
import { generateMetadata as generateMetadataHelper } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadataHelper({
  title: "Mullican Holdings",
  description: "A private holding company that acquires and operates enduring businesses through an Archimedean approach—first-principles thinking applied to building lasting value.",
  url: "/",
});

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Philosophy />
        <SectionDivider />
        <Sectors />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

