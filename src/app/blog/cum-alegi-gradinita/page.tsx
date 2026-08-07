import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cum să alegi grădinița potrivită pentru copilul tău",
  description:
    "Ghid practic pentru părinți: cum să alegi grădinița potrivită. Ce să verifici la vizită, ce întrebări să pui și ce contează cu adevărat pentru copilul tău.",
  alternates: { canonical: "/blog/cum-alegi-gradinita" },
  openGraph: {
    title: "Cum să alegi grădinița potrivită pentru copilul tău",
    description:
      "Ghid practic pentru părinți: cum să alegi grădinița potrivită. Ce să verifici, ce întrebări să pui.",
    url: "https://www.gradinitamicaandkids.ro/blog/cum-alegi-gradinita",
    images: ["/images/og-default.webp"],
  },
};

const faqItems = [
  {
    question: "Când ar trebui să încep să caut grădiniță?",
    answer:
      "Recomandăm să începi căutarea cu cel puțin 3-4 luni înainte de data la care vrei să înscrii copilul. Grădinițele bune au locuri limitate, iar procesul de adaptare durează câteva săptămâni. Dacă începi primăvara, ai timp să vizitezi mai multe locuri, să compari și să iei o decizie fără grabă.",
  },
  {
    question: "Ce e mai important: curtea sau clasa?",
    answer:
      "Ambele contează, dar la vârsta preșcolară, curtea e esențială. Copiii de 3-6 ani au nevoie de mișcare, de aer și de spațiu pentru a se dezvolta armonios. O clasă frumoasă nu compensează lipsa unui spațiu outdoor. Caută grădinițe cu curte proprie, nu doar cu acces la un parcur din cartier.",
  },
  {
    question: "Grădiniță de stat sau privată?",
    answer:
      "Depinde de nevoile copilului și de programul tău. Grădinițile de stat sunt gratuite, dar au grupuri mari (25-30 copii) și program fix. Cele private costă, dar oferă grupuri mici, program flexibil, mese gătite pe loc și activități extra. Cea mai bună grădiniță e cea care se potrivește copilului tău — nu cea mai scumpă sau cea mai aproape.",
  },
  {
    question: "Ce fac dacă copilul plânge când îl duc la grădiniță?",
    answer:
      "E normal. Separarea de părinte e un moment dificil, mai ales la început. O grădiniță bună va avea o strategie de adaptare graduală — primele zile cu program scurt, părintele în apropiere, creșterea treptată a duratei. Plânsul scade în 1-2 săptămâni dacă copilul se simte sigur și legat de educatoare. Dacă după 3-4 săptămâni copilul încă plânge disperat, discută cu educatoarea — poate e nevoie de o strategie diferită.",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cum să alegi grădinița potrivită pentru copilul tău",
  description:
    "Ghid practic pentru părinți: cum să alegi grădinița potrivită. Ce să verifici la vizită, ce întrebări să pui.",
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
  datePublished: "2026-01-15",
  dateModified: "2026-01-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    url: "https://www.gradinitamicaandkids.ro/blog/cum-alegi-gradinita",
  },
};

