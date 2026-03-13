"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light" | "system";

const ThemeCtx = createContext<{
  theme: Theme;
  resolved: "dark" | "light";
  setTheme: (t: Theme) => void;
}>({ theme: "dark", resolved: "dark", setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [resolved, setResolved] = useState<"dark" | "light">("dark");

  const applyTheme = (t: Theme) => {
    let actual: "dark" | "light" = "dark";
    if (t === "system") {
      actual = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    } else {
      actual = t;
    }
    setResolved(actual);
    document.documentElement.setAttribute("data-theme", actual);
    localStorage.setItem("theme", t);
  };

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "dark";
    setThemeState(saved);
    applyTheme(saved);

    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const handler = () => { if (theme === "system") applyTheme("system"); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    applyTheme(t);
  };

  return (
    <ThemeCtx.Provider value={{ theme, resolved, setTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
