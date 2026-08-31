import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Phone,
  ChevronRight,
  AlertTriangle,
  ThumbsUp,
  Camera,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import ProjectGallery from "@/components/ProjectGallery";
import { services, getService } from "@/lib/services";
import { company } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Leistung nicht gefunden | PLAMAR" };
  return {
    title: `${service.title} | PLAMAR Bauunternehmung UG`,
    description: `${service.tagline}. ${service.intro[0]}`,
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug);

  // Structured Data (JSON-LD) für klassische Suche und KI-Suche
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.tagline,
    url: `${company.url}/leistungen/${service.slug}`,
    provider: {
      "@type": "GeneralContractor",
      "@id": `${company.url}/#organization`,
      name: "PLAMAR-BAU",
    },
    areaServed: company.areasServed.map((name) => ({ "@type": "City", name })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: company.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Leistungen",
        item: `${company.url}/#leistungen`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${company.url}/leistungen/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-darker text-white">
          {service.image ? (
            <>
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/92 to-brand-darker/55" />
            </>
          ) : (
            <>
              <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
            </>
          )}

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
            <nav className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
              <Link href="/" className="transition hover:text-white">
                Startseite
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/#leistungen" className="transition hover:text-white">
                Leistungen
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-accent">{service.title}</span>
            </nav>

            <div className="mt-8 flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-brand-darker">
                <Icon className="h-9 w-9" />
              </span>
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Leistung
              </span>
            </div>

            <h1 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold uppercase leading-[1.05] sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              {service.tagline}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/kontakt?leistung=${service.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-heading text-base font-bold text-brand-darker shadow-lg transition hover:bg-accent-dark"
              >
                Kostenloses Angebot
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-heading text-base font-bold text-white transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                {company.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Intro + includes + photo */}
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-6 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Über diese Leistung
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark">
                Was wir für Sie tun
              </h2>
              {service.intro.map((p) => (
                <p key={p} className="mt-5 leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}

              <div className="mt-8 rounded-3xl border border-line bg-surface p-8">
                <h3 className="font-heading text-lg font-bold text-brand-dark">
                  Das übernehmen wir
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100} className="order-first lg:order-last">
              <div className="h-64 overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(9,51,101,0.18)] sm:h-80 lg:h-full lg:min-h-[460px]">
                <img
                  src={service.image ?? "/images/hero.jpg"}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Details / long-form (SEO) */}
        <section className="bg-white pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <h2 className="font-heading text-2xl font-extrabold uppercase leading-tight text-brand-dark sm:text-3xl">
                Alles Wichtige zu {service.title}
              </h2>
              <div className="mt-6 space-y-5">
                {service.details.map((p) => (
                  <p key={p} className="leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Benefits */}
        <section className="relative overflow-hidden bg-brand-darker py-20">
          <img
            src={`/images/leistungen/${service.slug}-1.jpg`}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-darker/90" />
          <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Ihre Vorteile
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
                Darum lohnt es sich
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-line bg-white p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                      <ThumbsUp className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-bold text-brand-dark">
                      {b.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      {b.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Risks of waiting */}
        <section className="relative overflow-hidden bg-brand-dark py-20">
          <img
            src={`/images/leistungen/${service.slug}-2.jpg`}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/90" />
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Wenn Sie warten
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
                Was passiert, wenn man es aufschiebt
              </h2>
              <p className="mt-4 text-white/75">
                Wird das Thema hinausgezögert, wächst der Aufwand meist mit,
                fachlich wie finanziell. Diese Punkte sollten Sie kennen:
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {service.risks.map((r, i) => (
                <Reveal key={r.title} delay={i * 90}>
                  <div className="flex h-full gap-4 rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand-darker">
                      <AlertTriangle className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white">
                        {r.title}
                      </h3>
                      <p className="mt-1.5 leading-relaxed text-white/80">
                        {r.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href={`/kontakt?leistung=${service.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-heading font-bold text-brand-darker shadow-lg transition hover:bg-accent-dark"
              >
                Jetzt frühzeitig handeln
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Ablauf / process */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Ablauf
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
                So gehen wir vor
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {service.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 90}>
                  <div className="relative h-full rounded-2xl border border-line bg-white p-7">
                    <span className="font-heading text-4xl font-extrabold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-heading text-lg font-bold text-brand-dark">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Photo slots */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                <Camera className="h-4 w-4" />
                Referenzen
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
                Einblicke in diese Leistung
              </h2>
              <p className="mt-4 text-slate-600">
                Beispielhafte Eindrücke rund um diese Leistung.
              </p>
            </Reveal>

            <div className="mt-14">
              <ProjectGallery slug={service.slug} captions={service.gallery} />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Häufige Fragen
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
                {service.title}: gut zu wissen
              </h2>
            </Reveal>
            <div className="mt-12">
              <Accordion items={service.faqs} />
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <h2 className="font-heading text-2xl font-extrabold uppercase text-brand-dark">
                Weitere Leistungen
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((s) => {
                const OtherIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    href={`/leistungen/${s.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4 transition hover:border-brand/40 hover:bg-white hover:shadow-sm"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-brand transition group-hover:bg-brand group-hover:text-white">
                      <OtherIcon className="h-5 w-5" />
                    </span>
                    <span className="font-heading text-sm font-semibold text-brand-dark">
                      {s.short}
                    </span>
                    <ArrowRight className="ml-auto h-4 w-4 text-brand transition group-hover:translate-x-1" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
