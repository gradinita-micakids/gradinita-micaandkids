"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Învățare prin joacă în aer liber",
    text: "Activitățile noastre interactive se desfășoară în exterior — inclusiv servirea meselor. Copiii explorează, se joacă și învață prin experiențe directe, nu din cărți.",
    image: "/images/galerie/activitati-creative-copii-gradinita.webp",
    cta: "Despre noi",
    href: "/despre-noi",
    reverse: false,
  },
  {
    title: "Conexiune cu natura și animalele",
    text: "Copiii învață responsabilitate prin grija oferită animalelor. Grădina, animalele și activitățile în aer liber sunt pilonii educației noastre.",
    image: "/images/galerie/gradina-natura-popesti-leordeni.webp",
    cta: "Vezi galeria",
    href: "/galerie",
    reverse: true,
  },
  {
    title: "Echipa noastră — empatie și profesionalism",
    text: "Ne bazăm pe implicare totală, iubire față de copii și personal ghidat de empatie, flexibilitate și profesionalism. Fiecare copil este unic și merită atenție individuală.",
    image: "/images/mascota/albinuta.webp",
    contain: true,
    cta: "Contactează-ne",
    href: "/contact",
    reverse: false,
  },
];

export default function ZigZag() {
  return (
    <section className="py-20 bg-white/80">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {sections.map((s, i) => (
          <ZigZagItem key={s.title} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}

function ZigZagItem({ title, text, image, cta, href, reverse, index, contain }: {
  title: string;
  text: string;
  image: string;
  cta: string;
  href: string;
  reverse: boolean;
  index: number;
  contain?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative [direction:ltr]"
      >
        <div className="relative bg-cream rounded-2xl overflow-hidden shadow-soft">
          <div className="relative w-full h-80">
            <Image
              src={image}
              alt={`${title} — grădinița Mica and Kids din Popești Leordeni, Ilfov`}
              width={600}
              height={400}
              className={`w-full h-full ${contain ? "object-contain" : "object-cover"}`}
            />
          </div>
        </div>
        <div className={`absolute -top-4 ${reverse ? "-left-4" : "-right-4"} w-24 h-24 bg-yellow/20 rounded-full blur-2xl -z-10`} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
        className="[direction:ltr]"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
          {title}
        </h2>
        <p className="text-foreground/70 text-lg leading-relaxed mb-8">
          {text}
        </p>
        <Link
          href={href}
          className="inline-block px-8 py-4 bg-orange-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-orange-dark rounded-full shadow-soft"
        >
          {cta} →
        </Link>
      </motion.div>
    </div>
  );
}
