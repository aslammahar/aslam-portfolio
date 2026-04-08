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

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-bg-base relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,var(--color-accent-dim)_0%,transparent_65%)] pointer-events-none" />
      
      <div className="max-w-[960px] mx-auto z-10 relative">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-accent-dim border border-accent-border text-accent hover:bg-accent hover:text-white transition-colors duration-300 text-sm font-semibold px-5 py-1.5 rounded-full mb-5 cursor-default">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-main">
              Let&apos;s Connect
            </h2>
            <p className="text-text-muted mt-4 text-base md:text-lg">
              Open to new projects, freelance work & full-time opportunities
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
          {/* Left */}
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-main leading-tight">
              Let&apos;s build something<br />
              <span className="text-gradient drop-shadow-sm">
                great together.
              </span>
            </h3>
            <p className="text-text-muted text-base leading-relaxed mb-10">
              I&apos;m always interested in new projects and collaborations. Drop a message and I&apos;ll get back to you!
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon:"✉️", label:"Email",    val:"aslambaig3141@gmail.com",    href:"mailto:aslambaig3141@gmail.com" },
                { icon:"📞", label:"Phone",    val:"+92-304-8060234",             href:"tel:+923048060234" },
                { icon:"💼", label:"LinkedIn", val:"linkedin.com/in/aslam-baig",  href:"https://www.linkedin.com/in/aslam-baig-136a9b274/" },
                { icon:"📍", label:"Location", val:"Karachi, Pakistan",           href:null },
              ].map((item, i) => {
                const inner = (
                  <div className="flex items-center gap-4 p-4 glass-card rounded-xl transition-all duration-300 hover:border-accent-border hover:shadow-lg group">
                    <div className="w-10 h-10 md:w-11 md:h-11 bg-accent-dim border border-accent-border rounded-xl flex items-center justify-center text-lg md:text-xl shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-text-muted mb-0.5">{item.label}</div>
                      <div className="font-semibold text-sm md:text-base text-text-main transition-colors group-hover:text-accent">
                        {item.val}
                      </div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block no-underline">
                    {inner}
                  </a>
                ) : <div key={i}>{inner}</div>;
              })}
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal delay={150}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-5 md:gap-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-text-muted ml-1">Your Name *</label>
                  <input
                    value={form.name}
                    onChange={e => setForm({...form, name:e.target.value})}
                    placeholder="John Doe"
                    className="bg-bg-base/50 placeholder:text-text-muted/50 border border-border text-text-main px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-text-muted ml-1">Email Address *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({...form, email:e.target.value})}
                    placeholder="john@example.com"
                    className="bg-bg-base/50 placeholder:text-text-muted/50 border border-border text-text-main px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-muted ml-1">Message *</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({...form, message:e.target.value})}
                  placeholder="Tell me about your project..."
                  className="bg-bg-base/50 placeholder:text-text-muted/50 border border-border text-text-main px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                />
              </div>

              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-500 text-sm px-4 py-3 rounded-xl font-medium flex items-center gap-2">
                  ⚠️ Please fill all fields before sending.
                </div>
              )}

              {status === "sent" && (
                <div className="bg-accent-dim border border-accent-border text-accent text-sm px-4 py-3 rounded-xl font-medium flex items-center gap-2">
                  ✅ Message sent! I&apos;ll get back to you soon.
                </div>
              )}

              <button 
                type="submit" 
                disabled={status==="sending"} 
                className={`flex items-center justify-center gap-2 text-white px-7 py-3.5 rounded-xl font-bold text-sm md:text-base border-none transition-all duration-300 ${
                  status==="sending" 
                    ? "bg-text-muted/50 cursor-not-allowed shadow-none" 
                    : "bg-accent hover:-translate-y-1 hover:shadow-[0_8px_28px_var(--color-accent-glow)] shadow-[0_4px_20px_var(--color-accent-glow)] cursor-pointer"
                }`}
              >
                {status==="sending" ? "⏳ Opening mail..." : "✉️ Send Message"}
              </button>
              <p className="text-xs text-text-muted/70 text-center mt-1">
                Clicking will open your email app with message pre-filled
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
