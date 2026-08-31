import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Phone,
  BadgeCheck,
  ClipboardCheck,
  Eye,
  ThumbsUp,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Hammer,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Referenzen from "@/components/Referenzen";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Referenzen | PLAMAR-BAU: Einblicke in unsere Arbeit",
  description:
    "Referenzen von PLAMAR-BAU aus Uhingen: Einblicke in unsere Arbeit rund um Gerüstbau, Sanierung, Fassade, Dach und Innenausbau. Handwerk mit Sorgfalt, für Ergebnisse, die überzeugen.",
  alternates: { canonical: "/referenzen" },
};

const qualities = [
  { icon: BadgeCheck, title: "Handwerkliche Qualität", text: "Wir arbeiten nach anerkannten Regeln der Technik, sauber, präzise und mit Blick fürs Detail." },
  { icon: Eye, title: "Sichtbare Sorgfalt", text: "Ob großes Projekt oder kleiner Auftrag: Jede Arbeit führen wir mit der gleichen Gründlichkeit aus." },
  { icon: ShieldCheck, title: "Dauerhafte Ergebnisse", text: "Wir bauen so, dass es hält. Unser Anspruch endet nicht bei der Optik, sondern bei der Substanz." },
  { icon: Sparkles, title: "Saubere Übergabe", text: "Ordentliche Baustellen und ein fertiges Ergebnis, das sich sehen lassen kann." },
];

const steps = [
  { icon: MessageSquare, title: "Zuhören & Beraten", text: "Wir verstehen erst Ihr Anliegen, bevor wir loslegen, ehrlich und ohne leere Versprechen." },
  { icon: ClipboardCheck, title: "Planen & Abstimmen", text: "Klarer Umfang, realistischer Zeitplan und ein nachvollziehbares Angebot." },
  { icon: Hammer, title: "Sauber ausführen", text: "Koordiniert, termintreu und mit handwerklicher Sorgfalt bis ins Detail." },
  { icon: ThumbsUp, title: "Zufrieden übergeben", text: "Wir übergeben erst, wenn das Ergebnis stimmt, und Sie zufrieden sind." },
];

const trust = [
  "Ein fester Ansprechpartner über das gesamte Projekt",
  "Alle Gewerke koordiniert aus einer Hand",
  "Transparente, unverbindliche Angebote",
  "Termintreue und saubere Baustellen",
  "Ehrliche Beratung, auch wenn es unbequem ist",
  "Sorgfalt bei jedem Handgriff, in jedem Gewerk",
];

export default function ReferenzenPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-darker text-white">
          <img
            src="/images/ref-hero.jpg"
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
              <span className="text-accent">Referenzen</span>
            </nav>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Referenzen
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-extrabold uppercase leading-[1.05] sm:text-5xl">
              Unsere Arbeit spricht für sich
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Vertrauen entsteht durch Ergebnisse. Auf dieser Seite geben wir
              Ihnen Einblicke in unser Handwerk, und zeigen, mit welchem Anspruch
              wir für unsere Kunden arbeiten.
            </p>
          </div>
        </section>

        {/* Intro / trust text */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Warum Referenzen zählen
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
                Qualität, die man sehen und spüren kann
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
                <p>
                  Am Bau zählt nicht, was man verspricht, sondern was am Ende
                  steht. Deshalb legen wir Wert darauf, dass jedes Projekt für
                  sich spricht, vom ersten Gerüst bis zur schlüsselfertigen
                  Übergabe.
                </p>
                <p>
                  Als PLAMAR-BAU aus Uhingen begleiten wir Bauvorhaben jeder
                  Größe. Ob Sanierung, Fassade, Dach oder kompletter Innenausbau:
                  Wir bringen die nötigen Gewerke zusammen und führen sie mit der
                  Sorgfalt aus, die gute Handwerksarbeit ausmacht.
                </p>
                <p>
                  Die folgenden Einblicke zeigen, worauf es uns ankommt,
                  saubere Ausführung, ehrliche Arbeit und ein Ergebnis, auf das
                  unsere Kunden bauen können.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Gallery (reused component) */}
        <Referenzen />

        {/* Was uns auszeichnet */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Was uns auszeichnet
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
                Unser Anspruch an jedes Projekt
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {qualities.map((q, i) => (
                <Reveal key={q.title} delay={(i % 4) * 80}>
                  <div className="h-full rounded-2xl border border-line bg-white p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                      <q.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-bold text-brand-dark">
                      {q.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      {q.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* So entsteht ein gutes Ergebnis */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Unser Weg
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
                So entsteht ein gutes Ergebnis
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="relative h-full rounded-2xl border border-line bg-surface p-7">
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

        {/* Warum Kunden auf uns setzen */}
        <section className="relative overflow-hidden bg-brand-dark py-20 text-white">
          <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Vertrauen
                </p>
                <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
                  Warum Kunden auf uns setzen
                </h2>
                <p className="mt-6 leading-relaxed text-white/80">
                  Gutes Handwerk allein reicht nicht, es braucht auch
                  Verlässlichkeit und Ehrlichkeit. Genau dafür stehen wir. Diese
                  Punkte machen die Zusammenarbeit mit uns aus:
                </p>
              </Reveal>
              <Reveal delay={100}>
                <ul className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  {trust.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-white/90">{t}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-heading font-bold text-brand-darker shadow-lg transition hover:bg-accent-dark"
              >
                Ihr Projekt mit uns starten
                <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="mt-4 text-sm text-white/60">
                Oder rufen Sie uns direkt an:{" "}
                <a href={company.phoneHref} className="font-semibold text-accent">
                  {company.phone}
                </a>
              </p>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
