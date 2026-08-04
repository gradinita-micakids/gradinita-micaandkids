import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Creșă în Popești Leordeni",
  description:
    "Creșă pentru copii 1,5-3 ani în Popești Leordeni, Ilfov. Îngrijire afectuoasă, activități în aer liber, personal calificat și program flexibil 07:00-19:00.",
  alternates: { canonical: "/cresa-popesti-leordeni" },
  openGraph: {
    title: "Creșă în Popești Leordeni",
    description:
      "Creșă pentru copii 1,5-3 ani în Popești Leordeni, Ilfov. Îngrijire afectuoasă, activități în aer liber și personal calificat.",
    url: "https://gradinitamicaandkids.ro/cresa-popesti-leordeni",
    images: ["/images/mascota/albinuta.webp"],
  },
};

const faqItems = [
  {
    question: "De la ce vârstă primesc copii la creșă?",
    answer:
      "Acceptăm copii începând cu 1 an și jumătate. La această vârstă, cel mic are nevoie de o rutină stabilă, de interacțiune cu alți copii și de spațiu sigur pentru explorare. Grupurile sunt mici, iar educatoarele noastre au experiență specifică cu copiii de creșă.",
  },
  {
    question: "Cum se adaptază copilul la creșă?",
    answer:
      "Fiecare copil are ritmul lui. În prima săptămână, recomandăm program scurt — 2-3 ore — cu un părinte prezent în apropiere. Treptat, creștem durata. Educatoarele comunică zilnic cu părinții despre cum a mers ziua, ce a mâncat, cât a dormit și cum s-a simțit cel mic.",
  },
  {
    question: "Ce mănâncă copiii la creșă?",
    answer:
      "Meniul este preparat proaspăt zilnic și adaptat vârstei. Include fructe, legume, supe, feluri principale și gustări sănătoase. Respectăm alergiile și preferințele alimentare comunicate de părinți. Mesele se servesc în grup, pentru că mâncatul împreună ajută copiii să accepte mai ușor alimente noi.",
  },
  {
    question: "Ce program are creșa din Popești Leordeni?",
    answer:
      "Creșa funcționează de Luni până Vineri, între 07:00 și 19:00. Părinții pot alege program scurt (07:30-12:30), program mediu (07:30-16:30) sau program lung (07:30-18:30). Detalii despre tarife găsiți pe pagina de Program & Tarife.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creșă în Popești Leordeni — Mica and Kids",
  description:
    "Creșă pentru copii cu vârste între 1,5 și 3 ani în Popești Leordeni, Ilfov. Îngrijire afectuoasă, activități în aer liber, personal calificat.",
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
    name: "Copii 1,5-3 ani",
  },
};

