import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/vars.css";

export const separator = style({
  border: "none",
  backgroundColor: vars.color.border.neutral,
  selectors: {
    "&[aria-orientation='horizontal']": {
      height: "1px",
      width: "100%",
      margin: 0,
    },
    "&[aria-orientation='vertical']": {
      width: "1px",
      height: "100%",
      margin: 0,
    },
  },
});
