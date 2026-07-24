import Image from "next/image";

type LogoSize = "sm" | "md" | "lg";

const logoSizes: Record<LogoSize, string> = {
  sm: "h-10 w-20",
  md: "h-16 w-32",
  lg: "h-28 w-60",
};

const imageSizes: Record<LogoSize, string> = {
  sm: "80px",
  md: "128px",
  lg: "240px",
};

export function LogoImage({
  size = "md",
  className = "",
  priority = false,
}: {
  size?: LogoSize;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative ${logoSizes[size]} ${className}`}>
      <Image
        src="/r3Tech-logo-transparent.webp"
        alt="R3 Tech"
        fill
        sizes={imageSizes[size]}
        className="object-contain drop-shadow-[0_0_22px_rgba(59,130,246,0.34)]"
        priority={priority}
      />
    </div>
  );
}
