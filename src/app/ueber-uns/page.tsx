import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Phone,
  HardHat,
  Handshake,
  ShieldCheck,
  Clock,
  Ruler,
  Sparkles,
  Users,
  Building2,
  Hammer,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns | PLAMAR-BAU Bauunternehmung UG in Uhingen",
  description:
    "Lernen Sie PLAMAR-BAU kennen: ein Bauunternehmen aus Uhingen mit Leidenschaft fürs Handwerk. Gerüstbau, Sanierung und Ausbau, zuverlässig, ehrlich und aus einer Hand.",
};

const values = [
  { icon: ShieldCheck, title: "Qualität", text: "Handwerkliche Sorgfalt nach anerkannten Regeln der Technik, bei jedem Handgriff, in jedem Gewerk." },
  { icon: Clock, title: "Termintreue", text: "Wir planen realistisch und halten uns an das, was wir versprechen. Ihr Zeitplan ist unser Zeitplan." },
  { icon: Handshake, title: "Ehrlichkeit", text: "Klare Absprachen, faire Angebote und offene Kommunikation, auch dann, wenn es unbequem ist." },
  { icon: Users, title: "Ein Ansprechpartner", text: "Ein fester Kontakt koordiniert alle Gewerke für Sie, von der ersten Idee bis zur Übergabe." },
  { icon: Ruler, title: "Klare Planung", text: "Durchdachte Abläufe und nachvollziehbare Schritte, damit Ihr Projekt reibungslos läuft." },
  { icon: Sparkles, title: "Saubere Übergabe", text: "Ordentliche Baustelle und ein fertiges Ergebnis, das sich sehen lassen kann." },
];

