"use client";

import {
  Select as AriaSelect,
  type SelectProps as AriaSelectProps,
  Label,
  Button,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  FieldError,
  Text,
  type ValidationResult,
  composeRenderProps,
} from "react-aria-components";
import {
  selectRoot,
  selectLabel as selectLabelCls,
  trigger,
  chevron,
  popover as popoverCls,
  listBox as listBoxCls,
  listBoxItem as listBoxItemCls,
  selectDescription,
  selectError,
} from "./select.css";

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((v: ValidationResult) => string);
  placeholder?: string;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  items?: Iterable<T>;
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  placeholder,
  children,
  items,
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect {...props} className={selectRoot}>
      {label && <Label className={selectLabelCls}>{label}</Label>}
      <Button className={trigger}>
        <SelectValue placeholder={placeholder} />
        <svg
          className={chevron}
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
          width={16}
          height={16}
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      {description && (
        <Text className={selectDescription} slot="description">
          {description}
        </Text>
      )}
      <FieldError className={selectError}>{errorMessage}</FieldError>
      <Popover className={popoverCls}>
        <ListBox className={listBoxCls} items={items}>
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

export const SelectItem = (props: ListBoxItemProps) => (
  <ListBoxItem {...props} className={listBoxItemCls} />
);
