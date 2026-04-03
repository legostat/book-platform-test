"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { lightThemeClass } from "@/styles/themes/light.css";
import { darkThemeClass } from "@/styles/themes/dark.css";
import { sepiaThemeClass } from "@/styles/themes/sepia.css";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      value={{
        light: lightThemeClass,
        dark: darkThemeClass,
        sepia: sepiaThemeClass,
      }}
    >
      {children}
    </NextThemesProvider>
  );
}
