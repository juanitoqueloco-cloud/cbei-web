interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignment =
    align === "left"
      ? "text-left"
      : "text-center";

  const descriptionWidth =
    align === "left"
      ? "max-w-2xl"
      : "mx-auto max-w-2xl";

  return (
    <div className={alignment}>

      <span className="inline-flex rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35]">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#234B37] lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-8 text-slate-600 ${descriptionWidth}`}
        >
          {description}
        </p>
      )}

    </div>
  );
}