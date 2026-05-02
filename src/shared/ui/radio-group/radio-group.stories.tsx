import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within, expect } from "storybook/test";
import { RadioGroup, Radio } from "./radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "UI / RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    orientation: { control: "select", options: ["vertical", "horizontal"] },
    isDisabled: { control: "boolean" },
    isRequired: { control: "boolean" },
  },
  args: {
    label: "Reading format",
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

function FormatGroup(props: Partial<React.ComponentProps<typeof RadioGroup>>) {
  return (
    <RadioGroup label="Reading format" {...props}>
      <Radio value="ebook">E-Book</Radio>
      <Radio value="print">Print</Radio>
      <Radio value="audio">Audiobook</Radio>
    </RadioGroup>
  );
}

export const Default: Story = {
  render: () => <FormatGroup />,
};

export const Horizontal: Story = {
  render: () => <FormatGroup orientation="horizontal" />,
};

export const WithDefaultValue: Story = {
  render: () => <FormatGroup defaultValue="ebook" />,
};

export const Disabled: Story = {
  render: () => <FormatGroup isDisabled />,
};

export const WithError: Story = {
  render: () => (
    <FormatGroup
      isInvalid
      errorMessage="Please select a reading format."
    />
  ),
};

export const KeyboardNavigation: Story = {
  render: () => <FormatGroup />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstRadio = canvas.getByRole("radio", { name: "E-Book" });
    firstRadio.focus();
    await userEvent.keyboard("{ArrowDown}");
    const printRadio = canvas.getByRole("radio", { name: "Print" });
    await expect(printRadio).toHaveFocus();
  },
};
