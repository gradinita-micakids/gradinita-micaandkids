import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Program & Tarife Grădiniță Popești Leordeni",
  description:
    "Program și tarife pentru creșă, grădiniță și afterschool Mica and Kids în Popești Leordeni, Ilfov. Program scurt, mediu și lung cu activități incluse.",
  alternates: { canonical: "/program-tarife" },
  openGraph: {
    title: "Program & Tarife — Grădiniță Popești Leordeni | Mica and Kids",
    description:
      "Program și tarife pentru creșă, grădiniță și afterschool în Popești Leordeni, Ilfov.",
    url: "https://www.gradinitamicaandkids.ro/program-tarife",
    images: ["/images/og-default.webp"],
  },
};

const traditionalPrograms = [
  {
    type: "Program scurt",
    schedule: "07:30 - 12:30",
    price: "2000 lei",
    features: ["Mic dejun", "Activități de dimineață", "Gustare"],
  },
  {
    type: "Program mediu",
    schedule: "07:30 - 16:30",
    price: "2350 lei",
    features: ["Mic dejun", "Activități educative și recreative", "Gustare", "Prânz", "Odihnă / somn"],
    popular: true,
  },
  {
    type: "Program lung",
    schedule: "07:30 - 18:30",
    price: "2500 lei",
    features: ["Mic dejun", "Activități educative și recreative", "Gustare", "Prânz", "Odihnă / somn", "Gustare după-amiază", "Activități"],
  },
];

const afterschoolPrograms = [
  {
    type: "Program mediu",
    schedule: "12:30 - 16:30",
    price: "1800 lei",
    features: ["Prânz", "Gustare", "Ajutor pentru teme", "Activități creative"],
  },
  {
    type: "Program lung",
    schedule: "12:30 - 18:30",
    price: "2000 lei",
    features: ["Prânz", "Gustare", "Ajutor pentru teme", "Activități creative", "Sport și mișcare", "Socializare"],
  },
];

const includedActivities = [
  { icon: "🌳", title: "Activități în aer liber", desc: "Explorare, joacă și mese servite în natură" },
  { icon: "🎨", title: "Ateliere creative", desc: "Pictură, modelaj, muzică și arte plastice" },
  { icon: "🦋", title: "Conexiune cu natura", desc: "Grija pentru animale și grădinărit" },
  { icon: "📚", title: "Învățare prin joacă", desc: "Programe educaționale moderne și interactive" },
  { icon: "🌍", title: "Limbi străine", desc: "Inițiere în limba engleză prin joc" },
  { icon: "🧸", title: "Echipă dedicată", desc: "Personal empatic, calificat și pasionat" },
];

