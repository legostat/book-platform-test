"use client";

import {
  ComboBox as AriaComboBox,
  type ComboBoxProps as AriaComboBoxProps,
  Label,
  Input,
  Button,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  Popover,
  FieldError,
  Text,
  type ValidationResult,
  composeRenderProps,
} from "react-aria-components";
import {
  comboBoxRoot,
  comboBoxLabel,
  fieldGroup,
  comboInput,
  comboTrigger,
  comboPopover,
  comboListBox,
  comboItem,
  comboDescription,
  comboError,
} from "./combo-box.css";

export interface ComboBoxProps<T extends object>
  extends Omit<AriaComboBoxProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((v: ValidationResult) => string);
  placeholder?: string;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  items?: Iterable<T>;
}

export function ComboBox<T extends object>({
  label,
  description,
  errorMessage,
  placeholder,
  children,
  items,
  ...props
}: ComboBoxProps<T>) {
  return (
    <AriaComboBox {...props} className={comboBoxRoot}>
      {label && <Label className={comboBoxLabel}>{label}</Label>}
      <div className={fieldGroup}>
        <Input className={comboInput} placeholder={placeholder} />
        <Button className={comboTrigger} aria-label="Open list">
          <svg viewBox="0 0 16 16" fill="none" width={16} height={16} aria-hidden>
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
      {description && (
        <Text className={comboDescription} slot="description">
          {description}
        </Text>
      )}
      <FieldError className={comboError}>{errorMessage}</FieldError>
      <Popover className={comboPopover} isNonModal>
        <ListBox className={comboListBox} items={items}>
          {children}
        </ListBox>
      </Popover>
    </AriaComboBox>
  );
}

export const ComboBoxItem = (props: ListBoxItemProps) => (
  <ListBoxItem {...props} className={comboItem} />
);
