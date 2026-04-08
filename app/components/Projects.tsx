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
    <div 
      className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      style={{ '--hover-color': p.color } as React.CSSProperties}
    >
      {/* Image */}
      <div className="relative w-full h-[200px] overflow-hidden bg-[#0d0d0d]">
        <Image 
          src={`/projects/${p.slug}.jpg`} 
          alt={p.name} 
          fill
          className="object-cover object-[top_left] transition-transform duration-700 group-hover:scale-105"
        />
        {/* Company badge */}
        <div 
          className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-[0.7rem] font-semibold px-3 py-1 rounded-full z-10 border"
          style={{ borderColor: `${p.color}44`, color: p.color }}
        >
          {p.company}
        </div>
        {/* Accent color line bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 z-10" style={{ background: p.color }} />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-2 text-text-main group-hover:text-[var(--hover-color)] transition-colors">{p.name}</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">{p.desc}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {p.tech.map(t => (
            <span 
              key={t} 
              className="text-[0.7rem] font-medium px-2.5 py-1 rounded-full border bg-opacity-10 dark:bg-opacity-20"
              style={{ backgroundColor: `${p.color}15`, borderColor: `${p.color}30`, color: p.color }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section({ title, projects, label }: { title: string; projects: typeof datatronex; label: string }) {
  return (
    <div className="mb-14">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-8">
          <span className="bg-accent-dim border border-accent-border text-accent text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
            {label}
          </span>
          <div className="flex-1 h-[1px] bg-border" />
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((p,i) => (
          <ScrollReveal key={i} delay={i*70}>
            <ProjectCard p={p} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-6 md:px-12 bg-bg-subtle relative">
      <div className="max-w-[1200px] mx-auto z-10 relative">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-dim border border-accent-border text-accent hover:bg-accent hover:text-white transition-colors duration-300 text-sm font-semibold px-5 py-1.5 rounded-full mb-5 cursor-default">
              My Work
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-main">
              Featured Projects
            </h2>
            <p className="text-text-muted mt-4 text-base md:text-lg max-w-2xl mx-auto">
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
