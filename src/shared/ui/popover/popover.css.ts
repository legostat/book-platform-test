import { style } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

/* ─── Popover panel ─── */
export const popover = style({
  backgroundColor: vars.color.background.elevated,
  border: `1px solid ${vars.color.border.neutral}`,
  borderRadius: tokens.borderRadius.xl,
  boxShadow: vars.color.shadow.xl,
  padding: tokens.spacing[3],
  outline: "none",
  fontSize: tokens.fontSize.sm,
  color: vars.color.text.primary,
  backdropFilter: "blur(8px)",
  transition: "transform 0.2s ease, opacity 0.2s ease",
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
      vars: { "--origin": "translateY(6px) scale(0.98)" },
    },
    "&[data-placement='bottom']": {
      vars: { "--origin": "translateY(-6px) scale(0.98)" },
    },
    "&[data-placement='left']": {
      vars: { "--origin": "translateX(6px) scale(0.98)" },
    },
    "&[data-placement='right']": {
      vars: { "--origin": "translateX(-6px) scale(0.98)" },
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
  fill: vars.color.background.elevated,
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
