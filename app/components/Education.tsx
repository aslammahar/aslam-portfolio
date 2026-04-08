"use client";
import ScrollReveal from "./ScrollReveal";

const items = [
  { icon: "🎓", degree: "DAE (CIT)", inst: "Govt Jamia Millia Polytechnic Institute Malir, Karachi", type: "Education" },
  { icon: "📜", degree: "Web Designing", inst: "APTECH Metro Star Gate", type: "Certification" },
  { icon: "📜", degree: "Web Development (PHP Laravel)", inst: "APTECH Metro Star Gate", type: "Certification" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6 md:px-12 bg-bg-subtle relative">
      <div className="max-w-[1200px] mx-auto z-10 relative">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-accent-dim border border-accent-border text-accent text-sm font-semibold px-5 py-1.5 rounded-full mb-5 cursor-default hover:bg-accent hover:text-white transition-colors duration-300">
              Background
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-main">
              Education & Certifications
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass-card rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:border-accent-border hover:-translate-y-1.5 hover:shadow-xl group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-accent-dim border border-accent-border rounded-xl flex items-center justify-center text-2xl mb-5 shadow-inner group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="inline-block bg-white/5 text-[0.7rem] md:text-xs text-text-muted font-medium px-3 py-1 rounded-full mb-3 border border-border">
                  {item.type}
                </div>
                <div className="text-lg md:text-xl font-bold mb-2 text-text-main">{item.degree}</div>
                <div className="text-sm text-text-muted leading-relaxed">{item.inst}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
