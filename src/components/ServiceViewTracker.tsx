"use client";

import { useEffect } from "react";
import { trackEvent } from "@/utils/tracking";

type ServiceViewTrackerProps = {
  serviceName: string;
};

export default function ServiceViewTracker({
  serviceName,
}: ServiceViewTrackerProps) {
  useEffect(() => {
    trackEvent("service_detail_view", {
      service_name: serviceName,
    });
  }, [serviceName]);

  return null;
}
