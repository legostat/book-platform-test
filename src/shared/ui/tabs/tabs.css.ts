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
  alignItems: "center",
  gap: tokens.spacing[1],
  backgroundColor: vars.color.background.secondary,
  borderRadius: tokens.borderRadius.lg,
  padding: tokens.spacing[1],
  overflowX: "auto",
  scrollbarWidth: "none",
  selectors: {
    "&[data-orientation='vertical']": {
      flexDirection: "column",
      borderRadius: tokens.borderRadius.lg,
      overflowX: "visible",
      overflowY: "auto",
    },
  },
});

/* ─── Tab ─── */
export const tab = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: tokens.spacing[2],
  paddingBlock: tokens.spacing[2],
  paddingInline: tokens.spacing[4],
  fontSize: tokens.fontSize.sm,
  fontWeight: "500",
  fontFamily: vars.font.sans,
  color: vars.color.text.secondary,
  border: "none",
  background: "transparent",
  borderRadius: tokens.borderRadius.md,
  cursor: "pointer",
  outline: "none",
  whiteSpace: "nowrap",
  transition:
    "color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease",
  WebkitTapHighlightColor: "transparent",
  selectors: {
    "&[data-selected]": {
      color: vars.color.brand.primary,
      backgroundColor: vars.color.background.elevated,
      boxShadow: vars.color.shadow.sm,
    },
    "&[data-hovered]:not([data-selected])": {
      color: vars.color.text.primary,
      backgroundColor: vars.color.background.tertiary,
    },
    "&[data-focus-visible]": {
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
    },
    // WCAG 1.4.11 — High Contrast: box-shadow is ignored, use outline
    "(forced-colors: active)": {
      selectors: {
        "&[data-focus-visible]": {
          outline: "2px solid ButtonText",
          outlineOffset: "2px",
          boxShadow: "none",
        },
        "&[data-selected]": {
          outline: "1px solid Highlight",
        },
      },
    },
  },
});

/* ─── TabPanel ─── */
export const tabPanel = style({
  flex: 1,
  outline: "none",
  paddingTop: tokens.spacing[2],
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
