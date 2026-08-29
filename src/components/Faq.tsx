"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Welche Leistungen bietet PLAMAR an?",
    a: "Wir übernehmen Gerüstbau, Sanierungen von A bis Z, komplette Haussanierungen, Elektroinstallationen, Heizung/Wasser/Sanitär (HWS), Innenausbau, Fassade, Dach und Badsanierung – auf Wunsch alles koordiniert aus einer Hand.",
  },
  {
    q: "Übernehmen Sie auch komplette Sanierungen?",
    a: "Ja. Wir sanieren einzelne Gewerke ebenso wie ganze Häuser und Wohnungen. Dabei koordinieren wir die beteiligten Handwerke und begleiten Ihr Projekt bis zur fertigen Übergabe.",
  },
  {
    q: "In welchem Gebiet sind Sie tätig?",
    a: "Von unserem Sitz in Uhingen sind wir im Raum Göppingen und der weiteren Region Stuttgart im Einsatz. Fragen Sie einfach an, ob Ihr Ort dabei ist.",
  },
  {
    q: "Wie erhalte ich ein Angebot?",
    a: "Rufen Sie uns an oder nutzen Sie das Kontaktformular. Nach einer kurzen Besprechung Ihres Vorhabens erstellen wir Ihnen ein unverbindliches Angebot.",
  },
  {
    q: "Bekomme ich einen festen Ansprechpartner?",
    a: "Ja. Bei PLAMAR haben Sie über den gesamten Projektverlauf einen festen Ansprechpartner, der die einzelnen Gewerke für Sie abstimmt und koordiniert.",
  },
  {
    q: "Stellen Sie auch nur das Gerüst?",
    a: "Selbstverständlich. Gerüstbau bieten wir sowohl als Einzelleistung als auch im Rahmen einer Sanierung an – normgerecht auf- und abgebaut.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-brand-darker py-20">
      {/* Hintergrundfoto mit dunklem Overlay */}
      <img
        src="/images/hero-home.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-darker/90" />
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Häufige Fragen
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
            Gut zu wissen
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen ? "border-brand/40 bg-surface" : "border-line bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg font-semibold text-brand-dark">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen ? "bg-brand text-white" : "bg-surface-2 text-brand"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-slate-600">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
