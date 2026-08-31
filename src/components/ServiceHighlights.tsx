import Link from "next/link";
import { Construction, Home, Wrench, Check, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const cards = [
  {
    icon: Construction,
    slug: "geruestbau",
    image: "/images/svc-geruestbau.jpg",
    kicker: "Sicheres Arbeiten",
    title: "Gerüstbau",
    features: [
      "Fassaden- & Arbeitsgerüste",
      "Auf- und Abbau nach Norm",
      "Kurzfristige Bereitstellung",
      "Für Neubau & Sanierung",
    ],
    text: "Standsichere Gerüste für Fassade, Dach und Sanierung. Fachgerecht aufgebaut und vor der Nutzung geprüft.",
  },
  {
    icon: Home,
    slug: "komplettsanierung",
    image: "/images/svc-komplettsanierung.jpg",
    kicker: "Von A bis Z",
    title: "Komplettsanierung",
    features: [
      "Ganze Häuser & Wohnungen",
      "Alle Gewerke koordiniert",
      "Ein Ansprechpartner",
      "Schlüsselfertige Übergabe",
    ],
    text: "Komplette Haus- und Wohnungssanierung. Planung, Ausführung und Koordination laufen bei uns zusammen.",
    featured: true,
  },
  {
    icon: Wrench,
    slug: "hws-installationen",
    image: "/images/svc-hws.jpg",
    kicker: "Heizung · Wasser · Sanitär",
    title: "HWS-Installationen",
    features: [
      "Heizungs­installation",
      "Wasser- & Sanitärtechnik",
      "Modernisierung",
      "Bad komplett",
    ],
    text: "Heizung, Wasser und Sanitär: Installation und Modernisierung im ganzen Haus, von der neuen Leitung bis zum fertigen Bad.",
  },
];

export default function ServiceHighlights() {
  return (
    <section className="relative z-10 mt-6 pb-8 sm:-mt-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <Link
                href={`/leistungen/${c.slug}`}
                className="group relative flex h-full min-h-[440px] flex-col justify-end overflow-hidden rounded-2xl p-7 shadow-[0_18px_50px_rgba(9,51,101,0.16)] transition hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(9,51,101,0.28)]"
              >
                {/* Background photo */}
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                {/* Brand overlay for readability */}
                <div
                  className={`absolute inset-0 ${
                    c.featured
                      ? "bg-gradient-to-t from-brand via-brand/85 to-brand/45"
                      : "bg-gradient-to-t from-brand-darker via-brand-darker/85 to-brand-darker/45"
                  }`}
                />

                {/* Content */}
                <div className="relative flex flex-col">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 text-accent backdrop-blur-sm">
                    <c.icon className="h-7 w-7" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {c.kicker}
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-white">
                    {c.title}
                  </h3>

                  <ul className="mt-5 space-y-2.5">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-white/90">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-sm leading-relaxed text-white/75">
                    {c.text}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-accent">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