const promises = [
  "Alle Gewerke koordiniert aus einer Hand",
  "Feste Ansprechperson über das gesamte Projekt",
  "Transparente, unverbindliche Angebote",
  "Sorgfältige Ausführung bis ins Detail",
  "Termintreue und saubere Baustellen",
  "Ehrliche Beratung, ohne leere Versprechen",
];

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-darker text-white">
          <img
            src="/images/ueber-hero.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/92 to-brand-darker/70" />
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
            <nav className="flex items-center gap-1.5 text-sm text-white/70">
              <Link href="/" className="transition hover:text-white">
                Startseite
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-accent">Über uns</span>
            </nav>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Über uns
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-extrabold uppercase leading-[1.05] sm:text-5xl">
              Handwerk aus Leidenschaft, für Ergebnisse, die halten
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              PLAMAR-BAU ist Ihr Bauunternehmen aus Uhingen für Gerüstbau,
              Sanierung und Ausbau. Wir leben dieses Handwerk, mit dem Anspruch,
              unseren Kunden jeden Tag die bestmögliche Arbeit zu liefern.
            </p>
          </div>
        </section>

        {/* Wer wir sind */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Wer wir sind
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
                Ein Partner, der sein Handwerk versteht
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
                <p>
                  Bauen und Sanieren ist für uns weit mehr als ein Beruf, es ist
                  eine Berufung. Was uns antreibt, ist der Anspruch, aus jedem
                  Projekt das Beste herauszuholen und unseren Kunden am Ende ein
                  Ergebnis zu übergeben, auf das sie stolz sein können.
                </p>
                <p>
                  Vom Gerüst über den Rohbau bis zur schlüsselfertigen Übergabe
                  begleiten wir Ihr Vorhaben mit dem Wissen, das nur aus jahrelanger
                  Erfahrung am Bau entsteht. Wir kennen die Handgriffe, die den
                  Unterschied machen, und wir wissen, worauf es ankommt, damit
                  eine Sanierung nicht nur gut aussieht, sondern auch dauerhaft
                  hält.
                </p>
                <p>
                  Als PLAMAR Bauunternehmung UG (haftungsbeschränkt) mit Sitz in
                  Uhingen stehen wir mit unserem Namen für saubere, ehrliche und
                  verlässliche Arbeit. Kein Projekt ist uns zu klein und keine
                  Herausforderung zu groß.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Leidenschaft / Erfahrung band */}
        <section className="relative overflow-hidden bg-brand-dark py-20 text-white">
          <img
            src="/images/ueber-handwerk.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/90" />
          <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-brand-darker">
                  <Hammer className="h-8 w-8" />
                </span>
                <h2 className="mt-6 font-heading text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
                  Ein Leben für das Handwerk
                </h2>
                <div className="mt-6 space-y-4 leading-relaxed text-white/80">
                  <p>
                    Gutes Handwerk lernt man nicht über Nacht. Es wächst über
                    Jahre, auf der Baustelle, mit den eigenen Händen, aus
                    Erfahrung und aus Fehlern, die andere gemacht haben. Genau
                    dieses Wissen bringen wir in jedes Projekt ein.
                  </p>
                  <p>
                    Wir haben uns dem Bauen verschrieben, weil wir sehen wollen,
                    wie aus einer Idee etwas Bleibendes entsteht. Diese
                    Leidenschaft spüren unsere Kunden, in der Sorgfalt, mit der
                    wir arbeiten, und in dem Ergebnis, das am Ende steht.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <h3 className="font-heading text-xl font-bold text-white">
                    Unser Versprechen an Sie
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {promises.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-white/90">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Werte */}
        <section className="relative overflow-hidden bg-brand-darker py-20">
          <img
            src="/images/ueber-werte.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-darker/90" />
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Unsere Werte
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
                Warum Kunden uns vertrauen
              </h2>
              <p className="mt-4 text-white/75">
                Diese Grundsätze bestimmen, wie wir arbeiten, bei jedem Projekt,
                für jeden Kunden.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={(i % 3) * 80}>
                  <div className="h-full rounded-2xl border border-line bg-white p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                      <v.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-bold text-brand-dark">
                      {v.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      {v.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Alles aus einer Hand */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-2 text-brand">
                <HardHat className="h-8 w-8" />
              </span>
              <h2 className="mt-6 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
                Alle Gewerke aus einer Hand
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                Gerüstbau, Sanierung, Elektro, Heizung, Wasser, Sanitär,
                Innenausbau, Fassade, Dach und Badsanierung, bei uns bekommen Sie
                alles aus einer Hand. Statt viele Firmen einzeln zu koordinieren,
                haben Sie einen Partner, der Ihr Projekt vollständig überblickt
                und verantwortet.
              </p>
              <Link
                href="/#leistungen"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-heading font-bold text-white transition hover:bg-brand-dark"
              >
                Unsere Leistungen entdecken
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Firmendaten */}
        <section className="relative overflow-hidden bg-brand-darker py-20">
          <img
            src="/images/ueber-gewerke.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-darker/92" />
          <div className="relative mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-line bg-white">
                <div className="flex items-center gap-4 border-b border-line bg-brand-darker px-8 py-6 text-white">
                  <Building2 className="h-7 w-7 text-accent" />
                  <h2 className="font-heading text-xl font-bold">
                    {company.legalName}
                  </h2>
                </div>
                <div className="grid gap-6 p-8 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Anschrift
                    </p>
                    <p className="mt-1 font-heading font-semibold text-brand-dark">
                      {company.street}
                      <br />
                      {company.city}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Handelsregister
                    </p>
                    <p className="mt-1 font-heading font-semibold text-brand-dark">
                      {company.registerCourt} · {company.registerNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Einsatzgebiet
                    </p>
                    <p className="mt-1 font-heading font-semibold text-brand-dark">
                      {company.region}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Kontakt
                    </p>
                    <p className="mt-1 font-heading font-semibold text-brand-dark">
                      <a href={company.phoneHref} className="hover:text-brand">
                        {company.phone}
                      </a>
                      <br />
                      <a href={company.emailHref} className="hover:text-brand">
                        {company.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
