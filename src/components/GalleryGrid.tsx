"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  cat: string;
};

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevImage = useCallback(
    () =>
      setLightbox((prev) =>
        prev === null ? null : (prev - 1 + items.length) % items.length
      ),
    [items.length]
  );
  const nextImage = useCallback(
    () =>
      setLightbox((prev) =>
        prev === null ? null : (prev + 1) % items.length
      ),
    [items.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightbox, closeLightbox, prevImage, nextImage]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="group relative bg-cream rounded-xl overflow-hidden shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg cursor-pointer"
          >
            <div className="relative w-full h-48 flex items-center justify-center">
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-center text-xs font-bold text-green-dark uppercase tracking-wider py-2">
              {item.cat}
            </p>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl hover:text-orange-light transition-colors z-10"
            aria-label="Închide"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white text-4xl hover:text-orange-light transition-colors z-10"
            aria-label="Imaginea anterioară"
          >
            ‹
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] mx-12"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[lightbox].src}
              alt={items[lightbox].alt}
              width={1200}
              height={900}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-sm">
              {items[lightbox].alt}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white text-4xl hover:text-orange-light transition-colors z-10"
            aria-label="Imaginea următoare"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
