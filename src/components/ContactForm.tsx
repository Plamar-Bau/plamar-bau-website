"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Paperclip, X, Loader2, AlertCircle } from "lucide-react";
import { company } from "@/lib/site";
import { services } from "@/lib/services";

const timeframes = [
  "So schnell wie möglich",
  "Innerhalb von 1 Monat",
  "In 1 bis 3 Monaten",
  "In 3 bis 6 Monaten",
  "Später / noch flexibel",
  "Erst einmal nur informieren",
];

const MAX_FILES = 6;
const MAX_TOTAL_BYTES = 4 * 1024 * 1024; // ~4 MB gesamt
const ACCEPT =
  "image/jpeg,image/png,image/webp,image/heic,image/heif,image/gif,application/pdf,.doc,.docx";

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending">("idle");
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Wenn von einer Leistungsseite verlinkt (?leistung=slug), passend vorauswählen.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("leistung");
    if (slug) {
      const match = services.find((s) => s.slug === slug);
      if (match) setService(match.short);
    }
  }, []);

  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);

  function addFiles(list: FileList | null) {
    if (!list) return;
    setError(null);
    const incoming = Array.from(list);
    const combined = [...files];
    for (const f of incoming) {
      // Duplikate (gleicher Name + Größe) überspringen
      if (combined.some((c) => c.name === f.name && c.size === f.size)) continue;
      combined.push(f);
    }
    if (combined.length > MAX_FILES) {
      setError(`Bitte maximal ${MAX_FILES} Dateien anhängen.`);
      return;
    }
    const sum = combined.reduce((s, f) => s + f.size, 0);
    if (sum > MAX_TOTAL_BYTES) {
      setError("Die Anhänge sind zu groß (max. 4 MB gesamt).");
      return;
    }
    setFiles(combined);
  }

  function removeFile(index: number) {
    setError(null);
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setError(null);

    if (totalBytes > MAX_TOTAL_BYTES) {
      setError("Die Anhänge sind zu groß (max. 4 MB gesamt).");
      return;
    }

    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    // Datei-Feld neu setzen (kontrollierter State)
    data.delete("attachments");
    for (const f of files) data.append("attachments", f);

    setStatus("sending");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        body: data,
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setError(
          json.error ||
            "Der Versand ist fehlgeschlagen. Bitte rufen Sie uns an."
        );
        setStatus("idle");
        return;
      }
      setSent(true);
    } catch {
      setError(
        "Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung oder rufen Sie uns an."
      );
      setStatus("idle");
    }
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
          Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns zeitnah bei
          Ihnen. Sie erreichen uns auch direkt unter{" "}
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
            <option value="Gesamtprojekt (alles aus einer Hand)">
              Gesamtprojekt (alles aus einer Hand)
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

      {/* Datei-Anhänge */}
      <div>
        <Label>Fotos oder Dateien anhängen (optional)</Label>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={ACCEPT}
          onChange={(e) => {
            addFiles(e.target.files);
            e.target.value = ""; // erlaubt erneutes Auswählen derselben Datei
          }}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-brand/40 bg-white px-4 py-4 font-heading text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand/5"
        >
          <Paperclip className="h-5 w-5" />
          Fotos / Dateien auswählen
        </button>
        <p className="mt-1.5 text-xs text-muted">
          Bilder (JPG, PNG …), PDF oder Word. Max. {MAX_FILES} Dateien, 4 MB
          gesamt.
        </p>

        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((f, i) => (
              <li
                key={`${f.name}-${i}`}
                className="flex items-center justify-between gap-3 rounded-lg border border-line bg-white px-3 py-2 text-sm"
              >
                <span className="flex min-w-0 items-center gap-2">
                  <Paperclip className="h-4 w-4 shrink-0 text-brand" />
                  <span className="truncate text-slate-700">{f.name}</span>
                  <span className="shrink-0 text-xs text-muted">
                    {formatSize(f.size)}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  aria-label={`${f.name} entfernen`}
                  className="shrink-0 rounded-full p-1 text-muted transition hover:bg-slate-100 hover:text-brand-dark"
                >
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
            <li className="px-1 text-right text-xs text-muted">
              Gesamt: {formatSize(totalBytes)} / 4 MB
            </li>
          </ul>
        )}
      </div>

      {/* Honeypot gegen Spam – für Menschen unsichtbar */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-heading text-base font-bold text-brand-darker shadow-sm transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            Wird gesendet …
            <Loader2 className="h-5 w-5 animate-spin" />
          </>
        ) : (
          <>
            Anfrage senden
            <Send className="h-5 w-5" />
          </>
        )}
      </button>
      <p className="text-center text-xs text-muted">
        Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
        verwendet. Weitere Infos in unserer{" "}
        <a href="/datenschutz" className="underline hover:text-brand">
          Datenschutzerklärung
        </a>
        .
      </p>
    </form>
  );
}

function Label({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="mb-1.5 block font-heading text-sm font-semibold text-brand-dark">
      {children}
      {required && (
        <span className="ml-0.5 text-red-500" aria-hidden="true">
          *
        </span>
      )}
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
      <Label required={required}>{label}</Label>
      <input
        type={type}
        name={name}
        required={required}
        aria-required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
