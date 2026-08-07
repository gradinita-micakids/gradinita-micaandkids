import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Creșă Privată în Popești Leordeni",
  description:
    "Creșă privată în Popești Leordeni, Ilfov — Mica and Kids. Îngrijire afectuoasă pentru copii 1,5-3 ani, activități senzoriale, aer liber, mâncare gătită pe loc și program flexibil 07:00-19:00.",
  alternates: { canonical: "/cresa-privata-popesti-leordeni" },
  openGraph: {
    title: "Creșă Privată în Popești Leordeni | Mica and Kids",
    description:
      "Creșă privată pentru copii 1,5-3 ani în Popești Leordeni, Ilfov. Îngrijire afectuoasă, activități senzoriale și program flexibil.",
    url: "https://www.gradinitamicaandkids.ro/cresa-privata-popesti-leordeni",
    images: ["/images/galerie/activitati-senzoriale-copii.webp"],
  },
};

const faqItems = [
  {
    question: "De la ce vârstă acceptați copii la creșa privată?",
    answer:
      "Acceptăm copii începând cu 1,5 ani la creșa privată Mica and Kids. Avem grupuri mici, personal dedicat și un mediu sigur, curat și stimulent pentru cei mici.",
  },
  {
    question: "Ce include programul de creșă privată?",
    answer:
      "Programul de creșă include îngrijire afectuoasă, activități senzoriale și stimulative, somn ghidat, mese gătite pe loc cu ingrediente sănătoase, timp de joacă în aer liber și inițiere în limba engleză prin cântece. Funcționăm Luni-Vineri 07:00-19:00 cu program flexibil.",
  },
  {
    question: "Cum se face adaptarea la creșă?",
    answer:
      "Procesul de adaptare este gradual și ghidat de educatoare. Începem cu vizite scurte împreună cu părintele, apoi creștem treptat timpul petrecut la creșă. Comunicăm zilnic cu părinții despre starea copilului, mese, somn și activități.",
  },
];

export default function CresaPrivataPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Creșă Privată Popești Leordeni — Mica and Kids",
    url: "https://www.gradinitamicaandkids.ro/cresa-privata-popesti-leordeni",
    serviceType: "Creșă Privată",
    areaServed: "Popești Leordeni, Ilfov",
    description:
      "Creșă privată pentru copii 1,5-3 ani în Popești Leordeni, Ilfov. Îngrijire afectuoasă, activități senzoriale, aer liber și mâncare gătită pe loc.",
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
      <Breadcrumbs items={[{ name: "Creșă Privată", path: "/cresa-privata-popesti-leordeni" }]} />

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-light text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Mica and Kids · Popești Leordeni
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-6 leading-tight">
              Creșă Privată în Popești Leordeni
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light">Mica and Kids</Link> oferă
              îngrijire afectuoasă pentru copii 1,5-3 ani într-o creșă privată
              din Popești Leordeni, Ilfov. Spațiu sigur, curat și modern, cu
              personal dedicat, activități senzoriale, aer liber și mâncare
              gătită pe loc. Program flexibil 07:00-19:00.
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

      {/* De ce creșă privată */}
      <div className="bg-cream/80 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-12 text-center">
            De ce să alegi creșa privată Mica and Kids
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Grupuri mici, atenție individuală
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                La creșa noastră privată, lucrăm cu grupuri mici. Fiecare copil
                primește atenție individuală — educatoarea cunoaște nevoile,
                ritmul și preferințele celui mic.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Mâncare gătită pe loc
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Copiii mănâncă mâncare proaspătă, gătită pe loc cu ingrediente
                sănătoase. Nu mâncare congelată sau catering. Nutriția
                corectă e esențială pentru dezvoltarea copiilor 1,5-3 ani.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Activități senzoriale și aer liber
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Copiii au activități senzoriale zilnice — atingere, apucare,
                explorare. Ies în <Link href="/galerie" className="text-green-dark underline hover:text-green-light">curte</Link> în
                fiecare zi, pentru că cei mici au nevoie de mișcare și aer curat.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Program flexibil pentru părinți
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Funcționăm Luni-Vineri 07:00-19:00 cu program scurt, mediu și
                lung. Vezi
                <Link href="/program-tarife" className="text-green-dark underline hover:text-green-light"> tarifele</Link> și
                alege programul care se potrivește familiei tale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-linking */}
      <div className="py-12 bg-white/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Link href="/gradinita-popesti-leordeni" className="bg-cream rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow no-underline">
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">Grădiniță în Popești Leordeni</h3>
              <p className="text-sm text-foreground/60">Pentru copii 3-6 ani — învățare prin joacă</p>
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
            Vino să vezi creșa noastră
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
