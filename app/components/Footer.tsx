"use client";
export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg)", borderTop: "1px solid var(--border)",
      padding: "32px 40px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, background: "var(--accent)", borderRadius: 6,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: "0.75rem", color: "#000",
          }}>AB</div>
          <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>Aslam Baig</span>
        </div>
        <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
          © 2026 Aslam Baig. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: 16 }}>
          {[
            ["mailto:aslambaig3141@gmail.com","✉️"],
            ["https://www.linkedin.com/in/aslam-baig-136a9b274/","💼"],
          ].map(([href, icon]) => (
            <a key={href} href={href} target="_blank" rel="noreferrer" style={{
              width: 36, height: 36, background: "var(--card)",
              border: "1px solid var(--border)", borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1rem", textDecoration: "none", transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}
            >{icon}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
