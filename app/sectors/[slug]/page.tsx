import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { sectors, getSectorBySlug, getAllSectorSlugs } from "@/lib/sectors";
import { generateMetadata as generateMetadataHelper } from "@/lib/metadata";
import {
  StructuredDataScript,
  getServiceSchema,
  getBreadcrumbSchema,
} from "@/lib/structured-data";

interface SectorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSectorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SectorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    return generateMetadataHelper({
      title: "Sector Not Found",
      description: "The requested sector page could not be found.",
      url: `/sectors/${slug}`,
      noindex: true,
    });
  }

  return generateMetadataHelper({
    title: sector.name,
    description: `${sector.tagline} ${sector.description}`,
    url: `/sectors/${slug}`,
  });
}

export default async function SectorPage({ params }: SectorPageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    notFound();
  }

  // Find adjacent sectors for navigation
  const currentIndex = sectors.findIndex((s) => s.slug === slug);
  const prevSector = currentIndex > 0 ? sectors[currentIndex - 1] : null;
  const nextSector =
    currentIndex < sectors.length - 1 ? sectors[currentIndex + 1] : null;

  const serviceSchema = getServiceSchema({
    name: sector.name,
    description: `${sector.tagline} ${sector.description}`,
    url: `/sectors/${slug}`,
    serviceType: "Investment Sector",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Sectors", url: "/#sectors" },
    { name: sector.name, url: `/sectors/${slug}` },
  ]);

  return (
    <>
      <StructuredDataScript data={serviceSchema} />
      <StructuredDataScript data={breadcrumbSchema} />
      <main className="pt-20">
      {/* Hero Section */}
      <section className="py-section-sm md:py-section px-6 sm:px-8 relative">
        {/* Subtle decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.015]">
            <div className="absolute inset-0 border border-charcoal rounded-full" />
            <div className="absolute inset-16 border border-charcoal rounded-full" />
            <div className="absolute inset-32 border border-charcoal rounded-full" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/#sectors"
                className="font-serif text-sm tracking-[0.15em] uppercase text-charcoal/50 hover:text-charcoal transition-colors"
              >
                ← Back to Sectors
              </Link>
            </div>

            {/* Numeral */}
            <span className="font-display text-gold/40 text-2xl tracking-widest mb-4 block">
              {sector.numeral}
            </span>

            {/* Sector name */}
            <h1 className="font-display text-display-lg sm:text-display-xl text-charcoal mb-4 tracking-tight">
              {sector.name}
            </h1>

            {/* Tagline */}
            <p className="font-display text-xl sm:text-2xl text-charcoal/60 mb-8 tracking-wide">
              {sector.tagline}
            </p>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 mb-12">
              <span className="w-16 h-px bg-gold/40" />
              <span className="text-gold/50 text-sm">&#10022;</span>
              <span className="w-16 h-px bg-gold/40" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <p className="font-serif text-body-lg sm:text-2xl text-charcoal/80 leading-relaxed max-w-2xl">
              {sector.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Extended Description */}
      <section className="py-section-sm md:py-section px-6 sm:px-8 bg-cream">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-display-md text-charcoal mb-8 tracking-tight">
              Our Perspective
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <p className="font-serif text-body-lg text-charcoal/80 leading-relaxed">
              {sector.extendedDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-section-sm md:py-section px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-display-md text-charcoal mb-12 tracking-tight text-center">
              Investment Criteria
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What We Look For */}
            <ScrollReveal delay={1}>
              <div className="classical-card p-8 h-full">
                <h3 className="font-display text-xl text-charcoal mb-6">
                  What We Look For
                </h3>
                <ul className="space-y-4">
                  {sector.investmentCriteria.map((criterion, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gold/60 text-sm mt-1">●</span>
                      <span className="font-serif text-body text-charcoal/75 leading-relaxed">
                        {criterion}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Ideal Characteristics */}
            <ScrollReveal delay={2}>
              <div className="classical-card p-8 h-full">
                <h3 className="font-display text-xl text-charcoal mb-6">
                  Ideal Characteristics
                </h3>
                <ul className="space-y-4">
                  {sector.idealCharacteristics.map((characteristic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gold/60 text-sm mt-1">●</span>
                      <span className="font-serif text-body text-charcoal/75 leading-relaxed">
                        {characteristic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related Holdings (if any) */}
      {sector.relatedHoldings && sector.relatedHoldings.length > 0 && (
        <section className="py-section-sm px-6 sm:px-8 bg-cream">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-display-md text-charcoal mb-8 tracking-tight text-center">
                Related Holdings
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="flex justify-center">
                {sector.relatedHoldings.map((holdingSlug) => (
                  <Link
                    key={holdingSlug}
                    href={`/holdings/${holdingSlug}`}
                    className="classical-card p-8 text-center group max-w-sm"
                  >
                    <span className="font-serif text-xs tracking-[0.2em] uppercase text-gold/70 mb-2 block">
                      Flagship
                    </span>
                    <span className="font-display text-2xl text-charcoal group-hover:text-charcoal/80 transition-colors block mb-4">
                      Galactic
                    </span>
                    <span className="font-serif text-sm text-charcoal/50 group-hover:text-gold transition-colors">
                      View holding →
                    </span>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Navigation Between Sectors */}
      <section className="py-section-sm px-6 sm:px-8 border-t border-charcoal/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            {prevSector ? (
              <Link
                href={`/sectors/${prevSector.slug}`}
                className="group text-left"
              >
                <span className="font-serif text-xs tracking-[0.15em] uppercase text-charcoal/40 mb-1 block">
                  Previous
                </span>
                <span className="font-display text-lg text-charcoal group-hover:text-gold transition-colors flex items-center gap-2">
                  <span>←</span>
                  <span>{prevSector.name}</span>
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextSector ? (
              <Link
                href={`/sectors/${nextSector.slug}`}
                className="group text-right"
              >
                <span className="font-serif text-xs tracking-[0.15em] uppercase text-charcoal/40 mb-1 block">
                  Next
                </span>
                <span className="font-display text-lg text-charcoal group-hover:text-gold transition-colors flex items-center gap-2">
                  <span>{nextSector.name}</span>
                  <span>→</span>
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-sm px-6 sm:px-8 bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-serif text-body-lg text-charcoal/75 mb-8 leading-relaxed">
              Own a business in this sector? We&apos;d love to hear from you.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 font-display text-lg text-charcoal hover:text-gold transition-colors"
            >
              <span>Start a conversation</span>
              <span>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
      </main>
    </>
  );
}

