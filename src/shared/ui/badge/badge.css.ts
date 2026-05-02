import { style, styleVariants } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

export const badgeBase = style({
  display: "inline-flex",
  alignItems: "center",
  gap: tokens.spacing[1],
  paddingBlock: tokens.spacing[1],
  paddingInline: tokens.spacing[3],
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
    border: `1px solid ${vars.color.border.neutral}`,
  },
  success: {
    backgroundColor: `color-mix(in srgb, ${vars.color.status.success} 12%, transparent)`,
    color: vars.color.status.success,
    border: `1px solid color-mix(in srgb, ${vars.color.status.success} 25%, transparent)`,
  },
  warning: {
    backgroundColor: `color-mix(in srgb, ${vars.color.status.warning} 12%, transparent)`,
    color: vars.color.status.warning,
    border: `1px solid color-mix(in srgb, ${vars.color.status.warning} 25%, transparent)`,
  },
  error: {
    backgroundColor: `color-mix(in srgb, ${vars.color.status.error} 12%, transparent)`,
    color: vars.color.status.error,
    border: `1px solid color-mix(in srgb, ${vars.color.status.error} 25%, transparent)`,
  },
  info: {
    backgroundColor: `color-mix(in srgb, ${vars.color.status.info} 12%, transparent)`,
    color: vars.color.status.info,
    border: `1px solid color-mix(in srgb, ${vars.color.status.info} 25%, transparent)`,
  },
  brand: {
    backgroundColor: `color-mix(in srgb, ${vars.color.brand.primary} 12%, transparent)`,
    color: vars.color.brand.primary,
    border: `1px solid color-mix(in srgb, ${vars.color.brand.primary} 25%, transparent)`,
  },
});

export type BadgeVariant = keyof typeof badgeVariants;
