// Shared form field wrapper: connects a <label> to its control via id, and
// wires up an accessible error message via aria-describedby + aria-invalid
// when present. Supports text-like inputs, textarea, and select via `as`.
export default function FormField({
  id,
  label,
  type = "text",
  as = "input",
  required = false,
  error,
  children,
  ...rest
}) {
  const errorId = `${id}-error`;
  const Tag = as;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink-text">
        {label}
        {required && (
          <span className="text-teal" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>

      {as === "select" ? (
        <select
          id={id}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="min-h-[44px] rounded-lg border border-border-soft bg-white px-3 py-2 text-sm text-ink-text focus:border-teal"
          {...rest}
        >
          {children}
        </select>
      ) : (
        <Tag
          id={id}
          type={as === "textarea" ? undefined : type}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="min-h-[44px] rounded-lg border border-border-soft bg-white px-3 py-2 text-sm text-ink-text placeholder:text-slate-body/60 focus:border-teal"
          {...rest}
        />
      )}

      {error && (
        <p id={errorId} role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
