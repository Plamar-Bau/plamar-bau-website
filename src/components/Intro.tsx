import { ShieldCheck, Clock, Users } from "lucide-react";
import Reveal from "./Reveal";

const badges = [
  { icon: ShieldCheck, title: "Saubere Ausführung", text: "Fachgerecht und mit Sorgfalt bis ins Detail." },
  { icon: Clock, title: "Termintreue", text: "Realistische Zeitpläne, an die wir uns halten." },
  { icon: Users, title: "Ein Ansprechpartner", text: "Wir koordinieren alle Gewerke für Sie." },
];

export default function Intro() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              Bauen & Sanieren in der Region
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
              Ihr Bauunternehmen aus Uhingen
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              PLAMAR Bauunternehmung UG übernimmt Neubau, Sanierung und Ausbau
              in Uhingen und Umgebung. Ob es um ein einzelnes Gewerk geht oder
              um eine komplette Haussanierung: Wir holen die passenden Handwerke
              zusammen und stimmen sie so ab, dass am Ende ein sauberes Ergebnis
              steht.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Vom Gerüst über Rohbau, Elektro, Heizung, Wasser und Sanitär bis
              zu Innenausbau, Fassade, Dach und Badsanierung kommen alle
              Leistungen von einem Betrieb. Dazu gibt es klare Absprachen und
              einen festen Ansprechpartner, von der ersten Besprechung bis zur
              Übergabe.
            </p>
          </Reveal>

          <div className="grid gap-5">
            {badges.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <div className="flex gap-5 rounded-2xl border border-line bg-surface p-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <b.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-brand-dark">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-slate-600">{b.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
