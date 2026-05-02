import { style } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

/* ─── Overlay backdrop ─── */
export const overlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(4px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 50,
  transition: "opacity 0.2s ease",
  selectors: {
    "&[data-entering]": {
      opacity: 0,
    },
    "&[data-exiting]": {
      opacity: 0,
    },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

/* ─── Dialog panel ─── */
export const dialog = style({
  backgroundColor: vars.color.background.elevated,
  border: `1px solid ${vars.color.border.neutral}`,
  borderRadius: tokens.borderRadius.xl,
  boxShadow: vars.color.shadow.xl,
  padding: tokens.spacing[8],
  width: "100%",
  maxWidth: "28rem",
  outline: "none",
  transition: "transform 0.25s ease, opacity 0.25s ease",
  selectors: {
    "[data-entering] &": {
      transform: "scale(0.95) translateY(8px)",
      opacity: 0,
    },
    "[data-exiting] &": {
      transform: "scale(0.95) translateY(8px)",
      opacity: 0,
    },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

export const dialogHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: tokens.spacing[5],
});

export const dialogTitle = style({
  margin: 0,
  fontSize: tokens.fontSize["2xl"],
  fontWeight: "700",
  fontFamily: vars.font.serif,
  color: vars.color.text.primary,
  lineHeight: tokens.lineHeight.tight,
});

export const closeButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.25rem",
  height: "2.25rem",
  borderRadius: tokens.borderRadius.lg,
  border: "none",
  background: "transparent",
  color: vars.color.text.secondary,
  cursor: "pointer",
  outline: "none",
  transition: "background-color 0.15s ease, color 0.15s ease",
  selectors: {
    "&[data-hovered]": {
      backgroundColor: vars.color.background.secondary,
      color: vars.color.text.primary,
    },
    "&[data-focus-visible]": {
      boxShadow: vars.color.shadow.focus,
    },
  },
});

export const dialogBody = style({
  color: vars.color.text.secondary,
  fontSize: tokens.fontSize.base,
  lineHeight: tokens.lineHeight.relaxed,
});

export const dialogFooter = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: tokens.spacing[3],
  marginTop: tokens.spacing[8],
  paddingTop: tokens.spacing[5],
  borderTop: `1px solid ${vars.color.border.neutral}`,
});
