import type { Preview } from "@storybook/nextjs-vite";

import "../src/styles/global.css.ts";

// Theme classes
import { lightThemeClass } from "../src/styles/themes/light.css";
import { darkThemeClass } from "../src/styles/themes/dark.css";
import { sepiaThemeClass } from "../src/styles/themes/sepia.css";

const themeClassMap: Record<string, string> = {
  light: lightThemeClass,
  dark: darkThemeClass,
  sepia: sepiaThemeClass,
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Глобальна тема платформи",
      defaultValue: "light",
      toolbar: {
        title: "Тема",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Світла (Light)", icon: "sun" },
          { value: "dark", title: "Темна (Dark)", icon: "moon" },
          { value: "sepia", title: "Сепія (Sepia)", icon: "book" },
        ],
        dynamicTitle: true,
      },
    },
  },

  tags: ["autodocs"],

  decorators: [
    (Story, context) => {
      const themeName = (context.globals.theme as string) ?? "light";
      const themeClass = themeClassMap[themeName] ?? lightThemeClass;

      return (
        // Font CSS vars are injected via preview-head.html (no next/font runtime needed)
        <div
          className={themeClass}
          style={{
            // Apply font stacks that reference the CSS vars set in preview-head.html
            fontFamily: "var(--font-sans, sans-serif)",
            // minHeight: "100vh",
            backgroundColor: "var(--color-background-primary)",
            color: "var(--color-text-primary)",
            padding: "2rem",
          }}
        >
          <Story />
        </div>
      );
    },
  ],

  // ─── Global parameters ───────────────────────────────────────────────────────
  parameters: {
    layout: "centered",

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },

    a11y: {
      // 'todo'  — show violations in test UI only (non-blocking)
      // 'error' — fail CI on violations
      // 'off'   — skip entirely
      test: "todo",
    },
  },
};

export default preview;
