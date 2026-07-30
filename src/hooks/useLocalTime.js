import { useEffect, useState } from "react";

// Calculates local time client-side for a given IANA time zone. No external
// API call — purely Intl.DateTimeFormat against the visitor's own clock.
export function useLocalTime(timeZone) {
  const [time, setTime] = useState(() => formatTime(timeZone));

  useEffect(() => {
    const interval = setInterval(() => setTime(formatTime(timeZone)), 1000 * 30);
    return () => clearInterval(interval);
  }, [timeZone]);

  return time;
}

function formatTime(timeZone) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).format(new Date());
  } catch (_err) {
    return null;
  }
}
