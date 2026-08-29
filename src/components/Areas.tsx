import { MapPin } from "lucide-react";
import Reveal from "./Reveal";

const areas = [
  "Uhingen",
  "Göppingen",
  "Ebersbach an der Fils",
  "Salach",
  "Eislingen/Fils",
  "Süßen",
  "Faurndau",
  "Region Stuttgart",
];

export default function Areas() {
  return (
    <section
      id="einsatzgebiet"
      className="relative overflow-hidden bg-brand-darker py-20 text-white"
    >
      {/* Hintergrundfoto mit dunklem Overlay */}
      <img
        src="/images/svc-komplettsanierung.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-darker/88" />
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Einsatzgebiet
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
            Für Sie im Raum Göppingen
          </h2>
          <p className="mt-4 text-white/75">
            Von unserem Sitz in Uhingen sind wir für Sie in der Region
            unterwegs. Ihr Ort ist nicht dabei? Sprechen Sie uns einfach an.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {areas.map((a, i) => (
            <Reveal key={a} delay={(i % 4) * 70}>
              <div className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm transition hover:border-accent/50 hover:bg-white/15">
                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                <span className="font-heading font-semibold text-white">
                  {a}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
