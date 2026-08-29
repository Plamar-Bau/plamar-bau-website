"use client";

import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { company } from "@/lib/site";
import { services } from "@/lib/services";

const timeframes = [
  "So schnell wie möglich",
  "Innerhalb von 1 Monat",
  "In 1–3 Monaten",
  "In 3–6 Monaten",
  "Später / noch flexibel",
  "Erst einmal nur informieren",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");

  // Wenn von einer Leistungsseite verlinkt (?leistung=slug), passend vorauswählen.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("leistung");
    if (slug) {
      const match = services.find((s) => s.slug === slug);
      if (match) setService(match.short);
    }
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const leistung = String(data.get("service") || "");
    const zeit = String(data.get("timeframe") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Anfrage über die Website – ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nTelefon: ${phone}\nE-Mail: ${email}\nLeistung: ${leistung}\nGewünschter Zeitrahmen: ${zeit}\n\nNachricht:\n${message}`
    );
    window.location.href = `${company.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
          <Send className="h-8 w-8" />
        </div>
        <h3 className="mt-5 font-heading text-2xl font-bold text-brand-dark">
          Vielen Dank!
        </h3>
        <p className="mt-2 max-w-sm text-slate-600">
          Ihr E-Mail-Programm öffnet sich mit der vorbereiteten Anfrage.
          Alternativ erreichen Sie uns direkt unter{" "}
          <a href={company.phoneHref} className="font-semibold text-brand">
            {company.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Ihr Name" required />
        <Field
          label="Telefon"
          name="phone"
          type="tel"
          placeholder="Ihre Telefonnummer"
          required
        />
      </div>

      <Field
        label="E-Mail"
        name="email"
        type="email"
        placeholder="Ihre E-Mail-Adresse"
        required
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label>Um welche Leistung geht es?</Label>
          <select
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-xl border border-line bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
          >
            <option value="">Bitte wählen …</option>
            <option value="Gesamtprojekt – alles aus einer Hand">
              Gesamtprojekt – alles aus einer Hand
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.short}>
                {s.short}
              </option>
            ))}
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>

        <div>
          <Label>Bis wann benötigen Sie es?</Label>
          <select
            name="timeframe"
            defaultValue=""
            className="w-full rounded-xl border border-line bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
          >
            <option value="">Bitte wählen …</option>
            {timeframes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label>Nachricht</Label>
        <textarea
          name="message"
          rows={4}
          placeholder="Beschreiben Sie kurz Ihr Vorhaben …"
          className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-heading text-base font-bold text-brand-darker shadow-sm transition hover:bg-accent-dark"
      >
        Anfrage senden
        <Send className="h-5 w-5" />
      </button>
      <p className="text-center text-xs text-muted">
        Mit dem Absenden öffnet sich Ihr E-Mail-Programm. Es werden keine Daten
        auf dieser Seite gespeichert.
      </p>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block font-heading text-sm font-semibold text-brand-dark">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
