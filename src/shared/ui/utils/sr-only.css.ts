import { style } from "@vanilla-extract/css";

/**
 * Visually hidden but accessible to screen readers.
 * WCAG 1.1.1, 1.3.1 — provides text alternatives for visual-only cues.
 */
export const srOnly = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
});
