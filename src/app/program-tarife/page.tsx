import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Program & Tarife — Mica and Kids",
  description:
    "Program și tarife pentru creșă, grădiniță și afterschool Mica and Kids. Program scurt, mediu și lung cu activități incluse.",
};

const traditionalPrograms = [
  {
    type: "Program scurt",
    schedule: "07:30 - 12:30",
    price: "2000 lei",
    features: ["Mic dejun", "Activități de dimineață", "Gustare"],
  },
  {
    type: "Program mediu",
    schedule: "07:30 - 16:30",
    price: "2350 lei",
    features: ["Mic dejun", "Activități educative și recreative", "Gustare", "Prânz", "Odihnă / somn"],
    popular: true,
  },
  {
    type: "Program lung",
    schedule: "07:30 - 18:30",
    price: "2500 lei",
    features: ["Mic dejun", "Activități educative și recreative", "Gustare", "Prânz", "Odihnă / somn", "Gustare după-amiază", "Activități"],
  },
];

const afterschoolPrograms = [
  {
    type: "Program mediu",
    schedule: "12:30 - 16:30",
    price: "1800 lei",
    features: ["Prânz", "Gustare", "Ajutor pentru teme", "Activități creative"],
  },
  {
    type: "Program lung",
    schedule: "12:30 - 18:30",
    price: "2000 lei",
    features: ["Prânz", "Gustare", "Ajutor pentru teme", "Activități creative", "Sport și mișcare", "Socializare"],
  },
];

const includedActivities = [
  { icon: "🌳", title: "Activități în aer liber", desc: "Explorare, joacă și mese servite în natură" },
  { icon: "🎨", title: "Ateliere creative", desc: "Pictură, modelaj, muzică și arte plastice" },
  { icon: "🦋", title: "Conexiune cu natura", desc: "Grija pentru animale și grădinărit" },
  { icon: "📚", title: "Învățare prin joacă", desc: "Programe educaționale moderne și interactive" },
  { icon: "🌍", title: "Limbi străine", desc: "Inițiere în limba engleză prin joc" },
  { icon: "🧸", title: "Echipă dedicată", desc: "Personal empatic, calificat și pasionat" },
];

export default function ProgramTarifePage() {
  return (
    <div className="pt-28 pb-20 bg-white/80 min-h-screen">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-6">
          Program & Tarife
        </h1>
        <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
          Flexibilitate pentru fiecare familie. Alege programul care se potrivește
          nevoilor tale — de la program scurt până la program lung, cu activități
          educaționale incluse.
        </p>
      </div>

      {/* Traditional — Creșă & Grădiniță */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-3">
            Traditional — Creșă & Grădiniță
          </h2>
          <p className="text-foreground/60 text-lg">
            Pentru copii cu vârste între 1 și 6 ani
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {traditionalPrograms.map((p, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl p-8 shadow-soft border-2 ${
                p.popular ? "border-green-light/40 lg:-translate-y-4" : "border-green-light/15"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-light text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-soft">
                  Cel mai ales
                </div>
              )}
              <h3 className="font-display text-xl font-bold text-green-dark mb-2">
                {p.type}
              </h3>
              <p className="text-foreground/50 text-sm mb-4">⏱ {p.schedule}</p>
              <p className="font-display text-3xl font-bold text-orange-dark mb-6">
                {p.price}
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="w-2 h-2 rounded-full bg-green-light" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center px-6 py-3 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
              >
                Înscrie-te →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Afterschool */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-3">
            Traditional — Afterschool
          </h2>
          <p className="text-foreground/60 text-lg">
            Pentru copii cu vârste între 6 și 12 ani
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {afterschoolPrograms.map((p, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl p-8 shadow-soft border-2 border-orange-light/15"
            >
              <h3 className="font-display text-xl font-bold text-green-dark mb-2">
                {p.type}
              </h3>
              <p className="text-foreground/50 text-sm mb-4">⏱ {p.schedule}</p>
              <p className="font-display text-3xl font-bold text-orange-dark mb-6">
                {p.price}
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="w-2 h-2 rounded-full bg-orange-light" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center px-6 py-3 bg-orange-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-orange-dark rounded-full shadow-soft"
              >
                Înscrie-te →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Included activities */}
      <div className="bg-white/80 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-green-dark mb-4">
              Activități incluse
            </h2>
            <p className="text-foreground/60 text-lg">
              Toate programele includ acces la activitățile noastre
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedActivities.map((a, i) => (
              <div
                key={i}
                className="bg-cream rounded-3xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
              >
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="font-display text-xl font-bold text-green-dark mb-2">
                  {a.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-cream/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Ai întrebări despre program?
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactează-ne pentru detalii, vizite și înscrieri. Te așteptăm cu drag
            să cunoști echipa și spațiul nostru!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
          >
            Contactează-ne →
          </Link>
        </div>
      </div>
    </div>
  );
}
