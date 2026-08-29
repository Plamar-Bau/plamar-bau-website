import Reveal from "./Reveal";

const projects = [
  {
    src: "/images/ref-work-1.jpg",
    label: "Rohbau",
    caption: "Präzise Arbeit auf der Baustelle",
  },
  {
    src: "/images/ref-work-2.jpg",
    label: "Sanierung",
    caption: "Modernisierung im Einsatz",
  },
  {
    src: "/images/ref-work-3.jpg",
    label: "Bad & Fliesen",
    caption: "Fliesenarbeiten im Detail",
  },
  {
    src: "/images/ref-work-4.jpg",
    label: "Innenausbau & Dämmung",
    caption: "Dämmung und Fensteranschluss",
  },
  {
    src: "/images/ref-work-5.jpg",
    label: "Fassade",
    caption: "Saubere Fassadenflächen",
  },
  {
    src: "/images/ref-work-6.jpg",
    label: "Fassade im Bestand",
    caption: "Arbeiten an bestehenden Gebäuden",
  },
];

export default function Referenzen() {
  return (
    <section id="referenzen" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
            Referenzen
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
            Einblicke in unsere Arbeit
          </h2>
          <p className="mt-4 text-slate-600">
            Vom Rohbau über Dämmung und Fassade bis zu Fliesen und Innenausbau –
            Handwerk mit Sorgfalt in jedem Detail.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.src} delay={(i % 3) * 90}>
              <figure className="group relative overflow-hidden rounded-2xl shadow-[0_16px_44px_rgba(9,51,101,0.12)]">
                <img
                  src={p.src}
                  alt={`${p.label} – ${p.caption}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/85 via-brand-darker/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-block rounded-full bg-accent px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-brand-darker">
                    {p.label}
                  </span>
                  <p className="mt-2 font-medium text-white">{p.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
