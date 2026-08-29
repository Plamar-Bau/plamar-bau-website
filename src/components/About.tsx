import { Building2, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { company } from "@/lib/site";

export default function About() {
  return (
    <section id="ueber-uns" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual panel — echtes Baustellenfoto (Sanierung im Einsatz) */}
          <Reveal className="order-last lg:order-first">
            <div className="relative overflow-hidden rounded-3xl border border-line p-10 text-white shadow-[0_24px_60px_rgba(9,51,101,0.20)]">
              <img
                src="/images/about.jpg"
                alt="PLAMAR Baustelle mit Gerüst bei Nacht"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/85 to-brand-darker/60" />
              <div className="relative">
                <Building2 className="h-12 w-12 text-accent" />
                <p className="mt-6 font-heading text-4xl font-extrabold uppercase leading-tight">
                  Ein Partner.
                  <br />
                  Alle Gewerke.
                </p>
                <p className="mt-4 max-w-sm text-white/75">
                  Von der Baustelleneinrichtung bis zur Übergabe koordinieren
                  wir Ihr Projekt vollständig – klar, sauber und verlässlich.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 text-sm text-white/80 sm:grid-cols-2">
                  <div>
                    <span className="block font-semibold text-white">
                      {company.legalName}
                    </span>
                    {company.street}, {company.city}
                  </div>
                  <div>
                    <span className="block font-semibold text-white">
                      Handelsregister
                    </span>
                    {company.registerCourt} · {company.registerNumber}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              Über uns
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
              Spezialisiert auf Sanierung & Komplettausbau
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              PLAMAR Bauunternehmung UG (haftungsbeschränkt) mit Sitz in Uhingen
              steht für handwerkliche Bauleistungen rund um Sanierung, Ausbau
              und Modernisierung. Wir verstehen uns als Generalist, der die
              nötigen Gewerke bündelt und Ihr Vorhaben von Anfang bis Ende
              begleitet.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Statt viele Firmen einzeln zu koordinieren, haben Sie bei uns einen
              festen Ansprechpartner für Gerüstbau, Elektro, HWS-Installationen,
              Innenausbau, Fassade, Dach und Badsanierung – klar abgestimmt und
              zuverlässig ausgeführt.
            </p>
            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-heading font-bold text-white transition hover:bg-brand-dark"
            >
              Projekt besprechen
              <ArrowRight className="h-5 w-5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
