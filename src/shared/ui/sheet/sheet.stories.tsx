import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within, expect, screen, waitFor } from "storybook/test";
import { Button } from "@/shared/ui/button";
import { Sheet, SheetTrigger } from "./sheet";

const meta: Meta = {
  title: "UI / Sheet",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

function SampleSheet(props: {
  size?: "sm" | "md" | "lg" | "full";
  isDismissable?: boolean;
  title?: string;
}) {
  return (
    <SheetTrigger>
      <Button>Open Sheet</Button>
      <Sheet
        title={props.title ?? "Reading list"}
        size={props.size ?? "md"}
        isDismissable={props.isDismissable ?? true}
        footer={
          <>
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Save</Button>
          </>
        }
      >
        <p style={{ margin: 0 }}>
          Manage your personal reading list. Add, remove, or reorder books to
          tailor your reading journey.
        </p>
      </Sheet>
    </SheetTrigger>
  );
}

export const Default: Story = {
  render: () => <SampleSheet />,
};

export const Small: Story = {
  render: () => <SampleSheet size="sm" title="Quick action" />,
};

export const Large: Story = {
  render: () => <SampleSheet size="lg" title="Book details" />,
};

export const FullScreen: Story = {
  render: () => <SampleSheet size="full" title="Full screen sheet" />,
};

export const NonDismissable: Story = {
  render: () => <SampleSheet isDismissable={false} title="Required action" />,
};

export const OpenSheet: Story = {
  render: () => <SampleSheet />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: "Open Sheet" });
    await userEvent.click(trigger);
    // Sheet renders in a portal outside the canvas
    const dialog = await screen.findByRole("dialog");
    await expect(dialog).toBeInTheDocument();
    const heading = within(dialog).getByRole("heading");
    await expect(heading).toHaveTextContent("Reading list");
  },
};

export const CloseSheet: Story = {
  render: () => <SampleSheet />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Open Sheet" }));
    // Sheet renders in a portal outside the canvas
    const dialog = await screen.findByRole("dialog");
    const closeBtn = within(dialog).getByRole("button", { name: "Close sheet" });
    await userEvent.click(closeBtn);
    await expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  },
};
