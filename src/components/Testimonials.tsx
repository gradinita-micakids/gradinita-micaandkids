"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Ana M.",
    role: "Mamă, fiica de 3 ani",
    text: "Mica and Kids a transformat complet experiența grădiniței pentru fetița mea. Activitățile în aer liber sunt exact ce îmi doream!",
    rating: 5,
  },
  {
    name: "Cristian P.",
    role: "Tată, fiu de 5 ani",
    text: "Echipa este extraordinară — plină de empatie și profesionalism. Copilul meu abia așteaptă să meargă la grădiniță în fiecare dimineață.",
    rating: 5,
  },
  {
    name: "Elena R.",
    role: "Mamă, twins de 4 ani",
    text: "Conceptul outdoor-first este genial. Copiii învață despre natură, animale și se dezvoltă armonios. Recomand cu toată încrederea!",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-green-dark mb-4">
            Ce spun părinții
          </h2>
          <p className="text-foreground/60 text-lg">
            Încrederea familiilor noastre este cel mai important lucru
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-cream rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-yellow text-xl">★</span>
                ))}
              </div>
              <p className="text-foreground/70 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold text-green-dark">{t.name}</p>
                <p className="text-sm text-foreground/50">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
