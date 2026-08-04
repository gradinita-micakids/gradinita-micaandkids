import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Galerie Grădiniță Popești Leordeni",
  description:
    "O privire în universul Mica and Kids din Popești Leordeni — activități în aer liber, natură, animale și multă bucurie.",
  alternates: { canonical: "/galerie" },
  openGraph: {
    title: "Galerie — Grădiniță Popești Leordeni | Mica and Kids",
    description:
      "Activități în aer liber, natură, animale și multă bucurie în Popești Leordeni, Ilfov.",
    url: "https://gradinitamicaandkids.ro/galerie",
    images: ["/images/mascota/albinuta.webp"],
  },
};

const galleryItems = [
  { src: "/images/reference/baby-1.png", alt: "Creșă Mica and Kids — îngrijire copii mici în Popești Leordeni", cat: "Creșă" },
  { src: "/images/reference/girl-4.png", alt: "Grădiniță Mica and Kids — activități educaționale în aer liber Popești Leordeni", cat: "Grădiniță" },
  { src: "/images/reference/skater-1.png", alt: "Afterschool Mica and Kids — sport și mișcare pentru copii Popești Leordeni", cat: "Afterschool" },
  { src: "/images/reference/about-first.png", alt: "Natură și explorare — activități outdoor pentru copii la grădinița Mica and Kids Popești Leordeni", cat: "Natură" },
  { src: "/images/reference/services-header.png", alt: "Activități în aer liber la grădinița Mica and Kids din Popești Leordeni", cat: "Activități" },
  { src: "/images/reference/doctor.png", alt: "Echipa dedicată Mica and Kids — personal calificat pentru copii Popești Leordeni", cat: "Echipa" },
  { src: "/images/reference/stab-img.png", alt: "Spațiul grădiniței Mica and Kids — mediu sigur și modern în Popești Leordeni", cat: "Spațiu" },
  { src: "/images/reference/render-final.png", alt: "Aventură educațională în natură la grădinița Mica and Kids Popești Leordeni", cat: "Natură" },
  { src: "/images/mascota/albinuta.webp", alt: "Albinuța Mica — mascota grădiniței Mica and Kids Popești Leordeni", cat: "Mascota" },
  { src: "/images/mascota/Mica Albinuța pictor.png", alt: "Albinuța Mica pictând — activități creative la grădinița Mica and Kids Popești Leordeni", cat: "Mascota" },
  { src: "/images/mascota/Mica Albinuța se joacă.png", alt: "Albinuța Mica jucându-se — învățare prin joacă la grădinița Mica and Kids Popești Leordeni", cat: "Mascota" },
  { src: "/images/reference/finger.png", alt: "Activități senzoriale pentru copii la grădinița Mica and Kids Popești Leordeni", cat: "Activități" },
];

export default function GaleriePage() {
  const galleryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Galerie Mica and Kids — Popești Leordeni",
    description:
      "Activități în aer liber, natură, animale și multă bucurie la Mica and Kids Popești Leordeni.",
    url: "https://gradinitamicaandkids.ro/galerie",
    image: galleryItems.map((item) => ({
      "@type": "ImageObject",
      contentUrl: `https://gradinitamicaandkids.ro${item.src}`,
      description: item.alt,
    })),
  };

  return (
    <div className="pt-28 pb-20 bg-white/80 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />
      <Breadcrumbs items={[{ name: "Galerie", path: "/galerie" }]} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-4">
            Galerie
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            O privire în universul <Link href="/" className="text-green-dark underline hover:text-green-light">Mica and Kids</Link> — <Link href="/servicii" className="text-green-dark underline hover:text-green-light">activități în aer liber</Link>,
            <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light">natură</Link>, <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">animale</a> și multă <Link href="/petreceri" className="text-green-dark underline hover:text-green-light">bucurie</Link>. Activitățile noastre respectă <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">standardele educaționale</a> și <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">reglementările ISJ Ilfov</a>, în <a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">Popești Leordeni</a>.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="group relative bg-cream rounded-2xl p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <div className="relative w-full h-40 flex items-center justify-center mb-3">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-center text-xs font-bold text-green-dark uppercase tracking-wider">
                {item.cat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
