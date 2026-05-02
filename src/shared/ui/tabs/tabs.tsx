"use client";

import {
  Tabs as AriaTabs,
  TabList as AriaTabList,
  Tab as AriaTab,
  TabPanel as AriaTabPanel,
  type TabsProps as AriaTabsProps,
  type TabListProps,
  type TabProps,
  type TabPanelProps,
  composeRenderProps,
} from "react-aria-components";
import { tabsRoot, tabList, tab, tabPanel } from "./tabs.css";

export function Tabs(props: AriaTabsProps) {
  return (
    <AriaTabs
      {...props}
      className={composeRenderProps(props.className, (cls) =>
        [tabsRoot, cls].filter(Boolean).join(" ")
      )}
    />
  );
}

export function TabList<T extends object>(props: TabListProps<T>) {
  return (
    <AriaTabList
      {...props}
      className={composeRenderProps(props.className, (cls) =>
        [tabList, cls].filter(Boolean).join(" ")
      )}
    />
  );
}

export function Tab(props: TabProps) {
  return (
    <AriaTab
      {...props}
      className={composeRenderProps(props.className, (cls) =>
        [tab, cls].filter(Boolean).join(" ")
      )}
    />
  );
}

export function TabPanel(props: TabPanelProps) {
  return (
    <AriaTabPanel
      {...props}
      className={composeRenderProps(props.className, (cls) =>
        [tabPanel, cls].filter(Boolean).join(" ")
      )}
    />
  );
}
