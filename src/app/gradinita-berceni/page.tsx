import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Grădiniță pentru copiii din Berceni",
  description:
    "Grădiniță aproape de Berceni, în Popești Leordeni. Copiii 3-6 ani învață prin joacă în aer liber, cu natură, animale și inițiere în engleză. La 10 minute de cartierul Berceni.",
  alternates: { canonical: "/gradinita-berceni" },
  openGraph: {
    title: "Grădiniță pentru copiii din Berceni",
    description:
      "Grădiniță aproape de Berceni, în Popești Leordeni. Învățare prin joacă, natură și activități în aer liber.",
    url: "https://gradinitamicaandkids.ro/gradinita-berceni",
    images: ["/images/mascota/albinuta.webp"],
  },
};

const faqItems = [
  {
    question: "Cât de departe e grădinița de Berceni?",
    answer:
      "Suntem în Popești Leordeni, la aproximativ 10 minute de mașină din cartierul Berceni. Părinții care lucrează în zona Berceni pot lăsa copilul dimineața la grădiniță și ajunge ușor la birou. Drumul e direct, fără trafic complicat, iar parcarea de la grădiniță e generoasă — nu stai cu mașina pe drum ca în centrul Bucureștiului.",
  },
  {
    question: "Copilul meu e la creșă în Berceni. Se poate transfera la grădinița voastră?",
    answer:
      "Da, primim copii transferați de la alte creșe sau grădinițe din zona Berceni. Recomandăm o vizită înainte de transfer, ca cel mic să vadă spațiul și să cunoască educatoarele. Adaptarea e mai ușoară dacă copilul vine cu un părinte în primele zile. Programează o vizită și discutăm detaliile.",
  },
  {
    question: "Aveți copii din Berceni care vin la grădinița voastră?",
    answer:
      "Da, o parte din copiii noștri vin din Berceni și din zonele învecinate — Tudor Arghezi, Văcărești, Răcari. Părinții aleg Mica and Kids pentru că vor o grădiniță cu curte mare, natură și grupuri mici, lucruri pe care le greu găsești în cartierele dense din București.",
  },
  {
    question: "Cum se compară grădinița voastră cu cele din Berceni?",
    answer:
      "Grădinițile din Berceni sunt, în majoritate, de stat — cu grupuri mari și fără curte proprie. Noi lucrăm cu grupuri de 8-10 copii, avem curte cu grădină și animale, iar copiii petind minimum două ore pe zi afară. Mâncarea e gătită pe loc, nu adusă de la firmă de catering. E o diferență pe care o simți când intri pe ușă — și pe care o simte și copilul.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Grădiniță pentru copiii din Berceni — Mica and Kids",
  description:
    "Grădiniță pentru copii 3-6 ani din cartierul Berceni, situată în Popești Leordeni la 10 minute de mers. Învățare prin joacă, natură și grupuri mici.",
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
    name: "Berceni, București",
  },
  audience: {
    "@type": "Audience",
    name: "Copii 3-6 ani din Berceni",
  },
};

