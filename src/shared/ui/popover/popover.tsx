"use client";

import type { ReactNode } from "react";
import {
  Popover as AriaPopover,
  type PopoverProps as AriaPopoverProps,
  OverlayArrow,
  composeRenderProps,
} from "react-aria-components";
import { popover, overlayArrow } from "./popover.css";

export interface PopoverProps extends Omit<AriaPopoverProps, "children"> {
  children: ReactNode;
  showArrow?: boolean;
}

export const Popover = ({
  children,
  showArrow = false,
  ...props
}: PopoverProps) => (
  <AriaPopover
    {...props}
    offset={showArrow ? 12 : 8}
    className={composeRenderProps(props.className, (cls) =>
      [popover, cls].filter(Boolean).join(" ")
    )}
  >
    {showArrow && (
      <OverlayArrow>
        <svg width={12} height={12} viewBox="0 0 12 12" className={overlayArrow} aria-hidden>
          <path d="M0 0 L6 6 L12 0" />
        </svg>
      </OverlayArrow>
    )}
    {children}
  </AriaPopover>
);

// Re-export DialogTrigger for convenience as PopoverTrigger
export {
  DialogTrigger as PopoverTrigger,
} from "react-aria-components";
