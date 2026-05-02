import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within, expect } from "storybook/test";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogTrigger } from "./dialog";

const meta: Meta = {
  title: "UI / Dialog",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

function SampleDialog(props: {
  title?: string;
  isDismissable?: boolean;
}) {
  return (
    <DialogTrigger>
      <Button>Open Dialog</Button>
      <Dialog
        title={props.title ?? "Confirm action"}
        isDismissable={props.isDismissable ?? true}
        footer={
          <>
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Confirm</Button>
          </>
        }
      >
        Are you sure you want to proceed? This action cannot be undone.
      </Dialog>
    </DialogTrigger>
  );
}

export const Default: Story = {
  render: () => <SampleDialog />,
};

export const NonDismissable: Story = {
  render: () => (
    <SampleDialog
      title="Required action"
      isDismissable={false}
    />
  ),
};

export const DestructiveAction: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="destructive">Delete book</Button>
      <Dialog
        title="Delete book?"
        footer={
          <>
            <Button variant="outline">Keep book</Button>
            <Button variant="destructive">Delete permanently</Button>
          </>
        }
      >
        This will permanently remove the book and all associated reading progress. This action cannot be undone.
      </Dialog>
    </DialogTrigger>
  ),
};

export const OpenDialog: Story = {
  render: () => <SampleDialog />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: "Open Dialog" });
    await userEvent.click(trigger);
    const dialog = await canvas.findByRole("dialog");
    await expect(dialog).toBeInTheDocument();
    const heading = within(dialog).getByRole("heading");
    await expect(heading).toHaveTextContent("Confirm action");
  },
};

export const CloseWithButton: Story = {
  render: () => <SampleDialog />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Open Dialog" }));
    const dialog = await canvas.findByRole("dialog");
    const closeBtn = within(dialog).getByRole("button", { name: "Close dialog" });
    await userEvent.click(closeBtn);
    await expect(canvas.queryByRole("dialog")).not.toBeInTheDocument();
  },
};
