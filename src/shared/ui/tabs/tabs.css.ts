import { style } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

/* ─── Tabs container ─── */
export const tabsRoot = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spacing[4],
  selectors: {
    "&[data-orientation='vertical']": {
      flexDirection: "row",
    },
  },
});

/* ─── TabList ─── */
export const tabList = style({
  display: "flex",
  borderBottom: `1px solid ${vars.color.border.neutral}`,
  overflowX: "auto",
  scrollbarWidth: "none",
  selectors: {
    "&[data-orientation='vertical']": {
      flexDirection: "column",
      borderBottom: "none",
      borderRight: `1px solid ${vars.color.border.neutral}`,
    },
  },
});

/* ─── Tab ─── */
export const tab = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  gap: tokens.spacing[2],
  paddingBlock: tokens.spacing[2],
  paddingInline: tokens.spacing[4],
  fontSize: tokens.fontSize.sm,
  fontWeight: "500",
  fontFamily: vars.font.sans,
  color: vars.color.text.secondary,
  border: "none",
  background: "transparent",
  cursor: "pointer",
  outline: "none",
  whiteSpace: "nowrap",
  transition: "color 0.15s ease",
  WebkitTapHighlightColor: "transparent",
  // Animated underline
  "::after": {
    content: '""',
    position: "absolute",
    bottom: "-1px",
    left: 0,
    right: 0,
    height: "2px",
    borderRadius: "2px 2px 0 0",
    backgroundColor: vars.color.brand.primary,
    transform: "scaleX(0)",
    transition: "transform 0.2s ease",
  },
  selectors: {
    "&[data-selected]": {
      color: vars.color.brand.primary,
    },
    "&[data-selected]::after": {
      transform: "scaleX(1)",
    },
    "&[data-hovered]": {
      color: vars.color.text.primary,
    },
    "&[data-focus-visible]": {
      borderRadius: tokens.borderRadius.md,
      boxShadow: vars.color.shadow.focus,
    },
    "&[data-disabled]": {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
      // Also stop the underline animation
      "::after": {
        transition: "none",
      },
    },
    // WCAG 1.4.11 — High Contrast: box-shadow is ignored, use outline
    "(forced-colors: active)": {
      selectors: {
        "&[data-focus-visible]": {
          outline: "2px solid ButtonText",
          outlineOffset: "2px",
          boxShadow: "none",
        },
      },
    },
  },
});

/* ─── TabPanel ─── */
export const tabPanel = style({
  flex: 1,
  outline: "none",
  fontSize: tokens.fontSize.base,
  color: vars.color.text.primary,
  lineHeight: tokens.lineHeight.relaxed,
  selectors: {
    "&[data-focus-visible]": {
      boxShadow: vars.color.shadow.focus,
      borderRadius: tokens.borderRadius.md,
    },
  },
});
