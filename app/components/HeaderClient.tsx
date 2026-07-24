"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, navItems, whatsappUrl } from "../lib/site-data";
import { LogoImage } from "./LogoImage";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function HeaderClient() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;

    if (open) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
      menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    } else {
      body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;
    }

    return () => {
      body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-ink/[0.82] shadow-2xl shadow-black/20 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Principal">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="R3 Tech inicio">
            <LogoImage size="sm" className="shrink-0" priority />
            <span>
              <span className="brand-type block text-xl font-bold uppercase tracking-[0.08em] text-white">{brand.name}</span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">{brand.tagline}</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="brand-type rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="brand-type hidden items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-blue-400 md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-700 bg-slate-950 text-white transition hover:border-blue-300/40 md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </nav>
      </header>

      {open ? (
        <aside
          id="mobile-menu"
          ref={menuRef}
          className="fixed inset-0 z-[70] h-[100dvh] w-screen overflow-hidden bg-[#060B17] px-5 pt-6 text-slate-100 md:hidden"
          aria-modal="true"
          role="dialog"
        >
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={closeMenu}
            className="absolute right-4 top-4 z-50 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 transition hover:bg-white/15"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="mt-6 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <LogoImage size="sm" />
              <div>
                <p className="brand-type text-sm font-bold uppercase tracking-[0.18em] text-white">{brand.name}</p>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{brand.tagline}</p>
              </div>
            </div>
          </div>

          <nav aria-label="Menú principal" className="flex-1">
            <ul className="mt-8 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block w-full px-0 py-4 text-left text-2xl font-semibold tracking-tight text-white transition-colors duration-200 hover:text-blue-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="absolute inset-x-5 bottom-0 pb-12" style={{ paddingBottom: "calc(3rem + env(safe-area-inset-bottom))" }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-blue-400"
            >
              Solicitar presupuesto
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </aside>
      ) : null}
    </>
  );
}
