"use client";

import {
  RadioGroup as AriaRadioGroup,
  type RadioGroupProps as AriaRadioGroupProps,
  Radio as AriaRadio,
  type RadioProps,
  Label,
  FieldError,
  Text,
  type ValidationResult,
  composeRenderProps,
} from "react-aria-components";
import {
  radioGroup,
  radioGroupLabel,
  radioItems,
  radio,
  radioIndicator,
  radioGroupDescription,
  radioGroupError,
} from "./radio-group.css";

export interface RadioGroupProps
  extends Omit<AriaRadioGroupProps, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((v: ValidationResult) => string);
  children: React.ReactNode;
}

export function RadioGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: RadioGroupProps) {
  return (
    <AriaRadioGroup {...props} className={radioGroup}>
      {label && <Label className={radioGroupLabel}>{label}</Label>}
      <div className={radioItems}>{children}</div>
      {description && (
        <Text className={radioGroupDescription} slot="description">
          {description}
        </Text>
      )}
      <FieldError className={radioGroupError}>{errorMessage}</FieldError>
    </AriaRadioGroup>
  );
}

export function Radio({ children, ...props }: RadioProps) {
  return (
    <AriaRadio
      {...props}
      className={composeRenderProps(props.className, (cls) =>
        [radio, cls].filter(Boolean).join(" ")
      )}
    >
      {composeRenderProps(children, (ch) => (
        <>
          <div className={radioIndicator} />
          {ch}
        </>
      ))}
    </AriaRadio>
  );
}
