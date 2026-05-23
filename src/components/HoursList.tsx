import { site } from "@/data/site";
import { publicHoursText, publicText } from "@/utils/publicContent";

export default function HoursList() {
  return (
    <div>
      <ul className="divide-y divide-primary/10">
        {site.hours.map((item) => (
          <li
            key={item.label}
            className="flex items-start justify-between gap-4 py-3 text-sm"
          >
            <span className="font-medium text-foreground">{item.label}</span>
            <span className="text-right text-muted">
              {publicHoursText(item.hours)}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted">
        {publicText(
          site.hoursNote,
          "Online booking shows the most current appointment availability."
        )}
      </p>
    </div>
  );
}
