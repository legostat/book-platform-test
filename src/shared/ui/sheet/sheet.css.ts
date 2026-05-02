import { style, styleVariants } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

/* ─── Modal Overlay ─── */
export const overlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.45)",
  backdropFilter: "blur(2px)",
  zIndex: 50,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "stretch",
  transition: "opacity 0.25s ease",
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

/* ─── Sheet panel ─── */
export const sheet = style({
  backgroundColor: vars.color.background.primary,
  border: `1px solid ${vars.color.border.neutral}`,
  borderTop: "none",
  borderRadius: `${tokens.borderRadius.lg} ${tokens.borderRadius.lg} 0 0`,
  boxShadow: vars.color.shadow.xl,
  width: "100%",
  outline: "none",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease, opacity 0.25s ease",
  selectors: {
    "[data-entering] &": {
      transform: "translateY(100%)",
      opacity: 0,
    },
    "[data-exiting] &": {
      transform: "translateY(100%)",
      opacity: 0,
    },
  },
});

/* ─── Size variants ─── */
export const sheetSizes = styleVariants({
  sm: { maxHeight: "30vh" },
  md: { maxHeight: "50vh" },
  lg: { maxHeight: "75vh" },
  full: { maxHeight: "100vh", borderRadius: 0 },
});

/* ─── Handle (drag indicator) ─── */
export const handle = style({
  width: "2.5rem",
  height: "0.25rem",
  borderRadius: tokens.borderRadius.full,
  backgroundColor: vars.color.border.neutral,
  margin: `${tokens.spacing[3]} auto`,
  flexShrink: 0,
});

/* ─── Header ─── */
export const sheetHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingInline: tokens.spacing[6],
  paddingBottom: tokens.spacing[3],
  borderBottom: `1px solid ${vars.color.border.neutral}`,
  flexShrink: 0,
});

export const sheetTitle = style({
  margin: 0,
  fontSize: tokens.fontSize.lg,
  fontWeight: "700",
  fontFamily: vars.font.serif,
  color: vars.color.text.primary,
});

export const sheetCloseButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  height: "2rem",
  borderRadius: tokens.borderRadius.md,
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

/* ─── Body ─── */
export const sheetBody = style({
  padding: tokens.spacing[6],
  flex: 1,
  overflowY: "auto",
  color: vars.color.text.secondary,
  fontSize: tokens.fontSize.base,
  lineHeight: tokens.lineHeight.relaxed,
});

/* ─── Footer ─── */
export const sheetFooter = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: tokens.spacing[3],
  paddingInline: tokens.spacing[6],
  paddingBlock: tokens.spacing[4],
  borderTop: `1px solid ${vars.color.border.neutral}`,
  flexShrink: 0,
});
