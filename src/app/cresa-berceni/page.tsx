import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Creșă pentru copiii din Berceni",
  description:
    "Creșă aproape de Berceni, în Popești Leordeni. Îngrijire pentru copii 1,5-3 ani cu grupuri mici, aer liber, mâncare gătită pe loc și personal calificat. La 10 minute de Berceni.",
  alternates: { canonical: "/cresa-berceni" },
  openGraph: {
    title: "Creșă pentru copiii din Berceni",
    description:
      "Creșă aproape de Berceni, în Popești Leordeni. Grupuri mici, aer liber și îngrijire afectuoasă pentru copii 1,5-3 ani.",
    url: "https://www.gradinitamicaandkids.ro/cresa-berceni",
    images: ["/images/og-default.webp"],
  },
};

const faqItems = [
  {
    question: "Copilul meu are 1 an și jumătate. E prea mic pentru creșă?",
    answer:
      "Nu e prea mic. La 1 an și jumătate, copiii sunt curioși, vor să exploreze și au nevoie de interacțiune cu alți copii. La creșa noastră, copiii de această vârstă au un spațiu sigur, cu materiale potrivite vârstei, iar educatoarele sunt pregătite pentru nevoile celor mici — de la schimbat scutece până la momentele de separare de părinte. Recomandăm o perioadă de adaptare graduală, cu părintele prezent în primele zile.",
  },
  {
    question: "Cum fac drumul din Berceni până la creșa voastră?",
    answer:
      "Drumul durează aproximativ 10 minute cu mașina pe Șoseaua Berceni spre Popești Leordeni. Parcarea e generoasă, nu stai cu mașina pe drum. Cu transportul în comun, durează 25-30 de minute. Mulți părinți din Berceni care lucrează în zonă fac drumul dimineața fără probleme. Adresa noastră: Strada Sfântul Gheorghe 5B, Popești Leordeni.",
  },
  {
    question: "Ce e diferit față de creșele din Berceni?",
    answer:
      "Cele mai multe creșe din Berceni sunt în apartamente adaptate, cu spațiu limitat și fără curte. Noi avem curte mare cu grădină, animale și spațiu de joacă în aer liber. Copiii ies afară în fiecare zi. Grupurile sunt mici — 8-10 copii, nu 20-25. Mâncarea e gătită pe loc, nu adusă de la catering. Și, poate cel mai important, educatoarele noastre au timp să țină în brațe un copil care plânge, să aștepte până mănâncă, să observe ce are nevoie.",
  },
  {
    question: "Pot vizita creșa înainte să decid?",
    answer:
      "Da, și insistăm să o faci. La această vârstă, decizia e mult despre cum te simți tu ca părinte în acel spațiu. Vino, vezi clasele, curtea, bucătăria. Uită-te cum interacționează educatoarele cu copiii. Programează o vizită la 0740 467 056 sau prin formularul de contact.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creșă pentru copiii din Berceni — Mica and Kids",
  description:
    "Creșă pentru copii 1,5-3 ani din cartierul Berceni, situată în Popești Leordeni la 10 minute de mers. Grupuri mici, aer liber, îngrijire afectuoasă.",
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
    name: "Copii 1,5-3 ani din Berceni",
  },
};

