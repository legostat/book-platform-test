import { style } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

/* ─── Disclosure root ─── */
export const disclosureRoot = style({
  width: "100%",
  borderBottom: `1px solid ${vars.color.border.neutral}`,
  selectors: {
    "&:first-child": {
      borderTop: `1px solid ${vars.color.border.neutral}`,
    },
  },
});

/* ─── Trigger button ─── */
export const disclosureButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  paddingBlock: tokens.spacing[4],
  paddingInline: 0,
  border: "none",
  background: "transparent",
  fontFamily: vars.font.sans,
  fontSize: tokens.fontSize.base,
  fontWeight: "600",
  color: vars.color.text.primary,
  cursor: "pointer",
  outline: "none",
  textAlign: "left",
  gap: tokens.spacing[3],
  WebkitTapHighlightColor: "transparent",
  transition: "color 0.15s ease",
  selectors: {
    "&[data-hovered]": {
      color: vars.color.brand.primary,
    },
    "&[data-focus-visible]": {
      boxShadow: vars.color.shadow.focus,
      borderRadius: tokens.borderRadius.sm,
    },
    "&[data-disabled]": {
      opacity: 0.45,
      cursor: "not-allowed",
    },
  },
  "@media": {
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

export const chevronIcon = style({
  flexShrink: 0,
  width: "1.125rem",
  height: "1.125rem",
  color: vars.color.text.secondary,
  transition: "transform 0.25s ease",
  selectors: {
    "[data-expanded] &": {
      transform: "rotate(90deg)",
    },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

/* ─── Panel ─── */
export const disclosurePanel = style({
  overflow: "hidden",
  height: "var(--disclosure-panel-height)",
  transition: "height 0.25s ease",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

export const disclosurePanelInner = style({
  paddingBottom: tokens.spacing[4],
  fontSize: tokens.fontSize.base,
  color: vars.color.text.secondary,
  lineHeight: tokens.lineHeight.relaxed,
});

/* ─── DisclosureGroup ─── */
export const disclosureGroup = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});
