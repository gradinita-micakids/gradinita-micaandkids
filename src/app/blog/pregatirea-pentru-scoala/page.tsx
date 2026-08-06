import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pregătirea pentru școală — ce contează cu adevărat",
  description:
    "Pregătirea pentru școală nu înseamnă citit la 5 ani. Ce abilități are nevoie copilul, cum se construiesc și ce pot face părinții acasă.",
  alternates: { canonical: "/blog/pregatirea-pentru-scoala" },
  openGraph: {
    title: "Pregătirea pentru școală — ce contează cu adevărat",
    description:
      "Pregătirea pentru școală nu înseamnă citit la 5 ani. Ce abilități are nevoie copilul și cum se construiesc.",
    url: "https://gradinitamicaandkids.ro/blog/pregatirea-pentru-scoala",
    images: ["/images/og-default.webp"],
  },
};

const faqItems = [
  {
    question: "Ar trebui să-mi învăț copilul să citească înainte de școală?",
    answer:
      "Nu e nevoie, și în unele cazuri poate fi contraproductiv. Dacă copilul învață să citească acasă, cu o metodă diferită de cea pe care o va folosi la școală, se va confunda. Ce poți face e să-i citești povești în fiecare seară, să-i arăți că cărțile sunt distractive și să-l lași să răsfoiască singur. Curiozitatea pentru citit e mai importantă decât cititul în sine la această vârstă.",
  },
  {
    question: "La ce vârstă începe pregătirea pentru școală?",
    answer:
      "Pregătirea pentru școală începe de la 3 ani — nu cu litere și numere, ci cu abilități de viață. Să mănânce singur, să se îmbrace singur, să stea la masă, să aștepte rândul, să asculte o explicație. Aceste abilități se construiesc în timp, prin rutina zilnică de la grădiniță. La 5-6 ani adăugăm activități mai structurate — recunoașterea literelor, numărare, grafomotricitate.",
  },
  {
    question: "Cum știu dacă copilul e pregătit pentru școală?",
    answer:
      "Nu e despre citit sau socotit. E despre: poate sta 15 minute pe scaun fără să se ridice? Poate asculta o poveste până la capăt? Poate să-și exprime nevoile verbal? Poate să lucreze în grup? Poate să se descurce singur la baie? Dacă răspunsul e da la aceste întrebări, copilul e pregătit. Restul învață la școală — acolo e rolul școlii.",
  },
  {
    question: "Ce faceți diferit la grupa mare (5-6 ani)?",
    answer:
      "Creștem gradul de structură. Copiii fac activități mai lungi — 20-30 de minute, nu 10. Recunosc litere, numără până la 20, exersează trasarea liniilor și cercurilor pentru grafomotricitate. Învață să lucreze în echipă pe proiecte scurte. Dar nu transformăm grădinița în școală — copiii de 5 ani au încă nevoie de joacă liberă și timp afară.",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Pregătirea pentru școală — ce contează cu adevărat",
  description:
    "Pregătirea pentru școală nu înseamnă citit la 5 ani. Ce abilități are nevoie copilul, cum se construiesc și ce pot face părinții acasă.",
  author: {
    "@type": "Organization",
    name: "Mica and Kids",
  },
  publisher: {
    "@type": "Organization",
    name: "Mica and Kids",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strada Sfântul Gheorghe 5B",
      addressLocality: "Popești Leordeni",
      addressRegion: "Ilfov",
      addressCountry: "RO",
    },
  },
  datePublished: "2026-01-25",
  dateModified: "2026-01-25",
  mainEntityOfPage: {
    "@type": "WebPage",
    url: "https://gradinitamicaandkids.ro/blog/pregatirea-pentru-scoala",
  },
};