export default function GradinitaBerceniPage() {
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
          { name: "Grădiniță Berceni", path: "/gradinita-berceni" },
        ]}
      />

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-light text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Mica and Kids · Aproape de Berceni
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-6 leading-tight">
              Grădiniță pentru copiii din Berceni
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Locuiești în Berceni și cauți o grădiniță unde copilul tău să
              aibă curte, natură și spațiu? <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light">Mica and Kids</Link> e
              în <Link href="/gradinita-popesti-leordeni" className="text-green-dark underline hover:text-green-light">Popești Leordeni</Link>, la 10
              minute de mașină. Departe de agitația cartierului, dar aproape
              de casă. Copiii de 3-6 ani petind aici zile pline de joacă,
              descoperiri și aer curat.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Grupuri mici, educatoare calificate, <Link href="/program-tarife" className="text-green-dark underline hover:text-green-light">program flexibil</Link> și
              o curte cu animale, flori și legume crescute de copii. Nu e
              o grădiniță de cartier cu sală mică și fără curte. E un loc
              unde copilul respiră.
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
                src="/images/reference/about-first.webp"
                alt="Grădiniță Mica and Kids — copii din Berceni învățând prin joacă în natură, la 10 minute de cartierul Berceni"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* De ce vin părinții din Berceni */}
      <div className="bg-cream/80 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-8">
            De ce vin părinții din Berceni la noi
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Cartierele dense nu au loc de joacă
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Berceni e un cartier vechi, cu blocuri dese și puțin verde.
                Grădinițele de stat din zonă au grupuri de 25-30 de copii și,
                în multe cazuri, nici nu au curte proprie. Copiii stau în
                clasă tot timpul. La <Link href="/galerie" className="text-green-dark underline hover:text-green-light">Mica and Kids</Link>, copiii
                ies în curte în fiecare zi. Aleargă pe iarbă, se joacă în
                nisip, hrănesc animalele, udă legumele. E o diferență pe care
                o vezi în starea de spirit a copilului — e mai calm, mai
                vesel, doarme mai bine.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                10 minute de mașină, dar o lume deosebită
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Drumul din Berceni până la noi e simplu — pe Șoseaua Berceni,
                spre Popești Leordeni. Fără trafic complicat, fără treceri
                prin centru. Părinții care ne-au ales ne-au spus același
                lucru: cele 10 minute de drum merită. Copilul ajunge la o
                grădiniță cu spațiu, cu natură și cu grupuri mici, lucruri pe
                care nu le găsești în <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">Popești Leordeni</a> și
                Berceni la fel de ușor. Suntem o alternativă reală pentru
                părinții care vor mai mult decât o sală de clasă.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Grupuri mici, atenție reală
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                La grădinițele de stat din Berceni, o educatoare are 25-30 de
                copii. Nu e vina ei — e sistemul. Dar realitatea e că nu
                poate acorda atenție fiecărui copil. La noi, grupurile sunt
                de 8-10 copii. Educatoarea știe cum a dormit fiecare, ce l-a
                bucurat azi, unde are nevoie de încurajare. Respectăm
                <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> standardele educaționale</a> pentru
                preșcolari, dar le aplicăm cu atenție individuală, nu în
                masă. Funcționăm sub autoritatea
                <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> Inspectoratului Școlar Ilfov</a>, iar
                personalul are calificare specifică pentru învățământ
                preșcolar, conform <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">drepturilor copilului</a> la
                educație de calitate.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Mâncare gătită pe loc, nu catering
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Multe grădinițe din Berceni folosesc catering — mâncare
                adusă, încălzită, servită. Noi gătim pe loc. Bucătăria
                noastră pregătește zilnic supe, feluri principale și gustări
                din ingrediente proaspete. Copiii mănâncă mâncare reală, nu
                tăvi de plastic cu porții identice. La această vârstă,
                relația cu mâncarea se formează — și e important să fie una
                sănătoasă.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cum ajungi */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-8">
            Cum ajungi de la Berceni la grădinița noastră
          </h2>
          <div className="bg-cream rounded-3xl p-8 shadow-soft">
            <p className="text-foreground/70 text-lg leading-relaxed mb-4">
              <strong className="text-green-dark">Cu mașina:</strong> Pe
              Șoseaua Berceni, spre sud, spre Popești Leordeni. Drumul durează
              aproximativ 10 minute în afara orelor de vârf și 15-20 minute
              în orele de vârf. Parcarea grădiniței e generoasă — intri, lași
              copilul, pleci.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-4">
              <strong className="text-green-dark">Cu transportul în comun:</strong> Există
              linii de autobuz care leagă Berceni de Popești Leordeni. Timpul
              de transport e aproximativ 25-30 de minute. Te așteptăm să ne
              contactezi pentru detalii specifice despre ruta potrivită.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              <strong className="text-green-dark">Adresa:</strong> Strada
              Sfântul Gheorghe 5B, Popești Leordeni, Ilfov.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-cream/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Vino din Berceni să ne cunoști
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            10 minute de drum, dar o viață diferită pentru copilul tău.
            Programează o vizită și vino să vezi cum e la noi.
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
