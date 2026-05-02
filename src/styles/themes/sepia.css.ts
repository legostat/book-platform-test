import { createTheme } from "@vanilla-extract/css";
import { vars } from "../vars.css";

export const sepiaThemeClass = createTheme(vars, {
  color: {
    brand: {
      primary: "#9A422D",
      primaryHover: "#7A3220",
      secondary: "#5E8062",
      secondaryHover: "#436147",
    },
    background: {
      primary: "#F4EAD3",
      secondary: "#EADDAD",
      tertiary: "#D8C28F",
      elevated: "#F9F0D9",
    },
    text: {
      primary: "#433422",
      secondary: "#695640",
      placeholder: "#927D63",
      inverse: "#F4EAD3",
    },
    border: {
      neutral: "#CDA87E",
      focus: "#9A422D",
    },
    status: {
      error: "#C62828",
      warning: "#9E4D00",
      success: "#2E7D32",
      info: "#0277BD",
    },
    shadow: {
      sm: "0 1px 2px rgba(67, 52, 34, 0.12)",
      md: "0 4px 8px -1px rgba(67, 52, 34, 0.15), 0 2px 4px -1px rgba(67, 52, 34, 0.1)",
      lg: "0 12px 20px -4px rgba(67, 52, 34, 0.18), 0 4px 8px -2px rgba(67, 52, 34, 0.12)",
      xl: "0 24px 32px -8px rgba(67, 52, 34, 0.2), 0 12px 16px -4px rgba(67, 52, 34, 0.12)",
      focus: "0 0 0 3px rgba(154, 66, 45, 0.3)",
    },
  },
  font: {
    sans: "var(--font-sans), sans-serif",
    serif: "var(--font-serif), serif",
  },
});
