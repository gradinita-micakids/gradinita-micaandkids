import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import GalleryGrid from "@/components/GalleryGrid";

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
    images: ["/images/galerie/activitati-creative-copii-gradinita.webp"],
  },
};

const galleryItems = [
  { src: "/images/galerie/mica-exterior1.webp", alt: "Exteriorul grădiniței Mica and Kids din Popești Leordeni — curte și spațiu verde pentru copii", cat: "Spațiu" },
  { src: "/images/galerie/mica-exterior2.webp", alt: "Curtea exterioară a grădiniței Mica and Kids din Popești Leordeni — zonă de joacă în aer liber", cat: "Spațiu" },
  { src: "/images/galerie/activitati-creative-copii-gradinita.webp", alt: "Activități creative pentru copii la grădinița Mica and Kids Popești Leordeni — ateliere de pictură și manualități", cat: "Activități" },
  { src: "/images/galerie/joaca-aer-liber-gradinita-popesti-leordeni.webp", alt: "Copii jucându-se în aer liber la grădinița Mica and Kids din Popești Leordeni, Ilfov", cat: "Aer liber" },
  { src: "/images/galerie/explorare-natura-copii-gradinita.webp", alt: "Explorare în natură pentru copii la grădinița Mica and Kids Popești Leordeni — activități educative outdoor", cat: "Natură" },
  { src: "/images/galerie/curte-gradinita-popesti-leordeni.webp", alt: "Curtea grădiniței Mica and Kids din Popești Leordeni — spațiu verde pentru joacă și învățare", cat: "Spațiu" },
  { src: "/images/galerie/animale-copii-gradinita-mica-kids.webp", alt: "Copii interacționând cu animale la grădinița Mica and Kids Popești Leordeni — activități cu animale", cat: "Natură" },
  { src: "/images/galerie/activitati-senzoriale-copii.webp", alt: "Activități senzoriale pentru copii la grădinița Mica and Kids Popești Leordeni — dezvoltare prin simțuri", cat: "Activități" },
  { src: "/images/galerie/joaca-gradinita-popeesti-leordeni.webp", alt: "Joacă structurată la grădinița Mica and Kids Popești Leordeni — învățare prin joc", cat: "Grădiniță" },
  { src: "/images/galerie/petreceri-gradinita-mica-kids.webp", alt: "Petreceri tematice pentru copii la grădinița Mica and Kids Popești Leordeni — evenimente și sărbători", cat: "Petreceri" },
  { src: "/images/galerie/gradinita-natura-popeesti-leordeni.webp", alt: "Grădinița Mica and Kids Popești Leordeni — activități în natură și grădinărit pentru copii", cat: "Natură" },
  { src: "/images/galerie/activitati-aer-liber-gradinita.webp", alt: "Activități în aer liber la grădinița Mica and Kids din Popești Leordeni — mișcare și sport pentru copii", cat: "Aer liber" },
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

        <GalleryGrid items={galleryItems} />
      </div>
    </div>
  );
}