export default function PregatireaPentruScoalaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <FAQJsonLd items={faqItems} />
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: "Pregătirea pentru școală", path: "/blog/pregatirea-pentru-scoala" },
        ]}
      />

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <p className="text-green-light text-sm font-bold uppercase tracking-[0.2em] mb-4">
          Tranziția grădiniță → școală
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-green-dark mb-6 leading-tight">
          Pregătirea pentru școală — ce contează cu adevărat
        </h1>
        <p className="text-foreground/60 text-lg leading-relaxed mb-4">
          Mulți părinți se stresează că copilul de 5 ani nu știe să citească.
          Aud de la alte mame pe grupul de WhatsApp că „al meu citește deja"
          și intră în panică. Se uită pe internet la fișe de lucru, la
          aplicații de citit, la cursuri pregătitoare. Și uită, în toată
          agitația asta, ce înseamnă cu adevărat să fii pregătit pentru școală.
        </p>
        <p className="text-foreground/60 text-lg leading-relaxed">
          Am lucrat cu sute de copii la grădinița
          <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light"> Mica and Kids</Link> din
          <Link href="/gradinita-popesti-leordeni" className="text-green-dark underline hover:text-green-light"> Popești Leordeni</Link> și
          am văzut copiii plecând la școală. Unii știau literele. Alții nu.
          Toți s-au descurcat. Pentru că pregătirea pentru școală nu e
          despre litere. E despre altceva — și anume, despre lucrurile pe
          care le poți construi doar prin joacă, rutină și timp.
        </p>
      </div>

      {/* Secțiunea 1 — Mitul cititului */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          1. Mitul cititului la 5 ani
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            Să clarificăm: nu e nimic în neregulă dacă un copil de 5 ani
            citește. Unii copii sunt interesați de litere de la 3-4 ani și
            învață natural. Dar niciun copil nu ar trebui forțat să învețe
            să citească la această vârstă. Motivul nu e filozofic — e practic.
          </p>
          <p>
            Copiii care învață să citească acasă, cu o metodă diferită de
            cea pe care o va folosi învățătoarea, ajung la școală cu
            obiceiuri greșite. Învață să pronunțe literele într-un fel, iar
            la școală li se cere altfel. Se confundă. Se plictisesc pentru
            că „știu deja". Sau, dimpotrivă, se blochează pentru că metoda
            de acasă nu se potrivește cu cea de la școală. Respectăm
            <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> curriculumul</a> aprobat
            de Ministerul Educației — și acolo cititul începe în clasa I,
            nu la grădiniță.
          </p>
          <p>
            Ce poți face în schimb? Citește-i povești. În fiecare seară. Fă-i
            să iubească cărțile. Arată-i că cititul e o plăcere, nu o
            obligație. Un copil care vine la școală iubind cărțile va învăța
            să citească repede — pentru că vrea, nu pentru că e forțat.
          </p>
        </div>
      </div>

      {/* Secțiunea 2 — Abilități reale */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          2. Abilitățile care contează cu adevărat
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            Când copilul intră în clasa I, învățătoarea nu se așteaptă să
            citească. Se așteaptă să:
          </p>
          <div className="bg-cream rounded-3xl p-8 shadow-soft space-y-3">
            <p className="text-foreground/70 text-lg leading-relaxed">
              <strong className="text-green-dark">Steie pe scaun</strong> 15-20 de minute fără să se ridice. Pare simplu, dar un copil care n-a exersat asta la grădiniță va avea probleme. La noi, copiii petind timp la masă pentru activități — și creștem treptat durata.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              <strong className="text-green-dark">Asculte o explicație</strong> fără să întrerupă. Asta se învață în grup, la povești, la activități structurate. Nu se învață cu fișe acasă.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              <strong className="text-green-dark">Să-și exprime nevoile</strong> verbal. „Am nevoie de baie." „Nu am înțeles." „Mă poate ajuta cineva?" Un copil care nu poate cere ajutor va suferi în tăcere.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              <strong className="text-green-dark">Să se descurce singur</strong> la baie, la masă, cu hainele. La școală, nimeni nu-l ajută să-și pună paltonul sau să deschidă cutia de prânz.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              <strong className="text-green-dark">Să lucreze în grup</strong> — să împartă, să aștepte rândul, să asculte părerea altuia. Asta se învață doar în grup, prin <Link href="/galerie" className="text-green-dark underline hover:text-green-light">joacă</Link> și activități comune.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              <strong className="text-green-dark">Să recunoască litere și numere</strong> — nu să le scrie sau să citească, doar să le recunoască. A e pentru Ana, 1 e unu. Asta e suficient.
            </p>
          </div>
          <p>
            Toate aceste abilități se construiesc în timp, din grupa mică
            până la grupa mare. Nu se pot învăța într-o lună de vară cu
            fișe. Se învață prin rutina zilnică de la grădiniță — prin
            <Link href="/servicii" className="text-green-dark underline hover:text-green-light"> programul nostru structurat</Link>,
            prin interacțiune cu alți copii, prin joacă și prin exemple.
          </p>
        </div>
      </div>

      {/* Secțiunea 3 — Grafomotricitate */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          3. Grafomotricitatea — mâna se pregătește pentru scris
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            Grafomotricitatea e un cuvânt complicat pentru un lucru simplu:
            pregătirea mâinii pentru scris. Înainte să scrie litere, copilul
            trebuie să poată controla creionul — să tragă linii drepte,
            cercuri, zigzaguri, spirale. Asta nu se învață scriind litere.
            Se învață desenând.
          </p>
          <p>
            La grupa mare (5-6 ani), facem exerciții de grafomotricitate
            în fiecare săptămână. Copiii desenează linii pe foi cu pătrățele,
            urmăresc contururi, colorează fără să iasă din linii. E
            relaxant pentru ei — e ca un joc. Dar mâna lor învață. Când
            ajung la școală și învățătoarea le spune „scrie litera A", mâna
            lor știe deja să facă mișcarea.
          </p>
          <p>
            Părinții pot ajuta acasă fără fișe. Dați-i copilului foarfece
            (cu vârf rotund), plastilină, culori, hârtie. Lăsați-l să taie,
            să modeleze, să deseneze ce vrea. Fiecare dintre aceste
            activități antrenează mușchii mici ai mâinii. Funcționăm sub
            coordonarea <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">Inspectoratului Școlar Ilfov</a>,
            iar programul nostru respectă
            <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> drepturile copilului</a> la
            o educație care respectă ritmul său de dezvoltare.
          </p>
        </div>
      </div>

      {/* Secțiunea 4 — Ce pot face părinții */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          4. Ce pot face părinții acasă
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            Nu trebuie să fii învățătoare acasă. Nu trebuie să printezi fișe
            și să ții lecții. Pregătirea pentru școală se face prin lucruri
            simple, zilnice:
          </p>
          <p>
            <strong className="text-green-dark">Citește-i în fiecare seară.</strong> 15
            minute de povești înainte de culcare. Copilul ascultă, imaginează,
            pune întrebări. Așa învață vocabular, atenție și iubirea pentru
            cărți.
          </p>
          <p>
            <strong className="text-green-dark">Lasă-l să se îmbrace singur.</strong> Da,
            durează mai mult. Da, iese cu șosetele pe dos. Dar copilul care
            se îmbracă singur la 5 ani se descurcă la școală. Copilul care
            e îmbrăcat de mama nu.
          </p>
          <p>
            <strong className="text-green-dark">Gătește împreună cu el.</strong> Numără
            ouăle. Măsoară făina. Amestecă. Copilul învață numere, cantități,
            secvențe — și e distractiv. Nu e o lecție, e o activitate.
          </p>
          <p>
            <strong className="text-green-dark">Ieși afară.</strong> Parcul, curtea, pădurea.
            Copilul are nevoie de mișcare. Un copil care a alergat 2 ore
            după-amiaza va fi mai atent a doua zi la grădiniță. Am scris
            mai multe despre asta în articolul despre
            <Link href="/blog/beneficiile-jocului-in-aer-liber" className="text-green-dark underline hover:text-green-light"> beneficiile jocului în aer liber</Link>.
          </p>
          <p>
            <strong className="text-green-dark">Vorbește cu el.</strong> Nu cu copilăreli.
            Cu propoziții normale, cu vocabular real. Copilul învață limba
            ascultând. Dacă îi vorbești simplu, va avea un vocabular simplu.
            Dacă îi vorbești normal, va avea un vocabular bogat. Asta îl
            ajută enorm la școală — la citit, la înțeles texte, la exprimare.
          </p>
        </div>
      </div>

      {/* Secțiunea 5 — Semne */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          5. Semne că copilul e pregătit
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            Nu e o listă de bifat. E o privire de ansamblu. Dacă copilul
            face majoritatea acestor lucruri, e pregătit:
          </p>
          <div className="bg-cream rounded-3xl p-8 shadow-soft space-y-3">
            <p className="text-foreground/70 text-lg leading-relaxed">
              ✓ Se poate concentra 15-20 de minute pe o activitate
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              ✓ Își amintește și transmite mesaje simple („a zis mama să vii să-l iei la 4")
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              ✓ Se descurcă la baie fără ajutor
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              ✓ Mănâncă singur, cu tacâmuri
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              ✓ Recunoacă propriul nume scris
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              ✓ Numără până la 10 și recunoacă cifrele
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              ✓ Poate sta într-un grup fără să perturbe activitatea
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              ✓ Desenează figuri simple — om, casă, floare
            </p>
          </div>
          <p>
            Dacă copilul nu face unele dintre acestea, nu e o problemă. E
            un semn că mai are nevoie de timp — și asta e exact ce oferă
            grădinița. Noi suntem în
            <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> Popești Leordeni</a>,
            aproape de <Link href="/gradinita-berceni" className="text-green-dark underline hover:text-green-light">Berceni</Link>,
            și primim copii la grupa mare care nu au fost la grădiniță
            înainte. Se adaptează. Au nevoie de timp și de un mediu potrivit —
            nu de fișe. Detalii despre <Link href="/program-tarife" className="text-green-dark underline hover:text-green-light">program și înscriere</Link> găsiți
            pe pagina noastră.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-cream/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Vrei să vezi cum pregătim copiii pentru școală?
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Vino la grădinița noastră din Popești Leordeni și vezi grupa
            mare în acțiune. Programează o vizită — fără obligații.
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
