import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "The Archimedean Approach | Mullican Holdings",
  description:
    "Our investment philosophy is rooted in first-principles thinking—breaking businesses down to fundamentals and rebuilding around what truly creates value.",
};

const principles = [
  {
    numeral: "I",
    title: "Break Down to Fundamentals",
    shortText: "break a business down to its fundamentals",
    description:
      "Before we can improve anything, we must understand it completely. We systematically deconstruct a business to identify its core value drivers—the essential elements that make it work. This isn't about spreadsheets and projections; it's about understanding the fundamental physics of how the business creates value for customers, employees, and stakeholders.",
    insight:
      "Most investors analyze businesses at the surface level. We dig deeper to understand the mechanisms that actually drive outcomes.",
  },
  {
    numeral: "II",
    title: "Challenge Assumptions",
    shortText: "challenge assumptions others take for granted",
    description:
      "Every industry operates on inherited assumptions—'the way things have always been done.' These assumptions often persist not because they're optimal, but because they're comfortable. We systematically question these conventions, asking why each element exists and whether it still serves its purpose. Often, the biggest opportunities hide behind assumptions that everyone accepts without examination.",
    insight:
      "The most valuable insights come from questioning what everyone else takes for granted.",
  },
  {
    numeral: "III",
    title: "Identify the Lever",
    shortText: "identify the pivotal leverage point",
    description:
      "Archimedes famously said, 'Give me a place to stand, and I shall move the world.' In every business, there exists a leverage point—a place where focused effort produces disproportionate results. Finding this point requires deep understanding of the business's fundamentals and the discipline to concentrate resources rather than spreading them thin. We seek the fulcrum that transforms potential into realized value.",
    insight:
      "Concentrated effort at the right point outperforms scattered effort across many points.",
  },
  {
    numeral: "IV",
    title: "Rebuild Around Value",
    shortText: "rebuild around what actually creates value",
    description:
      "With fundamentals understood, assumptions challenged, and the leverage point identified, we rebuild the business around what actually creates value. This isn't about cutting costs or financial engineering—it's about aligning every element of the organization with its core purpose. We design operations, incentives, and culture to reinforce value creation and compound over time.",
    insight:
      "Sustainable returns come from building better businesses, not from financial manipulation.",
  },
];

