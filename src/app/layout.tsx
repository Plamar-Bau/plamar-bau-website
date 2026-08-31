import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import { company } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const title =
  "PLAMAR-BAU | Gerüstbau, Sanierung & Komplettausbau in Uhingen";
const description =
  "PLAMAR Bauunternehmung UG (haftungsbeschränkt) in Uhingen. Wir übernehmen Gerüstbau, Komplettsanierung, Elektro, Heizung/Wasser/Sanitär, Innenausbau, Fassade, Dach und Badsanierung. Alle Gewerke aus einer Hand.";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title,
  description,
  keywords: [
    "Bauunternehmen Uhingen",
    "Bauunternehmen Göppingen",
    "Gerüstbau",
    "Sanierung",
    "Komplettsanierung",
    "Fassade",
    "Dach",
    "Badsanierung",
    "Innenausbau",
    "Elektroinstallation",
    "PLAMAR-BAU",
  ],
  applicationName: "PLAMAR-BAU",
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: company.url,
    siteName: "PLAMAR-BAU",
    title,
    description,
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1600,
        height: 900,
        alt: "PLAMAR-BAU Bauunternehmung in Uhingen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-home.jpg"],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${company.url}/#organization`,
  name: "PLAMAR-BAU",
  legalName: company.legalName,
  url: company.url,
  telephone: company.phoneIntl,
  email: company.email,
  image: `${company.url}/images/hero-home.jpg`,
  logo: `${company.url}/icon.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.streetAddress,
    postalCode: company.postalCode,
    addressLocality: company.locality,
    addressCountry: company.countryCode,
  },
  areaServed: company.areasServed.map((name) => ({ "@type": "City", name })),
  founder: { "@type": "Person", name: company.managingDirector },
  knowsAbout: [
    "Gerüstbau",
    "Sanierung",
    "Komplettsanierung",
    "Elektroinstallation",
    "Heizung Wasser Sanitär",
    "Innenausbau",
    "Fassade",
    "Dach",
    "Badsanierung",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${poppins.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
