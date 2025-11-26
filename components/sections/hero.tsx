"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 pt-20 pb-8 relative"
    >
      {/* Crest watermark - subtle presence */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[70%] max-w-2xl aspect-square opacity-[0.035]">
          <Image
            src="/crest.png"
            alt=""
            fill
            className="object-contain"
            unoptimized
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Hero content with decorative frame */}
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Decorative corner accents - fade in after content */}
        <div 
          className={`absolute -inset-8 sm:-inset-12 pointer-events-none transition-opacity duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Top left corner */}
          <div className="absolute top-0 left-0 w-12 h-12 border-l border-t border-charcoal/10" />
          {/* Top right corner */}
          <div className="absolute top-0 right-0 w-12 h-12 border-r border-t border-charcoal/10" />
          {/* Bottom left corner */}
          <div className="absolute bottom-0 left-0 w-12 h-12 border-l border-b border-charcoal/10" />
          {/* Bottom right corner */}
          <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-charcoal/10" />
        </div>

        <div 
          className={`mb-8 flex justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal tracking-tight">
            Mullican Holdings
          </h1>
        </div>
        
        <p 
          className={`font-display text-sm sm:text-base md:text-lg tracking-[0.25em] uppercase text-charcoal/60 mb-6 leading-relaxed text-balance transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          A private holding company building enduring businesses
        </p>
        
        {/* Decorative line with gold tint */}
        <div 
          className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="w-12 h-px bg-gold/50" />
          <span className="text-gold/70 text-xs">&#10022;</span>
          <span className="w-12 h-px bg-gold/50" />
        </div>
        
        <p 
          className={`font-serif text-lg sm:text-xl md:text-2xl text-charcoal/55 leading-relaxed text-balance max-w-xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          through first-principles operating excellence
          <br />
          and long-term stewardship.
        </p>
      </div>
    </section>
  );
}

