"use client";

import {
  Switch as AriaSwitch,
  type SwitchProps as AriaSwitchProps,
  composeRenderProps,
} from "react-aria-components";
import { switchRoot, track, thumb } from "./switch.css";

export type SwitchProps = AriaSwitchProps;

export const Switch = ({ children, ...props }: SwitchProps) => (
  <AriaSwitch
    {...props}
    className={composeRenderProps(props.className, (cls) =>
      [switchRoot, cls].filter(Boolean).join(" ")
    )}
  >
    {composeRenderProps(children, (ch) => (
      <>
        <div className={track}>
          <div className={thumb} />
        </div>
        {ch}
      </>
    ))}
  </AriaSwitch>
);
