import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variants = {
    primary:
      "inline-flex items-center justify-center rounded-full bg-[#0F4C81] px-8 py-4 font-semibold text-white transition hover:bg-[#0B3960]",

    outline:
      "inline-flex items-center justify-center rounded-full border-2 border-[#3A6B35] px-8 py-4 font-semibold text-[#3A6B35] transition hover:bg-[#3A6B35] hover:text-white",

    secondary:
      "inline-flex items-center justify-center rounded-full bg-[#3A6B35] px-8 py-4 font-semibold text-white transition hover:opacity-90",
  };

  return (
    <Link
      href={href}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}