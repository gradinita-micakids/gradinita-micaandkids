import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Despre noi — Grădiniță Popești Leordeni",
  description:
    "Mica and Kids — un brand inovativ de educație preșcolară în Popești Leordeni, Ilfov. Învățare prin joacă, natură și creativitate.",
  alternates: { canonical: "/despre-noi" },
  openGraph: {
    title: "Despre noi — Grădiniță Popești Leordeni | Mica and Kids",
    description:
      "Un brand inovativ de educație preșcolară în Popești Leordeni, Ilfov. Învățare prin joacă, natură și creativitate.",
    url: "https://gradinitamicaandkids.ro/despre-noi",
    images: ["/images/mascota/albinuta.webp"],
  },
};

const values = [
  { icon: "🌱", title: "Educația ca fundament", desc: "Copiii învață prin experiențe directe, nu din cărți." },
  { icon: "🦋", title: "Libertate", desc: "Lăsăm copiii să exploreze și să descopere lumea." },
  { icon: "💡", title: "Inovație", desc: "Trenduri internaționale în educația preșcolară." },
  { icon: "❤️", title: "Empatie", desc: "Fiecare copil este unic și merită atenție individuală." },
  { icon: "🌳", title: "Natură", desc: "Activități în aer liber, inclusiv mesele servite outside." },
  { icon: "🎨", title: "Creativitate", desc: "Arte, pictură, muzică și activități creative zilnice." },
];

