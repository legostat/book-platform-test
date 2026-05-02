import { style } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

export const switchRoot = style({
  display: "flex",
  alignItems: "center",
  gap: tokens.spacing[2],
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

export const track = style({
  position: "relative",
  width: "2.25rem",
  height: "1.25rem",
  flexShrink: 0,
  borderRadius: tokens.borderRadius.full,
  backgroundColor: vars.color.border.neutral,
  transition: "background-color 0.2s ease, box-shadow 0.15s ease",
  selectors: {
    "[data-selected] &": {
      backgroundColor: vars.color.brand.primary,
    },
    "[data-focus-visible] &": {
      boxShadow: vars.color.shadow.focus,
    },
    "[data-hovered] &": {
      opacity: 0.85,
    },
  },
  "@media": {
    // WCAG 2.3.3 — vestibular disorder support
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
    // WCAG 1.4.11 — High Contrast mode
    "(forced-colors: active)": {
      borderColor: "ButtonBorder",
      selectors: {
        "[data-focus-visible] &": {
          outline: "2px solid ButtonText",
          boxShadow: "none",
        },
      },
    },
  },
});

export const thumb = style({
  position: "absolute",
  top: "0.125rem",
  left: "0.125rem",
  width: "1rem",
  height: "1rem",
  borderRadius: tokens.borderRadius.full,
  backgroundColor: vars.color.text.inverse,
  boxShadow: vars.color.shadow.sm,
  transition: "transform 0.2s ease",
  selectors: {
    "[data-selected] &": {
      transform: "translateX(1rem)",
    },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});
