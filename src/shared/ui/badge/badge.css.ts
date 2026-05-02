import { style, styleVariants } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

export const badgeBase = style({
  display: "inline-flex",
  alignItems: "center",
  gap: tokens.spacing[1],
  paddingBlock: "0.2rem",
  paddingInline: tokens.spacing[2],
  borderRadius: tokens.borderRadius.full,
  fontSize: tokens.fontSize.xs,
  fontWeight: "600",
  lineHeight: tokens.lineHeight.none,
  letterSpacing: "0.02em",
  whiteSpace: "nowrap",
});

export const badgeVariants = styleVariants({
  neutral: {
    backgroundColor: vars.color.background.tertiary,
    color: vars.color.text.secondary,
  },
  success: {
    backgroundColor: `color-mix(in srgb, ${vars.color.status.success} 15%, transparent)`,
    color: vars.color.status.success,
  },
  warning: {
    backgroundColor: `color-mix(in srgb, ${vars.color.status.warning} 15%, transparent)`,
    color: vars.color.status.warning,
  },
  error: {
    backgroundColor: `color-mix(in srgb, ${vars.color.status.error} 15%, transparent)`,
    color: vars.color.status.error,
  },
  info: {
    backgroundColor: `color-mix(in srgb, ${vars.color.status.info} 15%, transparent)`,
    color: vars.color.status.info,
  },
  brand: {
    backgroundColor: `color-mix(in srgb, ${vars.color.brand.primary} 15%, transparent)`,
    color: vars.color.brand.primary,
  },
});

export type BadgeVariant = keyof typeof badgeVariants;
