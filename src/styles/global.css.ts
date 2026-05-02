import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./vars.css";

/* globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
}); */

globalStyle("html", {
  scrollbarGutter: "stable",
  interpolateSize: "allow-keywords",
});

globalStyle("body", {
  margin: 0,
  minBlockSize: "100svh",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  fontFamily: vars.font.sans,
  backgroundColor: vars.color.background.primary,
  color: vars.color.text.primary,
  transition: "background-color 0.2s ease, color 0.2s ease",
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("button, input, select, textarea", {
  fontFamily: "inherit",
});

globalStyle("::selection", {
  backgroundColor: vars.color.brand.secondary,
  color: vars.color.text.inverse,
});
