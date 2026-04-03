"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import * as styles from "./ThemeSwitcher.css";

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!isMounted) {
    return <div className={styles.container} aria-hidden="true" />;
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <div className={styles.container}>
      <button
        onClick={() => setTheme("light")}
        className={styles.button({ active: currentTheme === "light" })}
        aria-label="Світла тема"
        aria-pressed={currentTheme === "light"}
      >
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={styles.button({ active: currentTheme === "dark" })}
        aria-label="Темна тема"
        aria-pressed={currentTheme === "dark"}
      >
        Dark
      </button>
      <button
        onClick={() => setTheme("sepia")}
        className={styles.button({ active: currentTheme === "sepia" })}
        aria-label="Тема сепія"
        aria-pressed={currentTheme === "sepia"}
      >
        Sepia
      </button>
    </div>
  );
}
