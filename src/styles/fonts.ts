import { Ysabeau, Playfair_Display } from "next/font/google";

export const fontSans = Ysabeau({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const fontSerif = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  display: "swap",
});
