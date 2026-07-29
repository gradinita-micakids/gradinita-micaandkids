import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Galerie — Mica and Kids",
  description:
    "O privire în universul Mica and Kids — activități în aer liber, natură, animale și multă bucurie.",
};

const galleryItems = [
  { src: "/images/reference/baby-1.png", alt: "Creșă — cei mici", cat: "Creșă" },
  { src: "/images/reference/girl-4.png", alt: "Grădiniță — activități", cat: "Grădiniță" },
  { src: "/images/reference/skater-1.png", alt: "Afterschool — mișcare", cat: "Afterschool" },
  { src: "/images/reference/about-first.png", alt: "Natură și explorare", cat: "Natură" },
  { src: "/images/reference/services-header.png", alt: "Activități în aer liber", cat: "Activități" },
  { src: "/images/reference/doctor.png", alt: "Echipa noastră", cat: "Echipa" },
  { src: "/images/reference/stab-img.png", alt: "Spațiul nostru", cat: "Spațiu" },
  { src: "/images/reference/render-final.png", alt: "Aventură educațională", cat: "Natură" },
  { src: "/images/mascota/Mica Albinuța Dansatoarea.png", alt: "Mascota Mica dansând", cat: "Mascota" },
  { src: "/images/mascota/Mica Albinuța pictor.png", alt: "Mascota Mica pictând", cat: "Mascota" },
  { src: "/images/mascota/Mica Albinuța se joacă.png", alt: "Mascota Mica jucându-se", cat: "Mascota" },
  { src: "/images/reference/finger.png", alt: "Detalii mici", cat: "Activități" },
];

export default function GaleriePage() {
  return (
    <div className="pt-28 pb-20 bg-white/80 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-4">
            Galerie
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            O privire în universul Mica and Kids — activități în aer liber,
            natură, animale și multă bucurie.
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
