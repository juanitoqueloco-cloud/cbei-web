import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  href: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  benefits,
  href,
}: ServiceCardProps) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF4E5]">
        <Icon
          size={32}
          className="text-[#3A6B35]"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-[#3A6B35]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <ul className="mt-6 space-y-2">

        {benefits.map((item) => (

          <li
            key={item}
            className="text-slate-700"
          >
            ✓ {item}
          </li>

        ))}

      </ul>

      <Link
        href={href}
        className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0F4C81] transition hover:gap-3"
      >
        Más información

        <ArrowRight size={18} />

      </Link>

    </div>
  );
}