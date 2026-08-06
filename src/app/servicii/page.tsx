import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Servicii — Creșă, Grădiniță & Afterschool",
  description:
    "Creșă, grădiniță, afterschool, tabere și excursii în Popești Leordeni, Ilfov. Limbi străine, opționale educaționale și experiențe de tip sleepover.",
  alternates: { canonical: "/servicii" },
  openGraph: {
    title: "Servicii — Creșă, Grădiniță & Afterschool",
    description:
      "Creșă, grădiniță, afterschool, tabere și excursii în Popești Leordeni, Ilfov.",
    url: "https://gradinitamicaandkids.ro/servicii",
    images: ["/images/og-default.webp"],
  },
};

const services = [
  {
    title: "Creșă",
    age: "1,5-3 ani",
    desc: "Îngrijire afectuoasă și activități stimulative pentru cei mici. Spațiu sigur, curat și modern, cu personal dedicat și empatic.",
    features: ["Program flexibil", "Activități senzoriale", "Alimentație sănătoasă", "Somn ghidat"],
    image: "/images/reference/baby-1.webp",
    color: "bg-yellow/10",
    accent: "text-yellow",
  },
  {
    title: "Grădiniță",
    age: "3-6 ani",
    desc: "Învățare prin joacă în aer liber, cu programe educaționale moderne. Conexiune cu natura, animale și activități interactive.",
    features: ["Activități outdoor", "Limbi străine", "Arte și creativitate", "Îngrijire animale"],
    image: "/images/reference/girl-4.webp",
    color: "bg-green-light/10",
    accent: "text-green-dark",
  },
  {
    title: "Afterschool",
    age: "6-12 ani",
    desc: "Sprijin pentru teme, activități creative și dezvoltare personală. Un loc unde copiii se simt ca acasă după școală.",
    features: ["Ajutor pentru teme", "Activități creative", "Sport și mișcare", "Socializare"],
    image: "/images/reference/skater-1.webp",
    color: "bg-orange-light/10",
    accent: "text-orange-dark",
  },
  {
    title: "Tabere & Excursii",
    age: "Toate vârstele",
    desc: "Aventuri în natură, tabere tematice și experiențe de tip sleepover. Copiii descoperă lumea într-un mod sigur și distractiv.",
    features: ["Tabere de vară", "Excursii educaționale", "Sleepover", "Activități în natură"],
    image: "/images/reference/about-first.webp",
    color: "bg-blue/10",
    accent: "text-blue",
  },
];

