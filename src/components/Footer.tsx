import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { company, nav } from "@/lib/site";
import CookieSettingsButton from "./CookieSettingsButton";

const services = [
  "Gerüstbau",
  "Komplettsanierung",
  "Elektroinstallation",
  "Heizung · Wasser · Sanitär",
  "Innenausbau",
  "Fassade · Dach · Bad",
];

export default function Footer() {
  return (
    <footer className="bg-brand-darker text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-heading text-2xl font-extrabold tracking-tight">
              PLA<span className="text-accent">MAR</span>-BAU
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {company.legalName} – Ihr Partner für Gerüstbau, Sanierung und
              Komplettausbau in Uhingen und der Region.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Leistungen
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-sm text-white/75">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {company.street}
                  <br />
                  {company.city}
                </span>
              </li>
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2.5 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="flex items-center gap-2.5 transition hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/55">
              © {new Date().getFullYear()} {company.legalName} · {company.registerCourt} ·{" "}
              {company.registerNumber}
            </p>
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
              <Link href="/impressum" className="text-white/70 transition hover:text-white">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-white/70 transition hover:text-white">
                Datenschutz
              </Link>
              <CookieSettingsButton className="text-white/70 transition hover:text-white" />
            </nav>
          </div>

          <p className="mt-6 text-center text-xs text-white/45 sm:text-left">
            Website erstellt von{" "}
            <a
              href="https://www.planintsov.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/70 transition hover:text-white"
            >
              planintsov.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
