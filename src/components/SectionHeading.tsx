interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({ eyebrow, title, subtitle, align = "center", className = "" }: Props) => (
  <div className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-3xl ${className}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 className="mt-3 font-serif">{title}</h2>
    {subtitle && <p className="mt-5 text-muted-foreground leading-relaxed">{subtitle}</p>}
  </div>
);

export default SectionHeading;
