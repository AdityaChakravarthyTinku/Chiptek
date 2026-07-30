import { company } from "../../content/company.js";

// Original brand mark: a layered chip square with four connection nodes.
// `dark` controls whether the mark renders for a light (dark mark) or dark
// (light mark) background, so the same component works in the header, hero,
// and footer.
export default function BrandMark({ dark = false, showDescriptor = false, className = "" }) {
  const strokeColor = dark ? "#FFFFFF" : "#071321";
  const nodeColor = "#079A7A";
  const lineColor = dark ? "rgba(255,255,255,0.45)" : "#D9E2EE";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <rect x="22" y="22" width="20" height="20" rx="4" fill="none" stroke={nodeColor} strokeWidth="2.5" />
        <circle cx="14" cy="20" r="3" fill={nodeColor} />
        <circle cx="50" cy="20" r="3" fill="#3268E8" />
        <circle cx="14" cy="44" r="3" fill="#3268E8" />
        <circle cx="50" cy="44" r="3" fill={nodeColor} />
        <path d="M17 20 H22 M42 20 H47 M17 44 H22 M42 44 H47" stroke={lineColor} strokeWidth="2" />
        <circle cx="32" cy="32" r="2.5" fill={nodeColor} />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-head text-lg font-extrabold tracking-tight ${dark ? "text-white" : "text-ink-text"}`} style={{ color: strokeColor }}>
          {company.name.toUpperCase()}
        </span>
        {showDescriptor && (
          <span className={`mt-0.5 text-[10px] font-semibold tracking-[0.2em] ${dark ? "text-white/60" : "text-slate-body"}`}>
            {company.descriptor}
          </span>
        )}
      </span>
    </span>
  );
}
