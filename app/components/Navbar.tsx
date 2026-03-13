"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [["#home","Home"],["#experience","Experience"],["#projects","Projects"],["#skills","Skills"],["#contact","Contact"]];

  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:100,
      padding:"0 40px", height:64,
      display:"flex", justifyContent:"space-between", alignItems:"center",
      background: scrolled ? "rgba(var(--bg-rgb, 10,10,10),0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      backgroundColor: scrolled ? "var(--bg)" : "transparent",
      transition:"all 0.3s ease",
    }}>
      {/* Logo */}
      <a href="#home" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:10 }}>
        <div style={{
          width:34, height:34, background:"var(--accent)", borderRadius:9,
          display:"flex", alignItems:"center", justifyContent:"center",
          fontWeight:700, fontSize:"0.85rem", color:"#fff",
          boxShadow:"0 4px 12px var(--accent-glow)",
        }}>AB</div>
        <span style={{ color:"var(--text2)", fontWeight:600, fontSize:"1rem" }}>Aslam Baig</span>
      </a>

      {/* Links */}
      <ul style={{ display:"flex", gap:4, listStyle:"none" }}>
        {links.map(([href, label]) => (
          <li key={href}>
            <a href={href} style={{
              color:"var(--muted)", textDecoration:"none",
              fontSize:"0.875rem", fontWeight:500,
              padding:"6px 14px", borderRadius:8,
              transition:"all 0.2s", display:"block",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color="var(--text)"; el.style.background="var(--accent-dim)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color="var(--muted)"; el.style.background="transparent"; }}
            >{label}</a>
          </li>
        ))}
      </ul>

      {/* Right: theme toggle + hire me */}
      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
        <ThemeToggle />
        <a href="mailto:aslambaig3141@gmail.com" style={{
          background:"var(--accent)", color:"#fff",
          padding:"8px 20px", borderRadius:9,
          fontWeight:600, fontSize:"0.875rem", textDecoration:"none",
          transition:"all 0.2s", boxShadow:"0 4px 14px var(--accent-glow)",
        }}
        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity="0.85"; el.style.transform="translateY(-1px)"; }}
        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity="1"; el.style.transform="translateY(0)"; }}
        >Hire Me</a>
      </div>
    </nav>
  );
}
