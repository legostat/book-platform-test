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
      sm: "0 1px 2px rgba(44, 42, 38, 0.05)",
      md: "0 4px 6px -1px rgba(44, 42, 38, 0.08), 0 2px 4px -1px rgba(44, 42, 38, 0.04)",
      lg: "0 10px 15px -3px rgba(44, 42, 38, 0.08), 0 4px 6px -2px rgba(44, 42, 38, 0.04)",
      xl: "0 20px 25px -5px rgba(44, 42, 38, 0.08), 0 10px 10px -5px rgba(44, 42, 38, 0.04)",
      focus: "0 0 0 3px rgba(31, 89, 110, 0.3)",
    },
  },
  font: {
    sans: "var(--font-sans), sans-serif",
    serif: "var(--font-serif), serif",
  },
});
