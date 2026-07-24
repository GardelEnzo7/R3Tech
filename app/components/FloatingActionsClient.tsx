"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { whatsappUrl } from "../lib/site-data";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingActionsClient() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let current = false;

    function onScroll() {
      const next = window.scrollY > 600;
      if (next !== current) {
        current = next;
        setShowTop(next);
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-blue-500 text-white shadow-glow transition hover:-translate-y-1 hover:bg-blue-400"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>

      <a
        href="#inicio"
        aria-label="Volver arriba"
        className={`fixed bottom-24 right-6 z-50 grid h-11 w-11 place-items-center rounded-full border border-slate-700 bg-slate-950/80 text-white transition hover:border-blue-300/50 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </a>
    </>
  );
}
