import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Button from "../ui/Button.jsx";

// Accessible mobile navigation drawer: traps focus, locks body scroll,
// closes on Escape, restores focus to the trigger on close, and closes
// automatically after a navigation link is activated.
export default function MobileNavigation({ isOpen, onClose, navItems, activeId, ctaHref }) {
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerFocusRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      triggerFocusRef.current = document.activeElement;
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      if (triggerFocusRef.current instanceof HTMLElement) {
        triggerFocusRef.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-ink/60 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col bg-white p-6 shadow-2xl md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="font-head text-base font-extrabold text-ink-text">CHIPTEK</span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft text-ink-text"
                aria-label="Close menu"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={`min-h-[44px] rounded-lg px-3 py-3 text-base font-semibold ${
                    activeId === item.id ? "bg-teal-soft text-teal" : "text-ink-text"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-8">
              <Button href={ctaHref} onClick={onClose} className="w-full">
                Discuss a Requirement
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
