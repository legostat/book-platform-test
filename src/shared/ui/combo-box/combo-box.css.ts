import { style } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

/* ─── ComboBox root ─── */
export const comboBoxRoot = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spacing[1],
  width: "100%",
});

export const comboBoxLabel = style({
  fontSize: tokens.fontSize.sm,
  fontWeight: "500",
  color: vars.color.text.secondary,
});

/* ─── Input group ─── */
export const fieldGroup = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
  border: `1px solid ${vars.color.border.neutral}`,
  borderRadius: tokens.borderRadius.md,
  backgroundColor: vars.color.background.primary,
  overflow: "hidden",
  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
  selectors: {
    "&[data-focus-within]": {
      borderColor: vars.color.border.focus,
      boxShadow: vars.color.shadow.focus,
    },
    "&[data-invalid]": {
      borderColor: vars.color.status.error,
    },
    "&[data-disabled]": {
      opacity: 0.45,
    },
  },
});

export const comboInput = style({
  flex: 1,
  border: "none",
  outline: "none",
  background: "transparent",
  color: vars.color.text.primary,
  fontSize: tokens.fontSize.base,
  fontFamily: vars.font.sans,
  paddingBlock: tokens.spacing[2],
  paddingInline: tokens.spacing[3],
  "::placeholder": {
    color: vars.color.text.placeholder,
  },
});

export const comboTrigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: tokens.spacing[2],
  border: "none",
  background: "transparent",
  color: vars.color.text.secondary,
  cursor: "pointer",
  outline: "none",
  transition: "color 0.15s ease, background-color 0.15s ease",
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

/* ─── Shared with Select ─── */
export const comboPopover = style({
  backgroundColor: vars.color.background.primary,
  border: `1px solid ${vars.color.border.neutral}`,
  borderRadius: tokens.borderRadius.lg,
  boxShadow: vars.color.shadow.lg,
  padding: tokens.spacing[1],
  outline: "none",
  width: "var(--trigger-width)",
  maxHeight: "16rem",
  overflow: "hidden",
  transition: "opacity 0.15s ease, transform 0.15s ease",
  selectors: {
    "&[data-entering]": {
      opacity: 0,
      transform: "translateY(-4px)",
    },
    "&[data-exiting]": {
      opacity: 0,
      transform: "translateY(-4px)",
    },
  },
});

export const comboListBox = style({
  outline: "none",
  overflowY: "auto",
  maxHeight: "100%",
});

export const comboItem = style({
  display: "flex",
  alignItems: "center",
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
    },
    "&[data-selected]": {
      backgroundColor: `color-mix(in srgb, ${vars.color.brand.primary} 12%, transparent)`,
      color: vars.color.brand.primary,
      fontWeight: "500",
    },
    "&[data-disabled]": {
      opacity: 0.45,
    },
  },
});

export const comboDescription = style({
  fontSize: tokens.fontSize.xs,
  color: vars.color.text.secondary,
});

export const comboError = style({
  fontSize: tokens.fontSize.xs,
  color: vars.color.status.error,
});
