import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Grădiniță în Popești Leordeni",
  description:
    "Grădiniță pentru copii 3-6 ani în Popești Leordeni, Ilfov. Învățare prin joacă în aer liber, inițiere în limba engleză, pregătire pentru școală și program flexibil.",
  alternates: { canonical: "/gradinita-popesti-leordeni" },
  openGraph: {
    title: "Grădiniță în Popești Leordeni",
    description:
      "Grădiniță pentru copii 3-6 ani în Popești Leordeni, Ilfov. Învățare prin joacă, natură și pregătire pentru școală.",
    url: "https://gradinitamicaandkids.ro/gradinita-popesti-leordeni",
    images: ["/images/og-default.webp"],
  },
};

const faqItems = [
  {
    question: "De la ce vârstă pot înscrie copilul la grădiniță?",
    answer:
      "Grădinița noastră primește copii de la 3 ani până la 6 ani. Împărțim copiii pe grupe de vârstă — 3-4 ani, 4-5 ani și 5-6 ani — pentru că fiecare etapă are nevoi diferite. Copiii de 3 ani au nevoie de mult joacă liber și socializare, în timp ce cei de 5-6 ani încep pregătirea sistematică pentru școală.",
  },
  {
    question: "Copilul meu nu stă bine cu limba engleză. E o problemă?",
    answer:
      "Deloc. Inițierea în limba engleză se face prin cântece, jocuri și povești, nu prin lecții formale. Copiii de 3-4 ani abia își dezvoltă limba maternă, iar engleza vine natural, prin expunere. Nu evaluăm copiii și nu îi notăm. Scopul e să se obișnuiască cu sunetele unei alte limbi, nu să o vorbească fluent.",
  },
  {
    question: "Cum îl pregătiți pe copil pentru școală?",
    answer:
      "Pregătirea pentru școală nu înseamnă să învețe să citească la 5 ani. Înseamnă să știe să stea la masă, să aștepte rândul, să asculte o explicație, să deschidă singur un rucsac, să mănânce singur, să-și exprime nevoile. Aceste abilități se construiesc în timp, prin rutina zilnică de la grădiniță. La grupa mare (5-6 ani) adăugăm activități structurate: recunoașterea literelor, numărare, grafomotricitate.",
  },
  {
    question: "Pot vizita grădinița înainte de înscriere?",
    answer:
      "Da, și o recomandăm cu căldură. Cel mai bine e să vii cu copilul, să vadă clasele, curtea, animalele. Copilul simte dacă e un loc în care se simte bine. Programează o vizită telefonic la 0740 467 056 sau prin formularul de contact.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Grădiniță în Popești Leordeni — Mica and Kids",
  description:
    "Grădiniță pentru copii cu vârste între 3 și 6 ani în Popești Leordeni, Ilfov. Învățare prin joacă în aer liber, inițiere în limba engleză, pregătire pentru școală.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Mica and Kids",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strada Sfântul Gheorghe 5B",
      addressLocality: "Popești Leordeni",
      addressRegion: "Ilfov",
      addressCountry: "RO",
    },
    telephone: "+40740467056",
  },
  areaServed: {
    "@type": "City",
    name: "Popești Leordeni",
  },
  audience: {
    "@type": "Audience",
    name: "Copii 3-6 ani",
  },
};

export default function GradinitaPopestiLeordeniPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <FAQJsonLd items={faqItems} />
      <Breadcrumbs
        items={[
          { name: "Servicii", path: "/servicii" },
          { name: "Grădiniță Popești Leordeni", path: "/gradinita-popesti-leordeni" },
        ]}
      />

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-light text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Mica and Kids · Popești Leordeni
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-6 leading-tight">
              Grădiniță în Popești Leordeni
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              La grădinița <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light">Mica and Kids</Link>, copiii
              de 3-6 ani învață prin joacă — nu din cauza unei metode
              importate, ci pentru că așa învață copiii. În curte, în
              <Link href="/galerie" className="text-green-dark underline hover:text-green-light"> natură</Link>, printre animale și
              grădini cu legume, cel mic descoperă lumea la ritmul lui. Noi
              suntem acolo să-i arătăm drumul, nu să-l grăbim.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Suntem o grădiniță cu <Link href="/program-tarife" className="text-green-dark underline hover:text-green-light">program flexibil</Link> în
              Popești Leordeni, la 10 minute de Berceni. Grupuri mici, educatoare
              calificate, mâncare gătită pe loc și o curte mare unde copiii
              petind cel puțin două ore pe zi.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
            >
              Programează o vizită →
            </Link>
          </div>
          <div className="relative bg-cream rounded-3xl p-8 shadow-soft">
            <div className="relative w-full h-80 flex items-center justify-center">
              <Image
                src="/images/reference/girl-4.webp"
                alt="Grădiniță Mica and Kids — activități educaționale în aer liber pentru copii 3-6 ani în Popești Leordeni"
                width={350}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ce învață copiii la grădiniță */}
      <div className="bg-cream/80 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-8">
            Ce fac copiii la grădinița noastră
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Învățare prin joacă, nu prin fișe
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Copiii de 3-4 ani nu au nevoie de fișe de lucru. Au nevoie să
                construiască turnuri din cuburi, să facă prăjituri din nisip,
                să se joace de-a magazinul, să asculte povești. Prin joaca
                asta, învață numere, culori, forme, dimensiuni, să împartă,
                să aștepte rândul. E învățare reală, doar că nu arată ca la
                școală. Noi respectăm <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">curriculumul preșcolar</a> aprobat
                de Ministerul Educației, dar îl aplicăm prin joacă, nu prin
                exerciții plictisitoare.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Engleză prin cântece și jocuri
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Copiii aud engleză în fiecare zi — prin cântece, jocuri de
                grup, comenzi simple și povești scurte. Nu e o oră de engleză
                în sensul clasic. E expunere naturală, la fel cum învață limba
                maternă. La 4 ani, un copil care a fost la grădinița noastră
                un an înțelege comenzi simple în engleză și cântă cântece
                fără accent. Nu pentru că l-am forțat, ci pentru că i-a plăcut.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Natura e a doua clasă
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Avem o curte mare cu grădină de legume, flori și animale.
                Copiii plantează, ud, culeg. Văd cum crește un roșiu din
                sămânță. Hrănesc iepurașii și găinile. Asta nu e o activitate
                extra — e parte din educația lor. Copiii care cresc în
                <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> Popești Leordeni</a>, cu
                acces la natură, sunt mai calmi, mai atenți și mai curioși.
                Am văzut asta de multe ori. Funcționăm sub autoritatea
                <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> Inspectoratului Școlar Ilfov</a>, iar
                programul nostru respectă <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">drepturile copilului</a> la
                educație de calitate și timp de joacă.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Pregătire pentru școală, făcută cum trebuie
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                La grupa mare (5-6 ani), creștem gradul de structură. Copiii
                încep să recunoască litere, să numere, să deseneze linii și
                cercuri — exerciții de grafomotricitate care îi pregătesc
                pentru scris. Dar nu transformăm grădinița în școală. Un
                copil care vine la școală stăpânind abilitățile de bază — să
                stea la masă, să asculte, să lucreze în grup, să-și exprime
                nevoile — are un început de școală mult mai bun decât unul
                care a fost forțat să învețe să citească la 5 ani.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grupe de vârstă */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-8">
            Grupele noastre
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                3-4 ani
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Grupa mică. Focus pe socializare, limbaj, autonomie. Copiii
                învață să se spele singuri pe mâini, să mănânce singuri, să-și
                pună hainele. Mult joacă liber, povești și activități senzoriale.
              </p>
            </div>
            <div className="bg-cream rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                4-5 ani
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Grupa mijlocie. Apar activități mai structurate: numere 1-10,
                culori, forme, zilele săptămânii. Engleza devine mai prezentă.
                Copiii încep să construiască povești și să le povestească
                grupului.
              </p>
            </div>
            <div className="bg-cream rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                5-6 ani
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Grupa mare. Pregătire sistematică pentru școală: recunoașterea
                literelor, numărare, grafomotricitate. Copiii fac activități
                mai lungi, învață să lucreze în echipă și să prezinte în fața
                grupului.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-linking servicii */}
      <div className="py-12 bg-white/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Link href="/cresa-popesti-leordeni" className="bg-cream rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow no-underline">
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">Creșă în Popești Leordeni</h3>
              <p className="text-sm text-foreground/60">Pentru copii 1,5-3 ani — îngrijire afectuoasă și activități stimulative</p>
            </Link>
            <Link href="/afterschool-popesti-leordeni" className="bg-cream rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow no-underline">
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">Afterschool în Popești Leordeni</h3>
              <p className="text-sm text-foreground/60">Pentru copii 6-12 ani — sprijin pentru teme și activități după școală</p>
            </Link>
            <Link href="/program-tarife" className="bg-cream rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow no-underline">
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">Program & Tarife</h3>
              <p className="text-sm text-foreground/60">Program scurt, mediu și lung — vezi tarifele și ce este inclus</p>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-cream/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Vino să vezi cum e la noi
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
        </div>
      </div>
    </>
  );
}
