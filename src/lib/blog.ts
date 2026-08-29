// Blog-Inhalte für PLAMAR Bauunternehmung UG – original verfasste Ratgeber
// rund um Bau, Sanierung und Modernisierung.

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string; // ISO
  dateLabel: string;
  readMinutes: number;
  image: string;
  intro: string[];
  sections: { heading: string; body: string[] }[];
  faqs: { q: string; a: string }[];
  cta: { title: string; text: string };
  keyPoints?: string[];
  conclusion?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "geruestbau-grundlage-jeder-sanierung",
    title: "Gerüstbau: Warum das richtige Gerüst über den Erfolg entscheidet",
    excerpt:
      "Ein standsicheres Gerüst ist mehr als nur Zubehör – es ist die Grundlage für sichere, saubere und zügige Arbeiten an Fassade und Dach.",
    category: "Gerüstbau",
    tags: ["Gerüstbau", "Sicherheit", "Fassade", "Baustelle"],
    date: "2025-04-08",
    dateLabel: "8. April 2025",
    readMinutes: 4,
    image: "/images/blog-geruestbau.jpg",
    intro: [
      "Bei fast jeder Sanierung ist das Gerüst das Erste, was auf der Baustelle aufgebaut wird – und oft das Letzte, was wieder verschwindet. Kein Wunder: Ohne sicheren Zugang lassen sich Arbeiten an Fassade, Dach und Außenwand weder sauber noch gefahrlos ausführen.",
      "In diesem Beitrag erklären wir, warum die Wahl des richtigen Gerüsts so wichtig ist, welche Arten es gibt und worauf Sie bei der Planung achten sollten.",
    ],
    sections: [
      {
        heading: "Sicherheit hat oberste Priorität",
        body: [
          "Ein normgerecht aufgebautes Gerüst schützt nicht nur die Handwerker, sondern auch Bewohner und Passanten. Absturzsicherungen, Seitenschutz und geprüfte Standfestigkeit sind keine Option, sondern Pflicht.",
          "Improvisierte Lösungen wirken auf den ersten Blick günstiger, sind aber ein erhebliches Risiko – und im Schadensfall deutlich teurer als ein fachgerecht gestelltes Gerüst.",
        ],
      },
      {
        heading: "Die passende Gerüstart wählen",
        body: [
          "Fassadengerüste eignen sich für Putz-, Anstrich- und Dämmarbeiten, Arbeitsgerüste bieten Handwerkern verschiedener Gewerke eine stabile Arbeitsebene, und Schutzgerüste sichern Bereiche ab. Welche Variante sinnvoll ist, hängt von Höhe, Gebäudeform und Standzeit ab.",
          "Wir sehen uns die Baustelle vorab an und wählen das Gerüst, das zu Ihrem Vorhaben passt – standsicher und effizient nutzbar.",
        ],
      },
      {
        heading: "Alles aus einer Hand spart Zeit",
        body: [
          "Wer Gerüstbau, Fassade und Dach getrennt beauftragt, muss Termine und Schnittstellen selbst koordinieren. Kommen diese Leistungen aus einer Hand, greifen die Arbeiten reibungslos ineinander.",
          "Das verkürzt die Standzeit des Gerüsts, senkt Kosten und sorgt für einen klaren Ablauf mit einem festen Ansprechpartner.",
        ],
      },
    ],
    faqs: [
      { q: "Wie lange bleibt ein Gerüst üblicherweise stehen?", a: "Das richtet sich nach dem Bauablauf und den beteiligten Gewerken. Wir stimmen die Standzeit vorab mit Ihnen ab." },
      { q: "Ist ein Gerüst auch für kleine Arbeiten nötig?", a: "Sobald in Höhe gearbeitet wird, ist eine sichere Zugänglichkeit wichtig – oft schon bei kleineren Reparaturen an Fassade oder Dach." },
      { q: "Übernehmen Sie Auf- und Abbau?", a: "Ja, inklusive Prüfung und Freigabe vor der Nutzung sowie sauberem Rückbau nach Abschluss." },
    ],
    cta: {
      title: "Planen Sie Arbeiten an Fassade oder Dach?",
      text: "Wir stellen das passende Gerüst und koordinieren die Arbeiten für Sie – sicher und aus einer Hand.",
    },
  },
  {
    slug: "komplettsanierung-ablauf-von-a-bis-z",
    title: "Komplettsanierung: Der Ablauf einer Haussanierung von A bis Z",
    excerpt:
      "Von der Entkernung bis zur schlüsselfertigen Übergabe: So läuft eine komplette Haussanierung Schritt für Schritt ab.",
    category: "Sanierung",
    tags: ["Komplettsanierung", "Ablauf", "Planung", "Wohnraum"],
    date: "2025-05-02",
    dateLabel: "2. Mai 2025",
    readMinutes: 6,
    image: "/images/blog-komplettsanierung.jpg",
    intro: [
      "Eine komplette Haussanierung ist ein großes Projekt – aber mit klarer Planung gut zu bewältigen. Entscheidend ist, dass alle Gewerke aufeinander abgestimmt sind und in der richtigen Reihenfolge ineinandergreifen.",
      "Dieser Überblick zeigt, welche Phasen eine Komplettsanierung durchläuft und worauf es dabei ankommt.",
    ],
    sections: [
      {
        heading: "1. Bestandsaufnahme und Planung",
        body: [
          "Am Anfang steht die ehrliche Prüfung des Ist-Zustands. Auf dieser Grundlage legen wir Umfang, Ausstattung und Ablauf fest und stimmen einen realistischen Zeit- und Kostenrahmen mit Ihnen ab.",
          "Je genauer die Planung, desto reibungsloser die Ausführung – und desto weniger böse Überraschungen später.",
        ],
      },
      {
        heading: "2. Entkernung und Rohbau",
        body: [
          "Alte, verschlissene Bauteile werden entfernt, anschließend schaffen Rohbauarbeiten die bauliche Grundlage. Erst jetzt zeigt sich manchmal der wahre Zustand der Substanz – ein Grund, hier sorgfältig zu arbeiten.",
        ],
      },
      {
        heading: "3. Ausbau aller Gewerke und Übergabe",
        body: [
          "Elektro, Heizung, Wasser, Sanitär, Innenausbau, Fassade und Dach greifen koordiniert ineinander. Zum Abschluss folgen Feinarbeiten und die schlüsselfertige Übergabe Ihres bezugsfertigen Objekts.",
          "Weil alles aus einer Hand kommt, behalten Sie den Überblick, ohne mehrere Firmen einzeln steuern zu müssen.",
        ],
      },
    ],
    faqs: [
      { q: "Wie lange dauert eine Komplettsanierung?", a: "Das hängt von Größe und Umfang ab. Nach der Bestandsaufnahme nennen wir Ihnen einen realistischen Zeitrahmen." },
      { q: "Kann ich während der Sanierung im Haus wohnen?", a: "Bei einer Komplettsanierung ist das meist nicht möglich – wir besprechen das ehrlich bei der Planung." },
      { q: "Übernehmen Sie wirklich alle Gewerke?", a: "Ja. Wir koordinieren und führen die nötigen Handwerke bis zur Übergabe aus." },
    ],
    cta: {
      title: "Denken Sie über eine Komplettsanierung nach?",
      text: "Lassen Sie uns Ihr Objekt gemeinsam ansehen – Sie erhalten ein klares, unverbindliches Angebot.",
    },
  },
  {
    slug: "fassadensanierung-wann-sie-sich-lohnt",
    title: "Fassadensanierung: Wann sie sich lohnt und worauf zu achten ist",
    excerpt:
      "Risse, Feuchtigkeit oder abblätternder Putz? Wir zeigen, wann eine Fassadensanierung sinnvoll ist und welche Vorteile sie bringt.",
    category: "Dach & Fassade",
    tags: ["Fassade", "Sanierung", "Wärmeschutz", "Werterhalt"],
    date: "2025-05-20",
    dateLabel: "20. Mai 2025",
    readMinutes: 5,
    image: "/images/blog-fassade.jpg",
    intro: [
      "Die Fassade ist die Schutzhülle Ihres Hauses und zugleich seine Visitenkarte. Sie ist dauerhaft Wind, Regen, Frost und UV-Strahlung ausgesetzt – und zeigt mit der Zeit entsprechende Spuren.",
      "Doch wann ist der richtige Zeitpunkt für eine Sanierung? Und was bringt sie außer einer schöneren Optik?",
    ],
    sections: [
      {
        heading: "Diese Anzeichen sprechen für eine Sanierung",
        body: [
          "Risse, abblätternder Putz, feuchte Stellen oder Algenbewuchs sind deutliche Warnsignale. Sie bedeuten, dass die Fassade ihre Schutzfunktion nicht mehr vollständig erfüllt.",
          "Wird nicht gehandelt, dringt Feuchtigkeit ins Mauerwerk – und aus einem überschaubaren Problem wird schnell eine aufwendige Instandsetzung.",
        ],
      },
      {
        heading: "Mehr als Optik: Schutz und Energie",
        body: [
          "Eine sanierte Fassade schützt die Bausubstanz und erhält den Wert der Immobilie. Im Zuge der Arbeiten lässt sich außerdem oft der Wärmeschutz verbessern – das kann die Heizkosten spürbar senken.",
        ],
      },
      {
        heading: "Gerüst und Dach gleich mitdenken",
        body: [
          "Da für Fassadenarbeiten ohnehin ein Gerüst nötig ist, bietet es sich an, Dach und weitere Außenarbeiten gleich mit einzuplanen. So sparen Sie Zeit und Kosten.",
        ],
      },
    ],
    faqs: [
      { q: "Woran erkenne ich, dass meine Fassade saniert werden muss?", a: "Typische Anzeichen sind Risse, abblätternder Putz, Feuchtigkeit und Algenbewuchs." },
      { q: "Verbessert eine Fassadensanierung die Energiebilanz?", a: "Häufig ja – im Zuge der Arbeiten lässt sich der Wärmeschutz sinnvoll mitverbessern." },
      { q: "Brauche ich dafür ein Gerüst?", a: "In der Regel ja. Wir stellen das passende Gerüst gleich mit." },
    ],
    cta: {
      title: "Ist Ihre Fassade in die Jahre gekommen?",
      text: "Wir prüfen den Zustand und zeigen Ihnen, welche Sanierung sich lohnt.",
    },
  },
  {
    slug: "dachsanierung-anzeichen-erneuerung",
    title: "Dachsanierung: 5 Anzeichen, dass Ihr Dach erneuert werden muss",
    excerpt:
      "Das Dach schützt das ganze Haus. An diesen Anzeichen erkennen Sie, dass eine Sanierung ansteht – bevor größere Schäden entstehen.",
    category: "Dach & Fassade",
    tags: ["Dach", "Sanierung", "Dämmung", "Feuchtigkeit"],
    date: "2025-06-05",
    dateLabel: "5. Juni 2025",
    readMinutes: 5,
    image: "/images/blog-dach.jpg",
    intro: [
      "Ein dichtes Dach schützt das gesamte Gebäude vor Witterung. Zeigt es Schwächen, sind schnell auch Dämmung, Decken und Mauerwerk betroffen – denn Feuchtigkeit wandert von oben nach unten.",
      "Diese fünf Anzeichen sollten Sie ernst nehmen.",
    ],
    sections: [
      {
        heading: "Sichtbare Schäden und Feuchtigkeit",
        body: [
          "Beschädigte oder verrutschte Ziegel, feuchte Flecken an der Decke im Obergeschoss und zugige Räume sind klare Hinweise. Oft zeigt sich der Schaden erst innen, wenn außen längst etwas nicht mehr stimmt.",
          "Wer hier zögert, riskiert Schimmel und Fäulnis an Holz und Bausubstanz – und damit deutlich höhere Reparaturkosten.",
        ],
      },
      {
        heading: "Alter und Energieverlust",
        body: [
          "Ein altes, undichtes Dach lässt wertvolle Heizwärme entweichen. Steigende Heizkosten können ein Hinweis darauf sein, dass Dämmung und Eindeckung nicht mehr zeitgemäß sind.",
        ],
      },
      {
        heading: "Chance: Dämmung und Ausbau",
        body: [
          "Wer ohnehin am Dach arbeitet, sollte über eine gute Dämmung und einen möglichen Dachausbau nachdenken. Beides schafft entweder niedrigere Heizkosten oder zusätzlichen Wohnraum.",
        ],
      },
    ],
    faqs: [
      { q: "Wie erkenne ich Handlungsbedarf am Dach?", a: "Feuchte Flecken, zugige Räume, beschädigte Ziegel und steigende Heizkosten sind deutliche Anzeichen." },
      { q: "Kann man das Dach im Zuge der Sanierung ausbauen?", a: "Ja, ein Dachausbau zu Wohnraum lässt sich gut mit den Dacharbeiten verbinden." },
      { q: "Gehört das Gerüst dazu?", a: "Wir stellen das passende Gerüst für sichere Dacharbeiten gleich mit." },
    ],
    cta: {
      title: "Unsicher, ob Ihr Dach noch dicht ist?",
      text: "Wir prüfen den Zustand und beraten Sie ehrlich zur nötigen Sanierung.",
    },
  },
  {
    slug: "badsanierung-richtig-planen",
    title: "Badsanierung: So planen Sie Ihr neues Bad richtig",
    excerpt:
      "Ein neues Bad steigert Komfort und Wert. Mit der richtigen Planung wird die Sanierung sauber und termingerecht fertig.",
    category: "Innenausbau",
    tags: ["Bad", "Sanierung", "Sanitär", "barrierearm"],
    date: "2025-06-22",
    dateLabel: "22. Juni 2025",
    readMinutes: 5,
    image: "/images/blog-bad.jpg",
    intro: [
      "Das Bad gehört zu den am intensivsten genutzten Räumen im Haus – und altert entsprechend. Eine Badsanierung macht daraus wieder einen modernen, funktionalen Raum.",
      "Damit alles reibungslos läuft, kommt es auf gute Planung und aufeinander abgestimmte Gewerke an.",
    ],
    sections: [
      {
        heading: "Aufteilung und Ausstattung festlegen",
        body: [
          "Zu Beginn klären wir gemeinsam, wie das Bad aufgeteilt sein soll, welche Ausstattung Sie wünschen und welche Materialien infrage kommen. Auf Wunsch planen wir barrierearm – etwa mit bodengleicher Dusche.",
          "Eine durchdachte Planung verhindert teure Änderungen während der Bauphase.",
        ],
      },
      {
        heading: "Versteckte Schwachstellen mitdenken",
        body: [
          "Hinter alten Fliesen stecken oft veraltete Leitungen und unbemerkte Feuchtigkeit. Eine Sanierung ist die beste Gelegenheit, solche Schwachstellen dauerhaft zu beheben.",
        ],
      },
      {
        heading: "Alle Gewerke aus einer Hand",
        body: [
          "Sanitär, Fliesen und Ausbau greifen bei einer Badsanierung eng ineinander. Kommen sie aus einer Hand, wird das Bad sauber und termingerecht fertig.",
        ],
      },
    ],
    faqs: [
      { q: "Wie lange dauert eine Badsanierung?", a: "Je nach Größe und Umfang – nach der Planung nennen wir Ihnen einen realistischen Zeitrahmen." },
      { q: "Ist ein barrierearmes Bad möglich?", a: "Ja, auf Wunsch planen wir Ihr Bad barrierearm und zukunftssicher." },
      { q: "Kann ich Fliesen und Ausstattung selbst wählen?", a: "Selbstverständlich. Wir beraten Sie und setzen Ihre Auswahl um." },
    ],
    cta: {
      title: "Träumen Sie von einem neuen Bad?",
      text: "Wir planen und sanieren Ihr Bad komplett aus einer Hand – von der Fliese bis zur fertigen Ausstattung.",
    },
  },
  {
    slug: "elektroinstallation-modernisieren-altbau",
    title: "Elektroinstallation modernisieren: Sicherheit und Komfort im Altbau",
    excerpt:
      "Veraltete Elektrik ist ein Sicherheitsrisiko. Wann sich eine Modernisierung lohnt und worauf Sie achten sollten.",
    category: "Haustechnik",
    tags: ["Elektro", "Modernisierung", "Sicherheit", "Altbau"],
    date: "2025-07-04",
    dateLabel: "4. Juli 2025",
    readMinutes: 4,
    image: "/images/blog-elektro.jpg",
    intro: [
      "Die Elektroinstallation ist das Nervensystem eines Hauses. Gerade in älteren Gebäuden stößt sie oft an ihre Grenzen: zu wenige Steckdosen, veraltete Leitungen und eine Verteilung, die den heutigen Anforderungen nicht mehr gerecht wird.",
      "Eine Modernisierung bringt spürbar mehr Sicherheit und Komfort.",
    ],
    sections: [
      {
        heading: "Sicherheit zuerst",
        body: [
          "Veraltete Leitungen und überlastete Stromkreise können zur Gefahr werden. Eine fachgerechte, moderne Elektrik reduziert Risiken im Haushalt deutlich.",
          "Häufig auslösende Sicherungen sind ein Warnsignal, das man nicht ignorieren sollte.",
        ],
      },
      {
        heading: "Der richtige Zeitpunkt",
        body: [
          "Am wirtschaftlichsten ist die Erneuerung, solange Wände und Böden im Zuge einer Sanierung ohnehin geöffnet sind. Dann lassen sich Leitungen ohne zusätzliches Aufstemmen verlegen.",
        ],
      },
      {
        heading: "Komfort und Zukunftssicherheit",
        body: [
          "Ausreichend Steckdosen, durchdachte Schaltungen und eine moderne Verteilung erleichtern den Alltag und sind auf kommende Anforderungen vorbereitet.",
        ],
      },
    ],
    faqs: [
      { q: "Wann sollte die Elektrik modernisiert werden?", a: "Spätestens bei veralteten Leitungen, zu wenigen Anschlüssen oder häufig auslösenden Sicherungen – idealerweise im Zuge einer Sanierung." },
      { q: "Muss dafür alles aufgestemmt werden?", a: "Am wenigsten aufwendig ist die Erneuerung bei offenen Wänden. Wir planen den besten Weg mit Ihnen." },
      { q: "Macht ihr auch einzelne Räume?", a: "Ja, von einzelnen Räumen bis zur Elektrik im ganzen Haus." },
    ],
    cta: {
      title: "Ist Ihre Elektrik noch auf dem neuesten Stand?",
      text: "Wir modernisieren Ihre Installation fachgerecht – für mehr Sicherheit und Komfort.",
    },
  },
  {
    slug: "heizung-wasser-sanitaer-modernisierung",
    title: "Heizung, Wasser & Sanitär: Wann sich eine Modernisierung lohnt",
    excerpt:
      "Die HWS-Technik hält Ihr Zuhause warm und versorgt. Wann sich eine Erneuerung auszahlt und welche Vorteile sie bringt.",
    category: "Haustechnik",
    tags: ["Heizung", "Sanitär", "Wasser", "Effizienz"],
    date: "2025-07-18",
    dateLabel: "18. Juli 2025",
    readMinutes: 4,
    image: "/images/blog-hws.jpg",
    intro: [
      "Unter HWS fassen wir Heizung, Wasser und Sanitär zusammen – die zentrale Haustechnik. Sie sorgt für Wärme, Warmwasser und eine funktionierende Versorgung im ganzen Haus.",
      "Mit der Zeit lohnt sich eine Modernisierung gleich mehrfach.",
    ],
    sections: [
      {
        heading: "Niedrigere Betriebskosten",
        body: [
          "Moderne Heizungs- und Wassertechnik arbeitet effizienter und spart im laufenden Betrieb. Veraltete Anlagen verbrauchen dagegen unnötig viel.",
        ],
      },
      {
        heading: "Weniger Störungen und Schäden",
        body: [
          "Alte Leitungen können undicht werden – Feuchtigkeit und Folgeschäden drohen. Neue Technik ist deutlich weniger anfällig für Ausfälle und Reparaturen.",
          "Fällt die Heizung ausgerechnet im Winter aus, wird der Austausch schnell zum Notfall.",
        ],
      },
      {
        heading: "Alles abgestimmt aus einer Hand",
        body: [
          "Weil Heizung, Wasser und Sanitär eng zusammenhängen, ist es sinnvoll, sie gemeinsam zu planen – besonders im Rahmen einer Bad- oder Haussanierung.",
        ],
      },
    ],
    faqs: [
      { q: "Was bedeutet HWS?", a: "HWS steht für Heizung, Wasser und Sanitär – die zentrale Haustechnik, die wir aus einer Hand übernehmen." },
      { q: "Wann lohnt sich eine Modernisierung?", a: "Bei hohem Verbrauch, häufigen Störungen oder alten Leitungen zahlt sich eine Erneuerung meist schnell aus." },
      { q: "Übernehmt ihr auch die Badinstallation?", a: "Ja, die Sanitärinstallation gehört dazu – oft im Rahmen einer Badsanierung." },
    ],
    cta: {
      title: "Verbraucht Ihre Haustechnik zu viel?",
      text: "Wir prüfen Heizung, Wasser und Sanitär und modernisieren, wo es sich lohnt.",
    },
  },
  {
    slug: "dachgeschoss-ausbauen-wohnraum-gewinnen",
    title: "Innenausbau: Dachgeschoss ausbauen und Wohnraum gewinnen",
    excerpt:
      "Ungenutzter Dachraum ist verschenkter Wohnraum. So wird aus dem Dachboden ein wohnlicher Raum.",
    category: "Innenausbau",
    tags: ["Innenausbau", "Dachgeschoss", "Wohnraum", "Dämmung"],
    date: "2025-08-01",
    dateLabel: "1. August 2025",
    readMinutes: 5,
    image: "/images/blog-innenausbau.jpg",
    intro: [
      "Der Ausbau des Dachgeschosses ist eine der lohnendsten Maßnahmen überhaupt: Ohne anzubauen entsteht wertvoller zusätzlicher Wohnraum – ideal als Schlaf-, Arbeits- oder Kinderzimmer.",
      "Damit daraus ein wirklich wohnlicher Raum wird, kommt es auf mehrere Faktoren an.",
    ],
    sections: [
      {
        heading: "Dämmung und Raumklima",
        body: [
          "Eine gute Dämmung ist beim Dachausbau entscheidend – für angenehme Temperaturen im Sommer wie im Winter und für niedrige Heizkosten.",
          "Auch der Schallschutz lässt sich beim Innenausbau gezielt verbessern.",
        ],
      },
      {
        heading: "Trockenbau, Böden und Oberflächen",
        body: [
          "Wände und Decken im Trockenbau, passende Böden, Türen und Oberflächen machen aus dem Rohraum eine fertige Wohnfläche – ganz nach Ihren Vorstellungen.",
        ],
      },
      {
        heading: "Individuell geplant",
        body: [
          "Wir arbeiten sauber und abgestimmt – auf Wunsch als einzelne Leistung oder als Teil einer kompletten Sanierung.",
        ],
      },
    ],
    faqs: [
      { q: "Lohnt sich ein Dachausbau?", a: "In der Regel ja: Er schafft zusätzlichen Wohnraum und steigert den Wert der Immobilie – ohne Anbau." },
      { q: "Ist eine Dämmung notwendig?", a: "Ja, eine gute Dämmung ist für Wohnkomfort und Heizkosten entscheidend." },
      { q: "Macht ihr auch nur den Innenausbau?", a: "Ja, als einzelne Leistung oder als Teil einer Gesamtsanierung." },
    ],
    cta: {
      title: "Schlummert unter Ihrem Dach ungenutzter Raum?",
      text: "Wir bauen Ihr Dachgeschoss zu wohnlichem Raum aus – von der Dämmung bis zur fertigen Oberfläche.",
    },
  },
  {
    slug: "alle-gewerke-aus-einer-hand-vorteile",
    title: "Alle Gewerke aus einer Hand: Die Vorteile eines Bauunternehmens",
    excerpt:
      "Warum es sich lohnt, Sanierung und Ausbau von einem Partner koordinieren zu lassen, statt viele Firmen einzeln zu beauftragen.",
    category: "Ratgeber",
    tags: ["Bauunternehmen", "Koordination", "Sanierung", "Planung"],
    date: "2025-08-12",
    dateLabel: "12. August 2025",
    readMinutes: 4,
    image: "/images/blog-gewerke.jpg",
    intro: [
      "Bei einer Sanierung sind schnell viele Gewerke beteiligt: Gerüst, Rohbau, Elektro, Heizung, Wasser, Sanitär, Innenausbau, Fassade und Dach. Wer diese einzeln beauftragt, muss Termine, Reihenfolge und Schnittstellen selbst im Griff behalten.",
      "Ein Bauunternehmen als Generalist übernimmt genau diese Koordination – mit spürbaren Vorteilen.",
    ],
    sections: [
      {
        heading: "Ein Ansprechpartner statt vieler",
        body: [
          "Sie haben einen festen Ansprechpartner über den gesamten Ablauf, statt mit mehreren Firmen einzeln zu verhandeln. Das spart Zeit und Nerven.",
        ],
      },
      {
        heading: "Abgestimmte Abläufe",
        body: [
          "Wenn alle Gewerke von Anfang an aufeinander abgestimmt sind, greifen die Arbeiten sauber ineinander. Das vermeidet doppelte Arbeit, verkürzt die Bauzeit und hält die Kosten planbar.",
        ],
      },
      {
        heading: "Ein Ergebnis aus einem Guss",
        body: [
          "Statt einzelner Insellösungen entsteht ein stimmiges Gesamtergebnis – und die Verantwortung liegt an einer Stelle.",
        ],
      },
    ],
    faqs: [
      { q: "Was ist der Vorteil gegenüber Einzelbeauftragung?", a: "Weniger Koordinationsaufwand, abgestimmte Abläufe, planbare Kosten und ein fester Ansprechpartner." },
      { q: "Übernehmt ihr auch nur einzelne Gewerke?", a: "Ja. Sie können einzelne Leistungen oder das Gesamtprojekt beauftragen." },
      { q: "Wer haftet für das Ergebnis?", a: "Die Verantwortung liegt gebündelt bei uns als ausführendem Bauunternehmen." },
    ],
    cta: {
      title: "Ein Projekt, viele Gewerke?",
      text: "Wir koordinieren alles aus einer Hand – Sie behalten den Überblick und einen Ansprechpartner.",
    },
  },
  {
    slug: "sanierung-planen-kosten-ablauf",
    title: "Sanierung planen: Kosten, Ablauf und worauf es ankommt",
    excerpt:
      "Wie Sie eine Sanierung sinnvoll planen, welche Faktoren die Kosten bestimmen und wie ein realistischer Ablauf aussieht.",
    category: "Ratgeber",
    tags: ["Sanierung", "Kosten", "Planung", "Ablauf"],
    date: "2025-08-20",
    dateLabel: "20. August 2025",
    readMinutes: 6,
    image: "/images/blog-planen.jpg",
    intro: [
      "Eine gute Sanierung beginnt nicht mit dem ersten Handschlag, sondern mit der Planung. Wer Umfang, Ablauf und Kosten von Anfang an klärt, spart sich später Ärger und teure Überraschungen.",
      "Dieser Ratgeber zeigt, worauf es bei der Planung ankommt.",
    ],
    sections: [
      {
        heading: "Was die Kosten bestimmt",
        body: [
          "Die Kosten hängen vor allem von Umfang, Zustand der Substanz, gewählten Materialien und der Anzahl der Gewerke ab. Eine ehrliche Bestandsaufnahme ist die Grundlage für ein belastbares Angebot.",
          "Wichtig: Über Jahre verteiltes Stückwerk kostet insgesamt oft mehr als eine geplante Gesamtmaßnahme.",
        ],
      },
      {
        heading: "Ein realistischer Ablauf",
        body: [
          "Nach Bestandsaufnahme und Planung folgen Ausführung und Übergabe. Entscheidend ist die richtige Reihenfolge der Gewerke – damit nichts doppelt gemacht werden muss.",
        ],
      },
      {
        heading: "Frühzeitig handeln lohnt sich",
        body: [
          "Kleine Mängel wie Feuchtigkeit oder Risse werden mit der Zeit größer und teurer. Wer früh handelt, hält den Aufwand überschaubar.",
        ],
      },
    ],
    faqs: [
      { q: "Wie erhalte ich ein belastbares Angebot?", a: "Über eine ehrliche Bestandsaufnahme vor Ort. Danach erstellen wir ein unverbindliches Angebot mit klarem Umfang." },
      { q: "Ist eine Gesamtsanierung günstiger als Stückwerk?", a: "Oft ja – eine geplante Gesamtmaßnahme vermeidet doppelte Arbeit und Reibungsverluste." },
      { q: "Sollte man mit der Sanierung warten?", a: "Bei sichtbaren Mängeln selten. Frühes Handeln hält den Aufwand überschaubar." },
    ],
    cta: {
      title: "Sie planen eine Sanierung?",
      text: "Wir kommen vorbei, sehen uns alles an und erstellen ein klares, unverbindliches Angebot.",
    },
  },
  {
    slug: "energetische-sanierung-heizkosten-senken",
    title: "Energetische Sanierung: Heizkosten senken und Wert steigern",
    excerpt:
      "Dämmung, Fenster und moderne Technik: Wie eine energetische Sanierung Ihre Heizkosten senkt und den Wert Ihrer Immobilie erhöht.",
    category: "Sanierung",
    tags: ["Energie", "Sanierung", "Dämmung", "Werterhalt"],
    date: "2026-07-10",
    dateLabel: "10. Juli 2026",
    readMinutes: 5,
    image: "/images/blog-energetisch.jpg",
    intro: [
      "Steigende Energiekosten machen die energetische Sanierung für viele Hausbesitzer interessant. Wer heute in Dämmung und moderne Technik investiert, spart langfristig – und wertet die Immobilie zugleich auf.",
      "Welche Maßnahmen sinnvoll sind und wie Sie vorgehen, zeigt dieser Beitrag.",
    ],
    sections: [
      {
        heading: "Wo Wärme verloren geht",
        body: [
          "Die größten Wärmeverluste entstehen oft an Fassade, Dach, Fenstern und einer veralteten Heizung. Eine ehrliche Bestandsaufnahme zeigt, wo sich Maßnahmen am meisten lohnen.",
          "Häufig ist ein Bündel aus mehreren Schritten wirtschaftlicher als eine Einzelmaßnahme.",
        ],
      },
      {
        heading: "Schritt für Schritt statt alles auf einmal",
        body: [
          "Eine energetische Sanierung lässt sich auch etappenweise umsetzen – wichtig ist, dass die Schritte sinnvoll aufeinander abgestimmt sind, damit sie später zusammenpassen.",
        ],
      },
    ],
    faqs: [
      { q: "Lohnt sich eine energetische Sanierung?", a: "In der Regel ja – sie senkt die Betriebskosten und steigert den Wert der Immobilie. Die konkrete Rechnung hängt vom Zustand ab." },
      { q: "Muss ich alles auf einmal machen?", a: "Nein, eine schrittweise Umsetzung ist möglich, sollte aber gut geplant sein." },
      { q: "Gibt es Fördermöglichkeiten?", a: "Für energetische Maßnahmen bestehen häufig Förderprogramme. Lassen Sie sich dazu individuell beraten." },
    ],
    cta: {
      title: "Wollen Sie Ihre Heizkosten senken?",
      text: "Wir sehen uns Ihr Gebäude an und zeigen, welche Maßnahmen sich für Sie lohnen.",
    },
  },
  {
    slug: "fassadendaemmung-kosten-nutzen",
    title: "Fassadendämmung: Kosten, Nutzen und Möglichkeiten",
    excerpt:
      "Eine gedämmte Fassade spart Energie und schützt die Bausubstanz. Wir erklären die gängigen Möglichkeiten und worauf es ankommt.",
    category: "Dach & Fassade",
    tags: ["Dämmung", "Fassade", "Energie", "Sanierung"],
    date: "2026-06-18",
    dateLabel: "18. Juni 2026",
    readMinutes: 4,
    image: "/images/blog-daemmung.jpg",
    intro: [
      "Über eine ungedämmte Fassade geht viel Heizwärme verloren. Eine Fassadendämmung reduziert diesen Verlust spürbar – und verbessert gleichzeitig den Schutz vor Witterung.",
      "Was dabei möglich ist und worauf Sie achten sollten, lesen Sie hier.",
    ],
    sections: [
      {
        heading: "Warum sich Dämmung lohnt",
        body: [
          "Eine gedämmte Fassade hält die Wärme im Haus, sorgt für ein angenehmeres Raumklima und schützt das Mauerwerk. Das senkt die Heizkosten und erhält den Wert der Immobilie.",
        ],
      },
      {
        heading: "Am besten im Zuge anderer Arbeiten",
        body: [
          "Da für Fassadenarbeiten ohnehin ein Gerüst nötig ist, bietet es sich an, Dämmung, Anstrich und weitere Außenarbeiten zusammen zu planen. Das spart Zeit und Kosten.",
        ],
      },
    ],
    faqs: [
      { q: "Senkt eine Fassadendämmung wirklich die Heizkosten?", a: "Ja, sie reduziert Wärmeverluste über die Außenwände spürbar." },
      { q: "Wann ist der beste Zeitpunkt?", a: "Ideal ist es, die Dämmung mit einer ohnehin anstehenden Fassadensanierung zu verbinden." },
      { q: "Übernehmt ihr Gerüst und Fassade zusammen?", a: "Ja, beides bekommen Sie bei uns aus einer Hand." },
    ],
    cta: {
      title: "Denken Sie über eine Fassadendämmung nach?",
      text: "Wir beraten Sie zu den Möglichkeiten und führen die Arbeiten fachgerecht aus.",
    },
  },
  {
    slug: "trockenbau-raeume-flexibel-gestalten",
    title: "Trockenbau: Räume flexibel gestalten und Komfort verbessern",
    excerpt:
      "Mit Trockenbau lassen sich Räume neu aufteilen, Decken abhängen und Schall- sowie Wärmeschutz verbessern – schnell und sauber.",
    category: "Innenausbau",
    tags: ["Trockenbau", "Innenausbau", "Schallschutz", "Umbau"],
    date: "2026-05-22",
    dateLabel: "22. Mai 2026",
    readMinutes: 4,
    image: "/images/blog-trockenbau.jpg",
    intro: [
      "Trockenbau ist eines der vielseitigsten Werkzeuge im Innenausbau. Damit lassen sich Räume neu aufteilen, Nischen schaffen und Decken gestalten – ohne aufwendige Maurerarbeiten.",
      "Wir zeigen, was mit Trockenbau möglich ist.",
    ],
    sections: [
      {
        heading: "Flexibel und sauber",
        body: [
          "Neue Wände, abgehängte Decken oder Vorwandinstallationen entstehen im Trockenbau schnell und mit vergleichsweise wenig Schmutz. Das macht ihn ideal für Umbauten im bewohnten Zustand.",
        ],
      },
      {
        heading: "Mehr als nur Wände",
        body: [
          "In den Aufbau lassen sich Dämmung für besseren Schall- und Wärmeschutz sowie Leitungen elegant integrieren. So verbindet Trockenbau Gestaltung mit Funktion.",
        ],
      },
    ],
    faqs: [
      { q: "Kann ich mit Trockenbau Räume teilen?", a: "Ja, neue Wände im Trockenbau sind eine schnelle und saubere Lösung, um Räume neu aufzuteilen." },
      { q: "Verbessert Trockenbau den Schallschutz?", a: "Mit passender Dämmung im Aufbau lässt sich der Schallschutz deutlich verbessern." },
      { q: "Geht das auch im bewohnten Haus?", a: "Ja, Trockenbau ist vergleichsweise sauber und eignet sich gut für Umbauten im Bestand." },
    ],
    cta: {
      title: "Möchten Sie Räume neu gestalten?",
      text: "Wir setzen Ihre Ideen im Trockenbau sauber und passgenau um.",
    },
  },
  {
    slug: "feuchtigkeit-im-mauerwerk",
    title: "Feuchtigkeit im Mauerwerk: Ursachen erkennen und beheben",
    excerpt:
      "Feuchte Wände sind mehr als ein Schönheitsfehler. Wir erklären typische Ursachen und warum schnelles Handeln wichtig ist.",
    category: "Ratgeber",
    tags: ["Feuchtigkeit", "Mauerwerk", "Sanierung", "Schimmel"],
    date: "2026-04-30",
    dateLabel: "30. April 2026",
    readMinutes: 5,
    image: "/images/blog-feuchtigkeit.jpg",
    intro: [
      "Feuchte Stellen an Wänden, muffiger Geruch oder abblätternder Putz sind Warnsignale. Feuchtigkeit im Mauerwerk sollte man ernst nehmen, denn sie schädigt die Bausubstanz und kann zu Schimmel führen.",
      "Wo die Ursachen liegen und was hilft, erfahren Sie hier.",
    ],
    sections: [
      {
        heading: "Typische Ursachen",
        body: [
          "Undichte Stellen an Dach oder Fassade, defekte Leitungen, aufsteigende Feuchtigkeit oder unzureichende Abdichtung können die Ursache sein. Wichtig ist, die Quelle zu finden, bevor man die Folgen beseitigt.",
        ],
      },
      {
        heading: "Warum schnelles Handeln zählt",
        body: [
          "Bleibt Feuchtigkeit unbehandelt, breitet sie sich aus und beschädigt Putz, Dämmung und Mauerwerk. Schimmel kann zudem zum Gesundheitsrisiko werden. Früh handeln hält den Aufwand überschaubar.",
        ],
      },
    ],
    faqs: [
      { q: "Woran erkenne ich Feuchtigkeit im Mauerwerk?", a: "An feuchten Flecken, muffigem Geruch, abblätterndem Putz und in schweren Fällen an Schimmel." },
      { q: "Kann ich das selbst beheben?", a: "Wichtig ist, zuerst die Ursache zu finden. Wir prüfen den Zustand und gehen das Problem an der Wurzel an." },
      { q: "Ist Feuchtigkeit gefährlich?", a: "Sie schädigt die Bausubstanz und kann Schimmel begünstigen – daher sollte man frühzeitig handeln." },
    ],
    cta: {
      title: "Haben Sie feuchte Wände?",
      text: "Wir finden die Ursache und beheben das Problem fachgerecht – bevor größere Schäden entstehen.",
    },
  },
  {
    slug: "altbausanierung-worauf-achten",
    title: "Altbausanierung: Besonderheiten und worauf Sie achten sollten",
    excerpt:
      "Altbauten haben Charme – und ihre Tücken. Was eine Altbausanierung besonders macht und wie Sie sie erfolgreich angehen.",
    category: "Sanierung",
    tags: ["Altbau", "Sanierung", "Bausubstanz", "Modernisierung"],
    date: "2026-04-05",
    dateLabel: "5. April 2026",
    readMinutes: 6,
    image: "/images/blog-altbau.jpg",
    intro: [
      "Ein Altbau hat oft Charakter, den moderne Häuser nicht bieten. Doch bei der Sanierung sind einige Besonderheiten zu beachten – von der Substanz bis zur Haustechnik.",
      "Dieser Beitrag gibt einen Überblick.",
    ],
    sections: [
      {
        heading: "Die Substanz genau prüfen",
        body: [
          "Bei Altbauten zeigt sich der wahre Zustand oft erst, wenn man genauer hinschaut. Eine sorgfältige Bestandsaufnahme ist daher besonders wichtig, um Überraschungen zu vermeiden.",
        ],
      },
      {
        heading: "Technik auf den neuesten Stand bringen",
        body: [
          "Elektrik, Heizung, Wasser und Sanitär entsprechen im Altbau oft nicht mehr heutigen Anforderungen. Eine Modernisierung bringt Sicherheit, Komfort und Effizienz.",
          "Wir stimmen die Gewerke so ab, dass Charme und moderne Technik zusammenpassen.",
        ],
      },
    ],
    faqs: [
      { q: "Sind Altbausanierungen aufwendiger?", a: "Sie erfordern oft mehr Sorgfalt bei der Bestandsaufnahme, weil sich der Zustand erst genauer zeigt." },
      { q: "Kann man den Charme erhalten?", a: "Ja. Wir planen so, dass Charakter erhalten bleibt und moderne Technik dennoch integriert wird." },
      { q: "Übernehmt ihr alle Gewerke?", a: "Ja, von der Substanz bis zur Haustechnik koordinieren wir alles aus einer Hand." },
    ],
    cta: {
      title: "Besitzen Sie einen Altbau?",
      text: "Wir sehen uns die Substanz an und planen die Sanierung mit dem nötigen Fingerspitzengefühl.",
    },
  },
  {
    slug: "fenster-tueren-erneuern",
    title: "Fenster und Türen erneuern: Mehr Effizienz und Sicherheit",
    excerpt:
      "Neue Fenster und Türen sparen Energie und erhöhen die Sicherheit. Wann sich der Austausch lohnt und was er bringt.",
    category: "Innenausbau",
    tags: ["Fenster", "Türen", "Energie", "Sicherheit"],
    date: "2026-03-12",
    dateLabel: "12. März 2026",
    readMinutes: 4,
    image: "/images/blog-fenster.jpg",
    intro: [
      "Alte Fenster und Türen sind häufig Schwachstellen: Sie lassen Wärme entweichen und bieten Einbrechern leichteres Spiel. Ein Austausch bringt gleich mehrere Vorteile.",
      "Worauf es dabei ankommt, lesen Sie hier.",
    ],
    sections: [
      {
        heading: "Energie sparen",
        body: [
          "Moderne Fenster mit guter Verglasung reduzieren Wärmeverluste deutlich. Das senkt die Heizkosten und verbessert das Raumklima – keine Zugluft mehr an kalten Tagen.",
        ],
      },
      {
        heading: "Mehr Sicherheit und Komfort",
        body: [
          "Aktuelle Fenster und Türen bieten besseren Einbruchschutz und mehr Schallschutz. Der Austausch lässt sich gut in eine Sanierung integrieren.",
        ],
      },
    ],
    faqs: [
      { q: "Wann sollte man Fenster erneuern?", a: "Bei Zugluft, Kondenswasser, schlechter Dämmwirkung oder veralteter Sicherheit lohnt sich der Austausch." },
      { q: "Bringt das wirklich Energieersparnis?", a: "Ja, moderne Verglasung reduziert Wärmeverluste über Fenster und Türen deutlich." },
      { q: "Erhöht sich die Sicherheit?", a: "Aktuelle Beschläge und Verglasungen bieten spürbar besseren Einbruchschutz." },
    ],
    cta: {
      title: "Zieht es an Ihren Fenstern?",
      text: "Wir erneuern Fenster und Türen für mehr Effizienz, Sicherheit und Komfort.",
    },
  },
  {
    slug: "bodenbelaege-im-vergleich",
    title: "Bodenbeläge im Vergleich: Welcher Boden passt zu welchem Raum?",
    excerpt:
      "Fliesen, Vinyl, Laminat oder Parkett? Ein Überblick, welcher Bodenbelag sich für welchen Raum eignet.",
    category: "Innenausbau",
    tags: ["Boden", "Innenausbau", "Material", "Wohnkomfort"],
    date: "2026-02-20",
    dateLabel: "20. Februar 2026",
    readMinutes: 5,
    image: "/images/blog-boden.jpg",
    intro: [
      "Der Bodenbelag prägt Optik und Wohngefühl eines Raumes maßgeblich – und muss zugleich zur Nutzung passen. Küche und Bad stellen andere Anforderungen als Wohn- oder Schlafzimmer.",
      "Dieser Überblick hilft bei der Orientierung.",
    ],
    sections: [
      {
        heading: "Auf die Nutzung kommt es an",
        body: [
          "In Feuchträumen wie Bad und Küche sind robuste, wasserunempfindliche Beläge sinnvoll. In Wohnräumen stehen Behaglichkeit und Optik stärker im Vordergrund.",
        ],
      },
      {
        heading: "Aufbau und Verlegung",
        body: [
          "Entscheidend ist nicht nur der Belag selbst, sondern auch ein sauberer Unterbau. Wir sorgen für den passenden Aufbau und eine fachgerechte Verlegung.",
        ],
      },
    ],
    faqs: [
      { q: "Welcher Boden eignet sich fürs Bad?", a: "Robuste, wasserunempfindliche Beläge sind hier die richtige Wahl." },
      { q: "Ist der Unterbau wichtig?", a: "Ja, ein sauberer Unterbau ist entscheidend für ein dauerhaft gutes Ergebnis." },
      { q: "Übernehmt ihr die Verlegung?", a: "Ja, vom Unterbau bis zum fertigen Boden – im Rahmen des Innenausbaus." },
    ],
    cta: {
      title: "Planen Sie einen neuen Boden?",
      text: "Wir beraten Sie zur passenden Wahl und übernehmen Aufbau und Verlegung.",
    },
  },
  {
    slug: "rohbau-tragende-grundlage",
    title: "Rohbau: Die tragende Grundlage jedes Bauprojekts",
    excerpt:
      "Der Rohbau bestimmt die Statik und Qualität eines Gebäudes. Warum sorgfältige Arbeit hier über alles Weitere entscheidet.",
    category: "Sanierung",
    tags: ["Rohbau", "Bau", "Statik", "Grundlage"],
    date: "2026-01-28",
    dateLabel: "28. Januar 2026",
    readMinutes: 4,
    image: "/images/blog-rohbau.jpg",
    intro: [
      "Der Rohbau ist das Skelett eines Gebäudes – er trägt alles, was danach kommt. Fehler hier lassen sich später kaum noch korrigieren, deshalb ist sorgfältige Arbeit besonders wichtig.",
      "Was den Rohbau ausmacht, erklären wir hier.",
    ],
    sections: [
      {
        heading: "Solide von Anfang an",
        body: [
          "Wände, Decken und tragende Elemente müssen exakt und dauerhaft ausgeführt sein. Eine saubere Grundlage macht alle folgenden Gewerke einfacher und sicherer.",
        ],
      },
      {
        heading: "Teil der Gesamtsanierung",
        body: [
          "Bei umfangreichen Sanierungen sind Rohbauarbeiten oft der erste Schritt nach der Entkernung. Wir stimmen sie mit den weiteren Gewerken ab.",
        ],
      },
    ],
    faqs: [
      { q: "Warum ist der Rohbau so wichtig?", a: "Er bildet die tragende Grundlage – Fehler lassen sich später kaum korrigieren." },
      { q: "Gehört der Rohbau zur Sanierung?", a: "Bei umfangreichen Sanierungen ja, oft als erster Schritt nach der Entkernung." },
      { q: "Koordiniert ihr die weiteren Arbeiten?", a: "Ja, wir stimmen den Rohbau mit allen folgenden Gewerken ab." },
    ],
    cta: {
      title: "Steht bei Ihnen ein Bauprojekt an?",
      text: "Wir schaffen eine solide Grundlage und koordinieren die weiteren Schritte für Sie.",
    },
  },
  {
    slug: "foerdermittel-sanierung-ueberblick",
    title: "Fördermittel für die Sanierung: Ein Überblick",
    excerpt:
      "Für viele Sanierungsmaßnahmen gibt es Fördermöglichkeiten. Ein grundlegender Überblick, wie Sie das Thema angehen.",
    category: "Ratgeber",
    tags: ["Förderung", "Sanierung", "Energie", "Planung"],
    date: "2025-12-15",
    dateLabel: "15. Dezember 2025",
    readMinutes: 4,
    image: "/images/blog-foerderung.jpg",
    intro: [
      "Sanierungen – besonders energetische – sind eine Investition. Die gute Nachricht: Für viele Maßnahmen gibt es Fördermöglichkeiten, die die Kosten spürbar reduzieren können.",
      "Dieser Beitrag gibt einen groben Überblick. Für die konkrete Situation empfehlen wir eine individuelle Beratung.",
    ],
    sections: [
      {
        heading: "Frühzeitig informieren",
        body: [
          "Wichtig ist, sich vor Beginn der Arbeiten über mögliche Förderungen zu informieren, da Anträge oft vor Baubeginn gestellt werden müssen.",
        ],
      },
      {
        heading: "Beratung nutzen",
        body: [
          "Welche Förderung im Einzelfall passt, hängt von Maßnahme, Gebäude und aktuellen Programmen ab. Eine fachliche Energieberatung schafft hier Klarheit.",
          "Wir konzentrieren uns auf die fachgerechte Ausführung – zur Förderung sollten Sie sich individuell beraten lassen.",
        ],
      },
    ],
    faqs: [
      { q: "Gibt es Förderung für Sanierungen?", a: "Für viele – besonders energetische – Maßnahmen bestehen Förderprogramme. Die Details ändern sich jedoch, daher ist eine aktuelle Beratung sinnvoll." },
      { q: "Wann muss ich den Antrag stellen?", a: "Oft vor Baubeginn. Informieren Sie sich daher frühzeitig." },
      { q: "Berät ihr zur Förderung?", a: "Wir führen die Arbeiten fachgerecht aus; zur konkreten Förderung empfehlen wir eine spezialisierte Beratung." },
    ],
    cta: {
      title: "Planen Sie eine geförderte Sanierung?",
      text: "Wir übernehmen die fachgerechte Ausführung – sprechen Sie uns frühzeitig an.",
    },
  },
  {
    slug: "baustellenplanung-reibungslos",
    title: "Baustellenplanung: So läuft Ihr Projekt reibungslos",
    excerpt:
      "Gute Planung ist der halbe Erfolg. Wie eine durchdachte Baustellenplanung Zeit, Kosten und Nerven spart.",
    category: "Ratgeber",
    tags: ["Planung", "Ablauf", "Koordination", "Baustelle"],
    date: "2025-11-20",
    dateLabel: "20. November 2025",
    readMinutes: 4,
    image: "/images/blog-planung.jpg",
    intro: [
      "Ein Bauprojekt besteht aus vielen Schritten, die ineinandergreifen müssen. Ohne klare Planung entstehen Wartezeiten, Doppelarbeit und unnötige Kosten.",
      "Wie eine gute Baustellenplanung aussieht, zeigt dieser Beitrag.",
    ],
    sections: [
      {
        heading: "Die richtige Reihenfolge",
        body: [
          "Jedes Gewerk hat seinen Platz im Ablauf. Wird die Reihenfolge falsch gewählt, muss manches doppelt gemacht werden. Eine durchdachte Planung vermeidet das.",
        ],
      },
      {
        heading: "Ein Ansprechpartner behält den Überblick",
        body: [
          "Wenn ein Partner alle Gewerke koordiniert, laufen Termine und Schnittstellen zusammen. Das spart Zeit und sorgt für einen klaren, planbaren Ablauf.",
        ],
      },
    ],
    faqs: [
      { q: "Warum ist die Reihenfolge der Gewerke wichtig?", a: "Weil eine falsche Reihenfolge zu Doppelarbeit und Verzögerungen führt." },
      { q: "Wer koordiniert die Baustelle?", a: "Bei uns übernehmen wir die Koordination – Sie haben einen festen Ansprechpartner." },
      { q: "Spart gute Planung wirklich Kosten?", a: "Ja, sie vermeidet Wartezeiten und Doppelarbeit und hält den Zeitplan ein." },
    ],
    cta: {
      title: "Soll Ihr Projekt reibungslos laufen?",
      text: "Wir planen und koordinieren Ihre Baustelle – für einen klaren Ablauf aus einer Hand.",
    },
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getSortedPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getLatest(count = 5, excludeSlug?: string) {
  return getSortedPosts()
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, count);
}

export function getCategories() {
  const map = new Map<string, number>();
  for (const p of posts) map.set(p.category, (map.get(p.category) ?? 0) + 1);
  return [...map.entries()].map(([name, count]) => ({ name, count }));
}

export function getTags() {
  const set = new Set<string>();
  for (const p of posts) for (const t of p.tags) set.add(t);
  return [...set].sort((a, b) => a.localeCompare(b));
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/&/g, "und")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getByCategorySlug(catSlug: string) {
  return getSortedPosts().filter((p) => slugify(p.category) === catSlug);
}

export function getByTagSlug(tagSlug: string) {
  return getSortedPosts().filter((p) => p.tags.some((t) => slugify(t) === tagSlug));
}

export function getPrevNext(slug: string) {
  const sorted = getSortedPosts();
  const i = sorted.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? sorted[i - 1] : null,
    next: i >= 0 && i < sorted.length - 1 ? sorted[i + 1] : null,
  };
}

export function getRelated(slug: string, count = 3) {
  const current = getPost(slug);
  const others = getSortedPosts().filter((p) => p.slug !== slug);
  const sameCat = others.filter((p) => p.category === current?.category);
  const rest = others.filter((p) => p.category !== current?.category);
  return [...sameCat, ...rest].slice(0, count);
}
