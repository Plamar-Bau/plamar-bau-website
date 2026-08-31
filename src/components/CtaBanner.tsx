import { Phone } from "lucide-react";
import { company } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="bg-accent">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 text-center md:flex-row md:text-left">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-brand-darker/70">
            Jetzt starten
          </p>
          <h2 className="mt-1 font-heading text-2xl font-extrabold uppercase text-brand-darker sm:text-3xl">
            Rufen Sie PLAMAR an: {company.phone}
          </h2>
          <p className="mt-1 text-brand-darker/80">
            Oder schreiben Sie uns. Wir melden uns zeitnah zurück.
          </p>
        </div>
        <a
          href={company.phoneHref}
          className="inline-flex items-center gap-2 rounded-full bg-brand-darker px-8 py-4 font-heading text-base font-bold text-white shadow-lg transition hover:bg-brand-dark"
        >
          <Phone className="h-5 w-5" />
          Jetzt anrufen
        </a>
      </div>
    </section>
  );
}
