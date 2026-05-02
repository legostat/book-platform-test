import type { StorybookConfig } from "@storybook/nextjs-vite";
import { mergeConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";
import { fileURLToPath } from "url";

// __dirname is not available in ES modules — derive it from import.meta.url
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
      resolve: {
        alias: {
          // Mirror tsconfig.json paths → so "@/shared/ui/..." resolves in stories
          "@": path.resolve(__dirname, "../src"),
        },
      },
    });
  },
};
export default config;
