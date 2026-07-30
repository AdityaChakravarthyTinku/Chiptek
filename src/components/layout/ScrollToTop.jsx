import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// On every route change, scrolls to top for a plain navigation, or to the
// matching element when the URL includes a hash (e.g. arriving at
// /#services from a service-detail page).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Wait a tick for the route's content to mount before scrolling.
      const timeout = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 80);
      return () => clearTimeout(timeout);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return undefined;
  }, [pathname, hash]);

  return null;
}
