import {
  Construction,
  Wrench,
  Home,
  Zap,
  Droplets,
  PaintRoller,
  Building2,
  Layers,
  Bath,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string; // Menü-/Karten-Kurztitel
  tagline: string;
  icon: LucideIcon;
  image?: string; // optionales Projektfoto im Hero
  intro: string[];
  details: string[]; // ausführlicher Fließtext (SEO)
  steps: { title: string; text: string }[];
  includes: string[];
  benefits: { title: string; text: string }[];
  risks: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  gallery: string[]; // Bildunterschriften für die Foto-Platzhalter
};

export const services: Service[] = [
  {
    slug: "geruestbau",
    title: "Gerüstbau",
    short: "Gerüstbau",
    tagline: "Sichere Fassaden- und Arbeitsgerüste für jede Baustelle",
    icon: Construction,
    image: "/images/svc-geruestbau.jpg",
    intro: [
      "Ein standsicheres Gerüst ist die Grundlage für saubere und sichere Arbeiten an Fassade, Dach und Außenwand. Wir stellen das passende Gerüst für Ihr Vorhaben, vom kurzen Reparatureinsatz bis zum kompletten Sanierungsprojekt.",
      "Aufbau, Prüfung und Abbau erfolgen fach- und normgerecht, angepasst an Gebäudeform, Höhe und die geplante Standzeit.",
    ],
    steps: [
      { title: "Beratung & Aufmaß", text: "Wir sehen uns die Baustelle an und klären Höhe, Zugänglichkeit, Standzeit und die passende Gerüstart." },
      { title: "Anlieferung & Aufbau", text: "Unser Team liefert das Material an und baut das Gerüst standsicher und nach Vorschrift auf." },
      { title: "Prüfung & Freigabe", text: "Vor der Nutzung wird das Gerüst kontrolliert und für die Arbeiten freigegeben." },
      { title: "Abbau & Abtransport", text: "Nach Abschluss der Arbeiten bauen wir das Gerüst ab und hinterlassen eine saubere Baustelle." },
    ],
    includes: [
      "Fassaden- und Arbeitsgerüste",
      "Schutz- und Absturzsicherung",
      "Auf- und Abbau nach Vorschrift",
      "Anpassung an jede Gebäudeform",
      "Kurzfristige Bereitstellung",
      "Für Neubau und Sanierung",
    ],
    benefits: [
      { title: "Mehr Sicherheit", text: "Ein normgerechtes Gerüst schützt alle Beteiligten und macht Arbeiten in jeder Höhe erst möglich." },
      { title: "Schnellerer Fortschritt", text: "Gute Zugänglichkeit lässt Fassaden- und Dacharbeiten zügiger und gründlicher vorangehen." },
      { title: "Schutz des Gebäudes", text: "Netze und Planen halten Schmutz, Werkzeug und Witterung von der Baustelle fern." },
      { title: "Alles aus einer Hand", text: "Auf- und Abbau, Prüfung und Abstimmung mit den anderen Gewerken laufen über uns." },
    ],
    risks: [
      { title: "Unfallgefahr", text: "Fehlende oder improvisierte Absturzsicherung ist ein erhebliches Risiko für Mensch und Material." },
      { title: "Verzögerungen", text: "Ohne passendes Gerüst stocken Fassade und Dach, Termine verschieben sich." },
      { title: "Höhere Kosten", text: "Nachträgliche Anpassungen und verlängerte Standzeiten treiben die Gesamtkosten." },
    ],
    faqs: [
      { q: "Wie lange bleibt das Gerüst stehen?", a: "Die Standzeit richtet sich nach dem Bauablauf. Wir stimmen sie mit Ihnen und den beteiligten Gewerken ab." },
      { q: "Baut ihr auch für kurze Einsätze auf?", a: "Ja, vom kurzen Reparatureinsatz bis zum kompletten Sanierungsprojekt." },
      { q: "Ist das Gerüst geprüft?", a: "Ja. Vor der Nutzung wird das Gerüst kontrolliert und für die Arbeiten freigegeben." },
      { q: "Passt das Gerüst an jede Fassade?", a: "Wir passen es an Höhe, Form und Zugänglichkeit Ihres Gebäudes an." },
    ],
    details: [
      "Der Gerüstbau ist oft der erste sichtbare Schritt einer Sanierung und zugleich die Voraussetzung dafür, dass alle weiteren Arbeiten sicher und in guter Qualität ausgeführt werden können. Ein fachgerecht errichtetes Gerüst schafft stabile Arbeitsebenen, sichere Aufstiege und den notwendigen Seitenschutz, ob an einer niedrigen Garage oder an einem mehrgeschossigen Wohnhaus.",
      "Wir wählen die Gerüstart passend zu Ihrem Vorhaben: Fassadengerüste für Putz-, Anstrich- und Dämmarbeiten, Arbeitsgerüste für Handwerker verschiedener Gewerke und Schutzgerüste dort, wo Personen oder Bereiche gesichert werden müssen. Dabei berücksichtigen wir Gebäudehöhe, Untergrund, Verankerung und die geplante Standzeit, damit das Gerüst nicht nur standsicher ist, sondern auch effizient genutzt werden kann.",
      "Weil wir den Gerüstbau mit unseren übrigen Leistungen wie Dach und Fassade kombinieren, sparen Sie Abstimmung und Zeit. Auf- und Abbau, Prüfung und Freigabe kommen aus einer Hand, ohne Schnittstellen zwischen mehreren Firmen und mit einem festen Ansprechpartner für Ihr gesamtes Projekt in Uhingen und der Region.",
    ],
    gallery: [
      "Fassadengerüst an Ihrem Objekt",
      "Detail: Aufbau & Sicherung",
      "Gerüst rund ums Gebäude",
    ],
  },
  {
    slug: "sanierung",
    title: "Sanierung von A bis Z",
    short: "Sanierung A bis Z",
    tagline: "Ihre Sanierung: geplant, koordiniert, umgesetzt",
    icon: Wrench,
    image: "/images/svc-sanierung.jpg",
    intro: [
      "Ob einzelnes Gewerk oder umfassende Modernisierung: Wir übernehmen Ihre Sanierung von der ersten Bestandsaufnahme bis zur Fertigstellung.",
      "Dabei koordinieren wir alle beteiligten Handwerke für Sie, Sie haben einen festen Ansprechpartner und ein klar abgestimmtes Ergebnis.",
    ],
    steps: [
      { title: "Bestandsaufnahme", text: "Wir prüfen den Ist-Zustand vor Ort und besprechen Ihre Ziele und Wünsche." },
      { title: "Planung & Angebot", text: "Sie erhalten einen klaren Vorschlag zu Umfang, Ablauf und Kosten." },
      { title: "Koordinierte Ausführung", text: "Wir setzen die Gewerke in der richtigen Reihenfolge um und behalten den Zeitplan im Blick." },
      { title: "Übergabe", text: "Zum Abschluss übergeben wir sauber und gehen die Arbeiten gemeinsam durch." },
    ],
    includes: [
      "Sanierung einzelner Gewerke",
      "Umfassende Modernisierung",
      "Koordination aller Handwerke",
      "Ein fester Ansprechpartner",
      "Klarer Zeit- und Kostenrahmen",
      "Saubere Übergabe",
    ],
    benefits: [
      { title: "Wertsteigerung", text: "Eine gute Sanierung erhöht den Wert und die Attraktivität Ihrer Immobilie." },
      { title: "Weniger Aufwand für Sie", text: "Wir koordinieren alle Gewerke, Sie müssen nicht mehrere Firmen einzeln steuern." },
      { title: "Planbare Kosten", text: "Klarer Umfang und Zeitplan von Anfang an, ohne böse Überraschungen." },
      { title: "Nachhaltiges Ergebnis", text: "Fachgerecht ausgeführt, damit die Sanierung lange Bestand hat." },
    ],
    risks: [
      { title: "Schäden weiten sich aus", text: "Kleine Mängel wie Feuchtigkeit oder Risse werden mit der Zeit größer und teurer." },
      { title: "Steigende Kosten", text: "Was heute überschaubar ist, kann später eine aufwendige Instandsetzung werden." },
      { title: "Wertverlust", text: "Ein sanierungsbedürftiges Gebäude verliert an Wert und lässt sich schwerer nutzen oder vermieten." },
    ],
    faqs: [
      { q: "Macht ihr auch nur einzelne Gewerke?", a: "Ja. Wir sanieren einzelne Bereiche ebenso wie ganze Häuser und Wohnungen." },
      { q: "Wie erhalte ich ein Angebot?", a: "Nach einer kurzen Besprechung vor Ort erstellen wir Ihnen ein unverbindliches Angebot mit klarem Umfang." },
      { q: "Wer koordiniert die Handwerker?", a: "Das übernehmen wir. Sie haben einen festen Ansprechpartner über den gesamten Ablauf." },
      { q: "Kann ich während der Sanierung im Haus bleiben?", a: "Das hängt vom Umfang ab, wir besprechen das ehrlich mit Ihnen bei der Planung." },
    ],
    details: [
      "Eine Sanierung bedeutet, ein Gebäude oder einzelne Bereiche wieder in einen einwandfreien, zeitgemäßen Zustand zu bringen. Das kann die Beseitigung konkreter Schäden sein, etwa Feuchtigkeit, Risse oder verschlissene Bauteile, oder eine umfassende Modernisierung, die Wohnkomfort, Optik und Energieverbrauch spürbar verbessert.",
      "Wir beginnen jede Sanierung mit einer ehrlichen Bestandsaufnahme vor Ort. Auf dieser Grundlage planen wir den Umfang, legen die sinnvolle Reihenfolge der Gewerke fest und stimmen einen realistischen Zeit- und Kostenrahmen mit Ihnen ab. So wissen Sie von Anfang an, was gemacht wird, in welcher Reihenfolge und mit welchem Aufwand zu rechnen ist.",
      "Der große Vorteil: Sie müssen nicht mehrere Firmen einzeln beauftragen und koordinieren. Als Bauunternehmen bündeln wir die nötigen Handwerke und führen sie abgestimmt aus, von kleinen Einzelmaßnahmen bis zur umfassenden Modernisierung. Das spart Zeit, vermeidet Reibungsverluste und sorgt für ein durchgängig sauberes Ergebnis.",
    ],
    gallery: [
      "Vorher-Zustand des Objekts",
      "Sanierung im Ablauf",
      "Fertiggestelltes Ergebnis",
    ],
  },
  {
    slug: "komplettsanierung",
    title: "Komplette Haussanierung",
    short: "Komplette Haussanierung",
    tagline: "Ganze Häuser und Wohnungen aus einer Hand",
    icon: Home,
    image: "/images/svc-komplettsanierung.jpg",
    intro: [
      "Bei der kompletten Haus- oder Wohnungssanierung übernehmen wir Planung, Ausführung und Koordination, von der Entkernung bis zur schlüsselfertigen Übergabe.",
      "So müssen Sie nicht viele Firmen einzeln steuern: Wir bündeln alle Gewerke und bringen Ihr Objekt in einen wohnfertigen Zustand.",
    ],
    steps: [
      { title: "Konzept & Planung", text: "Gemeinsam legen wir Umfang, Ausstattung und Ablauf der Sanierung fest." },
      { title: "Entkernung & Rohbau", text: "Wir bereiten das Objekt vor und schaffen die bauliche Grundlage." },
      { title: "Ausbau aller Gewerke", text: "Elektro, HWS, Innenausbau, Fassade und Dach greifen koordiniert ineinander." },
      { title: "Schlüsselfertige Übergabe", text: "Zum Schluss übergeben wir Ihr fertiges, bezugsfertiges Objekt." },
    ],
    includes: [
      "Komplette Häuser und Wohnungen",
      "Entkernung und Rohbau",
      "Alle Gewerke koordiniert",
      "Ein Ansprechpartner von Anfang bis Ende",
      "Abgestimmter Zeitplan",
      "Schlüsselfertige Übergabe",
    ],
    benefits: [
      { title: "Alles aus einer Hand", text: "Ein Partner für alle Gewerke, das spart Zeit, Abstimmung und Nerven." },
      { title: "Deutliche Wertsteigerung", text: "Eine Komplettsanierung hebt Ihr Objekt spürbar auf einen neuen Stand." },
      { title: "Modern & effizient", text: "Zeitgemäße Technik und Ausstattung machen das Wohnen komfortabler." },
      { title: "Ein klarer Zeitplan", text: "Alle Schritte sind aufeinander abgestimmt, für einen reibungslosen Ablauf." },
    ],
    risks: [
      { title: "Stückwerk wird teurer", text: "Einzeln über Jahre verteilte Arbeiten kosten insgesamt mehr als eine geplante Gesamtsanierung." },
      { title: "Folgeschäden", text: "Wird ein Bereich vernachlässigt, leiden angrenzende Gewerke mit." },
      { title: "Eingeschränkte Nutzung", text: "Ein nur teilweise saniertes Haus bleibt lange unfertig und schwer nutzbar." },
    ],
    faqs: [
      { q: "Wie lange dauert eine Komplettsanierung?", a: "Das hängt von Größe und Umfang ab. Nach der Bestandsaufnahme nennen wir Ihnen einen realistischen Zeitrahmen." },
      { q: "Übernehmt ihr wirklich alle Gewerke?", a: "Ja. Wir koordinieren und führen die nötigen Handwerke bis zur schlüsselfertigen Übergabe aus." },
      { q: "Kann ich Ausstattung selbst aussuchen?", a: "Selbstverständlich. Wir beraten Sie und setzen Ihre Wünsche um." },
      { q: "Bekomme ich einen festen Ansprechpartner?", a: "Ja, über den gesamten Ablauf, von der Planung bis zur Übergabe." },
    ],
    details: [
      "Bei einer kompletten Haussanierung wird ein Gebäude von Grund auf erneuert. Häufig steht am Anfang die Entkernung, bei der alte, verschlissene Bauteile entfernt werden. Danach folgen Rohbauarbeiten, die Erneuerung der Haustechnik und der schrittweise Ausbau bis zum bezugsfertigen Zustand. Das Ergebnis ist ein Haus, das technisch und optisch auf einem neuen Stand ist.",
      "Der entscheidende Unterschied zu einer Sanierung in Etappen ist die durchgängige Planung. Wenn alle Gewerke von Beginn an aufeinander abgestimmt sind, greifen Elektro, Heizung, Wasser, Sanitär, Innenausbau, Fassade und Dach sauber ineinander. Das vermeidet doppelte Arbeit, verkürzt die Bauzeit und hält die Kosten planbar.",
      "Wir übernehmen die komplette Haussanierung als Generalist mit einem festen Ansprechpartner. Sie behalten den Überblick, ohne sich um die Koordination der einzelnen Handwerke kümmern zu müssen, von der ersten Planung bis zur schlüsselfertigen Übergabe Ihres Objekts in Uhingen und Umgebung.",
    ],
    gallery: [
      "Objekt vor der Sanierung",
      "Rohbau & Ausbauphase",
      "Schlüsselfertiges Ergebnis",
    ],
  },
  {
    slug: "elektroinstallationen",
    title: "Elektroinstallationen",
    short: "Elektroinstallationen",
    tagline: "Elektrik für Neubau, Umbau und Modernisierung",
    icon: Zap,
    image: "/images/svc-elektro.jpg",
    intro: [
      "Wir übernehmen die Elektroinstallation im Rahmen von Neubau, Umbau und Sanierung, von der Leitungsführung bis zur Verteilung.",
      "Ob einzelne Räume oder das ganze Haus: Wir planen die Elektrik passend zu Ihrem Vorhaben und führen sie fachgerecht aus.",
    ],
    steps: [
      { title: "Bedarf klären", text: "Wir besprechen, welche Anschlüsse, Leitungen und Verteilungen Sie benötigen." },
      { title: "Planung", text: "Wir legen die Positionen von Steckdosen, Schaltern und Leitungswegen fest." },
      { title: "Installation", text: "Leitungen, Dosen und Verteilung werden fachgerecht verlegt und angeschlossen." },
      { title: "Kontrolle", text: "Zum Abschluss prüfen wir die Installation und übergeben sie betriebsbereit." },
    ],
    includes: [
      "Neuinstallation der Elektrik",
      "Modernisierung im Bestand",
      "Leitungsführung und Verteilung",
      "Steckdosen, Schalter, Anschlüsse",
      "Im Zuge von Sanierung und Umbau",
      "Für einzelne Räume oder ganze Häuser",
    ],
    benefits: [
      { title: "Mehr Sicherheit", text: "Eine fachgerechte, moderne Elektrik reduziert Gefahren im Haushalt deutlich." },
      { title: "Mehr Komfort", text: "Ausreichend Steckdosen und durchdachte Schaltungen erleichtern den Alltag." },
      { title: "Zukunftssicher", text: "Eine moderne Verteilung ist auf heutige und kommende Anforderungen vorbereitet." },
      { title: "Werterhalt", text: "Eine zeitgemäße Installation ist ein wichtiger Baustein für den Wert Ihrer Immobilie." },
    ],
    risks: [
      { title: "Sicherheitsrisiko", text: "Veraltete Leitungen und überlastete Kreise können zur Gefahr werden." },
      { title: "Ständige Probleme", text: "Zu wenige Anschlüsse und häufig auslösende Sicherungen stören den Alltag dauerhaft." },
      { title: "Teure Nacharbeit", text: "Wird die Elektrik nach dem Ausbau erneuert, muss oft wieder aufgestemmt werden." },
    ],
    faqs: [
      { q: "Modernisiert ihr auch bestehende Elektrik?", a: "Ja. Wir erneuern und erweitern die Installation im Bestand, meist im Rahmen einer Sanierung." },
      { q: "Macht ihr auch einzelne Räume?", a: "Ja, von einzelnen Räumen bis zur Elektrik im ganzen Haus." },
      { q: "Wann ist der beste Zeitpunkt?", a: "Am wirtschaftlichsten ist die Elektrik, solange Wände und Böden noch offen sind." },
      { q: "Plant ihr die Positionen mit mir?", a: "Ja. Wir legen Steckdosen, Schalter und Leitungswege gemeinsam fest." },
    ],
    details: [
      "Die Elektroinstallation ist das Nervensystem eines Hauses. Sie versorgt Beleuchtung, Steckdosen, Haushaltsgeräte und moderne Technik zuverlässig mit Strom. Gerade in älteren Gebäuden stößt die vorhandene Elektrik oft an ihre Grenzen: zu wenige Steckdosen, veraltete Leitungen oder eine Verteilung, die den heutigen Anforderungen nicht mehr gerecht wird.",
      "Wir planen die Elektrik passend zu Ihrer Nutzung. Gemeinsam legen wir fest, wo Steckdosen, Schalter und Anschlüsse sinnvoll sind, wie die Leitungen geführt werden und wie die Verteilung aufgebaut sein soll. Anschließend verlegen und verbinden wir alles fachgerecht und prüfen die Installation, bevor wir sie betriebsbereit übergeben.",
      "Der wirtschaftlichste Zeitpunkt für Elektroarbeiten ist, solange Wände und Böden im Zuge einer Sanierung noch offen sind. Dann lassen sich Leitungen ohne zusätzliches Aufstemmen verlegen. Ob einzelne Räume oder das ganze Haus, wir führen die Elektroinstallation im Rahmen von Neubau, Umbau und Modernisierung aus.",
    ],
    gallery: [
      "Leitungsführung im Rohbau",
      "Verteilung / Sicherungskasten",
      "Fertige Installation",
    ],
  },
  {
    slug: "hws-installationen",
    title: "Heizung, Wasser & Sanitär",
    short: "Heizung · Wasser · Sanitär",
    tagline: "HWS-Installationen zuverlässig aus einer Hand",
    icon: Droplets,
    image: "/images/svc-hws.jpg",
    intro: [
      "Unter HWS fassen wir Heizung, Wasser und Sanitär zusammen. Wir installieren und modernisieren die Haustechnik, die Ihr Zuhause warm, versorgt und funktionsfähig hält.",
      "Von der Wasserleitung über die Heizungsinstallation bis zur Sanitärausstattung übernehmen wir die Technik im gesamten Haus.",
    ],
    steps: [
      { title: "Bestandsaufnahme", text: "Wir prüfen die vorhandene Technik und Ihren Bedarf an Heizung, Wasser und Sanitär." },
      { title: "Planung", text: "Wir legen Leitungswege, Anschlüsse und die passende Ausstattung fest." },
      { title: "Installation", text: "Heizung, Wasserleitungen und Sanitärobjekte werden fachgerecht installiert." },
      { title: "Funktionsprüfung", text: "Zum Abschluss prüfen wir die Anlagen und übergeben sie betriebsbereit." },
    ],
    includes: [
      "Heizungsinstallation",
      "Wasser- und Leitungstechnik",
      "Sanitärinstallation",
      "Modernisierung im Bestand",
      "Im Zuge von Bad- und Haussanierung",
      "Technik fürs ganze Haus",
    ],
    benefits: [
      { title: "Niedrigere Betriebskosten", text: "Moderne Heizungs- und Wassertechnik arbeitet effizienter und spart im Betrieb." },
      { title: "Mehr Komfort", text: "Zuverlässige Wärme und Warmwasser sorgen für spürbar mehr Wohnqualität." },
      { title: "Weniger Störungen", text: "Neue Technik ist deutlich weniger anfällig für Ausfälle und Reparaturen." },
      { title: "Alles abgestimmt", text: "Heizung, Wasser und Sanitär kommen aus einer Hand und passen zusammen." },
    ],
    risks: [
      { title: "Wasserschäden", text: "Alte Leitungen können undicht werden, Feuchtigkeit und Folgeschäden drohen." },
      { title: "Hoher Verbrauch", text: "Veraltete Heizungstechnik verbraucht unnötig viel und treibt die Kosten." },
      { title: "Plötzlicher Ausfall", text: "Fällt die Anlage im Winter aus, wird der Austausch schnell zum Notfall." },
    ],
    faqs: [
      { q: "Was bedeutet HWS?", a: "HWS steht für Heizung, Wasser und Sanitär, die zentrale Haustechnik, die wir aus einer Hand übernehmen." },
      { q: "Modernisiert ihr auch bestehende Anlagen?", a: "Ja. Wir erneuern und erweitern Heizungs-, Wasser- und Sanitärtechnik im Bestand." },
      { q: "Macht ihr auch die Badinstallation?", a: "Ja, die Sanitärinstallation gehört dazu, oft im Rahmen einer Badsanierung." },
      { q: "Wird alles geprüft?", a: "Ja. Vor der Übergabe prüfen wir die Anlagen auf Funktion und Dichtheit." },
    ],
    details: [
      "HWS steht für Heizung, Wasser und Sanitär, zusammen bilden diese drei Bereiche die zentrale Haustechnik. Sie sorgen dafür, dass es warm ist, dass sauberes Wasser dorthin kommt, wo es gebraucht wird, und dass Bad, Küche und Anschlüsse zuverlässig funktionieren. Wir installieren und modernisieren diese Technik im gesamten Haus, abgestimmt und aus einer Hand.",
      "Bei der Heizung geht es nicht nur um Wärme, sondern auch um Effizienz: Moderne Technik arbeitet sparsamer und senkt die laufenden Kosten. Bei Wasser und Leitungen stehen Dichtheit und Hygiene im Vordergrund, denn alte Leitungen können undicht werden und Folgeschäden verursachen. Im Sanitärbereich sorgen wir für saubere, funktionale Lösungen bis hin zur kompletten Badausstattung.",
      "Weil Heizung, Wasser und Sanitär eng zusammenhängen, ist es sinnvoll, sie gemeinsam zu planen, besonders im Rahmen einer Bad- oder Haussanierung. Vor der Übergabe prüfen wir alle Anlagen auf Funktion und Dichtheit, damit die Technik zuverlässig und sicher läuft.",
    ],
    gallery: [
      "Heizungsinstallation",
      "Wasser- & Leitungstechnik",
      "Sanitär im Detail",
    ],
  },
  {
    slug: "innenausbau",
    title: "Innenausbau",
    short: "Innenausbau",
    tagline: "Vom Rohbau zum wohnfertigen Raum",
    icon: PaintRoller,
    image: "/images/svc-innenausbau.jpg",
    intro: [
      "Beim Innenausbau machen wir aus Rohräumen fertige, wohnliche Flächen. Trockenbau, Böden, Türen und Oberflächen fügen sich zu einem stimmigen Ergebnis.",
      "Wir arbeiten sauber und abgestimmt, auf Wunsch als Teil einer kompletten Sanierung oder als einzelne Leistung.",
    ],
    steps: [
      { title: "Planung", text: "Wir besprechen Raumaufteilung, Materialien und Oberflächen." },
      { title: "Trocken- & Ausbau", text: "Wände, Decken und Unterkonstruktionen werden erstellt." },
      { title: "Böden & Oberflächen", text: "Böden, Türen und Oberflächen werden eingebaut und fertiggestellt." },
      { title: "Feinarbeiten", text: "Zum Abschluss folgen die Detailarbeiten für ein sauberes Ergebnis." },
    ],
    includes: [
      "Trockenbau (Wände & Decken)",
      "Dämmung im Innenbereich",
      "Böden und Bodenaufbau",
      "Türen und Zargen",
      "Oberflächen und Feinarbeiten",
      "Ausbau von Dachgeschossen",
    ],
    benefits: [
      { title: "Mehr nutzbarer Raum", text: "Ausgebaute Flächen, etwa im Dachgeschoss, schaffen wertvollen zusätzlichen Wohnraum." },
      { title: "Besseres Raumklima", text: "Guter Innenausbau mit Dämmung verbessert Wärme- und Schallschutz." },
      { title: "Individuelle Gestaltung", text: "Aufteilung, Böden und Oberflächen ganz nach Ihren Vorstellungen." },
      { title: "Sauberes Ergebnis", text: "Abgestimmte Ausführung sorgt für ein stimmiges Gesamtbild." },
    ],
    risks: [
      { title: "Ungenutztes Potenzial", text: "Nicht ausgebaute Flächen bleiben verschenkter Wohnraum, Monat für Monat." },
      { title: "Energieverlust", text: "Fehlende Innendämmung führt zu Wärmeverlust und höheren Heizkosten." },
      { title: "Wohnkomfort leidet", text: "Provisorische Räume mindern den Komfort und den Eindruck des ganzen Hauses." },
    ],
    faqs: [
      { q: "Baut ihr auch Dachgeschosse aus?", a: "Ja. Der Ausbau von Dachgeschossen zu Wohnraum ist ein typischer Teil unseres Innenausbaus." },
      { q: "Macht ihr Trockenbau?", a: "Ja, Wände und Decken im Trockenbau gehören zu unseren Leistungen." },
      { q: "Kann ich Böden und Türen aussuchen?", a: "Selbstverständlich. Wir beraten Sie und bauen Ihre Auswahl ein." },
      { q: "Nur Innenausbau oder komplett?", a: "Beides, als einzelne Leistung oder als Teil einer Gesamtsanierung." },
    ],
    details: [
      "Der Innenausbau macht aus einem Rohbau oder entkernten Räumen fertige, wohnliche Flächen. Dazu gehören Trockenbauwände und -decken, die Innendämmung, der Bodenaufbau, Türen sowie die Oberflächen, die dem Raum am Ende sein Gesicht geben. Erst der Innenausbau entscheidet darüber, wie sich ein Haus tatsächlich anfühlt und nutzen lässt.",
      "Ein besonders lohnender Bereich ist der Ausbau von Dachgeschossen. Mit der richtigen Konstruktion, guter Dämmung und durchdachter Aufteilung entsteht dort wertvoller zusätzlicher Wohnraum, ohne anbauen zu müssen. Auch Schall- und Wärmeschutz lassen sich beim Innenausbau gezielt verbessern, was den Wohnkomfort spürbar erhöht.",
      "Wir arbeiten sauber, abgestimmt und nach Ihren Vorstellungen, ob als einzelne Leistung oder als Teil einer kompletten Sanierung. Von der Raumaufteilung über Böden und Türen bis zu den Feinarbeiten sorgen wir für ein stimmiges Gesamtbild, das lange Freude macht.",
    ],
    gallery: [
      "Trockenbau & Unterkonstruktion",
      "Böden und Oberflächen",
      "Fertiger Innenraum",
    ],
  },
  {
    slug: "fassade",
    title: "Fassade",
    short: "Fassade",
    tagline: "Schutz und Optik für Ihr Gebäude",
    icon: Building2,
    image: "/images/svc-fassade.jpg",
    intro: [
      "Die Fassade schützt Ihr Gebäude vor Witterung und prägt zugleich seinen Gesamteindruck. Wir führen Fassadenarbeiten im Rahmen von Sanierung und Modernisierung aus.",
      "Vom Aufbau bis zur fertigen Oberfläche sorgen wir für ein sauberes, geschütztes und gepflegtes Ergebnis.",
    ],
    steps: [
      { title: "Begutachtung", text: "Wir prüfen den Zustand der Fassade und besprechen das gewünschte Ergebnis." },
      { title: "Vorbereitung", text: "Untergrund und Aufbau werden für die weiteren Arbeiten vorbereitet." },
      { title: "Ausführung", text: "Die Fassadenarbeiten werden fachgerecht und sauber ausgeführt." },
      { title: "Abschluss", text: "Zum Schluss kontrollieren wir das Ergebnis und räumen die Baustelle." },
    ],
    includes: [
      "Fassadenarbeiten und -sanierung",
      "Untergrundvorbereitung",
      "Schutz vor Witterung",
      "Saubere Oberflächen",
      "Im Zuge von Gerüst- und Dacharbeiten",
      "Aufwertung der Optik",
    ],
    benefits: [
      { title: "Schutz vor Witterung", text: "Eine intakte Fassade hält Feuchtigkeit und Kälte zuverlässig vom Mauerwerk fern." },
      { title: "Besseres Erscheinungsbild", text: "Eine gepflegte Fassade wertet das gesamte Gebäude sichtbar auf." },
      { title: "Werterhalt", text: "Regelmäßige Fassadenpflege schützt die Bausubstanz und den Immobilienwert." },
      { title: "Mögliche Energieeinsparung", text: "Im Zuge der Arbeiten lässt sich der Wärmeschutz sinnvoll verbessern." },
    ],
    risks: [
      { title: "Feuchtigkeit dringt ein", text: "Risse und schadhafte Stellen lassen Wasser ins Mauerwerk, ein Nährboden für Folgeschäden." },
      { title: "Schäden am Mauerwerk", text: "Unbehandelt breiten sich Schäden aus und die Sanierung wird aufwendiger." },
      { title: "Wertverlust", text: "Eine ungepflegte Fassade drückt sichtbar den Eindruck und den Wert des Objekts." },
    ],
    faqs: [
      { q: "Wann sollte eine Fassade saniert werden?", a: "Spätestens bei sichtbaren Rissen, abblätternden Stellen oder Feuchtigkeit ist Handeln sinnvoll." },
      { q: "Braucht es dafür ein Gerüst?", a: "In der Regel ja, Gerüstbau bieten wir passend dazu aus einer Hand an." },
      { q: "Verbessert das die Energiebilanz?", a: "Im Zuge der Arbeiten lässt sich der Wärmeschutz häufig sinnvoll mitverbessern." },
      { q: "Wie lange dauern Fassadenarbeiten?", a: "Das hängt von Größe und Zustand ab, wir nennen Ihnen vorab einen realistischen Rahmen." },
    ],
    details: [
      "Die Fassade ist die Schutzhülle eines Gebäudes und zugleich seine Visitenkarte. Sie ist Regen, Frost, Hitze und UV-Strahlung dauerhaft ausgesetzt. Mit der Zeit können Risse, abblätternde Stellen oder Feuchtigkeit entstehen, Anzeichen dafür, dass die Fassade Aufmerksamkeit braucht, bevor Schäden ins Mauerwerk vordringen.",
      "Bei Fassadenarbeiten prüfen wir zunächst den Zustand des Untergrunds und besprechen mit Ihnen das gewünschte Ergebnis. Anschließend bereiten wir die Fläche vor und führen die Arbeiten sauber und fachgerecht aus. Häufig lassen sich im gleichen Zug der Wärmeschutz verbessern und die Optik deutlich aufwerten, zwei Vorteile in einem Arbeitsgang.",
      "Da Fassade, Gerüst und oft auch das Dach zusammenhängen, bieten wir diese Leistungen aus einer Hand an. Das erspart Ihnen die Abstimmung zwischen mehreren Firmen und sorgt für ein einheitliches, gepflegtes Gesamtbild Ihres Gebäudes.",
    ],
    gallery: [
      "Fassade vor der Sanierung",
      "Arbeiten im Ablauf",
      "Fertige Fassade",
    ],
  },
  {
    slug: "dach",
    title: "Dach",
    short: "Dach",
    tagline: "Dacharbeiten im Zuge von Sanierung und Ausbau",
    icon: Layers,
    image: "/images/svc-dach.jpg",
    intro: [
      "Das Dach schützt das gesamte Gebäude. Im Rahmen von Sanierung und Ausbau übernehmen wir Dacharbeiten, vom Dachstuhl über Unterdeckbahn und Lattung bis zur Eindeckung.",
      "Wir arbeiten dicht und fachgerecht, damit Ihr Dach dauerhaft schützt.",
    ],
    steps: [
      { title: "Aufnahme", text: "Wir prüfen den Zustand des Daches und besprechen den Umfang der Arbeiten." },
      { title: "Vorbereitung & Gerüst", text: "Die Baustelle wird eingerichtet und sicher zugänglich gemacht." },
      { title: "Dacharbeiten", text: "Dachstuhl, Unterdeckbahn, Lattung und Eindeckung werden fachgerecht ausgeführt." },
      { title: "Kontrolle", text: "Zum Abschluss prüfen wir die Dichtheit und übergeben sauber." },
    ],
    includes: [
      "Dachstuhl und Konstruktion",
      "Unterdeckbahn und Konterlattung",
      "Eindeckung",
      "Anschlüsse und Details",
      "Im Zuge von Sanierung und Ausbau",
      "Dichte, fachgerechte Ausführung",
    ],
    benefits: [
      { title: "Sicherer Schutz", text: "Ein dichtes Dach schützt das ganze Gebäude vor Nässe und Witterung." },
      { title: "Energie sparen", text: "Mit moderner Dämmung im Dach geht spürbar weniger Wärme verloren." },
      { title: "Langlebigkeit", text: "Fachgerechte Ausführung sorgt für ein Dach, das lange hält." },
      { title: "Mehr Wohnraum", text: "Im Zuge der Dacharbeiten lässt sich das Dachgeschoss oft als Wohnraum ausbauen." },
    ],
    risks: [
      { title: "Wasser dringt ein", text: "Undichte Stellen führen zu Feuchtigkeit in Dämmung, Decke und Mauerwerk." },
      { title: "Schimmel & Fäulnis", text: "Anhaltende Nässe schädigt Holz und Bausubstanz, die Reparatur wird teuer." },
      { title: "Wärmeverlust", text: "Ein altes, undichtes Dach lässt wertvolle Heizwärme entweichen." },
    ],
    faqs: [
      { q: "Macht ihr auch den Dachstuhl?", a: "Ja. Vom Dachstuhl über Unterdeckbahn und Lattung bis zur Eindeckung." },
      { q: "Gehört das Gerüst dazu?", a: "Wir stellen das passende Gerüst für die Dacharbeiten gleich mit." },
      { q: "Kann man das Dach ausbauen?", a: "Ja, ein Dachausbau zu Wohnraum lässt sich gut mit den Dacharbeiten verbinden." },
      { q: "Wie erkenne ich Handlungsbedarf?", a: "Feuchte Flecken, zugige Räume oder beschädigte Ziegel sind deutliche Anzeichen." },
    ],
    details: [
      "Das Dach schützt das gesamte Gebäude vor Witterung, und ist damit eines der wichtigsten Bauteile überhaupt. Ein dichtes, gut aufgebautes Dach hält Regen, Schnee und Kälte zuverlässig ab. Zeigt es Schwächen, sind schnell auch Dämmung, Decken und Mauerwerk betroffen, weil Feuchtigkeit von oben nach unten wandert.",
      "Im Rahmen von Sanierung und Ausbau übernehmen wir die einzelnen Schritte des Dachaufbaus: den Dachstuhl als tragende Konstruktion, die Unterdeckbahn als zusätzliche Schutzebene, die Konterlattung sowie die abschließende Eindeckung. Besonderes Augenmerk legen wir auf Anschlüsse und Details, denn dort entscheidet sich, ob ein Dach dauerhaft dicht bleibt.",
      "Wer ohnehin am Dach arbeitet, sollte über eine gute Dämmung und einen möglichen Dachausbau nachdenken. Beides lässt sich gut mit den Dacharbeiten verbinden und schafft entweder niedrigere Heizkosten oder zusätzlichen Wohnraum. Das passende Gerüst stellen wir gleich mit, alles aus einer Hand.",
    ],
    gallery: [
      "Dachstuhl / Konstruktion",
      "Unterdeckbahn & Lattung",
      "Fertige Eindeckung",
    ],
  },
  {
    slug: "badsanierung",
    title: "Badsanierung",
    short: "Badsanierung",
    tagline: "Ihr neues Bad, komplett aus einer Hand",
    icon: Bath,
    image: "/images/svc-bad.jpg",
    intro: [
      "Bei der Badsanierung machen wir aus Ihrem alten Bad einen modernen, funktionalen Raum, von den Fliesen über die Sanitärtechnik bis zur fertigen Ausstattung.",
      "Alle nötigen Gewerke greifen ineinander, damit Ihr neues Bad sauber und termingerecht fertig wird.",
    ],
    steps: [
      { title: "Planung", text: "Wir besprechen Aufteilung, Ausstattung und Materialien für Ihr neues Bad." },
      { title: "Rückbau", text: "Das alte Bad wird entfernt und der Raum vorbereitet." },
      { title: "Installation & Fliesen", text: "Sanitär, Leitungen und Fliesen werden fachgerecht eingebaut." },
      { title: "Fertigstellung", text: "Wir montieren die Ausstattung und übergeben Ihr fertiges Bad." },
    ],
    includes: [
      "Komplette Badsanierung",
      "Rückbau des alten Bades",
      "Sanitärinstallation",
      "Fliesen- und Oberflächenarbeiten",
      "Barrierearme Lösungen auf Wunsch",
      "Fertige, saubere Übergabe",
    ],
    benefits: [
      { title: "Mehr Komfort", text: "Ein modernes Bad steigert die Wohnqualität spürbar, jeden Tag." },
      { title: "Barrierearm möglich", text: "Auf Wunsch planen wir Ihr Bad barrierearm und zukunftssicher." },
      { title: "Wertsteigerung", text: "Ein neues Bad zählt zu den lohnendsten Investitionen in eine Immobilie." },
      { title: "Alles aus einer Hand", text: "Sanitär, Fliesen und Ausbau kommen koordiniert von uns." },
    ],
    risks: [
      { title: "Verdeckte Wasserschäden", text: "Undichte Fugen und alte Leitungen führen oft zu unbemerkter Feuchtigkeit hinter den Fliesen." },
      { title: "Schimmelbildung", text: "Feuchtigkeit im alten Bad begünstigt Schimmel, ein Risiko für Substanz und Gesundheit." },
      { title: "Steigende Kosten", text: "Je länger ein Schaden bleibt, desto aufwendiger und teurer wird die Sanierung." },
    ],
    faqs: [
      { q: "Übernehmt ihr die komplette Badsanierung?", a: "Ja, von Rückbau über Sanitär und Fliesen bis zur fertigen Ausstattung, alles aus einer Hand." },
      { q: "Ist ein barrierearmes Bad möglich?", a: "Ja. Auf Wunsch planen wir Ihr Bad barrierearm, etwa mit bodengleicher Dusche." },
      { q: "Wie lange dauert eine Badsanierung?", a: "Je nach Größe und Umfang, nach der Planung nennen wir Ihnen einen realistischen Zeitrahmen." },
      { q: "Kann ich Fliesen und Ausstattung wählen?", a: "Selbstverständlich. Wir beraten Sie und setzen Ihre Auswahl um." },
    ],
    details: [
      "Das Bad gehört zu den am intensivsten genutzten Räumen eines Hauses, und altert entsprechend. Bei einer Badsanierung erneuern wir es von Grund auf: von Fliesen und Oberflächen über die Sanitärtechnik bis zur kompletten Ausstattung. Das Ergebnis ist ein moderner, funktionaler Raum, der zu Ihrem Alltag passt.",
      "Am Anfang steht die Planung: Aufteilung, Ausstattung und Materialien legen wir gemeinsam mit Ihnen fest. Danach folgen der Rückbau des alten Bades, die fachgerechte Installation von Sanitär und Leitungen sowie die Fliesen- und Oberflächenarbeiten. Weil hinter den Fliesen oft alte Leitungen und verdeckte Feuchtigkeit stecken, ist eine Sanierung auch die Gelegenheit, solche Schwachstellen dauerhaft zu beheben.",
      "Auf Wunsch planen wir Ihr Bad barrierearm, etwa mit einer bodengleichen Dusche, und damit zukunftssicher. Da alle nötigen Gewerke bei uns aus einer Hand kommen, greift die Badsanierung reibungslos ineinander und wird sauber und termingerecht fertig.",
    ],
    gallery: [
      "Bad vor der Sanierung",
      "Installation & Fliesenarbeiten",
      "Fertiges Bad",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
