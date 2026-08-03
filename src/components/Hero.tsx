"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const startVideo = () => {
      setVideoReady(true);
      const v = videoRef.current;
      if (v) {
        v.load();
        v.play().catch(() => {});
      }
    };

    window.addEventListener("preloader-done", startVideo, { once: true });
    const fallback = setTimeout(startVideo, 2500);

    return () => {
      window.removeEventListener("preloader-done", startVideo);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-white/80">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Title + text */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-green-light text-sm font-bold uppercase tracking-[0.2em] mb-4"
            >
              Creșă · Grădiniță · Afterschool
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold text-green-dark leading-tight mb-6"
            >
              Grădinița<br />
              <span className="text-orange-dark">Mica and Kids</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Transformăm curiozitatea naturală a copilului în cea mai frumoasă
              aventură educațională, în aer liber și în armonie cu natura.
            </motion.p>
            {/* Buttons — shown inline on desktop, hidden on mobile (reordered below video) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
              >
                Programează o vizită
              </Link>
              <Link
                href="/servicii"
                className="px-8 py-4 border-2 border-green-light text-green-dark text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-light hover:text-white rounded-full"
              >
                Vezi serviciile
              </Link>
            </motion.div>
          </div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center order-2 lg:order-2"
          >
            <div className="relative w-full max-w-[180px] lg:max-w-[280px] mx-auto">
              <video
                ref={videoRef}
                src="/videos/micabun.mp4"
                muted
                loop
                playsInline
                preload="none"
                className={`w-full h-auto object-contain animate-float transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          </motion.div>

          {/* Buttons — mobile only, after video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center order-3 lg:hidden"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-dark rounded-full shadow-soft text-center"
            >
              Programează o vizită
            </Link>
            <Link
              href="/servicii"
              className="px-8 py-4 border-2 border-green-light text-green-dark text-sm font-bold uppercase tracking-wider no-underline transition-all hover:bg-green-light hover:text-white rounded-full text-center"
            >
              Vezi serviciile
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
