"use client";

import {
  Disclosure as AriaDisclosure,
  type DisclosureProps as AriaDisclosureProps,
  DisclosurePanel as AriaDisclosurePanel,
  type DisclosurePanelProps,
  DisclosureGroup as AriaDisclosureGroup,
  type DisclosureGroupProps,
  Heading,
  Button,
  composeRenderProps,
} from "react-aria-components";
import {
  disclosureRoot,
  disclosureButton,
  chevronIcon,
  disclosurePanel,
  disclosurePanelInner,
  disclosureGroup,
} from "./disclosure.css";

/* ─── Single Disclosure ─── */
export interface DisclosureProps extends AriaDisclosureProps {
  title: string;
  children: React.ReactNode;
  headingLevel?: 2 | 3 | 4 | 5 | 6;
}

export function Disclosure({
  title,
  children,
  headingLevel = 3,
  ...props
}: DisclosureProps) {
  return (
    <AriaDisclosure
      {...props}
      className={composeRenderProps(props.className, (cls) =>
        [disclosureRoot, cls].filter(Boolean).join(" ")
      )}
    >
      <Heading level={headingLevel} style={{ margin: 0 }}>
        <Button slot="trigger" className={disclosureButton}>
          <span>{title}</span>
          <svg
            className={chevronIcon}
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
            width={18}
            height={18}
          >
            <path
              d="M6 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </Heading>
      <AriaDisclosurePanel className={disclosurePanel}>
        <div className={disclosurePanelInner}>{children}</div>
      </AriaDisclosurePanel>
    </AriaDisclosure>
  );
}

/* ─── DisclosureGroup (accordion) ─── */
export interface DisclosureGroupWrapperProps
  extends Omit<DisclosureGroupProps, "children"> {
  children: React.ReactNode;
}

export function DisclosureGroup({
  children,
  ...props
}: DisclosureGroupWrapperProps) {
  return (
    <AriaDisclosureGroup
      {...props}
      className={composeRenderProps(props.className, (cls) =>
        [disclosureGroup, cls].filter(Boolean).join(" ")
      )}
    >
      {children}
    </AriaDisclosureGroup>
  );
}
