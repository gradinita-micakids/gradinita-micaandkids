import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Afterschool în Popești Leordeni",
  description:
    "Afterschool pentru copii 6-12 ani în Popești Leordeni, Ilfov. Sprijin pentru teme, activități creative, sport și dezvoltare personală după programul școlar.",
  alternates: { canonical: "/afterschool-popesti-leordeni" },
  openGraph: {
    title: "Afterschool în Popești Leordeni",
    description:
      "Afterschool pentru copii 6-12 ani în Popești Leordeni, Ilfov. Sprijin pentru teme, activități creative și sport.",
    url: "https://gradinitamicaandkids.ro/afterschool-popesti-leordeni",
    images: ["/images/mascota/albinuta.webp"],
  },
};

const faqItems = [
  {
    question: "Ce face copilul la afterschool după școală?",
    answer:
      "După ce vine de la școală, copilul are timp pentru teme — cu ajutorul unei educatoare care verifică și explică, nu doar supraveghează. Apoi urmează o gustare caldă, activități creative (pictură, modelaj, ateliere), timp de joacă în curte și, de două ori pe săptămână, sport. Programul e structurat, dar cu spațiu pentru relaxare — copilul a stat 6 ore pe scaun la școală, are nevoie de mișcare și joacă, nu de încă o oră de stat la masă.",
  },
  {
    question: "Îl ajutați cu temele sau doar le verificați?",
    answer:
      "Facem ambele. Educatoarea stă cu copilul și îl ajută să înțeleagă ce nu a prins la clasă. Nu îi facem temele în locul lui — îl învățăm cum să le facă singur. Verificăm la final că temele sunt complete și corecte. Dacă observăm că un copil are dificultăți la un anumit obiectiv, comunicăm cu părinții și găsim soluții împreună.",
  },
  {
    question: "Cum ajunge copilul de la școală la afterschool?",
    answer:
      "Părinții pot aduce copilul direct la noi, sau putem discuta despre posibilitatea de a-l prelua de la școală, în funcție de numărul de copii de la aceeași școală. Suntem în Popești Leordeni, aproape de școlile din zonă. Contactează-ne pentru a discuta detaliile specifice situației tale.",
  },
  {
    question: "Ce program are afterschool-ul?",
    answer:
      "Afterschool-ul funcționează de Luni până Vineri. Copiii sosesc după orele de școală, de obicei între 12:00 și 13:30, și pot sta până la 18:30. În vacanțele școlare, oferim program complet — copiii vin dimineața și petind toată ziua la noi, cu activități speciale de vacanță.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Afterschool în Popești Leordeni — Mica and Kids",
  description:
    "Afterschool pentru copii cu vârste între 6 și 12 ani în Popești Leordeni, Ilfov. Sprijin pentru teme, activități creative, sport și dezvoltare personală.",
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
    name: "Copii 6-12 ani",
  },
};

