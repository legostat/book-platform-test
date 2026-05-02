import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within, expect } from "storybook/test";
import { TextField } from "./text-field";

const meta: Meta<typeof TextField> = {
  title: "UI / TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    description: { control: "text" },
    errorMessage: { control: "text" },
    isRequired: { control: "boolean" },
    isDisabled: { control: "boolean" },
    isReadOnly: { control: "boolean" },
    type: {
      control: "select",
      options: ["text", "email", "password", "search", "tel", "url"],
    },
  },
  args: {
    label: "Label",
    placeholder: "Enter text…",
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    description: "We'll never share your email with anyone.",
    type: "email",
  },
};

export const Required: Story = {
  args: {
    label: "Full name",
    placeholder: "John Doe",
    isRequired: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    isInvalid: true,
    errorMessage: "Username is already taken.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled field",
    defaultValue: "Cannot edit",
    isDisabled: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "••••••••",
    type: "password",
  },
};

export const TypeAndValidate: Story = {
  args: { label: "Email", type: "email", isRequired: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "hello@example.com");
    await expect(input).toHaveValue("hello@example.com");
  },
};
