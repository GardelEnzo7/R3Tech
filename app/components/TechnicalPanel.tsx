import type { ReactNode } from "react";

export function TechnicalPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`technical-panel group relative overflow-hidden rounded-[22px] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/55 ${className}`}
    >
      <div className="card-light" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
