"use client";

import type { ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  Dialog as AriaDialog,
  Heading,
  Button,
  DialogTrigger,
} from "react-aria-components";
import {
  overlay,
  sheet,
  sheetSizes,
  handle,
  sheetHeader,
  sheetTitle,
  sheetCloseButton,
  sheetBody,
  sheetFooter,
} from "./sheet.css";

export { DialogTrigger as SheetTrigger };

export interface SheetProps {
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg" | "full";
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  isDismissable?: boolean;
}

function SheetContent({
  title,
  children,
  footer,
  size = "md",
}: Omit<SheetProps, "isOpen" | "onOpenChange" | "isDismissable">) {
  return (
    <AriaDialog className={[sheet, sheetSizes[size]].join(" ")}>
      {({ close }) => (
        <>
          <div className={handle} aria-hidden />
          {title && (
            <div className={sheetHeader}>
              <Heading slot="title" className={sheetTitle}>
                {title}
              </Heading>
              <Button
                className={sheetCloseButton}
                onPress={close}
                aria-label="Close sheet"
              >
                <svg viewBox="0 0 16 16" fill="none" width={16} height={16} aria-hidden>
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
          <div className={sheetBody}>{children}</div>
          {footer && <div className={sheetFooter}>{footer}</div>}
        </>
      )}
    </AriaDialog>
  );
}

export const Sheet = ({
  isOpen,
  onOpenChange,
  isDismissable = true,
  ...rest
}: SheetProps) => (
  <ModalOverlay
    className={overlay}
    isOpen={isOpen}
    onOpenChange={onOpenChange}
    isDismissable={isDismissable}
  >
    <Modal>
      <SheetContent {...rest} />
    </Modal>
  </ModalOverlay>
);
