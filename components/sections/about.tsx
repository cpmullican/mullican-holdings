import { ScrollReveal } from "@/components/scroll-reveal";

const concepts = [
  {
    title: "First Principles",
    description:
      "We strip a business down to what actually creates value, then rebuild with clarity and intent.",
  },
  {
    title: "Deep Involvement",
    description:
      "Fewer companies, hands-on operating work, and a commitment to making each one exceptional.",
  },
  {
    title: "Long-term Commitment",
    description:
      "We build enduring businesses through patient stewardship and rigorous fresh perspective.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-section-sm md:py-section px-6 sm:px-8 bg-cream"
    >
      <div className="max-w-5xl mx-auto">
        {/* Opening Statement */}
        <ScrollReveal>
          <p className="font-serif text-body-lg sm:text-2xl text-charcoal/85 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            We believe most businesses underperform not because the idea is
            weak, but because the assumptions behind them go unchallenged.
          </p>
        </ScrollReveal>

        {/* Concept Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {concepts.map((concept, index) => (
            <ScrollReveal key={concept.title} delay={index + 1}>
              <div className="classical-card p-6 sm:p-8 h-full">
                <h3 className="font-display text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
                  {concept.title}
                </h3>
                <p className="font-serif text-body text-charcoal/75 leading-relaxed">
                  {concept.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
