import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./vars.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  height: "100%",
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
