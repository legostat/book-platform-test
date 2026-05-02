"use client";

import type { ReactNode } from "react";
import {
  DialogTrigger,
  Modal,
  ModalOverlay,
  Dialog as AriaDialog,
  Heading,
  Button,
  type DialogProps as AriaDialogProps,
} from "react-aria-components";
import {
  overlay,
  dialog,
  dialogHeader,
  dialogTitle,
  closeButton,
  dialogBody,
  dialogFooter,
} from "./dialog.css";

/* ─── Composable pieces ─── */
export { DialogTrigger };

export interface DialogProps {
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}

function DialogContent({ title, children, footer }: DialogProps) {
  return (
    <AriaDialog className={dialog}>
      {({ close }) => (
        <>
          {title && (
            <div className={dialogHeader}>
              <Heading slot="title" className={dialogTitle}>
                {title}
              </Heading>
              <Button
                className={closeButton}
                onPress={close}
                aria-label="Close dialog"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  width={16}
                  height={16}
                  aria-hidden
                >
                  <path
                    d="M4 4l8 8M12 4l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Button>
            </div>
          )}
          <div className={dialogBody}>{children}</div>
          {footer && <div className={dialogFooter}>{footer}</div>}
        </>
      )}
    </AriaDialog>
  );
}

export interface ModalDialogProps extends DialogProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  isDismissable?: boolean;
}

export const Dialog = ({
  isOpen,
  onOpenChange,
  isDismissable = true,
  ...dialogProps
}: ModalDialogProps) => (
  <ModalOverlay
    className={overlay}
    isOpen={isOpen}
    onOpenChange={onOpenChange}
    isDismissable={isDismissable}
  >
    <Modal>
      <DialogContent {...dialogProps} />
    </Modal>
  </ModalOverlay>
);
