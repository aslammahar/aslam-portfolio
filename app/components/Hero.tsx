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
    <section id="home" ref={ref} className="min-h-screen flex items-center pt-28 pb-16 px-6 md:px-12 relative overflow-hidden bg-bg-base">
      {/* Background Glows */}
      <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] md:w-[550px] md:h-[550px] bg-[radial-gradient(circle,var(--color-accent-dim)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[0%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-[radial-gradient(circle,var(--color-secondary-dim)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">

        {/* LEFT SECTION */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="fade-up inline-flex items-center gap-2 bg-accent-dim border border-accent-border text-accent-hover text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
            Available for new projects
          </div>

          <h1 className="fade-up text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 text-text-main">
            Hi, I&apos;m{" "}
            <span className="text-gradient drop-shadow-md">
              Aslam Baig
            </span>
          </h1>

          <div className="fade-up text-lg md:text-xl mb-6 h-10 flex items-center justify-center md:justify-start gap-1">
            <span className="text-secondary font-semibold">{displayed}</span>
            <span className="w-[2px] h-[22px] bg-secondary inline-block animate-blink rounded-sm" />
          </div>

          <p className="fade-up text-text-muted text-base md:text-lg leading-relaxed max-w-[460px] mb-8 mx-auto md:mx-0">
            Dedicated PHP Laravel Developer with{" "}
            <strong className="text-text-main font-semibold">2.5+ years</strong> of experience building robust web applications, enterprise CRM/ERP systems, and scalable backend solutions.
          </p>

          <div className="fade-up flex flex-wrap gap-4 justify-center md:justify-start mb-12">
            <a href="#projects" className="bg-accent text-white px-8 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 shadow-[0_4px_20px_var(--color-accent-glow)] hover:shadow-[0_8px_28px_var(--color-accent-glow)] hover:-translate-y-1">
              View My Work
            </a>
            <a href="#contact" className="bg-transparent text-text-main px-8 py-3 rounded-xl font-semibold text-sm md:text-base border border-border transition-all duration-300 hover:border-accent hover:text-accent">
              Contact Me
            </a>
          </div>

          <div className="fade-up flex gap-8 justify-center md:justify-start">
            {[["2.5+", "Years Exp"], ["8+", "Projects"], ["3", "Companies"]].map(([n, l]) => (
              <div key={l} className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-accent leading-none mb-2 group-hover:scale-105 transition-transform">{n}</div>
                <div className="text-xs md:text-sm text-text-muted">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="fade-up flex items-center justify-center order-1 md:order-2">
          <div className="relative w-[280px] h-[350px] md:w-[340px] md:h-[420px]">
            <div className="absolute -inset-6 bg-[radial-gradient(circle,var(--color-accent-dim)_0%,transparent_65%)] rounded-full pointer-events-none" />
            <div className="relative w-full h-full glass-card rounded-[2rem] overflow-hidden animate-float">
              <Image 
                src="/profile.jpg" 
                alt="Aslam Baig" 
                fill 
                priority
                className="object-cover object-[top_center] hover:scale-105 transition-transform duration-700" 
              />
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-bg-base/80 backdrop-blur-xl rounded-2xl p-3 border border-border flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 border border-accent/40 rounded-xl flex items-center justify-center text-xl shadow-[0_0_15px_var(--color-accent-dim)]">⚡</div>
                <div>
                  <div className="text-sm font-semibold text-text-main">PHP Laravel Developer</div>
                  <div className="text-xs text-text-muted">Karachi, Pakistan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
