"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "./icons";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentTheme = document.documentElement.getAttribute("data-theme") as "dark" | "light";
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("plenum-theme", nextTheme);
    } catch {}
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={mounted && theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      title={mounted && theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {mounted && theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
