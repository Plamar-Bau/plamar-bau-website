import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="leistungen" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
            Unsere Leistungen
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
            Alle Gewerke aus einer Hand
          </h2>
          <p className="mt-4 text-slate-600">
            Von der Baustelleneinrichtung bis zur schlüsselfertigen Übergabe –
            das leistet PLAMAR für Ihr Projekt. Klicken Sie für Details zum
            jeweiligen Ablauf.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/leistungen/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_50px_rgba(9,51,101,0.12)]"
                >
                  {/* Image header */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/70 via-brand-darker/10 to-transparent" />
                    <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-brand shadow-sm backdrop-blur-sm">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-bold text-brand-dark">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 leading-relaxed text-slate-600">
                      {s.tagline}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-brand">
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