export default function CresaBerceniPage() {
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
          { name: "Creșă Berceni", path: "/cresa-berceni" },
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
              Creșă pentru copiii din Berceni
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Cauți o creșă pentru cel mic, dar în Berceni nu găsești ce
              vrei? <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light">Mica and Kids</Link> e în
              <Link href="/cresa-popesti-leordeni" className="text-green-dark underline hover:text-green-light"> Popești Leordeni</Link>, la 10
              minute de mașină. Copiii de la 1 an și jumătate au aici curte
              cu iarbă, animale și grădină — lucruri pe care o creșă în
              apartament din Berceni nu le poate oferi.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Grupuri mici, 8-10 copii. Educatoare cu răbdare și experiență
              pentru cei mici. <Link href="/program-tarife" className="text-green-dark underline hover:text-green-light">Program flexibil</Link> și
              mâncare gătită pe loc. Nu e doar o creșă — e locul unde cel mic
              face primii pași spre independență.
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
                src="/images/reference/baby-1.webp"
                alt="Creșă Mica and Kids — îngrijire copii mici 1,5-3 ani din Berceni, în Popești Leordeni"
                width={350}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* De ce vin părinții din Berceni */}
      <div className="bg-cream/80 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-8">
            De ce aleg părinții din Berceni creșa noastră
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Spațiu, nu apartament
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Majoritatea creșelor din Berceni funcționează în apartamente
                adaptate. Sală mică, fără curte, fără grădină. Copiii stau
                înăuntru tot timpul. La noi, cel mic are o curte mare cu
                iarbă, nisip, leagăne și animale. Iese afară în fiecare zi —
                are nevoie de aer, de mișcare, de lumină naturală. La 1,5
                ani, copilul explorează lumea cu tot corpul. Nu poți face
                asta într-un apartament de 3 camere. Vezi
                <Link href="/galerie" className="text-green-dark underline hover:text-green-light"> pozele</Link> ca să
                îți faci o idee despre spațiul nostru.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Grupuri mici, atenție individuală
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                La 1,5-3 ani, copilul are nevoie de atenție constantă. Nu
                pentru că e neajutorat, ci pentru că descoperă totul pentru
                prima dată — cum să mănânce singur, cum să-și exprime ce
                vrea, cum să se joace cu alți copii. Cu 20 de copii într-o
                sală, educatoarea nu poate fi prezentă pentru fiecare. Cu
                8-10 copii, da. La noi, educatoarea știe cum a dormit fiecare
                copil, ce l-a bucurat azi, ce l-a speriat. Respectăm
                <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> standardele educaționale</a> pentru
                creșă, dar le aplicăm cu atenție individuală, nu în masă.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Mâncare gătită pe loc
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Copiii de creșă au nevoie de mâncare adaptată vârstei —
                texturi moi, porții mici, ingrediente simple și proaspete.
                Noi gătim zilnic, în bucătăria noastră. Supe, piureuri,
                feluri principale, fructe. Nimic congelat, nimic
                preambalat. Multe creșe din Berceni folosesc catering —
                mâncare adusă, încălzită, servită din tăvi de plastic. La
                această vârstă, relația cu mâncarea se formează. E
                important să fie una sănătoasă. Suntem în
                <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> Popești Leordeni</a>, o
                zonă cu acces la produse locale proaspete.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-green-dark mb-3">
                Adaptare graduală, fără traume
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Prima separare de părinte e un moment sensibil. Nu o
                forțăm. În prima săptămână, copilul vine 2-3 ore, cu
                părintele în apropiere. Treptat, creștem durata. Educatoarele
                noastre știu să gestioneze plânsul, să distragă atenția, să
                creeze o legătură cu cel mic. Comunicăm zilnic cu părinții —
                cum a mâncat, cât a dormit, cum s-a simțit. Funcționăm sub
                coordonarea <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">Inspectoratului Școlar Ilfov</a>,
                iar programul nostru respectă
                <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> drepturile copilului</a> la
                îngrijire sigură și afectuoasă.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Drumul din Berceni */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-8">
            Drumul din Berceni până la creșa noastră
          </h2>
          <div className="bg-cream rounded-3xl p-8 shadow-soft">
            <p className="text-foreground/70 text-lg leading-relaxed mb-4">
              <strong className="text-green-dark">Cu mașina:</strong> Pe
              Șoseaua Berceni, spre sud, spre Popești Leordeni. Aproximativ
              10 minute în afara orelor de vârf, 15-20 minute în vârf.
              Parcarea e generoasă — intri, lași copilul, pleci liniștit.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-4">
              <strong className="text-green-dark">Cu transportul în comun:</strong> Linii
              de autobuz din Berceni spre Popești Leordeni. Timp de transport
              aproximativ 25-30 de minute. Contactează-ne pentru detalii
              despre ruta potrivită.
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
            Vino din Berceni să vezi creșa
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            La această vârstă, decizia e despre cum te simți tu în acel
            spațiu. Vino, vezi clasele, curtea, bucătăria. Programează o
            vizită — te așteptăm cu drag.
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
