"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const roles = ["PHP Laravel Developer", "Backend Developer", "Web App Developer", "CRM & ERP Specialist"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    els?.forEach((el, i) => setTimeout(() => el.classList.add("visible"), 100 + i * 130));
  }, []);

  return (
    <section id="home" ref={ref} style={{
      minHeight: "100vh",
      display: "flex", alignItems: "center",
      padding: "88px 40px 60px",
      position: "relative", overflow: "hidden",
      background: "var(--bg)",
    }}>
      {/* Glows */}
      <div style={{ position:"absolute", top:"10%", right:"5%", width:550, height:550, background:"radial-gradient(circle, var(--accent-dim) 0%, transparent 65%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"5%", left:"0%", width:350, height:350, background:"radial-gradient(circle, var(--accent-dim) 0%, transparent 65%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:1200, margin:"0 auto", width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center" }}>

        {/* LEFT */}
        <div>
          <div className="fade-up" style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"var(--accent-dim)", border:"1px solid var(--accent-border)",
            color:"var(--accent)", fontSize:"0.82rem", fontWeight:500,
            padding:"6px 16px", borderRadius:100, marginBottom:28,
          }}>
            <span style={{ width:7,height:7,background:"var(--accent)",borderRadius:"50%",display:"inline-block",animation:"pulse-glow 2s infinite" }} />
            Available for new projects
          </div>

          <h1 className="fade-up" style={{
            fontSize:"clamp(2.6rem, 5vw, 4.2rem)", fontWeight:700, lineHeight:1.1,
            letterSpacing:"-0.02em", marginBottom:16, color:"var(--text2)",
          }}>
            Hi, I&apos;m{" "}
            <span style={{ background:"linear-gradient(135deg, var(--accent), #7c3aed)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Aslam Baig
            </span>
          </h1>

          <div className="fade-up" style={{ fontSize:"1.2rem", marginBottom:24, height:38, display:"flex", alignItems:"center", gap:4 }}>
            <span style={{ color:"var(--accent)", fontWeight:600 }}>{displayed}</span>
            <span style={{ width:2,height:22,background:"var(--accent)",display:"inline-block",animation:"blink 1s infinite",borderRadius:1 }} />
          </div>

          <p className="fade-up" style={{ color:"var(--muted)", fontSize:"0.975rem", lineHeight:1.8, maxWidth:460, marginBottom:40 }}>
            Dedicated PHP Laravel Developer with{" "}
            <strong style={{ color:"var(--text)" }}>2.5+ years</strong> of experience building robust web applications, enterprise CRM/ERP systems, and scalable backend solutions.
          </p>

          <div className="fade-up" style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:52 }}>
            <a href="#projects" style={{
              background:"var(--accent)", color:"#fff",
              padding:"12px 28px", borderRadius:10, fontWeight:600, fontSize:"0.9rem",
              textDecoration:"none", transition:"all 0.2s", display:"inline-block",
              boxShadow:"0 4px 20px var(--accent-glow)",
            }}
            onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.transform="translateY(-2px)"; el.style.boxShadow="0 8px 28px var(--accent-glow)"; }}
            onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.transform="translateY(0)"; el.style.boxShadow="0 4px 20px var(--accent-glow)"; }}
            >View My Work</a>
            <a href="#contact" style={{
              background:"transparent", color:"var(--text)",
              padding:"12px 28px", borderRadius:10, fontWeight:600, fontSize:"0.9rem",
              textDecoration:"none", border:"1px solid var(--border)", transition:"all 0.2s", display:"inline-block",
            }}
            onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor="var(--accent-border)"; el.style.color="var(--accent)"; }}
            onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor="var(--border)"; el.style.color="var(--text)"; }}
            >Contact Me</a>
          </div>

          <div className="fade-up" style={{ display:"flex", gap:36 }}>
            {[["2.5+","Years Exp"],["8+","Projects"],["3","Companies"]].map(([n,l]) => (
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ fontSize:"2rem", fontWeight:700, color:"var(--accent)", lineHeight:1 }}>{n}</div>
                <div style={{ fontSize:"0.78rem", color:"var(--muted)", marginTop:5 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="fade-up" style={{ display:"flex", justifyContent:"center" }}>
          <div style={{ position:"relative", width:340, height:420 }}>
            <div style={{ position:"absolute", inset:-30, background:"radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)", borderRadius:"50%", pointerEvents:"none" }} />
            <div style={{
              position:"relative", width:"100%", height:"100%",
              background:"var(--card)", borderRadius:24,
              border:"1px solid var(--border)", overflow:"hidden",
              boxShadow:"0 40px 80px rgba(0,0,0,0.4)",
              animation:"float 5s ease-in-out infinite",
            }}>
              <Image src="/profile.jpg" alt="Aslam Baig" fill priority
                style={{ objectFit:"cover", objectPosition:"top center" }} />
              <div style={{
                position:"absolute", bottom:16, left:16, right:16,
                background:"rgba(8,8,8,0.88)", backdropFilter:"blur(16px)",
                borderRadius:12, padding:"12px 16px",
                border:"1px solid var(--border)",
                display:"flex", alignItems:"center", gap:12,
              }}>
                <div style={{
                  width:38, height:38, background:"var(--accent-dim)",
                  border:"1px solid var(--accent-border)",
                  borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem",
                }}>⚡</div>
                <div>
                  <div style={{ fontSize:"0.82rem", fontWeight:600, color:"#f0f0f0" }}>PHP Laravel Developer</div>
                  <div style={{ fontSize:"0.72rem", color:"#f0f0f0" }}>Karachi, Pakistan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-glow { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.45;transform:scale(0.8)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
      `}</style>
    </section>
  );
}
