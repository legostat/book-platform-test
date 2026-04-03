import { createThemeContract, createGlobalTheme } from "@vanilla-extract/css";

export const tokens = createGlobalTheme(":root", {
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
  borderRadius: {
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
  spacing: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    6: "1.5rem",
    8: "2rem",
    12: "3rem",
  },
});

export const vars = createThemeContract({
  color: {
    brand: {
      primary: null,
      primaryHover: null,
      secondary: null,
      secondaryHover: null,
    },
    background: {
      primary: null,
      secondary: null,
      tertiary: null,
    },
    text: {
      primary: null,
      secondary: null,
      placeholder: null,
      inverse: null,
    },
    border: {
      neutral: null,
      focus: null,
    },
    status: {
      error: null,
      warning: null,
      success: null,
      info: null,
    },
    shadow: {
      sm: null,
      md: null,
      lg: null,
      xl: null,
      focus: null,
    },
  },
  font: {
    sans: null,
    serif: null,
  },
});
