import type { Metadata } from "next";
import { fontSans, fontSerif } from "@/styles/fonts";
import "@/styles/global.css";
import { ThemeProvider } from "@/shared/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Book Platform",
  description: "Book Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${fontSans.variable} ${fontSerif.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
