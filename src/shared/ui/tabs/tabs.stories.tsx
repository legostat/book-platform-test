import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within, expect } from "storybook/test";
import { Tabs, TabList, Tab, TabPanel } from "./tabs";

const meta: Meta<typeof Tabs> = {
  title: "UI / Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    isDisabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

function SampleTabs(
  props: Partial<ComponentProps<typeof Tabs>> & { disableMiddle?: boolean }
) {
  return (
    <Tabs defaultSelectedKey="overview" {...props}>
      <TabList aria-label="Book details">
        <Tab id="overview">Overview</Tab>
        <Tab id="chapters" isDisabled={props.disableMiddle}>Chapters</Tab>
        <Tab id="reviews">Reviews</Tab>
      </TabList>
      <TabPanel id="overview">
        <p>A brief description of the book's themes, setting, and characters.</p>
      </TabPanel>
      <TabPanel id="chapters">
        <ol>
          <li>Chapter 1 — The Beginning</li>
          <li>Chapter 2 — The Middle</li>
          <li>Chapter 3 — The End</li>
        </ol>
      </TabPanel>
      <TabPanel id="reviews">
        <blockquote>"A masterpiece." — The Daily Read</blockquote>
      </TabPanel>
    </Tabs>
  );
}

export const Default: Story = {
  render: () => <SampleTabs />,
};

export const ManyTabs: Story = {
  name: "Many tabs (pill bar)",
  render: () => (
    <Tabs defaultSelectedKey="overview">
      <TabList aria-label="Book sections">
        <Tab id="overview">Overview</Tab>
        <Tab id="chapters">Chapters</Tab>
        <Tab id="reviews">Reviews</Tab>
        <Tab id="author">Author</Tab>
        <Tab id="similar">Similar books</Tab>
      </TabList>
      <TabPanel id="overview">
        <p>Overview content showing the pill-bar tab design.</p>
      </TabPanel>
      <TabPanel id="chapters">
        <p>Chapter listing.</p>
      </TabPanel>
      <TabPanel id="reviews">
        <p>Reader reviews and ratings.</p>
      </TabPanel>
      <TabPanel id="author">
        <p>Author biography and bibliography.</p>
      </TabPanel>
      <TabPanel id="similar">
        <p>Books similar to this one.</p>
      </TabPanel>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ height: "12rem" }}>
      <SampleTabs orientation="vertical" />
    </div>
  ),
};

export const WithDisabledTab: Story = {
  render: () => <SampleTabs disableMiddle />,
};

export const KeyboardNavigation: Story = {
  render: () => <SampleTabs />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const overviewTab = canvas.getByRole("tab", { name: "Overview" });
    overviewTab.focus();
    await userEvent.keyboard("{ArrowRight}");
    const chaptersTab = canvas.getByRole("tab", { name: "Chapters" });
    await expect(chaptersTab).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    const panel = canvas.getByRole("tabpanel");
    await expect(panel).toBeVisible();
  },
};
