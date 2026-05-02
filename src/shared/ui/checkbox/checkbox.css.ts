import { style } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

export const checkboxRoot = style({
  display: "flex",
  alignItems: "center",
  gap: tokens.spacing[3],
  cursor: "pointer",
  fontSize: tokens.fontSize.sm,
  color: vars.color.text.primary,
  lineHeight: tokens.lineHeight.normal,
  WebkitTapHighlightColor: "transparent",
  selectors: {
    "&[data-disabled]": {
      opacity: 0.45,
      cursor: "not-allowed",
    },
  },
});

export const indicator = style({
  width: "1.25rem",
  height: "1.25rem",
  flexShrink: 0,
  borderRadius: tokens.borderRadius.md,
  border: `2px solid ${vars.color.border.neutral}`,
  backgroundColor: vars.color.background.elevated,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease",
  selectors: {
    "[data-selected] &, [data-indeterminate] &": {
      backgroundColor: vars.color.brand.primary,
      borderColor: vars.color.brand.primary,
      transform: "scale(1.05)",
    },
    "[data-hovered] &": {
      borderColor: vars.color.border.focus,
    },
    "[data-focus-visible] &": {
      boxShadow: vars.color.shadow.focus,
    },
  },
  "@media": {
    // WCAG 2.3.3: respect motion preferences
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
    // WCAG 1.4.11: restore visible border in forced-colors (High Contrast) mode
    "(forced-colors: active)": {
      borderColor: "ButtonBorder",
      selectors: {
        "[data-selected] &, [data-indeterminate] &": {
          forcedColorAdjust: "none",
          backgroundColor: "Highlight",
          borderColor: "Highlight",
        },
        "[data-focus-visible] &": {
          outline: "2px solid ButtonText",
          boxShadow: "none",
        },
      },
    },
  },
});

export const checkIcon = style({
  width: "0.75rem",
  height: "0.75rem",
  color: vars.color.text.inverse,
  opacity: 0,
  transition: "opacity 0.1s ease",
  selectors: {
    "[data-selected] &": {
      opacity: 1,
    },
  },
});

export const dashIcon = style({
  width: "0.6rem",
  height: "0.15rem",
  backgroundColor: vars.color.text.inverse,
  borderRadius: "2px",
  opacity: 0,
  transition: "opacity 0.1s ease",
  selectors: {
    "[data-indeterminate] &": {
      opacity: 1,
    },
  },
});
