import { ScrollReveal } from "@/components/scroll-reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-section-sm md:py-section px-6 sm:px-8"
    >
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="classical-card p-10 sm:p-16 text-center">
            <p className="font-serif text-body-lg sm:text-2xl text-charcoal/75 mb-8 leading-relaxed">
              If you own a business you&apos;re considering selling, or you&apos;re an
              investor interested in partnering on a deal, you can reach us at:
            </p>
            
            {/* Decorative element */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-16 h-px bg-gold/30" />
              <span className="text-gold/50 text-sm">&#10022;</span>
              <span className="w-16 h-px bg-gold/30" />
            </div>
            
            <a
              href="mailto:hello@mullican.co"
              className="font-display text-2xl sm:text-3xl text-charcoal hover:text-gold transition-colors duration-300"
            >
              hello@mullican.co
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

