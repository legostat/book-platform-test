import { style } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

export const fieldRoot = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spacing[1],
  width: "100%",
});

export const label = style({
  fontSize: tokens.fontSize.lg,
  fontWeight: "600",
  color: vars.color.text.secondary,
  fontStyle: "oblique",
  lineHeight: tokens.lineHeight.normal,
  selectors: {
    "[data-required] &::after": {
      content: '" *"',
      color: vars.color.status.error,
    },
  },
});

export const inputWrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderRadius: tokens.borderRadius.lg,
  border: `1px solid ${vars.color.border.neutral}`,
  backgroundColor: vars.color.background.primary,
  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
  selectors: {
    "[data-focus-within] &": {
      borderColor: vars.color.border.focus,
      boxShadow: vars.color.shadow.focus,
    },
    "[data-invalid] &": {
      borderColor: vars.color.status.error,
    },
    "[data-disabled] &": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});

export const input = style({
  flex: 1,
  border: "none",
  outline: "none",
  background: "transparent",
  color: vars.color.text.primary,
  fontSize: tokens.fontSize.base,
  lineHeight: tokens.lineHeight.normal,
  paddingBlock: tokens.spacing[3],
  paddingInline: tokens.spacing[4],
  width: "100%",
  fontFamily: vars.font.sans,
  "::placeholder": {
    color: vars.color.text.placeholder,
  },
});

export const description = style({
  fontSize: tokens.fontSize.sm,
  color: vars.color.text.secondary,
  lineHeight: tokens.lineHeight.normal,
});

export const fieldError = style({
  fontSize: tokens.fontSize.xs,
  color: vars.color.status.error,
  lineHeight: tokens.lineHeight.normal,
});
