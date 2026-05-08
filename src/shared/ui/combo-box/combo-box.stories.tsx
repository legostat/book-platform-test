import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within, expect, screen } from "storybook/test";
import { ComboBox, ComboBoxItem } from "./combo-box";

const meta: Meta<typeof ComboBox> = {
  title: "UI / ComboBox",
  component: ComboBox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    description: { control: "text" },
    isDisabled: { control: "boolean" },
    isRequired: { control: "boolean" },
  },
  args: {
    label: "Author",
    placeholder: "Search authors…",
  },
};

export default meta;
type Story = StoryObj<typeof ComboBox>;

const AUTHORS = [
  { id: "1", name: "Fyodor Dostoevsky" },
  { id: "2", name: "Leo Tolstoy" },
  { id: "3", name: "Anton Chekhov" },
  { id: "4", name: "Ivan Turgenev" },
  { id: "5", name: "Mikhail Bulgakov" },
  { id: "6", name: "Boris Pasternak" },
];

function AuthorComboBox(
  props: Partial<React.ComponentProps<typeof ComboBox>>
) {
  return (
    <ComboBox
      label="Author"
      placeholder="Search authors…"
      items={AUTHORS}
      style={{ maxWidth: "20rem" }}
      {...props}
    >
      {(item) => <ComboBoxItem id={item.id}>{item.name}</ComboBoxItem>}
    </ComboBox>
  );
}

export const Default: Story = {
  render: () => <AuthorComboBox />,
};

export const WithDescription: Story = {
  render: () => (
    <AuthorComboBox description="Type to filter the list of available authors." />
  ),
};

export const Required: Story = {
  render: () => <AuthorComboBox isRequired />,
};

export const WithError: Story = {
  render: () => (
    <AuthorComboBox
      isInvalid
      errorMessage="Please select a valid author from the list."
    />
  ),
};

export const Disabled: Story = {
  render: () => <AuthorComboBox isDisabled />,
};

export const TypeAndFilter: Story = {
  render: () => <AuthorComboBox />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox");
    await userEvent.type(input, "Tol");
    // Listbox renders in a portal outside the canvas
    const listbox = await screen.findByRole("listbox");
    const option = within(listbox).getByText("Leo Tolstoy");
    await expect(option).toBeInTheDocument();
    await userEvent.click(option);
    await expect(input).toHaveValue("Leo Tolstoy");
  },
};
