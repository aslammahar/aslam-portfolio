"use client";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const options = [
  { value:"light",  label:"Light",  icon:"☀️" },
  { value:"dark",   label:"Dark",   icon:"🌙" },
  { value:"system", label:"System", icon:"💻" },
] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = options.find(o => o.value === theme) ?? options[1];

  return (
    <div ref={ref} style={{ position:"relative" }}>
      <button onClick={() => setOpen(!open)} title="Toggle theme" style={{
        width:38, height:38,
        background:"var(--card)", border:"1px solid var(--border)",
        borderRadius:10, cursor:"pointer",
        display:"flex", alignItems:"center", justifyContent:"center",
        fontSize:"1.05rem", transition:"border-color 0.2s",
        fontFamily:"inherit",
      }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor="var(--accent-border)"}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor="var(--border)"}
      >
        {current.icon}
      </button>

      {open && (
        <div style={{
          position:"absolute", top:"calc(100% + 8px)", right:0,
          background:"var(--card)", border:"1px solid var(--border)",
          borderRadius:14, overflow:"hidden", minWidth:140,
          boxShadow:"0 20px 48px rgba(0,0,0,0.3)",
          zIndex:999,
        }}>
          {options.map(opt => (
            <button key={opt.value} onClick={() => { setTheme(opt.value); setOpen(false); }} style={{
              display:"flex", alignItems:"center", gap:10,
              width:"100%", padding:"10px 16px",
              background: theme===opt.value ? "var(--accent-dim)" : "transparent",
              border:"none",
              color: theme===opt.value ? "var(--accent)" : "var(--text)",
              fontSize:"0.85rem", fontWeight: theme===opt.value ? 600 : 400,
              cursor:"pointer", textAlign:"left", fontFamily:"inherit",
              transition:"background 0.15s",
            }}
            onMouseEnter={e => { if (theme!==opt.value) (e.currentTarget as HTMLElement).style.background="var(--accent-dim)"; }}
            onMouseLeave={e => { if (theme!==opt.value) (e.currentTarget as HTMLElement).style.background="transparent"; }}
            >
              <span style={{ fontSize:"1rem" }}>{opt.icon}</span>
              <span>{opt.label}</span>
              {theme===opt.value && <span style={{ marginLeft:"auto", color:"var(--accent)", fontSize:"0.8rem" }}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
