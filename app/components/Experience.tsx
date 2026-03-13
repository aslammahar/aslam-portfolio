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
    <section id="experience" style={{ padding: "100px 40px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
              color: "var(--accent)", fontSize: "0.8rem", fontWeight: 500,
              padding: "6px 14px", borderRadius: 100, marginBottom: 16,
            }}>Professional Journey</div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text2)" }}>
              Work Experience
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 12 }}>A journey through my professional development</p>
          </div>
        </ScrollReveal>

        {experiences.map((exp, i) => (
          <ScrollReveal key={i} delay={i * 150}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "0 28px",
              marginBottom: i < experiences.length - 1 ? 0 : 0,
            }}>
              {/* Left: dot + line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `${exp.color}20`,
                  border: `2px solid ${exp.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.1rem", flexShrink: 0,
                  boxShadow: `0 0 16px ${exp.color}44`,
                  zIndex: 1,
                }}>💼</div>
                {i < experiences.length - 1 && (
                  <div style={{ width: 1, flex: 1, minHeight: 40, background: `linear-gradient(to bottom, ${exp.color}66, ${experiences[i+1].color}33)`, margin: "4px 0" }} />
                )}
              </div>

              {/* Right: card */}
              <div style={{ paddingBottom: i < experiences.length - 1 ? 32 : 0 }}>
                <div style={{
                  background: "var(--card)", border: "1px solid var(--border)",
                  borderRadius: 16, padding: "24px 28px", marginBottom: 0,
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = exp.color + "66"; el.style.transform = "translateX(4px)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateX(0)"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14, flexWrap: "wrap", gap: 10 }}>
                    <div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 3, color: "var(--text2)" }}>{exp.company}</h3>
                      <p style={{ color: exp.color, fontSize: "0.875rem", fontWeight: 600 }}>{exp.role}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                      <div style={{
                        background: i === 0 ? `${exp.color}20` : "rgba(255,255,255,0.06)",
                        border: `1px solid ${i === 0 ? exp.color + "44" : "var(--border)"}`,
                        color: i === 0 ? exp.color : "var(--muted)",
                        fontSize: "0.72rem", fontWeight: 600,
                        padding: "3px 10px", borderRadius: 100,
                      }}>{i === 0 ? "🟢 Current" : "Previous"}</div>
                      <div style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{exp.period}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--muted2)" }}>📍 {exp.location}</div>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", marginBottom: 16 }}>
                    {exp.points.map((p, j) => (
                      <li key={j} style={{
                        fontSize: "0.85rem", color: "var(--muted)",
                        padding: "2px 0 2px 18px", position: "relative", lineHeight: 1.6,
                      }}>
                        <span style={{ position: "absolute", left: 0, color: exp.color, fontSize: "0.75rem", top: 4 }}>▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {exp.projects.map(proj => (
                      <span key={proj} style={{
                        background: `${exp.color}15`,
                        border: `1px solid ${exp.color}33`,
                        color: exp.color, fontSize: "0.72rem", fontWeight: 500,
                        padding: "3px 10px", borderRadius: 100,
                      }}>{proj}</span>
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
