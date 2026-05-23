"use client";

export type TrackingEventName =
  | "book_now_click"
  | "service_booking_click"
  | "directions_click"
  | "contact_link_click"
  | "external_fresha_click"
  | "gift_card_click"
  | "service_detail_view";

type TrackingParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: TrackingParams[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: TrackingEventName,
  params: TrackingParams = {}
) {
  if (typeof window === "undefined") {
    return;
  }

  const eventParams = {
    page_path: window.location.pathname,
    ...params,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }
}
