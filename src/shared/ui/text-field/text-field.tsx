"use client";

import {
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
  Label,
  Input,
  FieldError,
  Text,
  type ValidationResult,
} from "react-aria-components";
import {
  fieldRoot,
  label as labelCls,
  inputWrapper,
  input as inputCls,
  description as descCls,
  fieldError,
} from "./text-field.css";
import { srOnly } from "@/shared/ui/utils/sr-only.css";

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((v: ValidationResult) => string);
  placeholder?: string;
}

export const TextField = ({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: TextFieldProps) => (
  <AriaTextField {...props} className={fieldRoot}>
    {label && (
      <Label className={labelCls}>
        {label}
        {/* WCAG 1.3.1: provide a screen-reader text alternative for the visual " *" required marker */}
        {props.isRequired && (
          <>
            <span aria-hidden="true"> *</span>
            <span className={srOnly}>(required)</span>
          </>
        )}
      </Label>
    )}
    <div className={inputWrapper}>
      <Input className={inputCls} placeholder={placeholder} />
    </div>
    {description && (
      <Text className={descCls} slot="description">
        {description}
      </Text>
    )}
    <FieldError className={fieldError}>{errorMessage}</FieldError>
  </AriaTextField>
);
