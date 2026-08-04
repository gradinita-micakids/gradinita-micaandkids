import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Activități senzoriale pentru copii — ghid practic",
  description:
    "Activități senzoriale pentru copii de 1,5-6 ani: ce sunt, de ce contează și cum le poți face acasă. Idei simple cu materiale din bucătărie și curte.",
  alternates: { canonical: "/blog/activitati-senzoriale-copii" },
  openGraph: {
    title: "Activități senzoriale pentru copii — ghid practic",
    description:
      "Activități senzoriale pentru copii 1,5-6 ani: ce sunt, de ce contează și cum le faci acasă.",
    url: "https://gradinitamicaandkids.ro/blog/activitati-senzoriale-copii",
    images: ["/images/mascota/albinuta.webp"],
  },
};

const faqItems = [
  {
    question: "De la ce vârstă pot face activități senzoriale cu copilul?",
    answer:
      "De la 6 luni. Un copil de 6 luni care apucă o lingură de plastic și una de metal simte texturi și greutăți diferite — asta e o activitate senzorială. Nu trebuie să fie complicat. Copilul small explorează lumea prin simțuri, iar fiecare experiență nouă construiește conexiuni în creier. La 1,5-3 ani, activitățile devin mai variate: nisip, apă, plastilină, orez, paste, frunze uscate.",
  },
  {
    question: "Activitățile senzoriale înseamnă mizerie. Cum le gestionez?",
    answer:
      "Da, e mizerie. Dar ăla e și punctul. Copilul învață prin atingere, prin manipulare, prin experimentare. Dacă vrei să eviți mizeria, pregătește un spațiu delimitat — o față de masă pe jos, o tavă mare, o pătură veche. Pune copilul cu scutec sau haine vechi. Acceptă că se murdărește — și asta e bine. Murdăria se spală. Experiența rămâne.",
  },
  {
    question: "Pot face activități senzoriale cu materiale din casă?",
    answer:
      "Da, majoritatea. Orez crud într-o tavă, pastă în formă de tuburi, frunze uscate din parc, pietre, apă cu colorant alimentar, făină, semințe. Nu ai nevoie de jucării scumpe sau kituri speciale. Cele mai bune activități senzoriale folosesc materiale simple, pe care copilul le întâlnește și în viața de zi cu zi.",
  },
  {
    question: "Cum facem activități senzoriale la grădinița voastră?",
    answer:
      "În fiecare săptămână avem cel puțin 2-3 activități senzoriale. Copiii lucrează cu nisip, apă, plastilină, colorant, frunze, pietre, semințe. Multe se fac în curte — copiii ating pământul, simt textura frunzelor, ascultă sunetele naturii. Nu e o activitate separată de restul zilei. E parte din joaca lor zilnică.",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Activități senzoriale pentru copii — ghid practic",
  description:
    "Activități senzoriale pentru copii 1,5-6 ani: ce sunt, de ce contează și cum le poți face acasă.",
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
  datePublished: "2026-02-01",
  dateModified: "2026-02-01",
  mainEntityOfPage: {
    "@type": "WebPage",
    url: "https://gradinitamicaandkids.ro/blog/activitati-senzoriale-copii",
  },
};

export default function ActivitatiSenzorialeCopiiPage() {
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
          { name: "Activități senzoriale pentru copii", path: "/blog/activitati-senzoriale-copii" },
        ]}
      />

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <p className="text-green-light text-sm font-bold uppercase tracking-[0.2em] mb-4">
          Dezvoltare & Joacă
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-green-dark mb-6 leading-tight">
          Activități senzoriale pentru copii — ghid practic
        </h1>
        <p className="text-foreground/60 text-lg leading-relaxed mb-4">
          Copilul tău de 2 ani a turnat orez pe jos și l-a privit cum se
          împrăștie. Apoi l-a adunat cu mâinile, l-a lăsat să curgă printre
          degete, l-a pus într-o cană, l-a răsturnat din nou. Tu te-ai
          enervat pentru că e mizerie. El a făcut cel mai important
          experiment al zilei.
        </p>
        <p className="text-foreground/60 text-lg leading-relaxed">
          Activitățile senzoriale sunt modul în care copiii învață despre
          lume. Nu prin explicații — prin atingere, miros, gust, auz și
          vedere. La grădinița
          <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light"> Mica and Kids</Link> din
          <Link href="/gradinita-popesti-leordeni" className="text-green-dark underline hover:text-green-light"> Popești Leordeni</Link>,
          le folosim în fiecare zi. Aici explicăm de ce contează și cum le
          poți face și acasă.
        </p>
      </div>

      {/* Secțiunea 1 — Ce sunt */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          1. Ce sunt activitățile senzoriale
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            Orice activitate care stimulează unul sau mai multe simțuri e o
            activitate senzorială. Copilul care scufundă mâna în nisip și
            simte granulația. Copilul care miroase o frunză de mentă. Copilul
            care ascultă sunetul orezului turnat într-o sticlă. Copilul care
            amestecă colorant în apă și vede cum se schimbă culoarea. Toate
            acestea sunt activități senzoriale.
          </p>
          <p>
            La prima vedere par simple — copilul se joacă. Dar în creierul
            lui se întâmplă lucruri complexe. Fiecare simț stimulat creează
            conexiuni neuronale. Cu cât mai multe experiențe senzoriale, cu
            atât mai multe conexiuni. Creierul copilului se dezvoltă
            exploziv în primii 3 ani — iar activitățile senzoriale sunt
            combustibilul pentru această dezvoltare. Organizația
            <a href="https://www.salvaticopiii.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> Salvați Copiii</a> subliniază
            importanța stimulării timpurii pentru dezvoltarea cognitivă și
            emoțională a copiilor.
          </p>
        </div>
      </div>

      {/* Secțiunea 2 — De ce contează */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          2. De ce contează
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            <strong className="text-green-dark">Dezvoltare cognitivă.</strong> Copilul
            care toarnă apă dintr-un pahar în altul învață despre volum,
            greutate, cauză și efect. Nu poate explica asta verbal, dar
            corpul lui înțelege. Mai târziu, când la școală întâlnește
            conceptul de volum, va avea o bază senzorială pe care să
            construiască. Copiii care au avut multe experiențe senzoriale
            învață mai ușor concepte abstracte.
          </p>
          <p>
            <strong className="text-green-dark">Reglare emoțională.</strong> Activitățile
            senzoriale calmează. Copilul care e agitat se liniștește când
            bagă mâinile în nisip sau apă. Repetitivitatea — turnat, presat,
            modelat — e liniștitoare. E motivul pentru care adulții joacă
            cu fidget toys sau mestecă gumă. La copii, efectul e și mai
            puternic. Ministerul <a href="https://www.ms.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">Sănătății</a> recunoaște
            importanța activităților structurate pentru sănătatea mintală
            a copiilor.
          </p>
          <p>
            <strong className="text-green-dark">Motricitate fină.</strong> Copilul
            care ridică boabe de orez cu degetele, care răsucește
            plastilină, care taie frunze cu foarfeca — își antrenează
            mușchii mici ai mâinii. Acești mușchi sunt esențiali pentru
            scris, pentru descheiat nasturi, pentru ținut lingura. Am
            scris mai multe despre asta în articolul despre
            <Link href="/blog/pregatirea-pentru-scoala" className="text-green-dark underline hover:text-green-light"> pregătirea pentru școală</Link>.
          </p>
          <p>
            <strong className="text-green-dark">Vocabular.</strong> Copilul
            care atinge o suprafață aspră învață cuvântul „aspru". Cel care
            miroase o lămâie învață „acru". Cel care aude zgomotul
            semințelor învață „zgomotos". Fără experiența senzorială,
            cuvintele sunt abstracte. Cu ea, cuvintele au sens.
          </p>
        </div>
      </div>

      {/* Secțiunea 3 — Idei acasă */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          3. Idei de activități senzoriale pentru acasă
        </h2>
        <div className="space-y-6">
          <div className="bg-cream rounded-3xl p-8 shadow-soft">
            <h3 className="font-display text-lg font-bold text-green-dark mb-3">
              🍚 Tava cu orez (1,5-5 ani)
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Pune orez crud într-o tavă mare (sau o cutie de carton). Lasă
              copilul să-l atingă, să-l toarne dintr-un pahar în altul, să
              ascundă obiecte mici în el și să le găsească. Adaugă linguri,
              pahare, pâlnii. 30 de minute de joacă garantate. Când te-ai
              saturat de mizerie, aduni orezul și-l pui într-o pungă pentru
              data viitoare.
            </p>
          </div>

          <div className="bg-cream rounded-3xl p-8 shadow-soft">
            <h3 className="font-display text-lg font-bold text-green-dark mb-3">
              💧 Apa cu colorant (2-6 ani)
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Trei pahare cu apă. Adaugă colorant alimentar — roșu, albastru,
              galben. Lasă copilul să amestece culorile cu o lingură sau cu
              mâinile. Vede cum roșu + albastru = mov. Cum galben + albastru
              = verde. E chimie și artă în același timp. Pune un prosop sub
              pahare și acceptă că se varsă.
            </p>
          </div>

          <div className="bg-cream rounded-3xl p-8 shadow-soft">
            <h3 className="font-display text-lg font-bold text-green-dark mb-3">
              🍃 Coșul din natură (2-6 ani)
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              La plimbare, copilul adună frunze, pietre, bețe, flori,
              ghinde. Acasă, le pune pe o tavă și le sortează — după
              mărime, după culoare, după textură. Pietrele sunt grele.
              Frunzele sunt ușoare. Ghindele sunt netede. Fiecare obiect
              are o proprietate senzorială diferită. Vezi
              <Link href="/galerie" className="text-green-dark underline hover:text-green-light"> pozele</Link> din
              curtea noastră ca să vezi cum arată asta în practică.
            </p>
          </div>

          <div className="bg-cream rounded-3xl p-8 shadow-soft">
            <h3 className="font-display text-lg font-bold text-green-dark mb-3">
              🫏 Plastilina făcută în casă (1,5-6 ani)
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              2 căni făină, 1 cană apă, 1 cană sare, 1 lingură ulei. Frământă
              împreună cu copilul. Adaugă colorant. Copilul simte textura
              aluatului — moale, elastic, rece. Apoi modelează: bilă, șarpe,
              om. Tăiere, presare, rulare — toate antrenează mâna. Și e
              comestibilă (deși nu e gustoasă), deci e sigură pentru cei
              mici care bagă totul în gură.
            </p>
          </div>

          <div className="bg-cream rounded-3xl p-8 shadow-soft">
            <h3 className="font-display text-lg font-bold text-green-dark mb-3">
              🎵 Sticle sonore (1,5-5 ani)
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              4-5 sticle mici (de apă). În fiecare pune ceva diferit: orez,
              fasole, nisip, semințe de floarea-soarelui, pietre mici.
              Închide-le bine. Copilul le scutură și așteaptă sunete
              diferite. Apoi le sortează — care sună mai tare, care mai
              încet. E o activitate auditivă care dezvoltă atenția și
              discriminarea sunetelor.
            </p>
          </div>
        </div>
      </div>

      {/* Secțiunea 4 — La grădiniță */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          4. Cum facem activități senzoriale la grădiniță
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            La grădinița noastră din
            <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> Popești Leordeni</a>,
            activitățile senzoriale nu sunt o oră separatată din program.
            Sunt parte din joaca zilnică. Copiii au acces permanent la
            nisip, apă, plastilină și materiale naturale. În curte, ating
            pământul, frunzele, scoarța copacilor, blana animalelor.
          </p>
          <p>
            De 2-3 ori pe săptămână, propunem activități senzoriale
            structurate: tăvi cu orez și obiecte ascunse, pictură cu
            degetele, amestecare de culori, sortare de semințe. Copiii
            lucrează în grup, comunică ce simt, descriu cu cuvinte
            simple. „E moale." „E rece." „E aspru." Așa se dezvoltă
            vocabularul senzorial.
          </p>
          <p>
            Pentru copiii de la
            <Link href="/cresa-popesti-leordeni" className="text-green-dark underline hover:text-green-light"> creșă</Link> (1,5-3 ani),
            activitățile sunt mai simple — atingere, apucare, explorare
            orală (da, bagă în gură, e normal la această vârstă). Pentru
            cei de la
            <Link href="/afterschool-popesti-leordeni" className="text-green-dark underline hover:text-green-light"> afterschool</Link> (6-12 ani),
            activitățile sunt mai complexe — experimente cu texturi,
            amestecări, construcții din materiale naturale. Respectăm
            <a href="https://federatiaparintilor.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> recomandările</a> federațiilor
            de părinți privind educația prin joacă și
            <a href="https://legislatie.just.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> legislația</a> în
            domeniul educației preșcolare.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-cream/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Vrei să vezi cum se joacă copiii noștri?
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Vino într-o vizită și vezi activitățile senzoriale în acțiune.
            Copiii noștri se joacă cu materiale naturale, în curte și în
            clasă. Programează o vizită — te așteptăm cu drag.
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
