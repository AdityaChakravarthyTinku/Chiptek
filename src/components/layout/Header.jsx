import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import BrandMark from "../ui/BrandMark.jsx";
import MobileNavigation from "./MobileNavigation.jsx";
import { useActiveSection } from "../../hooks/useActiveSection.js";
import { useScrollProgress } from "../../hooks/useScrollProgress.js";

const navItems = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About", href: "/#about" },
  { id: "services", label: "Services", href: "/#services" },
  { id: "approach", label: "Approach", href: "/#approach" },
  { id: "expertise", label: "Expertise", href: "/#expertise" },
  { id: "contact", label: "Contact", href: "/#contact" }
];

const sectionIds = navItems.map((item) => item.id);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const activeId = useActiveSection(isHomePage ? sectionIds : []);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-homepage routes, nav items should navigate home then scroll to
  // the target anchor rather than relying on a same-page hash jump.
  function handleNavClick(event, item) {
    if (isHomePage) return; // let the native anchor handle it
    event.preventDefault();
    setMenuOpen(false);
    navigate(`/#${item.id}`);
    // navigate first, then let the route render before scrolling
    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById(item.id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    });
  }

  const useLightTreatment = isHomePage && !scrolled;

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
          useLightTreatment
            ? "bg-transparent"
            : "border-b border-border-soft bg-white/90 shadow-header backdrop-blur-md"
        }`}
      >
        <div
          className="h-[2px] w-full bg-border-soft/40"
          role="progressbar"
          aria-label="Page scroll progress"
          aria-valuenow={Math.round(progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-gradient-to-r from-teal to-accent-blue transition-[width] duration-150"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div className="container-content flex h-20 items-center justify-between">
          <a href={isHomePage ? "#home" : "/#home"} className="shrink-0">
            <BrandMark dark={useLightTreatment} />
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {navItems.slice(1).map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(event) => handleNavClick(event, item)}
                aria-current={activeId === item.id ? "true" : undefined}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  useLightTreatment
                    ? activeId === item.id
                      ? "text-teal"
                      : "text-white/85 hover:text-white"
                    : activeId === item.id
                    ? "text-teal"
                    : "text-ink-text/80 hover:text-ink-text"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="/#contact"
              onClick={(event) => handleNavClick(event, { id: "contact" })}
              className={`inline-flex min-h-[44px] items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                useLightTreatment
                  ? "border border-white/40 text-white hover:border-white/80"
                  : "bg-teal text-white hover:bg-teal/90"
              }`}
            >
              Discuss a Requirement
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className={`flex h-11 w-11 items-center justify-center rounded-full md:hidden ${
              useLightTreatment ? "text-white" : "text-ink-text"
            }`}
            aria-label="Open menu"
            aria-haspopup="dialog"
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileNavigation
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navItems={navItems}
        activeId={activeId}
        ctaHref="/#contact"
      />
    </>
  );
}