export default function AfterschoolPopestiLeordeniPage() {
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
          { name: "Afterschool Popești Leordeni", path: "/afterschool-popesti-leordeni" },
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
              Afterschool în Popești Leordeni
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              După orele de școală, copilul are nevoie de un loc unde să
              respire. La afterschool-ul <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light">Mica and Kids</Link> din
              Popești Leordeni, copiii de 6-12 ani își fac temele cu ajutor,
              mănâncă o gustare caldă, apoi se joacă, aleargă în
              <Link href="/galerie" className="text-green-dark underline hover:text-green-light"> curte</Link>, pictează sau
              fac sport. Nu e o prelungire a școlii — e locul unde copilul
              se descarcă după o zi lungă pe scaun.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Program flexibil, <Link href="/program-tarife" className="text-green-dark underline hover:text-green-light">tarife</Link> clare
              și o echipă care știe cum să lucreze cu copiii de școală
              primară — cu răbdare, cu umor și fără presiune.
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
                src="/images/reference/skater-1.webp"
                alt="Afterschool Mica and Kids — activități după școală pentru copii 6-12 ani în Popești Leordeni"
                width={350}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ce face copilul la afterschool */}
      <div className="bg-cream/80 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-8">
            Cum arată o zi la afterschool
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Sosirea și gustarea
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Copiii sosesc de la școală între 12:00 și 13:30. Prima lucru
                pe care îl fac e să mănânce. O gustare caldă — supă, un fel
                principal, fructe. Copiii de școală vin flămânzi și obosiți.
                Mâncarea e primul lucru care îi readuce la normal. Mesele se
                servesc împreună, în grup, iar educatoarele mănâncă cu ei.
                Asta creează un moment de socializare — copiii povestesc cum
                a fost la școală, ce au învățat, ce s-a întâmplat.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Temele — cu ajutor, nu cu presiune
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                După gustare, copiii își fac temele. O educatoare este
                prezentă, răspunde la întrebări, explică ce nu a fost înțeles
                la clasă. Nu facem temele în locul copilului — îl învățăm cum
                să le facă singur. Dacă un copil are dificultăți la matematică,
                îi explicăm altfel. Dacă nu se descurcă la română, lucrăm
                împreună. Scopul e ca temele să fie făcute și înțelese, nu
                doar bifate. Respectăm <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">programa școlară</a> și
                lucrăm în paralel cu ceea ce copiii învață la școală.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Activități și joacă liberă
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                După teme, copiii au timp pentru activități. Pictură,
                modelaj, ateliere de creativitate, construcții, jocuri de
                societate. De două ori pe săptămână facem sport — în curte
                când e vreme bună, înăuntru când plouă. Copiii au și timp
                liber, nestructurat. Pot să se joace ce vor, să citească o
                carte, să stea de vorbă cu prietenii. Nu toate minutele
                trebuie să fie productive. Copiii au nevoie și de timp gol,
                unde se pot relaxa. Funcționăm sub coordonarea
                <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> Inspectoratului Școlar Ilfov</a>, iar
                programul nostru respectă <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">drepturile copilului</a> la
                odihnă și timp liber.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Vacanțele școlare — program complet
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                În vacanțele de iarnă, primăvară și vară, afterschool-ul
                devine program complet. Copiii vin dimineața și petind toată
                ziua la noi. Organizăm ateliere tematice, ieșiri în
                <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> natură</a>,
                vizite, jocuri de echipă și proiecte creative. E o variantă
                bună pentru părinții care lucrează în vacanțe și nu au cu
                cine lăsa copilul. Detalii despre <Link href="/petreceri" className="text-green-dark underline hover:text-green-light">evenimente speciale</Link> găsiți
                pe pagina dedicată.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* De ce afterschool-ul nostru */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-8">
            De ce să alegi afterschool-ul nostru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-3xl p-8 shadow-soft">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">
                Teme făcute și înțelese
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Copilul pleacă acasă cu temele făcute. Nu se mai ia seara cu
                părinții, cu nervi și certuri. Părintele ajunge acasă și
                petinde timp de calitate cu copilul, nu timp de teme.
              </p>
            </div>
            <div className="bg-cream rounded-3xl p-8 shadow-soft">
              <div className="text-3xl mb-4">🏃</div>
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">
                Mișcare în fiecare zi
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Copiii aleargă, se joacă în curte, fac sport. Nu stau încă 4
                ore pe scaun după 6 ore de școală. Mișcarea îi ajută să se
                descarce, să doarmă mai bine și să fie mai atenți a doua zi.
              </p>
            </div>
            <div className="bg-cream rounded-3xl p-8 shadow-soft">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">
                Activități creative
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Pictură, modelaj, ateliere de creativitate. Copiii au ocazia
                să facă lucruri cu mâinile lor, să experimenteze, să
                creeze — lucruri pe care școala nu întotdeauna are timp să
                le ofere.
              </p>
            </div>
            <div className="bg-cream rounded-3xl p-8 shadow-soft">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">
                Grupuri mici
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Lucrăm cu grupuri mici. Educatoarea cunoaște fiecare copil,
                știe la ce e bun, ce îl bucură, unde are nevoie de ajutor. Nu
                e un afterschool de 50 de copii unde nimeni nu te vede.
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
            <Link href="/gradinita-popesti-leordeni" className="bg-cream rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow no-underline">
              <h3 className="font-display text-lg font-bold text-green-dark mb-2">Grădiniță în Popești Leordeni</h3>
              <p className="text-sm text-foreground/60">Pentru copii 3-6 ani — învățare prin joacă în aer liber și natură</p>
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
