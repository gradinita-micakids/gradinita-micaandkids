import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Petreceri — Mica and Kids",
  description:
    "Închiriem locația Mica and Kids pentru petreceri de copii în weekend. Spațiu sigur, curat și distractiv pentru sărbătoriri de neuitat.",
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

const packages = [
  {
    name: "Petrecere Basic",
    duration: "2 ore",
    maxKids: "15 copii",
    price: "de la 500 lei",
    features: [
      "Închiriere spațiu",
      "Zonă de joacă",
      "Masă & scaune",
      "Sistem audio",
    ],
    accent: "bg-yellow/10 border-yellow/30",
    badge: "text-yellow",
  },
  {
    name: "Petrecere Premium",
    duration: "3 ore",
    maxKids: "25 copii",
    price: "de la 800 lei",
    features: [
      "Tot ce include Basic",
      "Animator dedicat",
      "Ateliere creative",
      "Decorațiuni tematice",
      "Foto & video",
    ],
    accent: "bg-green-light/10 border-green-light/30",
    badge: "text-green-dark",
    popular: true,
  },
  {
    name: "Petrecere VIP",
    duration: "4 ore",
    maxKids: "30+ copii",
    price: "la cerere",
    features: [
      "Tot ce include Premium",
      "2 animatori",
      "Catering inclus",
      "Tort personalizat",
      "Mascota Mica — apariție specială",
    ],
    accent: "bg-orange-light/10 border-orange-light/30",
    badge: "text-orange-dark",
  },
];

export default function PetreceriPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-6">
              Petreceri de copii <br />
              <span className="text-orange-dark">în weekend</span>
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Transformăm sărbătorirea copilului tău într-o experiență de neuitat!
              Închiriem locația Mica and Kids în weekenduri pentru petreceri
              tematice, aniversări și evenimente private pentru cei mici.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Spațiu sigur, curat și plin de voie bună — cu echipă dedicată care
              se ocupă de tot, ca tu să te bucuri de moment alături de copilul tău.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-orange-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-orange-dark rounded-full shadow-soft"
            >
              Rezervă o petrecere →
            </Link>
          </div>
          <div className="relative bg-cream rounded-3xl p-8 shadow-soft">
            <div className="relative w-full h-80 flex items-center justify-center">
              <Image
                src="/images/mascota/Mica Albinuța Dansatoarea.png"
                alt="Petreceri Mica and Kids"
                width={400}
                height={350}
                className="w-full h-full object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-20">
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
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-green-dark mb-4">
              Pachete & prețuri
            </h2>
            <p className="text-foreground/60 text-lg">
              Alege pachetul potrivit pentru petrecerea copilului tău
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((p, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-3xl p-8 shadow-soft border-2 ${p.accent} ${
                  p.popular ? "lg:-translate-y-4" : ""
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-light text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-soft">
                    Cel mai popular
                  </div>
                )}
                <h3 className={`font-display text-2xl font-bold ${p.badge} mb-2`}>
                  {p.name}
                </h3>
                <p className="text-foreground/50 text-sm mb-1">⏱ {p.duration}</p>
                <p className="text-foreground/50 text-sm mb-4">👶 {p.maxKids}</p>
                <p className="font-display text-3xl font-bold text-green-dark mb-6">
                  {p.price}
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className={`w-2 h-2 rounded-full ${p.badge.replace("text-", "bg-")}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center px-6 py-3 ${p.badge.replace("text-", "bg-")} text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:opacity-90 rounded-full shadow-soft`}
                >
                  Rezervă →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Hai să planuim petrecerea perfectă!
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactează-ne pentru disponibilitate, personalizări și oferte
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
    </div>
  );
}
