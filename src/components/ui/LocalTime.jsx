import { Clock } from "lucide-react";
import { useLocalTime } from "../../hooks/useLocalTime.js";

// Displays the current local time in Cumming, GA, computed client-side.
// Renders nothing if the time zone calculation fails, rather than showing
// an incorrect or misleading value.
export default function LocalTime({ timeZone }) {
  const time = useLocalTime(timeZone);

  if (!time) return null;

  return (
    <p className="inline-flex items-center gap-2 text-sm text-slate-body">
      <Clock size={16} className="text-teal" aria-hidden="true" />
      Local time in Cumming: <span className="font-medium text-ink-text">{time}</span>
    </p>
  );
}