export default function DespreNoiPage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mica and Kids",
    url: "https://gradinitamicaandkids.ro",
    logo: "https://gradinitamicaandkids.ro/images/mascota/albinuta.webp",
    description:
      "Mica and Kids — brand inovativ de educație preșcolară în Popești Leordeni, Ilfov. Învățare prin joacă, natură și creativitate.",
    founders: [
      {
        "@type": "Person",
        name: "Michelle",
        description: "Mama cu viziune antreprenorială și pasiune pentru educație.",
      },
      {
        "@type": "Person",
        name: "Carmen",
        description: "Mama cu suflet pedagog și dragoste pentru copii.",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strada Sfântul Gheorghe 5B",
      addressLocality: "Popești Leordeni",
      addressRegion: "Ilfov",
      postalCode: "077160",
      addressCountry: "RO",
    },
    telephone: "+40740467056",
    email: "office@gradinitamicaandkids.ro",
    slogan: "Învățare prin joacă, libertate și conectare cu natura",
  };

  return (
    <div className="pt-28 pb-20 bg-white/80 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Breadcrumbs items={[{ name: "Despre noi", path: "/despre-noi" }]} />
      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-6">
              Povestea noastră
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Mica and Kids a luat naștere din dorința a două mame, Michelle și Carmen,
              de a crea un loc în care <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">copiii</a> să crească fericiți, liberi și conectați
              cu <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">natura</a>. Michelle a venit cu viziunea și curajul antreprenorial, iar
              Carmen cu sufletul pedagog și dragostea pentru cei mici.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Numele brandului a fost inspirat spontan, asociind
              primele litere din numele Michelle și Carmen — „Mi" + „Ca" = „Mica".
              O poveste frumoasă, născută din lumea celor mici, care prinde viață
              alături de „Kids", copiii din centrul universului nostru.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Am preluat cu drag spațiul în care copiii noștri au făcut primii pași
              în <Link href="/program-tarife" className="text-green-dark underline hover:text-green-light">grădiniță</Link> și l-am transformat cu entuziasm într-un loc plin de viață,
              redefinind complet ideea de <Link href="/servicii" className="text-green-dark underline hover:text-green-light">educație preșcolară</Link> și îngrijire.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
            >
              Vino să ne cunoști →
            </Link>
          </div>
          <div className="relative bg-cream rounded-3xl p-8 shadow-soft">
            <div className="relative w-full h-80 flex items-center justify-center">
              <Image
                src="/images/reference/about-first.png"
                alt="Mica and Kids — grădiniță în Popești Leordeni, Ilfov"
                width={400}
                height={350}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Founders */}
      <div className="bg-white/80 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-green-dark mb-4">
              Fondatoarele noastre
            </h2>
            <p className="text-foreground/60 text-lg">
              Două mame, două viziuni, un vis comun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-3xl p-8 shadow-soft text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-light/20 flex items-center justify-center text-4xl font-display font-bold text-green-dark">
                M
              </div>
              <h3 className="font-display text-2xl font-bold text-green-dark mb-2">
                Michelle
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Mama cu viziune antreprenorială și pasiune pentru educație.
                Numele brandului îi poartă inițialele, inspirate de un copil
                care a văzut dincolo de litere.
              </p>
            </div>
            <div className="bg-cream rounded-3xl p-8 shadow-soft text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-orange-light/20 flex items-center justify-center text-4xl font-display font-bold text-orange-dark">
                C
              </div>
              <h3 className="font-display text-2xl font-bold text-green-dark mb-2">
                Carmen
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Mama cu suflet pedagog și dragoste pentru copii. Împreună cu
                Michelle, a transformat un spațiu cunoscut într-un loc nou,
                cald și plin de viață.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white/80 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-green-dark mb-4">
              Valorile noastre
            </h2>
            <p className="text-foreground/60 text-lg">
              Ce ne ghidează în fiecare zi
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-cream rounded-3xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display text-xl font-bold text-green-dark mb-2">
                  {v.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {v.title === "Inovație" ? (
                    <>Trenduri internaționale în <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">educația</a> preșcolară.</>
                  ) : v.title === "Empatie" ? (
                    <>Fiecare <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">copil</a> este unic și merită atenție individuală.</>
                  ) : v.title === "Natură" ? (
                    <>Activități în <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">aer liber</a>, inclusiv mesele servite outside.</>
                  ) : (
                    v.desc
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mascot section */}
      <div className="py-20 bg-cream/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image
              src="/images/mascota/albinuta.webp"
              alt="Albinuța Mica — mascota grădiniței Mica and Kids Popești Leordeni"
              width={200}
              height={200}
              className="w-full h-full object-contain animate-float"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-4">
            Albinuța Mica
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Mascota brandului, o albinuță curioasă și harnică care însoțește copiii
            în <Link href="/galerie" className="text-green-dark underline hover:text-green-light">activitățile zilnice</Link>. Ea reflectă legătura strânsă cu <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">natura</a> și îi ghidează prietenos
            în toate experiențele desfășurate, respectând standardele <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">Inspectoratului Școlar Ilfov</a>.
          </p>
        </div>
      </div>

      <FAQJsonLd
        items={[
          {
            question: "Cine sunt fondatoarele Mica and Kids?",
            answer:
              "Mica and Kids a fost fondată de două mame — Michelle, cu viziune antreprenorială, și Carmen, cu suflet pedagog. Numele brandului vine de la inițialele lor: Mi + Ca = Mica.",
          },
          {
            question: "Ce abordare educațională folosiți?",
            answer:
              "Folosim o abordare modernă, bazată pe învățare prin joacă, libertate de explorare, conectare cu natura și activități creative. Copiii învață prin experiențe directe, nu din cărți.",
          },
          {
            question: "Ce facilități aveți în Popești Leordeni?",
            answer:
              "Avem un spațiu generos cu sală de joacă indoor, curte exterioară pentru activități în aer liber, zonă pentru animale și grădinărit, ateliere creative și o bucătărie dedicată.",
          },
          {
            question: "Cum este alcătuită echipa?",
            answer:
              "Echipa noastră este formată din personal empatic, calificat și pasionat, dedicat fiecărui copil în parte. Fiecare membru al echipei împărtășește valorile Mica and Kids.",
          },
        ]}
      />
      <FAQSection
        items={[
          {
            question: "Cine sunt fondatoarele Mica and Kids?",
            answer:
              "Mica and Kids a fost fondată de două mame — Michelle, cu viziune antreprenorială, și Carmen, cu suflet pedagog. Numele brandului vine de la inițialele lor: Mi + Ca = Mica.",
          },
          {
            question: "Ce abordare educațională folosiți?",
            answer:
              "Folosim o abordare modernă, bazată pe învățare prin joacă, libertate de explorare, conectare cu natura și activități creative. Copiii învață prin experiențe directe, nu din cărți.",
          },
          {
            question: "Ce facilități aveți în Popești Leordeni?",
            answer:
              "Avem un spațiu generos cu sală de joacă indoor, curte exterioară pentru activități în aer liber, zonă pentru animale și grădinărit, ateliere creative și o bucătărie dedicată.",
          },
          {
            question: "Cum este alcătuită echipa?",
            answer:
              "Echipa noastră este formată din personal empatic, calificat și pasionat, dedicat fiecărui copil în parte. Fiecare membru al echipei împărtășește valorile Mica and Kids.",
          },
        ]}
      />
    </div>
  );
}
