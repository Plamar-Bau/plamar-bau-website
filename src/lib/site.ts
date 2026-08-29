// Zentrale Firmendaten für PLAMAR Bauunternehmung UG (haftungsbeschränkt)

export const company = {
  name: "PLAMAR",
  legalName: "PLAMAR Bauunternehmung UG (haftungsbeschränkt)",
  brand: "PLAMAR-BAU",
  url: "https://www.plamar-bau.de",
  street: "Ulmer Str. 48",
  streetAddress: "Ulmer Str. 48",
  postalCode: "73066",
  locality: "Uhingen",
  city: "73066 Uhingen",
  country: "Deutschland",
  countryCode: "DE",
  phone: "0163 5877831",
  phoneIntl: "+491635877831",
  phoneHref: "tel:+491635877831",
  email: "projects@plamar-bau.de",
  emailHref: "mailto:projects@plamar-bau.de",
  registerCourt: "Amtsgericht Ulm",
  registerNumber: "HRB 750716",
  managingDirector: "Plamen Planintsov",
  region: "Uhingen, Göppingen & Umgebung",
  areasServed: [
    "Uhingen",
    "Göppingen",
    "Ebersbach an der Fils",
    "Salach",
    "Eislingen/Fils",
    "Süßen",
    "Faurndau",
    "Region Stuttgart",
  ],
} as const;

export const nav = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/#leistungen", dropdown: true },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
] as const;
