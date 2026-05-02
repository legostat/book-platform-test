import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within, expect } from "storybook/test";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "UI / Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    isDisabled: { control: "boolean" },
    isIndeterminate: { control: "boolean" },
    defaultSelected: { control: "boolean" },
  },
  args: {
    children: "Accept terms and conditions",
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultSelected: true },
};

export const Indeterminate: Story = {
  args: { isIndeterminate: true, children: "Select all (3 of 7)" },
};

export const Disabled: Story = {
  args: { isDisabled: true, children: "Option unavailable" },
};

export const DisabledChecked: Story = {
  args: {
    isDisabled: true,
    defaultSelected: true,
    children: "Prechecked (read-only)",
  },
};

export const ToggleAndCheck: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
  },
};
