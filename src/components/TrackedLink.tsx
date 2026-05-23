"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent, type TrackingEventName } from "@/utils/tracking";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: TrackingEventName;
  trackingParams?: Record<string, string | number | boolean | undefined>;
};

export default function TrackedLink({
  children,
  eventName,
  trackingParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent(eventName, {
          destination_url: props.href,
          ...trackingParams,
        });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
