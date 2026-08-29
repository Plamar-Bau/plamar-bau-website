"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, BarChart3, Megaphone } from "lucide-react";

const STORAGE_KEY = "plamar-cookie-consent";

type Prefs = { necessary: true; statistics: boolean; marketing: boolean };

function Toggle({
  checked,
  disabled,
  onChange,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        checked ? "bg-brand" : "bg-slate-300"
      } ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${
          checked ? "left-[22px]" : "left-0.5"
        }`}
      />
    </button>
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
    const open = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const p = JSON.parse(saved) as Prefs;
          setStatistics(!!p.statistics);
          setMarketing(!!p.marketing);
        }
      } catch {
        /* ignore */
      }
      setShowSettings(true);
      setVisible(true);
    };
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, []);

  function save(prefs: Prefs) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prefs, ts: Date.now() }));
    } catch {
      /* ignore */
    }
    setVisible(false);
    setShowSettings(false);
    // Optionale Dienste würden hier nach Zustimmung geladen werden.
  }

  if (!visible) return null;

  const categories = [
    {
      icon: ShieldCheck,
      title: "Notwendig",
      text: "Für den Betrieb der Website erforderlich. Immer aktiv.",
      checked: true,
      disabled: true,
      onChange: undefined,
    },
    {
      icon: BarChart3,
      title: "Statistik",
      text: "Hilft uns zu verstehen, wie die Website genutzt wird.",
      checked: statistics,
      disabled: false,
      onChange: setStatistics,
    },
    {
      icon: Megaphone,
      title: "Marketing",
      text: "Für personalisierte Inhalte und Reichweitenmessung.",
      checked: marketing,
      disabled: false,
      onChange: setMarketing,
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-brand-darker/40 p-4 backdrop-blur-sm sm:p-6">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-line bg-white shadow-[0_30px_80px_rgba(9,51,101,0.35)]">
        {/* Header */}
        <div className="flex items-center gap-4 border-b border-line px-7 pt-7 pb-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
            <Cookie className="h-6 w-6" />
          </span>
          <div>
            <h3 className="font-heading text-lg font-bold text-brand-dark">
              Datenschutz &amp; Cookies
            </h3>
            <p className="mt-0.5 text-sm text-muted">
              Sie entscheiden, was verwendet werden darf.
            </p>
          </div>
        </div>

        <div className="px-7 py-6">
          {!showSettings ? (
            <p className="text-sm leading-relaxed text-slate-600">
              Wir verwenden Cookies, damit diese Website zuverlässig
              funktioniert. Optionale Cookies – etwa für Statistik oder
              Marketing – setzen wir nur mit Ihrer Zustimmung. Weitere
              Informationen finden Sie in unserer{" "}
              <Link
                href="/datenschutz"
                className="font-semibold text-brand underline"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          ) : (
            <div className="space-y-3">
              {categories.map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-heading text-sm font-bold text-brand-dark">
                        {c.title}
                      </h4>
                      <Toggle
                        checked={c.checked}
                        disabled={c.disabled}
                        onChange={c.onChange}
                      />
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {c.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
            {!showSettings ? (
              <>
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className="rounded-full border border-line px-5 py-2.5 font-heading text-sm font-bold text-slate-700 transition hover:bg-surface"
                >
                  Einstellungen
                </button>
                <button
                  type="button"
                  onClick={() =>
                    save({ necessary: true, statistics: false, marketing: false })
                  }
                  className="rounded-full border border-line px-5 py-2.5 font-heading text-sm font-bold text-slate-700 transition hover:bg-surface"
                >
                  Nur notwendige
                </button>
                <button
                  type="button"
                  onClick={() =>
                    save({ necessary: true, statistics: true, marketing: true })
                  }
                  className="rounded-full bg-brand px-6 py-2.5 font-heading text-sm font-bold text-white transition hover:bg-brand-dark"
                >
                  Alle akzeptieren
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() =>
                    save({ necessary: true, statistics: false, marketing: false })
                  }
                  className="rounded-full border border-line px-5 py-2.5 font-heading text-sm font-bold text-slate-700 transition hover:bg-surface"
                >
                  Nur notwendige
                </button>
                <button
                  type="button"
                  onClick={() => save({ necessary: true, statistics, marketing })}
                  className="rounded-full border border-brand px-5 py-2.5 font-heading text-sm font-bold text-brand transition hover:bg-surface"
                >
                  Auswahl speichern
                </button>
                <button
                  type="button"
                  onClick={() =>
                    save({ necessary: true, statistics: true, marketing: true })
                  }
                  className="rounded-full bg-brand px-6 py-2.5 font-heading text-sm font-bold text-white transition hover:bg-brand-dark"
                >
                  Alle akzeptieren
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
