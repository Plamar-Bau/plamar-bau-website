"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Phone, Menu, X, ChevronDown } from "lucide-react";
import { company, nav } from "@/lib/site";
import { services } from "@/lib/services";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-brand-dark text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2.5 px-4 py-2 text-xs sm:justify-end sm:gap-6 sm:px-6 sm:text-sm">
          <a
            href={company.emailHref}
            className="flex items-center gap-1.5 transition hover:text-accent sm:gap-2"
          >
            <Mail className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            {company.email}
          </a>
          <span className="h-3.5 w-px bg-white/25 sm:h-4" />
          <a
            href={company.phoneHref}
            className="flex items-center gap-1.5 font-semibold transition hover:text-accent sm:gap-2"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            {company.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-line bg-white/95 shadow-[0_6px_24px_rgba(9,51,101,0.10)] backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-heading text-2xl font-extrabold tracking-tight text-brand-dark">
              PLA<span className="text-brand">MAR</span>-BAU
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) =>
              "dropdown" in item && item.dropdown ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 py-5 font-heading text-[15px] font-medium text-slate-700 transition hover:text-brand"
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                  </Link>
                  {/* Dropdown */}
                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-[0_18px_50px_rgba(9,51,101,0.16)]">
                      {services.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.slug}
                            href={`/leistungen/${s.slug}`}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-surface"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-brand">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="font-heading text-sm font-medium text-slate-700">
                              {s.short}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-heading text-[15px] font-medium text-slate-700 transition hover:text-brand"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={company.phoneHref}
              className="hidden rounded-full bg-accent px-5 py-2.5 font-heading text-sm font-bold text-brand-darker shadow-sm transition hover:bg-accent-dark sm:inline-block"
            >
              {company.phone}
            </a>
            <button
              type="button"
              aria-label="Menü öffnen"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-dark lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-line bg-white lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-6 py-2">
              {nav.map((item) =>
                "dropdown" in item && item.dropdown ? (
                  <div key={item.label} className="border-b border-line/70">
                    <button
                      type="button"
                      onClick={() => setMobileServices((v) => !v)}
                      className="flex w-full items-center justify-between py-3 font-heading font-medium text-slate-700"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition ${
                          mobileServices ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileServices && (
                      <div className="pb-2">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/leistungen/${s.slug}`}
                            onClick={() => setOpen(false)}
                            className="block py-2 pl-3 text-[15px] text-slate-600"
                          >
                            {s.short}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-line/70 py-3 font-heading font-medium text-slate-700"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <a
                href={company.phoneHref}
                className="mt-3 mb-3 rounded-full bg-brand px-5 py-3 text-center font-heading font-bold text-white"
              >
                Jetzt anrufen · {company.phone}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
