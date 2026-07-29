"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Creșă",
    desc: "Îngrijire afectuoasă și activități stimulative pentru cei mici, de la 1 an.",
    image: "/images/reference/baby-1.png",
    color: "bg-yellow/10",
    accent: "text-yellow",
  },
  {
    title: "Grădiniță",
    desc: "Învățare prin joacă în aer liber, cu programe educaționale moderne.",
    image: "/images/reference/girl-4.png",
    color: "bg-green-light/10",
    accent: "text-green-dark",
  },
  {
    title: "Afterschool",
    desc: "Sprijin pentru teme, activități creative și dezvoltare personală.",
    image: "/images/reference/skater-1.png",
    color: "bg-orange-light/10",
    accent: "text-orange-dark",
  },
  {
    title: "Tabere & Excursii",
    desc: "Aventuri în natură, tabere și experiențe de tip sleepover.",
    image: "/images/reference/about-first.png",
    color: "bg-blue/10",
    accent: "text-blue",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pt-8 pb-20 bg-cream/80">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-green-dark mb-4">
            Serviciile noastre
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Mai mult decât o instituție de învățământ — un brand inovativ, orientat spre
            trenduri internaționale, creativitate și bune maniere.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`group relative ${s.color} rounded-3xl p-8 cursor-pointer shadow-soft hover:shadow-soft-lg transition-shadow`}
            >
              <div className="relative w-full h-40 mb-6 flex items-center justify-center">
                <Image
                  src={s.image}
                  alt={s.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className={`font-display text-xl font-bold ${s.accent} mb-2`}>
                {s.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                {s.desc}
              </p>
              <Link
                href="/servicii"
                className={`text-sm font-bold ${s.accent} no-underline hover:underline`}
              >
                Află mai mult →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
