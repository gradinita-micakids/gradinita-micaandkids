import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog — Sfaturi pentru părinți",
  description:
    "Articole educaționale pentru părinți: cum să alegi grădinița, beneficiile jocului în aer liber, pregătirea pentru școală și activități pentru copii.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Sfaturi pentru părinți",
    description:
      "Articole educaționale pentru părinți despre grădiniță, educație preșcolară și dezvoltarea copilului.",
    url: "https://gradinitamicaandkids.ro/blog",
    images: ["/images/og-default.webp"],
  },
};

const articles = [
  {
    slug: "/blog/cum-alegi-gradinita",
    title: "Cum să alegi grădinița potrivită pentru copilul tău",
    excerpt:
      "Ghid practic pentru părinți: ce contează cu adevărat, ce să verifici la vizită și ce întrebări să pui.",
    date: "15 ianuarie 2026",
    category: "Ghid pentru părinți",
  },
  {
    slug: "/blog/beneficiile-jocului-in-aer-liber",
    title: "Beneficiile jocului în aer liber pentru copii",
    excerpt:
      "De ce au copiii nevoie de joacă outdoor în fiecare zi. Beneficii pentru dezvoltare, sănătate, somn și concentrare.",
    date: "20 ianuarie 2026",
    category: "Educație & Dezvoltare",
  },
  {
    slug: "/blog/pregatirea-pentru-scoala",
    title: "Pregătirea pentru școală — ce contează cu adevărat",
    excerpt:
      "Pregătirea pentru școală nu înseamnă citit la 5 ani. Ce abilități are nevoie copilul și cum se construiesc.",
    date: "25 ianuarie 2026",
    category: "Tranziția grădiniță → școală",
  },
  {
    slug: "/blog/activitati-senzoriale-copii",
    title: "Activități senzoriale pentru copii — ghid practic",
    excerpt:
      "Ce sunt activitățile senzoriale, de ce contează pentru dezvoltare și 5 idei pe care le poți face acasă.",
    date: "1 februarie 2026",
    category: "Dezvoltare & Joacă",
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />

      <div className="max-w-6xl mx-auto px-6 mb-16">
        <p className="text-green-light text-sm font-bold uppercase tracking-[0.2em] mb-4">
          Mica and Kids · Blog
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-green-dark mb-6 leading-tight">
          Sfaturi pentru părinți
        </h1>
        <p className="text-foreground/60 text-lg leading-relaxed max-w-2xl">
          Articole despre educația preșcolară, dezvoltarea copilului și
          viața de părinte. Scrise din experiența noastră de la grădinița
          Mica and Kids din Popești Leordeni.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={article.slug}
              className="group block bg-cream rounded-3xl p-8 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <p className="text-green-light text-xs font-bold uppercase tracking-wider mb-3">
                {article.category}
              </p>
              <h2 className="font-display text-xl font-bold text-green-dark mb-3 group-hover:text-green-light transition-colors">
                {article.title}
              </h2>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <p className="text-foreground/40 text-xs">{article.date}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="py-16 bg-cream/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Vino să ne cunoști
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Dacă ai întrebări despre grădinița noastră din Popești Leordeni,
            te așteptăm să ne vizitezi.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
          >
            Programează o vizită →
          </Link>
        </div>
      </div>
    </>
  );
}
