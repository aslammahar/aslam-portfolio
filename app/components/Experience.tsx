"use client";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    period: "Jul 2025 — Present",
    status: "Current",
    company: "XortLogix",
    role: "Laravel Developer",
    location: "Islamabad, Pakistan",
    color: "#a855f7",
    points: [
      "Developing CRM and ERP systems using Laravel framework",
      "Working with GoHighLevel platform integration using Laravel",
      "Building scalable enterprise web applications",
      "Implementing complex business logic and database architecture",
    ],
    projects: ["CRM System","ERP System","GoHighLevel Integration"],
  },
  {
    period: "Jan 2024 — Jun 2025",
    status: "Previous",
    company: "Data Tronex",
    role: "PHP (Laravel) Developer",
    location: "Karachi, Pakistan",
    color: "#7c3aed",
    points: [
      "Worked on new/existing web applications for clients",
      "Implementing requirement design, database, and architecture",
      "Modifications in already built software for clients",
      "Key role in Application Development & Database Analysis",
      "Managed Documentation for Software Applications",
    ],
    projects: ["HMIS","Cash Counter (POS)","Sabzi Mandi (MDS)","Endurance Gym","VMS","Geneva Threads"],
  },
  {
    period: "Aug 2022 — Nov 2023",
    status: "Previous",
    company: "5Thech Solutions",
    role: "PHP (Laravel) Developer",
    location: "Karachi, Pakistan",
    color: "#c084fc",
    points: [
      "Worked on new/existing web applications for clients",
      "Implementing requirement design, database, and architecture",
      "Modifications in already built software for clients",
      "Key role in Application Development & Software Analysis",
      "Managed Documentation for Software Applications",
    ],
    projects: ["Store Management System","One Star Lube Shop"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 bg-bg-base relative">
      <div className="max-w-[900px] mx-auto z-10 relative">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-accent-dim border border-accent-border text-accent hover:bg-accent hover:text-white transition-colors duration-300 text-sm font-semibold px-5 py-1.5 rounded-full mb-5 cursor-default">
              Professional Journey
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-main">
              Work Experience
            </h2>
            <p className="text-text-muted mt-4 text-base md:text-lg">
              A journey through my professional development
            </p>
          </div>
        </ScrollReveal>

        {experiences.map((exp, i) => (
          <ScrollReveal key={i} delay={i * 150}>
            <div className={`grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr] gap-x-5 md:gap-x-7 ${i < experiences.length - 1 ? 'mb-0' : 'mb-0'}`}>
              
              {/* Left: dot + line */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 flex items-center justify-center text-lg shrink-0 z-10 shadow-lg"
                  style={{ background: `${exp.color}20`, borderColor: exp.color, boxShadow: `0 0 16px ${exp.color}44` }}
                >
                  💼
                </div>
                {i < experiences.length - 1 && (
                  <div 
                    className="w-px flex-1 min-h-[40px] md:min-h-[60px] my-1.5 md:my-2" 
                    style={{ background: `linear-gradient(to bottom, ${exp.color}66, ${experiences[i+1].color}33)` }} 
                  />
                )}
              </div>

              {/* Right: card */}
              <div className={`${i < experiences.length - 1 ? 'pb-8 md:pb-10' : ''}`}>
                <div 
                  className="glass-card rounded-2xl p-6 md:p-7 transition-all duration-300 hover:translate-x-1"
                  style={{ '--hover-border': `${exp.color}66` } as React.CSSProperties}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = exp.color + "66"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--color-border)"; }}
                >
                  <div className="flex flex-wrap md:flex-nowrap justify-between items-start mb-4 gap-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-1 text-text-main">{exp.company}</h3>
                      <p className="font-semibold text-sm md:text-base" style={{ color: exp.color }}>{exp.role}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1.5 md:gap-1 w-full md:w-auto">
                      <div 
                        className={`text-[0.7rem] font-bold px-2.5 py-0.5 rounded-full border ${i === 0 ? '' : 'bg-white/5 border-border text-text-muted'}`}
                        style={i === 0 ? { background: `${exp.color}20`, borderColor: `${exp.color}44`, color: exp.color } : {}}
                      >
                        {i === 0 ? "🟢 Current" : "Previous"}
                      </div>
                      <div className="text-[0.8rem] text-text-muted font-medium">{exp.period}</div>
                      <div className="text-[0.75rem] text-text-muted/80">📍 {exp.location}</div>
                    </div>
                  </div>

                  <ul className="list-none mb-5 space-y-1.5">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-sm md:text-[0.9rem] text-text-muted pl-4 md:pl-5 relative leading-relaxed">
                        <span className="absolute left-0 top-[3px] md:top-1 text-[0.75rem]" style={{ color: exp.color }}>▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.projects.map(proj => (
                      <span 
                        key={proj} 
                        className="text-[0.7rem] md:text-xs font-medium px-2.5 py-1 rounded-full border"
                        style={{ background: `${exp.color}10`, borderColor: `${exp.color}30`, color: exp.color }}
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
