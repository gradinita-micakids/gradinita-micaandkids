import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Petreceri de copii în weekend",
  description:
    "Închiriem locația Mica and Kids din Popești Leordeni pentru petreceri de copii în weekend. Spațiu sigur, curat și distractiv pentru sărbătoriri de neuitat.",
  alternates: { canonical: "/petreceri" },
  openGraph: {
    title: "Petreceri copii weekend — Grădiniță Popești Leordeni | Mica and Kids",
    description:
      "Închiriem locația din Popești Leordeni pentru petreceri de copii în weekend.",
    url: "https://gradinitamicaandkids.ro/petreceri",
    images: ["/images/mascota/albinuta.webp"],
  },
};

const features = [
  {
    icon: "🎪",
    title: "Spațiu generos",
    desc: "Sală mare de joacă cu zonă indoor și curte exterioară pentru activități în aer liber.",
  },
  {
    icon: "🎨",
    title: "Activități creative",
    desc: "Ateliere de pictură, modelaj, jocuri interactive și animații pentru copii.",
  },
  {
    icon: "🍰",
    title: "Zonă de catering",
    desc: "Spațiu dedicat pentru tort, gustări și masă. Poți aduce propriul catering sau alegi din partenerii noștri.",
  },
  {
    icon: "🧸",
    title: "Echipă dedicată",
    desc: "Personalul nostru se ocupă de organizare, jocuri și supravegherea copiilor pe tot parcursul petrecerii.",
  },
  {
    icon: "🪩",
    title: "Decorațiuni & muzică",
    desc: "Sistem audio, decorațiuni tematice și atmosferă festivă personalizată după preferințe.",
  },
  {
    icon: "🅿️",
    title: "Parcare & acces",
    desc: "Parcare gratuită pentru invitați și acces ușor din orice zonă a Bucureștiului.",
  },
];

