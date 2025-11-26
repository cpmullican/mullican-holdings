import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative py-16 sm:py-24 px-6 sm:px-8 border-t border-charcoal/10 bg-cream">
      {/* Top ornamental border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="text-gold/40 text-xl">&#10022;</span>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative min-h-[240px] flex flex-col items-center justify-center">
          {/* Crest watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
            <div className="relative w-64 h-64">
              <Image
                src="/crest.png"
                alt="Family Crest"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          
          <div className="relative z-10 text-center space-y-8">
            <p className="font-display text-2xl sm:text-3xl text-charcoal tracking-tight transition-colors duration-300 hover:text-charcoal/80 cursor-default">
              Build for the long term.
            </p>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-gold/30" />
              <span className="text-gold/40 text-xs">&#9830;</span>
              <span className="w-8 h-px bg-gold/30" />
            </div>
            
            <div className="font-serif text-sm text-charcoal/55 space-y-3">
              <p className="tracking-wide">Atlanta, Georgia</p>
              <p>© 2025 Mullican Holdings</p>
              <div className="flex justify-center space-x-6 mt-6 pt-4">
                <a
                  href="#"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Privacy
                </a>
                <span className="text-charcoal/20">&#8226;</span>
                <a
                  href="#"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

