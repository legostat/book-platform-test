import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within, expect, screen } from "storybook/test";
import { Button } from "@/shared/ui/button";
import { Tooltip, TooltipTrigger } from "./tooltip";

const meta: Meta = {
  title: "UI / Tooltip",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

function SampleTooltip(props: {
  placement?: string;
  delay?: number;
  content?: string;
}) {
  return (
    <TooltipTrigger delay={props.delay ?? 700}>
      <Button variant="secondary">Hover or focus me</Button>
      <Tooltip placement={props.placement as never}>
        {props.content ?? "Keyboard shortcut: ⌘ K"}
      </Tooltip>
    </TooltipTrigger>
  );
}

export const Default: Story = {
  render: () => <SampleTooltip />,
};

export const PlacementBottom: Story = {
  render: () => <SampleTooltip placement="bottom" />,
};

export const PlacementRight: Story = {
  render: () => <SampleTooltip placement="right" />,
};

export const NoDelay: Story = {
  render: () => <SampleTooltip delay={0} content="Instant tooltip" />,
};

export const OnIconButton: Story = {
  render: () => (
    <TooltipTrigger delay={0}>
      <Button variant="ghost" aria-label="Add to reading list">
        <svg viewBox="0 0 20 20" fill="currentColor" width={20} height={20} aria-hidden>
          <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
        </svg>
      </Button>
      <Tooltip>Add to reading list</Tooltip>
    </TooltipTrigger>
  ),
};

export const ShowTooltip: Story = {
  render: () => <SampleTooltip delay={0} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button");
    trigger.focus();
    // Tooltip renders in a portal outside the canvas
    const tooltip = await screen.findByRole("tooltip");
    await expect(tooltip).toBeInTheDocument();
  },
};
