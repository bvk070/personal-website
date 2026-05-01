interface PillProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "badge";
  className?: string;
}

export default function Pill({
  children,
  variant = "default",
  className = "",
}: PillProps) {
  const variants = {
    default:
      "bg-surface-2 text-text-secondary border border-border",
    gold: "bg-gold/10 text-gold border border-gold/20",
    badge:
      "bg-gold/10 text-gold border border-gold/20 text-sm font-medium",
  };

  return (
    <span
      className={`inline-flex items-center rounded-pill px-3 py-1 text-sm ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
