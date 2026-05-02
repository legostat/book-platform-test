import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
  title: "UI / Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    elementType: {
      control: "select",
      options: ["div", "hr"],
    },
  },
  args: {
    orientation: "horizontal",
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  render: () => (
    <div
      style={{ display: "flex", alignItems: "center", gap: "1rem", height: "2rem" }}
    >
      <span>Left</span>
      <Separator orientation="vertical" style={{ height: "100%" }} />
      <span>Right</span>
    </div>
  ),
};

export const BetweenContent: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <p style={{ margin: 0 }}>Section one — some introductory content.</p>
      <Separator />
      <p style={{ margin: 0 }}>Section two — additional content follows.</p>
    </div>
  ),
};
