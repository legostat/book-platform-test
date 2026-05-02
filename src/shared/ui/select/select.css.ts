import { style } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

/* ─── Select root ─── */
export const selectRoot = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spacing[1],
  width: "100%",
});

export const selectLabel = style({
  fontSize: tokens.fontSize.sm,
  fontWeight: "500",
  color: vars.color.text.secondary,
  lineHeight: tokens.lineHeight.normal,
});

/* ─── Trigger button ─── */
export const trigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: tokens.spacing[2],
  width: "100%",
  paddingBlock: tokens.spacing[3],
  paddingInline: tokens.spacing[4],
  border: `1px solid ${vars.color.border.neutral}`,
  borderRadius: tokens.borderRadius.lg,
  backgroundColor: vars.color.background.elevated,
  color: vars.color.text.primary,
  fontSize: tokens.fontSize.base,
  fontFamily: vars.font.sans,
  cursor: "pointer",
  outline: "none",
  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
  selectors: {
    "&[data-hovered]": {
      borderColor: vars.color.border.focus,
    },
    "&[data-focus-visible]": {
      borderColor: vars.color.border.focus,
      boxShadow: vars.color.shadow.focus,
    },
    "&[data-pressed]": {
      backgroundColor: vars.color.background.secondary,
    },
    "&[data-disabled]": {
      opacity: 0.45,
      cursor: "not-allowed",
    },
  },
});

export const chevron = style({
  flexShrink: 0,
  width: "1rem",
  height: "1rem",
  color: vars.color.text.secondary,
  transition: "transform 0.2s ease",
  selectors: {
    "[data-open] &": {
      transform: "rotate(180deg)",
    },
  },
});

/* ─── Popover ─── */
export const popover = style({
  backgroundColor: vars.color.background.elevated,
  border: `1px solid ${vars.color.border.neutral}`,
  borderRadius: tokens.borderRadius.xl,
  boxShadow: vars.color.shadow.xl,
  padding: tokens.spacing[2],
  outline: "none",
  minWidth: "var(--trigger-width)",
  backdropFilter: "blur(12px)",
  transition: "opacity 0.2s ease, transform 0.2s ease",
  selectors: {
    "&[data-entering]": {
      opacity: 0,
      transform: "translateY(-6px) scale(0.98)",
    },
    "&[data-exiting]": {
      opacity: 0,
      transform: "translateY(-6px) scale(0.98)",
    },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

/* ─── ListBox items ─── */
export const listBox = style({
  outline: "none",
  maxHeight: "16rem",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: tokens.spacing[1],
});

export const listBoxItem = style({
  display: "flex",
  alignItems: "center",
  gap: tokens.spacing[2],
  paddingBlock: tokens.spacing[2],
  paddingInline: tokens.spacing[3],
  borderRadius: tokens.borderRadius.md,
  fontSize: tokens.fontSize.sm,
  color: vars.color.text.primary,
  cursor: "default",
  outline: "none",
  transition: "background-color 0.1s ease",
  selectors: {
    "&[data-hovered]": {
      backgroundColor: vars.color.background.secondary,
    },
    "&[data-focus-visible]": {
      backgroundColor: vars.color.background.secondary,
      boxShadow: `inset 0 0 0 2px ${vars.color.border.focus}`,
    },
    "&[data-selected]": {
      backgroundColor: `color-mix(in srgb, ${vars.color.brand.primary} 12%, transparent)`,
      color: vars.color.brand.primary,
      fontWeight: "500",
    },
    "&[data-disabled]": {
      opacity: 0.45,
      cursor: "not-allowed",
    },
  },
});

export const selectDescription = style({
  fontSize: tokens.fontSize.xs,
  color: vars.color.text.secondary,
  lineHeight: tokens.lineHeight.normal,
});

export const selectError = style({
  fontSize: tokens.fontSize.xs,
  color: vars.color.status.error,
  lineHeight: tokens.lineHeight.normal,
});
