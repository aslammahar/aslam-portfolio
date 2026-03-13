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

const cats = ["All", "Backend", "Frontend", "CMS", "Tools"];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 40px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
              color: "var(--accent)", fontSize: "0.8rem", fontWeight: 500,
              padding: "6px 14px", borderRadius: 100, marginBottom: 16,
            }}>My Expertise</div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text2)" }}>
              Skills & Technologies
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 12 }}>Tools I use to build robust web applications</p>
          </div>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
          {skills.map((skill, i) => (
            <ScrollReveal key={i} delay={i * 45}>
              <div style={{
                background: "var(--card)", border: "1px solid var(--border)",
                borderRadius: 14, padding: "18px 20px", transition: "all 0.3s",
              }}
              onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor="var(--accent-border)"; el.style.transform="translateY(-3px)"; el.style.boxShadow="0 12px 28px rgba(0,0,0,0.2)"; }}
              onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor="var(--border)"; el.style.transform="translateY(0)"; el.style.boxShadow="none"; }}
              >
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <div style={{
                      width:34, height:34, background:"var(--accent-dim)",
                      border:"1px solid var(--accent-border)",
                      borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:"1rem",
                    }}>{skill.icon}</div>
                    <div>
                      <div style={{ fontWeight:600, fontSize:"0.88rem", color:"var(--text2)" }}>{skill.name}</div>
                      <div style={{ fontSize:"0.68rem", color:"var(--muted)", marginTop:1 }}>{skill.cat}</div>
                    </div>
                  </div>
                  <span style={{ color:"var(--accent)", fontSize:"0.82rem", fontWeight:700 }}>{skill.level}%</span>
                </div>
                <div style={{ height:5, background:"var(--border)", borderRadius:3, overflow:"hidden" }}>
                  <div style={{
                    height:"100%", width:`${skill.level}%`,
                    background:`linear-gradient(90deg, var(--accent), #7c3aed)`,
                    borderRadius:3, transition:"width 1.2s ease",
                  }} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
