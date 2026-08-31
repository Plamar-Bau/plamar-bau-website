import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { company } from "@/lib/site";

const points = [
  "Alle Gewerke aus einer Hand",
  "Ein fester Ansprechpartner",
  "Termintreu & sauber",
];

export default function Hero() {
  return (
    <section
      id="start"
      className="relative overflow-hidden bg-brand-darker text-white"
    >
      {/* Echtes Projektfoto von PLAMAR (fertiggestellte Sanierung) + dunkler
          Verlauf für lesbaren Text. */}
      <img
        src="/images/hero-home.jpg"
        alt="Fertiggestellte Haussanierung von PLAMAR in Uhingen"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/92 to-brand-darker/55" />
      <div className="absolute inset-0 bg-brand-darker/35" />

      <div className="relative mx-auto flex max-w-7xl flex-col px-6 pt-4 pb-8 lg:min-h-[calc(100dvh-6.5rem)] lg:justify-end lg:pt-28 lg:pb-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-xs">
            Gerüstbau · Sanierung · Ausbau
          </span>

          <h1 className="mt-3.5 font-heading text-[1.75rem] font-extrabold uppercase leading-[1.08] sm:mt-5 sm:text-5xl sm:leading-[1.04] lg:text-6xl">
            Ihr Bauunternehmen für{" "}
            <span className="text-accent">Sanierung von A&nbsp;bis&nbsp;Z</span>
          </h1>

          {/* Kurzfassung für Mobil, volle Version ab sm für Desktop/SEO */}
          <p className="mt-3 text-[15px] leading-snug text-white/85 sm:hidden">
            Bauunternehmen aus Uhingen. Alle Gewerke vom Gerüst bis zur
            schlüsselfertigen Übergabe, koordiniert aus einer Hand.
          </p>
          <p className="mt-5 hidden max-w-xl text-[15px] leading-relaxed text-white/85 sm:block sm:max-w-2xl sm:text-lg">
            PLAMAR Bauunternehmung UG aus Uhingen begleitet Ihr Projekt vom
            Gerüst bis zur schlüsselfertigen Übergabe. Dazu gehören Rohbau,
            Sanierung, Elektro, Heizung, Wasser, Sanitär, Innenausbau, Fassade
            und Dach. Sie koordinieren nicht mehrere Firmen, sondern haben alles
            bei uns aus einer Hand.
          </p>

          <ul className="mt-4 grid grid-cols-1 gap-2 sm:mt-6 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-sm text-white/90 sm:text-base">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent sm:h-5 sm:w-5" />
                <span className="font-medium">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <a
              href="#kontakt"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-heading text-base font-bold text-brand-darker shadow-lg transition hover:bg-accent-dark sm:w-auto"
            >
              Kostenloses Angebot
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={company.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-heading text-base font-bold text-white transition hover:bg-white/10 sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
