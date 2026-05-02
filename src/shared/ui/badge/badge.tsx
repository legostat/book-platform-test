"use client";

import type { ReactNode } from "react";
import { badgeBase, badgeVariants, type BadgeVariant } from "./badge.css";

// Status variants that convey meaning — need a semantic role
const STATUS_VARIANTS: BadgeVariant[] = ["success", "warning", "error", "info"];

export interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
  /**
   * Override the implicit role.
   * Status/error/warning/info variants default to "status" so screen readers
   * announce badge content in a live region. Use "none" to suppress.
   */
  role?: string;
}

export const Badge = ({
  variant = "neutral",
  children,
  className,
  role,
}: BadgeProps) => {
  // WCAG 1.3.1: status-type badges carry implicit semantic meaning.
  // Assign role="status" so assistive technology can announce them in
  // a live region when they appear/change dynamically.
  const resolvedRole =
    role !== undefined
      ? role
      : STATUS_VARIANTS.includes(variant)
        ? "status"
        : undefined;

  return (
    <span
      role={resolvedRole}
      className={[badgeBase, badgeVariants[variant], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
};
