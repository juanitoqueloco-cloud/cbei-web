import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full bg-[#EAF4E5] px-4 py-2 text-sm font-semibold text-[#3A6B35] ${className}`}
    >
      {children}
    </span>
  );
}