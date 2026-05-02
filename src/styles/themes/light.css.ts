import { createTheme } from "@vanilla-extract/css";
import { vars } from "../vars.css";

export const lightThemeClass = createTheme(vars, {
  color: {
    brand: {
      primary: "#1F596E",
      primaryHover: "#184657",
      secondary: "#CE7A58",
      secondaryHover: "#A95C3D",
    },
    background: {
      primary: "#FDFBF7",
      secondary: "#F4F0EA",
      tertiary: "#EBE5DC",
      elevated: "#FFFFFF",
    },
    text: {
      primary: "#2C2A26",
      secondary: "#5A5752",
      placeholder: "#8C8880",
      inverse: "#FFFFFF",
    },
    border: {
      neutral: "#D8D1C7",
      focus: "#1F596E",
    },
    status: {
      error: "#D32F2F",
      warning: "#B25000",
      success: "#2E7D32",
      info: "#0288D1",
    },
    shadow: {
      sm: "0 1px 2px rgba(44, 42, 38, 0.06)",
      md: "0 4px 8px -1px rgba(44, 42, 38, 0.1), 0 2px 4px -1px rgba(44, 42, 38, 0.06)",
      lg: "0 12px 20px -4px rgba(44, 42, 38, 0.12), 0 4px 8px -2px rgba(44, 42, 38, 0.06)",
      xl: "0 24px 32px -8px rgba(44, 42, 38, 0.14), 0 12px 16px -4px rgba(44, 42, 38, 0.08)",
      focus: "0 0 0 3px rgba(31, 89, 110, 0.3)",
    },
  },
  font: {
    sans: "var(--font-sans), sans-serif",
    serif: "var(--font-serif), serif",
  },
});
