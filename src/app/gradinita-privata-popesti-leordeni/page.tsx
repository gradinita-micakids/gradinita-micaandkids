import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Grădiniță Privată în Popești Leordeni",
  description:
    "Grădiniță privată în Popești Leordeni, Ilfov — Mica and Kids. Învățare prin joacă în aer liber, inițiere în engleză, activități cu animale și natură. Program flexibil 07:00-19:00.",
  alternates: { canonical: "/gradinita-privata-popesti-leordeni" },
  openGraph: {
    title: "Grădiniță Privată în Popești Leordeni | Mica and Kids",
    description:
      "Grădiniță privată pentru copii 3-6 ani în Popești Leordeni, Ilfov. Învățare prin joacă, natură și creativitate. Program flexibil și personal calificat.",
    url: "https://gradinitamicaandkids.ro/gradinita-privata-popesti-leordeni",
    images: ["/images/galerie/activitati-creative-copii-gradinita.webp"],
  },
};

const faqItems = [
  {
    question: "Ce face o grădiniță privată diferită de una de stat?",
    answer:
      "O grădiniță privată oferă grupuri mai mici de copii, personal cu mai mult timp de atenție individuală, programe educaționale flexibile și adaptate nevoilor copiilor, activități suplimentare (limbi străine, arte, natură) și program extins pentru părinții care lucrează. La Mica and Kids, copiii beneficiază de toate acestea într-un mediu sigur și iubitor.",
  },
  {
    question: "Care sunt tarifele la grădinița privată Mica and Kids?",
    answer:
      "Oferim program scurt (07:30-12:30), program mediu (07:30-16:30) și program lung (07:30-18:30). Tarifele variază în funcție de programul ales. Toate programele includ activități în aer liber, ateliere creative, inițiere în limba engleză și mâncare gătită pe loc. Vezi pagina de Program & Tarife pentru detalii.",
  },
  {
    question: "Ce activități includ programul de grădiniță privată?",
    answer:
      "Activitățile includ învățare prin joacă în aer liber, conexiune cu natura și animalele, ateliere creative (pictură, modelaj, muzică), inițiere în limba engleză, activități senzoriale, grădinărit și pregătire pentru școală la grupa mare. Copiii au cel puțin 2-3 ore de activitate în aer liber în fiecare zi.",
  },
];

export default function GradinitaPrivataPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Grădiniță Privată Popești Leordeni — Mica and Kids",
    serviceType: "Grădiniță Privată",
    areaServed: "Popești Leordeni, Ilfov",
    description:
      "Grădiniță privată pentru copii 3-6 ani în Popești Leordeni, Ilfov. Învățare prin joacă în aer liber, inițiere în engleză, activități cu animale și natură.",
    provider: {
      "@type": "Preschool",
      name: "Mica and Kids",
      telephone: "+40740467056",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Strada Sfântul Gheorghe 5B",
        addressLocality: "Popești Leordeni",
        addressRegion: "Ilfov",
        postalCode: "077160",
        addressCountry: "RO",
      },
    },
  };

  return (
    <div className="pt-28 pb-20 bg-white/80 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Breadcrumbs items={[{ name: "Grădiniță Privată", path: "/gradinita-privata-popesti-leordeni" }]} />

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-light text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Mica and Kids · Popești Leordeni
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-6 leading-tight">
              Grădiniță Privată în Popești Leordeni
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light">Mica and Kids</Link> este o
              grădiniță privată în Popești Leordeni, Ilfov, unde copiii 3-6 ani
              învață prin joacă în aer liber, cu natură, animale și inițiere în
              limba engleză. Grupuri mici, personal calificat și program flexibil
              07:00-19:00 — tot ce ai nevoie pentru copilul tău.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
            >
              Programează o vizită →
            </Link>
          </div>
        </div>
      </div>

      {/* De ce grădiniță privată */}
      <div className="bg-cream/80 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-12 text-center">
            De ce să alegi o grădiniță privată
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Grupuri mici, atenție individuală
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                La grădinița privată Mica and Kids, lucrăm cu grupuri mici.
                Educatoarea cunoaște fiecare copil, știe ce îl bucură, unde are
                nevoie de ajutor. Nu e un loc unde copilul tău e un număr.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Program flexibil pentru părinți
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Funcționăm Luni-Vineri 07:00-19:00 cu program scurt, mediu și
                lung. Te adaptezi la programul tău, nu invers. Vezi
                <Link href="/program-tarife" className="text-green-dark underline hover:text-green-light"> tarifele</Link> și
                alege varianta potrivită pentru familia ta.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Activități în aer liber zilnic
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Copiii petrec cel puțin 2-3 ore în <Link href="/galerie" className="text-green-dark underline hover:text-green-light">curtea noastră</Link> cu
                iarbă, nisip și animale. Învățare prin joacă în natură, nu
                prin staționare în clasă.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Inițiere în limba engleză
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Copiii se inițiază în limba engleză prin cântece, jocuri și
                activități interactive — nu prin ore formale. Engleza devine
                parte din joaca zilnică, natural.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-linking */}
      <div className="py-12 bg-white/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Link href="/cresa-popesti-leordeni" className="bg-cream rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow no-underline">
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">Creșă în Popești Leordeni</h3>
              <p className="text-sm text-foreground/60">Pentru copii 1,5-3 ani — îngrijire afectuoasă</p>
            </Link>
            <Link href="/afterschool-popesti-leordeni" className="bg-cream rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow no-underline">
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">Afterschool în Popești Leordeni</h3>
              <p className="text-sm text-foreground/60">Pentru copii 6-12 ani — sprijin după școală</p>
            </Link>
            <Link href="/program-tarife" className="bg-cream rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow no-underline">
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">Program & Tarife</h3>
              <p className="text-sm text-foreground/60">Vezi tarifele și programele disponibile</p>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-cream/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Vino să vezi grădinița noastră
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Cea mai bună recomandare e să vii cu cel mic și să vezi cum se
            simte în spațiul nostru. Programează o vizită — te așteptăm cu drag.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
          >
            Programează o vizită →
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-8 text-center">
            Întrebări frecvente
          </h2>
          <FAQSection items={faqItems} />
          <FAQJsonLd items={faqItems} />
        </div>
      </div>
    </div>
  );
}
