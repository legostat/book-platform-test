import { style } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

/* ─── Tooltip panel ─── */
export const tooltip = style({
  backgroundColor: vars.color.text.primary,
  color: vars.color.text.inverse,
  borderRadius: tokens.borderRadius.lg,
  paddingBlock: tokens.spacing[2],
  paddingInline: tokens.spacing[3],
  fontSize: tokens.fontSize.xs,
  fontFamily: vars.font.sans,
  lineHeight: tokens.lineHeight.snug,
  maxWidth: "14rem",
  boxShadow: vars.color.shadow.lg,
  outline: "none",
  zIndex: 100,
  transition: "transform 0.15s ease, opacity 0.15s ease",
  selectors: {
    "&[data-entering]": {
      opacity: 0,
      transform: "var(--tooltip-origin)",
    },
    "&[data-exiting]": {
      opacity: 0,
      transform: "var(--tooltip-origin)",
    },
    "&[data-placement='top']": {
      vars: { "--tooltip-origin": "translateY(4px)" },
    },
    "&[data-placement='bottom']": {
      vars: { "--tooltip-origin": "translateY(-4px)" },
    },
    "&[data-placement='left']": {
      vars: { "--tooltip-origin": "translateX(4px)" },
    },
    "&[data-placement='right']": {
      vars: { "--tooltip-origin": "translateX(-4px)" },
    },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

/* ─── Arrow svg ─── */
export const arrowSvg = style({
  display: "block",
  fill: vars.color.text.primary,
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
