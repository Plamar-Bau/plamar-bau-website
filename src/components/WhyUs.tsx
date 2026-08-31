import { HardHat, Handshake, Ruler, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const pillars = [
  {
    icon: HardHat,
    title: "Fachgerecht",
    text: "Handwerkliche Qualität nach anerkannten Regeln der Technik.",
  },
  {
    icon: Handshake,
    title: "Alles koordiniert",
    text: "Wir steuern alle Gewerke. Sie haben einen Ansprechpartner.",
  },
  {
    icon: Ruler,
    title: "Klar geplant",
    text: "Transparente Absprachen und nachvollziehbare Schritte.",
  },
  {
    icon: Sparkles,
    title: "Sauber übergeben",
    text: "Ordentliche Baustelle und saubere, fertige Übergabe.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 text-white">
      {/* Hintergrundfoto mit kräftigem Blau-Overlay für Lesbarkeit */}
      <img
        src="/images/svc-geruestbau.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-dark/90" />
      <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Warum PLAMAR
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
            Bauen mit einem verlässlichen Partner
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-brand-darker">
                  <p.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold">
                  {p.title}
                </h3>
                <p className="mt-2 leading-relaxed text-white/75">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
