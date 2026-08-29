import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | PLAMAR Bauunternehmung UG",
  description: "Informationen zum Datenschutz gemäß DSGVO bei der PLAMAR Bauunternehmung UG (haftungsbeschränkt), Uhingen.",
  robots: { index: false, follow: true },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-lg font-bold text-brand-dark">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export default function DatenschutzPage() {
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
            <span className="text-brand-dark">Datenschutz</span>
          </nav>

          <h1 className="mt-6 font-heading text-4xl font-extrabold uppercase text-brand-dark">
            Datenschutzerklärung
          </h1>

          <div className="mt-10 space-y-8 leading-relaxed text-slate-700">
            <Section title="1. Datenschutz auf einen Blick">
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir
                behandeln Ihre personenbezogenen Daten vertraulich und
                entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO,
                BDSG) sowie dieser Datenschutzerklärung. Nachfolgend informieren
                wir Sie darüber, welche Daten wir erheben und wofür wir sie
                verwenden.
              </p>
            </Section>

            <Section title="2. Verantwortliche Stelle">
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p>
                {company.legalName}
                <br />
                {company.street}, {company.city}
                <br />
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
            </Section>

            <Section title="3. Hosting und Server-Logfiles">
              <p>
                Diese Website wird bei einem externen Dienstleister gehostet
                (Hoster). Beim Aufruf der Seiten erfasst der Hoster
                automatisch Informationen in sogenannten Server-Logfiles, die
                Ihr Browser übermittelt. Dies sind in der Regel: Browsertyp und
                -version, verwendetes Betriebssystem, Referrer-URL, Hostname des
                zugreifenden Rechners, Uhrzeit der Serveranfrage und die
                IP-Adresse.
              </p>
              <p>
                Diese Daten werden nicht mit anderen Datenquellen zusammengeführt
                und dienen der technischen Bereitstellung sowie der Sicherheit
                und Stabilität der Website. Rechtsgrundlage ist Art. 6 Abs. 1
                lit. f DSGVO (berechtigtes Interesse an einer sicheren und
                fehlerfreien Darstellung).
              </p>
              <p className="rounded-xl border border-line bg-surface p-4 text-sm text-muted">
                Hinweis: Bitte ergänzen Sie hier Namen und Anschrift Ihres
                konkreten Hosting-Anbieters sowie ggf. einen Verweis auf dessen
                Auftragsverarbeitungsvertrag (AVV).
              </p>
            </Section>

            <Section title="4. Cookies">
              <p>
                Diese Website verwendet ausschließlich technisch notwendige
                Speichertechniken, die für den Betrieb der Seite erforderlich
                sind. Ihre Auswahl im Cookie-Hinweis wird lokal in Ihrem Browser
                gespeichert, damit der Hinweis nicht bei jedem Besuch erneut
                erscheint.
              </p>
              <p>
                Optionale Cookies – etwa für Statistik oder Marketing – setzen
                wir nur, wenn Sie zuvor ausdrücklich zugestimmt haben (Art. 6
                Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG). Ihre Einwilligung können
                Sie jederzeit über den Link „Cookie-Einstellungen“ im
                Seitenfuß widerrufen.
              </p>
            </Section>

            <Section title="5. Kontaktaufnahme">
              <p>
                Wenn Sie uns über das Anfrageformular, per E-Mail oder telefonisch
                kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten
                (z. B. Name, Telefonnummer, E-Mail-Adresse und Angaben zu Ihrem
                Vorhaben), um Ihre Anfrage zu bearbeiten und zu beantworten.
              </p>
              <p>
                Das Anfrageformular dieser Website speichert Ihre Eingaben nicht
                auf dem Server, sondern öffnet Ihr E-Mail-Programm mit einer
                vorbereiteten Nachricht. Der Versand erfolgt anschließend über
                Ihren eigenen E-Mail-Anbieter. Rechtsgrundlage ist Art. 6 Abs. 1
                lit. b DSGVO (Anbahnung bzw. Erfüllung eines Vertrags) bzw. lit.
                f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
              </p>
              <p>
                Die Daten verbleiben bei uns, bis der Zweck der Speicherung
                entfällt oder Sie uns zur Löschung auffordern, sofern keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </Section>

            <Section title="6. Schriftarten">
              <p>
                Diese Website nutzt Schriftarten, die lokal vom eigenen Server
                ausgeliefert werden. Beim Aufruf der Seiten wird dadurch keine
                Verbindung zu Servern Dritter aufgebaut, um Schriften zu laden.
              </p>
            </Section>

            <Section title="7. Ihre Rechte">
              <p>Sie haben im Rahmen der geltenden Gesetze jederzeit das Recht auf:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO),</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO),</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).</li>
              </ul>
              <p>
                Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für
                die Zukunft widerrufen. Zudem steht Ihnen ein Beschwerderecht bei
                einer Datenschutz-Aufsichtsbehörde zu.
              </p>
            </Section>

            <Section title="8. Aktualität">
              <p>
                Diese Datenschutzerklärung kann angepasst werden, wenn sich die
                Rechtslage oder unsere Verarbeitung ändert. Es gilt jeweils die
                auf dieser Seite veröffentlichte Fassung.
              </p>
            </Section>

            <p className="rounded-xl border border-line bg-surface p-4 text-sm text-muted">
              Hinweis: Diese Datenschutzerklärung ist eine sorgfältig erstellte
              Vorlage. Bitte ergänzen Sie die markierten Angaben (z. B. Hoster)
              und lassen Sie den Text vor der Veröffentlichung rechtlich prüfen –
              insbesondere, sobald weitere Dienste (Analyse, Karten, Formular-
              Backend o. Ä.) eingebunden werden.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
