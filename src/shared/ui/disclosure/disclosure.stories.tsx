import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within, expect } from "storybook/test";
import { Disclosure, DisclosureGroup } from "./disclosure";

const meta: Meta = {
  title: "UI / Disclosure",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const SingleItem: Story = {
  render: () => (
    <Disclosure title="What is an e-book?">
      An e-book (electronic book) is a digital version of a printed book that
      can be read on electronic devices such as dedicated e-readers, tablets,
      smartphones, and computers.
    </Disclosure>
  ),
};

export const DefaultExpanded: Story = {
  render: () => (
    <Disclosure title="Expanded by default" defaultExpanded>
      This panel is open when the story first renders.
    </Disclosure>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Disclosure title="Unavailable section" isDisabled>
      This content is temporarily unavailable.
    </Disclosure>
  ),
};

export const AccordionGroup: Story = {
  render: () => (
    <DisclosureGroup>
      <Disclosure title="Delivery information" headingLevel={3}>
        We deliver to over 50 countries. Standard shipping takes 5–7 business
        days; express shipping takes 1–2 days.
      </Disclosure>
      <Disclosure title="Returns & refunds" headingLevel={3}>
        You may return physical books within 30 days of delivery in original
        condition for a full refund.
      </Disclosure>
      <Disclosure title="Digital content" headingLevel={3}>
        E-book purchases are non-refundable once downloaded. Please check
        compatibility before purchasing.
      </Disclosure>
    </DisclosureGroup>
  ),
};

export const AllowMultiple: Story = {
  render: () => (
    <DisclosureGroup allowsMultipleExpanded>
      <Disclosure title="Chapter 1 — The Call" headingLevel={3}>
        The protagonist receives a mysterious letter that will change everything.
      </Disclosure>
      <Disclosure title="Chapter 2 — The Journey" headingLevel={3}>
        Setting out from the familiar village, the journey into the unknown begins.
      </Disclosure>
    </DisclosureGroup>
  ),
};

export const TogglePanel: Story = {
  render: () => (
    <Disclosure title="Click to expand">
      Revealed content is visible here.
    </Disclosure>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
  },
};
