import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tabere și Excursii pentru Copii în Popești Leordeni",
  description:
    "Tabere tematice, excursii educaționale și experiențe de tip sleepover pentru copii la Mica and Kids în Popești Leordeni, Ilfov. Aventuri în natură, siguranță și multă bucurie.",
  alternates: { canonical: "/tabere-excursii-copii-popesti-leordeni" },
  openGraph: {
    title: "Tabere și Excursii pentru Copii în Popești Leordeni | Mica and Kids",
    description:
      "Tabere tematice, excursii educaționale și sleepover pentru copii în Popești Leordeni, Ilfov. Aventuri în natură și dezvoltare prin experiență.",
    url: "https://gradinitamicaandkids.ro/tabere-excursii-copii-popesti-leordeni",
    images: ["/images/galerie/explorare-natura-copii-gradinita.webp"],
  },
};

const faqItems = [
  {
    question: "De la ce vârstă pot participa copiii la tabere și excursii?",
    answer:
      "Copiii de la 3 ani pot participa la excursii și activități de tip sleepover. Taberele tematice sunt adaptate pe grupe de vârstă: 3-6 ani, 6-12 ani. Fiecare activitate are supraveghere calificată și programe adaptate nevoilor de dezvoltare.",
  },
  {
    question: "Ce include programul de tabere și excursii?",
    answer:
      "Programul include transport, mese, materiale de activitate, supraveghere calificată și asigurare. Taberele tematice au activități educaționale structurate — explorare în natură, ateliere creative, sport și jocuri de echipă.",
  },
  {
    question: "Cât de des organizați excursii pentru copii?",
    answer:
      "Organizăm excursii sezoniere — primăvara și toamna, când vremea permite activități în aer liber. Taberele de vară se desfășoară în iulie și august. Sleepover-urile sunt organizate periodic pe parcursul anului școlar.",
  },
];

export default function TabereExcursiiPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tabere și Excursii pentru Copii — Mica and Kids Popești Leordeni",
    serviceType: "Tabere și Excursii pentru Copii",
    areaServed: "Popești Leordeni, Ilfov",
    description:
      "Tabere tematice, excursii educaționale și experiențe de tip sleepover pentru copii de toate vârstele în Popești Leordeni, Ilfov.",
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
      <Breadcrumbs items={[{ name: "Tabere și Excursii", path: "/tabere-excursii-copii-popesti-leordeni" }]} />

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-light text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Mica and Kids · Popești Leordeni
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-6 leading-tight">
              Tabere și Excursii pentru Copii în Popești Leordeni
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Aventuri în natură, tabere tematice și experiențe de tip sleepover.
              Copiii descoperă lumea într-un mod sigur și distractiv — cu
              supraveghere calificată, activități educaționale și multă bucurie.
              La <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light">Mica and Kids</Link> din
              Popești Leordeni, credem că cele mai bune lecții se învață afară.
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

      {/* Tipuri de tabere */}
      <div className="bg-cream/80 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-12 text-center">
            Ce oferim
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Tabere de vară
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Tabere tematice de o săptămână în iulie și august. Copiii
                explorează natura, fac ateliere creative, sport și jocuri de
                echipă. Fiecare zi are un program structurat cu activități
                educative și timp de joacă liber.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Excursii educaționale
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Excursii sezoniere primăvara și toamna — vizite la ferme,
                grădini botanice, muzee și parcuri naturale. Copiii învață
                prin experiență directă, nu din cărți.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Sleepover-uri
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Experiențe de tip sleepover organizate periodic — copiii
                petrec o noapte la grădiniță cu activități de seară, povești
                și jocuri. O oportunitate de a dezvolta independența și
                socializarea într-un mediu familiar și sigur.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Activități în natură
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Drumeții, explorare în <Link href="/galerie" className="text-green-dark underline hover:text-green-light">curtea noastră</Link> cu
                animale și grădină, activități de grădinărit și observare a
                naturii. Copiii învață să respecte mediul și să se conecteze
                cu lumea naturală.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-linking */}
      <div className="py-12 bg-white/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Link href="/servicii" className="bg-cream rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow no-underline">
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">Toate serviciile</h3>
              <p className="text-sm text-foreground/60">Creșă, grădiniță, afterschool, tabere și excursii</p>
            </Link>
            <Link href="/program-tarife" className="bg-cream rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow no-underline">
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">Program & Tarife</h3>
              <p className="text-sm text-foreground/60">Vezi tarifele și ce este inclus în fiecare program</p>
            </Link>
            <Link href="/contact" className="bg-cream rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow no-underline">
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">Contact</h3>
              <p className="text-sm text-foreground/60">Programează o vizită sau solicită informații</p>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-cream/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Vrei să afli mai multe despre tabere?
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactează-ne pentru programul de tabere și excursii. Te așteptăm
            cu drag să-ți prezentăm ce am pregătit pentru copii.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
          >
            Contactează-ne →
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
