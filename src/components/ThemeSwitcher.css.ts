import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars, tokens } from "../styles/vars.css";

export const container = style({
  display: "flex",
  gap: tokens.spacing[2],
  padding: tokens.spacing[2],
  borderRadius: tokens.borderRadius.md,
  border: `1px solid ${vars.color.border.neutral}`,
  backgroundColor: vars.color.background.secondary,
  alignItems: "center",
  width: "fit-content",
  minHeight: "40px",
});

export const button = recipe({
  base: {
    padding: `${tokens.spacing[1]} ${tokens.spacing[3]}`,
    borderRadius: tokens.borderRadius.sm,
    border: "none",
    background: "transparent",
    color: vars.color.text.secondary,
    fontFamily: vars.font.sans,
    fontSize: tokens.fontSize.sm,
    cursor: "pointer",
    transition: "all 0.2s ease",

    ":hover": {
      color: vars.color.text.primary,
      backgroundColor: vars.color.background.tertiary,
    },
    
    ":focus-visible": {
      outline: "none",
      boxShadow: vars.color.shadow.focus,
    }
  },
  variants: {
    active: {
      true: {
        backgroundColor: vars.color.brand.primary,
        color: vars.color.text.inverse,
        fontWeight: 600,
        boxShadow: vars.color.shadow.sm,
        ":hover": {
          backgroundColor: vars.color.brand.primaryHover,
          color: vars.color.text.inverse,
        },
      },
      false: {},
    },
  },
  defaultVariants: {
    active: false,
  },
});

