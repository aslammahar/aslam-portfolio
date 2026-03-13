"use client";
import ScrollReveal from "./ScrollReveal";

const items = [
  { icon: "🎓", degree: "DAE (CIT)", inst: "Govt Jamia Millia Polytechnic Institute Malir, Karachi", type: "Education" },
  { icon: "📜", degree: "Web Designing", inst: "APTECH Metro Star Gate", type: "Certification" },
  { icon: "📜", degree: "Web Development (PHP Laravel)", inst: "APTECH Metro Star Gate", type: "Certification" },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: "100px 40px", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
              color: "var(--accent)", fontSize: "0.8rem", fontWeight: 500,
              padding: "6px 14px", borderRadius: 100, marginBottom: 16,
            }}>Background</div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>Education & Certifications</h2>
          </div>
        </ScrollReveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 16 }}>
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div style={{
                background: "var(--card)", border: "1px solid var(--border)",
                borderRadius: 16, padding: "28px 32px", height: "100%",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--accent-border)"; el.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; }}
              >
                <div style={{
                  width: 48, height: 48, background: "var(--accent-dim)",
                  border: "1px solid var(--accent-border)",
                  borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.4rem", marginBottom: 16,
                }}>{item.icon}</div>
                <div style={{
                  display: "inline-block", background: "rgba(255,255,255,0.06)",
                  fontSize: "0.72rem", color: "var(--muted)", fontWeight: 500,
                  padding: "3px 10px", borderRadius: 100, marginBottom: 10, border: "1px solid var(--border)"
                }}>{item.type}</div>
                <div style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>{item.degree}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>{item.inst}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
