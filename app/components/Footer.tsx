"use client";
export default function Footer() {
  return (
    <footer className="bg-bg-base border-t border-border py-8 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 md:w-9 md:h-9 bg-accent rounded-lg flex items-center justify-center font-bold text-xs md:text-sm text-white shadow-[0_4px_12px_var(--color-accent-glow)]">
            AB
          </div>
          <span className="font-semibold text-sm md:text-base text-text-main">Aslam Baig</span>
        </div>
        
        <span className="text-xs md:text-sm text-text-muted/80 text-center md:text-left order-3 md:order-2">
          © 2026 Aslam Baig. All rights reserved.
        </span>
        
        <div className="flex gap-4 order-2 md:order-3">
          {[
            ["mailto:aslambaig3141@gmail.com","✉️"],
            ["https://www.linkedin.com/in/aslam-baig-136a9b274/","💼"],
          ].map(([href, icon]) => (
            <a 
              key={href} 
              href={href} 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-lg no-underline transition-all duration-300 hover:border-accent-border hover:bg-accent-dim hover:-translate-y-1 hover:shadow-lg"
            >
              {icon}
            </a>
          ))}
        </div>
        
      </div>
    </footer>
  );
}
