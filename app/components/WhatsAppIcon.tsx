export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMask: "url('/icono-whatsapp.svg') center / contain no-repeat",
        mask: "url('/icono-whatsapp.svg') center / contain no-repeat",
      }}
    />
  );
}