export default function CumAlegiGradinitaPage() {
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
          { name: "Cum să alegi grădinița", path: "/blog/cum-alegi-gradinita" },
        ]}
      />

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <p className="text-green-light text-sm font-bold uppercase tracking-[0.2em] mb-4">
          Ghid pentru părinți
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-green-dark mb-6 leading-tight">
          Cum să alegi grădinița potrivită pentru copilul tău
        </h1>
        <p className="text-foreground/60 text-lg leading-relaxed mb-4">
          Alegerea grădiniței e una dintre deciziile care te frământă ca
          părinte. Nu pentru că e complicat, ci pentru contează. Copilul
          petinde acolo 6-8 ore pe zi. E locul unde face prieteni, unde
          învață să fie independent, unde descoperă lumea fără tine lângă
          el. Merită să alegi bine.
        </p>
        <p className="text-foreground/60 text-lg leading-relaxed">
          Am scris acest ghid din experiența noastră de la
          <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light"> Mica and Kids</Link> —
          o grădiniță din <Link href="/gradinita-popesti-leordeni" className="text-green-dark underline hover:text-green-light">Popești Leordeni</Link> unde
          am văzut sute de părinți trecând prin procesul ăsta. Nu e un
          top al grădinițelor. E un ghid practic care te ajută să știi
          ce să cauți și ce întrebări să pui.
        </p>
      </div>

      {/* Cuprins */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="bg-cream rounded-3xl p-8 shadow-soft">
          <h2 className="font-display text-xl font-bold text-green-dark mb-4">
            Ce citești în acest articol:
          </h2>
          <ul className="space-y-2 text-foreground/60">
            <li>1. Ce contează cu adevărat (și ce nu)</li>
            <li>2. Ce să verifici când vizitezi grădinița</li>
            <li>3. Întrebări pe care trebuie să le pui</li>
            <li>4. Semne care ar trebui să te îngrijoreze</li>
            <li>5. Cum se adaptă copilul — ce e normal și ce nu</li>
          </ul>
        </div>
      </div>

      {/* Secțiunea 1 */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          1. Ce contează cu adevărat (și ce nu)
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            Părinții se pierd adesea în detalii care nu contează atât de
            mult. Hainele de uniformă, logo-ul grădiniței, site-ul
            frumos — acestea sunt lucruri de suprafață. Ceea ce contează
            cu adevărat e mai simplu decât pare.
          </p>
          <p>
            <strong className="text-green-dark">Mărimea grupului.</strong> Un
            copil de 3 ani nu are nevoie de o clasă de 30 de copii. Are
            nevoie de 8-10 colegi și o educatoare care îl cunoaște. Într-un
            grup mare, copilul se pierde. Nu pentru că e timid, ci pentru
            că e prea mult zgomot, prea multă competiție pentru atenție și
            prea puțin timp pentru el. Caută grădinițe cu grupuri mici —
            asta e, probabil, cel mai important criteriu.
          </p>
          <p>
            <strong className="text-green-dark">Curtea.</strong> Copiii de
            grădiniță au nevoie de afară. Nu de 15 minute de recreație pe
            un teren de asfalt. De ore întregi de joacă în iarbă, nisip,
            printre copaci. Caută grădinițe cu curte proprie, cu verde,
            cu spațiu de joacă variat. O grădiniță fără curte e ca o
            casă fără ferestre — se poate, dar nu e bine. Vezi
            <Link href="/galerie" className="text-green-dark underline hover:text-green-light"> galeria noastră</Link> ca
            să îți faci o idee despre cum arată o curte de grădiniță
            adevărată.
          </p>
          <p>
            <strong className="text-green-dark">Mâncarea.</strong> Copiii
            mănâncă de 3-4 ori pe zi la grădiniță. Ceea ce mănâncă acolo
            e o parte importantă din dieta lor zilnică. Întreabă dacă
            mâncarea e gătită pe loc sau adusă de la catering. Cere să vezi
            meniul pe o săptămână. Dacă e plin de prăjeli și snacksuri, e
            un semn rău. Respectăm <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">recomandările nutriționale</a> pentru
            învățământul preșcolar — și tu ar trebui să verifici că și
            grădinița aleasă o face.
          </p>
          <p>
            <strong className="text-green-dark">Educatoarele.</strong> Nu
            doar diplomă contează, ci și atitudinea. Când vizitezi
            grădinița, uită-te cum interacționează educatoarele cu
            copiii. Sunt calme? Zâmbesc? Se apleacă la nivelul copilului
            când îi vorbesc? Au răbdare? Un copil care se simte văzut și
            respectat de educatoare se dezvoltă mult mai bine decât unul
            care e doar un nume pe listă.
          </p>
        </div>
      </div>

      {/* Secțiunea 2 */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          2. Ce să verifici când vizitezi grădinița
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            Vizita e momentul care îți spune tot. Nu site-ul, nu recenziile
            de pe Google, nu recomandările pe WhatsApp. Când intri pe ușă,
            ai câteva lucruri de verificat:
          </p>
          <p>
            <strong className="text-green-dark">Curățenia.</strong> Nu
            vorbim de spațiu impecabil de showroom — e o grădiniță, sunt
            copii, e joacă. Dar baia trebuie să fie curată. Podelele nu
            trebuie să fie lipicioase. Bucătăria trebuie să miroasă a
            mâncare, nu a dezinfectant care ascunde altceva. Hainele copiilor
            din cuier trebuie să fie ordonate — e un indicator al organizării.
          </p>
          <p>
            <strong className="text-green-dark">Starea copiilor.</strong> Uită-te
            la copiii care sunt acolo. Sunt relaxați? Se joacă? Zâmbesc? Sau
            stau cuminți pe scaune, cu mâinile pe genunchi? Copiii fericiți
            la grădiniță nu sunt liniștiți — sunt ocupați, curioși, uneori
            zgomotoși. Dacă vezi o clasă de 20 de copii stând perfect
            cuminți, întrebă-te de ce.
          </p>
          <p>
            <strong className="text-green-dark">Spațiul de joacă.</strong> Sunt
            jucării variate, potrivite vârstei? Sunt cărți? Sunt materiale
            creative — culori, plastilină, foarfece? Spațiul e luminos? Are
            ferestre? Copiii nu stau în pivnițe. Dacă sala e mică, întunecată
            sau fără ventilație, e un semn rău.
          </p>
          <p>
            <strong className="text-green-dark">Curtea.</strong> Ieși afară. E
            iarbă sau doar ciment? Sau leagăne, tobogan, nisip? Sau animale
            sau grădină cu legume? Cu cât spațiul outdoor e mai variat, cu
            atât copilul are mai multe oportunități de joacă și explorare.
            Noi avem, de exemplu, o <Link href="/petreceri" className="text-green-dark underline hover:text-green-light">curte cu animale și grădină</Link> —
            copiii învață responsabilitate și respect pentru natură.
          </p>
        </div>
      </div>

      {/* Secțiunea 3 */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          3. Întrebări pe care trebuie să le pui
        </h2>
        <div className="bg-cream rounded-3xl p-8 shadow-soft space-y-4">
          <p className="text-foreground/70 text-lg leading-relaxed">
            <strong className="text-green-dark">Câți copii sunt într-un grup?</strong> — Sub
            15 e bine. Peste 20 e mult. Peste 25 e prea mult.
          </p>
          <p className="text-foreground/70 text-lg leading-relaxed">
            <strong className="text-green-dark">Cât timp petrec copiii afară?</strong> — Minimum
            1-2 ore pe zi. Dacă răspunsul e „depinde de vreme", întreabă ce
            fac când plouă.
          </p>
          <p className="text-foreground/70 text-lg leading-relaxed">
            <strong className="text-green-dark">Cum se face adaptarea?</strong> — Ar
            trebui să existe un plan: primele zile scurte, părinte prezent,
            creștere graduală. Dacă răspunsul e „se descurcă el", e un semn rău.
          </p>
          <p className="text-foreground/70 text-lg leading-relaxed">
            <strong className="text-green-dark">Ce fac când un copil plânge?</strong> — Răspunsul
            corect nu e „nu plâng copiii la noi". Răspunsul corect e o
            strategie: țin în brațe, distrag atenția, comunic cu părintele.
          </p>
          <p className="text-foreground/70 text-lg leading-relaxed">
            <strong className="text-green-dark">Cum comunicați cu părinții?</strong> — Zilnic
            la predare? Aplica? Grup de WhatsApp? Nu e un răspuns greșit, dar
            trebuie să existe un sistem.
          </p>
          <p className="text-foreground/70 text-lg leading-relaxed">
            <strong className="text-green-dark">Educația.</strong> — Urmați
            <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> curriculumul</a> aprobat
            de Minister? Sunteți sub
            <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> Inspectoratul Școlar</a>?
            O grădiniță serioasă răspunde da, fără ezitare.
          </p>
        </div>
      </div>

      {/* Secțiunea 4 */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          4. Semne care ar trebui să te îngrijoreze
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            Uneori, vizita îți spune mai mult prin ce e în neregulă decât
            prin ce e bine. Iată câteva semne care ar trebui să te facă să
            te gândești de două ori:
          </p>
          <p>
            <strong className="text-green-dark">Educatoarele nu zâmbesc.</strong> Dacă
            personalul e tensionat, obosit sau indiferent, asta se va
            transfera asupra copiilor. O grădiniță bună are personal care
            își iubește meseria — și se vede.
          </p>
          <p>
            <strong className="text-green-dark">Copiii nu te bagă în seamă.</strong> Dacă
            intri în clasă și niciun copil nu se uită la tine, e bine —
            înseamnă că sunt absorbiți în activitate. Dacă toți se uită
            speriați sau vin la tine disperați după atenție, e un semn că
            ceva nu e în regulă. Copiii care primesc suficientă atenție
            nu reacționează exagerat la un vizitator.
          </p>
          <p>
            <strong className="text-green-dark">Nu îți arată bucătăria.</strong> Dacă
            nu poți vedea unde se prepară mâncarea, întreabă de ce. O
            grădiniță care gătește pe loc e mândră de bucătăria ei. Una
            care ascunde ceva, nu.
          </p>
          <p>
            <strong className="text-green-dark">Răspunsuri vagi.</strong> Dacă
            la întrebări directe primești răspunsuri ca „ne descurcăm noi"
            sau „așa se face peste tot", fără detalii, înseamnă că nu e
            un plan structurat. O grădiniță organizată are răspunsuri clare.
            Noi, de exemplu, funcționăm sub
            <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light"> Inspectoratul Școlar Ilfov</a> și
            respectăm <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">drepturile copilului</a> —
            și spunem asta deschis.
          </p>
        </div>
      </div>

      {/* Secțiunea 5 */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-6">
          5. Cum se adaptă copilul — ce e normal și ce nu
        </h2>
        <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
          <p>
            Plânsul la început e normal. Refuzul de a merge la grădiniță în
            primele zile e normal. Chiar și unele regresii — copilul care
            dormea toată noaptea se trezește, cel care mânâncă singur vrea
            să fie hrănit — sunt normale în prima lună. E o schimbare mare
            pentru el.
          </p>
          <p>
            Ce nu e normal: plâns disperat care durează mai mult de 3-4
            săptămâni, refuzul total de a mânca la grădiniță, schimbări
            majore de comportament care nu se ameliorează în timp. Dacă
            vezi asta, discută cu educatoarele. Poate copilul nu e pregătit
            pentru grupul în care a fost pus. Poate e prea devreme. Poate
            grădinița nu e potrivită.
          </p>
          <p>
            O adaptare bună durează 2-3 săptămâni cu o strategie graduală.
            La <Link href="/cresa-popesti-leordeni" className="text-green-dark underline hover:text-green-light">creșa</Link> și
            grădinița noastră din <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">Popești Leordeni</a>,
            începem cu program scurt în prima săptămână, părinte prezent în
            apropiere, și creștem treptat. Comunicăm zilnic cu părinții
            despre cum merge. Detalii despre <Link href="/program-tarife" className="text-green-dark underline hover:text-green-light">program și adaptare</Link> găsiți
            pe pagina noastră dedicată.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-cream/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Ai întrebări? Vino să le pui
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Dacă ești în căutarea unei grădinițe și ai întrebări, te
            așteptăm. Programează o vizită și vino să vezi cum e la noi —
            fără obligații, fără presiune.
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
