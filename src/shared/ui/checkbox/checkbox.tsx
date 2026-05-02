"use client";

import {
  Checkbox as AriaCheckbox,
  type CheckboxProps as AriaCheckboxProps,
  composeRenderProps,
} from "react-aria-components";
import {
  checkboxRoot,
  indicator,
  checkIcon,
  dashIcon,
} from "./checkbox.css";

export type CheckboxProps = AriaCheckboxProps;

export const Checkbox = ({ children, ...props }: CheckboxProps) => (
  <AriaCheckbox
    {...props}
    className={composeRenderProps(props.className, (cls) =>
      [checkboxRoot, cls].filter(Boolean).join(" ")
    )}
  >
    {composeRenderProps(children, (ch) => (
      <>
        <div className={indicator}>
          {/* Checkmark */}
          <svg className={checkIcon} viewBox="0 0 12 12" fill="none" aria-hidden>
            <polyline
              points="1.5 6 4.5 9 10.5 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* Indeterminate dash */}
          <div className={dashIcon} />
        </div>
        {ch}
      </>
    ))}
  </AriaCheckbox>
);
