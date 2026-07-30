import { ArrowRight } from "lucide-react";
import { forwardRef } from "react";

const variantStyles = {
  primary: "bg-teal text-white hover:bg-teal/90",
  secondary: "bg-white text-ink border border-border-soft hover:border-teal/50",
  ghost: "bg-transparent text-white border border-white/30 hover:border-white/70",
  dark: "bg-ink text-white hover:bg-ink-blue"
};

// Shared button/link component. Renders an <a> when href is provided so
// links stay semantically correct links rather than click-handled divs.
const Button = forwardRef(function Button(
  { children, href, onClick, type = "button", variant = "primary", withArrow = true, className = "", ...rest },
  ref
) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold
    transition-colors duration-200 min-h-[44px] ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
});

export default Button;
