import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within, expect, screen } from "storybook/test";
import { Button } from "@/shared/ui/button";
import { Popover, PopoverTrigger } from "./popover";

const meta: Meta = {
  title: "UI / Popover",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

function SamplePopover(props: { showArrow?: boolean; placement?: string }) {
  return (
    <PopoverTrigger>
      <Button variant="secondary">Open Popover</Button>
      <Popover
        showArrow={props.showArrow}
        placement={props.placement as never}
      >
        <div style={{ maxWidth: "14rem" }}>
          <strong style={{ display: "block", marginBottom: "0.25rem" }}>
            Pro tip
          </strong>
          <span style={{ fontSize: "0.875rem", opacity: 0.8 }}>
            Use keyboard shortcuts to navigate faster through your reading list.
          </span>
        </div>
      </Popover>
    </PopoverTrigger>
  );
}

export const Default: Story = {
  render: () => <SamplePopover />,
};

export const WithArrow: Story = {
  render: () => <SamplePopover showArrow />,
};

export const PlacementBottom: Story = {
  render: () => <SamplePopover placement="bottom" />,
};

export const PlacementRight: Story = {
  render: () => <SamplePopover placement="right" />,
};

export const RichContent: Story = {
  render: () => (
    <PopoverTrigger>
      <Button variant="outline">Book info</Button>
      <Popover>
        <div style={{ maxWidth: "16rem" }}>
          <div style={{ fontWeight: 600, marginBottom: "0.5rem" }}>The Great Gatsby</div>
          <div style={{ fontSize: "0.875rem", opacity: 0.7, marginBottom: "0.5rem" }}>
            F. Scott Fitzgerald · 1925
          </div>
          <p style={{ fontSize: "0.875rem", margin: 0, lineHeight: 1.5 }}>
            A story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.
          </p>
        </div>
      </Popover>
    </PopoverTrigger>
  ),
};

export const OpenPopover: Story = {
  render: () => <SamplePopover />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button");
    await userEvent.click(trigger);
    // Popover renders in a portal outside the canvas
    const popoverText = await screen.findByText("Pro tip");
    await expect(popoverText).toBeInTheDocument();
  },
};
