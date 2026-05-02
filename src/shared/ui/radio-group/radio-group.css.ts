import { style } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

/* ─── RadioGroup ─── */
export const radioGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spacing[2],
});

export const radioGroupLabel = style({
  fontSize: tokens.fontSize.sm,
  fontWeight: "500",
  color: vars.color.text.secondary,
  lineHeight: tokens.lineHeight.normal,
  marginBottom: tokens.spacing[1],
});

export const radioItems = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spacing[3],
  selectors: {
    "[data-orientation='horizontal'] &": {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: tokens.spacing[5],
    },
  },
});

/* ─── Radio ─── */
export const radio = style({
  display: "flex",
  alignItems: "center",
  gap: tokens.spacing[3],
  cursor: "pointer",
  fontSize: tokens.fontSize.sm,
  color: vars.color.text.primary,
  lineHeight: tokens.lineHeight.normal,
  WebkitTapHighlightColor: "transparent",
  selectors: {
    "&[data-disabled]": {
      opacity: 0.45,
      cursor: "not-allowed",
    },
  },
});

export const radioIndicator = style({
  position: "relative",
  flexShrink: 0,
  width: "1.25rem",
  height: "1.25rem",
  borderRadius: tokens.borderRadius.full,
  border: `2px solid ${vars.color.border.neutral}`,
  backgroundColor: vars.color.background.elevated,
  transition: "border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease",
  "::after": {
    content: '""',
    position: "absolute",
    inset: "0.22rem",
    borderRadius: tokens.borderRadius.full,
    backgroundColor: vars.color.text.inverse,
    transform: "scale(0)",
    transition: "transform 0.15s ease",
  },
  selectors: {
    "[data-selected] &": {
      borderColor: vars.color.brand.primary,
      backgroundColor: vars.color.brand.primary,
    },
    "[data-selected] &::after": {
      transform: "scale(1)",
    },
    "[data-hovered] &": {
      borderColor: vars.color.border.focus,
    },
    "[data-focus-visible] &": {
      boxShadow: vars.color.shadow.focus,
    },
  },
  "@media": {
    // WCAG 2.3.3 — vestibular disorder support
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
      "::after": {
        transition: "none",
      },
    },
    // WCAG 1.4.11 — High Contrast mode: ensure indicator border is visible
    "(forced-colors: active)": {
      borderColor: "ButtonBorder",
      selectors: {
        "[data-selected] &": {
          forcedColorAdjust: "none",
          borderColor: "Highlight",
          backgroundColor: "Highlight",
        },
        "[data-focus-visible] &": {
          outline: "2px solid ButtonText",
          outlineOffset: "2px",
          boxShadow: "none",
        },
      },
    },
  },
});


export const radioGroupDescription = style({
  fontSize: tokens.fontSize.xs,
  color: vars.color.text.secondary,
  lineHeight: tokens.lineHeight.normal,
});

export const radioGroupError = style({
  fontSize: tokens.fontSize.xs,
  color: vars.color.status.error,
  lineHeight: tokens.lineHeight.normal,
});
