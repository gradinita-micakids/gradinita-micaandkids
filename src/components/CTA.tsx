"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-light/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-light/10 rounded-full blur-3xl" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-48 h-48 mx-auto mb-8"
        >
          <Image
            src="/images/mascota/Mica Albinuța Dansatoarea.png"
            alt="Mica — mascota"
            width={200}
            height={200}
            className="w-full h-full object-contain animate-float"
          />
        </motion.div>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-green-dark mb-6">
          Hai să ne cunoaștem!
        </h2>
        <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Programează o vizită și descoperă spațiul nostru curat, modern și sigur.
          Te așteptăm cu drag să cunoști echipa și să vezi cum copiii noștri
          învață prin joacă în natură.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
          >
            Programează o vizită
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-orange-light text-orange-dark text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-orange-light hover:text-white rounded-full"
          >
            Înscrie-te acum
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
