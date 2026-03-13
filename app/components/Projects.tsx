"use client";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const xortlogix = [
  { slug:"crm",  name:"CRM & ERP System",       company:"XortLogix",      desc:"Enterprise CRM + ERP system for managing clients, leads, sales pipeline and business operations.",      tech:["Laravel","MySQL","AJAX","Bootstrap"], color:"#eab308" },
  { slug:"ghl",  name:"GoHighLevel Integration", company:"XortLogix",      desc:"Full GoHighLevel platform integration — automating funnels, campaigns, contacts & workflows via Laravel.", tech:["Laravel","GoHighLevel API","PHP","MySQL"], color:"#06b6d4" },
];

const datatronex = [
  { slug:"hmis",  name:"Hospital Mgmt (HMIS)",  company:"Data Tronex", desc:"Complete hospital system for patient records, doctor management, billing, lab reports & operations.", tech:["Laravel","MySQL","Bootstrap","jQuery"], color:"#00d4aa" },
  { slug:"pos",   name:"Cash Counter POS",       company:"Data Tronex", desc:"Point-of-sale system with real-time inventory tracking, cashier management & daily sales reports.",   tech:["Laravel","AJAX","MySQL","JS"],         color:"#a855f7" },
  { slug:"sabzi", name:"Sabzi Mandi (MDS)",      company:"Data Tronex", desc:"Market distribution system for vegetable mandi — vendor tracking, stock management & payments.",      tech:["PHP","Laravel","MySQL"],              color:"#22c55e" },
  { slug:"gym",   name:"Endurance Gym",          company:"Data Tronex", desc:"Gym management platform with member tracking, class scheduling, fee management & attendance.",         tech:["Laravel","Bootstrap","MySQL"],        color:"#f97316" },
  { slug:"vms",   name:"Vehicle Mgmt (VMS)",     company:"Data Tronex", desc:"Fleet management system for vehicle tracking, driver assignments, fuel logs & maintenance schedules.", tech:["Laravel","jQuery","MySQL","PHP"],     color:"#3b82f6" },
];

const fivethech = [
  { slug:"store", name:"Store Management",       company:"5Thech Solutions", desc:"Complete retail store management — inventory, sales, purchase orders, suppliers & financial reporting.", tech:["PHP","Laravel","MySQL","Bootstrap"], color:"#ec4899" },
];

function ProjectCard({ p }: { p: typeof datatronex[0] }) {
  return (
    <div style={{
      background:"var(--card)", border:"1px solid var(--border)",
      borderRadius:16, overflow:"hidden", transition:"all 0.3s", height:"100%",
    }}
    onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor=p.color+"55"; el.style.transform="translateY(-5px)"; el.style.boxShadow=`0 20px 44px rgba(0,0,0,0.25)`; }}
    onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor="var(--border)"; el.style.transform="translateY(0)"; el.style.boxShadow="none"; }}
    >
      {/* Image */}
      <div style={{ position:"relative", width:"100%", height:180, overflow:"hidden", background:"#0d0d0d" }}>
        <Image src={`/projects/${p.slug}.jpg`} alt={p.name} fill
          style={{ objectFit:"cover", objectPosition:"top left", transition:"transform 0.5s" }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform="scale(1.04)"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform="scale(1)"}
        />
        {/* Company badge */}
        <div style={{
          position:"absolute", top:10, left:10,
          background:"rgba(0,0,0,0.8)", backdropFilter:"blur(8px)",
          border:`1px solid ${p.color}44`,
          color:p.color, fontSize:"0.68rem", fontWeight:600, padding:"3px 10px", borderRadius:100,
        }}>{p.company}</div>
        {/* Accent color line bottom */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:2, background:p.color }} />
      </div>

      {/* Content */}
      <div style={{ padding:"18px 20px" }}>
        <h3 style={{ fontSize:"0.96rem", fontWeight:700, marginBottom:8, color:"var(--text2)" }}>{p.name}</h3>
        <p style={{ fontSize:"0.8rem", color:"var(--muted)", lineHeight:1.65, marginBottom:14 }}>{p.desc}</p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
          {p.tech.map(t => (
            <span key={t} style={{
              background:`${p.color}12`, border:`1px solid ${p.color}30`,
              color:p.color, fontSize:"0.68rem", fontWeight:500,
              padding:"2px 9px", borderRadius:100,
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section({ title, projects, label }: { title: string; projects: typeof datatronex; label: string }) {
  return (
    <>
      <ScrollReveal>
        <div style={{
          display:"flex", alignItems:"center", gap:16, marginBottom:24,
        }}>
          <span style={{
            background:"var(--accent-dim)", border:"1px solid var(--accent-border)",
            color:"var(--accent)", fontSize:"0.72rem", fontWeight:700,
            padding:"4px 12px", borderRadius:100, textTransform:"uppercase", letterSpacing:"0.08em",
            whiteSpace:"nowrap",
          }}>{label}</span>
          <div style={{ flex:1, height:1, background:"var(--border)" }} />
        </div>
      </ScrollReveal>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px,1fr))", gap:18, marginBottom:52 }}>
        {projects.map((p,i) => (
          <ScrollReveal key={i} delay={i*70}>
            <ProjectCard p={p} />
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding:"100px 40px", background:"var(--bg2)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <ScrollReveal>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"var(--accent-dim)", border:"1px solid var(--accent-border)",
              color:"var(--accent)", fontSize:"0.8rem", fontWeight:500,
              padding:"6px 14px", borderRadius:100, marginBottom:16,
            }}>My Work</div>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, letterSpacing:"-0.02em", color:"var(--text2)" }}>
              Featured Projects
            </h2>
            <p style={{ color:"var(--muted)", marginTop:12, fontSize:"0.95rem" }}>
              Real-world Laravel & PHP applications built across 3 companies
            </p>
          </div>
        </ScrollReveal>

        <Section title="XortLogix" projects={xortlogix} label="XortLogix" />
        <Section title="Data Tronex" projects={datatronex} label="Data Tronex" />
        <Section title="5Thech Solutions" projects={fivethech} label="5Thech Solutions" />
      </div>
    </section>
  );
}
