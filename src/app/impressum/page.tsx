import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum | PLAMAR Bauunternehmung UG",
  description: "Impressum und Anbieterkennzeichnung der PLAMAR Bauunternehmung UG (haftungsbeschränkt), Uhingen.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <nav className="flex items-center gap-1.5 text-sm text-muted">
            <Link href="/" className="transition hover:text-brand">
              Startseite
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-brand-dark">Impressum</span>
          </nav>

          <h1 className="mt-6 font-heading text-4xl font-extrabold uppercase text-brand-dark">
            Impressum
          </h1>

          <div className="mt-10 space-y-8 leading-relaxed text-slate-700">
            <section>
              <h2 className="font-heading text-lg font-bold text-brand-dark">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="mt-3">
                {company.legalName}
                <br />
                {company.street}
                <br />
                {company.city}
                <br />
                {company.country}
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-brand-dark">
                Vertreten durch
              </h2>
              <p className="mt-3">Geschäftsführer: {company.managingDirector}</p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-brand-dark">
                Kontakt
              </h2>
              <p className="mt-3">
                Telefon:{" "}
                <a href={company.phoneHref} className="text-brand">
                  {company.phone}
                </a>
                <br />
                E-Mail:{" "}
                <a href={company.emailHref} className="text-brand">
                  {company.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-brand-dark">
                Registereintrag
              </h2>
              <p className="mt-3">
                Eintragung im Handelsregister
                <br />
                Registergericht: {company.registerCourt}
                <br />
                Registernummer: {company.registerNumber}
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-brand-dark">
                Umsatzsteuer-ID
              </h2>
              <p className="mt-3">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:{" "}
                <mark className="bg-accent/30 px-1">
                  [falls vorhanden, bitte ergänzen]
                </mark>
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-brand-dark">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p className="mt-3">
                Wir sind nicht bereit und nicht verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-brand-dark">
                Haftung für Inhalte
              </h2>
              <p className="mt-3">
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind
                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-brand-dark">
                Haftung für Links
              </h2>
              <p className="mt-3">
                Unser Angebot enthält gegebenenfalls Links zu externen Websites
                Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
                können wir für diese fremden Inhalte auch keine Gewähr
                übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-brand-dark">
                Urheberrecht
              </h2>
              <p className="mt-3">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge
                Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
                der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            <p className="rounded-xl border border-line bg-surface p-4 text-sm text-muted">
              Hinweis: Ein eventuell gelb markiertes Feld (USt-IdNr) ist optional
              und nur bei Vorhandensein zu ergänzen. Bitte lassen Sie dieses
              Impressum vor der Veröffentlichung rechtlich prüfen.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