const quotes = [
  {
    text: "Give me a place to stand, and I shall move the world.",
    attribution: "Archimedes",
  },
  {
    text: "The first principle is that you must not fool yourself—and you are the easiest person to fool.",
    attribution: "Richard Feynman",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-section-sm md:py-section px-6 sm:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              {/* Breadcrumb */}
              <div className="mb-8">
                <Link
                  href="/#philosophy"
                  className="font-serif text-sm tracking-[0.15em] uppercase text-charcoal/50 hover:text-charcoal transition-colors"
                >
                  ← Back to Home
                </Link>
              </div>

              <h1 className="font-display text-display-lg sm:text-display-xl text-charcoal mb-6 tracking-tight">
                The Archimedean Approach
              </h1>

              <p className="font-display text-xl sm:text-2xl text-charcoal/60 mb-8 tracking-wide max-w-2xl">
                A philosophy of investment and operation rooted in first-principles thinking
              </p>

              {/* Decorative divider */}
              <div className="flex items-center gap-4 mb-12">
                <span className="w-16 h-px bg-gold/40" />
                <span className="text-gold/50 text-sm">&#10022;</span>
                <span className="w-16 h-px bg-gold/40" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-section-sm md:py-section px-6 sm:px-8 bg-cream">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <ScrollReveal>
                <div className="relative aspect-square max-w-md mx-auto w-full">
                  <Image
                    src="/achimedes2.svg"
                    alt="Archimedes"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal delay={1}>
                  <h2 className="font-display text-display-md text-charcoal mb-6 tracking-tight">
                    The Inspiration
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={2}>
                  <p className="font-serif text-body text-charcoal/80 leading-relaxed">
                    Archimedes of Syracuse was one of the greatest minds of antiquity—a 
                    mathematician, physicist, and engineer who understood that 
                    understanding fundamental principles was the key to achieving 
                    extraordinary results.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={3}>
                  <p className="font-serif text-body text-charcoal/80 leading-relaxed">
                    His insight about the lever—that a small force applied at the 
                    right point can move enormous weights—captures the essence of 
                    our approach to business. We believe that most businesses 
                    underperform not because they lack resources, but because 
                    effort is misdirected.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={4}>
                  <p className="font-serif text-body text-charcoal/80 leading-relaxed">
                    By understanding fundamentals deeply and identifying leverage 
                    points precisely, we help good businesses become exceptional ones.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-section-sm px-6 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-8 border border-charcoal/5 pointer-events-none" />
                <blockquote className="text-center py-8">
                  <p className="font-serif text-2xl sm:text-3xl text-charcoal/80 leading-relaxed italic mb-6">
                    &ldquo;{quotes[0].text}&rdquo;
                  </p>
                  <cite className="font-display text-sm tracking-[0.15em] uppercase text-charcoal/50 not-italic">
                    — {quotes[0].attribution}
                  </cite>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* The Four Principles */}
        <section className="py-section-sm md:py-section px-6 sm:px-8 bg-cream">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-display-md sm:text-display-lg text-charcoal mb-6 text-center tracking-tight">
                The Four Principles
              </h2>
              <p className="font-serif text-body-lg text-charcoal/60 mb-16 text-center max-w-2xl mx-auto">
                Our approach distills into four interconnected principles, each building on the last
              </p>
            </ScrollReveal>

            <div className="space-y-12">
              {principles.map((principle, index) => (
                <ScrollReveal key={principle.numeral} delay={index + 1}>
                  <div className="classical-card p-8 sm:p-12">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                      {/* Numeral */}
                      <div className="shrink-0">
                        <span className="font-display text-gold/40 text-4xl sm:text-5xl tracking-widest">
                          {principle.numeral}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="font-display text-2xl sm:text-3xl text-charcoal tracking-tight">
                          {principle.title}
                        </h3>
                        <p className="font-serif text-body-lg text-charcoal/80 leading-relaxed">
                          {principle.description}
                        </p>
                        
                        {/* Insight box */}
                        <div className="mt-6 pt-6 border-t border-charcoal/10">
                          <p className="font-serif text-body text-charcoal/60 italic">
                            <span className="text-gold/70 not-italic mr-2">Key Insight:</span>
                            {principle.insight}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* In Practice */}
        <section className="py-section-sm md:py-section px-6 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-display-md text-charcoal mb-12 tracking-tight text-center">
                In Practice
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal delay={1}>
                <div className="classical-card p-8 h-full">
                  <h3 className="font-display text-xl text-charcoal mb-4">
                    What This Means for Businesses We Acquire
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-gold/60 text-sm mt-1">●</span>
                      <span className="font-serif text-body text-charcoal/75">
                        Deep diagnostic work before making changes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold/60 text-sm mt-1">●</span>
                      <span className="font-serif text-body text-charcoal/75">
                        Patient capital with long time horizons
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold/60 text-sm mt-1">●</span>
                      <span className="font-serif text-body text-charcoal/75">
                        Focused improvements rather than scattered initiatives
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold/60 text-sm mt-1">●</span>
                      <span className="font-serif text-body text-charcoal/75">
                        Hands-on operational involvement
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold/60 text-sm mt-1">●</span>
                      <span className="font-serif text-body text-charcoal/75">
                        Preservation of what makes businesses special
                      </span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={2}>
                <div className="classical-card p-8 h-full">
                  <h3 className="font-display text-xl text-charcoal mb-4">
                    What This Means for Sellers
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-gold/60 text-sm mt-1">●</span>
                      <span className="font-serif text-body text-charcoal/75">
                        A buyer who genuinely understands your business
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold/60 text-sm mt-1">●</span>
                      <span className="font-serif text-body text-charcoal/75">
                        Stewardship, not strip-and-flip transactions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold/60 text-sm mt-1">●</span>
                      <span className="font-serif text-body text-charcoal/75">
                        Respect for the legacy you&apos;ve built
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold/60 text-sm mt-1">●</span>
                      <span className="font-serif text-body text-charcoal/75">
                        Flexibility on transition and structure
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold/60 text-sm mt-1">●</span>
                      <span className="font-serif text-body text-charcoal/75">
                        Long-term thinking aligned with your values
                      </span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Second Quote */}
        <section className="py-section-sm px-6 sm:px-8 bg-cream">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-8 border border-charcoal/5 pointer-events-none" />
                <blockquote className="text-center py-8">
                  <p className="font-serif text-xl sm:text-2xl text-charcoal/80 leading-relaxed italic mb-6">
                    &ldquo;{quotes[1].text}&rdquo;
                  </p>
                  <cite className="font-display text-sm tracking-[0.15em] uppercase text-charcoal/50 not-italic">
                    — {quotes[1].attribution}
                  </cite>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Not Financial Engineering */}
        <section className="py-section-sm md:py-section px-6 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-display-md text-charcoal mb-8 tracking-tight text-center">
                Operating Excellence, Not Financial Engineering
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="font-serif text-body-lg text-charcoal/80 leading-relaxed mb-6 text-center">
                We prefer situations where thoughtful operating work—not financial 
                engineering—is the main driver of returns. We&apos;re not interested in 
                leveraged buyouts, cost-cutting exercises, or quick flips.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="font-serif text-body-lg text-charcoal/80 leading-relaxed text-center">
                Instead, we seek businesses where our operating involvement and 
                first-principles thinking can genuinely improve the enterprise—
                creating value for customers, employees, and stakeholders while 
                generating sustainable returns over time.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-sm px-6 sm:px-8 bg-cream">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-serif text-body-lg text-charcoal/75 mb-8 leading-relaxed">
                If our approach resonates with you, we&apos;d love to start a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/#holdings"
                  className="inline-flex items-center justify-center gap-3 font-display text-lg text-charcoal hover:text-gold transition-colors"
                >
                  <span>See our holdings</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-3 font-display text-lg text-charcoal hover:text-gold transition-colors"
                >
                  <span>Get in touch</span>
                  <span>→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

