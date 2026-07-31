import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicii — Mica and Kids",
  description:
    "Creșă, grădiniță, afterschool, tabere și excursii. Limbi străine, opționale educaționale și experiențe de tip sleepover.",
};

const services = [
  {
    title: "Creșă",
    age: "1,5-3 ani",
    desc: "Îngrijire afectuoasă și activități stimulative pentru cei mici. Spațiu sigur, curat și modern, cu personal dedicat și empatic.",
    features: ["Program flexibil", "Activități senzoriale", "Alimentație sănătoasă", "Somn ghidat"],
    image: "/images/reference/baby-1.png",
    color: "bg-yellow/10",
    accent: "text-yellow",
  },
  {
    title: "Grădiniță",
    age: "3-6 ani",
    desc: "Învățare prin joacă în aer liber, cu programe educaționale moderne. Conexiune cu natura, animale și activități interactive.",
    features: ["Activități outdoor", "Limbi străine", "Arte și creativitate", "Îngrijire animale"],
    image: "/images/reference/girl-4.png",
    color: "bg-green-light/10",
    accent: "text-green-dark",
  },
  {
    title: "Afterschool",
    age: "6-12 ani",
    desc: "Sprijin pentru teme, activități creative și dezvoltare personală. Un loc unde copiii se simt ca acasă după școală.",
    features: ["Ajutor pentru teme", "Activități creative", "Sport și mișcare", "Socializare"],
    image: "/images/reference/skater-1.png",
    color: "bg-orange-light/10",
    accent: "text-orange-dark",
  },
  {
    title: "Tabere & Excursii",
    age: "Toate vârstele",
    desc: "Aventuri în natură, tabere tematice și experiențe de tip sleepover. Copiii descoperă lumea într-un mod sigur și distractiv.",
    features: ["Tabere de vară", "Excursii educaționale", "Sleepover", "Activități în natură"],
    image: "/images/reference/about-first.png",
    color: "bg-blue/10",
    accent: "text-blue",
  },
];

export default function ServiciiPage() {
  return (
    <div className="pt-28 pb-20 bg-white/80 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-4">
            Serviciile noastre
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Mai mult decât o instituție de învățământ — un brand inovativ, orientat
            spre trenduri internaționale, creativitate și bune maniere.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={`relative ${s.color} rounded-3xl p-8 shadow-soft [direction:ltr]`}>
                <div className="relative w-full h-64 flex items-center justify-center">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={350}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="[direction:ltr]">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className={`font-display text-3xl font-bold ${s.accent}`}>
                    {s.title}
                  </h2>
                  <span className={`text-sm font-bold ${s.accent} bg-white px-3 py-1 rounded-full shadow-soft`}>
                    {s.age}
                  </span>
                </div>
                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                  {s.desc}
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className={`w-2 h-2 rounded-full ${s.accent.replace("text-", "bg-")}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
                >
                  Înscrie-te →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
