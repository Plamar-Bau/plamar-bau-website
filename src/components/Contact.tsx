import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";
import { company } from "@/lib/site";

const infoItems = [
  { icon: Phone, label: "Telefon", value: company.phone, href: company.phoneHref },
  { icon: Mail, label: "E-Mail", value: company.email, href: company.emailHref },
  { icon: MapPin, label: "Adresse", value: `${company.street}, ${company.city}`, href: undefined },
  { icon: Clock, label: "Erreichbarkeit", value: "Mo. bis Fr. nach Vereinbarung", href: undefined },
];

export default function Contact() {
  return (
    <section id="kontakt" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              Kontakt
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-dark sm:text-4xl">
              Kostenloses Angebot anfragen
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate-600">
              Erzählen Sie uns kurz von Ihrem Vorhaben. Wir melden uns zeitnah
              mit den nächsten Schritten und einem unverbindlichen Angebot.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {infoItems.map((item) => {
                const Inner = (
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-surface p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                        {item.label}
                      </p>
                      <p className="mt-0.5 font-heading font-semibold text-brand-dark">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {Inner}
                  </a>
                ) : (
                  <div key={item.label}>{Inner}</div>
                );
              })}
            </div>

            <Link
              href="/kontakt"
              className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-bold text-brand"
            >
              Zur Kontaktseite
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-line bg-surface p-7 shadow-[0_18px_50px_rgba(9,51,101,0.08)] sm:p-9">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
