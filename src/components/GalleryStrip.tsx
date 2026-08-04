"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/images/galerie/activitati-creative-copii-gradinita.webp", alt: "Activități creative pentru copii la grădinița Mica and Kids Popești Leordeni" },
  { src: "/images/galerie/joaca-aer-liber-gradinita-popesti-leordeni.webp", alt: "Copii jucându-se în aer liber la grădinița Mica and Kids din Popești Leordeni" },
  { src: "/images/galerie/explorare-natura-copii-gradinita.webp", alt: "Explorare în natură pentru copii la grădinița Mica and Kids Popești Leordeni" },
  { src: "/images/galerie/curte-gradinita-popesti-leordeni.webp", alt: "Curtea grădiniței Mica and Kids din Popești Leordeni" },
  { src: "/images/galerie/animale-copii-gradinita-mica-kids.webp", alt: "Copii interacționând cu animale la grădinița Mica and Kids Popești Leordeni" },
  { src: "/images/galerie/echipa-gradinita-mica-kids.webp", alt: "Echipa educatoarelor de la grădinița Mica and Kids Popești Leordeni" },
];

export default function GalleryStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 bg-cream/80">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-green-dark mb-4">
            Galerie
          </h2>
          <p className="text-foreground/60 text-lg">
            O privire în universul Mica and Kids
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow"
            >
              <div className="relative w-full h-40">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/galerie"
            className="inline-block px-8 py-4 border-2 border-green-light text-green-dark text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-light hover:text-white rounded-full"
          >
            Vezi toată galeria →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