export default function CresaPopestiLeordeniPage() {
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
          { name: "Creșă Popești Leordeni", path: "/cresa-popesti-leordeni" },
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
              Creșă în Popești Leordeni
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Primul loc în care îți lași copilul fără tine e un moment mare.
              Noi știm asta. La creșa <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light">Mica and Kids</Link> din
              Popești Leordeni, copiii de la 1 an și jumătate învață să fie
              independenți prin joacă, în <Link href="/galerie" className="text-green-dark underline hover:text-green-light">aer liber</Link> și
              într-un mediu cald, sigur și curat. Grupurile sunt mici, iar
              educatoarele acordă atenție fiecărui copil în parte.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Program flexibil, <Link href="/program-tarife" className="text-green-dark underline hover:text-green-light">tarife</Link> transparente
              și o curte cu animale, flori și legume crescute de copii. Nu e
              doar o creșă — e locul unde cel mic face primii lui prieteni.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
            >
              Programează o vizită →
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-soft">
            <div className="relative w-full h-80">
              <Image
                src="/images/reference/baby-1.webp"
                alt="Creșă Mica and Kids — îngrijire copii mici 1,5-3 ani în Popești Leordeni"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* De ce creșa noastră */}
      <div className="bg-cream/80 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-8">
            Ce face creșa noastră diferită
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Grupuri mici, atenție mare
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Lucrăm cu grupuri de maximum 8-10 copii. Asta înseamnă că
                educatoarea are timp să observe când un copil e trist, când e
                obosit sau când vrea să exploreze ceva nou. Nu e o sală mare,
                zgomotoasă, unde cel mic se pierde. E un spațiu unde fiecare
                copil e văzut. Respectăm <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">standardele educaționale</a> pentru
                învățământul preșcolar, dar mergem dincolo de ele — cu atenție
                individuală și activități adaptate ritmului fiecărui copil.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Afară, în fiecare zi
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Copiii de creșă au nevoie de mișcare, aer și lumină naturală.
                Ies în curte în fiecare zi, cu excepția cazurilor în care
                vremea nu permite. Au o grădină unde plantează flori și
                legume, animale de care se ocupă și spațiu liber pentru alergat
                și explorat. Asta îi ajută să-și dezvolte motricitatea, să fie
                mai calmi și să doarmă mai bine la prânz. Suntem în
                <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> Popești Leordeni</a>, o zonă cu mult
                verde, departe de agitația Bucureștiului, dar aproape — la 10
                minute de Berceni.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Rutină stabilă, fără rigiditate
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Copiii mici prosperă când știu ce urmează. Dimineața începe cu
                joacă liberă, apoi e micul dejun, activități structurate, joacă
                în curte, prânz, somn, gustare și din nou joacă. Dar nu suntem
                rigizi — dacă un copil nu vrea să doarmă, nu îl forțăm. Dacă
                vrea să stea în brațe, stă. Educatoarele noastre sunt
                pregătite să răspundă nevoilor <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">copiilor</a>, nu
                să bifeze un program. Funcționăm sub coordonarea
                <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> Inspectoratului Școlar Ilfov</a>, iar
                personalul are calificare specifică pentru creșă.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Mâncare gătită pe loc
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Copiii mănâncă preparate din ingrediente proaspete, gătite în
                bucătăria noastră. Nimic congelat, nimic preambalat. Meniul e
                variat și se schimbă săptămânal. La această vârstă, copiii
                descoperă gusturi și texturi — e important să aibă acces la
                mâncare reală, nu la snacksuri. Mesele se servesc împreună, la
                masă, iar educatoarele mănâncă cu copiii. Așa învață din
                exemplu.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* O zi la creșă */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-8">
            O zi la creșa Mica and Kids
          </h2>
          <div className="space-y-4">
            <div className="flex gap-6 items-start">
              <span className="text-2xl font-bold text-green-light min-w-[80px]">07:00</span>
              <p className="text-foreground/70 text-lg leading-relaxed pt-1">
                Primirea copiilor. Părinții predau copilul educatoarei, comunică
                cum a fost noaptea, dacă a mâncat dimineața, dacă e ceva de care
                trebuie să ținem cont.
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-2xl font-bold text-green-light min-w-[80px]">08:30</span>
              <p className="text-foreground/70 text-lg leading-relaxed pt-1">
                Micul dejun. Fructe, cereale, lapte sau ceai. Copiii mănâncă
                împreună la mese mici, adaptate înălțimii lor.
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-2xl font-bold text-green-light min-w-[80px]">09:30</span>
              <p className="text-foreground/70 text-lg leading-relaxed pt-1">
                Activități structurate: pictură, modelaj, jocuri senzoriale,
                ascultare de povești, inițiere în limba engleză prin cântece
                și jocuri.
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-2xl font-bold text-green-light min-w-[80px]">11:00</span>
              <p className="text-foreground/70 text-lg leading-relaxed pt-1">
                Joacă în curte. Copiii aleargă, se cățăără, hrănesc animalele,
                udă plantele, se joacă în nisip și cu apa. Timp de cel puțin o
                oră, în funcție de vreme.
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-2xl font-bold text-green-light min-w-[80px]">12:00</span>
              <p className="text-foreground/70 text-lg leading-relaxed pt-1">
                Prânz. Supă, fel principal și desert (fructe sau compot). Copiii
                învață să mănânce singuri, cu lingura și furculița.
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-2xl font-bold text-green-light min-w-[80px]">13:00</span>
              <p className="text-foreground/70 text-lg leading-relaxed pt-1">
                Somn. Fiecare copil are patul lui, cu așternut propriu. Camera
                e întunecată și liniștită. Copiii care nu vor să doarmă se
                joacă liniștit într-un colț.
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-2xl font-bold text-green-light min-w-[80px]">15:30</span>
              <p className="text-foreground/70 text-lg leading-relaxed pt-1">
                Gustare și joacă liberă. Copiii se trezesc treptat, mănâncă o
                gustare sănătoasă și apoi se joacă liber — înăuntru sau afară,
                după vreme.
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-2xl font-bold text-green-light min-w-[80px]">17:00</span>
              <p className="text-foreground/70 text-lg leading-relaxed pt-1">
                Activități relaxante: povești, muzică, jocuri de grup. Părinții
                încep să vină să-și ia copiii. Educatoarea le comunică cum a
                fost ziua.
              </p>
            </div>
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
