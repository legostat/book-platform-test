"use client";

import type { ReactNode } from "react";
import {
  TooltipTrigger as AriaTooltipTrigger,
  Tooltip as AriaTooltip,
  type TooltipProps as AriaTooltipProps,
  type TooltipTriggerComponentProps,
  OverlayArrow,
  composeRenderProps,
} from "react-aria-components";
import { tooltip, arrowSvg } from "./tooltip.css";

export interface TooltipProps extends Omit<AriaTooltipProps, "children"> {
  children: ReactNode;
}

export const Tooltip = ({ children, ...props }: TooltipProps) => (
  <AriaTooltip
    {...props}
    offset={8}
    className={composeRenderProps(props.className, (cls) =>
      [tooltip, cls].filter(Boolean).join(" ")
    )}
  >
    <OverlayArrow>
      <svg
        width={8}
        height={8}
        viewBox="0 0 8 8"
        className={arrowSvg}
        aria-hidden
      >
        <path d="M0 0 L4 4 L8 0" />
      </svg>
    </OverlayArrow>
    {children}
  </AriaTooltip>
);

export const TooltipTrigger = (props: TooltipTriggerComponentProps) => (
  <AriaTooltipTrigger {...props} />
);
