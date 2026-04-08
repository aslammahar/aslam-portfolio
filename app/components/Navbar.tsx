"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["#home", "Home"],
    ["#experience", "Experience"],
    ["#projects", "Projects"],
    ["#skills", "Skills"],
    ["#contact", "Contact"]
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out px-6 md:px-10 h-16 md:h-20 flex justify-between items-center ${
      scrolled 
        ? "bg-bg-subtle/80 backdrop-blur-xl border-b border-border shadow-sm" 
        : "bg-transparent border-b border-transparent"
    }`}>
      {/* Logo */}
      <a href="#home" className="flex items-center gap-3 no-underline group">
        <div className="w-9 h-9 md:w-10 md:h-10 bg-accent rounded-xl flex items-center justify-center font-bold text-sm text-white shadow-[0_4px_12px_var(--color-accent-glow)] group-hover:scale-105 transition-transform duration-300">
          AB
        </div>
        <span className="text-text-main font-bold text-lg hidden sm:block">Aslam Baig</span>
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-1 lg:gap-2 list-none m-0 p-0">
        {links.map(([href, label]) => (
          <li key={href}>
            <a 
              href={href} 
              className="text-text-muted hover:text-text-main hover:bg-accent-dim text-sm lg:text-base font-medium px-4 py-2 rounded-lg transition-all duration-200 block"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: Theme toggle + Hire Me + Mobile Menu Toggle */}
      <div className="flex items-center gap-3 md:gap-4">
        <ThemeToggle />
        <a 
          href="mailto:aslambaig3141@gmail.com" 
          className="hidden sm:inline-block bg-accent text-white px-5 py-2 md:py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-[0_4px_14px_var(--color-accent-glow)] hover:opacity-90 hover:-translate-y-[1px]"
        >
          Hire Me
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-[2px] bg-text-main transition-transform ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-text-main transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-text-main transition-transform ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Links Dropdown */}
      <div className={`absolute top-full left-0 right-0 bg-bg-base/95 backdrop-blur-xl border-b border-border shadow-lg md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
        <ul className="flex flex-col px-6 gap-2 m-0 p-0">
          {links.map(([href, label]) => (
            <li key={href}>
              <a 
                href={href} 
                className="text-text-muted hover:text-accent text-base font-medium py-3 border-b border-border/50 block w-full"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <a 
              href="mailto:aslambaig3141@gmail.com" 
              className="text-accent font-semibold block py-2"
            >
              Hire Me &rarr;
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
