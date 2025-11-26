import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

const principles = [
  { numeral: "I", text: "break a business down to its fundamentals" },
  { numeral: "II", text: "challenge assumptions others take for granted" },
  { numeral: "III", text: "identify the pivotal leverage point" },
  { numeral: "IV", text: "rebuild around what actually creates value" },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-section-sm md:py-section px-6 sm:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-display-md sm:text-display-lg text-charcoal mb-16 text-center tracking-tight">
            The Archimedean Approach
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
          <ScrollReveal>
            <div className="relative aspect-square max-w-md mx-auto w-full">
              <Image
                src="/achimedes2.svg"
                alt="Archimedes of Syracuse, the ancient Greek mathematician and physicist whose lever principle inspires our investment philosophy"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          
          <div className="space-y-6">
            {principles.map((principle, index) => (
              <ScrollReveal key={index} delay={index + 1}>
                <div className="flex items-start group">
                  <span className="font-display text-gold/70 text-lg w-12 shrink-0 pt-0.5">
                    {principle.numeral}.
                  </span>
                  <span className="font-serif text-body-lg text-charcoal/85 leading-relaxed">
                    {principle.text}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
        <ScrollReveal delay={5}>
          <div className="text-center mt-8">
            <Link
              href="/philosophy"
              className="inline-flex items-center gap-3 font-serif text-sm tracking-wide text-charcoal/60 hover:text-gold transition-colors"
            >
              <span>Explore our philosophy in depth</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

