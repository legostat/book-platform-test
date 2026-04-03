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
      sm: "0 1px 2px rgba(0, 0, 0, 0.4)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.4)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.4)",
      focus: "0 0 0 3px rgba(82, 174, 207, 0.4)",
    },
  },
  font: {
    sans: "var(--font-sans), sans-serif",
    serif: "var(--font-serif), serif",
  },
});
