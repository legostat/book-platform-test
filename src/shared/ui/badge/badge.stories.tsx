import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "UI / Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "success", "warning", "error", "info", "brand"],
    },
    children: { control: "text" },
  },
  args: {
    children: "Badge",
    variant: "neutral",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {};

export const Success: Story = {
  args: { variant: "success", children: "Published" },
};

export const Warning: Story = {
  args: { variant: "warning", children: "Pending review" },
};

export const Error: Story = {
  args: { variant: "error", children: "Rejected" },
};

export const Info: Story = {
  args: { variant: "info", children: "Draft" },
};

export const Brand: Story = {
  args: { variant: "brand", children: "New" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="brand">Brand</Badge>
    </div>
  ),
};
