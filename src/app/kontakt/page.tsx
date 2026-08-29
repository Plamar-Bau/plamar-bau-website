import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Building2,
  MessageSquare,
  CalendarCheck,
  FileText,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt | PLAMAR Bauunternehmung UG in Uhingen",
  description:
    "Kontaktieren Sie PLAMAR Bauunternehmung UG in Uhingen – Telefon, E-Mail und Anfrageformular für Gerüstbau, Sanierung, Fassade, Dach und mehr. Kostenloses, unverbindliches Angebot.",
};

const info = [
  { icon: Phone, label: "Telefon", value: company.phone, href: company.phoneHref },
  { icon: Mail, label: "E-Mail", value: company.email, href: company.emailHref },
  {
    icon: MapPin,
    label: "Adresse",
    value: `${company.street}, ${company.city}`,
    href: undefined,
  },
  { icon: Clock, label: "Erreichbarkeit", value: "Mo–Fr nach Vereinbarung", href: undefined },
];

const steps = [
  { icon: MessageSquare, title: "Ihre Anfrage", text: "Sie schildern uns Ihr Vorhaben – telefonisch oder über das Formular." },
  { icon: Phone, title: "Rückmeldung", text: "Wir melden uns zeitnah und klären die ersten Fragen mit Ihnen." },
  { icon: CalendarCheck, title: "Vor-Ort-Termin", text: "Bei Bedarf sehen wir uns die Baustelle gemeinsam an." },
  { icon: FileText, title: "Angebot", text: "Sie erhalten ein klares, unverbindliches Angebot mit Umfang und Ablauf." },
];

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-darker text-white">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
            <nav className="flex items-center gap-1.5 text-sm text-white/70">
              <Link href="/" className="transition hover:text-white">
                Startseite
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-accent">Kontakt</span>
            </nav>
            <h1 className="mt-6 font-heading text-4xl font-extrabold uppercase leading-[1.05] sm:text-5xl">
              Kontakt
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Sie haben ein Bauvorhaben oder eine Sanierung geplant? Wir freuen
              uns auf Ihre Anfrage und beraten Sie gern – ehrlich und
              unverbindlich.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-heading text-base font-bold text-brand-darker shadow-lg transition hover:bg-accent-dark"
              >
                <Phone className="h-5 w-5" />
                {company.phone}
              </a>
              <a
                href={company.emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-heading text-base font-bold text-white transition hover:bg-white/10"
              >
                <Mail className="h-5 w-5" />
                E-Mail schreiben
              </a>
            </div>
          </div>
        </section>

        {/* Info + form */}
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            {/* Info */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                So erreichen Sie uns
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark">
                Ihr Ansprechpartner in Uhingen
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {info.map((item) => {
                  const Inner = (
                    <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-surface p-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                          {item.label}
                        </p>
                        <p className="mt-0.5 font-heading font-semibold text-brand-dark">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} className="block">
                      {Inner}
                    </a>
                  ) : (
                    <div key={item.label}>{Inner}</div>
                  );
                })}
              </div>

              {/* Company card */}
              <div className="mt-6 rounded-2xl border border-line bg-brand-darker p-7 text-white">
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-accent" />
                  <span className="font-heading text-lg font-bold">
                    {company.legalName}
                  </span>
                </div>
                <div className="mt-4 grid gap-1 text-sm text-white/80">
                  <span>
                    {company.street}, {company.city}
                  </span>
                  <span>{company.registerCourt} · {company.registerNumber}</span>
                  <span>Einsatzgebiet: {company.region}</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl border border-line bg-surface p-7 shadow-[0_18px_50px_rgba(9,51,101,0.08)] sm:p-9">
              <h2 className="font-heading text-2xl font-bold text-brand-dark">
                Anfrage senden
              </h2>
              <p className="mt-1.5 text-slate-600">
                Wählen Sie die passende Leistung und Ihren Wunschzeitraum – wir
                melden uns zeitnah.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* What happens next */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                So geht es weiter
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
                Von der Anfrage zum Angebot
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="relative h-full rounded-2xl border border-line bg-white p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <span className="mt-4 block font-heading text-sm font-bold text-accent-dark">
                      Schritt {i + 1}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-bold text-brand-dark">
                      {s.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
