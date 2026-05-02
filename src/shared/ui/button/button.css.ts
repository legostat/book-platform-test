import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { tokens, vars } from "@/styles/vars.css";

const focusVisible = style({
  selectors: {
    "&[data-focus-visible]": {
      // Suppress default outline; box-shadow provides the visible ring
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: vars.color.shadow.focus,
    },
  },
  // Restore a real outline in Windows High Contrast / forced-colors mode
  // where box-shadow is suppressed by the OS
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

export const button = recipe({
  base: [
    focusVisible,
    {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: tokens.spacing[2],
      border: "none",
      borderRadius: tokens.borderRadius.lg,
      fontFamily: vars.font.sans,
      fontWeight: "600",
      lineHeight: tokens.lineHeight.none,
      cursor: "pointer",
      textDecoration: "none",
      whiteSpace: "nowrap",
      transition: "background-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease, border-color 0.15s ease",
      WebkitTapHighlightColor: "transparent",
      // WCAG 2.5.5 / 2.5.8 — ensure minimum touch target
      minHeight: "44px",
      minWidth: "44px",
      selectors: {
        "&[data-disabled]": {
          opacity: 0.45,
          cursor: "not-allowed",
          pointerEvents: "none",
        },
        "&[data-pressed]": {
          transform: "scale(0.98)",
        },
      },
    },
  ],
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.brand.primary,
        color: vars.color.text.inverse,
        boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)`,
        selectors: {
          "&[data-hovered]": {
            backgroundColor: vars.color.brand.primaryHover,
          },
        },
      },
      secondary: {
        backgroundColor: vars.color.background.secondary,
        color: vars.color.text.primary,
        selectors: {
          "&[data-hovered]": {
            backgroundColor: vars.color.background.tertiary,
          },
        },
      },
      outline: {
        backgroundColor: "transparent",
        color: vars.color.brand.primary,
        border: `1px solid ${vars.color.border.neutral}`,
        selectors: {
          "&[data-hovered]": {
            borderColor: vars.color.brand.primary,
            backgroundColor: `color-mix(in srgb, ${vars.color.brand.primary} 6%, transparent)`,
          },
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: vars.color.brand.primary,
        selectors: {
          "&[data-hovered]": {
            backgroundColor: vars.color.background.secondary,
          },
        },
      },
      destructive: {
        backgroundColor: vars.color.status.error,
        color: vars.color.text.inverse,
        boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)`,
        selectors: {
          "&[data-hovered]": {
            opacity: 0.85,
          },
        },
      },
    },
    size: {
      sm: {
        fontSize: tokens.fontSize.sm,
        paddingBlock: tokens.spacing[1],
        paddingInline: tokens.spacing[3],
        borderRadius: tokens.borderRadius.md,
        // Override base minHeight for sm — stays at 44px minimum (WCAG 2.5.5)
      },
      md: {
        fontSize: tokens.fontSize.base,
        paddingBlock: tokens.spacing[2],
        paddingInline: tokens.spacing[5],
      },
      lg: {
        fontSize: tokens.fontSize.lg,
        paddingBlock: tokens.spacing[3],
        paddingInline: tokens.spacing[6],
        borderRadius: tokens.borderRadius.xl,
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});


export type ButtonVariants = RecipeVariants<typeof button>;
