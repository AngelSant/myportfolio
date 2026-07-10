"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import styles from "./ThemeToggle.module.css";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setTheme(getCurrentTheme());
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const toggleTheme = () => {
    const currentTheme = theme ?? getCurrentTheme();
    const nextTheme: Theme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);

    setTheme(nextTheme);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}>
      <span
        className={`${styles.iconWrapper} ${
          theme === null
            ? styles.hiddenIcon
            : isDark
              ? styles.darkIcon
              : styles.lightIcon
        }`}>
        {isDark ? (
          <Moon size={18} strokeWidth={2} aria-hidden="true" />
        ) : (
          <Sun size={18} strokeWidth={2} aria-hidden="true" />
        )}
      </span>
    </button>
  );
}
