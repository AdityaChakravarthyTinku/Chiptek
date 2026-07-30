// Shared eyebrow + heading + optional supporting copy block used at the
// top of every major section, keeping heading hierarchy consistent.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  as: Tag = "h2"
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase ${
            light ? "text-teal" : "text-teal"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-tight ${
          light ? "text-white" : "text-ink-text"
        }`}
      >
        {title}
      </Tag>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? "text-white/75" : "text-slate-body"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
