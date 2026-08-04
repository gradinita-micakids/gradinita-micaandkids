import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Beneficiile jocului în aer liber pentru copii",
  description:
    "De ce au copiii nevoie de joacă în aer liber în fiecare zi. Beneficii pentru dezvoltare, sănătate, somn și concentrare — explicate din experiența unei grădiniți cu curte.",
  alternates: { canonical: "/blog/beneficiile-jocului-in-aer-liber" },
  openGraph: {
    title: "Beneficiile jocului în aer liber pentru copii",
    description:
      "De ce au copiii nevoie de joacă în aer liber în fiecare zi. Beneficii pentru dezvoltare, sănătate și somn.",
    url: "https://gradinitamicaandkids.ro/blog/beneficiile-jocului-in-aer-liber",
    images: ["/images/mascota/albinuta.webp"],
  },
};

const faqItems = [
  {
    question: "Cât timp ar trebui să petreacă copilul afară pe zi?",
    answer:
      "Specialiștii recomandă minimum 2-3 ore de activitate în aer liber pe zi pentru copiii preșcolari. La grădinița noastră, copiii petind minimum două ore în curte — și mai mult când vremea permite. Nu e timp pierdut. E timp în care se dezvoltă motric, social și emoțional.",
  },
  {
    question: "Ce fac copiii când e frig sau plouă?",
    answer:
      "Dacă e frig, ne îmbrăcăm bine și ieșim mai puțin, dar ieșim. Copiii se pot juaca afară până la -5°C dacă sunt îmbrăcați corespunzător. Când plouă puternic, facem activități înăuntru, dar deschidem ferestrele pentru aerisire. Nu anulăm complet timpul outdoor decât în condiții extreme.",
  },
  {
    question: "Copiii se îmbolnăvesc dacă stau afară iarna?",
    answer:
      "Nu. Răcelile nu vin de la frig, vin de la viruși. De fapt, copiii care petind timp în aer liber au un sistem imunitar mai puternic. Aerul rece și curat ajută. Ceea ce îi îmbolnăvește e statul în sală cu geamuri închise, cu 25 de copii înghesuiți — acolo se transmit virușii.",
  },
  {
    question: "Ce activități fac copiii în curte la grădinița voastră?",
    answer:
      "Joacă liberă în primul rând — alergat, cățărat, leagăne, nisip. Apoi activități structurate: îngrijirea grădinii cu legume și flori, hrănirea animalelor (iepurași, găini), jocuri de echipă, explorare senzorială. Avem și momente de liniște — copiii stau pe iarbă, ascultă păsările, observă insecte.",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Beneficiile jocului în aer liber pentru copii",
  description:
    "De ce au copiii nevoie de joacă în aer liber în fiecare zi. Beneficii pentru dezvoltare, sănătate, somn și concentrare.",
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
  datePublished: "2026-01-20",
  dateModified: "2026-01-20",
  mainEntityOfPage: {
    "@type": "WebPage",
    url: "https://gradinitamicaandkids.ro/blog/beneficiile-jocului-in-aer-liber",
  },
};

export default function BeneficiileJoculuiInAerLiberPage() {
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
          { name: "Beneficiile jocului în aer liber", path: "/blog/beneficiile-jocului-in-aer-liber" },
        ]}
      />

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <p className="text-green-light text-sm font-bold uppercase tracking-[0.2em] mb-4">
          Educație & Dezvoltare
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-green-dark mb-6 leading-tight">
          Beneficiile jocului în aer liber pentru copii
        </h1>
        <p className="text-foreground/60 text-lg leading-relaxed mb-4">
          Copiii nu au fost făcuți să stea pe scaun. Corpul lor vrea să
          alerge, să se cațăre, să cadă, să se ridice, să simtă iarba sub
          picioare și vântul pe față. Când îi ținem înăuntru toată ziua, se
          întâmplă ceva — devin agitați, mai puțin atenți, dorm mai prost.
          Nu e coincidență. E biologie.
        </p>
        <p className="text-foreground/60 text-lg leading-relaxed">
          La grădinița <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light">Mica and Kids</Link> din
          <Link href="/gradinita-popesti-leordeni" className="text-green-dark underline hover:text-green-light"> Popești Leordeni</Link>,
          copiii ies în curte în fiecare zi. Am văzut diferența dintre copiii
          care petind ore în aer liber și cei care stau în clasă tot timpul.
          Nu e o diferență mic. E o diferență pe care o vezi în starea lor
          de spirit, în somn, în felul în care interacționează cu alții.
        </p>
      </div>

      {/* Imagine */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="relative bg-cream rounded-3xl p-8 shadow-soft">
          <div className="relative w-full h-72 flex items-center justify-center">
            <Image
              src="/images/reference/services-header.webp"
              alt="Copiii de la grădinița Mica and Kids jucându-se în aer liber în curtea din Popești Leordeni"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Secțiunea 1 — Dezvoltare motrică */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          1. Dezvoltare motrică — corpul învață afară
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            În clasă, un copil poate merge de la masă la ușă și înapoi. Afară,
            poate alerga, sări, se cățăra pe o scară, coborî un tobogan,
            lovi o minge, păși peste un bolovan. Fiecare dintre aceste
            mișcări antrenează altceva: echilibru, coordonare, forță,
            precizie. Copilul nu le exersează conștient — le exersează
            jucându-se. Dar corpul lui ține minte.
          </p>
          <p>
            Copiii care nu au acces la joacă outdoor ajung la școală cu
            motricitate slabă. Nu țin creionul bine, nu se descurcă cu
            foarfecele, se obosesc repede la scris. Nu pentru că nu sunt
            deștepți, ci pentru că mușchii mici ai mâinii nu au fost
            antrenați suficient. Afară, copilul se cățăra, sapă în nisip,
            rupe frunze, prinde mingi — toate acestea pregătesc mâna pentru
            scris, fără ca nimeni să spună „exercițiu".
          </p>
          <p>
            Respectăm <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">recomandările educaționale</a> pentru
            activitate fizică la preșcolari — și le depășim. Copiii noștri
            nu fac 30 de minute de sport pe zi. Fac 2-3 ore de mișcare
            naturală, în <Link href="/galerie" className="text-green-dark underline hover:text-green-light">curtea noastră</Link> cu iarbă,
            nisip și animale.
          </p>
        </div>
      </div>

      {/* Secțiunea 2 — Sănătate și imunitate */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          2. Sănătate și imunitate
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            Aerul liber curăță. Nu metaforic — literal. Într-o sală cu 20 de
            copii și geamuri închise, aerul se încarcă cu CO2, praf și
            viruși. Copiii se infectează unul de la altul, în cerc. Afară,
            aerul se mișcă. Concentrația de viruși scade dramatic. Copiii
            care petind timp regulat în aer liber se îmbolnăvesc mai rar.
            Nu pentru că sunt mai norocoși, ci pentru că sistemul lor
            imunitar e antrenat.
          </p>
          <p>
            Expunerea la frig e, paradoxal, benefică. Copiii care ies iarna,
            îmbrăcați corespunzător, au un sistem imunitar mai activ. Corpul
            învață să se adapteze la temperaturi variate. Copiii care stau
            doar în sală încălzită, la 23°C constant, devin sensibili la
            orice schimbare. Suntem în
            <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> Popești Leordeni</a>,
            o zonă cu aer curat, departe de poluarea Bucureștiului — și asta
            se simte.
          </p>
          <p>
            Lumina naturală e un alt factor esențial. Ochii copiilor au
            nevoie de lumină naturală pentru o dezvoltare sănătoasă. Studiile
            arată că copiii care petind mai mult timp afară au un risc mai
            mic de miopie. Nu e despre soare direct — e despre lumina
            naturală, indiferent de anotimp.
          </p>
        </div>
      </div>

      {/* Secțiunea 3 — Somn */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          3. Somn mai bun noaptea
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            Părinții ne spun adesea același lucru: „de când a venit la
            grădinița voastră, doarme mai bine noaptea". Nu e magic. E
            simplu. Copilul care a alergat 2 ore în curte, care a fost
            expus la lumină naturală, care și-a consumat energia — acel
            copil doarme mai adânc și mai mult. Copilul care a stat în clasă
            tot timpul, cu energie acumulată, se luptă cu somnul.
          </p>
          <p>
            Lumina naturală reglează ritmul circadian. Corpul produce
            melatonină — hormonul somnului — în funcție de expunerea la
            lumină pe parcursul zilei. Copiii care petind timp afară au
            un ritm mai sănătos. Adorm mai ușor seara și se trezesc mai
            odihniți dimineața. Funcționăm sub
            <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> Inspectoratul Școlar Ilfov</a> și
            respectăm <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">drepturile copilului</a> la
            odihnă — de aceea avem un program de somn adaptat nevoilor
            fiecărui copil.
          </p>
        </div>
      </div>

      {/* Secțiunea 4 — Concentrare și învățare */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          4. Concentrare și învățare
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            Un copil care a stat 4 ore pe scaun nu e mai atent. E mai
            agitat. Corpul lui vrea să se miște, iar mintea nu se poate
            concentra pentru că energia fizică nu are unde să iasă. După
            joacă în aer liber, copiii se întorc în clasă mai calmi, mai
            concentrați, mai disponibili pentru activități structurate.
          </p>
          <p>
            Am observat asta de multe ori. Diminețile în care copiii ies
            prima dată în curte, apoi vin la activități structurate —
            pictură, povești, numere — sunt mult mai atenți. Diminețile în
            care încep direct cu activități în clasă, fără mișcare
            prealabilă, sunt mai agitate. Nu e o observație științifică —
            e ceva ce vedem zilnic la
            <Link href="/servicii" className="text-green-dark underline hover:text-green-light"> grădinița noastră</Link>.
          </p>
          <p>
            Natura e, literalmente, un mediu de învățare. Copilul care udă
            o plantă și o vede crescând învață despre cauză și efect, despre
            răbdare, despre ciclurile naturii. Copilul care hrănește un
            iepuraș învață despre responsabilitate și empatie. Copilul care
            observă o furnică pe un bolovan învață despre curiozitate și
            atenție la detalii. Acestea nu sunt lecții pe care le poți ține
            în clasă cu un PowerPoint. Sunt experiențe care se întâmplă
            doar afară.
          </p>
        </div>
      </div>

      {/* Secțiunea 5 — Socializare */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          5. Socializare și independență
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            Afară, copiii creează propriile jocuri. Nu le spune nimeni ce
            să facă — aleg singuri, negociază, se organizează. „Hai să
            jucăm de-a magazinul." „Eu sunt doctorul." „Dă-mi și mie
            lopata." Aceste interacțiuni sunt lecții de viață: cum să
            colaborezi, cum să aștepți rândul, cum să rezolvi un conflict,
            cum să exprimi ce vrei.
          </p>
          <p>
            În clasă, cu activități structurate, copiii urmează instrucțiuni.
            Afară, ei creează. Ambele sunt importante, dar doar în aer liber
            copilul exersează autonomia. Alege ce să facă, cu cine, cum.
            Greșește, încearcă din nou. Asta îl face independent — și
            independența e, poate, cea mai importantă abilitate pe care o
            poate lua de la grădiniță.
          </p>
          <p>
            Pentru părinții care vor să afle mai multe despre cum alegem
            activitățile, am scris un
            <Link href="/blog/cum-alegi-gradinita" className="text-green-dark underline hover:text-green-light"> ghid despre alegerea grădiniței</Link> —
            unde explicăm și ce să cauți în curte. Detalii despre
            <Link href="/program-tarife" className="text-green-dark underline hover:text-green-light"> programul nostru zilnic</Link> găsiți
            pe pagina dedicată.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-cream/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Vrei să vezi curtea noastră?
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Cea mai bună recomandare e să vii să vezi cu ochii tăi. Programează
            o vizită și vino cu cel mic în curtea noastră din Popești Leordeni.
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
