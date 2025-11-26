"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Sectors", href: "#sectors" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      // Track if page is scrolled for styling
      setScrolled(window.scrollY > 20);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-ivory/95 backdrop-blur-sm border-b border-charcoal/10 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-center h-20 relative">
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-serif text-sm tracking-[0.15em] uppercase transition-all duration-300 relative group ${
                    isActive
                      ? "text-charcoal"
                      : "text-charcoal/50 hover:text-charcoal"
                  }`}
                >
                  {item.label}
                  {/* Animated gold underline on hover */}
                  <span 
                    className={`absolute -bottom-1 left-1/2 h-px bg-gold/60 transition-all duration-300 ease-out ${
                      isActive 
                        ? "w-full -translate-x-1/2" 
                        : "w-0 group-hover:w-full group-hover:-translate-x-1/2"
                    }`} 
                  />
                  {/* Small ornament for active state */}
                  {isActive && (
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-gold/50 text-[8px]">&#9830;</span>
                  )}
                </Link>
              );
            })}
          </div>
          <div className="md:hidden absolute right-6 sm:right-8">
            <button
              className="font-serif text-charcoal text-sm tracking-widest uppercase transition-colors hover:text-charcoal/70"
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden pb-8 border-t border-charcoal/10 mt-4 pt-6 bg-ivory/95">
            <div className="flex flex-col space-y-5">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleMobileLinkClick}
                    className={`font-serif text-sm tracking-[0.15em] uppercase transition-colors ${
                      isActive
                        ? "text-charcoal"
                        : "text-charcoal/50"
                    }`}
                  >
                    {isActive && <span className="text-gold/70 mr-2">&#9830;</span>}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

