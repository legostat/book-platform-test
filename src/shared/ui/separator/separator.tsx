"use client";

import {
  Separator as AriaSeparator,
  type SeparatorProps as AriaSeparatorProps,
} from "react-aria-components";
import { separator } from "./separator.css";

export type SeparatorProps = AriaSeparatorProps;

export const Separator = (props: SeparatorProps) => (
  <AriaSeparator
    {...props}
    className={[separator, props.className].filter(Boolean).join(" ")}
  />
);
