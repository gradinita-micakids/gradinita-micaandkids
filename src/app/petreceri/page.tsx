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

export default function PetreceriPage() {
  return (
    <div className="pt-28 pb-20 bg-white/80 min-h-screen">
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
                  {f.desc}
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
