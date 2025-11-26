"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { sectors } from "@/lib/sectors";

export function Sectors() {
  return (
    <section
      id="sectors"
      className="py-section-sm md:py-section px-6 sm:px-8 bg-cream"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-display-md sm:text-display-lg text-charcoal mb-6 text-center tracking-tight">
            Investment Sectors
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p className="font-serif text-body-lg sm:text-2xl text-charcoal/75 mb-16 leading-relaxed text-center max-w-2xl mx-auto">
            Our investment interests span six areas where long-term value, brand
            strength, and operational excellence can compound:
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sectors.map((sector, index) => (
            <ScrollReveal key={sector.slug} delay={index + 2}>
              <Link href={`/sectors/${sector.slug}`} className="block h-full">
                <div className="classical-card p-6 sm:p-8 h-full group cursor-pointer flex flex-col">
                  <span className="font-display text-gold/50 text-sm tracking-widest mb-3 block">
                    {sector.numeral}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-charcoal group-hover:text-charcoal/80 transition-colors mb-3">
                    {sector.name}
                  </h3>
                  <p className="font-serif text-sm text-charcoal/60 leading-relaxed mb-4 flex-grow">
                    {sector.description}
                  </p>
                  <div className="flex items-center gap-2 font-serif text-xs tracking-wide text-charcoal/50 group-hover:text-gold transition-colors mt-auto pt-4 border-t border-charcoal/10">
                    <span>Learn more</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