export default function ProgramTarifePage() {
  const offerCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Program și Tarife Mica and Kids Popești Leordeni",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Program scurt — Creșă & Grădiniță",
        price: "2000",
        priceCurrency: "RON",
        description: "07:30-12:30. Mic dejun, activități de dimineață, gustare.",
      },
      {
        "@type": "Offer",
        name: "Program mediu — Creșă & Grădiniță",
        price: "2350",
        priceCurrency: "RON",
        description: "07:30-16:30. Mic dejun, activități educative, gustare, prânz, odihnă.",
      },
      {
        "@type": "Offer",
        name: "Program lung — Creșă & Grădiniță",
        price: "2500",
        priceCurrency: "RON",
        description: "07:30-18:30. Toate mesele + activități de după-amiază.",
      },
      {
        "@type": "Offer",
        name: "Program mediu — Afterschool",
        price: "1800",
        priceCurrency: "RON",
        description: "12:30-16:30. Prânz, gustare, ajutor pentru teme, activități creative.",
      },
      {
        "@type": "Offer",
        name: "Program lung — Afterschool",
        price: "2000",
        priceCurrency: "RON",
        description: "12:30-18:30. Prânz, gustare, teme, activități creative, sport, socializare.",
      },
    ],
  };

  return (
    <div className="pt-28 pb-20 bg-white/80 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />
      <Breadcrumbs items={[{ name: "Program & Tarife", path: "/program-tarife" }]} />
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-6">
          Program & Tarife
        </h1>
        <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
          Flexibilitate pentru fiecare familie. Alege <Link href="/servicii" className="text-green-dark underline hover:text-green-light">programul</Link> care se potrivește
          nevoilor tale — de la program scurt până la program lung, cu <Link href="/galerie" className="text-green-dark underline hover:text-green-light">activități</Link>
          educaționale incluse.
        </p>
      </div>

      {/* Traditional — Creșă & Grădiniță */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-3">
            Traditional — Creșă & Grădiniță
          </h2>
          <p className="text-foreground/60 text-lg">
            Pentru <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">copii</a> cu vârste între 1 și 6 ani
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {traditionalPrograms.map((p, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl p-8 shadow-soft border-2 ${
                p.popular ? "border-green-light/40 lg:-translate-y-4" : "border-green-light/15"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-light text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-soft">
                  Cel mai ales
                </div>
              )}
              <h3 className="font-display text-xl font-bold text-green-dark mb-2">
                {p.type}
              </h3>
              <p className="text-foreground/50 text-sm mb-4">⏱ {p.schedule}</p>
              <p className="font-display text-3xl font-bold text-orange-dark mb-6">
                {p.price}
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="w-2 h-2 rounded-full bg-green-light" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center px-6 py-3 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
              >
                Înscrie-te →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Afterschool */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-3">
            Traditional — Afterschool
          </h2>
          <p className="text-foreground/60 text-lg">
            Pentru <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">copii</a> cu vârste între 6 și 12 ani
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {afterschoolPrograms.map((p, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl p-8 shadow-soft border-2 border-orange-light/15"
            >
              <h3 className="font-display text-xl font-bold text-green-dark mb-2">
                {p.type}
              </h3>
              <p className="text-foreground/50 text-sm mb-4">⏱ {p.schedule}</p>
              <p className="font-display text-3xl font-bold text-orange-dark mb-6">
                {p.price}
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="w-2 h-2 rounded-full bg-orange-light" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center px-6 py-3 bg-orange-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-orange-dark rounded-full shadow-soft"
              >
                Înscrie-te →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Included activities */}
      <div className="bg-white/80 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-green-dark mb-4">
              Activități incluse
            </h2>
            <p className="text-foreground/60 text-lg">
              Toate programele includ acces la activitățile noastre, respectând <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">standardele educaționale</a> și <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">reglementările ISJ Ilfov</a>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedActivities.map((a, i) => (
              <div
                key={i}
                className="bg-cream rounded-3xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
              >
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="font-display text-xl font-bold text-green-dark mb-2">
                  {a.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-cream/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Ai întrebări despre program?
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactează-ne pentru detalii, vizite și înscrieri. Te așteptăm cu drag
            să cunoști echipa și spațiul nostru din <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">Popești Leordeni</a>!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
          >
            Contactează-ne →
          </Link>
        </div>
      </div>

      <FAQJsonLd
        items={[
          {
            question: "Care sunt tarifele la Mica and Kids Popești Leordeni?",
            answer:
              "Pentru creșă și grădiniță: program scurt 2000 lei, program mediu 2350 lei, program lung 2500 lei. Pentru afterschool: program mediu 1800 lei, program lung 2000 lei. Toate tarifele includ activitățile educaționale.",
          },
          {
            question: "Ce include fiecare program?",
            answer:
              "Programul scurt include mic dejun și activități de dimineață. Programul mediu adaugă prânz și odihnă. Programul lung include toate mesele, gustări și activități de după-amiază.",
          },
          {
            question: "Pentru ce vârste sunt programate tarifele?",
            answer:
              "Tarifele Traditional (creșă & grădiniță) sunt pentru copii 1-6 ani. Tarifele Afterschool sunt pentru copii 6-12 ani.",
          },
          {
            question: "Activitățile sunt incluse în preț?",
            answer:
              "Da, toate programele includ acces la activități în aer liber, ateliere creative, conexiune cu natura, învățare prin joacă, inițiere în limba engleză și echipă dedicată.",
          },
          {
            question: "Pot plăti lunar sau există alte opțiuni?",
            answer:
              "Tarifele sunt lunare. Pentru detalii despre plata în rate sau reduceri pentru al doilea copil, contactează-ne direct la 0740 467 056.",
          },
        ]}
      />
      <FAQSection
        items={[
          {
            question: "Care sunt tarifele la Mica and Kids Popești Leordeni?",
            answer:
              "Pentru creșă și grădiniță: program scurt 2000 lei, program mediu 2350 lei, program lung 2500 lei. Pentru afterschool: program mediu 1800 lei, program lung 2000 lei. Toate tarifele includ activitățile educaționale.",
          },
          {
            question: "Ce include fiecare program?",
            answer:
              "Programul scurt include mic dejun și activități de dimineață. Programul mediu adaugă prânz și odihnă. Programul lung include toate mesele, gustări și activități de după-amiază.",
          },
          {
            question: "Pentru ce vârste sunt programate tarifele?",
            answer:
              "Tarifele Traditional (creșă & grădiniță) sunt pentru copii 1-6 ani. Tarifele Afterschool sunt pentru copii 6-12 ani.",
          },
          {
            question: "Activitățile sunt incluse în preț?",
            answer:
              "Da, toate programele includ acces la activități în aer liber, ateliere creative, conexiune cu natura, învățare prin joacă, inițiere în limba engleză și echipă dedicată.",
          },
          {
            question: "Pot plăti lunar sau există alte opțiuni?",
            answer:
              "Tarifele sunt lunare. Pentru detalii despre plata în rate sau reduceri pentru al doilea copil, contactează-ne direct la 0740 467 056.",
          },
        ]}
      />
    </div>
  );
}
