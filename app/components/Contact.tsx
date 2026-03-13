"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    // Open mailto with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:aslambaig3141@gmail.com?subject=${subject}&body=${body}`);
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 500);
  };

  const inputStyle = {
    background:"var(--bg)", border:"1px solid var(--border)", color:"var(--text)",
    padding:"11px 14px", borderRadius:10, fontSize:"0.875rem",
    outline:"none", fontFamily:"inherit", width:"100%", transition:"border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding:"100px 40px", background:"var(--bg2)", position:"relative", overflow:"hidden" }}>
      <div style={{
        position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)",
        width:600, height:600,
        background:"radial-gradient(circle, var(--accent-dim) 0%, transparent 65%)",
        pointerEvents:"none",
      }} />
      <div style={{ maxWidth:960, margin:"0 auto" }}>
        <ScrollReveal>
          <div style={{ textAlign:"center", marginBottom:60 }}>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"var(--accent-dim)", border:"1px solid var(--accent-border)",
              color:"var(--accent)", fontSize:"0.8rem", fontWeight:500,
              padding:"6px 14px", borderRadius:100, marginBottom:16,
            }}>Get In Touch</div>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, letterSpacing:"-0.02em", color:"var(--text2)" }}>
              Let&apos;s Connect
            </h2>
            <p style={{ color:"var(--muted)", marginTop:12 }}>
              Open to new projects, freelance work & full-time opportunities
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.3fr", gap:40, alignItems:"start" }}>
          {/* Left */}
          <ScrollReveal>
            <h3 style={{ fontSize:"1.4rem", fontWeight:700, marginBottom:12, color:"var(--text2)" }}>
              Let&apos;s build something<br />
              <span style={{ background:"linear-gradient(135deg, var(--accent), #7c3aed)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                great together.
              </span>
            </h3>
            <p style={{ color:"var(--muted)", fontSize:"0.9rem", lineHeight:1.75, marginBottom:32 }}>
              I&apos;m always interested in new projects and collaborations. Drop a message and I&apos;ll get back to you!
            </p>

            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {[
                { icon:"✉️", label:"Email",    val:"aslambaig3141@gmail.com",    href:"mailto:aslambaig3141@gmail.com" },
                { icon:"📞", label:"Phone",    val:"+92-304-8060234",             href:"tel:+923048060234" },
                { icon:"💼", label:"LinkedIn", val:"linkedin.com/in/aslam-baig",  href:"https://www.linkedin.com/in/aslam-baig-136a9b274/" },
                { icon:"📍", label:"Location", val:"Karachi, Pakistan",           href:null },
              ].map((item, i) => {
                const inner = (
                  <div style={{
                    display:"flex", alignItems:"center", gap:14,
                    padding:"13px 16px", background:"var(--card)",
                    border:"1px solid var(--border)", borderRadius:12,
                    fontSize:"0.875rem", transition:"all 0.2s",
                    color:"var(--text)",
                  }}
                  onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor="var(--accent-border)"; el.style.color="var(--accent)"; }}
                  onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor="var(--border)"; el.style.color="var(--text)"; }}
                  >
                    <div style={{
                      width:36, height:36, background:"var(--accent-dim)",
                      border:"1px solid var(--accent-border)",
                      borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:"1.1rem", flexShrink:0,
                    }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize:"0.7rem", color:"var(--muted)", marginBottom:2 }}>{item.label}</div>
                      <div style={{ fontWeight:500, fontSize:"0.85rem" }}>{item.val}</div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer" style={{ textDecoration:"none" }}>{inner}</a>
                ) : <div key={i}>{inner}</div>;
              })}
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal delay={150}>
            <form onSubmit={handleSubmit} style={{
              background:"var(--card)", border:"1px solid var(--border)",
              borderRadius:18, padding:"32px 28px",
              display:"flex", flexDirection:"column", gap:16,
            }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
                  <label style={{ fontSize:"0.78rem", fontWeight:600, color:"var(--muted)" }}>Your Name *</label>
                  <input
                    value={form.name}
                    onChange={e => setForm({...form, name:e.target.value})}
                    placeholder="John Doe"
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLElement).style.borderColor="var(--accent)"}
                    onBlur={e => (e.target as HTMLElement).style.borderColor="var(--border)"}
                  />
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
                  <label style={{ fontSize:"0.78rem", fontWeight:600, color:"var(--muted)" }}>Email Address *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({...form, email:e.target.value})}
                    placeholder="john@example.com"
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLElement).style.borderColor="var(--accent)"}
                    onBlur={e => (e.target as HTMLElement).style.borderColor="var(--border)"}
                  />
                </div>
              </div>

              <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
                <label style={{ fontSize:"0.78rem", fontWeight:600, color:"var(--muted)" }}>Message *</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({...form, message:e.target.value})}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize:"none" }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor="var(--accent)"}
                  onBlur={e => (e.target as HTMLElement).style.borderColor="var(--border)"}
                />
              </div>

              {status === "error" && (
                <div style={{
                  background:"rgba(239,68,68,0.1)", border:"1px solid rgba(239,68,68,0.3)",
                  color:"#f87171", fontSize:"0.82rem", padding:"10px 14px", borderRadius:8,
                }}>⚠️ Please fill all fields before sending.</div>
              )}

              {status === "sent" && (
                <div style={{
                  background:"var(--accent-dim)", border:"1px solid var(--accent-border)",
                  color:"var(--accent)", fontSize:"0.82rem", padding:"10px 14px", borderRadius:8,
                }}>✅ Message sent! I&apos;ll get back to you soon.</div>
              )}

              <button type="submit" disabled={status==="sending"} style={{
                background: status==="sending" ? "var(--muted2)" : "var(--accent)",
                color:"#fff", padding:"13px 28px", borderRadius:10,
                fontWeight:700, fontSize:"0.9rem", border:"none",
                cursor: status==="sending" ? "not-allowed" : "pointer",
                transition:"all 0.2s", fontFamily:"inherit",
                display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                boxShadow: status==="sending" ? "none" : "0 4px 20px var(--accent-glow)",
              }}
              onMouseEnter={e => { if (status!=="sending") { const el=e.currentTarget as HTMLElement; el.style.transform="translateY(-2px)"; el.style.boxShadow="0 8px 28px var(--accent-glow)"; }}}
              onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.transform="translateY(0)"; el.style.boxShadow="0 4px 20px var(--accent-glow)"; }}
              >
                {status==="sending" ? "⏳ Opening mail..." : "✉️ Send Message"}
              </button>
              <p style={{ fontSize:"0.72rem", color:"var(--muted)", textAlign:"center" }}>
                Clicking will open your email app with message pre-filled
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
