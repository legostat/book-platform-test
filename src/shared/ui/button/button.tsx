"use client";

import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
} from "react-aria-components";
import { button, type ButtonVariants } from "./button.css";

export type ButtonProps = AriaButtonProps & ButtonVariants;

export const Button = ({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) => (
  <AriaButton
    className={composeRenderProps(className, (cls) =>
      [button({ variant, size }), cls].filter(Boolean).join(" ")
    )}
    {...props}
  >
    {children}
  </AriaButton>
);
