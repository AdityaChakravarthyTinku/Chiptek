// Generic small card used for engineering principles, role listings, and
// technology capability groups — anywhere a title + description pairing
// needs a consistent card treatment without a dedicated component per section.
export default function CapabilityCard({ index, title, description, icon: Icon }) {
  return (
    <div className="h-full rounded-2xl border border-border-soft bg-white p-6 shadow-card">
      <div className="mb-4 flex items-center gap-3">
        {Icon ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent-blue">
            <Icon size={20} aria-hidden="true" />
          </span>
        ) : (
          typeof index === "number" && (
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-soft text-sm font-bold text-teal">
              {String(index + 1).padStart(2, "0")}
            </span>
          )
        )}
        <h3 className="text-base font-bold text-ink-text">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-body">{description}</p>
    </div>
  );
}