export default function ServiciiPage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "Creșă Popești Leordeni — Mica and Kids",
        serviceType: "Creșă",
        areaServed: "Popești Leordeni, Ilfov",
        description:
          "Îngrijire afectuoasă și activități stimulative pentru copii 1,5-3 ani. Spațiu sigur, curat și modern, cu personal dedicat și empatic.",
        provider: {
          "@type": "Preschool",
          name: "Mica and Kids",
          telephone: "+40740467056",
        },
      },
      {
        "@type": "Service",
        name: "Grădiniță Popești Leordeni — Mica and Kids",
        serviceType: "Grădiniță",
        areaServed: "Popești Leordeni, Ilfov",
        description:
          "Învățare prin joacă în aer liber pentru copii 3-6 ani. Activități outdoor, limbi străine, arte, creativitate și îngrijire animale.",
        provider: {
          "@type": "Preschool",
          name: "Mica and Kids",
          telephone: "+40740467056",
        },
      },
      {
        "@type": "Service",
        name: "Afterschool Popești Leordeni — Mica and Kids",
        serviceType: "Afterschool",
        areaServed: "Popești Leordeni, Ilfov",
        description:
          "Sprijin pentru teme, activități creative, sport și socializare pentru copii 6-12 ani, după programul școlar.",
        provider: {
          "@type": "Preschool",
          name: "Mica and Kids",
          telephone: "+40740467056",
        },
      },
      {
        "@type": "Service",
        name: "Tabere și Excursii — Mica and Kids",
        serviceType: "Tabere și Excursii",
        areaServed: "Popești Leordeni, Ilfov",
        description:
          "Aventuri în natură, tabere tematice și experiențe de tip sleepover pentru copii de toate vârstele.",
        provider: {
          "@type": "Preschool",
          name: "Mica and Kids",
          telephone: "+40740467056",
        },
      },
    ],
  };

  return (
    <div className="pt-28 pb-20 bg-white/80 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Breadcrumbs items={[{ name: "Servicii", path: "/servicii" }]} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-4">
            Servicii grădiniță Popești Leordeni
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            La grădinița noastră din Popești Leordeni oferim creșă, grădiniță și
            afterschool sub același acoperiș. Mai mult decât o <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light">instituție de învățământ</Link> — un brand inovativ, orientat
            spre trenduri internaționale, creativitate și bune maniere.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={`relative ${s.color} rounded-3xl p-8 shadow-soft [direction:ltr]`}>
                <div className="relative w-full h-64 flex items-center justify-center">
                  <Image
                    src={s.image}
                    alt={`Mica and Kids — ${s.title} pentru copii în Popești Leordeni`}
                    width={350}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="[direction:ltr]">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className={`font-display text-3xl font-bold ${s.accent}`}>
                    {s.title}
                  </h2>
                  <span className={`text-sm font-bold ${s.accent} bg-white px-3 py-1 rounded-full shadow-soft`}>
                    {s.age}
                  </span>
                </div>
                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                  {s.title === "Creșă" ? (
                    <>Îngrijire afectuoasă și activități stimulative pentru cei mici. Spațiu sigur, curat și modern, cu <Link href="/contact" className="text-green-dark underline hover:text-green-light">personal dedicat</Link> și empatic, conform <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">standardelor educaționale</a>.</>
                  ) : s.title === "Grădiniță" ? (
                    <>Învățare prin joacă în aer liber, cu <Link href="/galerie" className="text-green-dark underline hover:text-green-light">programe educaționale</Link> moderne. Conexiune cu <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">natura</a>, animale și activități interactive.</>
                  ) : s.title === "Afterschool" ? (
                    <>Sprijin pentru teme, activități creative și dezvoltare personală. Un loc unde <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">copiii</a> se simt ca acasă după <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">școală</a>.</>
                  ) : (
                    s.desc
                  )}
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className={`w-2 h-2 rounded-full ${s.accent.replace("text-", "bg-")}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
                >
                  Înscrie-te →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FAQJsonLd
        items={[
          {
            question: "Ce servicii oferă Mica and Kids în Popești Leordeni?",
            answer:
              "Oferim creșă (1,5-3 ani), grădiniță (3-6 ani), afterschool (6-12 ani), tabere și excursii. Toate serviciile includ activități în aer liber, limbi străine și ateliere creative.",
          },
          {
            question: "Ce include programul de creșă?",
            answer:
              "Programul de creșă include îngrijire afectuoasă, activități senzoriale, alimentație sănătoasă, somn ghidat și un spațiu sigur, curat și modern cu personal dedicat și empatic.",
          },
          {
            question: "Ce activități sunt incluse în grădiniță?",
            answer:
              "Grădinița include activități outdoor, limbi străine, arte și creativitate, îngrijire animale și învățare prin joacă în aer liber cu programe educaționale moderne.",
          },
          {
            question: "Ce face programul de afterschool?",
            answer:
              "Afterschool-ul oferă sprijin pentru teme, activități creative, sport și mișcare, socializare și un loc unde copiii se simt ca acasă după școală.",
          },
          {
            question: "Organizați tabere și excursii?",
            answer:
              "Da, organizăm tabere de vară, excursii educaționale, experiențe de tip sleepover și activități în natură pentru toate vârstele, în condiții de siguranță și distracție.",
          },
        ]}
      />
      <FAQSection
        items={[
          {
            question: "Ce servicii oferă Mica and Kids în Popești Leordeni?",
            answer:
              "Oferim creșă (1,5-3 ani), grădiniță (3-6 ani), afterschool (6-12 ani), tabere și excursii. Toate serviciile includ activități în aer liber, limbi străine și ateliere creative.",
          },
          {
            question: "Ce include programul de creșă?",
            answer:
              "Programul de creșă include îngrijire afectuoasă, activități senzoriale, alimentație sănătoasă, somn ghidat și un spațiu sigur, curat și modern cu personal dedicat și empatic.",
          },
          {
            question: "Ce activități sunt incluse în grădiniță?",
            answer:
              "Grădinița include activități outdoor, limbi străine, arte și creativitate, îngrijire animale și învățare prin joacă în aer liber cu programe educaționale moderne.",
          },
          {
            question: "Ce face programul de afterschool?",
            answer:
              "Afterschool-ul oferă sprijin pentru teme, activități creative, sport și mișcare, socializare și un loc unde copiii se simt ca acasă după școală.",
          },
          {
            question: "Organizați tabere și excursii?",
            answer:
              "Da, organizăm tabere de vară, excursii educaționale, experiențe de tip sleepover și activități în natură pentru toate vârstele, în condiții de siguranță și distracție.",
          },
        ]}
      />
    </div>
  );
}
