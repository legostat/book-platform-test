import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within, expect } from "storybook/test";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = {
  title: "UI / Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    isDisabled: { control: "boolean" },
    defaultSelected: { control: "boolean" },
  },
  args: { children: "Enable notifications" },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const On: Story = {
  args: { defaultSelected: true, children: "Dark mode" },
};

export const Disabled: Story = {
  args: { isDisabled: true },
};

export const DisabledOn: Story = {
  args: { isDisabled: true, defaultSelected: true, children: "Always enabled" },
};

export const Toggle: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sw = canvas.getByRole("switch");
    await expect(sw).toHaveAttribute("aria-checked", "false");
    await userEvent.click(sw);
    await expect(sw).toHaveAttribute("aria-checked", "true");
  },
};
