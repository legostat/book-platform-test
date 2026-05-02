import { style } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

/* ─── Popover panel ─── */
export const popover = style({
  backgroundColor: vars.color.background.primary,
  border: `1px solid ${vars.color.border.neutral}`,
  borderRadius: tokens.borderRadius.lg,
  boxShadow: vars.color.shadow.lg,
  padding: tokens.spacing[2],
  outline: "none",
  fontSize: tokens.fontSize.sm,
  color: vars.color.text.primary,
  transition: "transform 0.15s ease, opacity 0.15s ease",
  selectors: {
    "&[data-entering]": {
      opacity: 0,
      transform: "var(--origin)",
    },
    "&[data-exiting]": {
      opacity: 0,
      transform: "var(--origin)",
    },
    "&[data-placement='top']": {
      vars: { "--origin": "translateY(6px)" },
    },
    "&[data-placement='bottom']": {
      vars: { "--origin": "translateY(-6px)" },
    },
    "&[data-placement='left']": {
      vars: { "--origin": "translateX(6px)" },
    },
    "&[data-placement='right']": {
      vars: { "--origin": "translateX(-6px)" },
    },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

/* ─── OverlayArrow svg ─── */
export const overlayArrow = style({
  display: "block",
  fill: vars.color.background.primary,
  stroke: vars.color.border.neutral,
  paintOrder: "stroke",
  strokeWidth: "2px",
  selectors: {
    "[data-placement='bottom'] &": {
      transform: "rotate(180deg)",
    },
    "[data-placement='left'] &": {
      transform: "rotate(-90deg)",
    },
    "[data-placement='right'] &": {
      transform: "rotate(90deg)",
    },
  },
});
