import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within, expect } from "storybook/test";
import { Select, SelectItem } from "./select";

const meta: Meta<typeof Select> = {
  title: "UI / Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    description: { control: "text" },
    isDisabled: { control: "boolean" },
    isRequired: { control: "boolean" },
  },
  args: {
    label: "Favourite genre",
    placeholder: "Pick a genre…",
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const GENRES = [
  { id: "1", name: "Fiction" },
  { id: "2", name: "Non-fiction" },
  { id: "3", name: "Mystery" },
  { id: "4", name: "Science fiction" },
  { id: "5", name: "Biography" },
];

function GenreSelect(props: Partial<React.ComponentProps<typeof Select>>) {
  return (
    <Select
      label="Favourite genre"
      placeholder="Pick a genre…"
      items={GENRES}
      style={{ maxWidth: "20rem" }}
      {...props}
    >
      {(item) => <SelectItem id={item.id}>{item.name}</SelectItem>}
    </Select>
  );
}

export const Default: Story = {
  render: () => <GenreSelect />,
};

export const WithDescription: Story = {
  render: () => (
    <GenreSelect description="This affects your book recommendations." />
  ),
};

export const Required: Story = {
  render: () => <GenreSelect isRequired />,
};

export const WithError: Story = {
  render: () => (
    <GenreSelect isInvalid errorMessage="Please select a genre to continue." />
  ),
};

export const Disabled: Story = {
  render: () => <GenreSelect isDisabled />,
};

export const LongList: Story = {
  render: () => (
    <Select
      label="Country"
      placeholder="Select a country…"
      items={[
        { id: "ua", name: "Ukraine" },
        { id: "us", name: "United States" },
        { id: "gb", name: "United Kingdom" },
        { id: "de", name: "Germany" },
        { id: "fr", name: "France" },
        { id: "jp", name: "Japan" },
        { id: "kr", name: "South Korea" },
        { id: "pl", name: "Poland" },
        { id: "it", name: "Italy" },
        { id: "es", name: "Spain" },
      ]}
      style={{ maxWidth: "20rem" }}
    >
      {(item) => <SelectItem id={item.id}>{item.name}</SelectItem>}
    </Select>
  ),
};

export const OpenAndSelect: Story = {
  render: () => <GenreSelect />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button");
    await userEvent.click(trigger);
    const listbox = await canvas.findByRole("listbox");
    await expect(listbox).toBeInTheDocument();
    const option = within(listbox).getByText("Mystery");
    await userEvent.click(option);
    await expect(trigger).toHaveTextContent("Mystery");
  },
};