export default function PetreceriPage() {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Petreceri de copii în weekend — Mica and Kids Popești Leordeni",
    description:
      "Închiriere locație Mica and Kids pentru petreceri de copii în weekend. Spațiu sigur, curat și distractiv cu echipă dedicată.",
    url: "https://gradinitamicaandkids.ro/petreceri",
    location: {
      "@type": "Place",
      name: "Mica and Kids",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Strada Sfântul Gheorghe 5B",
        addressLocality: "Popești Leordeni",
        addressRegion: "Ilfov",
        postalCode: "077160",
        addressCountry: "RO",
      },
    },
    offers: {
      "@type": "Offer",
      name: "Închiriere locație weekend",
      price: "1000",
      priceCurrency: "RON",
      description: "4 ore — sală de joacă, curte exterioară, zonă catering, sistem audio.",
      availability: "https://schema.org/InStock",
    },
    eventSchedule: {
      "@type": "Schedule",
      byDay: ["Saturday", "Sunday"],
      startTime: "10:00",
      endTime: "20:00",
      duration: "PT4H",
    },
    organizer: {
      "@type": "Organization",
      name: "Mica and Kids",
      telephone: "+40740467056",
      email: "office@gradinitamicaandkids.ro",
    },
  };

  return (
    <div className="pt-28 pb-20 bg-white/80 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Breadcrumbs items={[{ name: "Petreceri", path: "/petreceri" }]} />
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-6">
              Petreceri de copii <br />
              <span className="text-orange-dark">în weekend</span>
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Transformăm sărbătorirea <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">copilului</a> tău într-o experiență de neuitat!
              Închiriem locația Mica and Kids în weekenduri pentru <Link href="/servicii" className="text-green-dark underline hover:text-green-light">petreceri</Link>
              tematice, aniversări și evenimente private pentru cei mici.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Spațiu sigur, curat și plin de voie bună — cu echipă dedicată care
              se ocupă de tot, ca tu să te bucuri de moment alături de <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">copilul</a> tău.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-orange-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-orange-dark rounded-full shadow-soft"
            >
              Rezervă o petrecere →
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-soft">
            <div className="relative w-full h-80">
              <Image
                src="/images/galerie/curte-gradinita-popesti-leordeni.webp"
                alt="Petreceri de copii la Mica and Kids — grădiniță Popești Leordeni"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* General pricing card */}
      <div className="py-12 bg-cream/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 shadow-soft border-2 border-orange-light/30 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-4">
              Închiriere locație în weekend
            </h2>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-3xl">⏱️</span>
                <div className="text-left">
                  <p className="text-xs text-foreground/50 uppercase tracking-wider">Durată</p>
                  <p className="font-display text-xl font-bold text-green-dark">4 ore</p>
                </div>
              </div>
              <div className="w-px h-12 bg-foreground/10" />
              <div className="flex items-center gap-2">
                <span className="text-3xl">💰</span>
                <div className="text-left">
                  <p className="text-xs text-foreground/50 uppercase tracking-wider">Preț</p>
                  <p className="font-display text-xl font-bold text-orange-dark">1000 lei</p>
                </div>
              </div>
            </div>
            <p className="text-foreground/60 text-sm mt-6 max-w-xl mx-auto">
              Spațiu complet pentru petrecerea copilului tău — sală de joacă,
              curte exterioară, zonă de catering și sistem audio.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 px-8 py-4 bg-orange-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-orange-dark rounded-full shadow-soft"
            >
              Rezervă acum →
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white/80 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-green-dark mb-4">
              Ce oferim
            </h2>
            <p className="text-foreground/60 text-lg">
              Tot ce ai nevoie pentru o petrecere perfectă
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-cream rounded-3xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-display text-xl font-bold text-green-dark mb-2">
                  {f.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {f.title === "Echipă dedicată" ? (
                    <>Personalul nostru se ocupă de organizare, jocuri și <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">supravegherea copiilor</a> pe tot parcursul petrecerii.</>
                  ) : f.title === "Decorațiuni & muzică" ? (
                    <>Sistem audio, decorațiuni tematice și atmosferă festivă personalizată după preferințe, cu <Link href="/galerie" className="text-green-dark underline hover:text-green-light">activități</Link> pentru copii.</>
                  ) : f.title === "Parcare & acces" ? (
                    <>Parcare gratuită pentru invitați și acces ușor din orice zonă a <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">Bucureștiului</a>.</>
                  ) : (
                    f.desc
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-white/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Hai să planuim petrecerea perfectă!
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactează-ne pentru disponibilitate, personalizări și <Link href="/program-tarife" className="text-green-dark underline hover:text-green-light">oferte</Link>
            speciale. Ne ocupăm de tot — tu doar vine și te bucură!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-orange-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-orange-dark rounded-full shadow-soft"
          >
            Contactează-ne →
          </Link>
        </div>
      </div>

      <FAQJsonLd
        items={[
          {
            question: "Pot organiza o petrecere de copii la Mica and Kids?",
            answer:
              "Da! Închiriem locația noastră din Popești Leordeni în weekenduri pentru petreceri tematice, aniversări și evenimente private pentru copii.",
          },
          {
            question: "Care este prețul pentru închirierea locației?",
            answer:
              "Închirierea locației pentru petreceri de copii în weekend costă 1000 lei pentru 4 ore. Include sală de joacă, curte exterioară, zonă de catering și sistem audio.",
          },
          {
            question: "Ce facilități include locația pentru petreceri?",
            answer:
              "Locația include sală mare de joacă cu zonă indoor și curte exterioară, ateliere de pictură și modelaj, zonă de catering pentru tort și gustări, sistem audio și decorațiuni tematice.",
          },
          {
            question: "Echipa se ocupă de organizarea petrecerii?",
            answer:
              "Da, personalul nostru se ocupă de organizare, jocuri și supravegherea copiilor pe tot parcursul petrecerii, ca tu să te bucuri de moment alături de copilul tău.",
          },
          {
            question: "Pot aduce propriul catering?",
            answer:
              "Da, poți aduce propriul catering sau poți alege din partenerii noștri. Avem o zonă dedicată pentru tort, gustări și masă.",
          },
        ]}
      />
      <FAQSection
        items={[
          {
            question: "Pot organiza o petrecere de copii la Mica and Kids?",
            answer:
              "Da! Închiriem locația noastră din Popești Leordeni în weekenduri pentru petreceri tematice, aniversări și evenimente private pentru copii.",
          },
          {
            question: "Care este prețul pentru închirierea locației?",
            answer:
              "Închirierea locației pentru petreceri de copii în weekend costă 1000 lei pentru 4 ore. Include sală de joacă, curte exterioară, zonă de catering și sistem audio.",
          },
          {
            question: "Ce facilități include locația pentru petreceri?",
            answer:
              "Locația include sală mare de joacă cu zonă indoor și curte exterioară, ateliere de pictură și modelaj, zonă de catering pentru tort și gustări, sistem audio și decorațiuni tematice.",
          },
          {
            question: "Echipa se ocupă de organizarea petrecerii?",
            answer:
              "Da, personalul nostru se ocupă de organizare, jocuri și supravegherea copiilor pe tot parcursul petrecerii, ca tu să te bucuri de moment alături de copilul tău.",
          },
          {
            question: "Pot aduce propriul catering?",
            answer:
              "Da, poți aduce propriul catering sau poți alege din partenerii noștri. Avem o zonă dedicată pentru tort, gustări și masă.",
          },
        ]}
      />
    </div>
  );
}
