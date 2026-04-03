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
      sm: "0 1px 2px rgba(67, 52, 34, 0.1)",
      md: "0 4px 6px -1px rgba(67, 52, 34, 0.12), 0 2px 4px -1px rgba(67, 52, 34, 0.08)",
      lg: "0 10px 15px -3px rgba(67, 52, 34, 0.15), 0 4px 6px -2px rgba(67, 52, 34, 0.1)",
      xl: "0 20px 25px -5px rgba(67, 52, 34, 0.15), 0 10px 10px -5px rgba(67, 52, 34, 0.1)",
      focus: "0 0 0 3px rgba(154, 66, 45, 0.3)",
    },
  },
  font: {
    sans: "var(--font-sans), sans-serif",
    serif: "var(--font-serif), serif",
  },
});
