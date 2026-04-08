"use client";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "Laravel",    icon: "🔴", level: 95, cat: "Backend" },
  { name: "PHP",        icon: "🐘", level: 92, cat: "Backend" },
  { name: "MySQL",      icon: "🗄️", level: 88, cat: "Backend" },
  { name: "JavaScript", icon: "⚡", level: 80, cat: "Frontend" },
  { name: "jQuery",     icon: "💫", level: 82, cat: "Frontend" },
  { name: "AJAX",       icon: "🔄", level: 85, cat: "Backend" },
  { name: "React.js",   icon: "⚛️", level: 70, cat: "Frontend" },
  { name: "Next.js",    icon: "▲",  level: 68, cat: "Frontend" },
  { name: "HTML5",      icon: "🌐", level: 90, cat: "Frontend" },
  { name: "CSS3",       icon: "🎨", level: 85, cat: "Frontend" },
  { name: "Bootstrap",  icon: "🅱️", level: 88, cat: "Frontend" },
  { name: "WordPress",  icon: "📝", level: 75, cat: "CMS" },
  { name: "GitHub",     icon: "🐙", level: 80, cat: "Tools" },
  { name: "JIRA",       icon: "📋", level: 72, cat: "Tools" },
  { name: "Trello",     icon: "📌", level: 74, cat: "Tools" },
  { name: "VS Code",    icon: "💻", level: 90, cat: "Tools" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-6 md:px-12 bg-bg-base relative">
      <div className="max-w-[1200px] mx-auto z-10 relative">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-dim border border-accent-border text-accent text-sm font-semibold px-5 py-1.5 rounded-full mb-5 cursor-default hover:bg-accent hover:text-white transition-colors duration-300">
              My Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-main">
              Skills & Technologies
            </h2>
            <p className="text-text-muted mt-4 text-base md:text-lg">
              Tools I use to build robust web applications
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {skills.map((skill, i) => (
            <ScrollReveal key={i} delay={i * 45}>
              <div className="glass-card rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-accent-border hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] group">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-11 md:h-11 bg-accent-dim border border-accent-border rounded-xl flex items-center justify-center text-lg md:text-xl shadow-inner group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm md:text-base text-text-main group-hover:text-accent transition-colors">{skill.name}</div>
                      <div className="text-xs text-text-muted mt-0.5">{skill.cat}</div>
                    </div>
                  </div>
                  <span className="text-accent text-sm font-bold">{skill.level}%</span>
                </div>
                <div className="h-1.5 md:h-2 bg-border rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-accent to-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }} 
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
