import { createTheme } from "@vanilla-extract/css";
import { vars } from "../vars.css";

export const darkThemeClass = createTheme(vars, {
  color: {
    brand: {
      primary: "#52AECF",
      primaryHover: "#6EC0DE",
      secondary: "#E89C7E",
      secondaryHover: "#F7B399",
    },
    background: {
      primary: "#161618",
      secondary: "#212124",
      tertiary: "#2B2B2F",
      elevated: "#1E1E22",
    },
    text: {
      primary: "#EAE6DF",
      secondary: "#A8A39C",
      placeholder: "#706C66",
      inverse: "#161618",
    },
    border: {
      neutral: "#3C3C42",
      focus: "#52AECF",
    },
    status: {
      error: "#F44336",
      warning: "#FF9800",
      success: "#4CAF50",
      info: "#29B6F6",
    },
    shadow: {
      sm: "0 1px 2px rgba(0, 0, 0, 0.5)",
      md: "0 4px 8px -1px rgba(0, 0, 0, 0.6), 0 2px 4px -1px rgba(0, 0, 0, 0.4)",
      lg: "0 12px 20px -4px rgba(0, 0, 0, 0.7), 0 4px 8px -2px rgba(0, 0, 0, 0.5)",
      xl: "0 24px 32px -8px rgba(0, 0, 0, 0.7), 0 12px 16px -4px rgba(0, 0, 0, 0.5)",
      focus: "0 0 0 3px rgba(82, 174, 207, 0.4)",
    },
  },
  font: {
    sans: "var(--font-sans), sans-serif",
    serif: "var(--font-serif), serif",
  },
});
